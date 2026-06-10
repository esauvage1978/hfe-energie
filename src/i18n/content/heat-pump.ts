import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Pompe à chaleur Lille : installation PAC air-eau & air-air RGE",
    description:
      "Installateur RGE QualiPAC à Lille : pompe à chaleur air-eau, air-air, chauffe-eau thermodynamique. Devis gratuit, MaPrimeRénov' & CEE. 15 ans d'expérience.",
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
        scop: "COP 3,0 à 3,5",
        price: "2 500 € à 4 500 €",
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
      "Réponses détaillées aux questions les plus fréquentes sur l'installation, le coût, les aides et l'entretien d'une pompe à chaleur.",
    items: [
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
        question: "Comment gagner des classes au DPE avec une pompe à chaleur ?",
        answer:
          "Sur le terrain, nous constatons qu'une PAC air-air (climatisation réversible), bien dimensionnée, peut faire progresser la note énergétique d'un logement — jusqu'à trois classes dans certains cas, lorsque l'ancien chauffage était très consommateur (radiateurs électriques, appoint). Le gain dépend de votre DPE initial, de la surface réellement chauffée et de la qualité de la pose. La PAC air-eau reste souvent la plus efficace pour un saut important au DPE quand elle remplace une chaudière fioul ou gaz. Hecker & Frères Énergie (HFE) intègre ce point dans l'étude thermique avant devis : nous vous indiquons le potentiel réaliste sur votre bien.",
      },
      {
        question: "Est-ce qu'une pompe à chaleur fonctionne bien dans le Nord ?",
        answer:
          "Oui, parfaitement. Les pompes à chaleur modernes restent performantes jusqu'à -15 °C, et le climat du Nord (températures hivernales descendant rarement sous -5 °C) est tout à fait adapté. Les PAC haute température peuvent même remplacer une chaudière fioul sans changer les radiateurs. Le SCOP (rendement saisonnier) reste élevé : entre 3,5 et 4,5 dans les Hauts-de-France.",
      },
      {
        question: "Combien de temps prend l'installation d'une pompe à chaleur ?",
        answer:
          "Pour une PAC air-eau en remplacement d'une chaudière : 2 à 3 jours d'intervention. Pour une PAC air-air mono-split : 1 journée. Pour un multi-split (3-4 unités intérieures) : 2 jours. Hecker & Frères Énergie (HFE) réalise au préalable une étude thermique et un dimensionnement précis pour garantir la performance de l'installation.",
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
      {
        question: "Quelle est la durée de vie d'une pompe à chaleur ?",
        answer:
          "Une PAC bien entretenue dure entre 15 et 20 ans. La garantie constructeur est généralement de 2 à 5 ans, prolongeable à 7 ou 10 ans selon les marques (Panasonic, Daikin, Mitsubishi, Atlantic). Hecker & Frères Énergie (HFE) est partenaire Panasonic et offre la garantie décennale sur l'installation.",
      },
      {
        question: "La PAC fait-elle du bruit ?",
        answer:
          "Les pompes à chaleur récentes sont très silencieuses : entre 38 et 55 dB(A) à 1 mètre pour l'unité extérieure (équivalent d'un réfrigérateur). Notre équipe vous conseille sur l'emplacement optimal pour respecter la réglementation acoustique (arrêté du 5 décembre 2006) et préserver le confort de vos voisins.",
      },
      {
        question: "Installez-vous des pompes à chaleur à Marcq-en-Barœul et dans la métropole lilloise ?",
        answer:
          "Oui. Installateur RGE QualiPAC basé à Lille, Hecker & Frères Énergie (HFE) installe des pompes à chaleur à Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal et dans toute la zone d'intervention (50 km). Étude thermique et devis gratuits.",
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
        scop: "COP 3.0 to 3.5",
        price: "€2,500 to €4,500",
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
      "Detailed answers to the most common questions about installation, cost, grants and servicing.",
    items: [
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
        question: "How can a heat pump improve my EPC rating?",
        answer:
          "In our experience, a properly sized air-to-air heat pump (reversible air conditioning) can improve a property's energy performance certificate — by up to three bands in some cases, especially when replacing very inefficient heating (electric radiators, supplementary heaters). The gain depends on your starting rating, the heated floor area and installation quality. Air-to-water heat pumps often deliver the largest EPC jump when replacing oil or gas boilers. Hecker & Frères Énergie (HFE) factors this into your free thermal study and quote, with a realistic estimate for your home.",
      },
      {
        question: "Do heat pumps work well in northern France?",
        answer:
          "Yes, perfectly. Modern heat pumps remain efficient down to -15°C, and the climate in northern France (winter temperatures rarely below -5°C) is well suited. High-temperature heat pumps can even replace oil boilers without changing radiators. Seasonal performance (SCOP) remains high: between 3.5 and 4.5 in Hauts-de-France.",
      },
      {
        question: "How long does heat pump installation take?",
        answer:
          "For an air-to-water heat pump replacing a boiler: 2 to 3 days. For a single-split air-to-air unit: 1 day. For a multi-split (3–4 indoor units): 2 days. Hecker & Frères Énergie (HFE) carries out a prior thermal study and precise sizing to ensure installation performance.",
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
      {
        question: "What is the lifespan of a heat pump?",
        answer:
          "A well-maintained heat pump lasts 15 to 20 years. Manufacturer warranty is typically 2 to 5 years, extendable to 7 or 10 years depending on brand (Panasonic, Daikin, Mitsubishi, Atlantic). Hecker & Frères Énergie (HFE) is a Panasonic partner and provides a ten-year installation warranty.",
      },
      {
        question: "Are heat pumps noisy?",
        answer:
          "Recent heat pumps are very quiet: 38 to 55 dB(A) at 1 metre for the outdoor unit (equivalent to a refrigerator). Our team advises on optimal placement to comply with noise regulations (decree of 5 December 2006) and preserve neighbour comfort.",
      },
      {
        question: "Do you install heat pumps in Marcq-en-Barœul and the Lille metropolitan area?",
        answer:
          "Yes. As an RGE QualiPAC-certified installer based in Lille, Hecker & Frères Énergie (HFE) installs heat pumps in Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal and across our full 50 km service area. Thermal study and quotes are free.",
      },
    ],
  },
} as const;

export function getHeatPumpContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HeatPumpContent = ReturnType<typeof getHeatPumpContent>;
