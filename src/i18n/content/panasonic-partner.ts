import type { Locale } from "../config";
import { pageI18n } from "../utils";

const fr = {
  seo: {
    title: "Partenaire Panasonic ProClub à Lille | Installateur certifié HFE",
    description:
      "Hecker & Frères Énergie (HFE), installateur partenaire Panasonic ProClub à Lille : pompes à chaleur Panasonic, garantie constructeur optimisée, boîtier cloud CZ-TAW1 et télémaintenance Service Cloud.",
    keywords: [
      "installateur Panasonic Lille",
      "partenaire Panasonic ProClub",
      "pompe à chaleur Panasonic Lille",
      "Service Cloud Panasonic",
      "Smart Cloud Panasonic",
      "PAC Panasonic métropole lilloise",
      "installateur agréé Panasonic Nord",
      "CZ-TAW1 pompe à chaleur",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Partenaire Panasonic", url: "/partenaire-panasonic" },
  ],
  hero: {
    badge: "Partenaire officiel ProClub",
    titleBefore: "Installateur ",
    titleHighlight: "Panasonic",
    titleAfter: " certifié à Lille",
    description:
      "Hecker & Frères Énergie (HFE) est partenaire du programme Panasonic ProClub : formation constructeur, mise en service conforme et accès aux services connectés Smart Cloud et Service Cloud pour une pompe à chaleur plus fiable, mieux garantie et suivie à distance.",
    ctaQuote: "Devis pompe à chaleur Panasonic",
    ctaPac: "Découvrir nos PAC",
  },
  intro: {
    title: "Pourquoi choisir un installateur Panasonic ProClub ?",
    paragraphs: [
      "Panasonic développe des pompes à chaleur air-eau reconnues pour leur efficacité énergétique, leur silence et leurs performances par basses températures. Mais la qualité du matériel ne suffit pas : la durée de vie, les garanties et le confort dépendent aussi d'une installation et d'une mise en service réalisées par un professionnel agréé.",
      "En tant que partenaire ProClub, HFE bénéficie des outils, formations et procédures Panasonic (outil de dimensionnement, Pro Academy, hotline SAV). Vous profitez directement de cette expertise : garanties constructeur préservées, paramétrage optimal et, si vous le souhaitez, connexion cloud pour piloter votre PAC et permettre une maintenance à distance.",
    ],
    externalLabel: "Site officiel Panasonic chauffage & climatisation",
    externalUrl: "https://www.aircon.panasonic.eu/FR_fr",
  },
  benefits: {
    title: "Les avantages concrets pour vous",
    subtitle:
      "Un installateur ProClub ne se contente pas de poser l'équipement : il active les services qui font la différence sur la durée.",
    items: [
      {
        icon: "shield" as const,
        title: "Garantie constructeur optimisée",
        text: "La mise en service par un installateur agréé Panasonic ProClub est une condition clé pour bénéficier des garanties commerciales constructeur les plus favorables. Sans cette procédure, les durées de garantie pièces et compresseur peuvent être réduites.",
      },
      {
        icon: "award" as const,
        title: "Installateurs formés Pro Academy",
        text: "Nos équipes suivent les parcours de formation Panasonic (conception, installation, mise en service et dépannage) sur les gammes pompes à chaleur et climatisation résidentielle.",
      },
      {
        icon: "heat-pump" as const,
        title: "Dimensionnement certifié",
        text: "Grâce aux outils ProClub (calculateurs et logiciels Panasonic), votre PAC est dimensionnée précisément pour votre logement : radiateurs, plancher chauffant ou production d'eau chaude sanitaire.",
      },
      {
        icon: "phone" as const,
        title: "Boîtier cloud CZ-TAW1 (Smart Cloud)",
        text: "Option connectivité : le module CZ-TAW1 relie votre pompe à chaleur à Internet pour un pilotage à distance (températures, modes, programmations) depuis smartphone, tablette ou navigateur via Smart Cloud.",
      },
      {
        icon: "check" as const,
        title: "Télémaintenance Service Cloud",
        text: "Avec le Service Cloud Panasonic, HFE peut superviser votre installation à distance, consulter les codes défaut, anticiper les anomalies et intervenir plus vite — souvent sans déplacement inutile.",
      },
      {
        icon: "shield" as const,
        title: "Garantie décennale HFE sur la pose",
        text: "Au-delà de la garantie constructeur, HFE assure la pose avec garantie décennale et responsabilité civile professionnelle : une double protection matériel + installation.",
      },
    ],
  },
  cloud: {
    badge: "Connectivité cloud",
    title: "Smart Cloud & Service Cloud : votre PAC sous surveillance",
    intro:
      "Panasonic propose deux niveaux de services connectés complémentaires. HFE vous accompagne pour les activer lors de l'installation ou de la mise en service.",
    smart: {
      title: "Smart Cloud — pour vous",
      points: [
        "Pilotage à distance de votre pompe à chaleur (chauffage, eau chaude, modes).",
        "Consultation des températures et de l'état du système depuis l'application ou le portail web.",
        "Nécessite le boîtier de connectivité CZ-TAW1, installé par un professionnel agréé.",
      ],
    },
    service: {
      title: "Service Cloud — pour HFE, votre partenaire SAV",
      points: [
        "Supervision à distance des installations par votre installateur certifié.",
        "Remontée des codes défaut et alertes pour un diagnostic plus rapide.",
        "Entretien préventif et réglages fins sans déplacement systématique.",
        "Vous choisissez le niveau d'accès accordé à HFE (surveillance, contrôle ou accès complet).",
      ],
      externalLabel: "En savoir plus sur le Service Cloud Panasonic",
      externalUrl: "https://www.aircon.panasonic.eu/FR_fr",
    },
    note: "La connectivité cloud nécessite une connexion Internet (Wi-Fi ou câble LAN) et une pompe à chaleur Panasonic compatible (génération H ou ultérieure selon les modèles). HFE vérifie l'éligibilité de votre projet lors de l'étude technique.",
  },
  process: {
    title: "Notre accompagnement Panasonic, de l'étude au suivi connecté",
    steps: [
      {
        n: 1,
        title: "Étude & dimensionnement",
        text: "Visite technique, calcul de déperditions et sélection de la pompe à chaleur Panasonic adaptée (Haute Performance, T-CAP, EcoFlex…).",
      },
      {
        n: 2,
        title: "Installation & mise en service ProClub",
        text: "Pose conforme aux préconisations Panasonic, enregistrement de la mise en service pour activer les garanties constructeur.",
      },
      {
        n: 3,
        title: "Connexion cloud (option)",
        text: "Installation du boîtier CZ-TAW1, paramétrage Smart Cloud et activation de Service Cloud avec le niveau d'accès de votre choix.",
      },
      {
        n: 4,
        title: "Suivi & entretien",
        text: "Contrat d'entretien annuel, surveillance à distance et intervention rapide en cas d'anomalie remontée par le cloud.",
      },
    ],
  },
  ranges: {
    title: "Gammes Panasonic installées par HFE",
    intro:
      "Nous installons les solutions Panasonic air-eau pour le chauffage, la production d'eau chaude sanitaire et, selon les modèles, le rafraîchissement estival.",
    items: [
      { name: "Haute Performance", desc: "Efficacité maximale pour maisons neuves ou très bien isolées." },
      { name: "T-CAP", desc: "Performances stables même par grand froid, idéal en rénovation." },
      { name: "EcoFlex", desc: "Solution flexible pour différentes configurations de chauffage." },
      { name: "Climatisation Panasonic", desc: "Pompes à chaleur air-air et climatisation réversible avec nanoe™ X." },
    ],
  },
  cta: {
    title: "Un projet de pompe à chaleur Panasonic à Lille ?",
    subtitle:
      "Étude thermique et devis gratuits sous 72 h. Installation, mise en service ProClub et connexion cloud par HFE.",
  },
  faq: {
    title: "Questions fréquentes — Partenaire Panasonic",
    items: [
      {
        question: "Qu'est-ce que le programme Panasonic ProClub ?",
        answer:
          "ProClub est la plateforme professionnelle de Panasonic réservée aux installateurs agréés. Elle donne accès aux outils de dimensionnement, à la documentation technique, aux formations Pro Academy et aux procédures de mise en service et SAV. Choisir un installateur ProClub comme HFE, c'est garantir une installation conforme aux exigences du constructeur.",
      },
      {
        question: "En quoi la garantie est-elle meilleure avec un installateur ProClub ?",
        answer:
          "Panasonic conditionne ses garanties commerciales au respect des règles de mise en œuvre, notamment la mise en service par un prestataire reconnu et agréé. Sans cette procédure, les durées de garantie pièces et compresseur peuvent être significativement réduites. HFE réalise la mise en service conforme pour vous faire bénéficier des conditions les plus favorables.",
      },
      {
        question: "Qu'est-ce que le boîtier cloud CZ-TAW1 ?",
        answer:
          "Le CZ-TAW1 est l'interface de connectivité Panasonic qui relie votre pompe à chaleur à Internet. Il permet d'accéder au Smart Cloud (pilotage utilisateur) et, avec votre accord, au Service Cloud (supervision par HFE). Le boîtier est fourni et installé par un professionnel agréé lors de la mise en service.",
      },
      {
        question: "HFE peut-il voir les pannes de ma PAC à distance ?",
        answer:
          "Oui, avec le Service Cloud activé et votre autorisation. HFE peut consulter l'état de l'installation, recevoir les codes défaut et effectuer un premier diagnostic à distance. Cela réduit les délais d'intervention et évite parfois un déplacement inutile. Vous gardez le contrôle : quatre niveaux d'accès sont disponibles, modifiables à tout moment.",
      },
      {
        question: "Le boîtier cloud est-il obligatoire ?",
        answer:
          "Non. La connectivité cloud est une option recommandée pour le confort et la maintenance, mais votre PAC fonctionne parfaitement sans. HFE vous présente les avantages et le coût du CZ-TAW1 lors du devis, sans obligation.",
      },
      {
        question: "Installez-vous aussi la climatisation Panasonic ?",
        answer:
          "Oui. HFE installe les systèmes climatisation réversible Panasonic (mono-split, multi-split) pour particuliers et professionnels à Lille et dans un rayon de 50 km. Retrouvez notre page climatisation pour plus de détails.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Panasonic ProClub partner in Lille | Certified installer HFE",
    description:
      "Hecker & Frères Énergie (HFE), Panasonic ProClub partner in Lille: Panasonic heat pumps, optimised manufacturer warranty, CZ-TAW1 cloud module and Service Cloud remote monitoring.",
    keywords: [
      "Panasonic installer Lille",
      "Panasonic ProClub partner",
      "Panasonic heat pump Lille",
      "Panasonic Service Cloud",
      "Panasonic Smart Cloud",
      "Panasonic heat pump metropolitan Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Panasonic partner", url: "/en/panasonic-partner" },
  ],
  hero: {
    badge: "Official ProClub partner",
    titleBefore: "Certified ",
    titleHighlight: "Panasonic",
    titleAfter: " installer in Lille",
    description:
      "Hecker & Frères Énergie (HFE) is a Panasonic ProClub partner: manufacturer training, compliant commissioning and access to Smart Cloud and Service Cloud for a more reliable, better warranted and remotely monitored heat pump.",
    ctaQuote: "Panasonic heat pump quote",
    ctaPac: "Our heat pumps",
  },
  intro: {
    title: "Why choose a Panasonic ProClub installer?",
    paragraphs: [
      "Panasonic air-to-water heat pumps are recognised for energy efficiency, quiet operation and strong performance at low outdoor temperatures. But equipment quality alone is not enough: lifespan, warranties and comfort also depend on installation and commissioning by an approved professional.",
      "As a ProClub partner, HFE uses Panasonic tools, training and procedures (sizing software, Pro Academy, after-sales hotline). You benefit directly: preserved manufacturer warranties, optimal settings and, if you wish, cloud connectivity to control your heat pump and enable remote maintenance.",
    ],
    externalLabel: "Official Panasonic heating & cooling website",
    externalUrl: "https://www.aircon.panasonic.eu/FR_fr",
  },
  benefits: {
    title: "Concrete benefits for you",
    subtitle:
      "A ProClub installer does more than mount the unit: they activate the services that make a difference over time.",
    items: [
      {
        icon: "shield" as const,
        title: "Optimised manufacturer warranty",
        text: "Commissioning by an approved Panasonic ProClub installer is key to the most favourable commercial manufacturer warranties. Without this procedure, parts and compressor warranty periods may be reduced.",
      },
      {
        icon: "award" as const,
        title: "Pro Academy trained installers",
        text: "Our teams follow Panasonic training paths (design, installation, commissioning and troubleshooting) on heat pump and residential air conditioning ranges.",
      },
      {
        icon: "heat-pump" as const,
        title: "Certified sizing",
        text: "Using ProClub tools (Panasonic calculators and software), your heat pump is sized precisely for your home: radiators, underfloor heating or domestic hot water.",
      },
      {
        icon: "phone" as const,
        title: "CZ-TAW1 cloud module (Smart Cloud)",
        text: "Connectivity option: the CZ-TAW1 module connects your heat pump to the Internet for remote control (temperatures, modes, schedules) via Smart Cloud.",
      },
      {
        icon: "check" as const,
        title: "Service Cloud remote maintenance",
        text: "With Panasonic Service Cloud, HFE can monitor your system remotely, read fault codes, anticipate issues and respond faster — often without an unnecessary visit.",
      },
      {
        icon: "shield" as const,
        title: "HFE ten-year installation warranty",
        text: "Beyond the manufacturer warranty, HFE covers installation with ten-year liability and professional indemnity insurance: dual protection for equipment and workmanship.",
      },
    ],
  },
  cloud: {
    badge: "Cloud connectivity",
    title: "Smart Cloud & Service Cloud: your heat pump under supervision",
    intro:
      "Panasonic offers two complementary connected service levels. HFE supports you in activating them during installation or commissioning.",
    smart: {
      title: "Smart Cloud — for you",
      points: [
        "Remote control of your heat pump (heating, hot water, modes).",
        "View temperatures and system status from the app or web portal.",
        "Requires the CZ-TAW1 connectivity module, installed by an approved professional.",
      ],
    },
    service: {
      title: "Service Cloud — for HFE, your service partner",
      points: [
        "Remote monitoring of installations by your certified installer.",
        "Fault codes and alerts for faster diagnosis.",
        "Preventive maintenance and fine-tuning without a systematic site visit.",
        "You choose the access level granted to HFE (monitoring, control or full access).",
      ],
      externalLabel: "Learn more about Panasonic Service Cloud",
      externalUrl: "https://www.aircon.panasonic.eu/FR_fr",
    },
    note: "Cloud connectivity requires an Internet connection (Wi-Fi or LAN) and a compatible Panasonic heat pump (generation H or later depending on model). HFE checks eligibility during the technical survey.",
  },
  process: {
    title: "Our Panasonic support, from survey to connected follow-up",
    steps: [
      {
        n: 1,
        title: "Survey & sizing",
        text: "Site visit, heat loss calculation and selection of the right Panasonic heat pump (High Performance, T-CAP, EcoFlex…).",
      },
      {
        n: 2,
        title: "Installation & ProClub commissioning",
        text: "Installation to Panasonic specifications, commissioning registration to activate manufacturer warranties.",
      },
      {
        n: 3,
        title: "Cloud connection (optional)",
        text: "CZ-TAW1 module installation, Smart Cloud setup and Service Cloud activation at your chosen access level.",
      },
      {
        n: 4,
        title: "Follow-up & servicing",
        text: "Annual maintenance contract, remote monitoring and fast intervention when the cloud reports an anomaly.",
      },
    ],
  },
  ranges: {
    title: "Panasonic ranges installed by HFE",
    intro:
      "We install Panasonic air-to-water solutions for heating, domestic hot water and, on selected models, summer cooling.",
    items: [
      { name: "High Performance", desc: "Maximum efficiency for new or very well insulated homes." },
      { name: "T-CAP", desc: "Stable performance even in severe cold, ideal for renovations." },
      { name: "EcoFlex", desc: "Flexible solution for various heating configurations." },
      { name: "Panasonic air conditioning", desc: "Air-to-air heat pumps and reversible AC with nanoe™ X." },
    ],
  },
  cta: {
    title: "Planning a Panasonic heat pump in Lille?",
    subtitle:
      "Free thermal study and quote within 72 hours. Installation, ProClub commissioning and cloud setup by HFE.",
  },
  faq: {
    title: "FAQ — Panasonic partner",
    items: [
      {
        question: "What is the Panasonic ProClub programme?",
        answer:
          "ProClub is Panasonic's professional platform for approved installers. It provides sizing tools, technical documentation, Pro Academy training and commissioning and after-sales procedures. Choosing a ProClub installer like HFE ensures installation compliant with manufacturer requirements.",
      },
      {
        question: "How is the warranty better with a ProClub installer?",
        answer:
          "Panasonic ties commercial warranties to proper implementation rules, especially commissioning by a recognised approved contractor. Without this, parts and compressor warranty periods may be significantly reduced. HFE performs compliant commissioning so you benefit from the most favourable terms.",
      },
      {
        question: "What is the CZ-TAW1 cloud module?",
        answer:
          "The CZ-TAW1 is Panasonic's connectivity interface linking your heat pump to the Internet. It enables Smart Cloud (user control) and, with your consent, Service Cloud (HFE supervision). The module is supplied and installed by an approved professional during commissioning.",
      },
      {
        question: "Can HFE see my heat pump faults remotely?",
        answer:
          "Yes, with Service Cloud enabled and your authorisation. HFE can check system status, receive fault codes and perform an initial remote diagnosis. This reduces response times and sometimes avoids an unnecessary visit. You stay in control: four access levels are available and can be changed at any time.",
      },
      {
        question: "Is the cloud module mandatory?",
        answer:
          "No. Cloud connectivity is a recommended option for comfort and maintenance, but your heat pump works perfectly without it. HFE explains the benefits and cost of the CZ-TAW1 in your quote, with no obligation.",
      },
      {
        question: "Do you also install Panasonic air conditioning?",
        answer:
          "Yes. HFE installs Panasonic reversible air conditioning (mono-split, multi-split) for homes and businesses in Lille and within a 50 km radius. See our air conditioning page for details.",
      },
    ],
  },
} as const;

const content = { fr, en } as const;

export type PanasonicPartnerContent = (typeof content)[Locale];

export function getPanasonicPartnerContent(locale: Locale): PanasonicPartnerContent {
  return content[locale];
}

export function getPanasonicPartnerPage(locale: Locale) {
  const { path } = pageI18n(locale);
  return {
    content: getPanasonicPartnerContent(locale),
    path,
  };
}
