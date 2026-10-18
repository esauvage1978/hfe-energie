import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Climatisation réversible à Lille : installation & devis",
    description:
      "Installateur de climatisation réversible à Lille : mono-split, multi-split, gainable. Panasonic, Daikin, Mitsubishi. TVA à 5,5 % sous conditions, devis gratuit.",
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
      "HFE installe cinq types de climatisation : mono-split, multi-split, gainable, petit tertiaire et DRV tertiaire. Nous adaptons la solution à votre logement, votre budget et votre besoin de confort. Étude technique systématique avant chaque chiffrage.",
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
        detailRoute: "projectsGainable" as const,
        detailLabel: "Voir nos réalisations gainables",
      },
      {
        name: "Petit tertiaire",
        description:
          "Un multi-split réversible alimente plusieurs unités intérieures pour climatiser un commerce, un cabinet ou un petit bureau avec une seule unité extérieure.",
        use: "Commerce, cabinet, petit bureau (50 à 150 m²)",
        advantages: [
          "Confort été comme hiver dans chaque espace de travail.",
          "Régulation indépendante pièce par pièce.",
          "Unités murales discrètes, intégration en faux plafond possible.",
          "Solution économique par rapport à un système DRV pour les petites surfaces.",
        ],
        detailRoute: "projectsPetitTertiaire" as const,
        detailLabel: "Voir nos réalisations petit tertiaire",
      },
      {
        name: "DRV tertiaire",
        description:
          "Le système DRV (Débit de Réfrigérant Variable) assure chauffage et rafraîchissement performants pour les bâtiments tertiaires de grande superficie, avec une régulation fine zone par zone.",
        use: "Bureaux, hôtels, commerces étendus",
        advantages: [
          "Gestion multi-zones adaptée à chaque espace.",
          "Haute performance énergétique sur grands volumes.",
          "Confort été comme hiver pour les occupants.",
          "Solution évolutive pour bâtiments tertiaires.",
        ],
        detailRoute: "projectsDrvTertiaire" as const,
        detailLabel: "Voir nos réalisations DRV tertiaire",
      },
    ],
  },
  comfortCloud: {
    badge: "Pilotage connecté Panasonic",
    title: "Votre climatisation pilotable avec l'application Comfort Cloud",
    intro:
      "Les climatisations réversibles Panasonic compatibles se pilotent à distance via l'application gratuite Comfort Cloud. Depuis votre smartphone, réglez la température, programmez vos plages de confort et suivez votre consommation — où que vous soyez.",
    image: {
      src: "/assets/climatisation/comfort-cloud-app.jpg",
      alt: "Application Comfort Cloud Panasonic sur smartphone — pilotage de la climatisation réversible depuis le salon",
      width: 959,
      height: 645,
    },
    highlights: [
      { value: "24/7", label: "Contrôle à distance" },
      { value: "6", label: "Créneaux programmables par jour" },
      { value: "20", label: "Unités gérables par groupe" },
    ],
    features: [
      {
        icon: "phone" as const,
        title: "Pilotage depuis votre smartphone",
        text: "Allumez, éteignez et réglez chaque unité à distance : température, mode chauffage/refroidissement, vitesse et direction de l'air.",
      },
      {
        icon: "clock" as const,
        title: "Programmation hebdomadaire",
        text: "Définissez jusqu'à six créneaux par jour pour adapter automatiquement le confort à votre rythme de vie.",
      },
      {
        icon: "leaf" as const,
        title: "Suivi énergétique",
        text: "Consultez les graphiques de consommation et estimez vos coûts pour mieux maîtriser votre facture d'électricité.",
      },
      {
        icon: "snowflake" as const,
        title: "Confort avant votre retour",
        text: "Pré-refroidissez ou pré-chauffez votre logement avant d'arriver : la pièce est à la bonne température dès votre entrée.",
      },
    ],
    extras: [
      "Activation de la technologie nanoe™ X sur les modèles compatibles pour une meilleure qualité de l'air intérieur.",
      "Compatibilité avec les principaux assistants vocaux pour un pilotage mains libres.",
      "Connexion Wi-Fi intégrée ou via l'adaptateur optionnel CZ-TACG1 selon le modèle installé.",
    ],
    note: "En tant que partenaire Panasonic ProClub, HFE installe, met en service et configure l'application Comfort Cloud lors de la livraison de votre climatisation.",
    partnerCta: "Découvrir notre partenariat Panasonic",
    externalLabel: "En savoir plus sur Comfort Cloud",
    externalUrl: "https://www.aircon.panasonic.eu/FR_fr/happening/panasonic-comfort-cloud-app-21/",
    cta: "Demander une installation connectée",
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
          "MaPrimeRénov' et le Coup de pouce CEE ne couvrent en principe pas la PAC air-air (climatisation réversible). En revanche, depuis le 18 juillet 2026, certaines PAC air/air performantes peuvent bénéficier du taux de TVA réduit à 5,5 % sous conditions (logement de plus de 2 ans, classes énergétiques, fluide, connectivité). Nous détaillons la mesure dans notre article dédié et appliquons le bon taux sur devis après étude.",
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
      {
        question: "Qu'est-ce que l'application Panasonic Comfort Cloud ?",
        answer:
          "Comfort Cloud est l'application gratuite Panasonic (iOS et Android) qui permet de piloter à distance vos climatisations réversibles compatibles : réglage de la température, modes, programmation hebdomadaire, suivi de consommation et, sur certains modèles, activation de nanoe™ X. La connexion s'effectue via Wi-Fi intégré ou adaptateur CZ-TACG1. HFE configure l'application lors de la mise en service.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Reversible air conditioning in Lille: installation & quote",
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
      "HFE installs five types of air conditioning: single-split, multi-split, ducted, small commercial and commercial VRF. We tailor the solution to your property, budget and comfort requirements. A technical survey is carried out before every quote.",
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
        detailRoute: "projectsGainable" as const,
        detailLabel: "See our ducted projects",
      },
      {
        name: "Small commercial",
        description:
          "A reversible multi-split system powers several indoor units to air-condition a retail unit, consulting room or small office from a single outdoor unit.",
        use: "Retail, consulting room, small office (50–150 m²)",
        advantages: [
          "Year-round comfort in each workspace.",
          "Independent room-by-room control.",
          "Discreet wall units, suspended-ceiling integration possible.",
          "Cost-effective alternative to VRF for smaller floor areas.",
        ],
        detailRoute: "projectsPetitTertiaire" as const,
        detailLabel: "See our small commercial projects",
      },
      {
        name: "Commercial VRF",
        description:
          "Variable refrigerant flow (VRF/DRV) systems deliver high-performance heating and cooling for large commercial buildings with fine zone-by-zone control.",
        use: "Offices, hotels, large retail premises",
        advantages: [
          "Multi-zone control tailored to each space.",
          "High energy efficiency for large floor areas.",
          "Year-round comfort for occupants.",
          "Scalable solution for commercial buildings.",
        ],
        detailRoute: "projectsDrvTertiaire" as const,
        detailLabel: "See our commercial VRF projects",
      },
    ],
  },
  comfortCloud: {
    badge: "Panasonic connected control",
    title: "Control your air conditioning with the Comfort Cloud app",
    intro:
      "Compatible Panasonic reversible air conditioners can be controlled remotely via the free Comfort Cloud app. From your smartphone, adjust temperature, set comfort schedules and monitor consumption — wherever you are.",
    image: {
      src: "/assets/climatisation/comfort-cloud-app.jpg",
      alt: "Panasonic Comfort Cloud app on a smartphone — remote control of reversible air conditioning from the living room",
      width: 959,
      height: 645,
    },
    highlights: [
      { value: "24/7", label: "Remote control" },
      { value: "6", label: "Schedulable slots per day" },
      { value: "20", label: "Units per group" },
    ],
    features: [
      {
        icon: "phone" as const,
        title: "Control from your smartphone",
        text: "Switch units on and off remotely and adjust temperature, heating/cooling mode, fan speed and airflow direction.",
      },
      {
        icon: "clock" as const,
        title: "Weekly scheduling",
        text: "Set up to six time slots per day to automatically match comfort to your daily routine.",
      },
      {
        icon: "leaf" as const,
        title: "Energy monitoring",
        text: "View consumption graphs and cost estimates to keep your electricity bills under control.",
      },
      {
        icon: "snowflake" as const,
        title: "Comfort before you arrive",
        text: "Pre-cool or pre-heat your home before you get back — the room is at the right temperature when you walk in.",
      },
    ],
    extras: [
      "nanoe™ X technology activation on compatible models for better indoor air quality.",
      "Compatible with major voice assistants for hands-free control.",
      "Built-in Wi-Fi or optional CZ-TACG1 adapter depending on the installed model.",
    ],
    note: "As a Panasonic ProClub partner, HFE installs, commissions and configures the Comfort Cloud app when your air conditioning is delivered.",
    partnerCta: "Discover our Panasonic partnership",
    externalLabel: "Learn more about Comfort Cloud",
    externalUrl: "https://www.aircon.panasonic.eu/FR_fr/happening/panasonic-comfort-cloud-app-21/",
    cta: "Request a connected installation",
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
          "MaPrimeRénov' and the CEE heating boost generally do not cover air-to-air heat pumps (reversible AC). However, since 18 July 2026, certain high-performance air-to-air units can qualify for the reduced 5.5% VAT rate under conditions (home over 2 years old, energy classes, refrigerant, connectivity). We detail the measure in our dedicated article and apply the correct rate on quotes after the study.",
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
      {
        question: "What is the Panasonic Comfort Cloud app?",
        answer:
          "Comfort Cloud is Panasonic's free app (iOS and Android) for remote control of compatible reversible air conditioners: temperature, modes, weekly scheduling, consumption monitoring and, on selected models, nanoe™ X activation. Connection uses built-in Wi-Fi or the CZ-TACG1 adapter. HFE sets up the app during commissioning.",
      },
    ],
  },
} as const;

export function getAirConditioningContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type AirConditioningContent = ReturnType<typeof getAirConditioningContent>;
