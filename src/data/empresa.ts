/** Datos de Terra que no cambian con el idioma. Fuente única de verdad. */
export const empresa = {
  nombre: 'Terra Compostaje',
  razonSocial: 'Sello Circular S.A.S.',
  dominio: 'terracompostaje.com',
  email: 'hola@terracompostaje.com',
  telefonoVisible: '351 511 3072',
  telefonoInternacional: '+54-9-351-511-3072',
  whatsapp: '5493515113072',
  direccion: 'Dr. Ricardo Balbín 8950',
  ciudad: 'Córdoba',
  provincia: 'Córdoba',
  pais: 'Argentina',
  paisIso: 'AR',
  registroOperador: '000012108/24',
  anioFundacion: 2023,
  capacidadDiaria: 190,
  hectareas: 9,
  instagram: 'https://www.instagram.com/terra.compostaje/',
  linkedin: 'https://www.linkedin.com/company/terra-compostaje/',
} as const;

/**
 * Certificación como Empresa B (B Corp).
 * Datos tomados de la ficha pública de B Lab, que es la fuente oficial:
 * https://www.bcorporation.net/en-us/find-a-b-corp/company/sello-circular/
 *
 * El logo de "Empresa B Certificada" es una marca registrada de B Lab. Sólo
 * las empresas certificadas pueden usarlo y hay que usar el archivo oficial,
 * sin recolorearlo ni deformarlo. El que está en public/marca/ se descargó del
 * portal de marca de B Lab (brand.bcorp.com). Ante cualquier duda de uso:
 * brand@bcorporation.net
 *
 * OJO: la certificación se renueva cada tres años. Cuando se recertifiquen hay
 * que actualizar `desde` y `puntaje` con lo que diga la ficha.
 */
export const empresaB = {
  certificada: true,
  desde: '2025-04', // abril de 2025
  puntaje: 119.5,
  puntajeMinimo: 80, // el piso para certificar
  medianaEmpresasComunes: 50.9,
  versionEstandar: '1.6',
  perfil: 'https://www.bcorporation.net/en-us/find-a-b-corp/company/sello-circular/',
} as const;

export const waLink = (texto: string) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`;

/**
 * Cifras de impacto.
 * OJO: son del 29/8/2024 y están pendientes de actualizar. La fecha se
 * muestra en el sitio a propósito, para no publicar un dato viejo como
 * si fuera de hoy. Al actualizarlas, cambiar también `fecha`.
 */
export const impacto = {
  fecha: '2024-08-29',
  toneladasTratadas: 653,
  co2Evitado: 402,
  arbolesPlantados: 219,
  compostProducido: 100,
  clientes: 16,
} as const;

/** Clientes con logo disponible en resources/marca/clientes/. */
export const clientes = [
  'arteche',
  'autocity',
  'coca-cola-andina',
  'ecolink',
  'fiat',
  'grupo-libertad',
  'mercoop',
  'quilmes',
  'renault',
  'roga-chef',
  'urbacor',
  'vida-cowork',
] as const;

/** Nombres para el alt de cada logo. */
export const nombresClientes: Record<string, string> = {
  arteche: 'Arteche',
  autocity: 'Autocity',
  'coca-cola-andina': 'Coca-Cola Andina',
  ecolink: 'Ecolink',
  fiat: 'FCA · Fiat Chrysler Automobiles',
  'grupo-libertad': 'Grupo Libertad',
  mercoop: 'Mercoop',
  quilmes: 'Quilmes',
  renault: 'Renault',
  'roga-chef': 'Roga Chef',
  urbacor: 'UrbaCor',
  'vida-cowork': 'Vida Cowork',
};

export const alianzas = ['ecolink', 'fca-unc', 'forestando', 'punto-lombriz'] as const;

export const nombresAlianzas: Record<string, string> = {
  ecolink: 'Ecolink',
  'fca-unc': 'Facultad de Ciencias Agropecuarias · UNC',
  forestando: 'Forestando',
  'punto-lombriz': 'Punto Lombriz',
};
