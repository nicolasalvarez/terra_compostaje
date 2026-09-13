/**
 * Prefijo bajo el que se sirve el sitio.
 *
 * En produccion el sitio vive en la raiz del dominio y esto es cadena vacia.
 * En el preview de GitHub Pages vive en una subcarpeta y esto vale
 * '/terra_compostaje': sin ese prefijo, toda ruta interna da 404.
 *
 * Astro publica el valor en import.meta.env.BASE_URL, pero segun la version y la
 * configuracion de trailingSlash puede venir con barra final o sin ella. La
 * sacamos una sola vez aca para que `conBase` sea siempre predecible.
 */
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefija una ruta interna, que tiene que empezar con '/'. */
export function conBase(ruta: string): string {
  return `${base}${ruta}`;
}
