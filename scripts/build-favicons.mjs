#!/usr/bin/env node
/**
 * Génère les favicons et apple-touch-icon à partir du logo officiel HFE.
 * Sortie :
 *   - public/favicon.svg (kept)
 *   - public/favicon-32.png
 *   - public/favicon-16.png
 *   - public/apple-touch-icon.png (180x180)
 *   - public/icon-192.png (PWA)
 *   - public/icon-512.png (PWA)
 */

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SRC_ICON = path.join(ROOT, "public", "assets", "logo", "hfe-sansFond-sans-ecriture.png");
const OUT_DIR = path.join(ROOT, "public");

const TARGETS = [
  { size: 16, name: "favicon-16.png" },
  { size: 32, name: "favicon-32.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
];

async function main() {
  for (const t of TARGETS) {
    const out = path.join(OUT_DIR, t.name);
    await sharp(SRC_ICON, { failOn: "none" })
      .resize(t.size, t.size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9, palette: t.size <= 32 })
      .toFile(out);
    process.stdout.write(`Built ${t.name} (${t.size}px)\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
