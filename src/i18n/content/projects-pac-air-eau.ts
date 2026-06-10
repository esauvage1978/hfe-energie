import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

export type { Project, ProjectImage } from "./projects-shared";

const chantier1Images: ProjectImage[] = [
  { src: "/projet/pompe_a_chaleur_air_eau/chantier1/2.jpg", alt: "PAC Panasonic 9 kW — module intérieur et ballon ECS", width: 1206, height: 1586 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier1/3.jpg", alt: "PAC Panasonic 9 kW — préparation pose unité extérieure", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier1/1.jpg", alt: "PAC Panasonic 9 kW — unité extérieure installée", width: 1206, height: 1597 },
];

const chantier2Images: ProjectImage[] = [
  { src: "/projet/pompe_a_chaleur_air_eau/chantier2/2.jpg", alt: "PAC 5 kW — radiateurs neufs et circuit hydraulique", width: 1206, height: 896 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier2/3.jpg", alt: "PAC 5 kW — adoucisseur d'eau installé", width: 1206, height: 898 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier2/1.jpg", alt: "PAC 5 kW — réseau de chauffage central créé", width: 1206, height: 896 },
];

const chantier3Images: ProjectImage[] = [
  { src: "/projet/pompe_a_chaleur_air_eau/chantier3/5.jpg", alt: "Vue d'ensemble de l'installation terminée", width: 1206, height: 1602 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier3/2.jpg", alt: "PAC Panasonic 12 kW — module intérieur", width: 1206, height: 1597 },
  { src: "/projet/pompe_a_chaleur_air_eau/chantier3/3.jpg", alt: "Chauffe-eau thermodynamique Atlantic 250 L", width: 1206, height: 1600 },
];

const fr = {
  seo: {
    title: "Nos réalisations PAC air-eau à Lille | Pompe à chaleur — HFE",
    description:
      "Découvrez 3 chantiers de pompe à chaleur air-eau réalisés par Hecker & Frères Énergie (HFE) à Lille et métropole : remplacement chaudière gaz, création circuit chauffage, chauffe-eau thermodynamique.",
    keywords: [
      "réalisation PAC air-eau Lille",
      "chantier pompe à chaleur",
      "remplacement chaudière gaz PAC",
      "installation PAC Panasonic Lille",
      "avant après pompe à chaleur",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Pompe à chaleur", url: "/pompe-a-chaleur" },
    { name: "Réalisations PAC air-eau", url: "/realisations/pompe-a-chaleur-air-eau" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Pompe à chaleur air-eau : nos chantiers",
    description:
      "Chaque installation est différente. Découvrez 3 projets de pompe à chaleur air-eau réalisés par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise — du remplacement de chaudière gaz à la création complète d'un réseau de chauffage central.",
    ctaQuote: "Demander un devis",
  },
  intro: {
    title: "Installation de pompe à chaleur air-eau",
    paragraphs: [
      "Chez Hecker & Frères Énergie (HFE), nous installons des pompes à chaleur air-eau pour le remplacement de chaudières gaz, fioul ou charbon, la création d'un réseau de chauffage central et la production d'eau chaude sanitaire. Certifiés RGE QualiPAC, nous dimensionnons chaque installation en fonction de votre logement, de votre isolation et de vos besoins réels.",
      "La PAC air-eau capte les calories présentes dans l'air extérieur pour les restituer à l'eau du circuit de chauffage : radiateurs, plancher chauffant ou chauffe-eau thermodynamique. Avec un COP de 3 à 4, elle restitue 3 à 4 kWh de chaleur pour 1 kWh consommé — une solution performante et économique pour chauffer votre habitation.",
      "Chaque projet fait l'objet d'une étude thermique avant devis. Nous vous accompagnons également dans le montage des dossiers MaPrimeRénov' et CEE pour réduire votre reste à charge.",
    ],
    advantagesTitle: "Les avantages de la PAC air-eau",
    advantages: [
      "Jusqu'à 70 % d'économies sur la facture de chauffage.",
      "Remplacement direct d'une chaudière gaz ou fioul.",
      "Chauffage et eau chaude sanitaire avec une seule installation.",
      "Compatible radiateurs et plancher chauffant.",
      "Éligible MaPrimeRénov' et CEE (accompagnement HFE).",
      "Confort thermique homogène toute l'année.",
      "Durée de vie de 20 à 25 ans avec entretien régulier.",
      "Valorisation du logement et amélioration du DPE.",
    ],
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "panasonic-12kw-chauffe-eau-thermodynamique-desembouage",
      title: "PAC Panasonic 12 kW + chauffe-eau thermodynamique Atlantic + désembouage",
      subtitle: "Remplacement chaudière gaz, CET Atlantic 250 L",
      description: [
        "Dans le cadre de cette rénovation énergétique, nous avons procédé au remplacement de l'ancienne chaudière gaz par une pompe à chaleur air/eau Panasonic de 12 kW, assurant le chauffage de l'habitation de manière plus économique et performante.",
        "Pour la production d'eau chaude sanitaire, nous avons également installé un chauffe-eau thermodynamique Atlantic de 250 litres, permettant de réduire significativement la consommation énergétique liée à l'eau chaude.",
        "Afin de garantir le bon fonctionnement et la longévité de l'installation, un désembouage complet du circuit de chauffage a été réalisé. Nous avons également remplacé et remis à neuf la nourrice de chauffage pour optimiser la répartition du réseau et assurer un fonctionnement optimal de l'ensemble du système.",
      ],
      images: chantier3Images,
    },
    {
      slug: "panasonic-9kw-remplacement-chaudiere-gaz",
      title: "Remplacement chaudière gaz → PAC Panasonic 9 kW + ECS",
      subtitle: "Pompe à chaleur air-eau Panasonic 9 kW avec production d'eau chaude sanitaire intégrée",
      description: [
        "Dans le cadre de cette rénovation énergétique, nous avons procédé au remplacement de l'ancienne chaudière gaz par une pompe à chaleur air/eau Panasonic de 9 kW assurant à la fois le chauffage du logement et la production d'eau chaude sanitaire. Cette solution permet de réduire significativement les consommations énergétiques tout en améliorant le confort des occupants tout au long de l'année.",
        "En tant que partenaire professionnel Panasonic, nous assurons une installation conforme aux préconisations du fabricant et permettons au client de bénéficier des garanties associées au réseau de partenaires agréés Panasonic.",
      ],
      images: chantier1Images,
    },
    {
      slug: "pac-5kw-creation-chauffage-central-adoucisseur",
      title: "Création d'un réseau chauffage central + PAC 5 kW + adoucisseur",
      subtitle: "Remplacement de radiateurs électriques par un circuit hydraulique complet et une PAC air-eau 5 kW",
      description: [
        "Dans le cadre de cette rénovation énergétique, nous avons installé une pompe à chaleur air/eau de 5 kW dédiée au chauffage de l'habitation. Les anciens radiateurs électriques ont été entièrement déposés puis remplacés par un véritable réseau de chauffage central hydraulique. Nous avons créé et distribué un nouveau circuit de chauffage dans l'ensemble du logement, avec la pose de plusieurs émetteurs adaptés afin d'assurer une diffusion homogène de la chaleur et un confort optimal dans chaque pièce.",
        "Ce projet a permis de remplacer un système de chauffage électrique énergivore par une solution plus performante, plus économique et offrant un meilleur confort thermique au quotidien.",
        "Afin de préserver durablement les équipements et d'améliorer la qualité de l'eau du logement, nous avons également installé un adoucisseur d'eau. Celui-ci limite efficacement les dépôts de calcaire dans les canalisations, les équipements sanitaires et le circuit de chauffage, contribuant ainsi à prolonger la durée de vie des installations tout en maintenant leurs performances.",
      ],
      images: chantier2Images,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de pompe à chaleur air-eau ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Our air-to-water heat pump projects in Lille | HFE",
    description:
      "Discover 3 air-to-water heat pump projects by Hecker & Frères Énergie (HFE) in Lille: gas boiler replacement, central heating creation, thermodynamic water heater installation.",
    keywords: [
      "air-to-water heat pump project Lille",
      "heat pump installation case study",
      "gas boiler replacement heat pump",
      "Panasonic heat pump installer Lille",
      "before after heat pump",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heat pump", url: "/en/heat-pump" },
    { name: "Air-to-water projects", url: "/en/projects/air-to-water-heat-pump" },
  ],
  hero: {
    badge: "Our projects",
    title: "Air-to-water heat pump: our installations",
    description:
      "Every installation is different. Discover 3 air-to-water heat pump projects completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area — from gas boiler replacement to full central heating creation.",
    ctaQuote: "Request a quote",
  },
  intro: {
    title: "Air-to-water heat pump installation",
    paragraphs: [
      "At Hecker & Frères Énergie (HFE), we install air-to-water heat pumps for gas, oil or coal boiler replacement, central heating creation and domestic hot water production. As RGE QualiPAC certified installers, we size every system based on your property, insulation and actual requirements.",
      "An air-to-water heat pump captures heat from outdoor air and transfers it to the heating circuit water: radiators, underfloor heating or a thermodynamic water heater. With a COP of 3 to 4, it delivers 3 to 4 kWh of heat for every 1 kWh consumed — an efficient and economical way to heat your home.",
      "Every project includes a thermal survey before quoting. We also support you with MaPrimeRénov' and CEE grant applications to reduce your out-of-pocket cost.",
    ],
    advantagesTitle: "Benefits of air-to-water heat pumps",
    advantages: [
      "Up to 70% savings on heating bills.",
      "Direct replacement for a gas or oil boiler.",
      "Heating and domestic hot water from a single system.",
      "Compatible with radiators and underfloor heating.",
      "Eligible for MaPrimeRénov' and CEE (support by HFE).",
      "Even thermal comfort all year round.",
      "20 to 25 years lifespan with regular servicing.",
      "Increased property value and improved EPC rating.",
    ],
  },
  projectLabel: "Project",
  projects: [
    {
      slug: "panasonic-12kw-thermodynamic-heater-flushing",
      title: "Panasonic 12 kW + Atlantic thermodynamic water heater + system flush",
      subtitle: "Gas boiler replacement, Atlantic 250 L CET",
      description: [
        "As part of this energy renovation, we replaced the old gas boiler with a Panasonic 12 kW air-to-water heat pump, providing more economical and efficient heating.",
        "For domestic hot water, we also installed an Atlantic 250-litre thermodynamic water heater, significantly reducing hot water energy consumption.",
        "To ensure reliable operation and long system life, a full power flush of the heating circuit was carried out. We also replaced and overhauled the heating manifold to optimise network distribution and ensure the entire system runs at peak performance.",
      ],
      images: chantier3Images,
    },
    {
      slug: "panasonic-9kw-gas-boiler-replacement",
      title: "Gas boiler replacement → Panasonic 9 kW heat pump + DHW",
      subtitle: "Panasonic 9 kW air-to-water heat pump with integrated domestic hot water",
      description: [
        "As part of this energy renovation, we replaced the old gas boiler with a Panasonic 9 kW air-to-water heat pump providing both space heating and domestic hot water production. This solution significantly reduces energy consumption while improving occupant comfort throughout the year.",
        "As a Panasonic professional partner, we ensure installation compliant with the manufacturer's specifications, enabling the customer to benefit from the warranties associated with the approved Panasonic partner network.",
      ],
      images: chantier1Images,
    },
    {
      slug: "5kw-central-heating-creation-softener",
      title: "Full central heating creation + 5 kW heat pump + water softener",
      subtitle: "Electric radiators replaced with a complete hydronic circuit and 5 kW air-to-water heat pump",
      description: [
        "As part of this energy renovation, we installed a 5 kW air-to-water heat pump dedicated to heating. The old electric radiators were fully removed and replaced with a complete hydronic central heating network. We created and distributed a new heating circuit throughout the home, with multiple emitters sized for even heat distribution and optimal comfort in every room.",
        "This project replaced an energy-hungry electric heating system with a more efficient, more economical solution offering superior daily thermal comfort.",
        "To protect the equipment long-term and improve water quality, we also installed a water softener. It effectively limits limescale deposits in pipes, sanitary fittings and the heating circuit, helping extend equipment lifespan while maintaining performance.",
      ],
      images: chantier2Images,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning an air-to-water heat pump project?",
    subtitle: "Free survey, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsPacAirEauContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsPacAirEauContent = ReturnType<typeof getProjectsPacAirEauContent>;
