import type { ProjectBeforeAfterSide, ProjectBrand, ProjectResult, ProjectStat } from "./projects-shared";

export interface ProjectEnrichment {
  stats: [ProjectStat, ProjectStat, ProjectStat, ProjectStat];
  beforeAfter: { before?: ProjectBeforeAfterSide; after?: ProjectBeforeAfterSide; afters?: readonly ProjectBeforeAfterSide[] };
  results: [ProjectResult, ProjectResult, ProjectResult, ProjectResult];
  brands?: readonly ProjectBrand[];
}

const panasonicBrandFr: ProjectBrand = {
  name: "Panasonic Aquarea",
  logo: "/assets/partenaires/panasonic.png",
  warranties: ["Garantie 5 ans compresseur", "Garantie 3 ans pièces"],
};

const panasonicBrandEn: ProjectBrand = {
  name: "Panasonic Aquarea",
  logo: "/assets/partenaires/panasonic.png",
  warranties: ["5-year compressor warranty", "3-year parts warranty"],
};

const panasonicClimBrandFr: ProjectBrand = {
  name: "Panasonic",
  logo: "/assets/partenaires/panasonic.png",
  warranties: ["Garantie constructeur 3 à 5 ans", "Garantie 3 ans pièces"],
};

const panasonicClimBrandEn: ProjectBrand = {
  name: "Panasonic",
  logo: "/assets/partenaires/panasonic.png",
  warranties: ["3 to 5-year manufacturer warranty", "3-year parts warranty"],
};

const atlanticBrandFr: ProjectBrand = {
  name: "Atlantic",
  logo: "/assets/partenaires/atlantic.png",
  warranties: ["Garantie constructeur Atlantic"],
};

const atlanticBrandEn: ProjectBrand = {
  name: "Atlantic",
  logo: "/assets/partenaires/atlantic.png",
  warranties: ["Atlantic manufacturer warranty"],
};

export const projectEnrichmentFr: Record<string, ProjectEnrichment> = {
  "panasonic-9kw-remplacement-chaudiere-gaz": {
    stats: [
      { icon: "heat-pump", value: "9 kW", label: "Puissance installée" },
      { icon: "clock", value: "2 jours", label: "Durée d'installation" },
      { icon: "check", value: "4", label: "Occupants" },
      { icon: "droplet", value: "100 %", label: "Chauffage + ECS" },
    ],
    beforeAfter: {
      before: {
        caption: "Ancienne chaudière gaz et ballon ECS",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier1/avant.jpg",
          alt: "Ancienne chaudière gaz et ballon d'eau chaude avant installation de la PAC",
          width: 780,
          height: 1024,
        },
      },
      after: {
        caption: "PAC Panasonic 9 kW + ECS",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier1/apres.jpg",
          alt: "Module intérieur Panasonic Aquarea et ballon ECS installés",
          width: 1206,
          height: 1586,
        },
      },
    },
    results: [
      { title: "Économies d'énergie", description: "Jusqu'à 70 % d'économies sur la facture de chauffage par rapport au gaz." },
      { title: "Confort amélioré", description: "Chauffage et eau chaude sanitaire assurés par une seule installation." },
      { title: "Aides financières", description: "Éligible MaPrimeRénov' et CEE — accompagnement du dossier par HFE." },
      { title: "Durée de vie", description: "25 ans de durée de vie attendue avec un entretien annuel régulier." },
    ],
    brands: [panasonicBrandFr],
  },
  "pac-5kw-creation-chauffage-central-adoucisseur": {
    stats: [
      { icon: "heat-pump", value: "5 kW", label: "Puissance installée" },
      { icon: "clock", value: "3 jours", label: "Durée du chantier" },
      { icon: "radiator", value: "3", label: "Émetteurs posés" },
      { icon: "check", value: "3", label: "Intervenants" },
    ],
    beforeAfter: {
      after: {
        caption: "Installation finale — PAC 5 kW et réseau hydraulique",
        image: { src: "/projet/pompe_a_chaleur_air_eau/chantier2/2.jpg", alt: "PAC 5 kW — module intérieur Panasonic et ballon tampon en cave", width: 1206, height: 896 },
      },
    },
    results: [
      { title: "Confort homogène", description: "Chaleur diffuse et régulière dans toutes les pièces du logement." },
      { title: "Facture réduite", description: "Remplacement du chauffage électrique direct par une solution performante." },
      { title: "Eau adoucie", description: "Adoucisseur installé pour protéger le circuit et les équipements." },
      { title: "Valorisation", description: "Un vrai réseau de chauffage central augmente la valeur du bien." },
    ],
    brands: [panasonicBrandFr],
  },
  "panasonic-12kw-chauffe-eau-thermodynamique-desembouage": {
    stats: [
      { icon: "heat-pump", value: "12 kW", label: "Puissance PAC" },
      { icon: "droplet", value: "250 L", label: "Chauffe-eau Atlantic" },
      { icon: "clock", value: "4 jours", label: "Durée du chantier" },
      { icon: "check", value: "2", label: "Intervenants" },
    ],
    beforeAfter: {
      before: {
        caption: "Chaudière gaz et ballon ECS",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier3/4.jpg",
          alt: "Ancienne chaudière gaz et ballon d'eau chaude avant rénovation",
          width: 1206,
          height: 1600,
        },
      },
      after: {
        caption: "PAC Panasonic 12 kW + CET Atlantic",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier3/5.jpg",
          alt: "Module intérieur Panasonic Aquarea et chauffe-eau thermodynamique Atlantic 250 L installés",
          width: 1206,
          height: 1602,
        },
      },
    },
    results: [
      { title: "Double économie", description: "PAC pour le chauffage et CET thermodynamique pour l'eau chaude sanitaire." },
      { title: "Réseau optimisé", description: "Désembouage complet et nourrice remise à neuf pour des performances durables." },
      { title: "Confort premium", description: "Chauffage performant et ECS disponible en continu." },
      { title: "Aides MaPrimeRénov'", description: "Projet éligible aux aides de l'État avec accompagnement HFE." },
    ],
    brands: [panasonicBrandFr, atlanticBrandFr],
  },
  "monosplit-panasonic-2-5kw-salon": {
    stats: [
      { icon: "ac-unit", value: "2,5 kW", label: "Puissance installée" },
      { icon: "clock", value: "1 jour", label: "Durée d'installation" },
      { icon: "check", value: "1", label: "Pièce climatisée" },
      { icon: "snowflake", value: "2-en-1", label: "Chaud / froid" },
    ],
    beforeAfter: {
      before: { caption: "Salon sans climatisation" },
      after: {
        caption: "Monosplit Panasonic 2,5 kW",
        image: { src: "/projet/climatisation/chantier1/1.jpg", alt: "Unité murale dans le salon", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Fraîcheur en été", description: "Rafraîchissement efficace du salon lors des fortes chaleurs." },
      { title: "Chauffage d'appoint", description: "Solution réversible pour un confort hiver comme été." },
      { title: "Installation discrète", description: "Unité murale positionnée pour une diffusion homogène de l'air." },
      { title: "Rapidité de pose", description: "Chantier réalisé en une journée avec finitions soignées." },
    ],
    brands: [panasonicClimBrandFr],
  },
  "multisplit-panasonic-3z68": {
    stats: [
      { icon: "ac-unit", value: "3Z68", label: "Système multi-split" },
      { icon: "clock", value: "2 jours", label: "Durée d'installation" },
      { icon: "check", value: "3", label: "Unités intérieures" },
      { icon: "snowflake", value: "100 %", label: "Logement couvert" },
    ],
    beforeAfter: {
      before: { caption: "Pas de climatisation" },
      after: {
        caption: "Multi-split Panasonic 3Z68",
        image: { src: "/projet/climatisation/chantier2/2.jpg", alt: "Unité extérieure 3Z68", width: 1206, height: 898 },
      },
    },
    results: [
      { title: "Multi-pièces", description: "Plusieurs pièces climatisées avec une seule unité extérieure." },
      { title: "Esthétique préservée", description: "Liaisons acheminées par l'extérieur du bâtiment." },
      { title: "Confort annuel", description: "Régulation précise de la température pièce par pièce." },
      { title: "Économies", description: "Solution réversible plus économique que le chauffage électrique d'appoint." },
    ],
    brands: [panasonicClimBrandFr],
  },
  "pac-air-air-panasonic-tz42": {
    stats: [
      { icon: "ac-unit", value: "TZ42", label: "Système multi-split" },
      { icon: "clock", value: "3 jours", label: "Durée d'installation" },
      { icon: "check", value: "4", label: "Unités intérieures" },
      { icon: "snowflake", value: "2-en-1", label: "Chaud / froid" },
    ],
    beforeAfter: {
      before: { caption: "Chauffage électrique d'appoint" },
      after: {
        caption: "PAC air-air Panasonic TZ42",
        image: { src: "/projet/pompe_a_chaleur_air_air/chantier1/1.jpg", alt: "Unité extérieure TZ42", width: 1206, height: 1606 },
      },
    },
    results: [
      { title: "Confort global", description: "Quatre unités réparties pour une température homogène." },
      { title: "Finitions soignées", description: "Liaisons en goulottes pour une intégration esthétique." },
      { title: "Console & cassette", description: "Solutions adaptées à chaque configuration de pièce." },
      { title: "Économies", description: "Alternative performante au chauffage électrique direct." },
    ],
    brands: [panasonicClimBrandFr],
  },
  "panasonic-5z90-multisplit-faux-plafonds": {
    stats: [
      { icon: "ac-unit", value: "5Z90", label: "Multi-split tertiaire" },
      { icon: "clock", value: "4 jours", label: "Durée du chantier" },
      { icon: "check", value: "6+", label: "Unités intérieures" },
      { icon: "shield", value: "100 %", label: "Intégration discrète" },
    ],
    beforeAfter: {
      before: { caption: "Locaux sans climatisation" },
      after: {
        caption: "Multi-split Panasonic 5Z90",
        image: { src: "/projet/climatisation_professionnel/chantier1/4.jpg", alt: "Unité murale en bureau", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Confort tertiaire", description: "Température maîtrisée dans l'ensemble des locaux professionnels." },
      { title: "Faux plafonds", description: "Liaisons dissimulées pour préserver l'esthétique des bureaux." },
      { title: "Évacuation condensats", description: "Pompes de relevage pour une évacuation fiable de l'eau." },
      { title: "Fiabilité", description: "Installation Panasonic conforme aux préconisations fabricant." },
    ],
    brands: [panasonicClimBrandFr],
  },
  "plancher-chauffant-basse-temperature-pac": {
    stats: [
      { icon: "radiator", value: "120 m²", label: "Surface chauffée" },
      { icon: "clock", value: "6 jours", label: "Durée du chantier" },
      { icon: "heat-pump", value: "PAC", label: "Couplé air-eau" },
      { icon: "leaf", value: "30°C", label: "Basse température" },
    ],
    beforeAfter: {
      afters: [
        {
          caption: "Boucles plancher chauffant posées",
          image: { src: "/projet/plancher_chauffant/projet1/3.jpg", alt: "Boucles de plancher chauffant posées sur la dalle", width: 1206, height: 1603 },
        },
        {
          caption: "Local technique — PAC air-eau et ballon tampon",
          image: { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Local technique — module intérieur PAC air-eau et ballon tampon", width: 1206, height: 1597 },
        },
      ],
    },
    results: [
      { title: "Chaleur douce", description: "Diffusion homogène sans radiateurs visibles." },
      { title: "Haut rendement", description: "Compatible basse température pour optimiser la PAC." },
      { title: "Confort optimal", description: "Température uniforme dans chaque pièce, sans zones froides." },
      { title: "Espace libéré", description: "Aucun radiateur : plus de place et une esthétique épurée." },
    ],
    brands: [panasonicBrandFr],
  },
};

export const projectEnrichmentEn: Record<string, ProjectEnrichment> = {
  "panasonic-9kw-gas-boiler-replacement": {
    stats: [
      { icon: "heat-pump", value: "9 kW", label: "Installed capacity" },
      { icon: "clock", value: "2 days", label: "Installation time" },
      { icon: "check", value: "4", label: "Occupants" },
      { icon: "droplet", value: "100%", label: "Heating + DHW" },
    ],
    beforeAfter: {
      before: {
        caption: "Old gas boiler and hot water tank",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier1/avant.jpg",
          alt: "Old gas boiler and water heater before heat pump installation",
          width: 780,
          height: 1024,
        },
      },
      after: {
        caption: "Panasonic 9 kW heat pump + DHW",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier1/apres.jpg",
          alt: "Panasonic Aquarea indoor unit and integrated hot water tank installed",
          width: 1206,
          height: 1586,
        },
      },
    },
    results: [
      { title: "Energy savings", description: "Up to 70% savings on heating bills compared with gas." },
      { title: "Improved comfort", description: "Heating and domestic hot water from a single system." },
      { title: "Financial grants", description: "Eligible for MaPrimeRénov' and CEE — full support by HFE." },
      { title: "Service life", description: "25-year expected lifespan with annual servicing." },
    ],
    brands: [panasonicBrandEn],
  },
  "5kw-central-heating-creation-softener": {
    stats: [
      { icon: "heat-pump", value: "5 kW", label: "Installed capacity" },
      { icon: "clock", value: "3 days", label: "Project duration" },
      { icon: "radiator", value: "3", label: "Emitters fitted" },
      { icon: "check", value: "3", label: "Technicians" },
    ],
    beforeAfter: {
      after: {
        caption: "Final installation — 5 kW heat pump and hydronic network",
        image: { src: "/projet/pompe_a_chaleur_air_eau/chantier2/2.jpg", alt: "5 kW heat pump — Panasonic indoor unit and buffer tank in cellar", width: 1206, height: 896 },
      },
    },
    results: [
      { title: "Even comfort", description: "Gentle, even warmth throughout the home." },
      { title: "Lower bills", description: "Electric direct heating replaced with an efficient system." },
      { title: "Softened water", description: "Water softener installed to protect the circuit." },
      { title: "Added value", description: "A full central heating network increases property value." },
    ],
    brands: [panasonicBrandEn],
  },
  "panasonic-12kw-thermodynamic-heater-flushing": {
    stats: [
      { icon: "heat-pump", value: "12 kW", label: "Heat pump output" },
      { icon: "droplet", value: "250 L", label: "Atlantic water heater" },
      { icon: "clock", value: "4 days", label: "Project duration" },
      { icon: "check", value: "2", label: "Technicians" },
    ],
    beforeAfter: {
      before: {
        caption: "Gas boiler and hot water tank",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier3/4.jpg",
          alt: "Old gas boiler and water heater before renovation",
          width: 1206,
          height: 1600,
        },
      },
      after: {
        caption: "Panasonic 12 kW + Atlantic CET",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier3/5.jpg",
          alt: "Panasonic Aquarea indoor unit and Atlantic 250 L thermodynamic water heater installed",
          width: 1206,
          height: 1602,
        },
      },
    },
    results: [
      { title: "Double savings", description: "Heat pump for heating and thermodynamic heater for hot water." },
      { title: "Optimised network", description: "Full flush and manifold overhaul for lasting performance." },
      { title: "Premium comfort", description: "Efficient heating and continuous hot water." },
      { title: "MaPrimeRénov' grants", description: "Eligible project with full support by HFE." },
    ],
    brands: [panasonicBrandEn, atlanticBrandEn],
  },
  "panasonic-2-5kw-single-split-living-room": {
    stats: [
      { icon: "ac-unit", value: "2.5 kW", label: "Installed capacity" },
      { icon: "clock", value: "1 day", label: "Installation time" },
      { icon: "check", value: "1", label: "Room cooled" },
      { icon: "snowflake", value: "2-in-1", label: "Heating / cooling" },
    ],
    beforeAfter: {
      before: { caption: "Living room without air conditioning" },
      after: {
        caption: "Panasonic 2.5 kW single-split",
        image: { src: "/projet/climatisation/chantier1/1.jpg", alt: "Wall-mounted unit in living room", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Summer cooling", description: "Effective cooling during heatwaves." },
      { title: "Supplementary heating", description: "Reversible system for year-round comfort." },
      { title: "Discreet installation", description: "Wall unit positioned for even air distribution." },
      { title: "Quick installation", description: "Completed in one day with a neat finish." },
    ],
    brands: [panasonicClimBrandEn],
  },
  "panasonic-3z68-multisplit": {
    stats: [
      { icon: "ac-unit", value: "3Z68", label: "Multi-split system" },
      { icon: "clock", value: "2 days", label: "Installation time" },
      { icon: "check", value: "3", label: "Indoor units" },
      { icon: "snowflake", value: "100%", label: "Home covered" },
    ],
    beforeAfter: {
      before: { caption: "No air conditioning" },
      after: {
        caption: "Panasonic 3Z68 multi-split",
        image: { src: "/projet/climatisation/chantier2/2.jpg", alt: "3Z68 outdoor unit", width: 1206, height: 898 },
      },
    },
    results: [
      { title: "Multi-room", description: "Several rooms cooled with one outdoor unit." },
      { title: "Preserved aesthetics", description: "Lines routed along the outside of the building." },
      { title: "Year-round comfort", description: "Precise temperature control room by room." },
      { title: "Savings", description: "More economical than electric supplementary heating." },
    ],
    brands: [panasonicClimBrandEn],
  },
  "panasonic-tz42-air-to-air": {
    stats: [
      { icon: "ac-unit", value: "TZ42", label: "Multi-split system" },
      { icon: "clock", value: "3 days", label: "Installation time" },
      { icon: "check", value: "4", label: "Indoor units" },
      { icon: "snowflake", value: "2-in-1", label: "Heating / cooling" },
    ],
    beforeAfter: {
      before: { caption: "Electric supplementary heating" },
      after: {
        caption: "Panasonic TZ42 air-to-air heat pump",
        image: { src: "/projet/pompe_a_chaleur_air_air/chantier1/1.jpg", alt: "TZ42 outdoor unit", width: 1206, height: 1606 },
      },
    },
    results: [
      { title: "Whole-home comfort", description: "Four units for even temperature distribution." },
      { title: "Neat finish", description: "Connections in trunking for a clean look." },
      { title: "Console & cassette", description: "Solutions adapted to each room layout." },
      { title: "Savings", description: "Efficient alternative to direct electric heating." },
    ],
    brands: [panasonicClimBrandEn],
  },
  "panasonic-5z90-multisplit-suspended-ceilings": {
    stats: [
      { icon: "ac-unit", value: "5Z90", label: "Commercial multi-split" },
      { icon: "clock", value: "4 days", label: "Project duration" },
      { icon: "check", value: "6+", label: "Indoor units" },
      { icon: "shield", value: "100%", label: "Discreet integration" },
    ],
    beforeAfter: {
      before: { caption: "Premises without air conditioning" },
      after: {
        caption: "Panasonic 5Z90 multi-split",
        image: { src: "/projet/climatisation_professionnel/chantier1/4.jpg", alt: "Wall unit in office", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Commercial comfort", description: "Controlled temperature throughout the premises." },
      { title: "Suspended ceilings", description: "Lines hidden to preserve office aesthetics." },
      { title: "Condensate drainage", description: "Lift pumps for reliable water evacuation." },
      { title: "Reliability", description: "Panasonic installation to manufacturer specifications." },
    ],
    brands: [panasonicClimBrandEn],
  },
  "low-temperature-underfloor-heating-heat-pump": {
    stats: [
      { icon: "radiator", value: "120 m²", label: "Heated area" },
      { icon: "clock", value: "6 days", label: "Project duration" },
      { icon: "heat-pump", value: "HP", label: "Paired air-to-water" },
      { icon: "leaf", value: "30°C", label: "Low temperature" },
    ],
    beforeAfter: {
      afters: [
        {
          caption: "Underfloor heating loops laid",
          image: { src: "/projet/plancher_chauffant/projet1/3.jpg", alt: "Underfloor heating loops laid on the slab", width: 1206, height: 1603 },
        },
        {
          caption: "Plant room — air-to-water heat pump and buffer tank",
          image: { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Plant room — air-to-water heat pump indoor unit and buffer tank", width: 1206, height: 1597 },
        },
      ],
    },
    results: [
      { title: "Gentle warmth", description: "Even distribution with no visible radiators." },
      { title: "High efficiency", description: "Low-temperature operation optimises the heat pump." },
      { title: "Optimal comfort", description: "Uniform temperature in every room, no cold spots." },
      { title: "Space freed up", description: "No radiators: more room and a cleaner interior." },
    ],
    brands: [panasonicBrandEn],
  },
};

export function getProjectEnrichment(slug: string, locale: "fr" | "en"): ProjectEnrichment | undefined {
  const map = locale === "en" ? projectEnrichmentEn : projectEnrichmentFr;
  return map[slug];
}
