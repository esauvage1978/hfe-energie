import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const heroImageFr: ProjectImage = {
  src: "/projet/ballon_thermodynamique/hero.jpg",
  alt: "Chauffe-eau thermodynamique Atlantic installé dans un local technique lumineux — installation par HFE à Lille",
  width: 1024,
  height: 705,
};

const heroImageEn: ProjectImage = {
  src: "/projet/ballon_thermodynamique/hero.jpg",
  alt: "Atlantic thermodynamic water heater installed in a bright utility room — installation by HFE in Lille",
  width: 1024,
  height: 705,
};

const chantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/ballon_thermodynamique/projet1/1.jpg", alt: "Chauffe-eau thermodynamique Atlantic installé en cave avec vase d'expansion sanitaire", width: 781, height: 1024 },
];

const chantier2ImagesFr: ProjectImage[] = [
  { src: "/projet/ballon_thermodynamique/projet1/2.jpg", alt: "Vue d'ensemble de l'installation en cave — ballon thermodynamique Atlantic et équipements associés", width: 1023, height: 1024 },
];

const chantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/ballon_thermodynamique/projet1/1.jpg", alt: "Atlantic thermodynamic water heater installed in the cellar with domestic expansion vessel", width: 781, height: 1024 },
];

const chantier2ImagesEn: ProjectImage[] = [
  { src: "/projet/ballon_thermodynamique/projet1/2.jpg", alt: "Overview of the cellar installation — Atlantic thermodynamic tank and associated equipment", width: 1023, height: 1024 },
];

const fr = {
  seo: {
    title: "Chauffe-eau Atlantic & ballon thermodynamique à Lille — HFE",
    description:
      "Remplacement et installation de chauffe-eau électriques Atlantic et ballon thermodynamique à Lille par HFE : compacts, verticaux, extra-plats et CET. Devis gratuit, installation sécurisée.",
    keywords: [
      "chauffe-eau Atlantic Lille",
      "ballon thermodynamique Lille",
      "ballon extra-plat Atlantic Lille",
      "remplacement ballon électrique Lille",
      "installation CET cave",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Pompe à chaleur", url: "/pompe-a-chaleur" },
    { name: "Réalisations ballon thermodynamique", url: "/realisations/ballon-thermodynamique" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Chauffe-eau Atlantic & ballon thermodynamique",
    description:
      "Remplacement et installation de chauffe-eau électriques Atlantic et ballon thermodynamique à Lille et métropole. Découvrez nos chantiers et trouvez la solution adaptée à votre logement.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Tous les chauffe-eau Atlantic, du compact au ballon thermodynamique",
    paragraphs: [
      "Chez HFE – Hecker & Frères Énergie, nous assurons le remplacement et l'installation de tous types de chauffe-eau électriques Atlantic, adaptés aux besoins de chaque logement. Que ce soit pour un studio, un appartement ou une maison familiale, nous sélectionnons la capacité la plus adaptée afin de garantir un confort optimal en eau chaude tout en maîtrisant votre consommation d'énergie.",
    ],
    sections: [
      {
        title: "Ballons compacts 15 à 30 litres",
        paragraphs: [
          "Idéals pour les points d'eau isolés tels qu'un lave-mains, un évier de cuisine, un local professionnel ou une dépendance. Ces chauffe-eau de faible capacité permettent de disposer rapidement d'eau chaude sans encombrement.",
        ],
      },
      {
        title: "Ballons verticaux et horizontaux 50 à 300 litres",
        paragraphs: [
          "Les chauffe-eau Atlantic traditionnels sont disponibles dans de nombreuses capacités :",
        ],
        items: [
          "50 à 100 litres : parfaits pour une à deux personnes.",
          "150 à 200 litres : adaptés à une famille de 2 à 4 personnes.",
          "250 à 300 litres : recommandés pour les familles nombreuses avec une forte consommation d'eau chaude.",
        ],
        afterItems: [
          "Ces modèles offrent une excellente fiabilité, une bonne isolation thermique et un confort d'utilisation au quotidien.",
        ],
      },
      {
        title: "Ballons extra-plats Atlantic 40 à 120 litres",
        paragraphs: [
          "Lorsque l'espace est limité, les chauffe-eau extra-plats Atlantic constituent une solution idéale. Leur faible profondeur permet une installation dans une salle de bain, un placard ou une buanderie tout en conservant une capacité importante.",
          "Disponibles en :",
        ],
        items: ["40 litres", "65 litres", "80 litres", "100 litres", "120 litres"],
        afterItems: [
          "Leur design moderne et leur temps de chauffe optimisé en font une solution particulièrement appréciée lors des rénovations.",
        ],
      },
      {
        title: "Ballon thermodynamique Atlantic",
        paragraphs: [
          "Pour aller plus loin dans les économies d'énergie, le ballon thermodynamique Atlantic (CET) combine un ballon d'eau chaude et une mini-pompe à chaleur. Il capte les calories de l'air ambiant pour produire votre eau chaude sanitaire : jusqu'à 70 % d'économies par rapport à un ballon électrique classique. L'installation en cave est souvent privilégiée pour optimiser le rendement et faciliter l'entretien.",
        ],
      },
    ],
    advantagesTitle: "Pourquoi choisir Atlantic ?",
    advantages: [
      "Fabrication française reconnue",
      "Excellente fiabilité et longévité",
      "Large choix de capacités et de formats",
      "Pièces détachées facilement disponibles",
      "Confort optimal en eau chaude sanitaire",
    ],
    turnkey: {
      title: "Une installation complète et sécurisée",
      intro: "Lors de chaque remplacement, nous vérifions l'ensemble de l'installation et remplaçons si nécessaire :",
      items: [
        "Groupe de sécurité",
        "Réducteur de pression",
        "Vase d'expansion sanitaire",
        "Raccordements hydrauliques",
        "Évacuation des condensats selon le modèle",
      ],
      outro:
        "Nous assurons également l'évacuation de l'ancien chauffe-eau et la mise en service du nouvel équipement.",
    },
    closing: {
      title: "Le bon ballon pour votre logement",
      text: "Grâce à notre expertise, nous vous accompagnons dans le choix du ballon électrique Atlantic ou du ballon thermodynamique le mieux adapté à votre logement et à vos habitudes de consommation afin de garantir performance, économies et confort au quotidien.",
    },
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "ballon-thermodynamique-atlantic-cave",
      title: "Ballon thermodynamique en cave",
      subtitle: "Remplacement d'un ballon électrique par un chauffe-eau thermodynamique Atlantic en cave",
      description: [
        "Dans le cadre de cette rénovation, nous avons procédé au remplacement de l'ancien ballon d'eau chaude électrique par un chauffe-eau thermodynamique Atlantic, permettant de réduire significativement la consommation énergétique liée à la production d'eau chaude sanitaire.",
        "Le ballon a été installé dans la cave du logement, un emplacement idéal pour optimiser son fonctionnement et faciliter son entretien. Afin de protéger l'installation et d'améliorer sa longévité, nous avons également mis en place un vase d'expansion sanitaire. Celui-ci permet d'absorber la dilatation de l'eau lors de la montée en température, limitant ainsi les surpressions dans le réseau et les écoulements au niveau du groupe de sécurité.",
        "Cette réalisation offre au client une solution moderne, économique et durable pour la production d'eau chaude sanitaire tout en garantissant un fonctionnement fiable et performant au quotidien.",
      ],
      images: chantier1ImagesFr,
    },
    {
      slug: "ballon-thermodynamique-atlantic-installation-complete",
      title: "Installation CET Atlantic complète",
      subtitle: "Mise en place d'un ballon thermodynamique en remplacement d'un cumulus électrique vieillissant",
      description: [
        "Sur ce chantier, nous avons remplacé un cumulus électrique arrivé en fin de vie par un chauffe-eau thermodynamique Atlantic. L'objectif : réduire la facture d'eau chaude sanitaire tout en conservant une réserve confortable pour toute la famille.",
        "L'installation a été réalisée en cave, avec remplacement du groupe de sécurité, des raccordements hydrauliques et la pose d'un vase d'expansion adapté. L'ensemble a été contrôlé, purgé et mis en service le jour même.",
        "Le client bénéficie désormais d'une production d'ECS plus économique et éligible aux aides MaPrimeRénov' et CEE, avec un équipement Atlantic fiable et facilement entretenu.",
      ],
      images: chantier2ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de chauffe-eau ou ballon thermodynamique ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Atlantic water heaters & thermodynamic tank in Lille — HFE",
    description:
      "Atlantic electric water heater and thermodynamic tank replacement and installation in Lille by HFE: compact, vertical, slimline and thermodynamic units. Free quote, safe installation.",
    keywords: [
      "Atlantic water heater Lille",
      "thermodynamic water heater Lille",
      "slimline water heater Lille",
      "electric water heater replacement Lille",
      "thermodynamic tank installation",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heat pump", url: "/en/heat-pump" },
    { name: "Thermodynamic water heater projects", url: "/en/projects/thermodynamic-water-heater" },
  ],
  hero: {
    badge: "Our projects",
    title: "Atlantic water heaters & thermodynamic tank",
    description:
      "Replacement and installation of Atlantic electric water heaters and thermodynamic tanks in Lille and the metropolitan area. Discover our projects and find the right solution for your home.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "All Atlantic water heaters, from compact to thermodynamic",
    paragraphs: [
      "At HFE – Hecker & Frères Énergie, we handle the replacement and installation of all types of Atlantic electric water heaters to suit every home. Whether you live in a studio, flat or family house, we select the right capacity to ensure optimal hot water comfort while keeping energy consumption under control.",
    ],
    sections: [
      {
        title: "Compact tanks 15 to 30 litres",
        paragraphs: [
          "Ideal for isolated water points such as a hand basin, kitchen sink, commercial room or outbuilding. These low-capacity units provide hot water quickly without taking up space.",
        ],
      },
      {
        title: "Vertical and horizontal tanks 50 to 300 litres",
        paragraphs: ["Traditional Atlantic water heaters are available in many capacities:"],
        items: [
          "50 to 100 litres: perfect for one to two people.",
          "150 to 200 litres: suited to a family of 2 to 4.",
          "250 to 300 litres: recommended for larger families with high hot water demand.",
        ],
        afterItems: [
          "These models offer excellent reliability, good thermal insulation and everyday comfort.",
        ],
      },
      {
        title: "Atlantic slimline tanks 40 to 120 litres",
        paragraphs: [
          "When space is limited, Atlantic slimline water heaters are the ideal solution. Their shallow depth allows installation in a bathroom, cupboard or utility room while maintaining substantial capacity.",
          "Available in:",
        ],
        items: ["40 litres", "65 litres", "80 litres", "100 litres", "120 litres"],
        afterItems: [
          "Their modern design and optimised heating time make them especially popular in renovation projects.",
        ],
      },
      {
        title: "Atlantic thermodynamic water heater",
        paragraphs: [
          "To go further on energy savings, the Atlantic thermodynamic water heater (TWH) combines a hot water tank and a mini heat pump. It captures heat from the surrounding air to produce domestic hot water — up to 70% savings compared with a standard electric tank. Cellar installation is often preferred to optimise performance and simplify servicing.",
        ],
      },
    ],
    advantagesTitle: "Why choose Atlantic?",
    advantages: [
      "Recognised French manufacturing",
      "Excellent reliability and longevity",
      "Wide choice of capacities and formats",
      "Spare parts readily available",
      "Optimal domestic hot water comfort",
    ],
    turnkey: {
      title: "A complete, safe installation",
      intro: "With every replacement, we check the entire installation and replace where necessary:",
      items: [
        "Safety group",
        "Pressure reducer",
        "Domestic expansion vessel",
        "Hydraulic connections",
        "Condensate drainage depending on the model",
      ],
      outro: "We also remove the old water heater and commission the new equipment.",
    },
    closing: {
      title: "The right tank for your home",
      text: "Thanks to our expertise, we help you choose the Atlantic electric water heater or thermodynamic tank best suited to your home and usage habits to ensure performance, savings and everyday comfort.",
    },
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "atlantic-thermodynamic-water-heater-cellar",
      title: "Thermodynamic water heater in cellar",
      subtitle: "Replacing an electric water heater with an Atlantic thermodynamic unit in a cellar",
      description: [
        "As part of this renovation, we replaced the old electric water heater with an Atlantic thermodynamic unit, significantly reducing the energy consumption associated with domestic hot water production.",
        "The tank was installed in the property's cellar — an ideal location to optimise performance and facilitate maintenance. To protect the installation and extend its service life, we also fitted a domestic expansion vessel. This absorbs water expansion during temperature rise, limiting overpressure in the system and discharge at the safety group.",
        "This project gives the client a modern, economical and durable solution for domestic hot water while ensuring reliable, high-performance daily operation.",
      ],
      images: chantier1ImagesEn,
    },
    {
      slug: "atlantic-thermodynamic-full-installation",
      title: "Complete Atlantic TWH installation",
      subtitle: "Installing a thermodynamic water heater to replace an ageing electric tank",
      description: [
        "On this project, we replaced an end-of-life electric tank with an Atlantic thermodynamic water heater. The goal: cut domestic hot water running costs while maintaining a comfortable reserve for the whole household.",
        "The installation was carried out in the cellar, with replacement of the safety group, hydraulic connections and a suitably sized expansion vessel. The system was checked, bled and commissioned the same day.",
        "The client now benefits from more economical hot water production eligible for MaPrimeRénov' and CEE grants, with reliable Atlantic equipment that is easy to service.",
      ],
      images: chantier2ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning a water heater or thermodynamic tank project?",
    subtitle: "Free survey, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsBallonThermodynamiqueContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsBallonThermodynamiqueContent = ReturnType<typeof getProjectsBallonThermodynamiqueContent>;
