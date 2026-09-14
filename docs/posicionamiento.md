# Plan de posicionamiento y visibilidad

Qué falta para que Terra aparezca cuando alguien busca lo que Terra hace, por qué hace
falta cada cosa, y en qué orden conviene hacerlas.

Escrito el 13/9/2026, contra el estado del sitio en ese momento. No es una lista de tareas
sueltas: cada bloque explica primero **para qué sirve**, porque la mitad de las decisiones
de posicionamiento se toman mal por copiar prácticas sin entender qué problema resuelven.

---

## Primero: cómo funciona esto, en criollo

Que te encuentren en Google no es una cosa, son tres, y se confunden todo el tiempo:

1. **Que el buscador pueda leer el sitio.** Que cargue rápido, que el texto esté en el
   HTML, que no haya nada bloqueando. Es la parte técnica y es la que **ya está casi
   perfecta** en este sitio.

2. **Que exista una página para cada cosa que la gente busca.** Google posiciona
   *páginas*, no sitios. Una página puede ganar una búsqueda; no puede ganar cinco
   búsquedas distintas al mismo tiempo. Hoy Terra tiene **una sola página de contenido**
   para dos negocios diferentes. Acá está el techo.

3. **Que otros te nombren.** Enlaces desde otros sitios, la ficha de Google Maps, las
   reseñas. Es lo que más pesa y es lo único que no se resuelve tocando código. Acá Terra
   tiene una ventaja que la mayoría de las pymes no tiene, y la está desaprovechando.

El error clásico es dedicarle el 90% del esfuerzo al punto 1, que ya está resuelto, y no
tocar el 2 ni el 3. Este plan está ordenado al revés de esa intuición.

---

## El punto de partida real

**El sitio nuevo hoy no existe para Google.** Está publicado en modo preview, en la URL de
GitHub Pages, y su `robots.txt` dice `Disallow: /` a propósito, para que esa copia no
compita con el dominio real. Mientras tanto `terracompostaje.com` sigue sirviendo el
WordPress viejo, que sí está indexado.

Esto ordena todo lo demás: **hasta que no se haga el corte a producción, ninguna otra
mejora de posicionamiento cuenta.** Es la Fase 0 y no tiene sentido empezar por otro lado.

Lo bueno: cuando se publique, arranca con una base técnica muy sólida y con algo que vale
más que cualquier optimización — prensa real. Terra ya está citada por la Municipalidad de
Córdoba, la UCC, InfoNegocios, CBA Viva, EcoBiz y El Diario de Carlos Paz. Un `.gob.ar` y
un `.edu.ar` apuntando a tu dominio valen más que meses de trabajo de contenido.

---

## Fase 0 · El corte a producción

**Bloquea todo. Nada de lo que sigue sirve hasta que esto esté hecho.**

### Qué hay que hacer

Los pasos mecánicos ya están anotados en el README, en *"Pendientes antes de publicar"*:
apuntar el DNS a GitHub Pages, sacar `PREVIEW` del workflow y el paso que borra el CNAME.
El resto (rutas, `robots.txt`, canónicas) se acomoda solo.

### Lo que el README no dice y es lo que más importa

**1. Redirecciones 301 desde las URLs del sitio viejo.**

El WordPress actual tiene URLs indexadas por Google, y cada una acumuló algo de autoridad.
Si el sitio nuevo las hace desaparecer sin avisar, Google se encuentra con errores 404 y
tira a la basura esa autoridad. Una redirección 301 es la forma de decirle "esto se mudó
acá" y transferir lo acumulado.

Antes de cortar hay que **listar las URLs viejas** (Search Console del sitio actual, o
`site:terracompostaje.com` en Google) y mapear cada una a su equivalente nuevo. Todo lo
que hoy era una página aparte (servicios, productos, nosotros, contacto) probablemente
apunte a un ancla de la home nueva, o a las páginas nuevas de la Fase 1.

GitHub Pages no hace redirecciones. Se hacen con **Bulk Redirects de Cloudflare**, que ya
está en el camino del dominio. Es cargar una lista, no programar.

**2. Google Search Console, el mismo día.**

Es la herramienta gratis de Google que muestra por qué búsquedas aparecés, en qué posición
y qué páginas tuvo problemas para leer. Sin esto, todo lo que sigue es a ciegas: no vas a
saber si algo funcionó. Hay que verificar la propiedad del dominio, mandar el sitemap
(`https://terracompostaje.com/sitemap-index.xml`) y pedir la indexación de la home.

**3. Revisar el desafío de verificación.**

El sitio actual está detrás de una pantalla de verificación con spinner que bloquea a
cualquier cliente que no sea un navegador real. Si esa protección sigue activa en
Cloudflare después del corte, **puede estar bloqueando también al robot de Google**. Hay
que confirmar que Googlebot pase, con la herramienta de inspección de URL de Search
Console.

**4. Bing y los buscadores de IA.**

Cinco minutos: dar de alta el sitio en Bing Webmaster Tools. No por el tráfico de Bing,
que es marginal, sino porque **ChatGPT usa el índice de Bing**. Cada vez más gente busca
proveedores ahí antes que en Google.

---

## Fase 1 · De una página a varias

**Es el cambio de mayor impacto dentro del código.**

### El problema, en simple

Una empresa que busca *"quién retira los residuos orgánicos de mi planta en Córdoba"* y un
paisajista que busca *"compost a granel precio por metro cúbico"* están haciendo dos
búsquedas completamente distintas, con intenciones distintas y competidores distintos. Hoy
las dos caen en la misma home.

Google elige una página por intención. Cuando una sola página intenta cubrir todo, no
queda claramente "sobre" ninguna de las dos cosas, y pierde contra páginas rivales que sí
están dedicadas. La home de Terra tiene 1.190 palabras repartidas entre servicio,
proceso, productos, impacto y clientes: de "compost" habla unas seis veces en todo el
documento. Una página dedicada a productos hablaría de eso doscientas.

Además, más páginas es más superficie: más títulos, más descripciones, más chances de
coincidir con una búsqueda. Y permite enlaces internos, que es como Google entiende qué
es importante en un sitio.

### Las páginas que faltan

El contenido para casi todas **ya existe**, repartido en los componentes de la home. Es
reorganizar, no escribir de cero.

| URL | Para quién | Búsqueda que persigue | De dónde sale el contenido |
|---|---|---|---|
| `/` | Los dos | "terra compostaje", marca | Se queda como está, más corta, derivando a las otras |
| `/tratamiento-de-residuos/` | Empresas | "tratamiento residuos orgánicos empresas Córdoba", "gestión residuos alimenticios", "certificado tratamiento residuos" | `Caminos.astro` (columna empresas) + `Proceso.astro` |
| `/productos/` | Compradores | "comprar compost Córdoba", "sustrato a granel", "compost precio m3" | `Productos.astro` + `precios.yaml` completo |
| `/la-planta/` | Los dos | "planta de compostaje Córdoba", "compostaje industrial" | `Proceso.astro` + `Credenciales.astro` |
| `/nosotros/` | Los dos | "empresa B Córdoba", marca, prensa | Nuevo. Fundadores, origen UCC, Empresa B, impacto |
| `/contacto/` | Los dos | "terra compostaje teléfono/dirección" | `Cta.astro` + `Footer.astro` + mapa |

### Cómo hacerlo sin romper lo que ya está bien

El sitio está armado en componentes con los textos separados en `src/i18n/`. Una página
nueva es un archivo en `src/pages/` que compone los mismos componentes. Tres cosas a
cuidar:

- **Cada página necesita su propio `titulo` y `descripcion`.** El layout ya los acepta
  como props opcionales; hoy ninguna página los pasa y todas heredan los de la home. Si
  se crean páginas nuevas sin esto, quedan todas con el mismo título y Google las trata
  como duplicadas.
- **Duplicar en inglés.** El chequeo de tipos frena si falta una traducción, pero las
  rutas hay que agregarlas a mano en `rutas` de `src/i18n/index.ts`, o se rompe el
  selector de idioma y los `hreflang`.
- **Cuidado con las anclas.** Ya hubo un problema con esto: el prefijo vacío hacía que
  `#seccion` se resolviera contra la página actual. Con más páginas, cada enlace del menú
  tiene que apuntar a la página destino completa, no a un ancla.
- **Menú y migas de pan.** Con seis páginas el menú actual de anclas deja de tener
  sentido. Hay que pasarlo a enlaces de página, y agregar migas de pan (ese
  `Inicio › Productos` chiquito arriba), que además se marcan como datos estructurados y
  Google los muestra en los resultados.

### Aviso honesto sobre la página de productos

La competencia por "comprar compost Córdoba" son tiendas con carrito: VallsGarden, Córdoba
Grow Shop, MercadoLibre. Google privilegia páginas donde se puede comprar. Sin venta
online — que es una decisión tomada a propósito para la v1 — Terra puede ganar las
búsquedas de **volumen** ("compost a granel", "big bag", "obra", "vivero", "paisajismo"),
donde nadie compra por carrito igual, pero difícilmente las de bolsa suelta. Conviene
escribir esa página apuntando al comprador grande, no al que quiere una bolsa de 15 litros.

---

## Fase 2 · Datos estructurados

### Qué son y para qué sirven

Es un bloque de datos invisible para la persona y legible para la máquina, que dice
"esto es una empresa, está acá, vende esto, a este precio". Sirve para dos cosas:
que Google muestre resultados enriquecidos (estrellitas, precios, migas) y que los
sistemas de IA entiendan el negocio sin tener que interpretar prosa.

Hoy el sitio emite un bloque `Organization` correcto. Se queda corto en cuatro cosas.

### 1. `LocalBusiness` en vez de `Organization`

`Organization` es genérico: sirve para una consultora que trabaja remoto. Terra tiene un
predio de 9 hectáreas, un horario y una zona de cobertura. `LocalBusiness` permite declarar
coordenadas, horarios y `areaServed`, que es lo que Google usa para decidir a quién le
muestra el resultado en búsquedas locales. Es un cambio de una línea en el `@type` más
tres campos nuevos.

### 2. `Product` y `Offer` para el catálogo

Acá hay una oportunidad concreta y desaprovechada: `precios.yaml` tiene **quince precios
reales** y el HTML los muestra como una lista de definiciones sin marcar. Marcados como
`Product` + `Offer` (con `priceCurrency: ARS`, `priceValidUntil` y disponibilidad), Google
puede mostrar el precio directamente en el resultado de búsqueda.

A diferencia de las FAQ, **estos resultados enriquecidos Google los sigue mostrando**. Es
el marcado con mejor relación esfuerzo/resultado que le queda al sitio.

Detalle: los precios son + IVA y sin transporte. Eso hay que declararlo
(`valueAddedTaxIncluded: false`) o el precio mostrado engaña.

### 3. `BreadcrumbList` — depende de la Fase 1

Las migas de pan marcadas hacen que en el resultado de Google, en vez de la URL cruda,
aparezca `terracompostaje.com › Productos › Compost`. Ayuda al clic y ayuda a Google a
entender la jerarquía.

### 4. `sameAs` incompleto

Hoy declara Instagram y LinkedIn. Falta:

- **Facebook.** Existe una página, *Terra Compostaje Regenerativo*, que el sitio no enlaza
  y que estaba dada por inexistente. Hay que confirmar si está activa y si es oficial.
- **La ficha de B Lab**, que ya está enlazada en el cuerpo pero no en `sameAs`.
- **La ficha de Google Business Profile**, cuando exista (Fase 4).

`sameAs` es la forma de decirle a Google "todos estos perfiles son la misma entidad". Es
lo que consolida el panel de marca que aparece a la derecha de los resultados.

---

## Fase 3 · Contenido: las FAQs y lo demás

### Sobre las FAQs, la respuesta directa

**Sí conviene ponerlas. Pero no por el motivo por el que todo el mundo las pone.**

La razón habitual —que Google muestre las preguntitas desplegables debajo del resultado—
**ya no existe**. En agosto de 2023 Google limitó esos resultados enriquecidos a sitios de
gobierno y de salud. Si se marcan con `FAQPage` esperando eso, no va a pasar nada. No
hace daño marcarlas, pero no es el motivo.

Los motivos reales, en orden de peso:

**1. Capturan búsquedas escritas como pregunta.** Nadie escribe "tratamiento de residuos
orgánicos Córdoba"; escribe "dónde llevo los residuos de mi restaurante". Son búsquedas de
poco volumen cada una, pero de gente muy decidida, y hoy el sitio no toca ninguna porque
está escrito en lenguaje institucional.

**2. Es lo que citan las respuestas de IA.** AI Overviews de Google, ChatGPT, Perplexity y
Gemini reproducen prosa clara de pregunta y respuesta mucho mejor que copy de marketing.
Para una compra B2B, donde la investigación empieza cada vez más ahí, esto ya pesa más que
el puesto 4 en Google.

**3. Convierten.** Sacan la objeción antes de que la persona tenga que preguntarla por
WhatsApp. Si hay un mínimo de compra, si cubren tal zona, si emiten certificado: quien no
lo encuentra, no pregunta, se va.

**4. Densidad.** Suman doscientas o trescientas palabras de texto relevante y natural a
cada página, que es exactamente lo que a la home le falta.

### Cómo hacerlas bien

- **No hacer una `/faq` general.** Ese es el formato que menos rinde: mezcla intenciones y
  no es "sobre" nada. Las preguntas van **en la página del tema**, al final. Las de
  servicio en `/tratamiento-de-residuos/`, las de producto en `/productos/`.
- **Escribir la pregunta como la escribe el cliente**, no como la escribiría la empresa.
  "¿Cuánto sale el metro cúbico de compost?" y no "Consultas sobre nuestra política de
  precios".
- **La respuesta, completa en el primer párrafo.** Los sistemas de IA citan el primero.
- **Los textos van a `src/i18n/`** como el resto, en los dos idiomas.

### Preguntas concretas para arrancar

**Servicio (empresas):**
- ¿Qué tipos de residuos orgánicos reciben y cuáles no?
- ¿Cuál es el volumen mínimo para que valga la pena contratar el servicio?
- ¿Ustedes retiran o hay que llevar el material a la planta?
- ¿Qué zona de Córdoba cubren?
- ¿Qué certificado entregan y ante qué autoridad sirve?
- ¿Qué dice la normativa de Córdoba sobre la disposición de residuos orgánicos? *(ésta es
  la más valiosa: es la búsqueda de alguien que todavía no sabe que necesita el servicio)*
- ¿Cómo se factura, por tonelada o por retiro?
- ¿Qué tienen que hacer en la empresa para separar en origen?

**Productos:**
- ¿Cuánto pesa y cuánto rinde un metro cúbico de compost?
- ¿Cuál es la diferencia entre Compost, Sustrato Paisajismo y Sustrato Cultivo?
- ¿El compost tiene semillas de malezas?
- ¿Hacen entregas en obra? ¿Cuánto cuesta el transporte?
- ¿Cuál es la compra mínima a granel?
- ¿Sirve para huerta orgánica? ¿Tiene análisis de laboratorio?
- ¿Cuánto compost necesito para tantos metros cuadrados de jardín?
- ¿Cuál es la diferencia entre compost y lombricompuesto?

### Contenido más allá de las FAQs

Un blog "porque hay que tener un blog" no sirve. Lo que sí sirve son **dos o tres
artículos que respondan la pregunta anterior a la compra**, esa que se hace alguien que
todavía no sabe que Terra existe:

- *Normativa de residuos orgánicos para empresas en Córdoba: qué exige y a quién.* Es la
  mejor: alta intención comercial, casi sin competencia local, y la fuente natural para
  responderla es Terra, que es operador habilitado.
- *Cuánto compost necesito: cálculo por metro cuadrado.* Búsqueda constante todo el año y
  termina en un presupuesto.
- *Un caso real, con números.* "Cómo tal planta dejó de enterrar X toneladas." Terra ya
  tiene los clientes y los reportes mensuales; es contar lo que ya se mide.

Dos artículos buenos por año rinden más que doce de relleno. Requiere una sección de blog,
que hoy no existe — evaluar si vale la pena la infraestructura antes de comprometerse.

---

## Fase 4 · Google Maps: lo que más rinde y no está en el repo

**Para las búsquedas locales, esto pesa más que todo el sitio junto.**

Cuando alguien busca "compostaje Córdoba" o "dónde comprar compost cerca", Google muestra
primero un mapa con tres fichas. Ese bloque se lleva la mayoría de los clics y **no se gana
con el sitio web**: se gana con la ficha de Google Business Profile. Es gratis y muchas
empresas no la reclaman nunca.

Lo que hay que hacer:

1. **Reclamar o crear la ficha.** Verificación por postal al predio, suele tardar unas
   semanas. Categoría principal: algo como *Servicio de gestión de residuos*, con
   *Proveedor de tierra y compost* como secundaria.
2. **NAP idéntico al del sitio.** NAP es nombre, dirección y teléfono. Google compara la
   ficha con el sitio y con cualquier directorio donde aparezca la empresa; si no coinciden
   letra por letra, desconfía y baja el ranking local. **Ojo con esto**: el sitio usa
   "Dr. Ricardo Balbín 8950" y la prensa describe el predio como "Chacra de la Merced,
   Ruta Nacional 19". Hay que elegir una forma canónica y usar esa en todos lados.
3. **Fotos del predio.** Las fichas con fotos reales reciben muchas más visitas. Hay 48
   fotos curadas en `resources/fotos/` que ya están seleccionadas y listas.
4. **Reseñas.** Es el factor más fuerte del ranking local y el más ignorado. Terra tiene
   16 clientes empresariales y buena relación con ellos. Pedirle la reseña a cinco de
   ellos mueve más la aguja que cualquier cosa de esta lista. Responder todas.
5. **Publicaciones.** La ficha permite postear novedades. Terra ya genera contenido para
   Instagram; es reutilizar.

Después de la ficha, **directorios**: Páginas Amarillas, la guía de la Cámara de Comercio,
directorios de economía circular y de Empresas B. Cada uno es una mención con NAP
consistente, que es lo que Google usa para confirmar que la empresa existe donde dice.

---

## Fase 5 · Autoridad: cobrar lo que ya se ganó

Los enlaces desde otros sitios son el voto de confianza más fuerte que existe para Google,
y valen según quién los da. Terra ya tiene cobertura de prensa que la mayoría de las
empresas de su tamaño no tiene:

| Quién | Por qué vale |
|---|---|
| [cordoba.gob.ar](https://cordoba.gob.ar/terra-compostaje-mercado-abasto/) | Dominio de gobierno. De lo más valioso que se puede conseguir. |
| [ucc.edu.ar](https://ucc.edu.ar/noticias/graduados-fundan-primer-centro-compostaje-cordoba/) | Dominio universitario, misma categoría. |
| [InfoNegocios](https://infonegocios.info/nota-principal/multiplica-y-reinaras-terra-el-primer-centro-de-compostaje-industrial-de-cordoba-se-triplica-coca-libertad-y-fiat-entre-sus-clientes) | Medio de negocios, audiencia exacta. |
| [CBA Viva](https://cbaviva.com.ar/ambiente/la-historia-de-terra-primer-centro-de-compostaje-industrial-que-funciona-en-cordoba/), [EcoBiz](https://ecobiz.com.ar/nota/808-Son-pioneros-en-compostaje-industrial-y-buscan-plantar-un-producto-en-el-mercado), [El Diario de Carlos Paz](https://www.eldiariodecarlospaz.com.ar/provincial/2026/6/11/cordoba-convierten-15-toneladas-de-residuos-al-mes-en-compost-empleo-verde-263640.html) | Prensa regional, refuerzan la señal local. |

**Lo primero es verificar que cada una realmente enlace al dominio** y no solo mencione el
nombre. Una mención sin enlace no transfiere autoridad. Si falta, se pide: un mail al medio
pidiendo que agreguen el link suele funcionar, sobre todo con notas recientes.

Después, las que faltan:

- **El directorio de B Lab.** La ficha de Sello Circular debería enlazar a
  `terracompostaje.com`. Es un dominio de mucha autoridad y es un trámite, no una gestión.
- **Los clientes y aliados.** Coca-Cola Andina, Renault, Fiat, Grupo Libertad, UNC,
  Forestando: varios publican sus acciones de sostenibilidad y nombran proveedores. Pedir
  el enlace en esas páginas es de lo más fácil que hay, porque a ellos también les sirve
  mostrarlo.
- **Prensa nueva con un dato propio.** La forma sostenible de conseguir enlaces no es
  pedirlos, es dar algo que se pueda citar. Terra mide toneladas desviadas, CO₂ evitado y
  árboles plantados: un informe anual de impacto, publicado en el sitio con los números y
  la metodología, es material que los medios citan solos.

---

## Fase 6 · Medir, y qué esperar

Sin medición no se sabe si algo sirvió, y el posicionamiento tarda: **de tres a seis meses**
para ver movimiento real en búsquedas que no sean la marca. Conviene saberlo de entrada
para no cambiar de estrategia al mes.

**Qué mirar en Search Console**, una vez por mes:

- Que la cantidad de páginas indexadas sea la que corresponde. Si publicaste seis y hay
  dos, hay un problema técnico.
- Qué consultas traen impresiones. Lo más útil son las búsquedas donde aparecés en
  posición 8-20: son las que están a un empujón de la primera página.
- Qué páginas reciben clics. Si una página nueva no recibe ninguno en dos meses, o el
  título no invita al clic, o apunta a una búsqueda que nadie hace.

**Analítica de visitas.** Hoy el sitio no tiene ninguna, y la política de privacidad y la
CSP están escritas asumiendo eso. Antes de instalar Google Analytics hay que meter el
banner de consentimiento con Consent Mode v2 (ya está anotado como pendiente en el README)
y abrir la CSP. Una alternativa que evita todo eso es una herramienta sin cookies tipo
Plausible o Umami: no necesita banner, no toca la política de privacidad y para un sitio
de folleto alcanza y sobra. **Recomiendo esa.**

**Una prueba manual** cada tanto: buscar en modo incógnito "compostaje industrial Córdoba",
"tratamiento residuos orgánicos empresas Córdoba", "comprar compost Córdoba" y anotar en
qué puesto aparece Terra. Tres minutos, y es la medida que de verdad importa.

---

## Lo que NO haría

Tan importante como la lista de arriba:

- **Marcar las FAQ esperando resultados enriquecidos.** Ya no existen fuera de gobierno y
  salud. Ponerlas sí, por los otros motivos; esperar eso, no.
- **Meterle palabras clave al H1.** "Es hora de devolverle a nuestra tierra todo lo que nos
  da" no tiene ni una keyword, y está bien así: es la voz de la marca y la bajada de abajo
  ya dice "residuos orgánicos", "compostaje industrial" y "Córdoba". Lo que rinde es que
  los H1 de las **páginas nuevas** sean descriptivos, no romper el de la home.
- **Un blog con publicación semanal.** Sin alguien que lo sostenga, un blog abandonado con
  el último post de hace dos años transmite peor señal que no tener blog.
- **Comprar enlaces o contratar "SEO garantizado".** Google lo detecta y penaliza. Con la
  prensa que Terra ya tiene, no hace falta.
- **Abrir el e-commerce solo por SEO.** Ayudaría a las búsquedas de producto, pero dispara
  botón de arrepentimiento, Data Fiscal de ARCA y obligaciones de defensa del consumidor.
  Se decidió no hacerlo en la v1 y el SEO no alcanza como motivo para revisarlo.
- **Traducir más al inglés.** La versión en inglés está bien para credibilidad
  institucional, pero casi nadie busca estos servicios en inglés en Córdoba. No invertir
  más ahí.

---

## Resumen por prioridad

| # | Qué | Esfuerzo | Impacto | Dónde se hace |
|---|---|---|---|---|
| 1 | Corte a producción + DNS | Medio | **Bloqueante** | Repo + Cloudflare |
| 2 | Redirecciones 301 del sitio viejo | Bajo | Alto | Cloudflare |
| 3 | Search Console + Bing | Bajo | Alto (medición) | Fuera del repo |
| 4 | Ficha de Google Business Profile | Medio | **Muy alto** | Fuera del repo |
| 5 | Pedir reseñas a 5 clientes | Bajo | **Muy alto** | Fuera del repo |
| 6 | Separar en páginas por intención | Alto | **Muy alto** | Repo |
| 7 | `Product`/`Offer` en el catálogo | Bajo | Alto | Repo |
| 8 | `LocalBusiness` + `sameAs` completo | Bajo | Medio | Repo |
| 9 | FAQs por página | Medio | Medio-alto | Repo |
| 10 | Verificar y pedir enlaces de prensa | Bajo | Alto | Fuera del repo |
| 11 | Migas de pan + menú de páginas | Medio | Medio | Repo |
| 12 | Analítica sin cookies | Bajo | Medio (medición) | Repo |
| 13 | Artículos de fondo | Alto | Medio, a largo plazo | Repo |

**Los ítems 4, 5 y 10 no tocan una línea de código y son los de mejor relación
esfuerzo/resultado de toda la lista.** Si hubiera que elegir solo tres cosas después del
corte a producción, son ésas.
