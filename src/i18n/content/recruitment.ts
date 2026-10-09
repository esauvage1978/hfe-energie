import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Recrutement plombier-chauffagiste à Lille – HFE",
    description:
      "HFE recrute à Lille : installateur de pompes à chaleur et alternant en plomberie, chauffage et climatisation. Équipe RGE QualiPAC, chantiers variés.",
    keywords: [
      "recrutement chauffagiste Lille",
      "emploi plombier chauffagiste Lille",
      "emploi climaticien Lille",
      "alternance chauffage Lille",
      "installateur pompe à chaleur Lille",
      "recrutement HFE Énergie",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Recrutement", url: "/recrutement" },
  ],
  hero: {
    badge: "Carrières",
    title: "Rejoignez Hecker & Frères Énergie",
    description:
      "HFE recrute des profils motivés pour accompagner la croissance de nos activités chauffage, climatisation et plomberie à Lille et dans la métropole. Vous êtes plombier chauffagiste, alternant avec de l'expérience ou installateur qualifié en pompe à chaleur ? Parlons de votre projet professionnel.",
    ctaApply: "Envoyer ma candidature",
    ctaContact: "Nous contacter",
  },
  jobs: {
    title: "Nos offres d'emploi",
    intro:
      "Deux postes sont ouverts au sein de nos équipes de chantier. Chaque offre est détaillée ci-dessous : consultez la fiche, puis candidatez via notre formulaire en précisant le poste visé.",
    contractLabel: "Contrat",
    locationLabel: "Lieu",
    startLabel: "Prise de poste",
    missionsLabel: "Vos missions",
    requirementsLabel: "Profil recherché",
    benefitsLabel: "Ce que nous vous proposons",
    applyCta: "Postuler à cette offre",
  },
  profiles: {
    title: "Les profils que nous recherchons",
    intro:
      "Nous renforçons nos équipes de chantier et d'installation. Si vous maîtrisez votre métier et souhaitez évoluer dans une structure artisanale certifiée RGE QualiPAC, nous sommes faits pour nous rencontrer.",
    items: [
      {
        icon: "droplet" as const,
        title: "Plombier chauffagiste",
        desc: "Vous intervenez sur la plomberie sanitaire, le chauffage et les dépannages. Vous êtes autonome sur chantier, rigoureux et à l'aise avec le relationnel client.",
        details: [
          "Installation et rénovation sanitaire",
          "Chauffage, dépannage et mise en service",
          "Travail en équipe sur la métropole lilloise",
        ],
      },
      {
        icon: "heat-pump" as const,
        title: "Alternants avec expérience",
        desc: "Vous suivez une formation en chauffage, climatisation ou énergies renouvelables et avez déjà une première expérience terrain. Nous vous accompagnons sur des chantiers concrets.",
        details: [
          "Encadrement par des compagnons qualifiés",
          "Montée en compétences PAC, clim et plomberie",
          "Alternance structurée au sein d'une PME locale",
        ],
      },
      {
        icon: "ac-unit" as const,
        title: "Installateurs pompe à chaleur",
        desc: "Vous êtes qualifié pour poser des pompes à chaleur air-eau ou air-air, raccordements hydrauliques et mise en service. Une certification ou une solide pratique terrain est attendue.",
        details: [
          "Installation PAC chez les particuliers et professionnels",
          "Respect des normes et préconisations fabricants",
          "Certification RGE / QualiPAC appréciée",
        ],
      },
    ],
  },
  why: {
    title: "Pourquoi rejoindre HFE ?",
    items: [
      {
        title: "Entreprise en croissance",
        text: "Plus de 1 500 installations réalisées : un volume de chantiers qui permet de progresser rapidement.",
      },
      {
        title: "Certification RGE QualiPAC",
        text: "Travaillez sur des projets éligibles aux aides et avec des marques reconnues (Panasonic, Daikin, Atlantic…).",
      },
      {
        title: "Équipe locale et soudée",
        text: "Une PME lilloise où l'expérience terrain et la qualité de pose sont au cœur du métier.",
      },
      {
        title: "Métiers variés",
        text: "PAC, climatisation, chauffage, plomberie : des compétences complémentaires au sein d'une même équipe.",
      },
    ],
  },
  apply: {
    title: "Comment candidater ?",
    intro:
      "Envoyez-nous votre CV et une courte présentation de votre parcours (expérience, diplômes, certifications, disponibilité). Nous étudions chaque candidature et revenons vers vous rapidement.",
    formCta: "Remplir le formulaire de candidature",
    formHint: "Sélectionnez « Recrutement » comme type de projet et décrivez votre profil dans le message.",
    steps: [
      "Présentez votre profil et votre expérience",
      "Indiquez le poste visé ou votre projet d'alternance",
      "Précisez votre disponibilité",
    ],
  },
  cta: {
    title: "Une candidature à nous transmettre ?",
    subtitle: "Utilisez notre formulaire de contact — nous vous recontactons sous 72h.",
  },
} as const;

const en = {
  seo: {
    title: "Careers: plumber & heating engineer jobs in Lille – HFE",
    description:
      "Hecker & Frères Énergie (HFE) is hiring in Lille: heat pump installer (permanent, September 2026) and experienced plumbing, heating & AC apprentice. Join an RGE QualiPAC certified team.",
    keywords: [
      "heating engineer jobs Lille",
      "plumber heating engineer Lille",
      "air conditioning installer jobs Lille",
      "heating apprenticeship Lille",
      "heat pump installer Lille",
      "HFE Energie careers",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Careers", url: "/en/careers" },
  ],
  hero: {
    badge: "Careers",
    title: "Join Hecker & Frères Énergie",
    description:
      "HFE is looking for motivated professionals to support the growth of our heating, air conditioning and plumbing activities in Lille and the metropolitan area. Are you a plumber heating engineer, an apprentice with field experience or a qualified heat pump installer? Let's talk about your career plans.",
    ctaApply: "Send my application",
    ctaContact: "Contact us",
  },
  jobs: {
    title: "Current openings",
    intro:
      "Two positions are open within our installation teams. Review each listing below, then apply via our contact form and mention the role you are interested in.",
    contractLabel: "Contract",
    locationLabel: "Location",
    startLabel: "Start date",
    missionsLabel: "Your responsibilities",
    requirementsLabel: "Profile we are looking for",
    benefitsLabel: "What we offer",
    applyCta: "Apply for this role",
  },
  profiles: {
    title: "Profiles we are looking for",
    intro:
      "We are strengthening our installation and site teams. If you are skilled in your trade and want to grow within a certified RGE QualiPAC craft company, we should meet.",
    items: [
      {
        icon: "droplet" as const,
        title: "Plumber heating engineer",
        desc: "You work on sanitary plumbing, heating and repairs. You are independent on site, thorough and comfortable with customer relations.",
        details: [
          "Sanitary installation and renovation",
          "Heating, repairs and commissioning",
          "Team work across the Lille metropolitan area",
        ],
      },
      {
        icon: "heat-pump" as const,
        title: "Experienced apprentices",
        desc: "You are training in heating, air conditioning or renewable energy and already have initial field experience. We support you on real projects.",
        details: [
          "Supervision by qualified craftsmen",
          "Skills development in heat pumps, AC and plumbing",
          "Structured apprenticeship within a local SME",
        ],
      },
      {
        icon: "ac-unit" as const,
        title: "Heat pump installers",
        desc: "You are qualified to install air-to-water or air-to-air heat pumps, hydraulic connections and commissioning. Certification or solid field practice is expected.",
        details: [
          "Heat pump installation for homes and businesses",
          "Compliance with standards and manufacturer guidelines",
          "RGE / QualiPAC certification appreciated",
        ],
      },
    ],
  },
  why: {
    title: "Why join HFE?",
    items: [
      {
        title: "Growing company",
        text: "Over 1,500 installations completed: enough project volume to progress quickly.",
      },
      {
        title: "RGE QualiPAC certification",
        text: "Work on grant-eligible projects with recognised brands (Panasonic, Daikin, Atlantic…).",
      },
      {
        title: "Local, close-knit team",
        text: "A Lille-based SME where field experience and quality installation matter.",
      },
      {
        title: "Varied trades",
        text: "Heat pumps, air conditioning, heating, plumbing: complementary skills within one team.",
      },
    ],
  },
  apply: {
    title: "How to apply?",
    intro:
      "Send us your CV and a short overview of your background (experience, qualifications, certifications, availability). We review every application and get back to you promptly.",
    formCta: "Fill in the application form",
    formHint: "Select « Recruitment » as the project type and describe your profile in the message.",
    steps: [
      "Introduce yourself and your experience",
      "State the role you are targeting or your apprenticeship plan",
      "Specify your availability",
    ],
  },
  cta: {
    title: "Ready to apply?",
    subtitle: "Use our contact form — we will get back to you within 72 hours.",
  },
} as const;

export function getRecruitmentContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type RecruitmentContent = ReturnType<typeof getRecruitmentContent>;
