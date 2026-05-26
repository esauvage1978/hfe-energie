import type { Locale } from "../config";

const fr = {
  seo: {
    title: "MaPrimeRénov' & CEE 2026 : aides pour pompe à chaleur à Lille",
    description:
      "Toutes les aides pour votre pompe à chaleur en 2026 : MaPrimeRénov' (jusqu'à 5 000 €), CEE Coup de pouce (jusqu'à 5 500 €), TVA 5,5 %, éco-PTZ. HFE Énergie RGE QualiPAC.",
    keywords: [
      "MaPrimeRénov pompe à chaleur 2026",
      "CEE pompe à chaleur Lille",
      "aides PAC Lille",
      "coup de pouce chauffage",
      "éco-PTZ pompe à chaleur",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Aides & Financements", url: "/aides-financement" },
  ],
  hero: {
    badge: "Aides 2026",
    titleBefore: "Aides & financements pour votre ",
    titleHighlight: "pompe à chaleur",
    description:
      "Jusqu'à 10 500 € d'aides cumulées pour l'installation d'une pompe à chaleur en 2026. HFE Énergie, certifiée RGE QualiPAC, vous accompagne dans le montage de tous vos dossiers.",
    ctaEstimate: "Estimer mes aides",
  },
  schemes: {
    title: "Les 4 aides cumulables pour votre PAC",
    items: [
      {
        name: "MaPrimeRénov'",
        amount: "Jusqu'à 5 000 €",
        desc: "Aide de l'État pour la rénovation énergétique. Montant variable selon les revenus du foyer (4 catégories : Bleu, Jaune, Violet, Rose).",
        conditions: [
          "Logement principal de plus de 15 ans",
          "Travaux réalisés par un artisan RGE",
          "Demande à effectuer AVANT le début des travaux",
        ],
      },
      {
        name: "CEE - Coup de pouce chauffage",
        amount: "Jusqu'à 5 500 €",
        desc: "Prime versée par les fournisseurs d'énergie (TotalEnergies, EDF, Engie...) pour remplacer une chaudière fioul/gaz/charbon par une PAC.",
        conditions: [
          "Remplacement d'une chaudière fioul, gaz ou charbon",
          "Logement de plus de 2 ans",
          "Artisan RGE obligatoire",
        ],
      },
      {
        name: "TVA à 5,5 %",
        amount: "Économie immédiate",
        desc: "Taux de TVA réduit sur la fourniture et la pose d'équipements énergétiques performants dans un logement de plus de 2 ans.",
        conditions: [
          "Logement de plus de 2 ans",
          "Pose par un professionnel",
          "Équipements éligibles",
        ],
      },
      {
        name: "Éco-prêt à taux zéro",
        amount: "Jusqu'à 50 000 €",
        desc: "Prêt sans intérêt pour financer le reste à charge de vos travaux de rénovation énergétique. Cumulable avec MaPrimeRénov' et CEE.",
        conditions: [
          "Banque partenaire",
          "Travaux éligibles définis par l'État",
          "Remboursement jusqu'à 20 ans",
        ],
      },
    ],
  },
  cta: {
    title: "Calculez vos aides en moins de 72h",
    subtitle: "HFE Énergie monte gratuitement votre dossier MaPrimeRénov' et CEE.",
  },
  faq: {
    title: "Questions sur les aides",
    items: [
      {
        question: "Comment cumuler MaPrimeRénov' et CEE en 2026 ?",
        answer:
          "Les deux aides sont cumulables sans restriction depuis 2021. Concrètement, vous pouvez obtenir simultanément MaPrimeRénov' (jusqu'à 5 000 € pour une PAC air-eau) ET le Coup de pouce chauffage CEE (jusqu'à 5 500 € pour le remplacement d'une chaudière fioul). Ajoutez la TVA réduite à 5,5 % et l'éco-PTZ : pour les ménages très modestes, le reste à charge peut être inférieur à 1 000 €. HFE Énergie monte gratuitement votre dossier MaPrimeRénov' et CEE.",
      },
      {
        question: "Qui peut bénéficier de MaPrimeRénov' Parcours accompagné en 2026 ?",
        answer:
          "MaPrimeRénov' Parcours accompagné (anciennement MaPrimeRénov' Sérénité) est destiné aux ménages réalisant une rénovation d'ampleur (gain d'au moins 2 classes énergétiques au DPE). Elle est accessible à tous les niveaux de revenus et peut atteindre 70 % du montant des travaux pour les ménages très modestes. Un accompagnateur Rénov' est obligatoire.",
      },
      {
        question: "Faut-il faire la demande d'aide AVANT les travaux ?",
        answer:
          "Oui, c'est OBLIGATOIRE pour MaPrimeRénov' : vous devez créer votre dossier sur maprimerenov.gouv.fr et attendre l'accord avant de signer le devis et de démarrer les travaux. Pour les CEE, le devis doit aussi être signé après acceptation de l'offre du partenaire CEE. HFE Énergie vous guide pas à pas pour ne rien rater.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "MaPrimeRénov' & CEE 2026: heat pump grants in Lille",
    description:
      "All grants for your heat pump in 2026: MaPrimeRénov' (up to €5,000), CEE heating boost (up to €5,500), 5.5% VAT, eco loan at 0%. HFE Énergie RGE QualiPAC.",
    keywords: [
      "MaPrimeRénov heat pump 2026",
      "CEE heat pump Lille",
      "heat pump grants Lille",
      "heating boost grant",
      "eco loan heat pump",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Grants & financing", url: "/en/grants-and-financing" },
  ],
  hero: {
    badge: "Grants 2026",
    titleBefore: "Grants & financing for your ",
    titleHighlight: "heat pump",
    description:
      "Up to €10,500 in combined grants for heat pump installation in 2026. HFE Énergie, RGE QualiPAC certified, supports you through every application.",
    ctaEstimate: "Estimate my grants",
  },
  schemes: {
    title: "4 stackable grants for your heat pump",
    items: [
      {
        name: "MaPrimeRénov'",
        amount: "Up to €5,000",
        desc: "French government grant for energy renovation. Amount varies by household income (4 categories: Blue, Yellow, Purple, Pink).",
        conditions: [
          "Main residence over 15 years old",
          "Work carried out by an RGE-certified contractor",
          "Application must be submitted BEFORE work begins",
        ],
      },
      {
        name: "CEE - Heating boost",
        amount: "Up to €5,500",
        desc: "Grant paid by energy suppliers (TotalEnergies, EDF, Engie, etc.) for replacing oil/gas/coal boilers with a heat pump.",
        conditions: [
          "Replacement of oil, gas or coal boiler",
          "Property over 2 years old",
          "RGE-certified contractor required",
        ],
      },
      {
        name: "5.5% VAT",
        amount: "Immediate saving",
        desc: "Reduced VAT rate on supply and installation of high-performance energy equipment in properties over 2 years old.",
        conditions: [
          "Property over 2 years old",
          "Installation by a professional",
          "Eligible equipment",
        ],
      },
      {
        name: "Eco loan at 0%",
        amount: "Up to €50,000",
        desc: "Interest-free loan to finance the remaining cost of your energy renovation. Can be combined with MaPrimeRénov' and CEE.",
        conditions: [
          "Partner bank",
          "Eligible work as defined by the government",
          "Repayment over up to 20 years",
        ],
      },
    ],
  },
  cta: {
    title: "Calculate your grants in under 72 hours",
    subtitle: "HFE Énergie prepares your MaPrimeRénov' and CEE applications free of charge.",
  },
  faq: {
    title: "Questions about grants",
    items: [
      {
        question: "How can I combine MaPrimeRénov' and CEE in 2026?",
        answer:
          "Both grants can be combined without restriction since 2021. In practice, you can receive MaPrimeRénov' (up to €5,000 for an air-to-water heat pump) AND the CEE heating boost (up to €5,500 when replacing an oil boiler) at the same time. Add reduced 5.5% VAT and the eco loan at 0%: for very modest households, the out-of-pocket cost can be under €1,000. HFE Énergie prepares your MaPrimeRénov' and CEE applications free of charge.",
      },
      {
        question: "Who is eligible for MaPrimeRénov' supported pathway in 2026?",
        answer:
          "MaPrimeRénov' supported pathway (formerly MaPrimeRénov' Sérénité) is for households undertaking a major renovation (at least a 2-class EPC improvement). It is open to all income levels and can cover up to 70% of work costs for very modest households. A Rénov' advisor is mandatory.",
      },
      {
        question: "Must I apply for grants BEFORE starting work?",
        answer:
          "Yes, it is MANDATORY for MaPrimeRénov': you must create your application on maprimerenov.gouv.fr and wait for approval before signing the quote and starting work. For CEE, the quote must also be signed after acceptance of the CEE partner offer. HFE Énergie guides you step by step so nothing is missed.",
      },
    ],
  },
} as const;

export function getGrantsContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type GrantsContent = ReturnType<typeof getGrantsContent>;
