// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hfe-energie.fr',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
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
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-GB',
        },
      },
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        // Page d'accueil : priorité maximale
        if (path === '/' || path === '') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Page PAC : priorité forte (focus SEO)
        else if (path.startsWith('/pompe-a-chaleur')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Pages légales : priorité faible, mise à jour rare
        else if (
          path.startsWith('/mentions-legales') ||
          path.startsWith('/politique-') ||
          path.startsWith('/cgv') ||
          path.startsWith('/cgu')
        ) {
          item.priority = 0.2;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        // Dev local : Astro ne exécute pas PHP — proxy vers Webhooky
        '/__contact-proxy': {
          target: 'https://webhooky.builders',
          changeOrigin: true,
          rewrite: () => '/webhook/form/a03063bda3024ab41fc1-83ec-4dd9-9066-3d25f81d0c4e',
        },
      },
    },
  },
  build: {
    // Inline tout le CSS dans le <head> : supprime la requête CSS bloquante
    // (chaîne critique HTML -> /_astro/*.css) qui retardait le FCP/LCP.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
