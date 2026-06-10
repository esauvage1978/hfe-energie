import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Plomberie Lille : dépannage, adoucisseur, sanitaire",
    description:
      "Plombier à Lille : dépannage plomberie, installation d'adoucisseur d'eau, ballon d'eau chaude électrique, sanitaire. Intervention rapide, devis gratuit. Hecker & Frères Énergie (HFE).",
    keywords: [
      "plombier Lille",
      "dépannage plomberie Lille",
      "adoucisseur d'eau Lille",
      "adoucisseur CO2 Lille",
      "SoluCalc Lille",
      "ballon eau chaude Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
  ],
  structuredData: {
    serviceName: "Plomberie & rénovation de salle de bain à Lille et sa métropole",
    serviceDescription:
      "Dépannage plomberie, adoucisseur d'eau, ballons d'eau chaude et rénovation sanitaire à Lille et métropole.",
    slug: "plomberie",
  },
  hero: {
    badge: "Plombier",
    title: "Plomberie & rénovation de salle de bain à Lille et sa métropole",
    description:
      "Hecker & Frères Énergie (HFE) intervient à Lille et sa métropole pour tous vos travaux de plomberie : dépannage rapide, installation d'adoucisseurs, remplacement de ballons d'eau chaude, rénovation complète de salle de bain.",
    ctaPhone: true,
    ctaQuote: "Devis gratuit",
    phoneNote: "Ligne dédiée plomberie et dépannage sanitaire.",
  },
  offers: {
    title: "Nos prestations de plomberie",
    items: [
      {
        title: "Sanitaire & rénovation",
        desc: "Installation complète de salles de bain, WC, douches à l'italienne, robinetterie.",
      },
      {
        title: "Dépannage plomberie",
        desc: "Intervention rapide à Lille et sur la métropole : fuites, bouchons, robinetterie, chauffe-eau et sanitaires.",
        details: [
          "Ligne dédiée plomberie : 06 13 46 67 90",
          "Recherche de fuite et colmatage",
          "Débouchage de canalisations et éviers",
          "Réparation ou remplacement de robinetterie",
        ],
      },
      {
        title: "Adoucisseur d'eau",
        desc: "Installation de solutions anti-calcaire pour protéger vos canalisations et électroménagers.",
        details: [
          "Adoucisseur à sel : efficacité maximale contre le calcaire, protection durable du réseau.",
          "Adoucisseur au CO₂ SoluCalc® : sans sel, sans rejet d'eau salée, minéraux préservés — solution que nous installons en priorité.",
          "Drago : traitement physique/électronique, sans sel, sans rejet, discret.",
        ],
      },
      {
        title: "Ballon eau chaude",
        desc: "Remplacement de ballons électriques par des modèles à haute performance, thermodynamiques ou extra-plats.",
      },
    ],
  },
  emergencyRepair: {
    badge: "Urgence & dépannage",
    title: "Dépannage plomberie : intervention rapide",
    intro:
      "Une fuite, un WC qui déborde ou plus d'eau chaude ? Notre équipe plomberie intervient sur Lille et l'ensemble de la métropole lilloise (MEL) pour sécuriser votre installation et rétablir le confort au plus vite.",
    interventions: [
      {
        title: "Fuites d'eau",
        desc: "Recherche de fuite (visible ou encastrée), colmatage, remplacement de joints, flexibles, raccords ou tronçons de canalisation endommagés.",
      },
      {
        title: "Canalisations bouchées",
        desc: "Débouchage d'évier, lavabo, douche, baignoire, WC et colonne : diagnostic de l'origine du bouchon et remise en service durable.",
      },
      {
        title: "Robinetterie & sanitaires",
        desc: "Réparation ou remplacement de mitigeurs, mélangeurs, mécanismes de chasse, flotteurs, joints de WC et équipements défectueux.",
      },
      {
        title: "Chauffe-eau & production ECS",
        desc: "Panne de ballon électrique, fuite sur groupe de sécurité, absence d'eau chaude : diagnostic et remplacement si nécessaire.",
      },
      {
        title: "Réseau & alimentation",
        desc: "Problème de pression, vanne d'arrêt, compteur, évacuation ou raccordement après travaux : nous remettons le réseau en état de marche.",
      },
    ],
    whenToCallTitle: "Quand nous appeler ?",
    whenToCall: [
      "Fuite active ou trace d'humidité qui s'étend",
      "Plus d'eau chaude ou chauffe-eau qui fuit",
      "WC, évier ou douche qui ne s'évacue plus",
      "Robinet qui goutte ou ne se ferme plus",
      "Odeur d'égout ou reflux dans les évacuations",
    ],
    commitmentTitle: "Notre engagement",
    commitment:
      "À notre arrivée sur place, nous identifions l'origine du problème, vous expliquons les options (réparation ou remplacement) et établissons un devis clair avant toute intervention importante. Pour les réparations courantes, nous intervenons directement lorsque c'est possible.",
    phoneLabel: "Urgence plomberie",
    phoneCta: "06 13 46 67 90",
    contactCta: "Demande en ligne",
  },
  solucalc: {
    badge: "Adoucisseur CO₂",
    title: "SoluCalc® : notre solution anti-calcaire écologique",
    intro:
      "Pour le traitement au CO₂, Hecker & Frères Énergie (HFE) travaille essentiellement avec SoluCalc®, adoucisseur d'eau écologique sans sel. La technologie transforme le calcaire en bicarbonate soluble qui ne s'incruste plus dans les canalisations, robinets et appareils — sans sodium, sans eaux de régénération et avec une maintenance réduite (recharge CO₂ environ une fois par an).",
    benefits: [
      {
        title: "Sans sel, sans rejet polluant",
        text: "Alternative aux adoucisseurs au sel : pas de sacs à transporter, pas d'eau salée rejetée à l'égout.",
      },
      {
        title: "Minéraux préservés",
        text: "Le calcium et le magnésium restent dans l'eau pour le goût et l'équilibre minéral.",
      },
      {
        title: "Installation compacte",
        text: "Système discret après le compteur d'eau, adapté aux maisons et appartements de la métropole lilloise.",
      },
      {
        title: "Protection durable",
        text: "Moins de tartre sur chaudière, lave-linge, lave-vaisselle et réseau sanitaire — économies d'énergie et de produits d'entretien.",
      },
    ],
    externalLabel: "En savoir plus sur SoluCalc",
    externalUrl: "https://solucalc.fr/fr-FR",
    note: "Nous dimensionnons et installons SoluCalc après analyse de votre eau et de votre installation. Sel ou Drago restent possibles si votre situation l'exige — nous vous orientons lors de l'étude sur place.",
  },
  faq: {
    badge: "FAQ",
    title: "Questions plomberie & adoucisseur",
    intro: "Quelques réponses rapides sur nos solutions plomberie, ballon d’eau chaude et anti-calcaire.",
    items: [
      {
        question: "Quel adoucisseur choisir : sel, CO₂ ou Drago ?",
        answer:
          "Le sel adoucit réellement l'eau (échange d'ions) : très efficace mais demande sel et entretien. Pour le CO₂, nous installons essentiellement SoluCalc® : traitement sans sel qui limite l'entartrage, préserve les minéraux et ne rejette pas d'eau salée. Le Drago est un traitement physique/électronique, sans sel et sans rejet, dont l'efficacité dépend du contexte. Nous vous conseillons après diagnostic sur place.",
      },
      {
        question: "Pourquoi SoluCalc pour l'adoucisseur au CO₂ ?",
        answer:
          "SoluCalc® est un adoucisseur écologique au CO₂ alimentaire : le calcaire est transformé en bicarbonate soluble, ce qui protège robinets, chauffe-eau et électroménager sans ajouter de sodium. Compact, fiable et garanti 5 ans, il convient bien aux logements de Lille et métropole où l'on souhaite une alternative moderne au sel. HFE assure l'installation, la mise en service et la recharge CO₂.",
      },
      {
        question: "Un ballon extra-plat, c’est pour quels besoins ?",
        answer:
          "Le ballon extra-plat est idéal quand l’espace est limité (placard, buanderie, cuisine) tout en conservant un bon confort d’eau chaude. On valide le volume et l’emplacement selon vos usages et la configuration du logement.",
      },
      {
        question: "Intervenez-vous à Lille uniquement ?",
        answer:
          "Nous intervenons à Lille et sur l’ensemble de sa métropole, pour dépannage, rénovation et installations.",
      },
      {
        question: "Proposez-vous un dépannage plomberie en urgence ?",
        answer:
          "Oui. Pour toute urgence sanitaire (fuite, débordement, panne d'eau chaude), appelez notre ligne dédiée au 06 13 46 67 90. Nous intervenons sur Lille et la métropole selon disponibilité. En cas de fuite importante, coupez l'alimentation d'eau au plus près du problème (vanne sous évier, WC ou générale) en attendant notre arrivée.",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations en plomberie",
    subtitle: "Salles de bain, sanitaires, adoucisseurs : quelques chantiers récents.",
  },
  cta: {
    title: "Une fuite, une panne, un projet sanitaire ?",
    subtitle: "Notre équipe intervient rapidement à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Plumbing Lille: repairs, water softener, bathroom",
    description:
      "Plumber in Lille: plumbing repairs, water softener installation, electric hot water tank, bathroom fittings. Fast response, free quote. Hecker & Frères Énergie (HFE).",
    keywords: [
      "plumber Lille",
      "plumbing repair Lille",
      "water softener Lille",
      "CO2 water softener Lille",
      "SoluCalc Lille",
      "hot water tank Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
  ],
  structuredData: {
    serviceName: "Plumbing & bathroom fittings in Lille",
    serviceDescription:
      "Plumbing repairs, water softeners, hot water tanks and bathroom renovation in Lille and the metropolitan area.",
    slug: "plumbing",
  },
  hero: {
    badge: "Plumber",
    title: "Plumbing & bathroom fittings in Lille",
    description:
      "Hecker & Frères Énergie (HFE) handles all your plumbing needs: fast repairs, water softener installation, hot water tank replacement and complete bathroom renovation.",
    ctaPhone: true,
    ctaQuote: "Free quote",
    phoneNote: "Dedicated plumbing and sanitary emergency line.",
  },
  offers: {
    title: "Our plumbing services",
    items: [
      {
        title: "Bathroom & renovation",
        desc: "Full bathroom installation: toilets, walk-in showers, taps and fittings.",
      },
      {
        title: "Plumbing repairs",
        desc: "Fast response in Lille and the metropolitan area: leaks, blockages, taps, hot water tanks and sanitary fittings.",
        details: [
          "Dedicated plumbing line: 06 13 46 67 90",
          "Leak detection and repair",
          "Blocked pipes, sinks and drains",
          "Tap and valve repair or replacement",
        ],
      },
      {
        title: "Water softener",
        desc: "Anti-limescale solutions to protect your pipework and appliances.",
        details: [
          "Salt-based softener: maximum effectiveness against limescale, long-term protection.",
          "SoluCalc® CO₂ softener: no salt, no brine discharge, minerals preserved — our preferred solution.",
          "Drago: physical/electronic treatment, no salt, no discharge, discreet.",
        ],
      },
      {
        title: "Hot water tank",
        desc: "Replacement of electric tanks with high-efficiency, thermodynamic or slim (flat) models.",
      },
    ],
  },
  emergencyRepair: {
    badge: "Emergency repairs",
    title: "Plumbing repairs: fast response",
    intro:
      "A leak, overflowing toilet or no hot water? Our plumbing team covers Lille and the entire metropolitan area to secure your installation and restore comfort as quickly as possible.",
    interventions: [
      {
        title: "Water leaks",
        desc: "Leak detection (visible or concealed), sealing, replacement of washers, hoses, fittings or damaged pipe sections.",
      },
      {
        title: "Blocked drains",
        desc: "Unblocking sinks, basins, showers, baths, toilets and stacks: we identify the cause and restore lasting flow.",
      },
      {
        title: "Taps & sanitary ware",
        desc: "Repair or replacement of mixers, taps, flush mechanisms, floats, toilet seals and faulty fittings.",
      },
      {
        title: "Hot water & DHW",
        desc: "Electric tank breakdown, safety group leak, no hot water: diagnosis and replacement if required.",
      },
      {
        title: "Supply & drainage",
        desc: "Pressure issues, shut-off valves, meter, drainage or connections after works: we get your system back up and running.",
      },
    ],
    whenToCallTitle: "When should you call us?",
    whenToCall: [
      "Active leak or spreading damp patch",
      "No hot water or leaking water heater",
      "Toilet, sink or shower not draining",
      "Dripping tap or valve that won't close",
      "Sewage smell or backflow in drains",
    ],
    commitmentTitle: "Our commitment",
    commitment:
      "On site, we identify the cause, explain your options (repair or replacement) and provide a clear quote before any major work. For common minor repairs, we can often fix the issue during the visit.",
    phoneLabel: "Plumbing emergency",
    phoneCta: "06 13 46 67 90",
    contactCta: "Online request",
  },
  solucalc: {
    badge: "CO₂ water softener",
    title: "SoluCalc®: our eco-friendly anti-limescale solution",
    intro:
      "For CO₂ treatment, Hecker & Frères Énergie (HFE) mainly works with SoluCalc®, an ecological salt-free water softener. The technology converts limescale into soluble bicarbonate that no longer builds up in pipework, taps and appliances — no sodium, no regeneration wastewater and low maintenance (CO₂ refill roughly once a year).",
    benefits: [
      {
        title: "No salt, no polluting discharge",
        text: "An alternative to salt softeners: no heavy salt bags and no salty wastewater into the drain.",
      },
      {
        title: "Minerals preserved",
        text: "Calcium and magnesium remain in the water for taste and mineral balance.",
      },
      {
        title: "Compact installation",
        text: "Discreet system after the water meter, suitable for homes across the Lille metropolitan area.",
      },
      {
        title: "Lasting protection",
        text: "Less scale on boilers, washing machines, dishwashers and sanitary pipework — energy and cleaning product savings.",
      },
    ],
    externalLabel: "Learn more about SoluCalc",
    externalUrl: "https://solucalc.fr/fr-FR",
    note: "We size and install SoluCalc after analysing your water and installation. Salt or Drago remain options when your situation requires them — we advise you during the on-site survey.",
  },
  faq: {
    badge: "FAQ",
    title: "Plumbing & water softener questions",
    intro: "Quick answers about our plumbing, hot water tank and anti-limescale solutions.",
    items: [
      {
        question: "Which option should I choose: salt, CO₂ or Drago?",
        answer:
          "Salt-based softeners truly soften water (ion exchange): very effective but require salt and servicing. For CO₂, we mainly install SoluCalc®: salt-free treatment that limits scaling, preserves minerals and discharges no brine. Drago is a physical/electronic treatment with no salt and no discharge; performance depends on installation conditions. We recommend the best option after an on-site diagnosis.",
      },
      {
        question: "Why SoluCalc for a CO₂ water softener?",
        answer:
          "SoluCalc® is an ecological CO₂ softener using food-grade CO₂: limescale is converted into soluble bicarbonate, protecting taps, water heaters and appliances without adding sodium. Compact, reliable and with a 5-year warranty, it suits homes in Lille and the metropolitan area looking for a modern alternative to salt. HFE handles installation, commissioning and CO₂ refills.",
      },
      {
        question: "When is a slim (flat) hot water tank a good choice?",
        answer:
          "A slim (flat) tank is ideal when space is limited while maintaining good hot water comfort. We validate sizing and placement based on your usage and your home configuration.",
      },
      {
        question: "Do you cover Lille only?",
        answer:
          "No. We operate in Lille and across the entire Lille metropolitan area (MEL) for repairs, renovations and installations: La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d’Ascq, Roubaix, Tourcoing, Wasquehal and surrounding towns.",
      },
      {
        question: "Do you offer emergency plumbing repairs?",
        answer:
          "Yes. For any sanitary emergency (leak, overflow, no hot water), call our dedicated line on 06 13 46 67 90. We cover Lille and the metropolitan area subject to availability. For a major leak, shut off the water supply as close to the problem as possible (under-sink valve, toilet valve or main stopcock) while waiting for us.",
      },
    ],
  },
  gallery: {
    title: "Our plumbing projects",
    subtitle: "Bathrooms, sanitary fittings, water softeners: recent projects.",
  },
  cta: {
    title: "A leak, a breakdown or a bathroom project?",
    subtitle: "Our team responds quickly across Lille and the metropolitan area.",
  },
} as const;

export function getPlumbingContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type PlumbingContent = ReturnType<typeof getPlumbingContent>;
