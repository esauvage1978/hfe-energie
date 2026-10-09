import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Pompe à chaleur Lille : installateur RGE air-eau & air-air",
    description:
      "Installation de pompe à chaleur air-eau et air-air à Lille et métropole par un artisan RGE QualiPAC. Prix indicatifs, aides MaPrimeRénov' et CEE, devis gratuit.",
    keywords: [
      "pompe à chaleur Lille",
      "PAC air-eau Lille",
      "PAC air-air Lille",
      "installateur pompe à chaleur Lille",
      "installateur RGE QualiPAC",
      "MaPrimeRénov pompe à chaleur",
      "prix pompe à chaleur",
      "chauffe-eau thermodynamique Lille",
      "remplacement chaudière par PAC",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Pompe à chaleur", url: "/pompe-a-chaleur" },
  ],
  structuredData: {
    serviceName: "Installation de pompe à chaleur à Lille",
    serviceDescription:
      "Installation et entretien de pompes à chaleur air-eau, air-air et chauffe-eau thermodynamiques par Hecker & Frères Énergie (HFE), artisan RGE QualiPAC à Lille.",
    slug: "pompe-a-chaleur",
  },
  hero: {
    badge: "Service RGE QualiPAC",
    titleBefore: "Installation de ",
    titleHighlight: "pompes à chaleur",
    titleAfter: " à Lille et sa métropole",
    description:
      "Hecker & Frères Énergie (HFE) installe et entretient des pompes à chaleur air-eau, eau-eau et air-air à Lille et dans toute la métropole lilloise. Devis gratuit, accompagnement des aides sur PAC air-eau et chauffe-eau thermodynamique, garantie décennale.",
    ctaQuote: "Devis gratuit en 72h",
    stats: [
      { label: "Économies", value: "75 %" },
      { label: "Aides", value: "10 500 €*" },
      { label: "Garantie", value: "3 ans minimum" },
    ],
    statsNote: "* Montant variable selon les revenus du foyer.",
    imageAlt: "Installation d'une pompe à chaleur air-eau par Hecker & Frères Énergie (HFE) à Lille",
  },
  benefits: {
    title: "Pourquoi choisir une pompe à chaleur ?",
    intro:
      "Système de chauffage le plus efficace du marché, la pompe à chaleur exploite une énergie renouvelable (l'air extérieur, l'eau ou le sol) pour chauffer votre logement avec un excellent rendement (SCOP de 3,5 à 7).",
    items: [
      { icon: "euro" as const, title: "Jusqu'à 75 % d'économies", text: "Une PAC moderne consomme 3 à 4 fois moins d'énergie qu'un chauffage électrique ou au fioul." },
      { icon: "leaf" as const, title: "Énergie renouvelable", text: "70 à 80 % de l'énergie produite provient de l'air extérieur, une source gratuite et inépuisable." },
      { icon: "shield" as const, title: "Aides cumulables", text: "MaPrimeRénov', CEE Coup de pouce, TVA réduite à 5,5 %, éco-PTZ : jusqu'à 10 500 € d'aides cumulées." },
      { icon: "snowflake" as const, title: "Confort 4 saisons", text: "Avec une PAC air-air ou une PAC hybride, vous chauffez l'hiver et rafraîchissez l'été." },
    ],
  },
  types: {
    badge: "Nos installations",
    title: "Les types de pompes à chaleur que nous installons",
    budgetLabel: "Budget indicatif",
    budgetNote: "avant aides MaPrimeRénov' & CEE",
    idealForLabel: "Pourquoi choisir ce système ?",
    scopLabel: "SCOP",
    items: [
      {
        name: "PAC air-eau",
        slug: "air-eau",
        icon: "heat-pump" as const,
        description:
          "La pompe à chaleur air-eau capte les calories dans l'air extérieur pour les restituer à l'eau du circuit de chauffage central : radiateurs, plancher chauffant, et production d'eau chaude sanitaire.",
        idealFor: "Idéale si vous avez des radiateurs ou un plancher chauffant et souhaitez remplacer votre chaudière fioul/gaz tout en produisant l'eau chaude sanitaire.",
        pros: [
          "Idéale en rénovation pour remplacer une chaudière fioul ou gaz",
          "Compatible avec radiateurs et plancher chauffant existants",
          "Production d'eau chaude sanitaire intégrée possible",
          "Éligible MaPrimeRénov' (jusqu'à 5 000 €) et CEE",
        ],
        scop: "3,8 à 4,5",
        price: "12 000 € à 18 000 €",
        projectsLabel: "Nos réalisations PAC air-eau",
        projectsRoute: "projectsPacAirEau" as const,
      },
      {
        name: "PAC air-air",
        slug: "air-air",
        icon: "ac-unit" as const,
        description:
          "La pompe à chaleur air-air, aussi appelée climatisation réversible, diffuse l'air chaud (ou froid) directement dans vos pièces via des unités intérieures (split, gainable, cassette).",
        idealFor: "Idéale si vous chauffez à l'électrique (convecteurs) ou souhaitez climatiser l'été — installation rapide, gain possible au DPE.",
        pros: [
          "Solution 2-en-1 : chauffage l'hiver et climatisation l'été",
          "Installation rapide, peu de travaux",
          "Plusieurs unités intérieures possibles (multi-split)",
          "Filtration de l'air et déshumidification",
        ],
        scop: "3,5 à 4,2",
        price: "3 500 € à 9 000 €",
        budgetNote: "TTC posé — sans aide de l'État (non éligible MaPrimeRénov' ni CEE)",
        projectsLabel: "Découvrir la climatisation réversible",
        projectsRoute: "airConditioning" as const,
      },
      {
        name: "PAC eau-eau",
        slug: "eau-eau",
        icon: "droplet" as const,
        description:
          "La pompe à chaleur eau-eau (géothermie sur nappe) puise les calories dans l'eau souterraine via un forage/puits, puis les restitue à votre circuit de chauffage. C'est la solution la plus stable et performante quand le site le permet.",
        idealFor: "Idéale si votre terrain permet un forage — rendement exceptionnel, indépendant de la météo. La plus performante, mais investissement initial élevé.",
        pros: [
          "Rendements très élevés et réguliers (température de source stable)",
          "Idéale pour plancher chauffant et chauffage central basse température",
          "Confort constant, même par grand froid",
          "Éligible aux aides (sous conditions, étude préalable indispensable)",
        ],
        scop: "4,5 à 7,0",
        price: "18 000 € à 35 000 €",
        budgetNote: "TTC posé — nécessite étude hydraulique et autorisations selon le terrain",
      },
      {
        name: "Chauffe-eau thermodynamique",
        slug: "chauffe-eau-thermodynamique",
        icon: "flame" as const,
        description:
          "Le chauffe-eau thermodynamique combine un ballon d'eau chaude et une mini-pompe à chaleur pour produire votre eau chaude sanitaire jusqu'à 3 fois moins cher qu'un ballon électrique classique.",
        idealFor: "Idéal pour remplacer un ballon électrique vieillissant — économies immédiates sur l'eau chaude, installation simple et éligible aux aides.",
        pros: [
          "Jusqu'à 70 % d'économies sur l'eau chaude sanitaire",
          "Éligible MaPrimeRénov' & CEE",
          "Durée de vie de 15 ans en moyenne",
          "Installation rapide en remplacement d'un ballon électrique",
        ],
        scop: "3,0 à 3,5",
        scopLabel: "COP",
        price: "2 500 € à 4 500 €",
        projectsLabel: "Nos réalisations ballon thermodynamique",
        projectsRoute: "projectsBallonThermodynamique" as const,
        colorScheme: "primary" as const,
      },
    ],
  },
  howItWorks: {
    badge: "Fonctionnement",
    title: "Comment fonctionne une pompe à chaleur ?",
    paragraphs: [
      "Une pompe à chaleur (PAC) utilise les calories naturellement présentes dans l'air extérieur, même par temps froid, pour chauffer votre logement. Elle fonctionne comme un réfrigérateur, mais à l'envers.",
    ],
    steps: [
      { strong: "Captage", text: " : l'unité extérieure aspire l'air ambiant et en capte les calories." },
      { strong: "Compression", text: " : un fluide frigorigène circule, est compressé et monte en température." },
      { strong: "Restitution", text: " : la chaleur est transférée à l'eau du circuit de chauffage (PAC air-eau) ou directement à l'air (PAC air-air)." },
      { strong: "Détente", text: " : le fluide retrouve son état initial et le cycle recommence." },
    ],
    closingBefore: "Pour 1 kWh d'électricité consommé, une PAC restitue 3 à 5 kWh de chaleur : c'est le ",
    closingStrong: "coefficient de performance (COP)",
    closingEnd: ".",
    imageAlt: "Pompe à chaleur installée dans une maison à Lille",
  },
  calculator: {
    title: "Estimez vos économies en 30 secondes",
    intro: "Comparez le coût de votre chauffage actuel avec celui d'une pompe à chaleur Hecker & Frères Énergie (HFE).",
  },
  gallery: {
    title: "Nos dernières installations de pompe à chaleur",
    subtitle:
      "Découvrez quelques-uns de nos chantiers récents à Lille et dans la métropole - particuliers et professionnels.",
  },
  cta: {
    title: "Prêt à passer à la pompe à chaleur ?",
    subtitle: "Étude thermique offerte, devis sous 72h, accompagnement complet pour MaPrimeRénov' & CEE.",
  },
  zones: {
    badge: "Zone d'intervention",
    title: "Installateur PAC à Lille et dans toute la métropole",
    intro:
      "Basée à Lille, Hecker & Frères Énergie (HFE) intervient dans un rayon de 50 km autour de son siège (MEL, Nord et Pas-de-Calais). Voici les principales villes — la liste complète est disponible sur notre page zone d'intervention.",
    cityPrefix: "Pompe à chaleur",
    fullListLink: "Voir toutes les communes desservies (50 km)",
  },
  faq: {
    badge: "FAQ pompe à chaleur",
    title: "Tout savoir sur la pompe à chaleur",
    intro:
      "Réponses aux questions les plus recherchées sur l'achat, l'installation et le choix d'une pompe à chaleur à Lille, Villeneuve-d'Ascq, Marcq-en-Barœul et dans les Hauts-de-France.",
    items: [
      {
        question: "Où acheter et faire installer une pompe à chaleur air-eau à Lille ?",
        answer:
          "Hecker & Frères Énergie (HFE) vous accompagne de l'achat à l'installation de votre pompe à chaleur air-eau à Lille et dans toute la métropole. Installateur RGE QualiPAC, nous dimensionnons, fournissons et posons les PAC air-eau Panasonic, Daikin, Atlantic et Mitsubishi. Devis gratuit sous 72 h, étude thermique offerte et accompagnement MaPrimeRénov' & CEE. Pas de vente en ligne : chaque projet fait l'objet d'une visite et d'un devis personnalisé.",
      },
      {
        question: "Qui est installateur de pompe à chaleur à Lille ?",
        answer:
          "HFE est installateur RGE QualiPAC basé à Lille (44 rue Jean sans Peur), avec plus de 15 ans d'expérience et 1 500+ installations en pompes à chaleur, climatisation et chauffage. Nous installons PAC air-eau, air-air et chauffe-eau thermodynamique dans un rayon de 50 km autour de Lille. Garantie décennale sur la pose, contrat d'entretien et SAV local.",
      },
      {
        question: "Où acheter une pompe à chaleur air-air à Lille ?",
        answer:
          "Pour l'achat et la pose d'une pompe à chaleur air-air (climatisation réversible) à Lille, HFE propose un accompagnement complet : audit de vos pièces, dimensionnement, fourniture et installation mono-split ou multi-split (Panasonic, Daikin, Mitsubishi). Comptez 3 500 € à 9 000 € TTC posé. Devis gratuit sur place — la PAC air-air n'est pas éligible MaPrimeRénov' ni CEE.",
      },
      {
        question: "Installez-vous des pompes à chaleur à Villeneuve-d'Ascq ?",
        answer:
          "Oui. HFE intervient à Villeneuve-d'Ascq pour l'installation de pompes à chaleur air-eau, air-air et chauffe-eau thermodynamique, en maison individuelle, copropriété ou tertiaire. Nous y réalisons régulièrement des chantiers PAC air-eau couplées à radiateurs ou plancher chauffant. Installateur RGE QualiPAC, étude thermique et devis gratuits sur place.",
      },
      {
        question: "Installez-vous des pompes à chaleur air-eau à Marcq-en-Barœul ?",
        answer:
          "Oui, Marcq-en-Barœul fait partie de notre zone d'intervention prioritaire. Nous y installons des PAC air-eau en remplacement de chaudière fioul ou gaz, avec raccordement aux radiateurs existants ou au plancher chauffant. Installateur RGE QualiPAC, nous gérons le dossier d'aides MaPrimeRénov' et CEE. Délai moyen : devis sous 72 h, pose en 2 à 3 jours.",
      },
      {
        question: "Intervenez-vous pour l'installation de pompe à chaleur dans les Hauts-de-France ?",
        answer:
          "Oui. Basés à Lille, nous couvrons la métropole lilloise (MEL) et les Hauts-de-France dans un rayon de 50 km : Nord et Pas-de-Calais, incluant Roubaix, Tourcoing, Lens, Douai, Valenciennes et communes alentour. Pour les projets au-delà de ce périmètre, contactez-nous : nous étudions chaque demande au cas par cas.",
      },
      {
        question: "Proposez-vous la pose de plancher chauffant avec une PAC air-eau à Villeneuve-d'Ascq ?",
        answer:
          "Oui. Nous installons des planchers chauffants hydrauliques neufs ou en rénovation à Villeneuve-d'Ascq, couplés à une pompe à chaleur air-eau dimensionnée pour le basse température. Idéal en construction ou rénovation lourde pour un confort optimal et des économies maximales. HFE est certifié RGE pour le chauffage et QualiPAC pour la pompe à chaleur.",
      },
      {
        question: "Quel est le prix d'une pompe à chaleur installée à Lille en 2026 ?",
        answer:
          "Le prix d'une pompe à chaleur air-eau installée à Lille est compris entre 12 000 € et 18 000 € TTC (hors aides), selon la puissance, la marque et la complexité de la pose. Avec MaPrimeRénov' (jusqu'à 5 000 €) et les CEE (jusqu'à 5 500 €), le reste à charge peut descendre à 2 000 € - 4 000 € pour les ménages modestes. Une PAC air-air (clim réversible) coûte entre 3 500 € et 9 000 € TTC posé : elle n'est pas éligible à MaPrimeRénov' ni aux CEE. Hecker & Frères Énergie (HFE) est certifiée RGE QualiPAC pour les installations éligibles aux aides.",
      },
      {
        question: "Quelle pompe à chaleur choisir : air-eau ou air-air ?",
        answer:
          "Choisissez une PAC air-eau si vous avez déjà un circuit de chauffage central (radiateurs ou plancher chauffant) : elle remplace votre chaudière fioul ou gaz et peut produire l'eau chaude sanitaire. Choisissez une PAC air-air (clim réversible) si vous chauffez à l'électrique ou si vous voulez climatiser votre logement en été. La PAC air-eau est plus chère à l'installation mais offre un confort supérieur et un meilleur rendement.",
      },
      {
        question: "Est-ce qu'une pompe à chaleur fonctionne bien dans le Nord ?",
        answer:
          "Oui, parfaitement. Les pompes à chaleur modernes restent performantes jusqu'à -15 °C, et le climat du Nord (températures hivernales descendant rarement sous -5 °C) est tout à fait adapté. Les PAC haute température peuvent même remplacer une chaudière fioul sans changer les radiateurs. Le SCOP (rendement saisonnier) reste élevé : entre 3,5 et 4,5 dans les Hauts-de-France.",
      },
      {
        question: "Quelles sont les aides MaPrimeRénov' et CEE pour une PAC en 2026 ?",
        answer:
          "Les aides MaPrimeRénov' et CEE concernent la PAC air-eau et le chauffe-eau thermodynamique, pas la PAC air-air (climatisation réversible). Pour une PAC air-eau : MaPrimeRénov' de 1 000 € (revenus supérieurs) à 5 000 € (revenus très modestes), CEE « Coup de pouce chauffage » jusqu'à 5 500 € si vous remplacez une chaudière fioul, gaz ou charbon, TVA à 5,5 % sur la fourniture et la pose.",
      },
      {
        question: "Faut-il entretenir sa pompe à chaleur ?",
        answer:
          "Oui, l'entretien d'une pompe à chaleur est obligatoire depuis le décret du 30 juillet 2020 : tous les 2 ans pour les PAC < 12 kW, tous les ans pour les PAC ≥ 12 kW. Hecker & Frères Énergie (HFE) propose des contrats d'entretien dès 149 € TTC / an, incluant le contrôle d'étanchéité du circuit frigorifique, le nettoyage des filtres et la vérification des performances.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Heat pump Lille: air-to-water & air-to-air RGE installation",
    description:
      "RGE QualiPAC installer in Lille: air-to-water and air-to-air heat pumps, thermodynamic water heaters. Free quote, MaPrimeRénov' & CEE. 15 years of experience.",
    keywords: [
      "heat pump Lille",
      "air-to-water heat pump Lille",
      "air-to-air heat pump Lille",
      "heat pump installer Lille",
      "RGE QualiPAC installer",
      "MaPrimeRénov heat pump",
      "heat pump price",
      "thermodynamic water heater Lille",
      "boiler replacement heat pump",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heat pump", url: "/en/heat-pump" },
  ],
  structuredData: {
    serviceName: "Heat pump installation in Lille",
    serviceDescription:
      "Installation and servicing of air-to-water, air-to-air heat pumps and thermodynamic water heaters by Hecker & Frères Énergie (HFE), RGE QualiPAC certified contractor in Lille.",
    slug: "heat-pump",
  },
  hero: {
    badge: "RGE QualiPAC service",
    titleBefore: "",
    titleHighlight: "Heat pump",
    titleAfter: " installation in Lille",
    description:
      "Hecker & Frères Énergie (HFE) installs and services high-performance air-to-water and air-to-air heat pumps in Lille and across the metropolitan area. Free quote, grant support for eligible air-to-water and thermodynamic water heater projects, ten-year warranty.",
    ctaQuote: "Free quote within 72h",
    stats: [
      { label: "Savings", value: "75%" },
      { label: "Grants", value: "€10,500*" },
      { label: "Warranty", value: "3 years minimum" },
    ],
    statsNote: "* Amount varies depending on household income.",
    imageAlt: "Air-to-water heat pump installation by Hecker & Frères Énergie (HFE) in Lille",
  },
  benefits: {
    title: "Why choose a heat pump?",
    intro:
      "The most efficient heating system on the market, a heat pump harnesses renewable energy (outdoor air) to heat your home with excellent performance (SCOP of 3.5 to 4.5).",
    items: [
      { icon: "euro" as const, title: "Up to 75% savings", text: "A modern heat pump uses 3 to 4 times less energy than electric or oil heating." },
      { icon: "leaf" as const, title: "Renewable energy", text: "70 to 80% of the energy produced comes from outdoor air — a free, inexhaustible source." },
      { icon: "shield" as const, title: "Stackable grants", text: "MaPrimeRénov', CEE heating boost, 5.5% VAT, eco loan at 0%: up to €10,500 in combined grants." },
      { icon: "snowflake" as const, title: "Year-round comfort", text: "With an air-to-air or hybrid heat pump, you heat in winter and cool in summer." },
    ],
  },
  types: {
    badge: "Our installations",
    title: "The types of heat pumps we install",
    budgetLabel: "Indicative budget",
    budgetNote: "before MaPrimeRénov' & CEE grants",
    idealForLabel: "Why choose this system?",
    scopLabel: "SCOP",
    items: [
      {
        name: "Air-to-water heat pump",
        slug: "air-eau",
        icon: "heat-pump" as const,
        description:
          "The air-to-water heat pump captures heat from outdoor air and transfers it to the central heating water circuit: radiators, underfloor heating, and domestic hot water production.",
        idealFor: "Best if you have radiators or underfloor heating and want to replace your oil/gas boiler while producing domestic hot water.",
        pros: [
          "Ideal for renovation to replace oil or gas boilers",
          "Compatible with existing radiators and underfloor heating",
          "Integrated domestic hot water production available",
          "Eligible for MaPrimeRénov' (up to €5,000) and CEE",
        ],
        scop: "3.8 to 4.5",
        price: "€12,000 to €18,000",
        projectsLabel: "Our air-to-water projects",
        projectsRoute: "projectsPacAirEau" as const,
      },
      {
        name: "Air-to-air heat pump",
        slug: "air-air",
        icon: "ac-unit" as const,
        description:
          "The air-to-air heat pump, also known as reversible air conditioning, distributes warm (or cool) air directly into your rooms via indoor units (split, ducted, cassette).",
        idealFor: "Best if you heat with electric convectors or want summer cooling — quick installation with potential EPC improvement.",
        pros: [
          "2-in-1 solution: heating in winter and cooling in summer",
          "Quick installation, minimal building work",
          "Multiple indoor units possible (multi-split)",
          "Air filtration and dehumidification",
        ],
        scop: "3.5 to 4.2",
        price: "€3,500 to €9,000",
        budgetNote: "incl. VAT, installed — not eligible for MaPrimeRénov' or CEE",
        projectsLabel: "Discover reversible air conditioning",
        projectsRoute: "airConditioning" as const,
      },
      {
        name: "Water-to-water heat pump",
        slug: "water-to-water",
        icon: "droplet" as const,
        description:
          "A water-to-water heat pump (groundwater source) draws heat from groundwater via a borehole/well and transfers it to your central heating circuit. When feasible, it offers some of the most stable and efficient performance.",
        idealFor: "Best if your site allows a borehole — outstanding efficiency regardless of weather. The highest-performing option, but higher upfront investment.",
        pros: [
          "Very high and steady efficiency (stable source temperature)",
          "Great fit for underfloor heating and low-temperature hydronic systems",
          "Consistent comfort even in cold weather",
          "Eligible for grants (subject to site study and requirements)",
        ],
        scop: "4.5 to 7.0",
        price: "€18,000 to €35,000",
        budgetNote: "Installed price — requires feasibility study and local authorisations",
      },
      {
        name: "Thermodynamic water heater",
        slug: "chauffe-eau-thermodynamique",
        icon: "flame" as const,
        description:
          "The thermodynamic water heater combines a hot water tank and a mini heat pump to produce domestic hot water at up to three times lower cost than a standard electric tank.",
        idealFor: "Best for replacing an ageing electric tank — immediate hot water savings, simple installation and grant-eligible.",
        pros: [
          "Up to 70% savings on domestic hot water",
          "Eligible for MaPrimeRénov' & CEE",
          "Average lifespan of 15 years",
          "Quick installation as a replacement for an electric tank",
        ],
        scop: "3.0 to 3.5",
        scopLabel: "COP",
        price: "€2,500 to €4,500",
        projectsLabel: "Our thermodynamic water heater projects",
        projectsRoute: "projectsBallonThermodynamique" as const,
        colorScheme: "primary" as const,
      },
    ],
  },
  howItWorks: {
    badge: "How it works",
    title: "How does a heat pump work?",
    paragraphs: [
      "A heat pump uses the heat naturally present in outdoor air, even in cold weather, to warm your home. It works like a refrigerator, but in reverse.",
    ],
    steps: [
      { strong: "Capture", text: ": the outdoor unit draws in ambient air and extracts heat." },
      { strong: "Compression", text: ": refrigerant circulates, is compressed and rises in temperature." },
      { strong: "Release", text: ": heat is transferred to the heating circuit water (air-to-water) or directly to the air (air-to-air)." },
      { strong: "Expansion", text: ": the refrigerant returns to its initial state and the cycle starts again." },
    ],
    closingBefore: "For every 1 kWh of electricity consumed, a heat pump delivers 3 to 5 kWh of heat: this is the ",
    closingStrong: "coefficient of performance (COP)",
    closingEnd: ".",
    imageAlt: "Heat pump installed in a home in Lille",
  },
  calculator: {
    title: "Estimate your savings in 30 seconds",
    intro: "Compare the cost of your current heating with a Hecker & Frères Énergie (HFE) heat pump.",
  },
  gallery: {
    title: "Our latest heat pump installations",
    subtitle: "A selection of recent projects in Lille and the metropolitan area — residential and commercial.",
  },
  cta: {
    title: "Ready to switch to a heat pump?",
    subtitle: "Free thermal study, quote within 72h, full support for MaPrimeRénov' & CEE applications.",
  },
  zones: {
    badge: "Service area",
    title: "Heat pump installer in Lille and across the metropolitan area",
    intro:
      "Based in Lille, Hecker & Frères Énergie (HFE) covers a 50 km radius from HQ (MEL, Nord and Pas-de-Calais). Key cities below — see our service area page for the full list.",
    cityPrefix: "Heat pump",
    fullListLink: "View all towns served (50 km)",
  },
  faq: {
    badge: "Heat pump FAQ",
    title: "Everything you need to know about heat pumps",
    intro:
      "Answers to the most common questions about buying, installing and choosing a heat pump in Lille, Villeneuve-d'Ascq, Marcq-en-Barœul and across Hauts-de-France.",
    items: [
      {
        question: "Where can I buy and have an air-to-water heat pump installed in Lille?",
        answer:
          "Hecker & Frères Énergie (HFE) supports you from purchase to installation of your air-to-water heat pump in Lille and across the metropolitan area. As an RGE QualiPAC installer, we size, supply and install Panasonic, Daikin, Atlantic and Mitsubishi air-to-water units. Free quote within 72h, complimentary thermal study and full MaPrimeRénov' & CEE support. No online sales: every project includes a site visit and personalised quote.",
      },
      {
        question: "Who is the heat pump installer in Lille?",
        answer:
          "HFE is an RGE QualiPAC-certified installer based in Lille (44 rue Jean sans Peur), with over 15 years of experience and 1,500+ heat pump, air conditioning and heating installations. We install air-to-water, air-to-air and thermodynamic water heaters within a 50 km radius of Lille. Ten-year installation warranty, maintenance contracts and local after-sales service.",
      },
      {
        question: "Where can I buy an air-to-air heat pump in Lille?",
        answer:
          "For purchase and installation of an air-to-air heat pump (reversible air conditioning) in Lille, HFE provides end-to-end support: room assessment, sizing, supply and installation of single-split or multi-split systems (Panasonic, Daikin, Mitsubishi). Expect €3,500 to €9,000 incl. VAT installed. Free on-site quote — air-to-air units are not eligible for MaPrimeRénov' or CEE.",
      },
      {
        question: "Do you install heat pumps in Villeneuve-d'Ascq?",
        answer:
          "Yes. HFE works in Villeneuve-d'Ascq installing air-to-water, air-to-air and thermodynamic water heaters for single-family homes, co-owned buildings and commercial premises. We regularly carry out air-to-water heat pump projects connected to radiators or underfloor heating. RGE QualiPAC installer — free thermal study and on-site quote.",
      },
      {
        question: "Do you install air-to-water heat pumps in Marcq-en-Barœul?",
        answer:
          "Yes, Marcq-en-Barœul is a priority service area for us. We install air-to-water heat pumps there to replace oil or gas boilers, connected to existing radiators or underfloor heating. As an RGE QualiPAC installer, we handle MaPrimeRénov' and CEE grant applications. Typical timeline: quote within 72h, installation in 2 to 3 days.",
      },
      {
        question: "Do you install heat pumps across Hauts-de-France?",
        answer:
          "Yes. Based in Lille, we cover the Lille metropolitan area (MEL) and Hauts-de-France within a 50 km radius: Nord and Pas-de-Calais, including Roubaix, Tourcoing, Lens, Douai, Valenciennes and surrounding towns. For projects beyond this area, contact us — we review each request individually.",
      },
      {
        question: "Do you install underfloor heating with an air-to-water heat pump in Villeneuve-d'Ascq?",
        answer:
          "Yes. We install new or retrofit hydronic underfloor heating in Villeneuve-d'Ascq, paired with a low-temperature air-to-water heat pump. Ideal for new builds or major renovations for optimal comfort and maximum savings. HFE is RGE certified for heating and QualiPAC certified for heat pumps.",
      },
      {
        question: "How much does an installed heat pump cost in Lille in 2026?",
        answer:
          "An installed air-to-water heat pump in Lille costs between €12,000 and €18,000 incl. VAT (before grants), depending on output, brand and installation complexity. With MaPrimeRénov' (up to €5,000) and CEE (up to €5,500), the out-of-pocket cost can drop to €2,000–4,000 for modest-income households. An air-to-air heat pump (reversible AC) costs between €3,500 and €9,000 incl. VAT installed: it is not eligible for MaPrimeRénov' or CEE. Hecker & Frères Énergie (HFE) is RGE QualiPAC certified for grant-eligible installations.",
      },
      {
        question: "Which heat pump should I choose: air-to-water or air-to-air?",
        answer:
          "Choose an air-to-water heat pump if you already have a central heating circuit (radiators or underfloor heating): it replaces your oil or gas boiler and can produce domestic hot water. Choose an air-to-air heat pump (reversible AC) if you heat with electricity or want to cool your home in summer. Air-to-water is more expensive to install but offers superior comfort and efficiency.",
      },
      {
        question: "Do heat pumps work well in northern France?",
        answer:
          "Yes, perfectly. Modern heat pumps remain efficient down to -15°C, and the climate in northern France (winter temperatures rarely below -5°C) is well suited. High-temperature heat pumps can even replace oil boilers without changing radiators. Seasonal performance (SCOP) remains high: between 3.5 and 4.5 in Hauts-de-France.",
      },
      {
        question: "What MaPrimeRénov' and CEE grants are available for a heat pump in 2026?",
        answer:
          "MaPrimeRénov' and CEE grants apply to air-to-water heat pumps and thermodynamic water heaters, not to air-to-air units (reversible air conditioning). For air-to-water: MaPrimeRénov' from €1,000 (higher incomes) to €5,000 (very modest incomes), CEE heating boost up to €5,500 when replacing oil, gas or coal boilers, and 5.5% VAT on supply and installation.",
      },
      {
        question: "Does a heat pump need servicing?",
        answer:
          "Yes, heat pump servicing is mandatory since the decree of 30 July 2020: every 2 years for units under 12 kW, annually for units ≥ 12 kW. Hecker & Frères Énergie (HFE) offers maintenance contracts from €149 incl. VAT per year, including refrigerant circuit leak testing, filter cleaning and performance checks.",
      },
    ],
  },
} as const;

export function getHeatPumpContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HeatPumpContent = ReturnType<typeof getHeatPumpContent>;
