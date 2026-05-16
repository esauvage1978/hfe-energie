/**
 * Configuration centrale du site HFE Énergie.
 * Toutes les informations métier réutilisées dans plusieurs pages
 * sont centralisées ici pour faciliter la maintenance.
 */
export const site = {
  name: "HFE Énergie",
  legalName: "Hecker & Frères Énergie",
  baseUrl: "https://hfe-energie.fr",
  defaultLocale: "fr-FR",
  shortDescription:
    "Installateur RGE QualiPAC à Lille : pompes à chaleur, climatisation, chauffage et plomberie pour particuliers et professionnels.",
  longDescription:
    "Hecker & Frères Énergie (HFE) est une entreprise artisanale spécialisée dans les énergies renouvelables à Lille et son agglomération. Installation, maintenance et dépannage de pompes à chaleur air-eau, climatisation réversible, chaudières et plomberie. Certifiée RGE QualiPAC.",
  email: "contact@hfe-energie.fr",
  phone: "07 67 34 12 63",
  phoneRaw: "+33767341263",
  address: {
    street: "16 Rue Bartholomé Masurel",
    postalCode: "59800",
    city: "Lille",
    region: "Hauts-de-France",
    country: "France",
    countryCode: "FR",
  },
  geo: {
    latitude: 50.6378,
    longitude: 3.0573,
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
  socials: {
    facebook: "https://www.facebook.com/hfeenergie",
    instagram: "",
    google: "",
  },
} as const;

export const navigation: Array<{
  label: string;
  href: string;
  description?: string;
}> = [
  { label: "Accueil", href: "/" },
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
    label: "Particuliers",
    href: "/particuliers",
    description: "Solutions résidentielles clé en main",
  },
  {
    label: "Professionnels",
    href: "/professionnels",
    description: "Solutions tertiaires et industrielles",
  },
  {
    label: "Aides & Financements",
    href: "/aides-financement",
    description: "MaPrimeRénov', CEE, ANaH",
  },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "pompe-a-chaleur",
    title: "Pompes à chaleur",
    short: "PAC air-eau & air-air",
    description:
      "Installation et entretien de pompes à chaleur haute performance : jusqu'à 75 % d'économies sur la facture de chauffage.",
    icon: "heat-pump",
  },
  {
    slug: "climatisation",
    title: "Climatisation réversible",
    short: "Confort été comme hiver",
    description:
      "Climatisation réversible mono-split, multi-split, gainable et cassette pour un confort thermique toute l'année.",
    icon: "snowflake",
  },
  {
    slug: "chauffage",
    title: "Chauffage & chaudières",
    short: "Remplacement de chaudière",
    description:
      "Remplacement de chaudières, installation de planchers chauffants, radiateurs et chauffe-eau thermodynamiques.",
    icon: "flame",
  },
  {
    slug: "plomberie",
    title: "Plomberie & sanitaire",
    short: "Dépannage & adoucisseurs",
    description:
      "Dépannage plomberie, installation d'adoucisseurs d'eau, ballons électriques et solutions sanitaires complètes.",
    icon: "droplet",
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
    name: "Partenaire Panasonic",
    description:
      "Partenaire officiel des solutions Panasonic, gage de qualité et de fiabilité.",
  },
] as const;
