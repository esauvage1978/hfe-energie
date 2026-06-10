/**
 * Centralisation des informations légales du site.
 * Données issues du registre du commerce (SIRENE / extrait Kbis).
 */

export const legal = {
  /** Identité de l'éditeur du site */
  company: {
    name: "Hecker & Frères Énergie (HFE)",
    legalName: "HECKER & FRERES ENERGIE",
    legalForm: "Société à responsabilité limitée (SARL)",
    capital: "",
    address: "44 Rue Jean sans peur, 59800 Lille, France",
    siren: "902 806 785",
    siret: "902 806 785 00025",
    rcs: "RCS Lille Métropole 902 806 785",
    naf: "43.22A — Travaux d'installation d'eau et de gaz en tous locaux",
    naf2025: "43.22G — Travaux d'installation d'eau et de gaz en tous locaux",
    vat: "FR44 902 806 785",
    eori: "",
    createdAt: "23/08/2021",
    workforce: "1 ou 2 salariés (2023)",
    companyCategory: "Petite ou Moyenne Entreprise (PME), en 2023",
    collectiveAgreement: "IDCC 1596",
    phone: "07 67 34 12 53",
    phoneRaw: "+33767341253",
    email: "contact@hfe-energie.fr",
    publicationDirector: "Kévin Hecker",
    insurance: {
      company: "Compagnie d'assurance professionnelle",
      contract: "Numéro de contrat à compléter",
      coverage: "France métropolitaine",
    },
    certifications: [
      "RGE — Reconnu Garant de l'Environnement",
      "RGE QualiPAC Module Chauffage",
      "RGE QualiPAC Module Chauffe-eau thermodynamique",
    ],
  },

  /** Hébergement technique du site */
  host: {
    name: "OVHcloud",
    company: "OVH SAS",
    legalForm: "SAS au capital de 50 000 000 €",
    address: "2 rue Kellermann, 59100 Roubaix, France",
    rcs: "RCS Lille Métropole 424 761 419",
    phone: "1007 (depuis la France) - +33 9 72 10 10 07 (depuis l'étranger)",
    website: "https://www.ovhcloud.com",
  },

  /** Médiateur de la consommation - obligatoire pour B2C en France */
  mediator: {
    // CM2C = Centre de la Médiation de la Consommation de Conciliateurs de Justice
    // Médiateur fréquemment utilisé par les artisans
    name: "CM2C - Centre de la Médiation de la Consommation de Conciliateurs de Justice",
    address: "14 rue Saint Jean, 75017 Paris",
    website: "https://www.cm2c.net",
    email: "cm2c@cm2c.net",
  },

  /** Autorité de contrôle */
  cnil: {
    name: "Commission Nationale de l'Informatique et des Libertés (CNIL)",
    address: "3 place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07",
    phone: "01 53 73 22 22",
    website: "https://www.cnil.fr",
  },

  /** Conception, développement et réalisation du site */
  developer: {
    name: "Emmanuel SAUVAGE",
    url: "https://emmanuel.sauvage.fr",
    role: "Conception, développement & réalisation",
  },

  /** Dates de dernière mise à jour des documents légaux */
  updatedAt: {
    mentionsLegales: "3 juin 2026",
    confidentialite: "3 juin 2026",
    cookies: "16 mai 2026",
    cgv: "16 mai 2026",
    cgu: "16 mai 2026",
  },
} as const;

/** Liens à afficher dans le footer */
export const legalLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Politique des cookies", href: "/politique-des-cookies" },
  { label: "CGV", href: "/cgv" },
  { label: "CGU", href: "/cgu" },
];
