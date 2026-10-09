import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const imageFr: ProjectImage = {
  src: "/assets/climatisation/decoclim-cache.png",
  alt: "Cache clim Decoclim en aluminium thermolaqué anthracite à lames ajourées pour dissimuler une unité extérieure de climatisation",
  width: 1024,
  height: 1001,
};

const imageEn: ProjectImage = {
  src: "/assets/climatisation/decoclim-cache.png",
  alt: "Decoclim anthracite powder-coated aluminium louvered outdoor unit cover for air conditioning",
  width: 1024,
  height: 1001,
};

const fr = {
  badge: "Accessoire",
  title: "Cache clim Decoclim",
  paragraphs: [
    "Le cache clim Decoclim est une solution esthétique conçue pour dissimuler les groupes extérieurs de climatisation et de pompes à chaleur. Fabriqué en aluminium thermolaqué, il résiste aux intempéries, aux UV et à la corrosion tout en conservant un design moderne et épuré.",
    "Sa conception à lames ajourées permet une circulation optimale de l'air, garantissant le bon fonctionnement de l'installation sans altérer ses performances. Robuste et durable, il protège également l'unité extérieure des chocs légers et améliore l'intégration visuelle de l'équipement dans un jardin, sur une terrasse ou en façade.",
  ],
  highlights: [
    { value: "Aluminium", label: "Structure thermolaquée" },
    { value: "Aéré", label: "Lames ajourées" },
    { value: "Sur mesure", label: "Dimensions & coloris" },
  ],
  benefits: [
    "Structure en aluminium thermolaqué",
    "Résistant aux intempéries et aux UV",
    "Préserve les performances de la climatisation ou de la PAC",
    "Design élégant et discret",
    "Installation simple et durable",
    "Disponible en plusieurs dimensions et coloris",
  ],
  closing: "Une solution idéale pour allier esthétique, protection et performance.",
  cta: "Demander un devis",
  image: imageFr,
} as const;

const en = {
  badge: "Accessory",
  title: "Decoclim outdoor unit cover",
  paragraphs: [
    "The Decoclim outdoor unit cover is an aesthetic solution designed to conceal outdoor air conditioning units and heat pumps. Made from powder-coated aluminium, it withstands weather, UV rays and corrosion while keeping a clean, modern look.",
    "Its louvered design allows optimal airflow, ensuring the installation runs properly without affecting performance. Robust and durable, it also protects the outdoor unit from minor impacts and improves how the equipment blends into a garden, terrace or façade.",
  ],
  highlights: [
    { value: "Aluminium", label: "Powder-coated frame" },
    { value: "Ventilated", label: "Louvered slats" },
    { value: "Custom", label: "Sizes & colours" },
  ],
  benefits: [
    "Powder-coated aluminium structure",
    "Weather and UV resistant",
    "Preserves air conditioning or heat pump performance",
    "Elegant, discreet design",
    "Simple, long-lasting installation",
    "Available in several sizes and colours",
  ],
  closing: "The ideal solution to combine aesthetics, protection and performance.",
  cta: "Request a quote",
  image: imageEn,
} as const;

export type DecoclimCacheContent = typeof fr;

const content: Record<Locale, DecoclimCacheContent> = { fr, en };

export function getDecoclimCacheContent(locale: Locale): DecoclimCacheContent {
  return content[locale];
}
