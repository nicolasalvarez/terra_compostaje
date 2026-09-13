# resources/

Material de marca curado y optimizado para el sitio web.

El material **fuente** (2 GB: originales de 30-40 MB, videos, presentaciones, documentos)
vive en `resources_for_webpage_design/`, que está en `.gitignore` y no se sube al
repositorio. Todo lo que está acá salió de ahí, ya recortado y comprimido.

## marca/

Logotipos en SVG, extraídos como **vectores** del Manual de Identidad. Las letras
están convertidas a curvas, así que no dependen de tener instalada la tipografía.

| Archivo | Uso |
|---|---|
| `logo-terra-color.svg` | Versión principal: "terra" naranja + bajada azul. Solo sobre fondo blanco. |
| `logo-terra-azul.svg` | Todo en azul `#2A3653`. Para fondos claros de color. |
| `logo-terra-blanco.svg` | Todo en blanco. Para fondos oscuros y sobre fotos. |
| `wordmark-terra-color.svg` | Solo "terra", sin bajada. Para espacios chicos. |
| `wordmark-terra-blanco.svg` | Ídem en blanco. |
| `sello-compostado-por-terra.svg` | Sello marcario. Para etiquetas y certificados. |
| `sello-compostaje-regenerativo.svg` | Sello marcario, variante con la bajada completa. |
| `hoja-terra.svg` | Hoja de los "Recursos Gráficos" del manual (p18). Sin usar: se probó en el hero y se descartó. |
| `hoja-tumbada.svg` | La otra hoja del manual, en lima y acostada. Sin usar. |
| `favicon-t-naranja.svg` | Contracción del logo (la "t"), blanca sobre naranja. Es el favicon del sitio. |
| `favicon-t-blanco.svg` | Ídem, naranja sobre blanco. |
| `empresa-b-certificada-negro.svg` | Logo oficial de B Lab. Para fondos claros. |
| `empresa-b-certificada-blanco.svg` | Ídem para fondos oscuros. |

Reglas del manual que hay que respetar: no rotar, no estirar, no cambiarle los
colores fuera de la paleta, no agregarle efectos ni texto extra. El área de respeto
alrededor del logo equivale al alto de la letra "r".

La **contracción del logo** (la "t" sola) está en la p5 del manual: "su uso es más tipo
sello o insignia, se puede utilizar más en un soporte digital". De ahí sale el favicon.
Terra **no tiene isotipo**: el logo es solo tipográfico. La hoja es un recurso gráfico
decorativo, no un símbolo de la marca, y el manual pide alternarlos y no usar más de 5
en una misma composición.

### Logo de Empresa B — reglas de B Lab

Los archivos son los oficiales, bajados del portal de marca de B Lab (brand.bcorp.com).
Es una marca registrada: solo las empresas certificadas pueden usarlo. El sitio usa la
**versión negra** en los dos lugares donde aparece: sobre la tarjeta lima de la tira de
credenciales (14,55:1) y sobre el papel del pie. La blanca queda acá como material fuente
por si hace falta para una pieza sobre fondo oscuro. Lo que exige el manual de ellos, y que el sitio ya cumple:

- **Mínimo 72 px de alto en web** (50 px en banners y firmas de mail). Por debajo de eso
  las palabras "Empresa" y "Certificada" no se leen.
- **Solo en blanco o negro.** No se recolorea al naranja ni al azul de Terra. Sí se
  admite ponerlo sobre un fondo de color propio, siempre que contraste. Ojo con el
  naranja de marca: con el logo blanco da 2,90:1 y no pasa; con el negro da 7,25:1 y sí.
  Sobre el azul `#2A3653`, el logo blanco da 11,99:1.
- **Tiene que enlazar a bcorp.com**, para que cualquiera pueda buscar a Terra en el
  directorio y ver la certificación. El sitio enlaza directo a la ficha de Terra.
- Los cinco elementos van siempre juntos: el círculo B, la barra, "Empresa",
  "Certificada" y el ®. No se saca ninguno ni se cambia el tamaño de uno solo.
- No deformarlo, no rotarlo, no ponerle sombras ni convertirlo en contorno.
- Respetar el área libre alrededor: nada de texto ni gráficos encima.

Certificación vigente: **desde abril de 2025**, puntaje **119,5** (el piso para
certificar es 80; la mediana de las empresas que hacen la evaluación es 50,9), estándar
versión 1.6. Ficha oficial:
<https://www.bcorporation.net/en-us/find-a-b-corp/company/sello-circular/>

Se renueva cada tres años. Cuando recertifiquen hay que actualizar la fecha y el puntaje
en `src/data/empresa.ts`. Dudas de uso: brand@bcorporation.net

### Paleta

| | Hex | Rol |
|---|---|---|
| Naranja | `#FF6820` | **Color principal de la identidad.** |
| Azul | `#2A3653` | Texto y fondos oscuros. |
| Verde | `#3AD76F` | Acento. |
| Lima | `#D2E130` | Acento. Siempre con azul, nunca con blanco encima. |

Combinaciones permitidas: cada color con blanco, y naranja / verde / lima con azul.
El blanco se usa mucho, para equilibrar.

### Tipografía — pendiente de resolver

El manual define **Galano** (títulos y textos) y **Montserrat** (solo la bajada del logo).

En `resources_for_webpage_design/.../2025_Community/Logos/Tipografía Galano/` hay un
kit web completo de Galano Grotesque (woff2, woff, ttf, eot). **No está copiado acá a
propósito:** publicar archivos de una tipografía comercial en un repositorio público
es redistribución, y las licencias webfont no la permiten. Ver las opciones en la
conversación del proyecto.

Los logos de arriba no necesitan la tipografía: ya son curvas.

## fotos/

48 fotos, redimensionadas a 2000 px de lado mayor y recomprimidas (~36 MB en total,
desde ~1,5 GB de originales). Conservan los metadatos de orientación, que el navegador
aplica solo.

| Carpeta | Qué hay |
|---|---|
| `planta/` | Predio, hileras de compostaje, maquinaria, camiones, galpón. |
| `proceso/` | Etapas del compostaje: recepción, volteo, maduración, medición de temperatura, compost terminado. |
| `residuos/` | Residuos orgánicos crudos, contenedores Terra, cartelería, descarga. |
| `productos/` | Bolsas, balde de residuos orgánicos, compost en mano. |
| `vivero/` | Invernadero, bandejas de germinación, árboles nativos. |
| `equipo/` | Equipo de Terra, talleres, jornadas de plantación. |

**Antes de publicar** hay que chequear: que haya autorización de imagen de las personas
identificables, y quién tiene los derechos de las fotos del banco profesional.

## marca/clientes/ y marca/alianzas/

Logotipos de clientes y aliados, descargados del sitio actual (WordPress) en su
resolución original. El sitio en vivo está detrás de un desafío de verificación que
bloquea `curl` y las descargas automáticas; se obtuvieron manejando un Chrome real a
través del MCP de Chrome DevTools. JPG sobre fondo blanco.

**Clientes (12), 301x300 px:** arteche, autocity, coca-cola-andina, ecolink, fiat,
grupo-libertad, mercoop, quilmes, renault, roga-chef, urbacor, vida-cowork.

`fiat.jpg` es el logo de FCA - Fiat Chrysler Automobiles. Ojo con la sigla: **no** es la
Facultad de Ciencias Agropecuarias, que está en `alianzas/fca-unc.jpg`.

**Alianzas (4):** ecolink, fca-unc, forestando, punto-lombriz. A las tres últimas les
recorté la regla de color que traían del diseño del sitio viejo.

Terra tiene permiso de las empresas para mostrar estos logos. Aun así, al usarlos hay que
respetar el área de respeto y los colores de cada marca, y no deformarlos.

## Lo que falta

- **Logos de 6 clientes** que no están en el sitio: Bunge, BNP, Hemoderivados,
  Municipalidad de Mi Granja, Promedon y Pritty.
- **Logo de la Municipalidad de Córdoba** y de la Secretaría de Ambiente y Economía
  Circular, para la sección de alianzas.
- **Originales en vector** (SVG, AI o EPS) de los logos. Los que hay son JPG de 301 px;
  alcanzan para una grilla, pero en pantallas de alta densidad se van a ver blandos.
- Cifras de impacto actualizadas (las que hay son del 29/8/2024).
- Video: hay tomas de dron y de planta en el material fuente, sin editar.

**Nota sobre la lista de clientes:** el sitio muestra Mercoop y Vida Cowork, que no
figuran en el documento troncal de 2024; y el documento lista 16 clientes contra los 12
del sitio. Conviene confirmar cuál es la lista vigente antes de publicar.
