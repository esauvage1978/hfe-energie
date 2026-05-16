#!/usr/bin/env node
/**
 * Génère les favicons et apple-touch-icon à partir du logo officiel HFE.
 *
 * Stratégie :
 *  1. Détecte automatiquement la "flamme" bleue+verte (élément emblématique
 *     du logo) en repérant les pixels colorés les plus à gauche.
 *  2. Découpe un carré centré sur cette flamme.
 *  3. Pose la flamme sur un fond carré arrondi (bleu primary HFE) avec
 *     une marge pour éviter le bord-à-bord, façon "app icon" iOS/Android.
 *  4. Exporte plusieurs tailles + un favicon.svg vectoriel à partir du même
 *     crop encodé en data-URI.
 *
 * Sortie :
 *   - public/favicon.svg              (vectoriel, embed PNG data-URI)
 *   - public/favicon-16.png
 *   - public/favicon-32.png
 *   - public/favicon-48.png
 *   - public/apple-touch-icon.png     (180x180, maskable safe-zone)
 *   - public/icon-192.png             (PWA)
 *   - public/icon-512.png             (PWA)
 */

import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SRC_LOGO = path.join(ROOT, "public", "assets", "logo", "hfe-sansFond.png");
const OUT_DIR = path.join(ROOT, "public");

/** Couleurs HFE — alignées sur global.css */
const HFE_BLUE_HEX = "#0080c0"; // primary-600
const HFE_BLUE_DEEP = "#0060b0"; // primary-800

/**
 * Détecte la bounding-box de la flamme (la partie colorée la plus à gauche).
 *
 * 1. Scanne le logo pour construire un histogramme : pour chaque colonne x,
 *    on compte le nombre de pixels non-blancs non-transparents (en excluant
 *    la zone basse réservée au sous-titre "Hecker & Frères Energie").
 * 2. La flamme correspond au premier "îlot" de colonnes denses partant de
 *    la gauche. On détecte le premier "trou" (colonnes vides) qui sépare
 *    la flamme du H, ce qui donne la frontière droite.
 * 3. On en déduit la bounding-box exacte.
 */
async function detectFlameBox(srcPath) {
  const img = sharp(srcPath).ensureAlpha();
  const meta = await img.metadata();
  const W = meta.width;
  const H = meta.height;
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;

  const yMax = Math.round(H * 0.78); // exclut le sous-titre

  const colHits = new Uint32Array(W);

  for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * ch;
      const a = data[i + 3];
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (a < 30) continue;
      if (r > 235 && g > 235 && b > 235) continue;
      colHits[x] += 1;
    }
  }

  // 1ère colonne non vide depuis la gauche -> début de la flamme
  let leftStart = 0;
  while (leftStart < W && colHits[leftStart] === 0) leftStart++;

  // Cherche le 1er "trou" (séquence consécutive de colonnes quasi-vides)
  // après le début de la flamme : c'est l'espace entre la flamme et le H.
  const EMPTY_THRESHOLD = Math.max(1, Math.round(H * 0.005));
  const GAP_MIN_WIDTH = Math.max(2, Math.round(W * 0.005));
  let rightEnd = W - 1;
  {
    let gap = 0;
    let lastDense = leftStart;
    for (let x = leftStart + 1; x < W; x++) {
      if (colHits[x] <= EMPTY_THRESHOLD) {
        gap++;
        if (gap >= GAP_MIN_WIDTH) {
          rightEnd = lastDense;
          break;
        }
      } else {
        gap = 0;
        lastDense = x;
      }
    }
  }

  // Bounding-box verticale restreinte à la zone [leftStart..rightEnd]
  let minY = H;
  let maxY = 0;
  for (let y = 0; y < yMax; y++) {
    for (let x = leftStart; x <= rightEnd; x++) {
      const i = (y * W + x) * ch;
      const a = data[i + 3];
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (a < 30) continue;
      if (r > 235 && g > 235 && b > 235) continue;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  return {
    left: leftStart,
    top: minY,
    width: rightEnd - leftStart + 1,
    height: maxY - minY + 1,
  };
}

/** Compose la flamme cadrée et centrée sur fond carré arrondi bleu HFE. */
async function makeFlameOnBackground(srcPath, box, finalSize, padding = 0.18) {
  const inner = Math.round(finalSize * (1 - padding * 2));

  const flameBuf = await sharp(srcPath)
    .extract({ left: box.left, top: box.top, width: box.width, height: box.height })
    .resize({
      width: inner,
      height: inner,
      fit: "inside",
      withoutEnlargement: false,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const flameMeta = await sharp(flameBuf).metadata();
  const fw = flameMeta.width ?? inner;
  const fh = flameMeta.height ?? inner;
  const left = Math.round((finalSize - fw) / 2);
  const top = Math.round((finalSize - fh) / 2);

  const radius = Math.round(finalSize * 0.22);
  const bgSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${finalSize}" height="${finalSize}">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="${HFE_BLUE_HEX}"/>
           <stop offset="100%" stop-color="${HFE_BLUE_DEEP}"/>
         </linearGradient>
       </defs>
       <rect width="${finalSize}" height="${finalSize}" rx="${radius}" ry="${radius}" fill="url(#g)"/>
     </svg>`,
  );

  return sharp(bgSvg)
    .composite([{ input: flameBuf, left, top }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Génère un favicon.svg minimal qui embed le PNG 256px en data-URI. */
async function makeSvgFavicon(pngBuffer, outPath) {
  const b64 = pngBuffer.toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <image x="0" y="0" width="256" height="256" href="data:image/png;base64,${b64}"/>
</svg>`;
  await writeFile(outPath, svg, "utf8");
}

const SIZES = [
  { size: 16, name: "favicon-16.png" },
  { size: 32, name: "favicon-32.png" },
  { size: 48, name: "favicon-48.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
];

async function main() {
  process.stdout.write(`Source logo : ${path.relative(ROOT, SRC_LOGO)}\n`);

  const box = await detectFlameBox(SRC_LOGO);
  process.stdout.write(`Flamme détectée : x=${box.left} y=${box.top} w=${box.width} h=${box.height}\n\n`);

  // Base haute résolution servant de source à favicon.svg (data-URI)
  const ref256 = await makeFlameOnBackground(SRC_LOGO, box, 256, 0.16);
  await makeSvgFavicon(ref256, path.join(OUT_DIR, "favicon.svg"));
  process.stdout.write(`Built favicon.svg (vectorielle, 256px embed)\n`);

  // PNG variantes
  for (const t of SIZES) {
    const buf = await makeFlameOnBackground(SRC_LOGO, box, t.size, t.size <= 32 ? 0.08 : 0.16);
    await writeFile(path.join(OUT_DIR, t.name), buf);
    process.stdout.write(`Built ${t.name.padEnd(24)} (${t.size}x${t.size})\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
