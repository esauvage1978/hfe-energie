/**
 * Centralisation des informations légales du site.
 *
 * Les champs marqués TODO doivent être complétés par le client avec ses
 * informations officielles (extrait Kbis / déclaration d'activité).
 */

export const legal = {
  /** Identité de l'éditeur du site */
  company: {
    name: "HFE Énergie",
    legalName: "Hecker & Frères Énergie",
    // TODO: à compléter selon la forme juridique (EURL, SARL, SAS, EI)
    legalForm: "SARL",
    // TODO: capital social (laissez vide pour les Entreprises Individuelles)
    capital: "10 000 €",
    address: "16 Rue Bartholomé Masurel, 59800 Lille, France",
    // TODO: SIRET officiel
    siret: "XXX XXX XXX 00012",
    // TODO: RCS officiel
    rcs: "Lille Métropole - XXX XXX XXX",
    // TODO: code APE - 4322B = Travaux d'installation d'équipements thermiques et de climatisation
    naf: "4322B - Travaux d'installation d'équipements thermiques et de climatisation",
    // TODO: numéro TVA intracommunautaire
    vat: "FR XX XXX XXX XXX",
    phone: "07 67 34 12 63",
    phoneRaw: "+33767341263",
    email: "contact@hfe-energie.fr",
    // TODO: nom du dirigeant / directeur de la publication
    publicationDirector: "Emmanuel Hecker",
    // Assurances professionnelles
    insurance: {
      // TODO: à compléter avec votre compagnie d'assurance
      company: "Compagnie d'assurance professionnelle",
      contract: "Numéro de contrat à compléter",
      coverage: "France métropolitaine",
    },
    // Certifications RGE
    certifications: [
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
    mentionsLegales: "16 mai 2026",
    confidentialite: "16 mai 2026",
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
