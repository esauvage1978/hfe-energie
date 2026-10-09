#!/usr/bin/env node
/**
 * Liste les anciens dossiers à supprimer sur le FTP après passage au format file.
 * Ces dossiers (ex. climatisation/) provoquent des 404/500 s'ils restent en prod.
 *
 * Usage : node scripts/list-legacy-deploy-dirs.mjs
 */

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const KEEP_DIRS = new Set([
  "_astro",
  "assets",
  "data",
  "en",
  "plomberie",
  "projet",
  "realisations",
  "api",
  "chunks",
]);

async function main() {
  const entries = await readdir(DIST, { withFileTypes: true });
  const legacy = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || KEEP_DIRS.has(entry.name)) continue;
    const htmlPath = path.join(DIST, `${entry.name}.html`);
    try {
      await stat(htmlPath);
      legacy.push(`${entry.name}/`);
    } catch {
      /* pas de .html correspondant à la racine */
    }
  }

  if (legacy.length === 0) {
    console.log("Aucun ancien dossier conflictuel détecté dans dist/.");
    return;
  }

  console.log("Sur le FTP, supprimez ces dossiers (remplacés par des fichiers .html) :\n");
  for (const dir of legacy.sort()) console.log(`  ${dir}`);
  console.log("\nNe supprimez pas : _astro/, assets/, en/, projet/, realisations/, etc.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
