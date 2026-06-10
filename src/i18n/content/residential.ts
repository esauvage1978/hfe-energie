import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Particuliers - Pompe à chaleur, climatisation, chauffage à Lille",
    description:
      "Hecker & Frères Énergie (HFE) accompagne les particuliers de Lille et métropole : pompe à chaleur, climatisation, remplacement de chaudière, plomberie. Devis gratuit, aides MaPrimeRénov'.",
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Particuliers", url: "/particuliers" },
  ],
  hero: {
    badge: "Particuliers",
    titleBefore: "Votre confort ",
    titleHighlight: "clé en main",
    titleAfter: ", installé par des professionnels de confiance",
    description:
      "Hecker & Frères Énergie (HFE) accompagne les particuliers de Lille et métropole dans tous leurs projets d'énergie renouvelable : pompe à chaleur, climatisation, chauffage, plomberie. Un seul interlocuteur, de l'étude au SAV.",
    ctaQuote: "Demander un devis",
  },
  offers: {
    title: "Nos solutions pour votre maison",
    discover: "Découvrir",
    items: [
      {
        icon: "heat-pump" as const,
        title: "Pompe à chaleur",
        desc: "Remplacement de chaudière par une PAC performante, compatible radiateurs ou plancher chauffant.",
        link: "/pompe-a-chaleur",
      },
      {
        icon: "euro" as const,
        title: "Accompagnement aides",
        desc: "Montage de dossiers MaPrimeRénov', CEE, ANAH : nous nous occupons de tout.",
        link: "/aides-financement",
      },
      {
        icon: "snowflake" as const,
        title: "Confort 4 saisons",
        desc: "Avec une PAC air-air ou une PAC hybride, vous chauffez l'hiver et, suivant votre installation, vous rafraîchissez l'été.",
        link: "/climatisation",
      },
      {
        icon: "droplet" as const,
        title: "Chauffe-eau thermodynamique",
        desc: "Eau chaude sanitaire écologique : jusqu'à 70 % d'économies par rapport à un ballon classique.",
        link: "/pompe-a-chaleur#chauffe-eau-thermodynamique",
      },
      {
        icon: "file-text" as const,
        title: "Rénovation salle de bain complète",
        desc: "WC, douche à l'italienne, robinetterie et aménagement sur mesure par nos plombiers.",
        link: "/plomberie",
      },
      {
        icon: "faucet" as const,
        title: "Plomberie",
        desc: "Dépannage, ballon d'eau chaude et travaux sanitaires à Lille et métropole.",
        link: "/plomberie",
      },
      {
        icon: "droplet" as const,
        title: "Adoucisseur d'eau",
        desc: "Réduisez le calcaire, protégez vos équipements et améliorez votre confort au quotidien.",
        details: [
          "À sel : efficace contre le calcaire, idéal pour protéger installations et électroménager.",
          "Au CO₂ : limite l’entartrage sans sel, solution simple et faible maintenance.",
          "Drago : traitement physique/électronique, sans sel, sans rejet, discret.",
        ],
        link: "/plomberie",
      },
      {
        icon: "flame" as const,
        title: "Chaudière à condensation",
        desc: "Remplacement de chaudières anciennes par des modèles à condensation à haut rendement.",
        link: "/chauffage",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & entretien",
        desc: "Contrats d'entretien annuels dès 149 € TTC / an pour préserver vos équipements.",
        link: "/contact",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Questions sur l’adoucisseur d’eau",
    intro: "Réponses rapides pour choisir la bonne solution anti-calcaire selon votre logement et vos usages.",
    items: [
      {
        question: "Pourquoi installer un adoucisseur d’eau à Lille et métropole ?",
        answer:
          "L’eau est souvent calcaire dans la région : cela encrasse chauffe-eau, robinets et canalisations, augmente la consommation d’énergie et réduit la durée de vie des équipements. Une solution anti-calcaire améliore le confort (peau, cheveux), limite l’entartrage et protège l’installation.",
      },
      {
        question: "Adoucisseur au sel, CO₂ ou Drago : quelle différence ?",
        answer:
          "Le sel adoucit réellement l’eau (échange d’ions) : très efficace, mais nécessite sel et entretien. Le CO₂ réduit l’entartrage en modifiant l’équilibre calco-carbonique : faible maintenance, sans sel. Le Drago est un traitement physique/électronique : sans sel, sans rejet, mais l’efficacité dépend du contexte (débit, réseau, réglages). Nous vous conseillons selon votre eau et votre installation.",
      },
      {
        question: "L’adoucisseur Drago est-il adapté à tous les logements ?",
        answer:
          "Pas toujours : le Drago fonctionne mieux dans certaines configurations (réseau, débit, emplacement). En cas d’eau très dure ou d’objectifs “anti-calcaire” très élevés, un adoucisseur au sel peut être plus pertinent. On valide la solution après un diagnostic sur place.",
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
      "Hecker & Frères Énergie (HFE) supports homeowners across Lille and the metropolitan area: heat pumps, air conditioning, boiler replacement, plumbing. Free quote, MaPrimeRénov' grants.",
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Homeowners", url: "/en/residential" },
  ],
  hero: {
    badge: "Homeowners",
    titleBefore: "Your ",
    titleHighlight: "turnkey comfort",
    titleAfter: ", installed by trusted professionals",
    description:
      "Hecker & Frères Énergie (HFE) supports homeowners across Lille and the metropolitan area with all renewable energy projects: heat pumps, air conditioning, heating and plumbing. A single point of contact from survey to after-sales.",
    ctaQuote: "Request a quote",
  },
  offers: {
    title: "Solutions for your home",
    discover: "Find out more",
    items: [
      {
        icon: "heat-pump" as const,
        title: "Heat pump",
        desc: "Replace your boiler with a high-performance heat pump, compatible with radiators or underfloor heating.",
        link: "/en/heat-pump",
      },
      {
        icon: "euro" as const,
        title: "Grant support",
        desc: "MaPrimeRénov', CEE and ANAH applications: we handle everything for you.",
        link: "/en/grants-and-financing",
      },
      {
        icon: "snowflake" as const,
        title: "Year-round comfort",
        desc: "With an air-to-air or hybrid heat pump, you heat in winter and, depending on your installation, cool in summer.",
        link: "/en/air-conditioning",
      },
      {
        icon: "droplet" as const,
        title: "Thermodynamic water heater",
        desc: "Eco-friendly domestic hot water: up to 70% savings compared with a standard tank.",
        link: "/en/heat-pump#chauffe-eau-thermodynamique",
      },
      {
        icon: "file-text" as const,
        title: "Complete bathroom renovation",
        desc: "Toilets, walk-in showers, taps and bespoke fittings by our plumbing team.",
        link: "/en/plumbing",
      },
      {
        icon: "faucet" as const,
        title: "Plumbing",
        desc: "Repairs, hot water tanks and sanitary work in Lille and the metropolitan area.",
        link: "/en/plumbing",
      },
      {
        icon: "droplet" as const,
        title: "Water softener",
        desc: "Reduce limescale, protect your equipment and improve everyday comfort.",
        details: [
          "Salt-based: most effective against limescale, protects plumbing and appliances.",
          "CO₂: limits scaling without salt, low-maintenance solution.",
          "Drago: physical/electronic treatment, no salt, no discharge, discreet.",
        ],
        link: "/en/plumbing",
      },
      {
        icon: "flame" as const,
        title: "Condensing boiler",
        desc: "Replace old boilers with high-efficiency condensing models.",
        link: "/en/heating",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & servicing",
        desc: "Annual maintenance contracts from €149 incl. VAT per year to protect your equipment.",
        link: "/en/contact",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Water softener questions",
    intro: "Quick answers to choose the right anti-limescale solution for your home.",
    items: [
      {
        question: "Why install a water softener?",
        answer:
          "Hard water causes limescale build-up in heaters, taps and pipework, increases energy use and shortens equipment lifespan. An anti-limescale solution improves comfort and helps protect your installation.",
      },
      {
        question: "Salt, CO₂ or Drago: what’s the difference?",
        answer:
          "Salt-based softeners truly soften water (ion exchange): very effective but require salt and servicing. CO₂ reduces scaling by shifting the carbonate balance: low maintenance, no salt. Drago is a physical/electronic treatment: no salt, no discharge, but performance depends on installation conditions. We recommend the best option after a quick diagnosis.",
      },
      {
        question: "Is Drago suitable for every home?",
        answer:
          "Not always. For very hard water or strong anti-limescale needs, a salt-based softener can be more appropriate. We validate the solution after assessing your water and system.",
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
