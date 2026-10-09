import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Adoucisseur d'eau à Lille : sel, CO₂ SoluCalc® ou DRAGO — HFE",
    description:
      "Installation d'adoucisseur d'eau à Lille et métropole par Hecker & Frères Énergie (HFE) : sel, CO₂ SoluCalc® ou système DRAGO. Étude sur place, devis gratuit.",
    keywords: [
      "adoucisseur d'eau Lille",
      "adoucisseur au sel Lille",
      "adoucisseur CO2 Lille",
      "SoluCalc Lille",
      "système DRAGO Lille",
      "anti-calcaire Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Adoucisseur d'eau", url: "/plomberie/adoucisseur-eau" },
  ],
  structuredData: {
    serviceName: "Installation d'adoucisseur d'eau à Lille",
    serviceDescription:
      "Adoucisseur au sel, au CO₂ SoluCalc® ou système DRAGO : traitement anti-calcaire à Lille et métropole.",
    slug: "adoucisseur-eau",
  },
  hero: {
    badge: "Anti-calcaire",
    title: "Adoucisseur d'eau : quelle solution pour votre logement ?",
    description:
      "Eau dure en métropole lilloise : tartre sur robinetterie, chauffe-eau et électroménager. Hecker & Frères Énergie (HFE) dimensionne et installe l'adoucisseur adapté à votre eau, votre installation et vos objectifs — sel, CO₂ SoluCalc® ou système DRAGO.",
    ctaQuote: "Demander une étude gratuite",
  },
  types: {
    title: "Nos trois solutions anti-calcaire",
    intro:
      "Chaque technologie répond à un besoin différent. Nous vous orientons après analyse de votre eau et visite sur place — sans imposer une solution unique.",
    items: [
      {
        title: "Adoucisseur à sel",
        desc: "La solution la plus répandue contre le calcaire : échange d'ions pour une eau adoucie et une protection durable de vos canalisations et équipements.",
        details: [
          "Élimination efficace du calcaire",
          "Protection du chauffe-eau, de la robinetterie et des appareils",
          "Régénération automatique de la résine au sel",
        ],
        projectsLabel: "Voir nos réalisations adoucisseur au sel",
        projectsRoute: "projectsAdoucisseurSel" as const,
      },
      {
        title: "Adoucisseur au CO₂ SoluCalc®",
        desc: "Notre solution anti-calcaire écologique en priorité : sans sel, sans rejet d'eau salée, minéraux préservés.",
        details: [
          "Sans sel ni rejet d'eau",
          "Calcaire transformé en bicarbonate soluble",
          "Recharge CO₂ environ une fois par an",
        ],
        projectsLabel: "Voir nos réalisations adoucisseur CO₂",
        projectsRoute: "projectsAdoucisseurCo2" as const,
      },
      {
        title: "Système DRAGO",
        desc: "Traitement physique/électronique qui modifie le comportement du calcaire sans le retirer de l'eau — discret, sans sel et sans électricité.",
        details: [
          "Sans sel et sans consommation électrique",
          "Minéraux naturels préservés",
          "Peu d'entretien, installation discrète",
        ],
        projectsLabel: "Voir nos réalisations DRAGO",
        projectsRoute: "projectsDrago" as const,
      },
    ],
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
    projectsLabel: "Voir notre page adoucisseur au CO₂",
    note: "Nous dimensionnons et installons SoluCalc après analyse de votre eau et de votre installation. Sel ou Drago restent possibles si votre situation l'exige — nous vous orientons lors de l'étude sur place.",
  },
  cta: {
    title: "Un projet d'adoucisseur d'eau ?",
    subtitle: "Étude gratuite sur place, devis sous 72h — HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Water softener in Lille: salt, SoluCalc® CO₂ or DRAGO — HFE",
    description:
      "Water softener installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE): salt, SoluCalc® CO₂ or DRAGO system. On-site survey, free quote.",
    keywords: [
      "water softener Lille",
      "salt water softener Lille",
      "CO2 water softener Lille",
      "SoluCalc Lille",
      "DRAGO system Lille",
      "anti-limescale Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "Water softener", url: "/en/plumbing/water-softener" },
  ],
  structuredData: {
    serviceName: "Water softener installation in Lille",
    serviceDescription:
      "Salt, SoluCalc® CO₂ or DRAGO system: anti-limescale treatment in Lille and the metropolitan area.",
    slug: "water-softener",
  },
  hero: {
    badge: "Anti-limescale",
    title: "Water softener: which solution for your home?",
    description:
      "Hard water in the Lille metropolitan area means scale on taps, water heaters and appliances. Hecker & Frères Énergie (HFE) sizes and installs the right softener for your water, your system and your goals — salt, SoluCalc® CO₂ or DRAGO.",
    ctaQuote: "Request a free survey",
  },
  types: {
    title: "Our three anti-limescale solutions",
    intro:
      "Each technology meets a different need. We advise you after analysing your water and visiting your property — without pushing a one-size-fits-all solution.",
    items: [
      {
        title: "Salt water softener",
        desc: "The most common anti-limescale solution: ion exchange for softened water and durable protection of your pipework and equipment.",
        details: [
          "Effective limescale removal",
          "Protection for water heaters, taps and appliances",
          "Automatic resin regeneration with salt",
        ],
        projectsLabel: "See our salt water softener projects",
        projectsRoute: "projectsAdoucisseurSel" as const,
      },
      {
        title: "SoluCalc® CO₂ softener",
        desc: "Our preferred eco-friendly anti-limescale solution: no salt, no brine discharge, minerals preserved.",
        details: [
          "No salt or wastewater",
          "Limescale converted to soluble bicarbonate",
          "CO₂ refill roughly once a year",
        ],
        projectsLabel: "See our CO₂ softener projects",
        projectsRoute: "projectsAdoucisseurCo2" as const,
      },
      {
        title: "DRAGO system",
        desc: "Physical/electronic treatment that changes how limescale behaves without removing it from water — discreet, no salt and no electricity.",
        details: [
          "No salt and no electricity consumption",
          "Natural minerals preserved",
          "Minimal maintenance, discreet installation",
        ],
        projectsLabel: "See our DRAGO projects",
        projectsRoute: "projectsDrago" as const,
      },
    ],
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
    projectsLabel: "See our CO₂ water softener page",
    note: "We size and install SoluCalc after analysing your water and installation. Salt or Drago remain options when your situation requires them — we advise you during the on-site survey.",
  },
  cta: {
    title: "Planning a water softener project?",
    subtitle: "Free on-site survey, quote within 72 hours — HFE in Lille and the metropolitan area.",
  },
} as const;

export function getWaterSoftenerContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type WaterSoftenerContent = ReturnType<typeof getWaterSoftenerContent>;
