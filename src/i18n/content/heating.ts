import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Chauffage à Lille : remplacement chaudière, plancher chauffant",
    description:
      "Chauffagiste à Lille : remplacement de chaudière gaz ou fioul, installation de plancher chauffant, radiateurs, chauffe-eau thermodynamique. HFE Énergie, certifié RGE.",
    keywords: [
      "chauffagiste Lille",
      "remplacement chaudière Lille",
      "plancher chauffant Lille",
      "chauffe-eau thermodynamique Lille",
      "chaudière gaz à condensation",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
  ],
  structuredData: {
    serviceName: "Chauffage & remplacement de chaudière à Lille",
    serviceDescription:
      "Remplacement de chaudière, plancher chauffant, radiateurs, chauffe-eau thermodynamique à Lille et métropole.",
    slug: "chauffage",
  },
  hero: {
    badge: "Chauffagiste RGE",
    titleBefore: "Chauffage à ",
    titleHighlight: "Lille",
    titleAfter: " : remplacement & rénovation",
    description:
      "Remplacement de chaudière fioul ou gaz, installation de planchers chauffants, radiateurs et chauffe-eau thermodynamiques. HFE Énergie vous accompagne pour une rénovation énergétique réussie.",
    ctaQuote: "Devis gratuit",
  },
  offers: {
    title: "Nos solutions de chauffage",
    items: [
      {
        title: "Remplacement de chaudière",
        desc: "Remplacement de votre chaudière fioul ou gaz par une chaudière à condensation, une PAC ou une chaudière hybride.",
      },
      {
        title: "Plancher chauffant",
        desc: "Installation de planchers chauffants basse température, compatibles avec les pompes à chaleur pour un confort optimal.",
      },
      {
        title: "Radiateurs nouvelle génération",
        desc: "Pose de radiateurs basse température, sèche-serviettes et radiateurs à inertie pilotables.",
      },
      {
        title: "Chauffe-eau thermodynamique",
        desc: "Production d'eau chaude sanitaire écologique : jusqu'à 70 % d'économies par rapport à un ballon électrique.",
      },
    ],
  },
  cta: {
    title: "Remplacez votre chaudière en toute sérénité",
    subtitle: "Étude énergétique, devis détaillé et accompagnement des aides MaPrimeRénov'.",
  },
  faq: {
    title: "FAQ chauffage",
    items: [
      {
        question: "Quand faut-il remplacer sa chaudière ?",
        answer:
          "Une chaudière a une durée de vie moyenne de 15 à 20 ans. Si la vôtre est ancienne, consomme beaucoup, tombe régulièrement en panne ou si vous chauffez encore au fioul, il est temps d'envisager un remplacement. Depuis le 1er juillet 2022, l'installation de chaudières au fioul est interdite en France. HFE Énergie vous propose une étude personnalisée pour identifier la meilleure solution de remplacement (PAC, chaudière gaz à condensation, hybride).",
      },
      {
        question: "Faut-il privilégier une chaudière à condensation ou une pompe à chaleur ?",
        answer:
          "La pompe à chaleur est aujourd'hui la solution la plus économique et écologique. Une PAC consomme 3 à 4 fois moins d'énergie qu'une chaudière à condensation. Cependant, dans certains cas (logement très ancien mal isolé, contraintes techniques), une chaudière à condensation gaz reste pertinente. Une chaudière hybride combinant PAC + chaudière gaz est aussi une excellente solution intermédiaire.",
      },
      {
        question: "Quel est le prix d'un plancher chauffant ?",
        answer:
          "Un plancher chauffant hydraulique coûte entre 60 € et 110 € TTC / m² posé, hors chape. Pour 100 m², comptez 6 000 € à 11 000 € TTC. Couplé à une PAC, c'est la solution la plus confortable et la plus économique du marché : la PAC fonctionne à basse température, ce qui maximise son rendement.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Heating in Lille: boiler replacement, underfloor heating",
    description:
      "Heating engineer in Lille: gas or oil boiler replacement, underfloor heating, radiators, thermodynamic water heater. HFE Énergie, RGE certified.",
    keywords: [
      "heating engineer Lille",
      "boiler replacement Lille",
      "underfloor heating Lille",
      "thermodynamic water heater Lille",
      "condensing gas boiler",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
  ],
  structuredData: {
    serviceName: "Heating & boiler replacement in Lille",
    serviceDescription:
      "Boiler replacement, underfloor heating, radiators and thermodynamic water heaters in Lille and the metropolitan area.",
    slug: "heating",
  },
  hero: {
    badge: "RGE heating engineer",
    titleBefore: "Heating in ",
    titleHighlight: "Lille",
    titleAfter: ": replacement & upgrade",
    description:
      "Oil or gas boiler replacement, underfloor heating, radiators and thermodynamic water heaters. HFE Énergie supports you through a successful energy renovation.",
    ctaQuote: "Free quote",
  },
  offers: {
    title: "Our heating solutions",
    items: [
      {
        title: "Boiler replacement",
        desc: "Replace your oil or gas boiler with a condensing boiler, heat pump or hybrid boiler.",
      },
      {
        title: "Underfloor heating",
        desc: "Low-temperature underfloor heating installation, compatible with heat pumps for optimal comfort.",
      },
      {
        title: "Next-generation radiators",
        desc: "Installation of low-temperature radiators, towel rails and smart inertia radiators.",
      },
      {
        title: "Thermodynamic water heater",
        desc: "Eco-friendly domestic hot water: up to 70% savings compared with a standard electric tank.",
      },
    ],
  },
  cta: {
    title: "Replace your boiler with confidence",
    subtitle: "Energy assessment, detailed quote and support with MaPrimeRénov' applications.",
  },
  faq: {
    title: "Heating FAQ",
    items: [
      {
        question: "When should I replace my boiler?",
        answer:
          "A boiler has an average lifespan of 15 to 20 years. If yours is old, consumes a lot, breaks down regularly or you still heat with oil, it is time to consider a replacement. Since 1 July 2022, installing oil boilers has been banned in France. HFE Énergie offers a personalised assessment to identify the best replacement solution (heat pump, condensing gas boiler, hybrid).",
      },
      {
        question: "Should I choose a condensing boiler or a heat pump?",
        answer:
          "The heat pump is today the most economical and eco-friendly solution. A heat pump uses 3 to 4 times less energy than a condensing boiler. However, in some cases (poorly insulated older properties, technical constraints), a condensing gas boiler remains relevant. A hybrid boiler combining heat pump + gas boiler is also an excellent intermediate solution.",
      },
      {
        question: "How much does underfloor heating cost?",
        answer:
          "Hydraulic underfloor heating costs between €60 and €110 incl. VAT per m² installed, excluding screed. For 100 m², expect €6,000 to €11,000 incl. VAT. Combined with a heat pump, it is the most comfortable and economical solution on the market: the heat pump runs at low temperature, maximising efficiency.",
      },
    ],
  },
} as const;

export function getHeatingContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HeatingContent = ReturnType<typeof getHeatingContent>;
