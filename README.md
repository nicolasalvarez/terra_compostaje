# Terra Compostaje

Sitio web de [Terra Compostaje](https://terracompostaje.com), empresa de triple impacto
que trata residuos orgánicos y produce sustratos regenerativos en Córdoba, Argentina.

Bilingüe (español e inglés), sin base de datos y prácticamente sin JavaScript en el
navegador.

---

## Actualizar los precios

**Esto no requiere saber programar.** Los precios viven en un solo archivo:

```
src/data/precios.yaml
```

Se puede editar desde la web de GitHub: entrás al archivo, tocás el lápiz, cambiás los
números, y abajo de todo tocás "Commit changes". En dos o tres minutos el sitio queda
actualizado solo.

Tres cosas para tener en cuenta:

1. Los precios se escriben **sin puntos ni signo peso**: `85000`, no `$85.000`. El sitio
   les da formato solo.
2. Cambiá también `vigencia` (el mes de los precios) y `actualizado` (la fecha de hoy).
   La vigencia aparece publicada abajo de la tabla de precios y en los términos.
3. Para **agregar un producto o un formato nuevo** hace falta además cargar su nombre en
   los dos idiomas, en `src/i18n/es.ts` y `src/i18n/en.ts`. Eso sí requiere una mano
   técnica.

## Cambiar textos

| Qué | Dónde |
|---|---|
| Todos los textos de la home, en español | `src/i18n/es.ts` |
| Lo mismo en inglés | `src/i18n/en.ts` |
| Dirección, teléfono, mail, WhatsApp, cifras de impacto | `src/data/empresa.ts` |
| Política de privacidad | `src/pages/privacidad.astro` y `src/pages/en/privacy.astro` |
| Términos y condiciones | `src/pages/terminos.astro` y `src/pages/en/terms.astro` |

Los dos idiomas tienen la misma estructura: si agregás una clave en `es.ts`, TypeScript
va a avisar que falta en `en.ts`.

## Cómo trabajar localmente

Hace falta [Node.js](https://nodejs.org) 22 o superior.

```bash
npm install      # una sola vez
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ para revisar el resultado final
```

## Estructura

```
src/
├── components/     cada sección de la home
├── data/
│   ├── precios.yaml    ← los precios
│   ├── precios.ts      lee el YAML y les da formato
│   └── empresa.ts      contacto, cifras, listas de clientes y aliados
├── i18n/           textos en español e inglés
├── layouts/        Base (head, SEO, header y pie) y Legal
├── pages/          una carpeta por idioma
└── styles/         global.css: colores, tipografías y utilidades

public/
├── fuentes/        Outfit y Montserrat autoalojadas
├── marca/          logotipos y sellos en SVG
└── CNAME           el dominio propio

resources/          material de marca curado (ver resources/README.md)
```

El `robots.txt` no está en `public/`: lo genera `src/pages/robots.txt.ts`, para que
dependa del modo preview.

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que construye el sitio y lo
publica en GitHub Pages. No hay que hacer nada más.

Para que funcione la primera vez: **Settings → Pages → Source: GitHub Actions**.

### Modo preview (activo)

Mientras el sitio espera aprobación se publica en la URL propia de GitHub,
**https://nicolasalvarez.github.io/terra_compostaje/**, sin tocar el dominio de
producción. Lo activa `PREVIEW=1` en el workflow.

Ahí el sitio no vive en la raíz del dominio sino en una subcarpeta, así que toda ruta
interna necesita el prefijo `/terra_compostaje` adelante o da 404. De eso se encarga
`base` en `astro.config.mjs`, que el código lee a través de `src/base.ts`:

```astro
import { conBase } from '../base';
<img src={conBase('/marca/logo-terra-color.svg')} />
```

**Toda ruta interna nueva tiene que pasar por `conBase()`.** Las rutas de `src/i18n`
(`rutas`) y las `url()` de `global.css` ya salen prefijadas solas; las de Astro también
(`_astro/…`). Lo que hay que recordar es cualquier `/algo` escrito a mano en un `href`
o un `src`.

**Para pasar a producción** hay que borrar dos cosas del workflow: el bloque `env` con
`PREVIEW` y el paso *"Quitar el dominio propio"*. El código no se toca: sin `PREVIEW`,
`base` vuelve a ser la raíz y `conBase()` no agrega nada.

El dominio propio sale de `public/CNAME`. Como el DNS pasa por Cloudflare, al configurar
el dominio en GitHub hay que dejar el registro **sin proxear** (nube gris) hasta que
GitHub emita el certificado, y recién después volver a activar el proxy con SSL/TLS en
modo **Full**.

## Decisiones que conviene conocer

**Casi sin JavaScript.** El sitio se genera entero como HTML en el momento de
construirlo. El navegador ejecuta un solo archivo, `public/js/menu.js` (1,3 KB, con
`defer`), y nada más: no hay frameworks ni scripts de terceros. Por eso abre instantáneo.

Ese archivo solo agrega comodidades al menú de teléfono —cerrarlo al elegir una sección,
al tocar afuera y con Escape—. El menú en sí es un `<details>` nativo, así que **abre y
cierra igual si el script no carga**. Tiene que ser un archivo aparte y no un `<script>`
en línea porque la CSP del sitio declara `script-src 'self'` sin `'unsafe-inline'`: un
script en línea lo bloquea el navegador. Ojo con esto si se agrega más código: Astro
mete los `<script>` chicos dentro del HTML, y ahí la CSP los mata en silencio.

**Menú de teléfono.** Hasta 900 px el menú horizontal se reemplaza por una hamburguesa
que abre un panel lateral. Se probó antes dejando los cuatro ítems a la vista en una fila
propia: funcionaba, pero el header pasaba de 68 a 108 px y, como es *sticky*, se comía el
13 % de la pantalla en todo momento. Por debajo de 620 px el botón "Pedir cotización" sale
del header y pasa a ser el último elemento del panel; entre 620 y 900 px entra en los dos
lados y se deja a la vista.

**Tipografía.** El manual de marca define Galano, que es comercial. Publicar sus archivos
en un repositorio abierto sería redistribuirla, así que el sitio usa **Outfit**, una
geométrica libre muy parecida, autoalojada. Los logotipos no dependen de esto: son
vectores con las letras convertidas a curvas.

**Dos naranjas.** El naranja de marca `#FF6820` sobre texto blanco da un contraste de
2.9:1, muy por debajo del mínimo accesible de 4.5:1. Por eso hay dos variantes derivadas,
con el mismo matiz, que se usan **solo** donde hay texto encima o al lado:

| Variable | Valor | Para qué |
|---|---|---|
| `--naranja` | `#FF6820` | El de marca. Formas, bordes, decoración. Sin texto encima. |
| `--naranja-boton` | `#D14400` | Fondo de botones con texto blanco. |
| `--naranja-texto` | `#C74000` | Naranja como color de texto sobre fondos claros. |

Por el mismo motivo, el panel "Para quien trabaja la tierra" es una tarjeta blanca con
marco naranja y no un bloque naranja pleno: es una de las combinaciones que habilita el
manual, y así el texto se lee.

**Cifras de impacto.** Las de `src/data/empresa.ts` son del 29/8/2024 y el sitio muestra
esa fecha a propósito, para no publicar un dato viejo como si fuera actual. Al
actualizarlas, cambiar también el campo `fecha`.

## Sello de Empresa B

El sitio muestra el logo oficial de **Empresa B Certificada** como quinta tarjeta de la
tira de credenciales (sobre lima, dentro de la banda azul) y en el pie (sobre papel). En
los dos casos con la versión negra del logo. Las dos enlazan a la ficha de Terra en el directorio de B Lab. Reemplaza al del sitio viejo,
que decía "PENDIENTE" y era de cuando la certificación estaba en trámite.

Terra está certificada **desde abril de 2025** con **119,5 puntos**. Esos datos viven en
`src/data/empresa.ts` (`empresaB`) y hay que actualizarlos cuando recertifiquen, cada
tres años. El logo es marca registrada de B Lab y tiene reglas de uso estrictas: están
documentadas en `resources/README.md`.

## Pendientes antes de publicar

- [ ] **Salir del modo preview**: borrar del workflow el bloque `env` con `PREVIEW` y el
      paso *"Quitar el dominio propio"*. Es lo único que hay que recordar a mano: el
      prefijo de las rutas, el `robots.txt` y el `CNAME` se acomodan solos.

- [ ] Apuntar el DNS a GitHub Pages (hoy `terracompostaje.com` resuelve al hosting
      anterior) y configurar el dominio en **Settings → Pages**.

- [ ] Confirmar el LinkedIn. El sitio viejo enlaza a un perfil con formato personal
      (`/in/terra-compostaje-32104b248/`) que a un visitante sin cuenta le muestra un muro
      de registro. El sitio nuevo usa la página de empresa (`/company/terra-compostaje/`),
      que es pública y está completa. Conviene ver si el perfil viejo se da de baja.

- [ ] Revisión legal de la política de privacidad y los términos. Están redactados contra
      la Ley 25.326, pero no los escribió un abogado.
- [ ] Banner de cookies con Google Consent Mode v2, antes de instalar el píxel de Meta o
      las etiquetas de Google Ads.
- [ ] Cifras de impacto actualizadas.
- [ ] Cabeceras de seguridad por Transform Rules de Cloudflare: `Content-Security-Policy`,
      `Strict-Transport-Security`, `X-Frame-Options`, `Referrer-Policy`,
      `Permissions-Policy`. El sitio ya lleva una CSP por etiqueta `<meta>`, pero
      `frame-ancestors` solo funciona como cabecera real.
- [ ] Confirmar la lista de clientes vigente y conseguir los logos que faltan.

## Licencia

Todos los derechos reservados. Las marcas Terra, Compostaje Regenerativo® y Sustratos
regenerativos® pertenecen a Sello Circular S.A.S.
