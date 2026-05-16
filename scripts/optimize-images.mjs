#!/usr/bin/env node
/**
 * Script d'optimisation des images du site HFE Énergie.
 *
 * Pour chaque image source dans public/assets/**, génère :
 *   - une version WebP (qualité 80)
 *   - une version AVIF (qualité 55)
 *   - éventuellement une version redimensionnée si l'image dépasse maxWidth
 *
 * Les fichiers générés sont placés à côté de l'original :
 *   ex. public/assets/pompeAChaleur/pompeAChaleur.jpg
 *    -> public/assets/pompeAChaleur/pompeAChaleur.webp
 *    -> public/assets/pompeAChaleur/pompeAChaleur.avif
 *
 * Usage : node scripts/optimize-images.mjs
 */

import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "assets");

const VALID_EXT = new Set([".jpg", ".jpeg", ".png"]);
const SKIP_DIRS = new Set(["typographie", "video", "documentCertification"]);

const MAX_WIDTH = 1920;

const WEBP_QUALITY = 80;
const AVIF_QUALITY = 55;

let stats = {
  scanned: 0,
  generated: 0,
  skipped: 0,
  errors: 0,
  originalBytes: 0,
  webpBytes: 0,
  avifBytes: 0,
};

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      await walk(path.join(dir, entry.name));
      continue;
    }
    const filePath = path.join(dir, entry.name);
    const ext = path.extname(entry.name).toLowerCase();
    if (!VALID_EXT.has(ext)) continue;
    await processImage(filePath);
  }
}

async function processImage(filePath) {
  stats.scanned += 1;

  const { dir, name } = path.parse(filePath);
  const webpPath = path.join(dir, `${name}.webp`);
  const avifPath = path.join(dir, `${name}.avif`);

  const original = await stat(filePath);
  stats.originalBytes += original.size;

  if (existsSync(webpPath) && existsSync(avifPath)) {
    stats.skipped += 1;
    const w = await stat(webpPath);
    const a = await stat(avifPath);
    stats.webpBytes += w.size;
    stats.avifBytes += a.size;
    return;
  }

  try {
    const pipeline = sharp(filePath, { failOn: "none" }).rotate();
    const meta = await pipeline.metadata();
    const needsResize = (meta.width ?? 0) > MAX_WIDTH;
    const resized = needsResize
      ? pipeline.clone().resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : pipeline.clone();

    if (!existsSync(webpPath)) {
      await resized
        .clone()
        .webp({ quality: WEBP_QUALITY, effort: 5, smartSubsample: true })
        .toFile(webpPath);
    }
    if (!existsSync(avifPath)) {
      await resized
        .clone()
        .avif({ quality: AVIF_QUALITY, effort: 4 })
        .toFile(avifPath);
    }

    const w = await stat(webpPath);
    const a = await stat(avifPath);
    stats.webpBytes += w.size;
    stats.avifBytes += a.size;
    stats.generated += 1;

    const rel = path.relative(SRC_DIR, filePath).replaceAll("\\", "/");
    process.stdout.write(
      `  ✓ ${rel.padEnd(60)} ${kb(original.size)} → webp ${kb(w.size)} · avif ${kb(a.size)}\n`,
    );
  } catch (err) {
    stats.errors += 1;
    process.stderr.write(`  ✗ ${filePath} - ${(err && err.message) || err}\n`);
  }
}

function kb(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  if (!existsSync(SRC_DIR)) {
    process.stderr.write(`Source directory not found: ${SRC_DIR}\n`);
    process.exit(1);
  }

  process.stdout.write(`Optimisation des images dans ${SRC_DIR}\n\n`);
  await walk(SRC_DIR);

  process.stdout.write(`\n────────────────────────────────────────\n`);
  process.stdout.write(`  Images scannées : ${stats.scanned}\n`);
  process.stdout.write(`  Générées        : ${stats.generated}\n`);
  process.stdout.write(`  Déjà existantes : ${stats.skipped}\n`);
  process.stdout.write(`  Erreurs         : ${stats.errors}\n`);
  process.stdout.write(`────────────────────────────────────────\n`);
  process.stdout.write(`  Total original  : ${kb(stats.originalBytes)}\n`);
  process.stdout.write(`  Total WebP      : ${kb(stats.webpBytes)}  (-${pct(stats.originalBytes, stats.webpBytes)})\n`);
  process.stdout.write(`  Total AVIF      : ${kb(stats.avifBytes)}  (-${pct(stats.originalBytes, stats.avifBytes)})\n`);
}

function pct(orig, opt) {
  if (orig === 0) return "0 %";
  return `${Math.round(((orig - opt) / orig) * 100)} %`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
