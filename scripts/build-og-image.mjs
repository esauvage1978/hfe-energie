#!/usr/bin/env node
/**
 * Compose une image Open Graph (1200x630) à partir des photos réelles HFE Énergie.
 * Sortie : public/og-image.jpg
 */

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const OUT = path.join(ROOT, "public", "og-image.jpg");
const PAC = path.join(ROOT, "public", "assets", "pompeAChaleur", "pompeAChaleur.jpg");
const LOGO = path.join(ROOT, "public", "assets", "logo", "hfe-sansFond.png");

const W = 1200;
const H = 630;

async function main() {
  const bg = await sharp(PAC)
    .resize(W, H, { fit: "cover", position: "center" })
    .modulate({ brightness: 0.75 })
    .blur(0.5)
    .toBuffer();

  const logoBuf = await sharp(LOGO).resize({ height: 140 }).png().toBuffer();
  const logoMeta = await sharp(logoBuf).metadata();
  const logoW = logoMeta.width ?? 200;
  const logoH = logoMeta.height ?? 140;

  const svgOverlay = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(7,89,133,0.85)"/>
        <stop offset="100%" stop-color="rgba(12,74,110,0.55)"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#fade)"/>
    <text x="60" y="320" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="62" fill="#ffffff">HFE Énergie</text>
    <text x="60" y="385" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="38" fill="#bae6fd">Pompes à chaleur · Climatisation · Chauffage</text>
    <text x="60" y="440" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="26" fill="#e0f2fe">Installateur RGE QualiPAC à Lille &amp; métropole</text>
    <rect x="60" y="490" width="260" height="62" rx="31" fill="#ea580c"/>
    <text x="190" y="531" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="22" fill="#ffffff">DEVIS GRATUIT</text>
    <text x="350" y="528" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="20" fill="#bae6fd">15 ans d'expérience · 1500+ installations</text>
  </svg>
  `;

  const out = await sharp(bg)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: logoBuf, top: 60, left: 60 },
    ])
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toBuffer();

  await sharp(out).toFile(OUT);

  // Also write a webp version next to it for modern crawlers / preloading
  await sharp(out)
    .webp({ quality: 82 })
    .toFile(OUT.replace(/\.jpg$/, ".webp"));

  process.stdout.write(`OG image written : ${OUT}\n`);
  process.stdout.write(`OG image (webp)  : ${OUT.replace(/\.jpg$/, ".webp")}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
