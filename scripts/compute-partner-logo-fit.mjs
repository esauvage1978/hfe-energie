#!/usr/bin/env node
/**
 * Calcule un coefficient `fit` par logo partenaire à partir du contenu réel
 * (pixels non blancs / transparents) pour normaliser le rendu dans LogoCloud.
 *
 * Usage : node scripts/compute-partner-logo-fit.mjs
 */
import sharp from "sharp";
import path from "node:path";

const BOX_ASPECT = 3 / 2;
const SPARSE_THRESHOLD = 0.45;
const TARGET = 0.72;

const logos = [
  { name: "Panasonic", file: "panasonic.png" },
  { name: "LeFroid Pecomark", file: "leFroidPecomark.png" },
  { name: "Daikin", file: "daikin.png" },
  { name: "Mitsubishi Electric", file: "mitsubishi.png" },
  { name: "Atlantic", file: "atlantic.png" },
  { name: "Toshiba", file: "Toshiba.png" },
  { name: "Samsung", file: "samsung.png" },
  { name: "Siemens", file: "siemens.png" },
  { name: "Saunier Duval", file: "saunierDuval.png" },
  { name: "Frisquet", file: "frisquet.png" },
  { name: "De Dietrich", file: "deDietrich.jpg" },
  { name: "Airwell", file: "airwell.jpg" },
  { name: "Cool Smart", file: "coolSmart.png" },
];

const dir = path.resolve("public/assets/partenaires");

function clamp(min, max, v) {
  return Math.min(max, Math.max(min, v));
}

async function analyze({ name, file }) {
  const fp = path.join(dir, file);
  const { data, info } = await sharp(fp).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (a > 20 && lum < 245) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;
  const wRatio = cw / width;
  const hRatio = ch / height;
  const imageAspect = width / height;
  const sparse = Math.min(wRatio, hRatio) < SPARSE_THRESHOLD;

  let fit;
  if (sparse) {
    fit = clamp(0.85, 1.45, TARGET / Math.min(wRatio, hRatio));
  } else if (imageAspect >= BOX_ASPECT) {
    fit = clamp(0.65, 1.05, TARGET / Math.max(wRatio, hRatio));
  } else {
    fit = clamp(0.65, 1.15, TARGET / Math.max(wRatio, hRatio));
  }

  return { name, file, wRatio: +wRatio.toFixed(2), hRatio: +hRatio.toFixed(2), fit: +fit.toFixed(2) };
}

const results = await Promise.all(logos.map(analyze));
for (const r of results) {
  console.log(`${r.name.padEnd(22)} fit: ${String(r.fit).padStart(4)}  (w:${r.wRatio} h:${r.hRatio})`);
}
