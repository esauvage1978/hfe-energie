import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Page introuvable",
    description:
      "La page que vous cherchez n'existe pas. Découvrez nos services de pompe à chaleur, climatisation et chauffage à Lille.",
  },
  imageAlt: "Page introuvable",
  code: "404",
  title: "Cette page est introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Découvrez nos services ou contactez-nous.",
  ctaHome: "Retour à l'accueil",
  ctaHeatPump: "Pompes à chaleur",
  links: {
    home: "/",
    heatPump: "/pompe-a-chaleur",
  },
} as const;

const en = {
  seo: {
    title: "Page not found",
    description:
      "The page you are looking for does not exist. Discover our heat pump, air conditioning and heating services in Lille.",
  },
  imageAlt: "Page not found",
  code: "404",
  title: "This page could not be found",
  description:
    "The page you are looking for does not exist or has been moved. Browse our services or contact us.",
  ctaHome: "Back to home",
  ctaHeatPump: "Heat pumps",
  links: {
    home: "/en",
    heatPump: "/en/heat-pump",
  },
} as const;

export function getNotFoundContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type NotFoundContent = ReturnType<typeof getNotFoundContent>;
