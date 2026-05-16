// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hfe-energie.fr',
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
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
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
