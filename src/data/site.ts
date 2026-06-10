/**
 * Configuration centrale du site Hecker & Frères Énergie (HFE).
 * Toutes les informations métier réutilisées dans plusieurs pages
 * sont centralisées ici pour faciliter la maintenance.
 */
export const site = {
  name: "Hecker & Frères Énergie (HFE)",
  legalName: "Hecker & Frères Énergie",
  baseUrl: "https://hfe-energie.fr",
  defaultLocale: "fr-FR",
  shortDescription:
    "Installateur RGE QualiPAC à Lille : pompes à chaleur, climatisation, chauffage et plomberie pour particuliers et professionnels.",
  longDescription:
    "Hecker & Frères Énergie (HFE) est une entreprise artisanale spécialisée dans les énergies renouvelables à Lille et son agglomération. Installation, maintenance et dépannage de pompes à chaleur air-eau, climatisation réversible, chaudières et plomberie. Certifiée RGE QualiPAC.",
  email: "contact@hfe-energie.fr",
  phone: "07 67 34 12 53",
  phoneRaw: "+33767341253",
  /** Ligne dédiée plomberie / dépannage sanitaire uniquement */
  plumbingPhone: "06 13 46 67 90",
  plumbingPhoneRaw: "+33613466790",
  address: {
    street: "44 Rue Jean sans peur",
    postalCode: "59800",
    city: "Lille",
    region: "Hauts-de-France",
    country: "France",
    countryCode: "FR",
  },
  geo: {
    latitude: 50.6335,
    longitude: 3.0598,
  },
  hours: [
    { day: "Lundi", value: "07:30 - 20:00" },
    { day: "Mardi", value: "07:30 - 20:00" },
    { day: "Mercredi", value: "07:30 - 20:00" },
    { day: "Jeudi", value: "07:30 - 20:00" },
    { day: "Vendredi", value: "07:30 - 20:00" },
    { day: "Samedi", value: "09:00 - 17:00" },
    { day: "Dimanche", value: "Fermé" },
  ],
  serviceArea: [
    "Lille",
    "La Madeleine",
    "Marcq-en-Barœul",
    "Villeneuve-d'Ascq",
    "Roubaix",
    "Tourcoing",
    "Wasquehal",
    "Mons-en-Barœul",
    "Lambersart",
    "Croix",
    "Lomme",
    "Hellemmes",
    "Marquette-lez-Lille",
    "Saint-André-lez-Lille",
    "Wambrechies",
  ],
  stats: {
    installations: 1500,
    clientsPerYear: 600,
    yearsExperience: 15,
  },
  /** Rayon d'intervention (km) autour du siège — voir /zone-intervention */
  serviceRadiusKm: 50,
  socials: {
    facebook: "https://www.facebook.com/hfeenergie",
    instagram: "https://instagram.com/hecker_freres_energie",
    linkedin: "https://www.linkedin.com/in/hecker-fr%C3%A8res-%C3%A9nergie-a95356254/",
    google:
      "https://www.google.com/maps?q=HFE+Pompe+%C3%A0+Chaleur+-+Climatisation,+71+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+59110+La+Madeleine&ftid=0x90e0797ea958d91:0x5f31aec968c997a5",
  },
} as const;

export type NavItem = {
  label: string;
  href?: string;
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Nos services",
    children: [
      {
        label: "Pompes à chaleur",
        href: "/pompe-a-chaleur",
        description: "Installation PAC air-eau & air-air RGE QualiPAC",
      },
      {
        label: "Climatisation",
        href: "/climatisation",
        description: "Climatisation réversible multi-split, gainable, cassette",
      },
      {
        label: "Chauffage",
        href: "/chauffage",
        description: "Chaudières, plancher chauffant, radiateurs",
      },
      {
        label: "Plomberie",
        href: "/plomberie",
        description: "Installation, rénovation, dépannage sanitaire",
      },
    ],
  },
  {
    label: "Particuliers",
    href: "/particuliers",
    description: "Solutions résidentielles clé en main",
  },
  {
    label: "Copropriété",
    href: "/copropriete",
    description: "Chauffage collectif et aides MaPrimeRénov' Copro",
  },
  {
    label: "Professionnels",
    href: "/professionnels",
    description: "Solutions tertiaires et industrielles",
  },
  {
    label: "Aides & Financements",
    href: "/aides-financement",
    description: "MaPrimeRénov', CEE, ANAH",
  },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "pompe-a-chaleur",
    title: "Pompes à chaleur",
    short: "Air / Eau & Air / Air",
    description:
      "Installation et entretien de pompes à chaleur haute performance : jusqu'à 75 % d'économies sur la facture de chauffage.",
    icon: "heat-pump",
    iconUrl: "/assets/icons-services/pac.png",
  },
  {
    slug: "climatisation",
    title: "Climatisation",
    short: "Réversible",
    description:
      "Climatisation réversible mono-split, multi-split, gainable et cassette pour un confort thermique toute l'année.",
    icon: "ac-unit",
    iconUrl: "/assets/icons-services/clim.png",
  },
  {
    slug: "chauffage",
    title: "Chauffage",
    short: "Toutes énergies",
    description:
      "Remplacement de chaudières, planchers chauffants, radiateurs et têtes thermostatiques connectées.",
    icon: "radiator",
    iconUrl: "/assets/icons-services/chauffage.png",
  },
  {
    slug: "plomberie",
    title: "Plomberie",
    short: "Installation & Rénovation",
    description:
      "Dépannage plomberie, installation d'adoucisseurs d'eau, ballons électriques et solutions sanitaires complètes.",
    icon: "faucet",
    iconUrl: "/assets/icons-services/plomberie.png",
  },
] as const;

export const certifications = [
  {
    name: "RGE QualiPAC Chauffage",
    description:
      "Reconnu Garant de l'Environnement pour l'installation de pompes à chaleur dédiées au chauffage.",
  },
  {
    name: "RGE QualiPAC Chauffe-eau thermodynamique",
    description:
      "Certification pour l'installation de chauffe-eau thermodynamiques éligibles aux aides de l'État.",
  },
  {
    name: "Assurance décennale & RC pro",
    description:
      "Garantie décennale et responsabilité civile professionnelle pour tous nos chantiers.",
  },
  {
    name: "Pro-partenaire Panasonic",
    description:
      "Partenaire ProClub Panasonic : garanties optimisées, boîtier cloud et télémaintenance Aquarea.",
    partnerPage: true,
  },
] as const;
