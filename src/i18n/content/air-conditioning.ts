import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Climatisation réversible Lille : installation multi-split & gainable",
    description:
      "Installateur de climatisation réversible à Lille. Mono-split, multi-split, gainable, cassette. Marques Panasonic, Daikin, Mitsubishi. Devis gratuit, garantie décennale.",
    keywords: [
      "climatisation Lille",
      "climatisation réversible Lille",
      "installateur climatisation Lille",
      "multi-split Lille",
      "climatisation gainable Lille",
      "Panasonic climatisation",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
  ],
  structuredData: {
    serviceName: "Installation de climatisation réversible à Lille",
    serviceDescription:
      "Installation, entretien et dépannage de climatisations réversibles (mono-split, multi-split, gainable, cassette) à Lille et métropole.",
    slug: "climatisation",
  },
  hero: {
    badge: "Confort 4 saisons",
    titleBefore: "Climatisation réversible à ",
    titleHighlight: "Lille",
    description:
      "Hecker & Frères Énergie (HFE) installe des climatisations réversibles haute performance à Lille et dans toute la métropole : mono-split, multi-split, gainable, cassette. Profitez d'un confort optimal hiver comme été avec une consommation énergétique réduite.",
    ctaQuote: "Devis gratuit",
  },
  types: {
    title: "Quel type de climatisation pour vous ?",
    intro:
      "Nous adaptons la solution à votre logement, votre budget et votre besoin de confort. Étude technique systématique avant chaque chiffrage.",
    idealForLabel: "Idéal pour",
    advantagesLabel: "Les avantages",
    items: [
      {
        name: "Mono-split",
        description:
          "Une unité extérieure reliée à une seule unité intérieure murale. La solution la plus simple pour climatiser une pièce de vie ou une chambre.",
        use: "Pièce unique (15 à 45 m²)",
        advantages: [
          "Installation rapide, souvent réalisée en une journée.",
          "Réversible : rafraîchit l'été, chauffe l'hiver.",
          "Unité murale discrète et peu encombrante.",
          "Consommation réduite par rapport au chauffage électrique direct.",
        ],
        detailRoute: "climatisationMonoSplit" as const,
        detailLabel: "Découvrir le mono-split",
      },
      {
        name: "Multi-split",
        description:
          "Une unité extérieure alimente 2 à 5 unités intérieures. Chaque pièce bénéficie de sa propre régulation pour un confort sur mesure.",
        use: "Appartement, maison à étage",
        advantages: [
          "Plusieurs pièces climatisées avec une seule unité extérieure.",
          "Régulation indépendante pièce par pièce.",
          "Unités murales, console basse ou cassette selon les lieux.",
          "Alternative économique au chauffage électrique d'appoint.",
        ],
        detailRoute: "projectsClim" as const,
        detailLabel: "Voir nos réalisations multi-split",
      },
      {
        name: "Gainable",
        description:
          "Le climatiseur est dissimulé dans les combles ou le faux-plafond. L'air est diffusé via des bouches discrètes pour un confort invisible.",
        use: "Maison neuve ou rénovation lourde",
        advantages: [
          "Aucune unité murale visible dans les pièces.",
          "Température homogène dans tout le logement.",
          "Bouches discrètes intégrées au plafond ou au sol.",
          "Esthétique préservée, idéal en construction neuve.",
        ],
      },
      {
        name: "Tertiaire",
        description:
          "Le système DRV (Débit Réfrigérant Variable) assure chauffage et rafraîchissement performants pour les locaux professionnels.",
        use: "Immeubles de bureaux",
        advantages: [
          "Gestion multi-zones adaptée à chaque espace de travail.",
          "Haute performance énergétique sur grands volumes.",
          "Confort été comme hiver pour les occupants.",
          "Solution évolutive pour bureaux et locaux tertiaires.",
        ],
        detailRoute: "projectsClimPro" as const,
        detailLabel: "Voir nos réalisations tertiaires",
      },
    ],
  },
  cta: {
    title: "Envie d'un été frais et d'un hiver doux ?",
    subtitle: "Installation de climatisation réversible Panasonic, Daikin, Mitsubishi - garantie décennale.",
  },
  faq: {
    title: "Questions fréquentes sur la climatisation",
    items: [
      {
        question: "Quelle différence entre climatisation classique et climatisation réversible ?",
        answer:
          "Une climatisation classique ne fait que rafraîchir, tandis qu'une climatisation réversible peut aussi chauffer en inversant son cycle frigorifique. C'est ce qu'on appelle une pompe à chaleur air-air. Le rendement (COP) est excellent : 3 à 4 kWh de chaleur restitués pour 1 kWh consommé. C'est la solution 2-en-1 la plus rentable pour climatiser ET chauffer.",
      },
      {
        question: "Quel est le prix d'une climatisation réversible à Lille ?",
        answer:
          "Pour un mono-split standard, comptez entre 1 800 € et 3 500 € TTC posé. Pour un multi-split 3 unités intérieures, entre 5 500 € et 9 000 € TTC. Une installation gainable maison entière débute autour de 9 500 € TTC. Tous nos devis sont gratuits, détaillés et incluent une étude de dimensionnement.",
      },
      {
        question: "La climatisation réversible est-elle éligible aux aides ?",
        answer:
          "Non. La climatisation réversible (PAC air-air) n'est pas éligible à MaPrimeRénov' ni au dispositif CEE « Coup de pouce chauffage ». Les budgets affichés sur notre site correspondent au prix TTC posé, sans aide de l'État.",
      },
      {
        question: "Comment gagner des classes au DPE avec une climatisation réversible ?",
        answer:
          "L'installation d'une PAC air-air (climatisation réversible) peut, selon notre retour d'expérience, améliorer la classe énergétique de votre logement — jusqu'à trois rangs dans les situations les plus favorables, par exemple après un chauffage électrique direct très énergivore. Le résultat varie selon l'état du logement, l'isolation et le dimensionnement des unités intérieures. Même sans aides de l'État, c'est un levier intéressant pour valoriser votre bien. Nous abordons ce point lors de l'étude gratuite avant devis.",
      },
      {
        question: "Quelles marques installez-vous ?",
        answer:
          "Hecker & Frères Énergie (HFE) est partenaire officiel Panasonic. Nous installons également Daikin, Mitsubishi Electric, Airwell, Atlantic, LG et Toshiba. Toutes ces marques offrent une garantie constructeur de 3 à 5 ans, prolongeable jusqu'à 10 ans selon les modèles.",
      },
      {
        question: "Installez-vous la climatisation à La Madeleine et dans la métropole lilloise ?",
        answer:
          "Oui. Nous installons la climatisation réversible à Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal et dans toute notre zone d'intervention (50 km). Étude de dimensionnement et devis gratuits.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Reversible air conditioning Lille: multi-split & ducted installation",
    description:
      "Reversible air conditioning installer in Lille. Single-split, multi-split, ducted, cassette. Panasonic, Daikin, Mitsubishi brands. Free quote, ten-year warranty.",
    keywords: [
      "air conditioning Lille",
      "reversible air conditioning Lille",
      "air conditioning installer Lille",
      "multi-split Lille",
      "ducted air conditioning Lille",
      "Panasonic air conditioning",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
  ],
  structuredData: {
    serviceName: "Reversible air conditioning installation in Lille",
    serviceDescription:
      "Installation, servicing and repair of reversible air conditioning (single-split, multi-split, ducted, cassette) in Lille and the metropolitan area.",
    slug: "air-conditioning",
  },
  hero: {
    badge: "Year-round comfort",
    titleBefore: "Reversible air conditioning in ",
    titleHighlight: "Lille",
    description:
      "Hecker & Frères Énergie (HFE) installs high-performance reversible air conditioning in Lille and across the metropolitan area: single-split, multi-split, ducted and cassette systems. Enjoy optimal comfort winter and summer with lower energy consumption.",
    ctaQuote: "Free quote",
  },
  types: {
    title: "Which air conditioning system is right for you?",
    intro:
      "We tailor the solution to your property, budget and comfort requirements. A technical survey is carried out before every quote.",
    idealForLabel: "Ideal for",
    advantagesLabel: "Benefits",
    items: [
      {
        name: "Single-split",
        description:
          "One outdoor unit connected to a single wall-mounted indoor unit. The simplest solution to cool a living room or bedroom.",
        use: "Single room (15 to 45 m²)",
        advantages: [
          "Quick installation, often completed in one day.",
          "Reversible: cools in summer, heats in winter.",
          "Discreet, compact wall-mounted unit.",
          "Lower consumption than direct electric heating.",
        ],
        detailRoute: "climatisationMonoSplit" as const,
        detailLabel: "Discover single-split",
      },
      {
        name: "Multi-split",
        description:
          "One outdoor unit powers 2 to 5 indoor units. Each room has its own control for tailored comfort.",
        use: "Flat, multi-storey home",
        advantages: [
          "Several rooms cooled with a single outdoor unit.",
          "Independent control room by room.",
          "Wall-mounted, floor console or cassette units as needed.",
          "Economical alternative to supplementary electric heating.",
        ],
        detailRoute: "projectsClim" as const,
        detailLabel: "See our multi-split projects",
      },
      {
        name: "Ducted",
        description:
          "The unit is concealed in the loft or false ceiling. Air is distributed through discreet vents for invisible comfort.",
        use: "New build or major renovation",
        advantages: [
          "No visible wall units in the rooms.",
          "Even temperature throughout the home.",
          "Discreet ceiling or floor vents.",
          "Preserves aesthetics — ideal for new builds.",
        ],
      },
      {
        name: "Commercial",
        description:
          "Variable refrigerant flow (VRF/DRV) systems deliver high-performance heating and cooling for commercial premises.",
        use: "Office buildings",
        advantages: [
          "Multi-zone control tailored to each workspace.",
          "High energy efficiency for large floor areas.",
          "Year-round comfort for occupants.",
          "Scalable solution for offices and commercial buildings.",
        ],
        detailRoute: "projectsClimPro" as const,
        detailLabel: "See our commercial projects",
      },
    ],
  },
  cta: {
    title: "Want a cool summer and a warm winter?",
    subtitle: "Panasonic, Daikin, Mitsubishi reversible air conditioning — ten-year warranty.",
  },
  faq: {
    title: "Frequently asked questions about air conditioning",
    items: [
      {
        question: "What is the difference between standard and reversible air conditioning?",
        answer:
          "Standard air conditioning only cools, whereas reversible air conditioning can also heat by reversing its refrigeration cycle. This is known as an air-to-air heat pump. Efficiency (COP) is excellent: 3 to 4 kWh of heat delivered per 1 kWh consumed. It is the most cost-effective 2-in-1 solution for cooling and heating.",
      },
      {
        question: "How much does reversible air conditioning cost in Lille?",
        answer:
          "For a standard single-split, expect between €1,800 and €3,500 incl. VAT installed. For a 3-indoor-unit multi-split, between €5,500 and €9,000 incl. VAT. A whole-house ducted installation starts around €9,500 incl. VAT. All our quotes are free, detailed and include a sizing study.",
      },
      {
        question: "Is reversible air conditioning eligible for grants?",
        answer:
          "No. Reversible air conditioning (air-to-air heat pumps) is not eligible for MaPrimeRénov' or the CEE heating boost scheme. Budgets shown on our website are fully installed prices incl. VAT, with no government grants.",
      },
      {
        question: "How can reversible air conditioning improve my EPC rating?",
        answer:
          "Installing an air-to-air heat pump (reversible air conditioning) can, based on our field experience, improve your property's energy rating — by up to three bands in the most favourable cases, for example after very inefficient direct electric heating. Results vary with building condition, insulation and unit sizing. Even without government grants, it remains a worthwhile way to add value to your home. We cover this during your free pre-quote study.",
      },
      {
        question: "Which brands do you install?",
        answer:
          "Hecker & Frères Énergie (HFE) is an official Panasonic partner. We also install Daikin, Mitsubishi Electric, Airwell, Atlantic, LG and Toshiba. All these brands offer a 3 to 5-year manufacturer warranty, extendable up to 10 years depending on the model.",
      },
      {
        question: "Do you install air conditioning in La Madeleine and the Lille metropolitan area?",
        answer:
          "Yes. We install reversible air conditioning in Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal and across our full 50 km service area. Sizing study and quotes are free.",
      },
    ],
  },
} as const;

export function getAirConditioningContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type AirConditioningContent = ReturnType<typeof getAirConditioningContent>;
