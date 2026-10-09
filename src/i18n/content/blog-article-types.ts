import type { BlogMediaId } from "../../data/blog-media";
import type { RouteId } from "../routes";

export type BlogArticleContent = {
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
  breadcrumbs: readonly { name: string; url: string }[];
  article: {
    headline: string;
    datePublished: string;
    dateModified: string;
    dateLabel: string;
    excerpt: string;
  };
  hero: {
    badge: string;
    lead: string;
    /** Chaîne / média du reportage (affiche le logo) */
    mediaId?: BlogMediaId;
  };
  video?: {
    /** Fichier local (ex. /assets/blog/video.mp4) — prioritaire pour lecture fiable */
    src?: string;
    /** ID YouTube */
    youtubeId?: string;
    /** ID d’activité LinkedIn, ex. 7467102717782478848 */
    linkedinActivityId?: string;
    title: string;
    poster?: string;
  };
  intro: readonly string[];
  sections: readonly { id: string; title: string; html: string }[];
  faq: {
    title: string;
    items: readonly { question: string; answer: string }[];
  };
  sources: {
    title: string;
    consulted: string;
    items: readonly { label: string; url: string }[];
  };
  related: {
    title: string;
    links: readonly { label: string; routeId: RouteId }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryRouteId?: RouteId;
    primaryLabel?: string;
  };
};
