import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Professionnels - Chauffage & climatisation tertiaire à Lille",
    description:
      "HFE Énergie équipe les professionnels de Lille en pompes à chaleur, climatisation tertiaire (cassette, gainable), chauffage industriel. Contrats de maintenance & dépannage.",
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Professionnels", url: "/professionnels" },
  ],
  hero: {
    badge: "Professionnels",
    titleBefore: "Solutions énergétiques pour ",
    titleHighlight: "professionnels",
    description:
      "Bureaux, commerces, restaurants, locaux industriels : HFE Énergie conçoit, installe et maintient vos équipements de chauffage et de climatisation à Lille et dans toute la métropole.",
    ctaAudit: "Demander un audit",
  },
  offers: {
    title: "Nos services dédiés aux professionnels",
    items: [
      {
        title: "Climatisation tertiaire",
        desc: "Bureaux, commerces, restaurants, cabinets médicaux : climatisation cassette, gainable, multi-split.",
      },
      {
        title: "PAC industrielle",
        desc: "Pompes à chaleur de forte puissance pour entrepôts, ateliers, locaux industriels.",
      },
      {
        title: "Maintenance préventive",
        desc: "Contrats de maintenance sur mesure pour assurer la disponibilité de vos équipements.",
      },
      {
        title: "Dépannage 7j/7",
        desc: "Intervention rapide pour limiter votre arrêt d'activité - secteur Lille métropole.",
      },
      {
        title: "Audit énergétique",
        desc: "Diagnostic et préconisations pour optimiser votre consommation et votre confort.",
      },
      {
        title: "Décret tertiaire",
        desc: "Accompagnement à la mise en conformité avec le décret tertiaire (DEET).",
      },
    ],
  },
  clients: {
    title: "Ils nous font confiance",
    subtitle: "Plus de 600 clients professionnels nous renouvellent leur confiance chaque année.",
  },
  cta: {
    title: "Un projet B2B ? Parlons-en.",
    subtitle: "Visite technique, étude personnalisée et engagement sur les délais.",
  },
} as const;

const en = {
  seo: {
    title: "Business - Commercial heating & air conditioning in Lille",
    description:
      "HFE Énergie equips businesses in Lille with heat pumps, commercial air conditioning (cassette, ducted), industrial heating. Maintenance contracts & emergency repairs.",
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Business", url: "/en/commercial" },
  ],
  hero: {
    badge: "Business",
    titleBefore: "Energy solutions for ",
    titleHighlight: "businesses",
    description:
      "Offices, retail, restaurants, industrial premises: HFE Énergie designs, installs and maintains your heating and air conditioning equipment in Lille and across the metropolitan area.",
    ctaAudit: "Request an audit",
  },
  offers: {
    title: "Services for business customers",
    items: [
      {
        title: "Commercial air conditioning",
        desc: "Offices, retail, restaurants, medical practices: cassette, ducted and multi-split air conditioning.",
      },
      {
        title: "Industrial heat pumps",
        desc: "High-capacity heat pumps for warehouses, workshops and industrial premises.",
      },
      {
        title: "Preventive maintenance",
        desc: "Tailored maintenance contracts to keep your equipment available.",
      },
      {
        title: "7-day emergency repairs",
        desc: "Fast response to minimise downtime — Lille metropolitan area.",
      },
      {
        title: "Energy audit",
        desc: "Assessment and recommendations to optimise consumption and comfort.",
      },
      {
        title: "Tertiary sector decree",
        desc: "Support for compliance with the tertiary sector energy efficiency decree (DEET).",
      },
    ],
  },
  clients: {
    title: "They trust us",
    subtitle: "Over 600 business clients renew their trust in us every year.",
  },
  cta: {
    title: "A B2B project? Let's talk.",
    subtitle: "Site visit, tailored proposal and commitment to deadlines.",
  },
} as const;

export function getCommercialContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type CommercialContent = ReturnType<typeof getCommercialContent>;
