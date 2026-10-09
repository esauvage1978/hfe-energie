import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Professionnels - Chauffage & climatisation tertiaire à Lille",
    description:
      "Hecker & Frères Énergie (HFE) équipe les professionnels de Lille en pompes à chaleur, climatisation tertiaire (cassette, gainable), chauffage industriel. Contrats de maintenance & dépannage.",
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
      "Bureaux, commerces, restaurants, locaux industriels : Hecker & Frères Énergie (HFE) conçoit, installe et maintient vos équipements de chauffage et de climatisation à Lille et dans toute la métropole.",
    ctaAudit: "Demander un devis",
  },
  offers: {
    title: "Nos services dédiés aux professionnels",
    items: [
      {
        title: "Petit tertiaire",
        desc: "Commerce, cabinet ou petit bureau : multi-split réversible pour climatiser plusieurs espaces avec une seule unité extérieure.",
        projectsLabel: "Voir nos réalisations petit tertiaire",
        projectsRoute: "projectsPetitTertiaire" as const,
      },
      {
        title: "Système DRV tertiaire",
        desc: "Climatisation réversible DRV (VRF) : confort zone par zone, économies d'énergie et fonctionnement silencieux pour bureaux et commerces.",
        projectsLabel: "Voir nos réalisations DRV tertiaire",
        projectsRoute: "projectsDrvTertiaire" as const,
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
        title: "Accompagnement et évaluation thermique",
        desc: "Évaluation thermique de vos locaux, préconisations de travaux et dimensionnement de vos équipements de chauffage et climatisation.",
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
  faq: {
    badge: "FAQ",
    title: "Questions fréquentes (professionnels)",
    intro: "Réponses rapides sur nos prestations B2B : climatisation tertiaire, maintenance, dépannage et accompagnement.",
    items: [
      {
        question: "Intervenez-vous sur Lille uniquement ?",
        answer:
          "Nous intervenons à Lille et sur l’ensemble de la métropole lilloise. Pour des sites multi-agences, nous pouvons organiser les interventions par zone et par planning, selon vos contraintes d’exploitation.",
      },
      {
        question: "Peut-on climatiser un local sans accès à l'extérieur ?",
        answer:
          "Oui. Lorsqu'il est impossible de poser un groupe extérieur (locaux en cœur d'îlot, sous-sols, arrière-boutique, salles techniques enclavées), le climatiseur à eau est une solution adaptée. Le rejet de chaleur se fait via un circuit d'eau (boucle bâtiment, groupe froid à eau, adiabateur ou tour de refroidissement selon le site), sans unité extérieure classique sur façade. Hecker & Frères Énergie (HFE) réalise une étude technique sur place pour valider la faisabilité, dimensionner l'installation et vous proposer la solution la plus pertinente.",
      },
      {
        question: "Proposez-vous des contrats de maintenance pour les professionnels ?",
        answer:
          "Oui. Nous proposons des contrats de maintenance préventive (visites planifiées, contrôles, réglages) et des options de dépannage prioritaire. L’objectif : limiter les pannes, sécuriser les performances et optimiser vos consommations.",
      },
      {
        question: "Êtes-vous capables d’intervenir en urgence ?",
        answer:
          "Oui, selon disponibilité et niveau de criticité. Nous mettons en place des procédures adaptées (priorisation, astreinte ponctuelle, pièces courantes) pour réduire au maximum l’impact sur votre activité.",
      },
      {
        question: "Proposez-vous un accompagnement et une évaluation thermique avant travaux ?",
        answer:
          "Oui. Nous réalisons une visite technique et une évaluation de vos besoins (usage, occupation, puissance, contraintes). Nous vous remettons ensuite une proposition claire : solutions, dimensionnement, budget et planning.",
      },
    ],
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
      "Hecker & Frères Énergie (HFE) equips businesses in Lille with heat pumps, commercial air conditioning (cassette, ducted), industrial heating. Maintenance contracts & emergency repairs.",
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
      "Offices, retail, restaurants, industrial premises: Hecker & Frères Énergie (HFE) designs, installs and maintains your heating and air conditioning equipment in Lille and across the metropolitan area.",
    ctaAudit: "Request a quote",
  },
  offers: {
    title: "Services for business customers",
    items: [
      {
        title: "Small commercial",
        desc: "Retail unit, consulting room or small office: reversible multi-split to air-condition several spaces from a single outdoor unit.",
        projectsLabel: "See our small commercial projects",
        projectsRoute: "projectsPetitTertiaire" as const,
      },
      {
        title: "Commercial VRF system",
        desc: "Reversible VRF (DRV) air conditioning: zone-by-zone comfort, energy savings and quiet operation for offices and retail.",
        projectsLabel: "See our commercial VRF projects",
        projectsRoute: "projectsDrvTertiaire" as const,
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
        title: "Support and thermal evaluation",
        desc: "Thermal evaluation of your premises, work recommendations and sizing of your heating and air conditioning equipment.",
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
  faq: {
    badge: "FAQ",
    title: "Frequently asked questions (business)",
    intro: "Quick answers about our B2B services: commercial AC, maintenance, repairs and support.",
    items: [
      {
        question: "Do you only operate in Lille?",
        answer:
          "We cover Lille and the entire Lille metropolitan area. For multi-site businesses, we can plan interventions by zone and schedule to match your operational constraints.",
      },
      {
        question: "Can you air-condition premises with no outdoor access?",
        answer:
          "Yes. When it is impossible to install an outdoor condenser (courtyard buildings, basements, back-of-shop units, enclosed plant rooms), water-cooled air conditioning is a suitable option. Heat is rejected through a water loop (building circuit, water chiller, adiabatic cooler or cooling tower depending on the site), without a conventional facade-mounted outdoor unit. Hecker & Frères Énergie (HFE) carries out a technical site survey to confirm feasibility, size the system and recommend the most appropriate solution.",
      },
      {
        question: "Do you offer maintenance contracts for businesses?",
        answer:
          "Yes. We provide preventive maintenance contracts (scheduled visits, checks, tuning) and priority repair options. The goal is to reduce breakdowns, secure performance and optimise energy consumption.",
      },
      {
        question: "Can you handle urgent repairs?",
        answer:
          "Yes, depending on availability and criticality. We can set up an approach tailored to your needs (prioritisation, occasional on-call coverage, common spare parts) to minimise downtime.",
      },
      {
        question: "Do you offer support and thermal evaluation before work starts?",
        answer:
          "Yes. We carry out a site visit and evaluate your needs (usage, occupancy, capacity, constraints). We then provide a clear proposal including solutions, sizing, budget and timeline.",
      },
    ],
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
