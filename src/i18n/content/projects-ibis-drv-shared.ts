import type { ProjectBase, ProjectContentSection, ProjectImage } from "./projects-shared";

export const ibisHeroFr: ProjectImage = {
  src: "/projet/climatisation_professionnel/ibis/hero.jpg",
  alt: "Technicien HFE en intervention sur un groupe DRV Mitsubishi Electric City Multi en toiture — Hôtel Ibis Grand-Place",
  width: 768,
  height: 1024,
};

export const ibisHeroEn: ProjectImage = {
  src: "/projet/climatisation_professionnel/ibis/hero.jpg",
  alt: "HFE technician servicing a Mitsubishi Electric City Multi VRF outdoor unit on a rooftop — Ibis Grand-Place hotel",
  width: 768,
  height: 1024,
};

export const ibisImagesFr: ProjectImage[] = [];
export const ibisImagesEn: ProjectImage[] = [];

export const ibisSectionsFr: readonly ProjectContentSection[] = [
  {
    title: "Présentation du projet",
    paragraphs: [
      "Dans le cadre de la modernisation des installations de chauffage et de climatisation de l'hôtel Ibis Grand Place, un important chantier de rénovation énergétique a été réalisé afin de remplacer l'ensemble des systèmes DRV (Débit de Réfrigérant Variable) existants devenus vieillissants.",
    ],
    items: [
      "69 unités intérieures réparties dans les chambres, circulations et locaux communs",
      "6 groupes DRV en toiture",
      "Des puissances unitaires comprises entre 6 kW et 25 kW selon les zones desservies",
      "Une technologie devenue moins performante énergétiquement et plus coûteuse en maintenance",
    ],
    afterItems: [
      "L'objectif du projet était d'améliorer les performances énergétiques, de réduire les consommations électriques, d'augmenter la fiabilité de l'installation, de garantir le confort des occupants et de moderniser l'ensemble du système de régulation et de supervision.",
    ],
  },
  {
    title: "Solution mise en œuvre",
    paragraphs: [
      "L'installation existante a été remplacée par une nouvelle génération de systèmes DRV Mitsubishi Electric utilisant des groupes extérieurs de la gamme PUHY / PUHZ / PUHD selon les puissances et configurations retenues.",
      "L'ensemble a été conservé en configuration bi-tube, particulièrement adaptée à l'exploitation hôtelière.",
    ],
    items: [
      "Technologie Inverter de dernière génération",
      "Compresseurs à haut rendement",
      "Échangeurs optimisés",
      "Meilleure gestion des charges partielles",
      "Régulation plus précise",
    ],
  },
  {
    title: "Principe de fonctionnement du système bi-tube",
    paragraphs: [
      "Le système DRV bi-tube fonctionne avec une ligne liquide et une ligne gaz. La quantité de fluide frigorigène est ajustée en permanence par les unités extérieures en fonction des besoins réels des chambres et des espaces communs.",
      "Chaque unité intérieure peut ainsi moduler sa puissance indépendamment afin de maintenir précisément la température souhaitée.",
    ],
    items: [
      "Excellente réactivité",
      "Confort accru pour les clients",
      "Réduction des consommations",
      "Limitation des cycles marche/arrêt",
      "Adaptation permanente à l'occupation réelle de l'hôtel",
    ],
  },
  {
    title: "Remplacement des unités intérieures",
    paragraphs: [
      "Les 69 unités intérieures ont été remplacées ou reconnectées selon leur état et leur compatibilité avec les nouvelles générations de matériels.",
    ],
    items: [
      "Amélioration du confort acoustique",
      "Meilleure régulation pièce par pièce",
      "Installation de nouvelles télécommandes",
      "Amélioration de la qualité de diffusion de l'air",
    ],
    afterItems: ["Chaque chambre bénéficie désormais d'un pilotage plus précis de la température."],
  },
  {
    title: "Travaux réalisés en toiture",
    paragraphs: ["Les six groupes DRV situés en toiture ont été déposés puis remplacés par les nouvelles unités Mitsubishi."],
    items: [
      "Mise en sécurité de la toiture",
      "Opérations de levage",
      "Adaptation des supports existants",
      "Raccordement frigorifique",
      "Raccordement électrique",
      "Raccordement des réseaux de communication",
    ],
    afterItems: [
      "Les nouvelles unités présentent un meilleur rendement saisonnier tout en conservant des niveaux sonores réduits.",
    ],
  },
  {
    title: "Réseau frigorifique",
    paragraphs: ["L'ensemble du réseau frigorifique a été contrôlé, adapté ou remplacé selon les besoins."],
    items: [
      "Contrôle d'étanchéité",
      "Remplacement des sections défectueuses",
      "Reprise des soudures frigorifiques",
      "Mise sous pression à l'azote",
      "Tirage au vide profond",
      "Contrôle de tenue du vide",
      "Adaptation des collecteurs et répartiteurs",
    ],
    afterItems: [
      "Une attention particulière a été portée à la qualité des raccordements afin de garantir la longévité du système.",
    ],
  },
  {
    title: "Régulation et supervision",
    paragraphs: ["L'installation bénéficie désormais d'une régulation moderne assurant :"],
    items: [
      "Gestion centralisée : pilotage des 69 unités intérieures, programmation horaire, gestion des consignes et des modes chaud/froid",
      "Optimisation énergétique : adaptation automatique des fréquences des compresseurs, des puissances délivrées et des besoins de chaque zone",
      "Gestion des alarmes : surveillance des pressions frigorifiques, des températures, des défauts de communication et des anomalies de fonctionnement",
    ],
    afterItems: [
      "Les équipes techniques disposent ainsi d'une meilleure visibilité sur l'exploitation de l'installation.",
    ],
  },
  {
    title: "Mise en service",
    paragraphs: ["La mise en service a été réalisée conformément aux procédures constructeur."],
    items: [
      "Contrôle frigorifique : épreuve à l'azote, contrôle d'étanchéité, tirage au vide, complément de charge, vérification des surchauffes et sous-refroidissements",
      "Contrôle électrique : alimentations, protections, communications BUS, intensités absorbées",
      "Paramétrage : adressage automatique, programmation de la régulation, configuration des zones, essais de fonctionnement",
      "Validation finale : essais en chaud et en froid, contrôle des températures, relevés de fonctionnement, remise du dossier de mise en service",
    ],
  },
  {
    title: "Performances énergétiques",
    paragraphs: [
      "L'ancien système présentait une technologie plus ancienne, des compresseurs moins performants, des rendements saisonniers dégradés et des consommations élevées en charge partielle.",
      "La nouvelle génération Mitsubishi permet généralement une réduction des consommations électriques, une amélioration du rendement saisonnier, une meilleure récupération de capacité en mi-saison et une optimisation du fonctionnement chambre par chambre.",
      "Dans l'hôtellerie, où le taux d'occupation varie fortement au cours de la journée et de l'année, les gains sont particulièrement sensibles grâce à la modulation permanente des puissances.",
      "Selon l'état de l'installation remplacée et l'ancienneté des équipements, les économies observées sur ce type de rénovation se situent généralement entre 20 % et 40 % des consommations liées au chauffage et à la climatisation.",
    ],
  },
  {
    title: "Avantages obtenus",
    items: [
      "Modernisation complète des équipements",
      "Amélioration du confort des clients",
      "Meilleure régulation des températures",
      "Réduction des consommations électriques",
      "Diminution des coûts de maintenance",
      "Meilleure fiabilité d'exploitation",
      "Gestion centralisée des installations",
      "Augmentation de la durée de vie du système",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Le remplacement des 6 systèmes DRV de toiture alimentant 69 unités intérieures de l'hôtel Ibis Grand Place par une nouvelle génération de systèmes Mitsubishi Electric bi-tube a permis de moderniser totalement l'installation CVC du bâtiment.",
      "Grâce à la technologie Inverter de dernière génération, à une régulation centralisée performante et à une mise en service complète incluant l'ensemble des contrôles frigorifiques et électriques, l'hôtel dispose désormais d'un système plus fiable, plus économique et plus confortable pour ses occupants, tout en réduisant significativement ses coûts d'exploitation et son empreinte énergétique.",
    ],
  },
];

export const ibisSectionsEn: readonly ProjectContentSection[] = [
  {
    title: "Project overview",
    paragraphs: [
      "As part of modernising the heating and air conditioning systems at the Ibis Grand Place hotel, a major energy renovation project was carried out to replace the ageing variable refrigerant flow (VRF) systems.",
    ],
    items: [
      "69 indoor units distributed across guest rooms, corridors and common areas",
      "6 VRF groups on the roof",
      "Unit capacities from 6 kW to 25 kW depending on the zones served",
      "Technology that had become less energy-efficient and more costly to maintain",
    ],
    afterItems: [
      "The project aimed to improve energy performance, reduce electricity consumption, increase system reliability, ensure occupant comfort and modernise regulation and supervision.",
    ],
  },
  {
    title: "Solution implemented",
    paragraphs: [
      "The existing installation was replaced with a new generation of Mitsubishi Electric VRF systems using PUHY / PUHZ / PUHD outdoor units according to the capacities and configurations required.",
      "The system was kept in a two-pipe configuration, particularly suited to hotel operation.",
    ],
    items: [
      "Latest-generation inverter technology",
      "High-efficiency compressors",
      "Optimised heat exchangers",
      "Better partial-load management",
      "More precise control",
    ],
  },
  {
    title: "How the two-pipe system works",
    paragraphs: [
      "The two-pipe VRF system uses a liquid line and a gas line. The amount of refrigerant is continuously adjusted by the outdoor units according to the actual needs of guest rooms and common areas.",
      "Each indoor unit can modulate its output independently to maintain the desired temperature precisely.",
    ],
    items: [
      "Excellent responsiveness",
      "Greater comfort for guests",
      "Lower consumption",
      "Fewer start/stop cycles",
      "Continuous adaptation to actual hotel occupancy",
    ],
  },
  {
    title: "Indoor unit replacement",
    paragraphs: [
      "All 69 indoor units were replaced or reconnected depending on their condition and compatibility with the new equipment.",
    ],
    items: [
      "Improved acoustic comfort",
      "Better room-by-room control",
      "New remote controls installed",
      "Improved air distribution quality",
    ],
    afterItems: ["Each room now benefits from more precise temperature control."],
  },
  {
    title: "Roof works",
    paragraphs: ["The six rooftop VRF groups were removed and replaced with new Mitsubishi units."],
    items: [
      "Roof safety measures",
      "Lifting operations",
      "Adaptation of existing supports",
      "Refrigerant connections",
      "Electrical connections",
      "Communication network connections",
    ],
    afterItems: ["The new units deliver better seasonal efficiency while maintaining low noise levels."],
  },
  {
    title: "Refrigerant network",
    paragraphs: ["The entire refrigerant network was inspected, adapted or replaced as required."],
    items: [
      "Leak testing",
      "Replacement of defective sections",
      "Refrigeration brazing rework",
      "Nitrogen pressure test",
      "Deep vacuum pull",
      "Vacuum hold test",
      "Adaptation of manifolds and distributors",
    ],
    afterItems: ["Particular attention was paid to connection quality to ensure long system life."],
  },
  {
    title: "Control and supervision",
    paragraphs: ["The installation now benefits from modern control providing:"],
    items: [
      "Centralised management: control of all 69 indoor units, time scheduling, setpoint and heating/cooling mode management",
      "Energy optimisation: automatic adjustment of compressor frequencies, delivered capacity and each zone's requirements",
      "Alarm management: monitoring of refrigerant pressures, temperatures, communication faults and operating anomalies",
    ],
    afterItems: ["Technical teams now have better visibility over system operation."],
  },
  {
    title: "Commissioning",
    paragraphs: ["Commissioning was carried out in accordance with manufacturer procedures."],
    items: [
      "Refrigeration checks: nitrogen test, leak test, vacuum pull, charge top-up, superheat and subcooling verification",
      "Electrical checks: supplies, protection devices, BUS communications, absorbed currents",
      "Setup: automatic addressing, control programming, zone configuration, functional tests",
      "Final validation: heating and cooling tests, temperature checks, operating readings, commissioning file handover",
    ],
  },
  {
    title: "Energy performance",
    paragraphs: [
      "The old system featured older technology, less efficient compressors, degraded seasonal efficiency and high partial-load consumption.",
      "The new Mitsubishi generation generally delivers lower electricity consumption, improved seasonal efficiency, better mid-season capacity recovery and optimised room-by-room operation.",
      "In hotels, where occupancy varies significantly throughout the day and year, gains are particularly noticeable thanks to continuous power modulation.",
      "Depending on the condition and age of the replaced installation, savings on this type of renovation are generally between 20% and 40% of heating and cooling consumption.",
    ],
  },
  {
    title: "Benefits achieved",
    items: [
      "Full modernisation of equipment",
      "Improved guest comfort",
      "Better temperature control",
      "Lower electricity consumption",
      "Reduced maintenance costs",
      "Greater operational reliability",
      "Centralised system management",
      "Extended system service life",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Replacing the 6 rooftop VRF systems supplying 69 indoor units at the Ibis Grand Place hotel with a new generation of Mitsubishi Electric two-pipe systems has fully modernised the building's HVAC installation.",
      "Thanks to latest-generation inverter technology, high-performance centralised control and full commissioning including all refrigeration and electrical checks, the hotel now has a more reliable, more economical and more comfortable system for its occupants, while significantly reducing operating costs and energy footprint.",
    ],
  },
];

export const ibisProjectFr = {
  slug: "drv-ibis-grand-place-mitsubishi",
  title: "Remplacement des systèmes DRV de l'Hôtel Ibis Grand-Place",
  subtitle: "Rénovation énergétique DRV Mitsubishi Electric bi-tube — 69 unités intérieures, 6 groupes en toiture",
  description: [],
  sections: ibisSectionsFr,
  images: ibisImagesFr,
} satisfies ProjectBase;

export const ibisProjectEn = {
  slug: "ibis-grand-place-vrf-replacement-mitsubishi",
  title: "VRF system replacement at the Ibis Grand-Place hotel",
  subtitle: "Mitsubishi Electric two-pipe VRF energy renovation — 69 indoor units, 6 rooftop groups",
  description: [],
  sections: ibisSectionsEn,
  images: ibisImagesEn,
} satisfies ProjectBase;
