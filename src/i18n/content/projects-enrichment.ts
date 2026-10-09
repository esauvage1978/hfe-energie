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

const mitsubishiClimBrandFr: ProjectBrand = {
  name: "Mitsubishi Electric",
  logo: "/assets/partenaires/mitsubishi.png",
  warranties: ["Garantie constructeur Mitsubishi Electric", "Garantie 3 ans pièces"],
};

const mitsubishiClimBrandEn: ProjectBrand = {
  name: "Mitsubishi Electric",
  logo: "/assets/partenaires/mitsubishi.png",
  warranties: ["Mitsubishi Electric manufacturer warranty", "3-year parts warranty"],
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
  "panasonic-25kw-monobloc-r290-remplacement-chaudiere-fioul": {
    stats: [
      { icon: "heat-pump", value: "25 kW", label: "Puissance PAC monobloc" },
      { icon: "droplet", value: "250 L", label: "Ballon Atlantic" },
      { icon: "clock", value: "4 jours", label: "Durée du chantier" },
      { icon: "check", value: "2", label: "Techniciens" },
    ],
    beforeAfter: {
      before: {
        caption: "Ancienne chaudière fioul",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier4/avant.jpg",
          alt: "Ancienne chaudière fioul avant remplacement par une PAC Panasonic monobloc",
          width: 776,
          height: 1024,
        },
      },
      after: {
        caption: "CET Atlantic 250 L + ballon tampon + réseau Ø42",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier4/apres.jpg",
          alt: "Ballon thermodynamique Atlantic, ballon tampon Thermador et réseau hydraulique après installation",
          width: 1024,
          height: 768,
        },
      },
    },
    results: [
      {
        title: "Plus économique",
        description: "Chauffage et ECS performants pour une famille de cinq, avec un excellent rendement même par grand froid.",
      },
      {
        title: "Plus écologique",
        description: "Fluide naturel R290, sortie du fioul et transition énergétique concrète pour le logement.",
      },
      {
        title: "Haute température",
        description: "Compatible radiateurs existants grâce à la production d'eau chaude à haute température.",
      },
      {
        title: "Installation durable",
        description: "Réseau en acier électrozingué Ø42, calorifuge complet et mise en service soignée en 4 jours.",
      },
    ],
    brands: [panasonicBrandFr, atlanticBrandFr],
  },
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
  "tri-split-panasonic-tz68-lille": {
    stats: [
      { icon: "ac-unit", value: "TZ68", label: "Système tri-split" },
      { icon: "check", value: "3", label: "Unités intérieures" },
      { icon: "snowflake", value: "2-en-1", label: "Chaud / froid" },
      { icon: "leaf", value: "R32", label: "Fluide frigorigène" },
    ],
    beforeAfter: {
      before: { caption: "Pas de climatisation" },
      after: {
        caption: "Tri-split Panasonic TZ68",
        image: { src: "/projet/climatisation/chantier3/2.jpg", alt: "Unité extérieure tri-split Panasonic TZ68 avec cache-groupe design sur façade en briques à Lille", width: 481, height: 640 },
      },
    },
    results: [
      { title: "Confort été comme hiver", description: "Solution réversible pour un confort thermique toute l'année." },
      { title: "Pilotage individuel", description: "Chaque unité intérieure régulée indépendamment." },
      { title: "Technologie Inverter", description: "Haute performance et rendement énergétique optimisé." },
      { title: "Fluide R32", description: "Réfrigérant à faible impact environnemental." },
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
        image: { src: "/projet/pompe_a_chaleur_air_air/chantier1/5.jpg", alt: "Unité murale — liaisons acheminées en goulotte pour une finition propre", width: 1206, height: 891 },
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
  "drv-ibis-grand-place-mitsubishi": {
    stats: [
      { icon: "ac-unit", value: "69", label: "Unités intérieures" },
      { icon: "check", value: "6", label: "Groupes DRV toiture" },
      { icon: "leaf", value: "bi-tube", label: "Configuration DRV" },
      { icon: "shield", value: "20-40 %", label: "Économies énergétiques" },
    ],
    beforeAfter: {
      after: {
        caption: "Intervention sur groupe DRV Mitsubishi Electric City Multi en toiture",
        image: {
          src: "/projet/climatisation_professionnel/ibis/hero.jpg",
          alt: "Technicien HFE en intervention sur un groupe DRV Mitsubishi Electric en toiture — Hôtel Ibis Grand-Place",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Modernisation", description: "Remplacement complet des équipements DRV vieillissants par une nouvelle génération Mitsubishi." },
      { title: "Confort hôtelier", description: "Régulation précise chambre par chambre pour le confort des clients." },
      { title: "Économies d'énergie", description: "Réduction des consommations grâce à l'Inverter et à la modulation des puissances." },
      { title: "Supervision", description: "Gestion centralisée, alarmes et visibilité pour les équipes techniques." },
    ],
    brands: [mitsubishiClimBrandFr],
  },
  "petit-tertiaire-multi-split-panasonic": {
    stats: [
      { icon: "ac-unit", value: "3x90", label: "Multi-split compact" },
      { icon: "clock", value: "2 jours", label: "Durée du chantier" },
      { icon: "check", value: "3", label: "Unités intérieures" },
      { icon: "shield", value: "100 %", label: "Intégration soignée" },
    ],
    beforeAfter: {
      before: { caption: "Local sans climatisation" },
      after: {
        caption: "Multi-split Panasonic petit tertiaire",
        image: { src: "/projet/climatisation_professionnel/chantier2/4.jpg", alt: "Unité murale dans un local commercial", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Petit tertiaire", description: "Solution adaptée aux commerces, cabinets et petits bureaux." },
      { title: "Confort zone par zone", description: "Régulation indépendante dans chaque espace de travail." },
      { title: "Intégration discrète", description: "Unités murales et goulottes pour préserver l'esthétique des lieux." },
      { title: "Fiabilité", description: "Installation Panasonic conforme aux préconisations fabricant." },
    ],
    brands: [panasonicClimBrandFr],
  },
  "systeme-drv-tertiaire-panasonic": {
    stats: [
      { icon: "ac-unit", value: "DRV", label: "Système tertiaire" },
      { icon: "check", value: "Zone", label: "Régulation indépendante" },
      { icon: "leaf", value: "−", label: "Consommations maîtrisées" },
      { icon: "shield", value: "100 %", label: "Fonctionnement silencieux" },
    ],
    beforeAfter: {
      after: {
        caption: "Unités extérieures DRV Panasonic en toiture-terrasse",
        image: {
          src: "/projet/drv_tertiaire/hero.jpg",
          alt: "Système DRV tertiaire — unités extérieures Panasonic installées en toiture-terrasse",
          width: 845,
          height: 488,
        },
      },
    },
    results: [
      { title: "Confort zone par zone", description: "Température adaptée à chaque espace selon l'occupation réelle." },
      { title: "Économies d'énergie", description: "Puissance modulée en fonction des besoins de chaque zone." },
      { title: "Fonctionnement silencieux", description: "Solution adaptée aux bureaux, commerces et locaux tertiaires." },
      { title: "Grande superficie", description: "Idéal pour bâtiments tertiaires étendus avec plusieurs zones." },
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
          caption: "Local technique — PAC air-eau et ballon tampon",
          image: { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Local technique — module intérieur PAC air-eau et ballon tampon", width: 1206, height: 1597 },
        },
        {
          caption: "Boucles plancher chauffant posées",
          image: { src: "/projet/plancher_chauffant/projet1/6.jpg", alt: "Boucles de plancher chauffant posées sur isolant TMS", width: 957, height: 580 },
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
  "ballon-thermodynamique-atlantic-cave": {
    stats: [
      { icon: "leaf", value: "70 %", label: "Économies ECS" },
      { icon: "clock", value: "1 jour", label: "Durée d'installation" },
      { icon: "droplet", value: "CET", label: "Atlantic en cave" },
      { icon: "shield", value: "100 %", label: "Vase d'expansion" },
    ],
    beforeAfter: {
      after: {
        caption: "Chauffe-eau thermodynamique Atlantic en cave",
        image: { src: "/projet/ballon_thermodynamique/projet1/1.jpg", alt: "Chauffe-eau thermodynamique Atlantic installé en cave avec vase d'expansion sanitaire", width: 781, height: 1024 },
      },
    },
    results: [
      { title: "Économies d'énergie", description: "Jusqu'à 70 % d'économies sur la production d'eau chaude sanitaire." },
      { title: "Solution écologique", description: "Réduction des émissions de CO₂ par rapport à un ballon électrique." },
      { title: "Confort optimal", description: "Réserve d'eau chaude importante pour un usage quotidien serein." },
      { title: "Aides financières", description: "Équipement éligible à MaPrimeRénov' et aux CEE." },
    ],
    brands: [atlanticBrandFr],
  },
  "ballon-thermodynamique-atlantic-installation-complete": {
    stats: [
      { icon: "leaf", value: "70 %", label: "Économies ECS" },
      { icon: "clock", value: "1 jour", label: "Durée d'installation" },
      { icon: "droplet", value: "CET", label: "Atlantic en cave" },
      { icon: "shield", value: "100 %", label: "Vase d'expansion" },
    ],
    beforeAfter: {
      after: {
        caption: "Installation complète en cave",
        image: { src: "/projet/ballon_thermodynamique/projet1/2.jpg", alt: "Vue d'ensemble de l'installation en cave — ballon thermodynamique Atlantic et équipements associés", width: 1023, height: 1024 },
      },
    },
    results: [
      { title: "Facture maîtrisée", description: "Production d'ECS jusqu'à 3 fois moins énergivore qu'un ballon électrique." },
      { title: "Installation sécurisée", description: "Groupe de sécurité, vase d'expansion et raccordements remis à neuf." },
      { title: "Mise en service rapide", description: "Chantier réalisé en une journée, logement opérationnel le soir même." },
      { title: "Aides cumulables", description: "Montage du dossier MaPrimeRénov' et CEE pris en charge par HFE." },
    ],
    brands: [atlanticBrandFr],
  },
  "adoucisseur-sel-installation-cave": {
    stats: [
      { icon: "droplet", value: "100 %", label: "Anti-calcaire" },
      { icon: "clock", value: "1 jour", label: "Durée d'installation" },
      { icon: "shield", value: "CET", label: "Équipements protégés" },
      { icon: "leaf", value: "Ions", label: "Échange de résine" },
    ],
    beforeAfter: {
      after: {
        caption: "Adoucisseur au sel et chauffe-eau thermodynamique Atlantic",
        image: {
          src: "/projet/adoucisseur_sel/projet1/1.jpg",
          alt: "Adoucisseur d'eau au sel et chauffe-eau thermodynamique Atlantic installés par HFE en cave",
          width: 771,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Anti-calcaire efficace", description: "Élimination du calcaire par échange d'ions sodium." },
      { title: "Installation protégée", description: "Canalisations, robinetterie et chauffe-eau préservés." },
      { title: "Moins d'entretien", description: "Réduction de l'entartrage et des risques de panne." },
      { title: "Confort quotidien", description: "Eau adoucie pour la peau, le linge et la robinetterie." },
    ],
    brands: [atlanticBrandFr],
  },
  "cascade-2-pac-19-studios-panasonic": {
    stats: [
      { icon: "heat-pump", value: "60 kW", label: "Puissance installée" },
      { icon: "check", value: "19", label: "Studios" },
      { icon: "droplet", value: "760 L", label: "Stockage ECS" },
      { icon: "clock", value: "3 sem.", label: "Durée chantier" },
    ],
    beforeAfter: {
      after: {
        caption: "Cascade 2 PAC Panasonic Big Aquarea T-CAP 30 kW + ballons ECS",
        image: {
          src: "/projet/copropriete/projet1/1.jpg",
          alt: "Cascade de 2 pompes à chaleur Panasonic Big Aquarea 60 kW installées en extérieur pour une copropriété",
          width: 481,
          height: 640,
        },
      },
      afters: [
        {
          caption: "Bouteille de découplage Thermador 400 L",
          image: {
            src: "/projet/copropriete/projet1/3.jpg",
            alt: "Bouteille de découplage Thermador 400 L et tuyauterie en acier dans la chaufferie rénovée",
            width: 481,
            height: 640,
          },
        },
      ],
    },
    results: [
      { title: "Fioul supprimé", description: "Fin de la dépendance aux énergies fossiles et des émissions associées." },
      { title: "Régulation sur mesure", description: "Pilotage cascade, priorité ECS, alternance des PAC et sécurités intégrées." },
      { title: "Chauffage + ECS optimisés", description: "Stockage 760 L et bouteille de découplage 400 L pour un fonctionnement stable." },
      { title: "Économies significatives", description: "COP saisonnier et production progressive réduisent fortement la consommation." },
    ],
    brands: [panasonicBrandFr],
  },
  "cascade-5-pac-11-logements-panasonic": {
    stats: [
      { icon: "heat-pump", value: "80 kW", label: "Puissance installée" },
      { icon: "check", value: "11", label: "Logements" },
      { icon: "radiator", value: "968 m²", label: "Surface chauffée" },
      { icon: "leaf", value: "52 %", label: "Économie annuelle" },
    ],
    beforeAfter: {
      after: {
        caption: "5 PAC Panasonic 16 kW — environ 12 000 €/an",
        image: {
          src: "/projet/copropriete/projet2/4.jpg",
          alt: "Cascade de 5 pompes à chaleur Panasonic Aquarea installées en toiture-terrasse d'une copropriété",
          width: 1024,
          height: 768,
        },
      },
      afters: [
        {
          caption: "Chaufferie — bouteille de mélange et tuyauterie isolée",
          image: {
            src: "/projet/copropriete/projet2/3.jpg",
            alt: "Bouteille de mélange et tuyauterie isolée dans la chaufferie rénovée d'une copropriété",
            width: 768,
            height: 1024,
          },
        },
      ],
    },
    results: [
      { title: "52 % d'économies", description: "13 000 € d'économies annuelles sur les dépenses énergétiques." },
      { title: "Réduction CO₂", description: "Électricité valorisée par le COP des pompes à chaleur." },
      { title: "Cascade intelligente", description: "Régulation Panasonic : séquencement, alternance et courbe de chauffe." },
      { title: "Confort maintenu", description: "Même niveau de confort pour les occupants avec une chaufferie modernisée." },
    ],
    brands: [panasonicBrandFr],
  },
  "douche-italienne-style-industriel": {
    stats: [
      { icon: "clock", value: "5 j.", label: "Durée du chantier" },
      { icon: "droplet", value: "1", label: "Douche à l'italienne" },
      { icon: "check", value: "3", label: "Points d'eau" },
      { icon: "shield", value: "Clé en main", label: "Coordination HFE" },
    ],
    beforeAfter: {
      after: {
        caption: "Douche à l'italienne — paroi verrière noire et robinetterie noire mate",
        image: {
          src: "/projet/salle_de_bain/chantier1/1.jpg",
          alt: "Douche à l'italienne avec paroi verrière noire et meuble vasque en bois clair — rénovation salle de bain par HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Style industriel", description: "Paroi verrière noire et robinetterie mate pour un rendu contemporain." },
      { title: "Chaleur naturelle", description: "Meuble vasque en bois clair qui adoucit l'ensemble minéral." },
      { title: "Douche spacieuse", description: "Receveur extra-plat et grande paroi vitrée pour un confort optimal." },
      { title: "Finitions soignées", description: "Jeu de textures pierre et parement texturé coordonné par nos partenaires." },
    ],
  },
  "bloc-sanitaire-professionnel": {
    stats: [
      { icon: "clock", value: "4 j.", label: "Durée du chantier" },
      { icon: "check", value: "4", label: "Sanitaires posés" },
      { icon: "droplet", value: "2", label: "Points d'eau" },
      { icon: "shield", value: "Pro", label: "Usage tertiaire" },
    ],
    beforeAfter: {
      after: {
        caption: "Bloc sanitaire professionnel — urinoirs, WC suspendu et double vasque",
        image: {
          src: "/projet/salle_de_bain/chantier2/1.jpg",
          alt: "Bloc sanitaire professionnel avec urinoirs, WC suspendu et meuble double vasque — installation HFE",
          width: 644,
          height: 858,
        },
      },
    },
    results: [
      { title: "Hygiène optimale", description: "Urinoirs à détection automatique et WC suspendu pour un entretien facilité." },
      { title: "Confort utilisateurs", description: "Meuble double vasque pour un usage intensif en milieu professionnel." },
      { title: "Esthétique soignée", description: "Carrelage grand format et sol aspect bois pour un espace accueillant." },
      { title: "Plomberie complète", description: "Réseaux, évacuations et bâti-supports installés par HFE." },
    ],
  },
  "salle-de-bain-scandinave-double-vasque": {
    stats: [
      { icon: "clock", value: "6 j.", label: "Durée du chantier" },
      { icon: "check", value: "2", label: "Vasques" },
      { icon: "droplet", value: "1", label: "Douche d'angle" },
      { icon: "leaf", value: "Bois", label: "Meuble suspendu" },
    ],
    beforeAfter: {
      after: {
        caption: "Double vasque en bois et douche carrelée vert sauge",
        image: {
          src: "/projet/salle_de_bain/chantier3/1.jpg",
          alt: "Salle de bain rénovée avec meuble double vasque en bois et douche carrelée vert sauge — HFE Lille",
          width: 647,
          height: 858,
        },
      },
    },
    results: [
      { title: "Cachet préservé", description: "Rénovation moderne dans un appartement haussmannien de caractère." },
      { title: "Double confort", description: "Meuble double vasque suspendu pour un usage quotidien fluide." },
      { title: "Douche design", description: "Carrelage vert sauge en grand format et mitigeur thermostatique." },
      { title: "Luminosité", description: "Miroir rétroéclairé et volumes généreux pour une pièce aérée." },
    ],
  },
  "douche-marbre-noir-minimaliste": {
    stats: [
      { icon: "clock", value: "4 j.", label: "Durée du chantier" },
      { icon: "droplet", value: "1", label: "Douche à l'italienne" },
      { icon: "check", value: "1", label: "Niche intégrée" },
      { icon: "shield", value: "Premium", label: "Rendu haut de gamme" },
    ],
    beforeAfter: {
      after: {
        caption: "Douche effet marbre noir et meuble vasque blanc minimaliste",
        image: {
          src: "/projet/salle_de_bain/chantier4/1.jpg",
          alt: "Douche à l'italienne carrelage effet marbre noir et meuble vasque blanc — rénovation par HFE",
          width: 647,
          height: 863,
        },
      },
    },
    results: [
      { title: "Contraste saisissant", description: "Marbre noir veiné de blanc sur fond de murs blancs épurés." },
      { title: "Rangement intégré", description: "Niche de douche habillée dans le même carrelage." },
      { title: "Verre sans cadre", description: "Paroi fixe en verre trempé pour un espace visuellement ouvert." },
      { title: "Plomberie encastrée", description: "Colonne de douche et mitigeur thermostatique discrets." },
    ],
  },
  "douche-italienne-faience-bois": {
    stats: [
      { icon: "clock", value: "3 j.", label: "Durée du chantier" },
      { icon: "droplet", value: "1", label: "Douche à l'italienne" },
      { icon: "check", value: "2", label: "Points de douche" },
      { icon: "leaf", value: "Bois", label: "Faïence murale" },
    ],
    beforeAfter: {
      after: {
        caption: "Douche à l'italienne en faïence aspect bois",
        image: {
          src: "/projet/salle_de_bain/chantier5/1.jpg",
          alt: "Douche à l'italienne avec faïence murale aspect bois et meuble vasque suspendu — HFE Lille",
          width: 645,
          height: 859,
        },
      },
    },
    results: [
      { title: "Ambiance cocooning", description: "Faïence imitation bois pour une atmosphère chaleureuse." },
      { title: "Douche ouverte", description: "Receveur extra-plat et paroi fixe en verre trempé." },
      { title: "Confort douche", description: "Colonne chromée avec ciel de pluie et douchette." },
      { title: "Meuble suspendu", description: "Meuble vasque blanc gain de place et facile d'entretien." },
    ],
  },
  "renovation-bleue-hexagonale": {
    stats: [
      { icon: "clock", value: "7 j.", label: "Durée du chantier" },
      { icon: "check", value: "1", label: "Vasque à poser" },
      { icon: "droplet", value: "1", label: "Douche zellige" },
      { icon: "radiator", value: "1", label: "Sèche-serviettes" },
    ],
    beforeAfter: {
      after: {
        caption: "Douche bleu canard et sol mosaïque hexagonale",
        image: {
          src: "/projet/salle_de_bain/chantier6/1.jpg",
          alt: "Salle de bain moderne avec douche zellige bleu canard et sol mosaïque hexagonale — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Palette bleue", description: "Zelliges bleu canard et mosaïque hexagonale pour un rendu unique." },
      { title: "Bois et couleur", description: "Meuble vasque en bois clair qui équilibre les tons profonds." },
      { title: "Confort thermique", description: "Sèche-serviettes vertical pour un séchage rapide." },
      { title: "Rénovation complète", description: "Plomberie, sanitaires et équipements coordonnés par HFE." },
    ],
  },
  "salle-de-bain-vintage-industrielle": {
    stats: [
      { icon: "clock", value: "8 j.", label: "Durée du chantier" },
      { icon: "check", value: "2", label: "Vasques à poser" },
      { icon: "droplet", value: "1", label: "Douche atelier" },
      { icon: "shield", value: "Or", label: "Robinetterie dorée" },
    ],
    beforeAfter: {
      after: {
        caption: "Double vasque vintage et douche paroi atelier noire",
        image: {
          src: "/projet/salle_de_bain/chantier7/1.jpg",
          alt: "Salle de bain vintage avec double vasque sur buffet en bois et douche paroi atelier noire — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Pièce unique", description: "Buffet mid-century transformé en meuble double vasque." },
      { title: "Faïence terracotta", description: "Habillage mural aux tons chauds et motifs patinés." },
      { title: "Industriel chic", description: "Paroi vitrée atelier noire et robinetterie dorée brossée." },
      { title: "Deux points d'eau", description: "Raccordements sanitaires doubles réalisés par HFE." },
    ],
  },
  "douche-double-spa-industriel": {
    stats: [
      { icon: "clock", value: "10 j.", label: "Durée du chantier" },
      { icon: "droplet", value: "6", label: "Points de douche" },
      { icon: "check", value: "2", label: "Ciels de pluie" },
      { icon: "shield", value: "Spa", label: "Douche double" },
    ],
    beforeAfter: {
      after: {
        caption: "Douche double spa — ciels de pluie encastrés et carrelage aspect bois",
        image: {
          src: "/projet/salle_de_bain/chantier8/1.jpg",
          alt: "Douche double à l'italienne avec carrelage aspect bois, faïence métro blanche et robinetterie noire — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Expérience spa", description: "Deux ciels de pluie encastrés au plafond pour un confort maximal." },
      { title: "Design contrasté", description: "Carrelage bois, faïence métro blanche et robinetterie noire mate." },
      { title: "Banc intégré", description: "Assise carrelée pour un usage confortable à deux." },
      { title: "Plomberie complexe", description: "Double alimentation et deux évacuations linéaires maîtrisées par HFE." },
    ],
  },
};

export const projectEnrichmentEn: Record<string, ProjectEnrichment> = {
  "panasonic-25kw-monobloc-r290-oil-boiler-replacement": {
    stats: [
      { icon: "heat-pump", value: "25 kW", label: "Monobloc heat pump capacity" },
      { icon: "droplet", value: "250 L", label: "Atlantic cylinder" },
      { icon: "clock", value: "4 days", label: "Installation time" },
      { icon: "check", value: "2", label: "Technicians" },
    ],
    beforeAfter: {
      before: {
        caption: "Old oil boiler",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier4/avant.jpg",
          alt: "Old oil boiler before replacement with a Panasonic monobloc heat pump",
          width: 776,
          height: 1024,
        },
      },
      after: {
        caption: "Atlantic 250 L CET + buffer tank + Ø42 network",
        image: {
          src: "/projet/pompe_a_chaleur_air_eau/chantier4/apres.jpg",
          alt: "Atlantic thermodynamic water heater, Thermador buffer tank and hydraulic network after installation",
          width: 1024,
          height: 768,
        },
      },
    },
    results: [
      {
        title: "More economical",
        description: "Efficient heating and DHW for a family of five, with excellent output even in cold weather.",
      },
      {
        title: "Greener",
        description: "Natural R290 refrigerant, oil phased out and a concrete energy transition for the home.",
      },
      {
        title: "High temperature",
        description: "Compatible with existing radiators thanks to high-temperature water production.",
      },
      {
        title: "Durable install",
        description: "Ø42 electro-galvanised steel network, full pipe insulation and careful commissioning in 4 days.",
      },
    ],
    brands: [panasonicBrandEn, atlanticBrandEn],
  },
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
  "panasonic-tz68-tri-split-lille": {
    stats: [
      { icon: "ac-unit", value: "TZ68", label: "Tri-split system" },
      { icon: "check", value: "3", label: "Indoor units" },
      { icon: "snowflake", value: "2-in-1", label: "Heating / cooling" },
      { icon: "leaf", value: "R32", label: "Refrigerant" },
    ],
    beforeAfter: {
      before: { caption: "No air conditioning" },
      after: {
        caption: "Panasonic TZ68 tri-split",
        image: { src: "/projet/climatisation/chantier3/2.jpg", alt: "Panasonic TZ68 tri-split outdoor unit with designer cover on a brick facade in Lille", width: 481, height: 640 },
      },
    },
    results: [
      { title: "Year-round comfort", description: "Reversible system for thermal comfort summer and winter." },
      { title: "Individual control", description: "Each indoor unit regulated independently." },
      { title: "Inverter technology", description: "High performance with optimised energy efficiency." },
      { title: "R32 refrigerant", description: "Low environmental impact refrigerant." },
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
        image: { src: "/projet/pompe_a_chaleur_air_air/chantier1/5.jpg", alt: "Wall-mounted unit — connections routed in trunking for a clean finish", width: 1206, height: 891 },
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
  "ibis-grand-place-vrf-replacement-mitsubishi": {
    stats: [
      { icon: "ac-unit", value: "69", label: "Indoor units" },
      { icon: "check", value: "6", label: "Rooftop VRF groups" },
      { icon: "leaf", value: "2-pipe", label: "VRF configuration" },
      { icon: "shield", value: "20-40%", label: "Energy savings" },
    ],
    beforeAfter: {
      after: {
        caption: "Servicing a Mitsubishi Electric City Multi VRF group on the roof",
        image: {
          src: "/projet/climatisation_professionnel/ibis/hero.jpg",
          alt: "HFE technician servicing a Mitsubishi Electric VRF outdoor unit on a rooftop — Ibis Grand-Place hotel",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Modernisation", description: "Full replacement of ageing VRF equipment with a new Mitsubishi generation." },
      { title: "Hotel comfort", description: "Precise room-by-room control for guest comfort." },
      { title: "Energy savings", description: "Lower consumption thanks to inverter technology and power modulation." },
      { title: "Supervision", description: "Centralised management, alarms and visibility for technical teams." },
    ],
    brands: [mitsubishiClimBrandEn],
  },
  "small-commercial-multi-split-panasonic": {
    stats: [
      { icon: "ac-unit", value: "3x90", label: "Compact multi-split" },
      { icon: "clock", value: "2 days", label: "Project duration" },
      { icon: "check", value: "3", label: "Indoor units" },
      { icon: "shield", value: "100%", label: "Neat integration" },
    ],
    beforeAfter: {
      before: { caption: "Premises without air conditioning" },
      after: {
        caption: "Panasonic small commercial multi-split",
        image: { src: "/projet/climatisation_professionnel/chantier2/4.jpg", alt: "Wall-mounted unit in a retail space", width: 1206, height: 1590 },
      },
    },
    results: [
      { title: "Small commercial", description: "Solution suited to retail units, consulting rooms and small offices." },
      { title: "Zone-by-zone comfort", description: "Independent control in each workspace." },
      { title: "Discreet integration", description: "Wall units and trunking to preserve the aesthetics of the premises." },
      { title: "Reliability", description: "Panasonic installation to manufacturer specifications." },
    ],
    brands: [panasonicClimBrandEn],
  },
  "commercial-vrf-system-panasonic": {
    stats: [
      { icon: "ac-unit", value: "VRF", label: "Commercial system" },
      { icon: "check", value: "Zone", label: "Independent control" },
      { icon: "leaf", value: "−", label: "Managed consumption" },
      { icon: "shield", value: "100%", label: "Quiet operation" },
    ],
    beforeAfter: {
      after: {
        caption: "Panasonic VRF outdoor units on flat roof",
        image: {
          src: "/projet/drv_tertiaire/hero.jpg",
          alt: "Commercial VRF system — Panasonic outdoor units on a flat roof",
          width: 845,
          height: 488,
        },
      },
    },
    results: [
      { title: "Zone-by-zone comfort", description: "Temperature adapted to each space according to actual occupancy." },
      { title: "Energy savings", description: "Output modulated to match each zone's requirements." },
      { title: "Quiet operation", description: "Solution suited to offices, retail and commercial premises." },
      { title: "Large floor areas", description: "Ideal for extended commercial buildings with multiple zones." },
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
          caption: "Plant room — air-to-water heat pump and buffer tank",
          image: { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Plant room — air-to-water heat pump indoor unit and buffer tank", width: 1206, height: 1597 },
        },
        {
          caption: "Underfloor heating loops laid",
          image: { src: "/projet/plancher_chauffant/projet1/6.jpg", alt: "Underfloor heating loops laid on TMS insulation", width: 957, height: 580 },
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
  "atlantic-thermodynamic-water-heater-cellar": {
    stats: [
      { icon: "leaf", value: "70%", label: "DHW savings" },
      { icon: "clock", value: "1 day", label: "Installation time" },
      { icon: "droplet", value: "TWH", label: "Atlantic in cellar" },
      { icon: "shield", value: "100%", label: "Expansion vessel" },
    ],
    beforeAfter: {
      after: {
        caption: "Atlantic thermodynamic water heater in cellar",
        image: { src: "/projet/ballon_thermodynamique/projet1/1.jpg", alt: "Atlantic thermodynamic water heater installed in the cellar with domestic expansion vessel", width: 781, height: 1024 },
      },
    },
    results: [
      { title: "Energy savings", description: "Up to 70% savings on domestic hot water production." },
      { title: "Greener solution", description: "Reduced CO₂ emissions compared with an electric water heater." },
      { title: "Optimal comfort", description: "Substantial hot water reserve for everyday use." },
      { title: "Financial grants", description: "Eligible for MaPrimeRénov' and CEE schemes." },
    ],
    brands: [atlanticBrandEn],
  },
  "atlantic-thermodynamic-full-installation": {
    stats: [
      { icon: "leaf", value: "70%", label: "DHW savings" },
      { icon: "clock", value: "1 day", label: "Installation time" },
      { icon: "droplet", value: "TWH", label: "Atlantic in cellar" },
      { icon: "shield", value: "100%", label: "Expansion vessel" },
    ],
    beforeAfter: {
      after: {
        caption: "Complete cellar installation",
        image: { src: "/projet/ballon_thermodynamique/projet1/2.jpg", alt: "Overview of the cellar installation — Atlantic thermodynamic tank and associated equipment", width: 1023, height: 1024 },
      },
    },
    results: [
      { title: "Controlled running costs", description: "Hot water production up to 3 times more efficient than an electric tank." },
      { title: "Safe installation", description: "Safety group, expansion vessel and connections fully renewed." },
      { title: "Quick commissioning", description: "Project completed in one day — hot water available the same evening." },
      { title: "Stackable grants", description: "MaPrimeRénov' and CEE application support handled by HFE." },
    ],
    brands: [atlanticBrandEn],
  },
  "salt-water-softener-cellar-installation": {
    stats: [
      { icon: "droplet", value: "100%", label: "Anti-limescale" },
      { icon: "clock", value: "1 day", label: "Installation time" },
      { icon: "shield", value: "TWH", label: "Equipment protected" },
      { icon: "leaf", value: "Ions", label: "Resin exchange" },
    ],
    beforeAfter: {
      after: {
        caption: "Salt water softener and Atlantic thermodynamic water heater",
        image: {
          src: "/projet/adoucisseur_sel/projet1/1.jpg",
          alt: "Salt water softener and Atlantic thermodynamic water heater installed by HFE in a cellar",
          width: 771,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Effective anti-limescale", description: "Limescale removal through sodium ion exchange." },
      { title: "Protected installation", description: "Pipework, taps and water heater preserved." },
      { title: "Less maintenance", description: "Reduced scaling and lower breakdown risk." },
      { title: "Everyday comfort", description: "Softened water for skin, laundry and taps." },
    ],
    brands: [atlanticBrandEn],
  },
  "2-hp-cascade-19-studios-panasonic": {
    stats: [
      { icon: "heat-pump", value: "60 kW", label: "Installed capacity" },
      { icon: "check", value: "19", label: "Studio flats" },
      { icon: "droplet", value: "760 L", label: "DHW storage" },
      { icon: "clock", value: "3 wks", label: "Project duration" },
    ],
    beforeAfter: {
      after: {
        caption: "2 Panasonic Big Aquarea T-CAP 30 kW cascade + DHW tanks",
        image: {
          src: "/projet/copropriete/projet1/1.jpg",
          alt: "Cascade of 2 Panasonic Big Aquarea 60 kW heat pumps installed outdoors for a co-ownership building",
          width: 481,
          height: 640,
        },
      },
      afters: [
        {
          caption: "400-litre Thermador decoupling vessel",
          image: {
            src: "/projet/copropriete/projet1/3.jpg",
            alt: "400-litre Thermador decoupling vessel and steel pipework in the renovated plant room",
            width: 481,
            height: 640,
          },
        },
      ],
    },
    results: [
      { title: "Oil eliminated", description: "End of fossil fuel dependency and associated emissions." },
      { title: "Bespoke controls", description: "Cascade management, DHW priority, unit rotation and integrated safety devices." },
      { title: "Optimised heating + DHW", description: "760 L storage and 400 L decoupling vessel for stable operation." },
      { title: "Significant savings", description: "Seasonal COP and progressive production sharply reduce consumption." },
    ],
    brands: [panasonicBrandEn],
  },
  "5-hp-cascade-11-units-panasonic": {
    stats: [
      { icon: "heat-pump", value: "80 kW", label: "Installed capacity" },
      { icon: "check", value: "11", label: "Dwellings" },
      { icon: "radiator", value: "968 m²", label: "Heated area" },
      { icon: "leaf", value: "52%", label: "Annual saving" },
    ],
    beforeAfter: {
      after: {
        caption: "5 Panasonic 16 kW heat pumps — approximately €12,000/year",
        image: {
          src: "/projet/copropriete/projet2/4.jpg",
          alt: "Cascade of 5 Panasonic Aquarea heat pumps installed on a co-ownership flat roof",
          width: 1024,
          height: 768,
        },
      },
      afters: [
        {
          caption: "Plant room — mixing vessel and insulated pipework",
          image: {
            src: "/projet/copropriete/projet2/3.jpg",
            alt: "Mixing vessel and insulated pipework in the renovated co-ownership plant room",
            width: 768,
            height: 1024,
          },
        },
      ],
    },
    results: [
      { title: "52% savings", description: "€13,000 annual reduction in energy spending." },
      { title: "CO₂ reduction", description: "Electricity valorised through heat pump COP." },
      { title: "Intelligent cascade", description: "Panasonic controls: sequencing, rotation and heating curve." },
      { title: "Comfort maintained", description: "Same comfort level for residents with a modernised plant room." },
    ],
    brands: [panasonicBrandEn],
  },
  "douche-italienne-style-industriel": {
    stats: [
      { icon: "clock", value: "5 days", label: "Project duration" },
      { icon: "droplet", value: "1", label: "Walk-in shower" },
      { icon: "check", value: "3", label: "Water points" },
      { icon: "shield", value: "Turnkey", label: "HFE coordination" },
    ],
    beforeAfter: {
      after: {
        caption: "Walk-in shower — black Crittall partition and matte black tapware",
        image: {
          src: "/projet/salle_de_bain/chantier1/1.jpg",
          alt: "Walk-in shower with black Crittall-style glass partition and light wood vanity — bathroom renovation by HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Industrial style", description: "Black Crittall partition and matte tapware for a contemporary look." },
      { title: "Natural warmth", description: "Light wood vanity softens the mineral overall feel." },
      { title: "Spacious shower", description: "Ultra-low tray and large glass panel for optimal comfort." },
      { title: "Quality finishes", description: "Stone and textured cladding coordinated by our partners." },
    ],
  },
  "bloc-sanitaire-professionnel": {
    stats: [
      { icon: "clock", value: "4 days", label: "Project duration" },
      { icon: "check", value: "4", label: "Sanitary fixtures" },
      { icon: "droplet", value: "2", label: "Water points" },
      { icon: "shield", value: "Commercial", label: "Tertiary use" },
    ],
    beforeAfter: {
      after: {
        caption: "Commercial sanitary block — urinals, wall-hung toilet and double vanity",
        image: {
          src: "/projet/salle_de_bain/chantier2/1.jpg",
          alt: "Commercial sanitary block with urinals, wall-hung toilet and double vanity — installation by HFE",
          width: 644,
          height: 858,
        },
      },
    },
    results: [
      { title: "Optimal hygiene", description: "Sensor-flush urinals and wall-hung toilet for easier maintenance." },
      { title: "User comfort", description: "Double vanity for intensive use in a commercial setting." },
      { title: "Attractive design", description: "Large-format tiles and wood-effect floor for a welcoming space." },
      { title: "Complete plumbing", description: "Networks, drainage and concealed frames installed by HFE." },
    ],
  },
  "salle-de-bain-scandinave-double-vasque": {
    stats: [
      { icon: "clock", value: "6 days", label: "Project duration" },
      { icon: "check", value: "2", label: "Basins" },
      { icon: "droplet", value: "1", label: "Corner shower" },
      { icon: "leaf", value: "Wood", label: "Wall-mounted unit" },
    ],
    beforeAfter: {
      after: {
        caption: "Double wood vanity and sage green tiled shower",
        image: {
          src: "/projet/salle_de_bain/chantier3/1.jpg",
          alt: "Renovated bathroom with double wood vanity and sage green tiled shower — HFE Lille",
          width: 647,
          height: 858,
        },
      },
    },
    results: [
      { title: "Character preserved", description: "Modern renovation in a period apartment with original features." },
      { title: "Double comfort", description: "Wall-mounted double vanity for smooth daily use." },
      { title: "Designer shower", description: "Large-format sage green tiles and thermostatic mixer." },
      { title: "Brightness", description: "Backlit mirror and generous volumes for an airy room." },
    ],
  },
  "douche-marbre-noir-minimaliste": {
    stats: [
      { icon: "clock", value: "4 days", label: "Project duration" },
      { icon: "droplet", value: "1", label: "Walk-in shower" },
      { icon: "check", value: "1", label: "Built-in niche" },
      { icon: "shield", value: "Premium", label: "High-end finish" },
    ],
    beforeAfter: {
      after: {
        caption: "Black marble-effect shower and minimalist white vanity",
        image: {
          src: "/projet/salle_de_bain/chantier4/1.jpg",
          alt: "Walk-in shower with black marble-effect tiles and white vanity unit — renovation by HFE",
          width: 647,
          height: 863,
        },
      },
    },
    results: [
      { title: "Striking contrast", description: "Black marble veined with white against clean white walls." },
      { title: "Built-in storage", description: "Shower niche clad in the same tile finish." },
      { title: "Frameless glass", description: "Fixed tempered glass panel for a visually open space." },
      { title: "Concealed plumbing", description: "Discreet shower column and thermostatic mixer." },
    ],
  },
  "douche-italienne-faience-bois": {
    stats: [
      { icon: "clock", value: "3 days", label: "Project duration" },
      { icon: "droplet", value: "1", label: "Walk-in shower" },
      { icon: "check", value: "2", label: "Shower points" },
      { icon: "leaf", value: "Wood", label: "Wall tiles" },
    ],
    beforeAfter: {
      after: {
        caption: "Walk-in shower with wood-effect wall tiles",
        image: {
          src: "/projet/salle_de_bain/chantier5/1.jpg",
          alt: "Walk-in shower with wood-effect wall tiles and wall-mounted white vanity — HFE Lille",
          width: 645,
          height: 859,
        },
      },
    },
    results: [
      { title: "Cosy atmosphere", description: "Wood-effect tiles for a warm, inviting feel." },
      { title: "Open shower", description: "Ultra-low tray and fixed tempered glass panel." },
      { title: "Shower comfort", description: "Chrome column with rain head and hand shower." },
      { title: "Wall-mounted vanity", description: "White vanity unit — space-saving and easy to maintain." },
    ],
  },
  "renovation-bleue-hexagonale": {
    stats: [
      { icon: "clock", value: "7 days", label: "Project duration" },
      { icon: "check", value: "1", label: "Vessel basin" },
      { icon: "droplet", value: "1", label: "Zellige shower" },
      { icon: "radiator", value: "1", label: "Towel warmer" },
    ],
    beforeAfter: {
      after: {
        caption: "Teal shower and hexagonal mosaic floor",
        image: {
          src: "/projet/salle_de_bain/chantier6/1.jpg",
          alt: "Modern bathroom with teal zellige shower and hexagonal mosaic floor — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Blue palette", description: "Teal zellige and hexagonal mosaic for a unique result." },
      { title: "Wood and colour", description: "Light wood vanity balances the deep tones." },
      { title: "Thermal comfort", description: "Vertical towel warmer for quick drying." },
      { title: "Full renovation", description: "Plumbing, sanitary fittings and equipment coordinated by HFE." },
    ],
  },
  "salle-de-bain-vintage-industrielle": {
    stats: [
      { icon: "clock", value: "8 days", label: "Project duration" },
      { icon: "check", value: "2", label: "Vessel basins" },
      { icon: "droplet", value: "1", label: "Atelier shower" },
      { icon: "shield", value: "Gold", label: "Brushed tapware" },
    ],
    beforeAfter: {
      after: {
        caption: "Vintage double vanity and black atelier shower screen",
        image: {
          src: "/projet/salle_de_bain/chantier7/1.jpg",
          alt: "Vintage-style bathroom with double vessel sinks on wooden sideboard and black industrial shower — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "One-of-a-kind", description: "Mid-century sideboard converted into a double vanity." },
      { title: "Terracotta tiles", description: "Feature wall in warm, patinated tones." },
      { title: "Industrial chic", description: "Black atelier glass partition and brushed gold tapware." },
      { title: "Dual water points", description: "Double sanitary connections by HFE." },
    ],
  },
  "douche-double-spa-industriel": {
    stats: [
      { icon: "clock", value: "10 days", label: "Project duration" },
      { icon: "droplet", value: "6", label: "Shower points" },
      { icon: "check", value: "2", label: "Rain heads" },
      { icon: "shield", value: "Spa", label: "Double shower" },
    ],
    beforeAfter: {
      after: {
        caption: "Double spa shower — recessed rain heads and wood-effect tiles",
        image: {
          src: "/projet/salle_de_bain/chantier8/1.jpg",
          alt: "Double walk-in shower with wood-effect tiles, white subway tiles and matte black fixtures — HFE",
          width: 768,
          height: 1024,
        },
      },
    },
    results: [
      { title: "Spa experience", description: "Two ceiling-recessed rain heads for maximum comfort." },
      { title: "Contrasting design", description: "Wood tiles, white subway tiles and matte black fixtures." },
      { title: "Built-in bench", description: "Tiled seat for comfortable use by two people." },
      { title: "Complex plumbing", description: "Dual supply and two linear drains managed by HFE." },
    ],
  },
};

export function getProjectEnrichment(slug: string, locale: "fr" | "en"): ProjectEnrichment | undefined {
  const map = locale === "en" ? projectEnrichmentEn : projectEnrichmentFr;
  return map[slug];
}
