/**
 * Logique partagée — Places API (New), noms complets via authorAttribution.displayName.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const REVIEW_URL = "https://g.page/r/CawB00LcHY7jEAE/review";

export const REVIEW_FIELD_MASK = [
  "id",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews.authorAttribution",
  "reviews.rating",
  "reviews.text",
  "reviews.originalText",
  "reviews.publishTime",
  "reviews.relativePublishTimeDescription",
].join(",");

export function starsFromRating(rating) {
  const n = Math.round(Number(rating) || 0);
  return Math.min(5, Math.max(0, n));
}

/** Nom affiché sur Google Maps (ex. « Marie Dupont »). */
export function authorDisplayName(attribution) {
  const name = attribution?.displayName?.trim();
  return name && name.length > 0 ? name : null;
}

export function mapReviews(place) {
  const list = place.reviews ?? [];
  return list
    .map((r) => {
      const author = authorDisplayName(r.authorAttribution);
      const text = (r.text?.text ?? r.originalText?.text ?? "").trim();
      if (!author || !text) return null;

      return {
        author,
        rating: starsFromRating(r.rating),
        text,
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? new Date().toISOString(),
        authorUri: r.authorAttribution?.uri ?? undefined,
        photoUri: r.authorAttribution?.photoUri ?? undefined,
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime(),
    )
    .slice(0, 5);
}

export async function findPlaceId(apiKey, textQuery, presetPlaceId) {
  if (presetPlaceId?.trim()) return presetPlaceId.trim();

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.googleMapsUri,places.rating,places.userRatingCount",
    },
    body: JSON.stringify({
      textQuery,
      languageCode: "fr",
      regionCode: "FR",
      maxResultCount: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`searchText failed (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  const place = data.places?.[0];
  if (!place?.id) {
    throw new Error(`Aucun établissement trouvé pour « ${textQuery} »`);
  }
  return place.id;
}

export async function fetchPlaceDetails(apiKey, placeId) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": REVIEW_FIELD_MASK,
    },
  });

  if (!res.ok) {
    throw new Error(`place details failed (${res.status}): ${await res.text()}`);
  }

  return res.json();
}

export function buildPayload(place, placeId, previous = {}) {
  const reviews = mapReviews(place);
  return {
    fetchedAt: new Date().toISOString(),
    source: "api",
    placeId,
    rating: Number(place.rating) || previous.rating || 4.9,
    userRatingCount:
      Number(place.userRatingCount) || previous.userRatingCount || 0,
    googleMapsUri:
      place.googleMapsUri ??
      `https://www.google.com/maps/place/?q=place_id:${placeId}`,
    reviewUrl: REVIEW_URL,
    reviews,
  };
}

export function writeReviewsJson(root, payload) {
  const paths = [
    join(root, "src", "data", "google-reviews.json"),
    join(root, "public", "data", "google-reviews.json"),
  ];

  const json = `${JSON.stringify(payload, null, 2)}\n`;
  for (const filePath of paths) {
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, json, "utf8");
  }
}
