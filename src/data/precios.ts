import { load } from 'js-yaml';
// ?raw incrusta el contenido del YAML en el bundle durante el build.
// Sin esto, el archivo queda fuera de dist/ y la página falla al generarse.
import yamlCrudo from './precios.yaml?raw';

export type Formato = 'granel' | 'bigbag' | 'bolsa30' | 'bolsa15' | 'bolsa40';

export interface Fila {
  formato: Formato;
  precio: number;
}

export interface Producto {
  id: 'compost' | 'paisajismo' | 'cultivo';
  formatos: Fila[];
}

export interface Otro {
  id: string;
  precio: number;
}

export interface Precios {
  vigencia: string;
  actualizado: string;
  productos: Producto[];
  otros: Otro[];
}

export const precios = load(yamlCrudo) as Precios;

/** 85000 -> "$85.000" */
export function formatearPrecio(valor: number): string {
  return '$' + new Intl.NumberFormat('es-AR').format(valor);
}

/** "2026-07" -> "julio de 2026" / "July 2026" */
export function formatearVigencia(vigencia: string, locale: 'es' | 'en'): string {
  const [anio, mes] = vigencia.split('-').map(Number);
  const fecha = new Date(Date.UTC(anio!, (mes ?? 1) - 1, 1));
  const nombreMes = new Intl.DateTimeFormat(locale === 'es' ? 'es-AR' : 'en-GB', {
    month: 'long',
    timeZone: 'UTC',
  }).format(fecha);
  return locale === 'es' ? `${nombreMes} de ${anio}` : `${nombreMes} ${anio}`;
}
