import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jhonatanvillamizar.github.io',
  base: '/Esland-web',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales:['es', 'ca'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});