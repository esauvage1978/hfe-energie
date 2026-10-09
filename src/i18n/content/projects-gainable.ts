import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/gainable/hero.jpg",
  alt: "Installation d'un système de climatisation gainable : réseau de gaines isolées dans un bâtiment en rénovation",
  width: 1024,
  height: 768,
};

const heroImageEn: ProjectImage = {
  src: "/projet/gainable/hero.jpg",
  alt: "Ducted air conditioning installation: insulated duct network in a building under renovation",
  width: 1024,
  height: 768,
};

const fr = {
  seo: {
    title: "Climatisation gainable à Lille : nos réalisations – HFE",
    description:
      "Installation de système gainable à Lille et métropole par Hecker & Frères Énergie (HFE). Diffusion homogène de l'air, confort discret, économies d'énergie et amélioration du DPE.",
    keywords: [
      "climatisation gainable Lille",
      "système gainable Lille",
      "climatisation réversible gainable Lille",
      "installation gaines climatisation Lille",
      "chauffage gainable Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
    { name: "Climatisation gainable", url: "/realisations/climatisation/gainable" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Climatisation gainable",
    description:
      "Chauffage et climatisation discrets, diffusion homogène de l'air et consommation maîtrisée : découvrez nos installations gainables à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Installation d'un système gainable : performance énergétique et confort discret",
    paragraphs: [
      "L'installation d'un système gainable permet d'améliorer la performance énergétique et le confort des logements. Grâce à une diffusion homogène de l'air par un réseau de gaines discret, il assure un chauffage et une climatisation efficaces tout en limitant les consommations d'énergie.",
      "Le climatiseur est dissimulé dans les combles ou le faux-plafond. L'air traité est distribué dans chaque pièce via des bouches discrètes intégrées au plafond ou au sol, sans unité murale visible. La température reste homogène dans tout le logement, été comme hiver.",
      "Cette solution s'intègre idéalement en construction neuve ou lors d'une rénovation lourde, lorsque le faux-plafond ou les combles permettent de faire circuler le réseau de gaines isolées. Elle préserve l'esthétique des pièces tout en offrant un confort thermique performant.",
      "En améliorant l'efficacité énergétique du logement, le système gainable contribue à l'amélioration du DPE et valorise le bien. HFE Hecker Frères Énergie vous accompagne dans l'étude, la fourniture et la pose de votre installation gainable pour un résultat fiable et durable.",
    ],
    advantagesTitle: "Les avantages du système gainable",
    advantages: [
      "Diffusion homogène de l'air dans tout le logement.",
      "Aucune unité murale visible dans les pièces.",
      "Chauffage et climatisation efficaces avec une seule centrale.",
      "Consommation d'énergie maîtrisée grâce à la régulation par zones.",
      "Bouches discrètes intégrées au plafond ou au sol.",
      "Contribution à l'amélioration du DPE et à la valorisation du logement.",
    ],
    image: {
      src: "/projet/gainable/bouches.jpg",
      alt: "Bouches de soufflage discrètes d'une climatisation gainable intégrées au mur — confort invisible par Hecker & Frères Énergie (HFE)",
      width: 1024,
      height: 986,
    },
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de climatisation gainable ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Ducted air conditioning in Lille | Heating & cooling — HFE",
    description:
      "Ducted system installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Even air distribution, discreet comfort, energy savings and improved EPC rating.",
    keywords: [
      "ducted air conditioning Lille",
      "ducted system Lille",
      "reversible ducted AC Lille",
      "ducted AC installation Lille",
      "ducted heating Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
    { name: "Ducted air conditioning", url: "/en/projects/air-conditioning/ducted" },
  ],
  hero: {
    badge: "Our projects",
    title: "Ducted air conditioning",
    description:
      "Discreet heating and cooling, even air distribution and controlled consumption: discover our ducted installations in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Ducted system installation: energy performance and discreet comfort",
    paragraphs: [
      "Installing a ducted system improves the energy performance and comfort of homes. Thanks to even air distribution through a discreet duct network, it provides efficient heating and cooling while limiting energy consumption.",
      "The air conditioning unit is concealed in the loft or false ceiling. Conditioned air is distributed to each room through discreet ceiling or floor vents, with no visible wall units. Temperature remains even throughout the home, summer and winter.",
      "This solution is ideal for new builds or major renovations, when the false ceiling or loft allows an insulated duct network to be installed. It preserves room aesthetics while delivering high-performance thermal comfort.",
      "By improving the home's energy efficiency, a ducted system helps improve the EPC rating and adds value to the property. HFE Hecker Frères Énergie supports you with sizing, supply and installation for a reliable, long-lasting result.",
    ],
    advantagesTitle: "The advantages of ducted systems",
    advantages: [
      "Even air distribution throughout the home.",
      "No visible wall units in the rooms.",
      "Efficient heating and cooling from a single central unit.",
      "Controlled energy consumption with zoned regulation.",
      "Discreet ceiling or floor vents.",
      "Contributes to a better EPC rating and increased property value.",
    ],
    image: {
      src: "/projet/gainable/bouches.jpg",
      alt: "Discreet ducted air conditioning supply vents integrated into the wall — invisible comfort by Hecker & Frères Énergie (HFE)",
      width: 1024,
      height: 986,
    },
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a ducted air conditioning project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsGainableContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsGainableContent = ReturnType<typeof getProjectsGainableContent>;
