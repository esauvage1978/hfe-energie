/**
 * Avis Google — sans clé API Google, utilisez le mode "manual".
 *
 * manual : éditez src/data/google-reviews.json (voir docs/avis-google.md)
 * widget : iframe d’un service tiers (SociableKIT, Elfsight, etc.) — ils gèrent la connexion Google
 */
export const googleReviewsConfig = {
  mode: "manual" as "manual" | "widget",

  /**
   * Mode widget uniquement : URL de l’iframe fournie par le service (ex. SociableKIT).
   * Laissez vide en mode manual.
   */
  widgetIframeSrc: "",

  /** Hauteur minimale de l’iframe widget */
  widgetMinHeight: 420,
} as const;
