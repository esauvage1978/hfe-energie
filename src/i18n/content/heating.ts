import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Chauffagiste à Lille : remplacement de chaudière – HFE",
    description:
      "Remplacement de chaudière fioul ou gaz, PAC hybride, plancher chauffant et radiateurs à Lille. Chauffagiste RGE, étude et devis gratuits, aides incluses.",
    keywords: [
      "chauffagiste Lille",
      "remplacement chaudière Lille",
      "plancher chauffant Lille",
      "têtes thermostatiques Lille",
      "têtes thermostatiques connectées",
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
      "Remplacement de chaudière, plancher chauffant, radiateurs et pose de têtes thermostatiques (dont modèles connectés) à Lille et métropole.",
    slug: "chauffage",
  },
  hero: {
    badge: "Chauffagiste RGE",
    titleBefore: "Chauffage à ",
    titleHighlight: "Lille",
    titleAfter: " : remplacement & rénovation",
    description:
      "Remplacement de tout type de chaudière, installation de planchers chauffants et de radiateurs. Hecker & Frères Énergie (HFE) met son expertise à votre service pour réussir votre rénovation énergétique et améliorer durablement votre confort.",
    ctaQuote: "Devis gratuit",
  },
  offers: {
    title: "Nos solutions de chauffage",
    items: [
      {
        title: "Remplacement de chaudière",
        desc: "Remplacement de votre chaudière fioul ou gaz par une chaudière à condensation, une PAC ou une chaudière hybride.",
        projectsLabel: "Voir nos réalisations remplacement de chaudière",
        projectsRoute: "projectsRemplacementChaudiere" as const,
      },
      {
        title: "Plancher chauffant",
        desc: "Installation de planchers chauffants basse température, compatibles avec les pompes à chaleur pour un confort optimal.",
        projectsLabel: "Nos réalisations plancher chauffant",
        projectsRoute: "projectsPlancherChauffant" as const,
      },
      {
        title: "Radiateurs nouvelle génération",
        desc: "Pose de radiateurs basse température, sèche-serviettes et radiateurs à inertie pilotables.",
        projectsLabel: "Voir nos réalisations radiateurs",
        projectsRoute: "projectsRadiateursNouvelleGeneration" as const,
      },
      {
        title: "Têtes thermostatiques",
        desc: "Régulation pièce par pièce, confort amélioré et économies de chauffage : installation rapide sur vos radiateurs existants.",
        icon: "radiator" as const,
        projectsLabel: "Têtes thermostatiques & connectées",
        projectsRoute: "thermostaticHeads" as const,
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
          "Une chaudière a une durée de vie moyenne de 15 à 20 ans. Si la vôtre est ancienne, consomme beaucoup, tombe régulièrement en panne ou si vous chauffez encore au fioul, il est temps d'envisager un remplacement. Depuis le 1er juillet 2022, l'installation de chaudières au fioul est interdite en France. Hecker & Frères Énergie (HFE) vous propose une étude personnalisée pour identifier la meilleure solution de remplacement (PAC, chaudière gaz à condensation, hybride).",
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
      {
        question: "Quelle différence entre une tête thermostatique et une tête connectée ?",
        answer:
          "La tête thermostatique classique règle la température de la pièce de façon autonome, sans application. La tête connectée se pilote à distance (smartphone), avec programmation, modes absence et parfois détection de fenêtre ouverte. Les modèles connectés conviennent si vous voulez affiner votre chauffage dans le temps ou piloter votre logement à distance. Hecker & Frères Énergie (HFE) vous conseille selon le nombre de radiateurs et votre usage.",
      },
      {
        question: "Êtes-vous chauffagiste à La Madeleine et dans la métropole lilloise ?",
        answer:
          "Oui. Hecker & Frères Énergie (HFE), chauffagiste certifié RGE, intervient à Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing et dans toute la Métropole Européenne de Lille (MEL) : remplacement de chaudière, pose de plancher chauffant, radiateurs et têtes thermostatiques. Devis gratuit partout dans la métropole.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Heating in Lille: boiler replacement, underfloor heating",
    description:
      "Heating engineer in Lille: boiler replacement, underfloor heating, radiators and smart thermostatic radiator valves. Hecker & Frères Énergie (HFE), RGE certified.",
    keywords: [
      "heating engineer Lille",
      "boiler replacement Lille",
      "underfloor heating Lille",
      "thermostatic radiator valves Lille",
      "smart TRV Lille",
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
      "Boiler replacement, underfloor heating, radiators and thermostatic valve installation (including smart models) in Lille and the metropolitan area.",
    slug: "heating",
  },
  hero: {
    badge: "RGE heating engineer",
    titleBefore: "Heating in ",
    titleHighlight: "Lille",
    titleAfter: ": replacement & upgrade",
    description:
      "Replacement of all types of boiler, installation of underfloor heating and radiators. Hecker & Frères Énergie (HFE) puts its expertise at your service for a successful energy renovation and lasting comfort improvement.",
    ctaQuote: "Free quote",
  },
  offers: {
    title: "Our heating solutions",
    items: [
      {
        title: "Boiler replacement",
        desc: "Replace your oil or gas boiler with a condensing boiler, heat pump or hybrid boiler.",
        projectsLabel: "See our boiler replacement projects",
        projectsRoute: "projectsRemplacementChaudiere" as const,
      },
      {
        title: "Underfloor heating",
        desc: "Low-temperature underfloor heating installation, compatible with heat pumps for optimal comfort.",
        projectsLabel: "Our underfloor heating projects",
        projectsRoute: "projectsPlancherChauffant" as const,
      },
      {
        title: "Next-generation radiators",
        desc: "Installation of low-temperature radiators, towel rails and smart inertia radiators.",
        projectsLabel: "See our radiator projects",
        projectsRoute: "projectsRadiateursNouvelleGeneration" as const,
      },
      {
        title: "Thermostatic radiator valves",
        desc: "Room-by-room control, improved comfort and heating savings: quick installation on your existing radiators.",
        icon: "radiator" as const,
        projectsLabel: "Thermostatic & smart valves",
        projectsRoute: "thermostaticHeads" as const,
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
          "A boiler has an average lifespan of 15 to 20 years. If yours is old, consumes a lot, breaks down regularly or you still heat with oil, it is time to consider a replacement. Since 1 July 2022, installing oil boilers has been banned in France. Hecker & Frères Énergie (HFE) offers a personalised assessment to identify the best replacement solution (heat pump, condensing gas boiler, hybrid).",
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
      {
        question: "What is the difference between a TRV and a smart connected valve?",
        answer:
          "A standard thermostatic valve regulates room temperature autonomously, without an app. A smart connected valve is controlled remotely (smartphone), with scheduling, away modes and sometimes open-window detection. Smart models suit you if you want to fine-tune heating over time or control your home remotely. Hecker & Frères Énergie (HFE) will advise based on the number of radiators and how you use your home.",
      },
      {
        question: "Are you a heating engineer in La Madeleine and the Lille metropolitan area?",
        answer:
          "Yes. Hecker & Frères Énergie (HFE), an RGE-certified heating engineer, works in Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing and across the entire European Metropolis of Lille (MEL): boiler replacement, underfloor heating, radiators and thermostatic valves. Free quote anywhere in the metropolitan area.",
      },
    ],
  },
} as const;

export function getHeatingContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HeatingContent = ReturnType<typeof getHeatingContent>;
