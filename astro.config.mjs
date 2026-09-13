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
  // Todo el CSS va dentro del HTML en vez de en archivos aparte.
  //
  // Son 19,6 KB en dos archivos (4,8 KB comprimidos) y los dos bloquean el
  // pintado: el navegador no muestra NADA hasta tenerlos. En 4G lenta eso medido
  // costaba ~1 s de primer pintado. Metidos en el HTML llegan con la misma
  // respuesta y no hay ida y vuelta que esperar.
  //
  // La contra es que el CSS deja de cachearse entre paginas: quien visite varias
  // se lo baja de nuevo cada vez. Con 4,8 KB comprimidos y un sitio de folleto,
  // donde la mayoria ve una sola pagina, conviene el primer pintado.
  build: { inlineStylesheets: 'always' },
});
