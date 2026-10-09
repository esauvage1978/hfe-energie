import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/adoucisseur_co2/hero.jpg",
  alt: "Adoucisseur au CO₂ installé par HFE Hecker & Frères Énergie — bouteille de CO₂ alimentaire et injecteur sur réseau d'eau",
  width: 1024,
  height: 896,
};

const heroImageEn: ProjectImage = {
  src: "/projet/adoucisseur_co2/hero.jpg",
  alt: "CO₂ water softener installed by HFE Hecker & Frères Énergie — food-grade CO₂ cylinder and injector on water supply",
  width: 1024,
  height: 896,
};

const fr = {
  seo: {
    title: "Installation adoucisseur au CO₂ à Lille | SoluCalc — HFE",
    description:
      "Adoucisseur au CO₂ à Lille et métropole par Hecker & Frères Énergie (HFE). Traitement anti-calcaire sans sel ni rejet d'eau, minéraux préservés. Solution écologique SoluCalc®.",
    keywords: [
      "adoucisseur CO2 Lille",
      "adoucisseur au CO₂ Lille",
      "SoluCalc Lille",
      "anti-calcaire sans sel Lille",
      "traitement eau CO2 alimentaire",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Adoucisseur au CO₂", url: "/realisations/adoucisseur-co2" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Adoucisseur au CO₂",
    description:
      "Une solution innovante qui traite le calcaire sans retirer les minéraux de l'eau — sans sel, sans rejet d'eau. Découvrez les installations réalisées par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Adoucisseur au CO₂ : une technologie écologique",
    paragraphs: [
      "L'adoucisseur au CO₂ est une solution innovante qui traite le calcaire sans retirer les minéraux naturellement présents dans l'eau. L'appareil injecte une faible quantité de dioxyde de carbone alimentaire (CO₂) dans le réseau d'eau.",
      "Au contact du CO₂, le calcaire est transformé en bicarbonate de calcium, une forme soluble qui ne se dépose plus sur les canalisations et les équipements. L'eau conserve ainsi ses propriétés naturelles tout en limitant fortement la formation de tartre.",
      "Cette technologie ne nécessite ni sel ni rejet d'eau lors du traitement, ce qui en fait une solution particulièrement respectueuse de l'environnement. Chez HFE, nous installons principalement SoluCalc®, référence reconnue en adoucissement au CO₂ alimentaire.",
    ],
    advantagesTitle: "Les avantages de l'adoucisseur au CO₂",
    advantages: [
      "Sans sel.",
      "Sans rejet d'eau.",
      "Conservation des minéraux de l'eau.",
      "Réduction des dépôts de tartre.",
    ],
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet d'adoucisseur au CO₂ ?",
    subtitle: "Étude gratuite, devis sous 72h, installation SoluCalc® par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "CO₂ water softener installation in Lille | SoluCalc — HFE",
    description:
      "CO₂ water softener in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Anti-limescale treatment without salt or wastewater, minerals preserved. Eco-friendly SoluCalc® solution.",
    keywords: [
      "CO2 water softener Lille",
      "CO₂ softener Lille",
      "SoluCalc Lille",
      "salt-free limescale treatment Lille",
      "food-grade CO2 water treatment",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "CO₂ water softener", url: "/en/projects/co2-water-softener" },
  ],
  hero: {
    badge: "Our projects",
    title: "CO₂ water softener",
    description:
      "An innovative solution that treats limescale without removing water minerals — no salt, no wastewater. Discover installations completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "CO₂ water softener: eco-friendly technology",
    paragraphs: [
      "The CO₂ water softener is an innovative solution that treats limescale without removing the minerals naturally present in water. The unit injects a small amount of food-grade carbon dioxide (CO₂) into the water supply.",
      "On contact with CO₂, limescale is converted into calcium bicarbonate, a soluble form that no longer deposits on pipework and equipment. Water thus retains its natural properties while strongly limiting scale formation.",
      "This technology requires neither salt nor wastewater during treatment, making it a particularly environmentally friendly solution. At HFE, we mainly install SoluCalc®, a recognised reference in food-grade CO₂ softening.",
    ],
    advantagesTitle: "The advantages of a CO₂ water softener",
    advantages: [
      "No salt.",
      "No wastewater.",
      "Water minerals preserved.",
      "Reduced scale deposits.",
    ],
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a CO₂ water softener project?",
    subtitle: "Free survey, quote within 72 hours, SoluCalc® installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsAdoucisseurCo2Content(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsAdoucisseurCo2Content = ReturnType<typeof getProjectsAdoucisseurCo2Content>;
