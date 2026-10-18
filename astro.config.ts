import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { projectImageUrlsByPage } from "./src/data/project-sitemap-images.ts";
import { routes } from "./src/i18n/routes.ts";
import { getBlogTvaClimContent } from "./src/i18n/content/blog-tva-climatisation-reversible.ts";
import { getBlogReportageBfmPacContent } from "./src/i18n/content/blog-reportage-bfm-pac.ts";
import { getBlogReportageRecrutementContent } from "./src/i18n/content/blog-reportage-recrutement.ts";
import { getBlogReportageTf1PacContent } from "./src/i18n/content/blog-reportage-tf1-pac.ts";
import { getBlogReportageTf1ClimContent } from "./src/i18n/content/blog-reportage-tf1-clim.ts";

// lastmod réel des articles (dateModified déjà présente dans les contenus) ;
// les autres pages gardent la date du build.
const articleLastmod = new Map<string, string>();
for (const [routeId, getContent] of [
  ["blogTvaClimReversible", getBlogTvaClimContent],
  ["blogReportageBfmPac", getBlogReportageBfmPacContent],
  ["blogReportageRecrutement", getBlogReportageRecrutementContent],
  ["blogReportageTf1Pac", getBlogReportageTf1PacContent],
  ["blogReportageTf1Clim", getBlogReportageTf1ClimContent],
] as const) {
  for (const locale of ["fr", "en"] as const) {
    articleLastmod.set(routes[routeId][locale], getContent(locale).article.dateModified);
  }
}

// https://astro.build/config
export default defineConfig({
  site: "https://hfe-energie.fr",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Prefetch désactivé : évite le JS client (~2 Ko) et les requêtes anticipées
  // vers les pages légales qui alourdissaient la chaîne critique Lighthouse.
  prefetch: false,
  integrations: [
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr-FR",
          en: "en-GB",
        },
      },
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        // Page d'accueil : priorité maximale
        if (path === "/" || path === "") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        // Page PAC : priorité forte (focus SEO)
        else if (path.startsWith("/pompe-a-chaleur")) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        }
        // Pages légales : priorité faible, mise à jour rare
        else if (
          path.startsWith("/mentions-legales") ||
          path.startsWith("/politique-") ||
          path.startsWith("/cgv") ||
          path.startsWith("/cgu")
        ) {
          item.priority = 0.2;
          item.changefreq = "yearly";
        }

        const articleDate = articleLastmod.get(path);
        if (articleDate) item.lastmod = new Date(`${articleDate}T00:00:00Z`).toISOString();

        const imageUrls = projectImageUrlsByPage.get(item.url);
        if (imageUrls?.length) {
          item.img = imageUrls.map((imageUrl) => ({ url: imageUrl }));
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        // Dev local : Astro n'exécute pas PHP — proxy vers Webhooky
        "/__contact-proxy": {
          target: "https://webhooky.builders",
          changeOrigin: true,
          rewrite: () => "/webhook/form/a03063bda3024ab41fc1-83ec-4dd9-9066-3d25f81d0c4e",
        },
      },
    },
  },
  build: {
    // page.html au lieu de page/index.html : évite les redirections Apache DirectorySlash.
    format: "file",
    // CSS inliné : une seule requête HTML, pas de CSS bloquant en chaîne critique.
    inlineStylesheets: "always",
  },
  compressHTML: true,
});
