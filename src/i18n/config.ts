export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
};

export const ogLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
