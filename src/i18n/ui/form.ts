import type { Locale } from "../config";

const fr = {
  clientTypes: [
    { value: "particulier", label: "Particulier" },
    { value: "professionnel", label: "Professionnel" },
  ] as const,
  clientTypeLabels: {
    particulier: "Particulier",
    professionnel: "Professionnel",
  } as const,
  services: [
    { value: "pompe-a-chaleur", label: "Pompe à chaleur" },
    { value: "climatisation", label: "Climatisation réversible" },
    { value: "chauffage", label: "Chauffage / chaudière" },
    { value: "chauffe-eau", label: "Chauffe-eau thermodynamique" },
    { value: "plomberie", label: "Plomberie / sanitaire" },
    { value: "depannage", label: "Dépannage urgent" },
    { value: "autre", label: "Autre projet" },
  ] as const,
  serviceLabels: {
    "pompe-a-chaleur": "Pompe à chaleur",
    climatisation: "Climatisation réversible",
    chauffage: "Chauffage / chaudière",
    "chauffe-eau": "Chauffe-eau thermodynamique",
    plomberie: "Plomberie / sanitaire",
    depannage: "Dépannage urgent",
    autre: "Autre projet",
  } as const,
  help:
    "Les champs marqués d'un * sont obligatoires. Réponse personnalisée sous 72h ouvrées.",
  requiredMark: "*",
  youAre: "Vous êtes",
  name: "Nom & prénom",
  email: "E-mail",
  phone: "Téléphone",
  postal: "Code postal",
  projectType: "Type de projet",
  project: "Votre projet",
  chooseService: "Choisissez un service",
  phonePlaceholder: "07 67 34 12 53",
  postalPlaceholder: "59000",
  messagePlaceholder: "Décrivez votre logement, l'équipement actuel, vos besoins...",
  honeypotLabel: "Site web",
  privacyBefore: "J'accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande.",
  privacyLink: "En savoir plus",
  submit: "Envoyer ma demande",
  submitting: "Envoi en cours...",
  successTitle: "Demande bien reçue.",
  successText:
    "Merci pour votre message, notre équipe vous recontacte sous 72 heures ouvrées avec une première estimation et une proposition de rendez-vous.",
  error:
    "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.",
  errors: {
    client_type: "Indiquez si vous êtes particulier ou professionnel",
    name: "Merci d'indiquer votre nom (2 caractères min.)",
    email: "Adresse e-mail invalide",
    phone: "Numéro de téléphone invalide",
    service: "Choisissez le type de projet",
    message: "Décrivez brièvement votre projet (10 caractères min.)",
    rgpd: "Merci d'accepter la politique de confidentialité",
  },
} as const;

const en = {
  clientTypes: [
    { value: "particulier", label: "Homeowner" },
    { value: "professionnel", label: "Business" },
  ] as const,
  clientTypeLabels: {
    particulier: "Homeowner",
    professionnel: "Business",
  } as const,
  services: [
    { value: "pompe-a-chaleur", label: "Heat pump" },
    { value: "climatisation", label: "Reversible air conditioning" },
    { value: "chauffage", label: "Heating / boiler" },
    { value: "chauffe-eau", label: "Thermodynamic water heater" },
    { value: "plomberie", label: "Plumbing / bathroom" },
    { value: "depannage", label: "Emergency repair" },
    { value: "autre", label: "Other project" },
  ] as const,
  serviceLabels: {
    "pompe-a-chaleur": "Heat pump",
    climatisation: "Reversible air conditioning",
    chauffage: "Heating / boiler",
    "chauffe-eau": "Thermodynamic water heater",
    plomberie: "Plumbing / bathroom",
    depannage: "Emergency repair",
    autre: "Other project",
  } as const,
  help: "Fields marked with * are required. We aim to reply within 72 hours (business days).",
  requiredMark: "*",
  youAre: "You are",
  name: "Full name",
  email: "Email",
  phone: "Phone",
  postal: "Postcode",
  projectType: "Project type",
  project: "Your project",
  chooseService: "Select a service",
  phonePlaceholder: "07 67 34 12 53",
  postalPlaceholder: "59000",
  messagePlaceholder: "Describe your property, current equipment and requirements...",
  honeypotLabel: "Website",
  privacyBefore:
    "I agree that my information may be used to contact me regarding my request.",
  privacyLink: "Learn more",
  submit: "Send my request",
  submitting: "Sending...",
  successTitle: "Request received.",
  successText:
    "Thank you for your message. Our team will get back to you within 72 hours (business days) with an initial estimate and a meeting proposal.",
  error: "Something went wrong. Please try again or call us directly.",
  errors: {
    client_type: "Please indicate whether you are a homeowner or a business",
    name: "Please enter your name (at least 2 characters)",
    email: "Invalid email address",
    phone: "Invalid phone number",
    service: "Please select a project type",
    message: "Please briefly describe your project (at least 10 characters)",
    rgpd: "Please accept the privacy policy",
  },
} as const;

export function getFormStrings(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type FormStrings = ReturnType<typeof getFormStrings>;
