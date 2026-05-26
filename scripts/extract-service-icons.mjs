#!/usr/bin/env node
/**
 * Extrait les 4 pictogrammes services depuis la capture de référence :
 * unité PAC extérieure, split clim, radiateur, robinet — tous en contour
 * vert épais, sans aucun fond.
 *
 * Source : 1024×290. Coordonnées détectées automatiquement par analyse de
 * composantes connexes vertes (script .tmp-detect-svc.mjs utilisé pendant
 * le dev), reportées ici en dur.
 *
 * - Crop 150×150 centré sur chaque pictogramme (≥11px de marge garantie)
 * - Upscale x4 (Lanczos3) → PNG 600×600
 * - Conversion blanc → alpha pour intégration sur n'importe quel fond
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const SRC =
  "C:/Users/emman/.cursor/projects/c-wamp64-www-site-vitrine-hfe-energie/assets/c__Users_emman_AppData_Roaming_Cursor_User_workspaceStorage_7ed4bc0e48b573d7154a1c9e9b62d764_images_image-6e22d0ee-0e17-47c6-ab62-90f1c639aeee.png";

const OUT_DIR = path.resolve("public/assets/icons-services");
await mkdir(OUT_DIR, { recursive: true });

// Boîtes englobantes précises (détectées par composantes connexes vertes).
const ICONS = [
  { name: "pac",       x0: 77,  x1: 179, y0: 51, y1: 133 },
  { name: "clim",      x0: 316, x1: 444, y0: 57, y1: 137 },
  { name: "chauffage", x0: 592, x1: 677, y0: 42, y1: 137 },
  { name: "plomberie", x0: 844, x1: 927, y0: 48, y1: 141 },
];

const PAD = 12;        // marge autour de chaque bbox
const OUT_SIZE = 600;  // taille canvas final (carré, pour affichage homogène)
const ICON_MAX = 500;  // dimension max du pictogramme dans le canvas (≈83%)

async function whiteToAlpha(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const lum = (r + g + b) / 3;
    if (lum > 245) data[i + 3] = 0;
    else if (lum > 225) data[i + 3] = Math.round((245 - lum) * 12);
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

for (const { name, x0, x1, y0, y1 } of ICONS) {
  const out = path.join(OUT_DIR, `${name}.png`);
  const left = x0 - PAD, top = y0 - PAD;
  const cropW = x1 - x0 + 2 * PAD;
  const cropH = y1 - y0 + 2 * PAD;

  // Mise à l'échelle en gardant l'aspect-ratio, dimension max = ICON_MAX
  const scale = ICON_MAX / Math.max(cropW, cropH);
  const outW = Math.round(cropW * scale);
  const outH = Math.round(cropH * scale);

  // 1) Crop tight + resize
  const cropped = await sharp(SRC)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width: outW, height: outH, kernel: "lanczos3" })
    .png()
    .toBuffer();

  // 2) Blanc → transparence
  const transparent = await whiteToAlpha(cropped);

  // 3) Centrage dans canvas carré transparent
  await sharp({
    create: {
      width: OUT_SIZE,
      height: OUT_SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: transparent, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(out);

  process.stdout.write(
    `✓ ${name.padEnd(10)} bbox (${cropW}×${cropH}) → ${outW}×${outH} centré dans ${OUT_SIZE}×${OUT_SIZE}\n`,
  );
}
