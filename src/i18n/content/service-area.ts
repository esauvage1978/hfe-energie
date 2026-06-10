import type { Locale } from "../config";
import { pageI18n } from "../utils";

const fr = {
  seo: {
    title: "Zone d'intervention — Lille et 50 km | Hecker & Frères Énergie",
    description:
      "Hecker & Frères Énergie (HFE) intervient dans un rayon de 50 km autour de Lille : pompe à chaleur, climatisation, chauffage et plomberie. Plus de 600 communes desservies en Nord et Pas-de-Calais.",
    keywords: [
      "zone intervention chauffagiste Lille",
      "installateur PAC métropole lilloise",
      "pompe à chaleur Nord Pas-de-Calais",
      "climatisation Roubaix Tourcoing",
      "artisan RGE Lille 50 km",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Zone d'intervention", url: "/zone-intervention" },
  ],
  hero: {
    badge: "Zone d'intervention",
    title: "Nous intervenons dans un rayon de 50 km autour de Lille",
    description:
      "Depuis notre siège au 44 rue Jean sans peur à Lille, Hecker & Frères Énergie (HFE) se déplace chez les particuliers et professionnels pour l'installation, l'entretien et le dépannage de pompes à chaleur, climatisations, systèmes de chauffage et travaux de plomberie.",
    ctaQuote: "Demander un devis gratuit",
    ctaContact: "Nous contacter",
  },
  map: {
    title: "Carte de la zone desservie",
    intro:
      "Le cercle bleu représente notre rayon d'intervention de 50 km, centré sur notre adresse à Lille. Consultez la liste complète des communes ci-dessous ou utilisez la recherche pour vérifier si nous intervenons chez vous.",
    ariaLabel: (radius: number) =>
      `Carte OpenStreetMap montrant un rayon de ${radius} kilomètres autour de Lille, siège de Hecker & Frères Énergie`,
  },
  services: {
    title: "Nos prestations sur l'ensemble de la zone",
    intro:
      "Cette page complète les pages services du site : elle recense toutes les communes où nous nous déplaçons. Pour le détail de chaque métier, consultez nos pages dédiées.",
    items: [
      {
        label: "Pompes à chaleur",
        description: "Installation PAC air-eau et air-air, RGE QualiPAC, aides MaPrimeRénov'",
      },
      {
        label: "Climatisation",
        description: "Climatisation réversible mono-split, multi-split, gainable",
      },
      {
        label: "Chauffage",
        description: "Chaudières, plancher chauffant, radiateurs, entretien",
      },
      {
        label: "Plomberie",
        description: "Dépannage, rénovation salle de bain, adoucisseur, chauffe-eau",
      },
    ],
  },
  list: {
    title: "Communes desservies",
    searchPlaceholder: "Rechercher une commune ou un code postal…",
    noResults: "Aucune commune ne correspond à votre recherche.",
    communeCount: (visible: number, total: number) =>
      visible === total
        ? `${total} communes listées dans un rayon de 50 km`
        : `${visible} commune${visible > 1 ? "s" : ""} trouvée${visible > 1 ? "s" : ""} sur ${total}`,
    distance: (km: number) => `${km.toLocaleString("fr-FR")} km du siège`,
  },
  highlights: {
    title: "Principales villes de la métropole",
    intro:
      "Au-delà de la Métropole Européenne de Lille (MEL), notre zone couvre une large part du département du Nord, du Pas-de-Calais et des communes limitrophes.",
  },
  cta: {
    title: "Votre commune est dans la zone ?",
    subtitle:
      "Demandez votre étude et devis gratuits : nous vous recontactons sous 72 h pour planifier une visite technique.",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quel est exactement votre rayon d'intervention ?",
        answer:
          "Nous intervenons dans un rayon de 50 km autour de notre adresse à Lille (44 rue Jean sans peur, 59800 Lille). Cela couvre la Métropole Européenne de Lille, une grande partie du Nord et du Pas-de-Calais, ainsi que des communes limitrophes de la Somme et de l'Aisne.",
      },
      {
        question: "Intervenez-vous en dehors de la MEL ?",
        answer:
          "Oui. Au-delà des communes de la métropole lilloise, nous nous déplaçons jusqu'à 50 km du siège — par exemple Lens, Béthune, Douai, Arras, Saint-Omer ou Le Cateau-Cambrésis selon les projets. Contactez-nous pour confirmer la faisabilité de votre chantier.",
      },
      {
        question: "Les devis sont-ils gratuits partout dans la zone ?",
        answer:
          "Oui. L'étude thermique, le dimensionnement et le devis sont gratuits et sans engagement pour toute commune située dans notre rayon de 50 km, que vous soyez particulier ou professionnel.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Service area — Lille and 50 km radius | Hecker & Frères Énergie",
    description:
      "Hecker & Frères Énergie (HFE) serves a 50 km radius around Lille: heat pumps, air conditioning, heating and plumbing. Over 600 towns covered across Nord and Pas-de-Calais.",
    keywords: [
      "HFE service area Lille",
      "heat pump installer metropolitan Lille",
      "RGE contractor Nord Pas-de-Calais",
      "air conditioning Roubaix Tourcoing",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Service area", url: "/en/service-area" },
  ],
  hero: {
    badge: "Service area",
    title: "We cover a 50 km radius around Lille",
    description:
      "From our headquarters at 44 rue Jean sans peur in Lille, Hecker & Frères Énergie (HFE) travels to homeowners and businesses for heat pump, air conditioning and heating installation, maintenance and repairs, plus plumbing work.",
    ctaQuote: "Request a free quote",
    ctaContact: "Contact us",
  },
  map: {
    title: "Coverage map",
    intro:
      "The blue circle shows our 50 km service radius centred on our Lille address. Browse the full town list below or use search to check whether we cover your area.",
    ariaLabel: (radius: number) =>
      `OpenStreetMap showing a ${radius} kilometre radius around Lille, headquarters of Hecker & Frères Énergie`,
  },
  services: {
    title: "Services available across the area",
    intro:
      "This page complements our service pages: it lists every town we travel to. For trade-specific details, see the dedicated pages.",
    items: [
      {
        label: "Heat pumps",
        description: "Air-to-water and air-to-air installation, RGE QualiPAC, MaPrimeRénov' grants",
      },
      {
        label: "Air conditioning",
        description: "Reversible AC: mono-split, multi-split, ducted systems",
      },
      {
        label: "Heating",
        description: "Boilers, underfloor heating, radiators, servicing",
      },
      {
        label: "Plumbing",
        description: "Repairs, bathroom renovation, water softeners, water heaters",
      },
    ],
  },
  list: {
    title: "Towns served",
    searchPlaceholder: "Search a town or postcode…",
    noResults: "No town matches your search.",
    communeCount: (visible: number, total: number) =>
      visible === total
        ? `${total} towns listed within a 50 km radius`
        : `${visible} of ${total} towns found`,
    distance: (km: number) => `${km.toLocaleString("en-GB")} km from HQ`,
  },
  highlights: {
    title: "Key cities in the metropolitan area",
    intro:
      "Beyond the European Metropolis of Lille (MEL), our area covers much of Nord, Pas-de-Calais and neighbouring communes.",
  },
  cta: {
    title: "Is your town in our area?",
    subtitle:
      "Request your free study and quote — we reply within 72 hours to schedule a site visit.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What exactly is your service radius?",
        answer:
          "We operate within 50 km of our Lille address (44 rue Jean sans peur, 59800 Lille). This includes the European Metropolis of Lille, much of Nord and Pas-de-Calais, and some neighbouring towns in Somme and Aisne.",
      },
      {
        question: "Do you work outside the MEL?",
        answer:
          "Yes. Beyond metropolitan Lille, we travel up to 50 km from HQ — for example Lens, Béthune, Douai, Arras, Saint-Omer or Le Cateau-Cambrésis depending on the project. Contact us to confirm feasibility.",
      },
      {
        question: "Are quotes free everywhere in the area?",
        answer:
          "Yes. Thermal study, sizing and quotes are free with no obligation for any town within our 50 km radius, whether you are a homeowner or a business.",
      },
    ],
  },
} as const;

const content = { fr, en } as const;

export type ServiceAreaContent = (typeof content)[Locale];

export function getServiceAreaContent(locale: Locale): ServiceAreaContent {
  return content[locale];
}

export function getServiceAreaPage(locale: Locale) {
  const { path } = pageI18n(locale);
  return {
    content: getServiceAreaContent(locale),
    path,
  };
}
