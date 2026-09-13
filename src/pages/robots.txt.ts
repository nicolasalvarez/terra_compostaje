import type { APIRoute } from 'astro';
import { esPreview } from '../base';

// El robots.txt se genera, no es un archivo fijo, para que dependa del mismo
// interruptor que el resto del modo preview.
//
// En el preview le pedimos a los buscadores que no lo indexen: es una copia del
// sitio con el mismo texto, y si Google la guarda termina compitiendo en los
// resultados con terracompostaje.com el dia que se publique de verdad.
//
// Al sacar PREVIEW del workflow esto vuelve solo a permitir la indexacion. No hay
// nada que acordarse de revertir.
export const GET: APIRoute = ({ site }) => {
  const cuerpo = esPreview
    ? ['User-agent: *', 'Disallow: /', '']
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site).href}`, ''];

  return new Response(cuerpo.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
