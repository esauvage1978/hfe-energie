import type { Locale } from "../config";

export interface RecruitmentJob {
  id: string;
  slug: string;
  title: string;
  contract: string;
  location: string;
  startDate: string;
  summary: string;
  intro: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  profile: readonly string[];
  employmentType: "FULL_TIME" | "INTERN";
  datePosted: string;
  validThrough: string;
  jobStartDate: string;
  experienceMonths?: number;
}

function toDescriptionHtml(job: RecruitmentJob): string {
  const section = (title: string, items: readonly string[]) =>
    `<p><strong>${title}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

  return [
    `<p>${job.intro}</p>`,
    section("Vos missions", job.responsibilities),
    section("Profil recherché", job.requirements),
    section("Ce que nous vous proposons", job.profile),
    `<p><strong>Prise de poste :</strong> ${job.startDate}. <strong>Lieu :</strong> ${job.location}. <strong>Contrat :</strong> ${job.contract}.</p>`,
    `<p>Pour postuler, utilisez le formulaire de contact sur hfe-energie.fr en sélectionnant « Recrutement » et en précisant l'intitulé du poste visé.</p>`,
  ].join("");
}

function toDescriptionHtmlEn(job: RecruitmentJob): string {
  const section = (title: string, items: readonly string[]) =>
    `<p><strong>${title}</strong></p><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

  return [
    `<p>${job.intro}</p>`,
    section("Your responsibilities", job.responsibilities),
    section("Profile we are looking for", job.requirements),
    section("What we offer", job.profile),
    `<p><strong>Start date:</strong> ${job.startDate}. <strong>Location:</strong> ${job.location}. <strong>Contract:</strong> ${job.contract}.</p>`,
    `<p>To apply, use the contact form at hfe-energie.fr, select « Recruitment » and mention the job title.</p>`,
  ].join("");
}

const jobsFr: readonly RecruitmentJob[] = [
  {
    id: "hfe-climaticien-confirme-2026",
    slug: "installateur-pompe-a-chaleur",
    title: "Installateur de pompe à chaleur",
    contract: "CDI",
    location: "Lille et métropole lilloise (rayon 50 km)",
    startDate: "Septembre 2026",
    summary:
      "Rejoignez nos équipes de pose pour installer des climatisations réversibles mono-split, multi-split, gainables et cassettes chez les particuliers et professionnels.",
    intro:
      "Hecker & Frères Énergie (HFE) renforce son équipe de chantier pour répondre à la croissance de son activité climatisation à Lille et dans la métropole. Nous recherchons un climaticien confirmé, autonome sur la pose et la mise en service, pour une prise de poste en septembre 2026.",
    responsibilities: [
      "Installation de systèmes de climatisation réversible (mono-split, multi-split, gainable, cassette)",
      "Raccordements frigorifiques, alimentations électriques et évacuations de condensats",
      "Mise en service, contrôles d'étanchéité et réglages des installations",
      "Respect des préconisations fabricants (Panasonic, Daikin, Mitsubishi) et des normes en vigueur",
      "Travail en binôme ou en équipe sur chantiers particuliers et petit tertiaire",
      "Relation client de qualité lors des interventions et des réceptions de travaux",
    ],
    requirements: [
      "Expérience confirmée en pose de climatisation réversible (minimum 2 ans sur le terrain)",
      "Maîtrise des liaisons frigorifiques, des supports et des finitions (goulottes, calorifuge)",
      "Autonomie sur chantier et rigueur dans l'application des procédures de mise en service",
      "Permis B indispensable pour les déplacements sur la métropole lilloise",
      "Titulaire des habilitations électriques adaptées (BR ou équivalent apprécié)",
    ],
    profile: [
      "Rejoindre une PME artisanale certifiée RGE QualiPAC en forte croissance",
      "Intervenir sur des marques reconnues avec un volume de chantiers élevé",
      "Évoluer au sein d'une équipe soudée où la qualité de pose est prioritaire",
      "CDI — rémunération selon profil et expérience",
    ],
    employmentType: "FULL_TIME",
    datePosted: "2026-06-25",
    validThrough: "2026-09-30T23:59:59+02:00",
    jobStartDate: "2026-09-01",
    experienceMonths: 24,
  },
  {
    id: "hfe-alternant-experimente-2026",
    slug: "alternant-experimente-plomberie-chauffage-clim",
    title: "Alternant avec expérience — plomberie, chauffage & climatisation",
    contract: "Contrat d'alternance",
    location: "Lille et métropole lilloise",
    startDate: "Rentrée 2026 (septembre)",
    summary:
      "Vous préparez un diplôme en plomberie, chauffage, climatisation ou énergies renouvelables et avez déjà une expérience terrain ? Intégrez HFE pour monter en compétences sur des chantiers concrets.",
    intro:
      "Dans le cadre du développement de nos activités, Hecker & Frères Énergie (HFE) accueille un alternant avec une première expérience significative en plomberie, chauffage ou climatisation. Vous serez encadré par des compagnons qualifiés et participerez à des installations réelles chez les particuliers et professionnels.",
    responsibilities: [
      "Participation aux installations de plomberie sanitaire, chauffage, climatisation et pompes à chaleur",
      "Appui aux équipes sur la pose, le calorifuge et les finitions de chantier",
      "Découverte de la mise en service et du relationnel client en fin de chantier",
      "Montée en compétences progressive sur les normes, la sécurité et les procédures HFE",
    ],
    requirements: [
      "Formation en cours en plomberie, chauffage, climatisation, froid ou énergies renouvelables (BTS, CAP, BP, licence pro…)",
      "Première expérience terrain exigée (stage, job étudiant ou emploi saisonnier en plomberie ou CVC)",
      "Motivation pour le travail sur chantier et l'apprentissage du métier en conditions réelles",
      "Permis B souhaité",
      "Sérieux, ponctualité et envie de progresser au sein d'une équipe artisanale",
    ],
    profile: [
      "Encadrement par des installateurs expérimentés certifiés RGE QualiPAC",
      "Exposition à des chantiers variés : plomberie, chauffage, climatisation et pompes à chaleur",
      "Alternance structurée au sein d'une PME lilloise de 15 ans d'expérience",
      "Possibilité d'embauche à l'issue de la formation selon profil et besoins",
    ],
    employmentType: "INTERN",
    datePosted: "2026-06-25",
    validThrough: "2026-08-31T23:59:59+02:00",
    jobStartDate: "2026-09-01",
    experienceMonths: 3,
  },
];

const jobsEn: readonly RecruitmentJob[] = [
  {
    id: "hfe-climaticien-confirme-2026",
    slug: "heat-pump-installer",
    title: "Heat pump installer",
    contract: "Permanent contract (CDI)",
    location: "Lille and metropolitan area (50 km radius)",
    startDate: "September 2026",
    summary:
      "Join our installation teams to fit reversible air conditioning systems — single-split, multi-split, ducted and cassette — for residential and small commercial customers.",
    intro:
      "Hecker & Frères Énergie (HFE) is expanding its site team to support growing air conditioning activity in Lille and the metropolitan area. We are looking for an experienced AC installer, independent in fitting and commissioning, for a start in September 2026.",
    responsibilities: [
      "Installation of reversible air conditioning systems (single-split, multi-split, ducted, cassette)",
      "Refrigerant lines, electrical supplies and condensate drainage",
      "Commissioning, leak checks and system adjustments",
      "Compliance with manufacturer guidelines (Panasonic, Daikin, Mitsubishi) and current standards",
      "Working in pairs or teams on residential and small commercial projects",
      "Professional customer relations during site work and handover",
    ],
    requirements: [
      "Proven experience in reversible air conditioning installation (minimum 2 years in the field)",
      "Solid skills in refrigerant lines, supports and finishing (trunking, insulation)",
      "Independent on site with rigorous commissioning procedures",
      "Driving licence required for travel across the Lille metropolitan area",
      "Relevant electrical qualifications (BR or equivalent appreciated)",
    ],
    profile: [
      "Join a growing RGE QualiPAC certified craft company",
      "Work with leading brands on a high volume of projects",
      "Grow within a close-knit team where installation quality comes first",
      "Permanent contract — salary based on profile and experience",
    ],
    employmentType: "FULL_TIME",
    datePosted: "2026-06-25",
    validThrough: "2026-09-30T23:59:59+02:00",
    jobStartDate: "2026-09-01",
    experienceMonths: 24,
  },
  {
    id: "hfe-alternant-experimente-2026",
    slug: "experienced-apprentice-plumbing-heating-ac",
    title: "Experienced apprentice — plumbing, heating & air conditioning",
    contract: "Work-study contract",
    location: "Lille and metropolitan area",
    startDate: "September 2026 intake",
    summary:
      "Training in plumbing, heating, air conditioning or renewable energy with prior field experience? Join HFE to build your skills on real projects.",
    intro:
      "As part of our growth, Hecker & Frères Énergie (HFE) is welcoming an apprentice with significant initial experience in plumbing, heating or air conditioning. You will be supervised by qualified craftsmen and take part in real installations for residential and commercial customers.",
    responsibilities: [
      "Support on sanitary plumbing, heating, air conditioning and heat pump installations",
      "Assist teams with fitting, insulation and site finishing",
      "Learn commissioning and customer handover processes",
      "Progressive skills development in standards, safety and HFE procedures",
    ],
    requirements: [
      "Currently training in plumbing, heating, air conditioning, refrigeration or renewable energy (vocational diploma, BTS, etc.)",
      "Prior field experience required (internship, student job or seasonal plumbing or HVAC work)",
      "Motivation for site work and learning the trade in real conditions",
      "Driving licence preferred",
      "Reliability, punctuality and willingness to grow within a craft team",
    ],
    profile: [
      "Supervision by experienced RGE QualiPAC certified installers",
      "Exposure to varied projects: plumbing, heating, air conditioning and heat pumps",
      "Structured apprenticeship within a 15-year-old Lille-based SME",
      "Potential permanent hire after training depending on profile and needs",
    ],
    employmentType: "INTERN",
    datePosted: "2026-06-25",
    validThrough: "2026-08-31T23:59:59+02:00",
    jobStartDate: "2026-09-01",
    experienceMonths: 3,
  },
];

export function getRecruitmentJobs(locale: Locale): readonly RecruitmentJob[] {
  return locale === "en" ? jobsEn : jobsFr;
}

export function getJobDescriptionHtml(job: RecruitmentJob, locale: Locale): string {
  return locale === "en" ? toDescriptionHtmlEn(job) : toDescriptionHtml(job);
}
