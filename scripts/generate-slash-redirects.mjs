#!/usr/bin/env node
/**
 * Génère, dans public/.htaccess, les redirections 301 des variantes d'URL de
 * chaque page Astro (dist/*.html) vers son URL canonique :
 *   /page/   /page.html   /page.html/   (et www.*)  →  https://hfe-energie.fr/page
 *
 * Les règles sont des RewriteRule (mod_rewrite) à cible ABSOLUE :
 *  - une seule redirection, même depuis www (pas de chaîne www → apex → sans slash) ;
 *  - pas de « :443 » dans l'en-tête Location (Apache ne recompose pas l'URL) ;
 *  - ordre maîtrisé (mod_alias RedirectMatch s'exécutait en dehors de l'ordre
 *    des RewriteRule, d'où des chaînes du type www/page/ → page.html/ → 404).
 *
 * Le bloc est inséré entre les marqueurs BEGIN/END, à l'intérieur du bloc
 * <IfModule mod_rewrite.c> de public/.htaccess.
 *
 * Usage : node scripts/generate-slash-redirects.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const HTACCESS = path.join(ROOT, "public", ".htaccess");

/** Origine canonique (sans slash final). */
const ORIGIN = "https://hfe-energie.fr";

const BEGIN = "# BEGIN AUTO-SLASH-REDIRECTS";
const END = "# END AUTO-SLASH-REDIRECTS";

/** Pages servies uniquement comme ErrorDocument : pas de redirection. */
const EXCLUDED = new Set(["/404", "/en/404"]);

async function walkHtmlFiles(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files.push(...(await walkHtmlFiles(path.join(dir, entry.name), rel)));
      continue;
    }
    if (entry.name.endsWith(".html")) files.push(rel.replace(/\\/g, "/"));
  }
  return files;
}

function toUrlPath(htmlRel) {
  if (htmlRel === "index.html") return "/";
  const withoutExt = htmlRel.replace(/\.html$/, "");
  return `/${withoutExt}`;
}

function escapeRegex(segment) {
  return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function main() {
  const htmlFiles = await walkHtmlFiles(DIST);
  const urls = htmlFiles
    .map(toUrlPath)
    .filter((url) => url !== "/" && !EXCLUDED.has(url))
    .sort();

  const rules = [
    // Accueil : /index, /index.html, /index.html/ → /
    `  RewriteRule ^index(?:\\.html)?/*$ ${ORIGIN}/ [R=301,L]`,
    // Chaque page : /page/ , /page.html , /page.html/ → /page (une seule redirection)
    ...urls.map((url) => {
      const p = escapeRegex(url.slice(1));
      return `  RewriteRule ^${p}(?:\\.html/*|/+)$ ${ORIGIN}${url} [R=301,L]`;
    }),
  ];

  let htaccess = await readFile(HTACCESS, "utf8");
  const eol = htaccess.includes("\r\n") ? "\r\n" : "\n";

  const block = [
    BEGIN,
    "  # Généré par scripts/generate-slash-redirects.mjs — ne pas éditer à la main",
    "  # /page/ , /page.html , /page.html/ (www ou non) → https://hfe-energie.fr/page",
    ...rules,
    `  ${END}`,
    "",
  ].join(eol);

  const re = new RegExp(`[ \\t]*${BEGIN}[\\s\\S]*?${END}[ \\t]*\\r?\\n?`, "m");
  if (re.test(htaccess)) {
    htaccess = htaccess.replace(re, () => `  ${block}`);
  } else if (htaccess.includes("# @AUTO-SLASH-REDIRECTS@")) {
    htaccess = htaccess.replace(/[ \t]*# @AUTO-SLASH-REDIRECTS@[ \t]*\r?\n/, () => `  ${block}`);
  } else {
    throw new Error(
      `Marqueurs ${BEGIN} / ${END} introuvables dans public/.htaccess (à placer dans le bloc mod_rewrite).`,
    );
  }

  await writeFile(HTACCESS, htaccess);
  console.log(`✓ ${rules.length} RewriteRule (variantes /page/, .html) injectées dans public/.htaccess`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
