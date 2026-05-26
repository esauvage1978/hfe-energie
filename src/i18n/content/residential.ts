import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Particuliers - Pompe à chaleur, climatisation, chauffage à Lille",
    description:
      "HFE Énergie accompagne les particuliers de Lille et métropole : pompe à chaleur, climatisation, remplacement de chaudière, plomberie. Devis gratuit, aides MaPrimeRénov'.",
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Particuliers", url: "/particuliers" },
  ],
  hero: {
    badge: "Particuliers",
    titleBefore: "Votre confort thermique ",
    titleHighlight: "clé en main",
    description:
      "HFE Énergie accompagne les particuliers de Lille et métropole dans tous leurs projets d'énergie renouvelable : pompe à chaleur, climatisation, chauffage, plomberie. Un seul interlocuteur, de l'étude au SAV.",
    ctaQuote: "Demander un devis",
  },
  offers: {
    title: "Nos solutions pour votre maison",
    discover: "Découvrir",
    items: [
      {
        icon: "heat-pump" as const,
        title: "Pompe à chaleur air-eau",
        desc: "Remplacement de chaudière par une PAC air-eau performante, compatible radiateurs ou plancher chauffant.",
        link: "/pompe-a-chaleur",
      },
      {
        icon: "snowflake" as const,
        title: "Climatisation réversible",
        desc: "Confort été comme hiver dans chaque pièce, avec une consommation maîtrisée.",
        link: "/climatisation",
      },
      {
        icon: "droplet" as const,
        title: "Chauffe-eau thermodynamique",
        desc: "Eau chaude sanitaire écologique : jusqu'à 70 % d'économies par rapport à un ballon classique.",
        link: "/pompe-a-chaleur#chauffe-eau-thermodynamique",
      },
      {
        icon: "flame" as const,
        title: "Chaudière à condensation",
        desc: "Remplacement de chaudières anciennes par des modèles à condensation à haut rendement.",
        link: "/chauffage",
      },
      {
        icon: "faucet" as const,
        title: "Plomberie",
        desc: "Dépannage, adoucisseur, ballon d'eau chaude et travaux sanitaires à Lille et métropole.",
        link: "/plomberie",
      },
      {
        icon: "file-text" as const,
        title: "Rénovation salle de bain complète",
        desc: "WC, douche à l'italienne, robinetterie et aménagement sur mesure par nos plombiers.",
        link: "/plomberie",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & entretien",
        desc: "Contrats d'entretien annuels dès 149 € TTC / an pour préserver vos équipements.",
        link: "/contact",
      },
      {
        icon: "euro" as const,
        title: "Accompagnement aides",
        desc: "Montage de dossiers MaPrimeRénov', CEE, ANaH : nous nous occupons de tout.",
        link: "/aides-financement",
      },
    ],
  },
  cta: {
    title: "Lancez votre projet de rénovation énergétique",
    subtitle: "Étude gratuite, conseil personnalisé, accompagnement des aides.",
  },
} as const;

const en = {
  seo: {
    title: "Homeowners - Heat pump, air conditioning, heating in Lille",
    description:
      "HFE Énergie supports homeowners across Lille and the metropolitan area: heat pumps, air conditioning, boiler replacement, plumbing. Free quote, MaPrimeRénov' grants.",
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Homeowners", url: "/en/residential" },
  ],
  hero: {
    badge: "Homeowners",
    titleBefore: "Your thermal comfort, ",
    titleHighlight: "turnkey",
    description:
      "HFE Énergie supports homeowners across Lille and the metropolitan area with all renewable energy projects: heat pumps, air conditioning, heating and plumbing. A single point of contact from survey to after-sales.",
    ctaQuote: "Request a quote",
  },
  offers: {
    title: "Solutions for your home",
    discover: "Find out more",
    items: [
      {
        icon: "heat-pump" as const,
        title: "Air-to-water heat pump",
        desc: "Replace your boiler with a high-performance air-to-water heat pump, compatible with radiators or underfloor heating.",
        link: "/en/heat-pump",
      },
      {
        icon: "snowflake" as const,
        title: "Reversible air conditioning",
        desc: "Summer and winter comfort in every room, with controlled energy consumption.",
        link: "/en/air-conditioning",
      },
      {
        icon: "droplet" as const,
        title: "Thermodynamic water heater",
        desc: "Eco-friendly domestic hot water: up to 70% savings compared with a standard tank.",
        link: "/en/heat-pump#chauffe-eau-thermodynamique",
      },
      {
        icon: "flame" as const,
        title: "Condensing boiler",
        desc: "Replace old boilers with high-efficiency condensing models.",
        link: "/en/heating",
      },
      {
        icon: "faucet" as const,
        title: "Plumbing",
        desc: "Repairs, water softeners, hot water tanks and sanitary work in Lille and the metropolitan area.",
        link: "/en/plumbing",
      },
      {
        icon: "file-text" as const,
        title: "Complete bathroom renovation",
        desc: "Toilets, walk-in showers, taps and bespoke fittings by our plumbing team.",
        link: "/en/plumbing",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & servicing",
        desc: "Annual maintenance contracts from €149 incl. VAT per year to protect your equipment.",
        link: "/en/contact",
      },
      {
        icon: "euro" as const,
        title: "Grant support",
        desc: "MaPrimeRénov', CEE and ANaH applications: we handle everything for you.",
        link: "/en/grants-and-financing",
      },
    ],
  },
  cta: {
    title: "Start your energy renovation project",
    subtitle: "Free assessment, personalised advice and grant support.",
  },
} as const;

export function getResidentialContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ResidentialContent = ReturnType<typeof getResidentialContent>;
