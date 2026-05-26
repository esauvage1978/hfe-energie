#!/usr/bin/env node
/**
 * Extrait la photo PAC depuis la maquette WhatsApp et la prépare
 * comme nouvel asset hero. Source : 682x1024 → crop + upscale x2 + sharpen.
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const SRC =
  "C:/Users/emman/.cursor/projects/c-wamp64-www-site-vitrine-hfe-energie/assets/c__Users_emman_AppData_Roaming_Cursor_User_workspaceStorage_7ed4bc0e48b573d7154a1c9e9b62d764_images_WhatsApp_Image_2026-05-16_at_19.13.14-76c0f815-cfa0-40f4-a10f-2607f3a5c28e.png";

const OUT_DIR = path.resolve("public/assets/pompeAChaleur");
const OUT = path.join(OUT_DIR, "pac-hero.jpg");

// Coordonnées du crop (mesurées sur la maquette 682x1024) — on évite la
// colonne de texte à gauche et les boutons du header en haut à droite.
const CROP = { left: 350, top: 100, width: 332, height: 425 };

const TARGET_W = CROP.width * 2;
const TARGET_H = CROP.height * 2;

await mkdir(OUT_DIR, { recursive: true });

const meta = await sharp(SRC)
  .extract(CROP)
  .resize({ width: TARGET_W, height: TARGET_H, kernel: "lanczos3" })
  .sharpen({ sigma: 0.8, m1: 0.4, m2: 0.6 })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(OUT);

process.stdout.write(
  `OK : ${OUT}\n  ${TARGET_W}x${TARGET_H} · ${(meta.size / 1024).toFixed(1)} KB\n`,
);
