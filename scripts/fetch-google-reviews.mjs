/**
 * Récupère les avis Google (noms complets) via Places API (New).
 * @see .env.example
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildPayload,
  fetchPlaceDetails,
  findPlaceId,
  writeReviewsJson,
} from "./google-places-reviews.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcPath = join(root, "src", "data", "google-reviews.json");

const TEXT_QUERY =
  process.env.GOOGLE_PLACE_TEXT_QUERY?.trim() ||
  "Hecker & Frères Énergie (HFE) 44 Rue Jean sans peur 59800 Lille";

function loadEnv() {
  const envPath = join(root, ".env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

async function main() {
  loadEnv();
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey) {
    console.log(
      "[fetch-google-reviews] GOOGLE_PLACES_API_KEY absent — fichier JSON inchangé.\n" +
        "  Créez .env (voir .env.example) puis relancez npm run fetch-google-reviews",
    );
    process.exit(0);
  }

  console.log("[fetch-google-reviews] Recherche de la fiche Google…");
  const placeId = await findPlaceId(
    apiKey,
    TEXT_QUERY,
    process.env.GOOGLE_PLACE_ID,
  );
  console.log(`[fetch-google-reviews] Place ID : ${placeId}`);

  const place = await fetchPlaceDetails(apiKey, placeId);

  let previous = { reviews: [] };
  if (existsSync(srcPath)) {
    try {
      previous = JSON.parse(readFileSync(srcPath, "utf8"));
    } catch {
      /* ignore */
    }
  }

  const payload = buildPayload(place, placeId, previous);

  if (payload.reviews.length === 0) {
    console.warn(
      "[fetch-google-reviews] Aucun avis retourné par l’API — JSON non modifié.",
    );
    process.exit(0);
  }

  writeReviewsJson(root, payload);

  for (const review of payload.reviews) {
    console.log(`  · ${review.author}`);
  }

  console.log(
    `[fetch-google-reviews] ${payload.reviews.length} avis enregistrés (note ${payload.rating}, ${payload.userRatingCount} au total).`,
  );
}

main().catch((err) => {
  console.error("[fetch-google-reviews]", err.message);
  process.exit(1);
});
