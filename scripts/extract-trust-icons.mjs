#!/usr/bin/env node
/**
 * Extrait les 4 icônes trust bar depuis la bannière source.
 * - Découpe par colonne (4 zones égales) pour éviter les artefacts voisins
 * - Bounding box serrée sur les pixels verts + marge
 * - Trim automatique puis canvas carré centré
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const SRC =
  "C:/Users/emman/.cursor/projects/c-wamp64-www-site-vitrine-hfe-energie/assets/c__Users_emman_AppData_Roaming_Cursor_User_workspaceStorage_7ed4bc0e48b573d7154a1c9e9b62d764_images_ChatGPT_Image_9_juin_2026__14_46_37-f0b664b8-0472-4607-8f65-00c8318dac35.png";

const OUT_DIR = path.resolve("public/assets/icons-trust");
const NAMES = ["shield", "award", "piggy-bank", "map-pin"];
const OUTPUT_SIZE = 256;
const PADDING = 16;
const EXTRA_TOP = 20;

await mkdir(OUT_DIR, { recursive: true });

function isGreen(r, g, b) {
  const lum = (r + g + b) / 3;
  return lum < 242 && g > r + 8 && g > b + 8 && g > 70;
}

async function whiteToAlpha(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = (r + g + b) / 3;
    if (lum > 248) data[i + 3] = 0;
    else if (lum > 235) data[i + 3] = Math.round((248 - lum) * 20);
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toBuffer();
}

async function findBBoxInColumn(raw, imgW, imgH, colIndex, colCount) {
  const x0 = Math.floor((colIndex * imgW) / colCount);
  const x1 = Math.floor(((colIndex + 1) * imgW) / colCount);
  let minX = imgW;
  let maxX = 0;
  let minY = imgH;
  let maxY = 0;

  for (let y = 0; y < imgH; y++) {
    for (let x = x0; x < x1; x++) {
      const i = (y * imgW + x) * 4;
      if (isGreen(raw[i], raw[i + 1], raw[i + 2])) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < minX) return null;

  return {
    left: Math.max(0, minX - PADDING),
    top: Math.max(0, minY - PADDING - EXTRA_TOP),
    width: Math.min(imgW, maxX + PADDING + 1) - Math.max(0, minX - PADDING),
    height: Math.min(imgH, maxY + PADDING + 1) - Math.max(0, minY - PADDING - EXTRA_TOP),
  };
}

async function toSquareIcon(buf) {
  const trimmed = await sharp(buf).trim({ threshold: 10 }).png().toBuffer();
  const meta = await sharp(trimmed).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;
  const size = Math.max(w, h) + 8;
  const left = Math.floor((size - w) / 2);
  const top = Math.floor((size - h) / 2);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: trimmed, left, top }])
    .resize(OUTPUT_SIZE, OUTPUT_SIZE, { kernel: "lanczos3" })
    .png()
    .toBuffer();
}

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const imgW = info.width ?? 1024;
const imgH = info.height ?? 342;

for (let i = 0; i < NAMES.length; i++) {
  const name = NAMES[i];
  const bbox = await findBBoxInColumn(data, imgW, imgH, i, NAMES.length);
  if (!bbox) {
    process.stderr.write(`✗ ${name} — aucun pixel détecté\n`);
    continue;
  }

  const cropped = await sharp(SRC).extract(bbox).png().toBuffer();
  const withAlpha = await whiteToAlpha(cropped);
  const squared = await toSquareIcon(withAlpha);
  const out = path.join(OUT_DIR, `${name}.png`);
  await sharp(squared).toFile(out);

  process.stdout.write(
    `✓ ${name.padEnd(11)} bbox ${bbox.width}x${bbox.height} @ (${bbox.left},${bbox.top}) → ${OUTPUT_SIZE}x${OUTPUT_SIZE}\n`,
  );
}
