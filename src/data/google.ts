import reviewsData from "./google-reviews.json";

export const GOOGLE_REVIEW_URL = "https://g.page/r/CawB00LcHY7jEAE/review";

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
