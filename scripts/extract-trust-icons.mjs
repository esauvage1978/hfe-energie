#!/usr/bin/env node
/**
 * Extrait les 4 icônes de la trust bar depuis la capture d'écran de référence
 * (icônes en contour vert, sans cercle, taille bold). Coordonnées détectées
 * automatiquement par analyse de composantes connexes vertes — image source
 * 932×98.
 * - Crop 60×60 centré sur chaque pictogramme avec marge ≈8px
 * - Upscale x5 (Lanczos3) pour densité retina
 * - Conversion blanc → alpha pour intégration sur n'importe quel fond
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const SRC =
  "C:/Users/emman/.cursor/projects/c-wamp64-www-site-vitrine-hfe-energie/assets/c__Users_emman_AppData_Roaming_Cursor_User_workspaceStorage_7ed4bc0e48b573d7154a1c9e9b62d764_images_image-c1f15979-d74f-4b1d-8a90-ff6c38970212.png";

const OUT_DIR = path.resolve("public/assets/icons-trust");
await mkdir(OUT_DIR, { recursive: true });

// Coordonnées centrées (détection auto sur la maquette 932×98).
// Toutes en 60×60 pour rendu visuel homogène.
const ICONS = [
  { name: "shield",     left: 5,   top: 21 },
  { name: "award",      left: 265, top: 21 },
  { name: "piggy-bank", left: 492, top: 21 },
  { name: "map-pin",    left: 719, top: 22 },
];
const SIZE = 60;

const SCALE = 5;

/**
 * Convertit le fond blanc/quasi-blanc en transparence pour que l'icône
 * s'intègre proprement sur n'importe quel fond.
 */
async function whiteToAlpha(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Plus le pixel est clair, plus on le rend transparent (alpha = darkness).
    const lum = (r + g + b) / 3;
    if (lum > 245) data[i + 3] = 0;
    else if (lum > 230) data[i + 3] = Math.round((245 - lum) * 17);
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

for (const { name, left, top } of ICONS) {
  const out = path.join(OUT_DIR, `${name}.png`);
  const cropped = await sharp(SRC)
    .extract({ left, top, width: SIZE, height: SIZE })
    .resize({ width: SIZE * SCALE, height: SIZE * SCALE, kernel: "lanczos3" })
    .png()
    .toBuffer();
  const finalBuf = await whiteToAlpha(cropped);
  await sharp(finalBuf).toFile(out);
  process.stdout.write(
    `✓ ${name.padEnd(11)} crop ${SIZE}x${SIZE} @ (${left},${top}) → ${SIZE * SCALE}x${SIZE * SCALE}\n`,
  );
}
