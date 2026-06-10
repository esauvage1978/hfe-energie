import type { Locale } from "../config";

const fr = {
  seo: {
    title: "MaPrimeRénov' & CEE 2026 : aides pour pompe à chaleur à Lille",
    description:
      "Toutes les aides pour votre pompe à chaleur en 2026 : MaPrimeRénov' (jusqu'à 5 000 €), CEE Coup de pouce (jusqu'à 5 500 €), TVA 5,5 %, éco-PTZ. Hecker & Frères Énergie (HFE) RGE QualiPAC.",
    keywords: [
      "MaPrimeRénov pompe à chaleur 2026",
      "CEE pompe à chaleur Lille",
      "aides PAC Lille",
      "coup de pouce chauffage",
      "éco-PTZ pompe à chaleur",
      "aide ANAH pompe à chaleur",
      "MaPrimeRénov propriétaire bailleur",
      "MaPrimeRénov par geste pompe à chaleur",
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
      "Jusqu'à 10 500 € d'aides cumulées pour l'installation d'une pompe à chaleur en 2026. Hecker & Frères Énergie (HFE), certifiée RGE QualiPAC, vous accompagne dans le montage de tous vos dossiers.",
    ctaEstimate: "Estimer mes aides",
  },
  accompaniment: {
    title: "HFE s'occupe de tout",
    items: [
      {
        icon: "euro",
        title: "Estimation gratuite",
        text: "On évalue vos aides avant même le devis — vous savez à quoi vous avez droit dès le premier rendez-vous.",
      },
      {
        icon: "file-text",
        title: "Montage de dossiers offert",
        text: "MaPrimeRénov', CEE, éco-PTZ : on monte et dépose vos dossiers auprès de chaque organisme, sans surcoût.",
      },
      {
        icon: "check",
        title: "Artisan RGE QualiPAC",
        text: "Condition obligatoire pour débloquer les aides — c'est notre certification depuis 15 ans.",
      },
    ],
  },
  schemes: {
    title: "Les 4 aides cumulables pour votre PAC",
    items: [
      {
        name: "MaPrimeRénov'",
        amount: "Jusqu'à 5 000 €",
        desc: "Aide de l'État versée par l'ANAH (Agence nationale de l'habitat) pour la rénovation énergétique. Montant variable selon les revenus du foyer (4 catégories : Bleu, Jaune, Violet, Rose).",
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
    subtitle: "Hecker & Frères Énergie (HFE) monte gratuitement votre dossier MaPrimeRénov' et CEE.",
  },
  faq: {
    title: "Questions sur les aides",
    items: [
      {
        question: "Comment cumuler MaPrimeRénov' et CEE en 2026 ?",
        answer:
          "Les deux aides sont cumulables sans restriction depuis 2021. Concrètement, vous pouvez obtenir simultanément MaPrimeRénov' (jusqu'à 5 000 € pour une PAC air-eau) ET le Coup de pouce chauffage CEE (jusqu'à 5 500 € pour le remplacement d'une chaudière fioul). Ajoutez la TVA réduite à 5,5 %, l'éco-PTZ et les aides des collectivités locales (région, département, intercommunalité) : pour les ménages très modestes, le reste à charge peut être inférieur à 1 000 €. Hecker & Frères Énergie (HFE) monte gratuitement votre dossier MaPrimeRénov' et CEE.",
      },
      {
        question: "Qui peut bénéficier de MaPrimeRénov' Parcours accompagné en 2026 ?",
        answer:
          "MaPrimeRénov' Parcours accompagné (anciennement MaPrimeRénov' Sérénité) est destiné aux ménages réalisant une rénovation d'ampleur (gain d'au moins 2 classes énergétiques au DPE). Elle est accessible à tous les niveaux de revenus et peut atteindre 70 % du montant des travaux pour les ménages très modestes. Un accompagnateur Rénov' est obligatoire.",
      },
      {
        question: "Faut-il faire la demande d'aide AVANT les travaux ?",
        answer:
          "Oui, c'est OBLIGATOIRE pour MaPrimeRénov' : vous devez créer votre dossier sur maprimerenov.gouv.fr et attendre l'accord avant de signer le devis et de démarrer les travaux. Pour les CEE, le devis doit aussi être signé après acceptation de l'offre du partenaire CEE. Hecker & Frères Énergie (HFE) vous guide pas à pas pour ne rien rater.",
      },
      {
        question: "Qu'est-ce que l'ANAH et quelles aides propose-t-elle pour une pompe à chaleur ?",
        answer:
          "L'ANAH (Agence nationale de l'habitat) est l'organisme public qui distribue MaPrimeRénov', la principale aide à la rénovation énergétique. C'est elle qui instruit votre dossier et verse l'aide après les travaux. Pour une pompe à chaleur, l'ANAH finance une partie de l'installation via MaPrimeRénov' (jusqu'à 5 000 €) ou MaPrimeRénov' Parcours accompagné pour les rénovations d'ampleur (jusqu'à 70 % du montant pour les ménages très modestes). Hecker & Frères Énergie (HFE), artisan RGE QualiPAC, monte gratuitement votre dossier ANAH / MaPrimeRénov'.",
      },
      {
        question: "MaPrimeRénov' par geste ou rénovation d'ampleur : quelle différence pour une pompe à chaleur ?",
        answer:
          "MaPrimeRénov' se décline en deux parcours. Le parcours « par geste » finance un travaux ciblé — par exemple l'installation d'une pompe à chaleur air-eau ou d'un chauffe-eau thermodynamique — sans condition d'étiquette énergétique du logement. Le parcours « rénovation d'ampleur » (accompagné) finance un bouquet de travaux permettant de gagner au moins 2 classes au DPE, avec un Accompagnateur Rénov' obligatoire. Pour une simple installation de PAC, vous relevez généralement du parcours « par geste ». Hecker & Frères Énergie (HFE) vous oriente vers le parcours le plus avantageux selon votre projet.",
      },
      {
        question: "Suis-je éligible à MaPrimeRénov' en tant que propriétaire bailleur ?",
        answer:
          "Oui. MaPrimeRénov' n'est pas réservée aux propriétaires occupants : les propriétaires bailleurs peuvent aussi en bénéficier. Le logement doit être loué en tant que résidence principale pour une durée d'au moins 6 ans après les travaux, dans la limite de 3 logements par propriétaire. Comme pour les occupants, le logement doit avoir plus de 15 ans (ou plus de 2 ans en cas de remplacement d'un chauffage au fioul) et les travaux être réalisés par un artisan RGE. Hecker & Frères Énergie (HFE) monte gratuitement votre dossier, que vous soyez occupant ou bailleur.",
      },
      {
        question: "Quelles sont les obligations de performance énergétique pour louer mon logement ?",
        answer:
          "La loi rehausse progressivement le niveau minimal de performance exigé pour qu'un logement reste louable : classe F minimum depuis le 1er janvier 2025, classe E à partir du 1er janvier 2028 et classe D à partir du 1er janvier 2034. Installer une pompe à chaleur et améliorer l'isolation permet de gagner des classes au DPE et de sécuriser la mise en location de votre bien. Hecker & Frères Énergie (HFE) réalise une étude gratuite pour identifier les travaux qui font gagner le plus de classes.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "MaPrimeRénov' & CEE 2026: heat pump grants in Lille",
    description:
      "All grants for your heat pump in 2026: MaPrimeRénov' (up to €5,000), CEE heating boost (up to €5,500), 5.5% VAT, eco loan at 0%. Hecker & Frères Énergie (HFE) RGE QualiPAC.",
    keywords: [
      "MaPrimeRénov heat pump 2026",
      "CEE heat pump Lille",
      "heat pump grants Lille",
      "heating boost grant",
      "eco loan heat pump",
      "Anah heat pump grant",
      "MaPrimeRénov landlord",
      "MaPrimeRénov single gesture heat pump",
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
      "Up to €10,500 in combined grants for heat pump installation in 2026. Hecker & Frères Énergie (HFE), RGE QualiPAC certified, supports you through every application.",
    ctaEstimate: "Estimate my grants",
  },
  accompaniment: {
    title: "HFE handles everything",
    items: [
      {
        icon: "euro",
        title: "Free estimate",
        text: "We assess your grants before the quote — you know what you're entitled to from the first meeting.",
      },
      {
        icon: "file-text",
        title: "Application support included",
        text: "MaPrimeRénov', CEE, eco loan: we prepare and submit your applications to every body, at no extra cost.",
      },
      {
        icon: "check",
        title: "RGE QualiPAC certified",
        text: "A mandatory requirement to unlock grants — we've held this certification for 15 years.",
      },
    ],
  },
  schemes: {
    title: "4 stackable grants for your heat pump",
    items: [
      {
        name: "MaPrimeRénov'",
        amount: "Up to €5,000",
        desc: "French government grant paid by the Anah (National Housing Agency) for energy renovation. Amount varies by household income (4 categories: Blue, Yellow, Purple, Pink).",
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
    subtitle: "Hecker & Frères Énergie (HFE) prepares your MaPrimeRénov' and CEE applications free of charge.",
  },
  faq: {
    title: "Questions about grants",
    items: [
      {
        question: "How can I combine MaPrimeRénov' and CEE in 2026?",
        answer:
          "Both grants can be combined without restriction since 2021. In practice, you can receive MaPrimeRénov' (up to €5,000 for an air-to-water heat pump) AND the CEE heating boost (up to €5,500 when replacing an oil boiler) at the same time. Add reduced 5.5% VAT, the eco loan at 0% and local authority grants (region, department, inter-municipality): for very modest households, the out-of-pocket cost can be under €1,000. Hecker & Frères Énergie (HFE) prepares your MaPrimeRénov' and CEE applications free of charge.",
      },
      {
        question: "Who is eligible for MaPrimeRénov' supported pathway in 2026?",
        answer:
          "MaPrimeRénov' supported pathway (formerly MaPrimeRénov' Sérénité) is for households undertaking a major renovation (at least a 2-class EPC improvement). It is open to all income levels and can cover up to 70% of work costs for very modest households. A Rénov' advisor is mandatory.",
      },
      {
        question: "Must I apply for grants BEFORE starting work?",
        answer:
          "Yes, it is MANDATORY for MaPrimeRénov': you must create your application on maprimerenov.gouv.fr and wait for approval before signing the quote and starting work. For CEE, the quote must also be signed after acceptance of the CEE partner offer. Hecker & Frères Énergie (HFE) guides you step by step so nothing is missed.",
      },
      {
        question: "What is the Anah and what grants does it offer for a heat pump?",
        answer:
          "The Anah (French National Housing Agency) is the public body that distributes MaPrimeRénov', the main energy renovation grant. It reviews your application and pays the grant once the work is complete. For a heat pump, the Anah funds part of the installation via MaPrimeRénov' (up to €5,000) or the MaPrimeRénov' supported pathway for major renovations (up to 70% of the cost for very modest households). Hecker & Frères Énergie (HFE), an RGE QualiPAC contractor, prepares your Anah / MaPrimeRénov' application free of charge.",
      },
      {
        question: "MaPrimeRénov' single-gesture or whole-house renovation: what's the difference for a heat pump?",
        answer:
          "MaPrimeRénov' comes in two pathways. The 'single-gesture' (par geste) pathway funds one targeted job — for example installing an air-to-water heat pump or a thermodynamic water heater — with no condition on the home's energy rating. The 'whole-house renovation' (rénovation d'ampleur, supported) pathway funds a package of works delivering at least a 2-band EPC improvement, with a mandatory Rénov' advisor. For a simple heat pump installation, you usually fall under the single-gesture pathway. Hecker & Frères Énergie (HFE) guides you to the most advantageous pathway for your project.",
      },
      {
        question: "Am I eligible for MaPrimeRénov' as a landlord?",
        answer:
          "Yes. MaPrimeRénov' is not limited to owner-occupiers: landlords can also benefit. The property must be let as a main residence for at least 6 years after the work, with a limit of 3 properties per owner. As for occupiers, the property must be over 15 years old (or over 2 years when replacing an oil heating system) and the work carried out by an RGE-certified contractor. Hecker & Frères Énergie (HFE) prepares your application free of charge, whether you are an occupier or a landlord.",
      },
      {
        question: "What energy performance obligations apply if I rent out my property?",
        answer:
          "French law is progressively raising the minimum performance required for a property to remain rentable: at least EPC band F since 1 January 2025, band E from 1 January 2028 and band D from 1 January 2034. Installing a heat pump and improving insulation helps gain EPC bands and secures your ability to keep renting. Hecker & Frères Énergie (HFE) provides a free study to identify the works that gain the most bands.",
      },
    ],
  },
} as const;

export function getGrantsContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type GrantsContent = ReturnType<typeof getGrantsContent>;
