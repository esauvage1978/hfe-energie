import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/drago/hero.jpg",
  alt: "Système DRAGO EF-i25 — anticalcaire sans sel installé par Hecker & Frères Énergie (HFE) à Lille",
  width: 390,
  height: 840,
};

const heroImageEn: ProjectImage = {
  src: "/projet/drago/hero.jpg",
  alt: "DRAGO EF-i25 anti-limescale system — salt-free water treatment by Hecker & Frères Énergie (HFE) in Lille",
  width: 390,
  height: 840,
};

const fr = {
  seo: {
    title: "Système DRAGO anticalcaire à Lille | Traitement d'eau — HFE",
    description:
      "Installation du système DRAGO anticalcaire à Lille et métropole par Hecker & Frères Énergie (HFE). Sans sel, sans électricité, minéraux préservés — protection contre l'entartrage.",
    keywords: [
      "système DRAGO Lille",
      "anticalcaire DRAGO Lille",
      "traitement eau sans sel Lille",
      "adoucisseur physique électronique Lille",
      "anti-tartre maison Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Système DRAGO", url: "/realisations/systeme-drago" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Système DRAGO",
    description:
      "Un dispositif anticalcaire qui modifie le comportement du calcaire sans le retirer de l'eau — sans sel, sans électricité et avec peu d'entretien. Découvrez les installations réalisées par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Système DRAGO : comment ça fonctionne ?",
    paragraphs: [
      "Le système DRAGO est un dispositif anticalcaire qui agit directement sur la structure des cristaux de calcaire présents dans l'eau. Grâce à une technologie spécifique, les particules de calcaire sont modifiées afin qu'elles restent en suspension dans l'eau au lieu de s'accrocher aux parois des canalisations ou aux équipements de chauffage.",
      "Contrairement à un adoucisseur traditionnel, le système DRAGO ne retire pas le calcaire de l'eau. Il en modifie simplement le comportement pour limiter son adhérence et réduire la formation de tartre.",
      "Cette solution ne nécessite ni sel, ni électricité, ni entretien important, tout en conservant l'ensemble des minéraux naturellement présents dans l'eau.",
    ],
    advantagesTitle: "Les avantages du système DRAGO",
    advantages: [
      "Sans sel.",
      "Sans consommation électrique.",
      "Peu d'entretien.",
      "Préservation des minéraux naturels.",
      "Protection des installations contre l'entartrage.",
    ],
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de traitement anticalcaire ?",
    subtitle: "Étude gratuite sur place, devis sous 72h — HFE vous oriente vers la solution adaptée à votre eau.",
  },
} as const;

const en = {
  seo: {
    title: "DRAGO anti-limescale system in Lille | Water treatment — HFE",
    description:
      "DRAGO anti-limescale system installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). No salt, no electricity, minerals preserved — protection against scaling.",
    keywords: [
      "DRAGO system Lille",
      "DRAGO anti-limescale Lille",
      "salt-free water treatment Lille",
      "physical electronic water treatment Lille",
      "home scale prevention Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "DRAGO system", url: "/en/projects/drago-water-treatment" },
  ],
  hero: {
    badge: "Our projects",
    title: "DRAGO system",
    description:
      "An anti-limescale device that changes how limescale behaves without removing it from water — no salt, no electricity and minimal maintenance. Discover installations completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "DRAGO system: how does it work?",
    paragraphs: [
      "The DRAGO system is an anti-limescale device that acts directly on the structure of limescale crystals present in water. Thanks to specific technology, limescale particles are modified so they remain suspended in the water instead of sticking to pipe walls or heating equipment.",
      "Unlike a traditional water softener, the DRAGO system does not remove limescale from water. It simply changes its behaviour to limit adhesion and reduce scale formation.",
      "This solution requires no salt, no electricity and no significant maintenance, while preserving all the minerals naturally present in water.",
    ],
    advantagesTitle: "The advantages of the DRAGO system",
    advantages: [
      "No salt.",
      "No electricity consumption.",
      "Minimal maintenance.",
      "Natural minerals preserved.",
      "Protection of installations against scaling.",
    ],
  },
  cover: heroImageEn,
  cta: {
    title: "Planning an anti-limescale water treatment project?",
    subtitle: "Free on-site survey, quote within 72 hours — HFE will recommend the right solution for your water.",
  },
} as const;

export function getProjectsDragoContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsDragoContent = ReturnType<typeof getProjectsDragoContent>;
