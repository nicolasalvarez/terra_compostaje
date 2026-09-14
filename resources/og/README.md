# resources/og/

Plantillas de las imágenes de vista previa para redes: lo que se ve cuando alguien
comparte un enlace del sitio en WhatsApp, LinkedIn, Facebook o Twitter.

| Plantilla | Genera | La usan |
|---|---|---|
| `card-es.html` | `public/og.jpg` | las páginas en español y el 404 |
| `card-en.html` | `public/og-en.jpg` | las páginas en inglés |

Las imágenes finales son **1200 × 630 px**, que es la medida que piden todas las redes.

## Por qué son plantillas HTML y no archivos de diseño

Así las piezas salen de una sola fuente: el logo, la foto, el sello de Empresa B y la
tipografía se toman del propio repositorio con rutas relativas. Si cambia el logo,
regenerar la imagen alcanza para que quede al día, sin abrir ninguna herramienta de
diseño ni volver a elegir colores.

## Cómo regenerarlas

Hace falta servirlas por HTTP: abrirlas con doble clic no carga la tipografía ni las
imágenes, porque el navegador bloquea los archivos locales.

1. Desde la raíz del repositorio: `npx serve . -l 4400`
2. Abrir `http://localhost:4400/resources/og/card-es.html` en Chrome.
3. Poner la ventana en **1200 × 630 con densidad 2x** (en las herramientas de
   desarrollo: modo dispositivo, tamaño personalizado 1200 × 630, DPR 2). El 2x es lo
   que hace que el texto salga nítido.
4. Capturar la pantalla. Queda un PNG de 2400 × 1260.
5. Reducir y convertir:
   `sips -s format jpeg -s formatOptions 78 -z 630 1200 captura.png --out public/og.jpg`
6. Ídem con `card-en.html` hacia `public/og-en.jpg`.

No hay que tocar nada más: `src/layouts/Base.astro` elige una u otra según el idioma
de la página y arma la URL absoluta sola.

## Detalles que conviene no romper

- **El sello de Empresa B va en blanco.** B Lab sólo admite blanco o negro, sin
  recolorear; sobre el azul de Terra el blanco da 11,99:1 de contraste. El archivo
  `../marca/empresa-b-certificada-blanco.svg` ya viene en blanco, no hay que invertirlo.
- **"Compostaje Regenerativo" queda en español en las dos.** Es la bajada del logotipo
  y una marca registrada: no se traduce, igual que en el sitio.
- **El titular es el mismo de la portada**, tomado de `src/i18n/`. Si cambia el titular
  del sitio conviene regenerar las imágenes para que no queden diciendo otra cosa.
- La foto es la misma del hero, `../fotos/proceso/manos-guantes-compost-02.jpg`.
