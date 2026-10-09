#!/usr/bin/env node
/**
 * Génère les RedirectMatch (slash final) dans public/.htaccess à partir de dist/*.html
 * Usage : node scripts/generate-slash-redirects.mjs
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const HTACCESS = path.join(ROOT, "public", ".htaccess");

const BEGIN = "# BEGIN AUTO-SLASH-REDIRECTS";
const END = "# END AUTO-SLASH-REDIRECTS";

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
  const redirects = htmlFiles
    .map(toUrlPath)
    .filter((url) => url !== "/")
    .sort()
    .map((url) => {
      const pattern = `^${escapeRegex(url)}/$`;
      return `  RedirectMatch 301 ${pattern} ${url}`;
    });

  const block = [
    BEGIN,
    "# Généré par scripts/generate-slash-redirects.mjs — ne pas éditer à la main",
    "<IfModule mod_alias.c>",
    ...redirects,
    "</IfModule>",
    END,
    "",
  ].join("\n");

  let htaccess = await readFile(HTACCESS, "utf8");
  const re = new RegExp(`${BEGIN}[\\s\\S]*?${END}\\r?\\n?`, "m");
  if (!re.test(htaccess)) {
    htaccess = htaccess.replace(
      /(<IfModule mod_dir\.c>[\s\S]*?<\/IfModule>\r?\n)/,
      `$1\r\n${block}`,
    );
  } else {
    htaccess = htaccess.replace(re, block);
  }

  await writeFile(HTACCESS, htaccess);
  console.log(`✓ ${redirects.length} RedirectMatch injectés dans public/.htaccess`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
