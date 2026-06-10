import reviewsData from "./google-reviews.json";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?q=HFE+Pompe+%C3%A0+Chaleur+-+Climatisation,+71+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+59110+La+Madeleine&ftid=0x90e0797ea958d91:0x5f31aec968c997a5";

/** @deprecated Alias conservé pour compatibilité — utiliser GOOGLE_MAPS_URL */
export const GOOGLE_REVIEW_URL = GOOGLE_MAPS_URL;

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
  authorUri?: string;
  photoUri?: string;
};

export type GoogleReviewsData = {
  fetchedAt: string;
  source: "api" | "seed" | "manual";
  placeId: string | null;
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviewUrl: string;
  reviews: GoogleReview[];
};

export const googleReviews = reviewsData as GoogleReviewsData;

/** Avis triés du plus récent au plus ancien (l’API Google renvoie au max 5 avis). */
export function getSortedReviews(limit = 5): GoogleReview[] {
  return [...googleReviews.reviews]
    .sort(
      (a, b) =>
        new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime(),
    )
    .slice(0, limit);
}

export function formatReviewDate(iso: string, locale: "fr" | "en"): string {
  try {
    return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}
