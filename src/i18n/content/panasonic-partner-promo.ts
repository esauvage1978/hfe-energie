import type { Locale } from "../config";

export type PanasonicPartnerPromoVariant = "residential" | "commercial" | "coOwnership";

const fr = {
  badge: "Pro-partenaire Panasonic",
  title: "Installateur Panasonic ProClub certifié",
  linkLabel: "Découvrir notre partenariat Panasonic",
  descriptions: {
    residential:
      "Hecker & Frères Énergie (HFE) est partenaire du programme Panasonic ProClub : formation constructeur, mise en service conforme et accès aux services connectés Aquarea Smart Cloud pour une pompe à chaleur ou une climatisation mieux garanties et suivies à distance.",
    commercial:
      "Pour vos locaux professionnels, HFE installe les solutions Panasonic Aquarea et climatisation réversible en tant que partenaire ProClub certifié : dimensionnement précis, garanties constructeur préservées et télémaintenance possible.",
    coOwnership:
      "Pour la rénovation énergétique de votre copropriété, HFE propose des pompes à chaleur Panasonic Aquarea installées par un partenaire ProClub agréé : mise en service conforme, garanties constructeur optimisées et accompagnement technique sur la durée.",
  },
} as const;

const en = {
  badge: "Panasonic pro-partner",
  title: "Certified Panasonic ProClub installer",
  linkLabel: "Discover our Panasonic partnership",
  descriptions: {
    residential:
      "Hecker & Frères Énergie (HFE) is a Panasonic ProClub programme partner: manufacturer training, compliant commissioning and access to Aquarea Smart Cloud connected services for better warranties and remote monitoring of your heat pump or air conditioning.",
    commercial:
      "For your business premises, HFE installs Panasonic Aquarea and reversible air conditioning solutions as a certified ProClub partner: accurate sizing, preserved manufacturer warranties and optional remote maintenance.",
    coOwnership:
      "For your co-ownership energy renovation, HFE offers Panasonic Aquarea heat pumps installed by an approved ProClub partner: compliant commissioning, optimised manufacturer warranties and long-term technical support.",
  },
} as const;

export function getPanasonicPartnerPromoContent(locale: Locale, variant: PanasonicPartnerPromoVariant) {
  const content = locale === "en" ? en : fr;
  return {
    badge: content.badge,
    title: content.title,
    description: content.descriptions[variant],
    linkLabel: content.linkLabel,
  };
}
