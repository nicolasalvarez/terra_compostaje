// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Modo preview: publica en la URL propia de GitHub Pages
// (nicolasalvarez.github.io/terra_compostaje/) en vez del dominio de produccion.
// Se activa con PREVIEW=1 y lo pone el workflow de despliegue.
//
// La diferencia no es solo el dominio: en GitHub el sitio vive en una SUBCARPETA,
// asi que toda ruta interna ('/marca/...', '/privacidad') necesita ese prefijo
// adelante o da 404. De eso se encarga `base`, que Astro expone como
// import.meta.env.BASE_URL y el codigo lee a traves de src/base.ts.
//
// Para volver a produccion: sacar PREVIEW del workflow. No hay nada que revertir.
const preview = process.env.PREVIEW === '1';

export default defineConfig({
  site: preview ? 'https://nicolasalvarez.github.io' : 'https://terracompostaje.com',
  base: preview ? '/terra_compostaje' : '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
