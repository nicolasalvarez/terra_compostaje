import { conBase } from '../base';
import es from './es';
import en from './en';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

const diccionarios = { es, en };

export function useTranslations(locale: Locale) {
  return diccionarios[locale];
}

/** Ruta equivalente en el otro idioma. */
export const rutas = {
  home: { es: conBase('/'), en: conBase('/en') },
  privacidad: { es: conBase('/privacidad'), en: conBase('/en/privacy') },
  terminos: { es: conBase('/terminos'), en: conBase('/en/terms') },
};

export type Pagina = keyof typeof rutas;

export function otroIdioma(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/** Prefija una ruta interna con el idioma actual. */
export function ruta(locale: Locale, pagina: Pagina): string {
  return rutas[pagina][locale];
}

/** Formatea una fecha ISO para mostrarla en el idioma actual. */
export function formatearFecha(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-AR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso + 'T00:00:00Z'));
}
