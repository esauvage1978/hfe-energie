import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Copropriété : chauffage collectif, PAC et aides MaPrimeRénov' Copro à Lille",
    description:
      "HFE installe des systèmes de chauffage centralisé en copropriété à Lille et métropole : pompe à chaleur collective, chaudière haute performance. Jusqu'à 75 % d'aides avec MaPrimeRénov' Copropriété. Devis gratuit.",
    keywords: [
      "chauffage copropriété Lille",
      "pompe à chaleur copropriété",
      "MaPrimeRénov copropriété 2026",
      "chauffage collectif Lille",
      "rénovation énergétique copropriété",
      "CEE copropriété",
      "remplacement chaudière copropriété",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Copropriété", url: "/copropriete" },
  ],
  hero: {
    badge: "Copropriété",
    titleBefore: "Chauffage collectif ",
    titleHighlight: "performant et subventionné",
    description:
      "Hecker & Frères Énergie (HFE) installe et rénove les systèmes de chauffage centralisé en copropriété : pompe à chaleur collective, chaudière haute performance, production d'eau chaude sanitaire. Réduisez les charges de l'ensemble des copropriétaires grâce aux aides dédiées.",
    ctaQuote: "Demander une étude",
  },
  intro: {
    title: "Un chauffage centralisé pour tous les appartements",
    paragraphs: [
      "En copropriété, le chauffage représente souvent le premier poste de charges. HFE conçoit et installe des solutions de chauffage collectif adaptées à votre immeuble : pompe à chaleur air-eau ou eau-eau centralisée, chaudière à condensation haute performance, production d'ECS mutualisée.",
      "Un système centralisé bien dimensionné permet à chaque lot de bénéficier d'un confort homogène tout en mutualisant l'investissement et les coûts de maintenance. Avec les aides 2026, c'est le moment idéal pour moderniser l'installation de votre copropriété.",
    ],
  },
  services: {
    title: "Nos interventions en copropriété",
    items: [
      {
        icon: "heat-pump" as const,
        title: "PAC collective air-eau",
        desc: "Remplacement de chaudière fioul/gaz par une pompe à chaleur centralisée pour le chauffage et l'ECS de l'immeuble.",
      },
      {
        icon: "flame" as const,
        title: "Chaudière collective haute performance",
        desc: "Installation ou remplacement par une chaudière à condensation dernière génération, conforme aux normes RE2020.",
      },
      {
        icon: "droplet" as const,
        title: "Production ECS centralisée",
        desc: "Ballon collectif, échangeur ou chauffe-eau thermodynamique pour une eau chaude efficace et économique.",
      },
      {
        icon: "radiator" as const,
        title: "Réseau de distribution",
        desc: "Calorifugeage, équilibrage hydraulique, vannes thermostatiques et comptage individuel pour optimiser chaque lot.",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & contrat d'entretien",
        desc: "Contrat annuel pour le suivi de la chaufferie, la maintenance préventive et le dépannage rapide.",
      },
      {
        icon: "leaf" as const,
        title: "Audit énergétique & accompagnement",
        desc: "Étude thermique de l'immeuble, préconisations de travaux et accompagnement du syndic dans le montage des aides.",
      },
    ],
  },
  grants: {
    badge: "Aides copropriété 2026",
    title: "Jusqu'à 75 % d'aides pour votre copropriété",
    intro:
      "MaPrimeRénov' Copropriété est une aide de l'État spécialement conçue pour la rénovation énergétique des immeubles collectifs. Combinée aux CEE, elle réduit considérablement le reste à charge de chaque copropriétaire.",
    items: [
      {
        name: "MaPrimeRénov' Copropriété",
        amount: "30 à 45 % des travaux",
        desc: "Aide collective versée au syndicat de copropriétaires, plafonnée à 25 000 € par logement sur 5 ans. Taux de 30 % pour un gain énergétique ≥ 35 %, ou 45 % pour un gain ≥ 50 %.",
        conditions: [
          "Copropriété immatriculée, ≥ 65 % de résidences principales",
          "Immeuble de plus de 15 ans",
          "Assistance à maîtrise d'ouvrage (AMO) obligatoire",
          "Travaux réalisés par un artisan RGE",
        ],
      },
      {
        name: "Bonus sortie de passoire",
        amount: "+10 %",
        desc: "Bonification de 10 % si les travaux permettent de sortir du statut de passoire thermique (étiquette F ou G vers D minimum après travaux).",
        conditions: [
          "Passage de F/G à D ou mieux au DPE",
          "Cumulable avec MaPrimeRénov' Copropriété",
        ],
      },
      {
        name: "Bonus copropriété fragile",
        amount: "+20 %",
        desc: "Bonification de 20 % pour les copropriétés en difficulté financière (taux d'impayés élevé, copropriété en plan de sauvegarde).",
        conditions: [
          "Copropriété identifiée comme fragile",
          "Cumulable avec le bonus passoire",
        ],
      },
      {
        name: "CEE collectifs",
        amount: "Variable",
        desc: "Primes CEE (certificats d'économies d'énergie) versées par les fournisseurs d'énergie, cumulables avec MaPrimeRénov' Copropriété.",
        conditions: [
          "Travaux éligibles CEE (isolation, chauffage, ECS)",
          "Artisan RGE obligatoire",
          "Demande avant signature du devis",
        ],
      },
    ],
    note: "HFE accompagne votre syndic dans le montage du dossier MaPrimeRénov' Copropriété et des CEE collectifs. Les montants définitifs sont fixés par l'ANAH et les délégataires CEE selon votre situation.",
  },
  savings: {
    title: "Pourquoi rénover le chauffage de votre copropriété ?",
    items: [
      {
        title: "Réduction des charges",
        text: "Un chauffage collectif performant peut réduire la facture énergétique de 30 à 60 % par rapport à une vieille chaudière fioul ou gaz basse température.",
      },
      {
        title: "Confort amélioré",
        text: "Température homogène dans tous les appartements, meilleure régulation et comptage individuel pour responsabiliser chaque copropriétaire.",
      },
      {
        title: "Valorisation du patrimoine",
        text: "Un meilleur DPE augmente la valeur des lots et sécurise la location (interdiction progressive des passoires thermiques).",
      },
      {
        title: "Investissement mutualisé",
        text: "Le coût est réparti entre tous les copropriétaires, et les aides MaPrimeRénov' Copropriété réduisent fortement le reste à charge individuel.",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Questions sur la copropriété",
    intro: "Réponses rapides sur le chauffage collectif et les aides en copropriété.",
    items: [
      {
        question: "Quelles copropriétés sont éligibles à MaPrimeRénov' Copropriété ?",
        answer:
          "Toute copropriété immatriculée au registre national, composée d'au moins 65 % de résidences principales (75 % pour les copropriétés de plus de 20 lots), dont l'immeuble a plus de 15 ans. Les travaux doivent permettre un gain énergétique d'au moins 35 % et être accompagnés par une AMO (assistance à maîtrise d'ouvrage).",
      },
      {
        question: "Peut-on installer une pompe à chaleur en copropriété ?",
        answer:
          "Oui. Une PAC air-eau ou eau-eau collective remplace avantageusement une chaudière fioul ou gaz vieillissante. Elle alimente le réseau de chauffage central existant (radiateurs, plancher chauffant) et peut produire l'eau chaude sanitaire. HFE dimensionne le système pour l'ensemble de l'immeuble après une étude thermique.",
      },
      {
        question: "Combien coûte le remplacement du chauffage collectif ?",
        answer:
          "Le budget dépend de la taille de l'immeuble, du système choisi et de l'état du réseau existant. Avec MaPrimeRénov' Copropriété (30 à 45 %), les bonus éventuels (jusqu'à +30 %) et les CEE, le reste à charge par lot peut être réduit de 50 à 75 %. HFE réalise une étude gratuite avec un chiffrage détaillé pour le syndic.",
      },
      {
        question: "Quel est le rôle du syndic dans les travaux ?",
        answer:
          "Le syndic coordonne le projet : il mandate l'AMO, soumet le projet au vote en assemblée générale, dépose le dossier MaPrimeRénov' Copropriété auprès de l'ANAH et pilote le suivi des travaux. HFE travaille en lien direct avec le syndic et l'AMO pour simplifier les démarches.",
      },
      {
        question: "HFE intervient-il à Lille et métropole pour les copropriétés ?",
        answer:
          "Oui. HFE intervient sur Lille et dans un rayon de 50 km (métropole lilloise, Roubaix, Tourcoing, Villeneuve-d'Ascq, etc.) pour l'installation et la maintenance de chauffages collectifs en copropriété.",
      },
    ],
  },
  cta: {
    title: "Un projet de rénovation en copropriété ?",
    subtitle: "Étude gratuite, accompagnement du syndic et montage des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Co-ownership: collective heating, heat pumps & MaPrimeRénov' Copro grants in Lille",
    description:
      "HFE installs centralised heating systems in co-owned buildings in Lille: collective heat pumps, high-performance boilers. Up to 75% grants with MaPrimeRénov' Copropriété. Free quote.",
    keywords: [
      "co-ownership heating Lille",
      "collective heat pump",
      "MaPrimeRénov co-ownership 2026",
      "centralised heating Lille",
      "energy renovation co-ownership",
      "CEE co-ownership",
      "boiler replacement co-ownership",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Co-ownership", url: "/en/co-ownership" },
  ],
  hero: {
    badge: "Co-ownership",
    titleBefore: "Collective heating, ",
    titleHighlight: "efficient and subsidised",
    description:
      "Hecker & Frères Énergie (HFE) installs and renovates centralised heating systems in co-owned buildings: collective heat pumps, high-performance boilers and domestic hot water. Cut charges for every co-owner with dedicated grants.",
    ctaQuote: "Request a survey",
  },
  intro: {
    title: "Centralised heating for every apartment",
    paragraphs: [
      "In co-owned buildings, heating is often the largest shared expense. HFE designs and installs collective heating solutions tailored to your building: centralised air-to-water or water-to-water heat pumps, high-efficiency condensing boilers, and shared domestic hot water production.",
      "A well-sized centralised system gives every unit consistent comfort while sharing the investment and maintenance costs. With 2026 grants, now is the ideal time to upgrade your building's installation.",
    ],
  },
  services: {
    title: "Our co-ownership services",
    items: [
      {
        icon: "heat-pump" as const,
        title: "Collective air-to-water heat pump",
        desc: "Replace an oil/gas boiler with a centralised heat pump for the building's heating and hot water.",
      },
      {
        icon: "flame" as const,
        title: "High-performance collective boiler",
        desc: "Installation or replacement with a latest-generation condensing boiler, RE2020 compliant.",
      },
      {
        icon: "droplet" as const,
        title: "Centralised hot water production",
        desc: "Collective tank, heat exchanger or thermodynamic heater for efficient, economical hot water.",
      },
      {
        icon: "radiator" as const,
        title: "Distribution network",
        desc: "Pipe insulation, hydraulic balancing, thermostatic valves and individual metering to optimise every unit.",
      },
      {
        icon: "shield" as const,
        title: "Maintenance & service contract",
        desc: "Annual contract for boiler room monitoring, preventive maintenance and rapid breakdown response.",
      },
      {
        icon: "leaf" as const,
        title: "Energy audit & support",
        desc: "Building thermal study, work recommendations and support for the property manager with grant applications.",
      },
    ],
  },
  grants: {
    badge: "Co-ownership grants 2026",
    title: "Up to 75% grants for your co-ownership",
    intro:
      "MaPrimeRénov' Copropriété is a French government grant specifically designed for energy renovation of collective buildings. Combined with CEE, it dramatically reduces each co-owner's out-of-pocket cost.",
    items: [
      {
        name: "MaPrimeRénov' Copropriété",
        amount: "30 to 45% of works",
        desc: "Collective grant paid to the co-owners' association, capped at €25,000 per dwelling over 5 years. 30% rate for ≥ 35% energy gain, or 45% for ≥ 50% gain.",
        conditions: [
          "Registered co-ownership, ≥ 65% main residences",
          "Building over 15 years old",
          "Project management assistance (AMO) required",
          "Work carried out by an RGE contractor",
        ],
      },
      {
        name: "Thermal sieve exit bonus",
        amount: "+10%",
        desc: "10% bonus if the works take the building out of thermal sieve status (EPC band F/G to D or better after works).",
        conditions: [
          "Move from F/G to D or better on the EPC",
          "Stackable with MaPrimeRénov' Copropriété",
        ],
      },
      {
        name: "Fragile co-ownership bonus",
        amount: "+20%",
        desc: "20% bonus for financially distressed co-ownerships (high arrears rate, safeguard plan).",
        conditions: [
          "Co-ownership identified as fragile",
          "Stackable with thermal sieve bonus",
        ],
      },
      {
        name: "Collective CEE",
        amount: "Variable",
        desc: "CEE (energy saving certificates) grants paid by energy suppliers, stackable with MaPrimeRénov' Copropriété.",
        conditions: [
          "Eligible CEE works (insulation, heating, hot water)",
          "RGE contractor required",
          "Application before quote is signed",
        ],
      },
    ],
    note: "HFE supports your property manager in preparing MaPrimeRénov' Copropriété and collective CEE applications. Final amounts are set by the Anah and CEE delegates based on your situation.",
  },
  savings: {
    title: "Why renovate your co-ownership's heating?",
    items: [
      {
        title: "Lower charges",
        text: "An efficient collective heating system can cut energy bills by 30 to 60% compared with an ageing oil or low-temperature gas boiler.",
      },
      {
        title: "Improved comfort",
        text: "Consistent temperature in every apartment, better regulation and individual metering to empower each co-owner.",
      },
      {
        title: "Property value",
        text: "A better EPC rating increases unit value and secures rental ability (progressive ban on thermal sieves).",
      },
      {
        title: "Shared investment",
        text: "Costs are split between all co-owners, and MaPrimeRénov' Copropriété grants significantly reduce each individual's contribution.",
      },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Co-ownership questions",
    intro: "Quick answers about collective heating and co-ownership grants.",
    items: [
      {
        question: "Which co-ownerships are eligible for MaPrimeRénov' Copropriété?",
        answer:
          "Any co-ownership registered in the national register, with at least 65% main residences (75% for co-ownerships with more than 20 units), whose building is over 15 years old. Works must achieve at least 35% energy improvement and be supported by an AMO (project management assistant).",
      },
      {
        question: "Can a heat pump be installed in a co-owned building?",
        answer:
          "Yes. A collective air-to-water or water-to-water heat pump can advantageously replace an ageing oil or gas boiler. It feeds the existing central heating network (radiators, underfloor heating) and can produce domestic hot water. HFE sizes the system for the entire building after a thermal study.",
      },
      {
        question: "How much does collective heating replacement cost?",
        answer:
          "The budget depends on building size, chosen system and existing network condition. With MaPrimeRénov' Copropriété (30–45%), possible bonuses (up to +30%) and CEE, the per-unit out-of-pocket cost can be reduced by 50–75%. HFE provides a free study with a detailed breakdown for the property manager.",
      },
      {
        question: "What is the property manager's role?",
        answer:
          "The property manager coordinates the project: appointing the AMO, submitting the project for vote at the general meeting, filing the MaPrimeRénov' Copropriété application with the Anah and overseeing the works. HFE works directly with the manager and AMO to simplify the process.",
      },
      {
        question: "Does HFE cover Lille and the metropolitan area for co-ownerships?",
        answer:
          "Yes. HFE operates in Lille and within a 50 km radius (Lille metropolitan area, Roubaix, Tourcoing, Villeneuve-d'Ascq, etc.) for collective heating installation and maintenance in co-owned buildings.",
      },
    ],
  },
  cta: {
    title: "Planning a co-ownership renovation?",
    subtitle: "Free survey, property manager support and grant applications handled by HFE.",
  },
} as const;

export function getCoOwnershipContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type CoOwnershipContent = ReturnType<typeof getCoOwnershipContent>;
