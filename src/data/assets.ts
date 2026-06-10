/**
 * Catalogue des assets photos réutilisés sur le site.
 * Centralisé pour éviter les chemins en dur dans les pages.
 *
 * Toutes les images ont une version .webp et .avif générée par scripts/optimize-images.mjs
 * — utilisez le composant <Picture /> qui les sert automatiquement.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const logos = {
  full: {
    src: "/assets/logo/hfe-sansFond.png",
    alt: "Logo Hecker & Frères Énergie (HFE)",
    width: 352,
    height: 287,
  },
  icon: {
    src: "/assets/logo/hfe-sansFond-sans-ecriture.png",
    alt: "Logo Hecker & Frères Énergie (HFE)",
    width: 326,
    height: 256,
  },
  devisGratuit: {
    src: "/assets/logo/devis_gratuit.png",
    alt: "Devis gratuit",
    width: 360,
    height: 272,
  },
} as const;

export const heroes = {
  pac: {
    src: "/assets/back_main.png",
    alt: "Pompe à chaleur air-eau installée par Hecker & Frères Énergie (HFE) — unité extérieure avec logo HFE",
    width: 1024,
    height: 1024,
  },
  background: {
    src: "/assets/fondImage/imageFond.png",
    alt: "Maison équipée d'une pompe à chaleur",
    width: 1920,
    height: 1022,
  },
  team: {
    src: "/assets/equipe/equipe.jpg",
    alt: "Équipe Hecker & Frères Énergie (HFE) - chauffagistes et climaticiens à Lille",
    width: 1738,
    height: 2048,
  },
  truck: {
    src: "/assets/camion/camion.jpg",
    alt: "Camion Hecker & Frères Énergie (HFE) en intervention dans la métropole lilloise",
    width: 1535,
    height: 1189,
  },
  contactTruck: {
    src: "/assets/camion/maquetteCamion.png",
    alt: "Camion Hecker & Frères Énergie (HFE) — plomberie, salle de bain, dépannage, chauffage, pompe à chaleur et climatisation à Lille",
    width: 715,
    height: 349,
  },
} as const;

export const servicesImages = {
  pac: {
    src: "/assets/pompeAChaleur/pompeAChaleur.jpg",
    alt: "Installation d'une pompe à chaleur à Lille",
    width: 736,
    height: 482,
  },
  climatisation: {
    src: "/assets/climatisation/climatisation.jpg",
    alt: "Climatisation réversible installée par Hecker & Frères Énergie (HFE)",
    width: 1920,
    height: 1152,
  },
  chauffage: {
    src: "/assets/chauffage/chauffage1.jpg",
    alt: "Installation de chauffage moderne par Hecker & Frères Énergie (HFE)",
    width: 1855,
    height: 1437,
  },
  plomberie: {
    src: "/assets/plomberie/plomberie.jpg",
    alt: "Travaux de plomberie réalisés par Hecker & Frères Énergie (HFE)",
    width: 835,
    height: 593,
  },
  particuliers: {
    src: "/assets/solution/particulier1.jpg",
    alt: "Solutions énergétiques pour les particuliers à Lille",
    width: 1920,
    height: 1280,
  },
  professionnels: {
    src: "/assets/solution/professionel.PNG",
    alt: "Solutions énergétiques pour les professionnels et le tertiaire",
    width: 599,
    height: 436,
  },
} as const;

export const realisationsPAC: ImageAsset[] = [
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur1.JPG", alt: "Installation pompe à chaleur n°1 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur2.JPG", alt: "Installation pompe à chaleur n°2 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur3.JPG", alt: "Installation pompe à chaleur n°3 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur4.JPG", alt: "Installation pompe à chaleur n°4 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur5.JPG", alt: "Installation pompe à chaleur n°5 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur7.JPG", alt: "Installation pompe à chaleur n°7 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
  { src: "/assets/realisationPompeAChaleur/pompeAChaleur8.JPG", alt: "Installation pompe à chaleur n°8 - Hecker & Frères Énergie (HFE)", width: 1920, height: 1440 },
];

export const realisationsClim: ImageAsset[] = [
  { src: "/assets/realisationClimatisation/climatisation1.jpg", alt: "Climatisation réversible installée par Hecker & Frères Énergie (HFE) n°1", width: 1920, height: 1280 },
  { src: "/assets/realisationClimatisation/climatisation2.jpg", alt: "Climatisation réversible installée par Hecker & Frères Énergie (HFE) n°2", width: 1920, height: 1280 },
  { src: "/assets/realisationClimatisation/climatisation3.jpg", alt: "Climatisation réversible installée par Hecker & Frères Énergie (HFE) n°3", width: 1920, height: 1280 },
  { src: "/assets/realisationClimatisation/climatisation4.jpg", alt: "Climatisation réversible installée par Hecker & Frères Énergie (HFE) n°4", width: 1920, height: 1280 },
];

export const realisationsPlomberie: ImageAsset[] = [
  { src: "/assets/realisationPlomberie/plomberie1.JPG", alt: "Travaux de plomberie Hecker & Frères Énergie (HFE) n°1", width: 1920, height: 1440 },
  { src: "/assets/realisationPlomberie/plomberie2.JPG", alt: "Travaux de plomberie Hecker & Frères Énergie (HFE) n°2", width: 1920, height: 1440 },
  { src: "/assets/realisationPlomberie/plomberie3.JPG", alt: "Travaux de plomberie Hecker & Frères Énergie (HFE) n°3", width: 1920, height: 1440 },
  { src: "/assets/realisationPlomberie/plomberie8.JPG", alt: "Travaux de plomberie Hecker & Frères Énergie (HFE) n°4", width: 1920, height: 1440 },
];

export const partenaires = [
  { name: "Panasonic", logo: "/assets/partenaires/panasonic.png", width: 240, height: 80 },
  { name: "Daikin", logo: "/assets/partenaires/daikin.png", width: 240, height: 80 },
  { name: "Mitsubishi Electric", logo: "/assets/partenaires/mitsubishi.png", width: 524, height: 240 },
  { name: "Atlantic", logo: "/assets/partenaires/atlantic.png", width: 240, height: 80 },
  { name: "Toshiba", logo: "/assets/partenaires/Toshiba.png", width: 240, height: 80 },
  { name: "Samsung", logo: "/assets/partenaires/samsung.png", width: 240, height: 80 },
  { name: "Siemens", logo: "/assets/partenaires/siemens.png", width: 240, height: 80 },
  { name: "Saunier Duval", logo: "/assets/partenaires/saunierDuval.png", width: 240, height: 80 },
  { name: "Frisquet", logo: "/assets/partenaires/frisquet.png", width: 240, height: 80 },
  { name: "De Dietrich", logo: "/assets/partenaires/deDietrich.jpg", width: 240, height: 80 },
  { name: "Airwell", logo: "/assets/partenaires/airwell.jpg", width: 240, height: 80 },
  { name: "Cool Smart", logo: "/assets/partenaires/coolSmart.png", width: 240, height: 80 },
] as const;

export const clientsReferences = [
  { name: "Carrefour", logo: "/assets/clients/carrefour.png" },
  { name: "Ibis", logo: "/assets/clients/ibis.jpg" },
  { name: "SNCF", logo: "/assets/clients/SNCF.jpg" },
  { name: "Foncia", logo: "/assets/clients/foncia.png" },
  { name: "Big Mama", logo: "/assets/clients/bigMama.png" },
  { name: "Basilic & Co", logo: "/assets/clients/basilic&co.jpg" },
  { name: "Bibovino", logo: "/assets/clients/bibovino.png" },
  { name: "Côté Sushi", logo: "/assets/clients/coteSushi.png" },
  { name: "Aux Indes", logo: "/assets/clients/auxIndes.jpg" },
  { name: "Indian House", logo: "/assets/clients/indianHouse.png" },
  { name: "Saray Express", logo: "/assets/clients/sarayExpress.png" },
  { name: "Fresh Burritos", logo: "/assets/clients/freshBurritos.jpg" },
  { name: "Django Bar", logo: "/assets/clients/djangoBar.jpg" },
  { name: "Seasons Café", logo: "/assets/clients/seasonsCafe.jpg" },
  { name: "Second Street", logo: "/assets/clients/secondStreet.png" },
  { name: "Little & Tall", logo: "/assets/clients/little&Tall.png" },
  { name: "La Saint-Georges", logo: "/assets/clients/laSaintGeorges.png" },
  { name: "Team Break Lille", logo: "/assets/clients/teamBreakLille.jpg" },
  { name: "Delambre Bakery", logo: "/assets/clients/delambreBakery.png" },
  { name: "Épicerie Madame", logo: "/assets/clients/epicerieMadame.png" },
  { name: "Immo Sens", logo: "/assets/clients/immoSens.png" },
  { name: "IfTech", logo: "/assets/clients/ifTech.png" },
  { name: "Amory", logo: "/assets/clients/amory.png" },
  { name: "Mercadier", logo: "/assets/clients/mercadier.jpg" },
  { name: "Solidarités Internationales", logo: "/assets/clients/solidaritesInternationales.png" },
] as const;

export const certificationsLogos = [
  { name: "RGE QualiPAC", logo: "/assets/certifications/Logo-QualiPAC.jpg", width: 1200, height: 420 },
  { name: "Qualit'EnR", logo: "/assets/certifications/qualienr.jpg" },
  { name: "Artisan", logo: "/assets/certifications/artisan.jpg" },
  { name: "CAPEB", logo: "/assets/certifications/capeb.jpeg" },
  { name: "Manipulation Fluides", logo: "/assets/certifications/fluides1.jpg" },
] as const;
