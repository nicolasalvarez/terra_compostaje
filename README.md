# Terra Compostaje

Sitio web institucional de Terra Compostaje, {{RUBRO}} en {{CIUDAD}}, {{PROVINCIA}}.

> **Esta es una plantilla sin completar.** Todos los textos marcados como `{{PLACEHOLDER}}`
> tienen que reemplazarse antes de publicar. Ver [Cómo personalizarla](#cómo-personalizarla).

## Tecnología

- **HTML / CSS / JavaScript** sin frameworks ni herramientas de build
- **GitHub Pages** para el hosting
- Bilingüe español / inglés con un selector de idioma (sin recargar la página)

## Estructura

```
.
├── assets/
│   ├── css/style.css        # Todos los estilos (colores en :root, arriba de todo)
│   ├── images/favicon.svg   # Ícono del sitio
│   └── js/i18n.js           # Textos en español e inglés + configuración del sitio
├── index.html               # El sitio entero (una sola página)
├── robots.txt
└── sitemap.xml
```

## Desarrollo local

No hace falta instalar nada: se puede abrir `index.html` directamente en el navegador.

Con un servidor local (más parecido a producción):

```bash
python3 -m http.server 8000
```

Y abrir [http://localhost:8000](http://localhost:8000).

## Cómo personalizarla

Los marcadores tienen el formato `{{NOMBRE}}`. Para ver cuáles quedan pendientes:

```bash
grep -rhoE '\{\{[A-Z0-9_]+\}\}' . --include='*.html' --include='*.js' --include='*.xml' --include='*.txt' --include='*.md' | sort -u
```

Los sufijos `_EN` son la versión en inglés del mismo texto y viven en `assets/js/i18n.js`.

### 1. Identidad

| Marcador | Qué poner |
|---|---|
| `Terra Compostaje` | Nombre de la empresa |
| `{{RUBRO}}` / `{{RUBRO_EN}}` | Bajada corta del logo (ej: "Estudio Contable") |
| `{{LEMA}}` / `{{LEMA_EN}}` | Frase del pie de página |
| `{{ANIO_FUNDACION}}` | Año de fundación (calcula los años de trayectoria solo) |
| `{{ANIO_ACTUAL}}` | Año del copyright |

### 2. Contacto y ubicación

| Marcador | Qué poner |
|---|---|
| `{{TELEFONO_WA}}` | WhatsApp en formato internacional, solo dígitos (ej: `5493548500293`) |
| `{{TELEFONO_VISIBLE}}` | El mismo número como se muestra (ej: `+54 9 3548 500293`) |
| `{{TELEFONO_INTERNACIONAL}}` | Formato schema.org (ej: `+54-9-3548-500293`) |
| `{{DIRECCION}}`, `{{CIUDAD}}`, `{{PROVINCIA}}`, `{{CODIGO_POSTAL}}` | Domicilio |
| `{{PAIS_ISO}}` | Código de país ISO (`AR`) |
| `{{GEO_REGION}}` | Código de región ISO (ej: `AR-X` para Córdoba) |
| `{{LATITUD}}` / `{{LONGITUD}}` | Coordenadas del local |
| `{{GOOGLE_MAPS_EMBED_URL}}` | URL del iframe: Google Maps → Compartir → Insertar un mapa |
| `{{GOOGLE_MAPS_QUERY}}` | Dirección con `+` en vez de espacios, para el enlace "Ver en Google Maps" |
| `{{DIAS_ATENCION}}`, `{{HORARIO}}`, `{{HORA_APERTURA}}`, `{{HORA_CIERRE}}` | Horarios |
| `{{DOMINIO}}` | Dominio final, sin `https://` |

### 3. Contenido

Secciones, en el orden en que aparecen: portada, nosotros (con dos datos destacados
y tres valores), servicios (seis tarjetas), equipo (dos personas), historia,
ubicación y contacto. Los marcadores siguen ese mismo orden en `index.html` y en
`assets/js/i18n.js`.

Si alguna sección no aplica, se puede borrar el `<section>` entero de `index.html`
junto con su entrada en el menú de navegación.

### 4. Diseño

Los colores están definidos como variables al principio de `assets/css/style.css`:

```css
:root {
    --primary: #1e3a5f;   /* Color principal */
    --accent: #c9a962;    /* Color de detalle */
    ...
}
```

Las tipografías (Playfair Display + Lato) se cargan desde Google Fonts en el `<head>`
de `index.html`. El favicon en `assets/images/favicon.svg` es provisional.

## Publicación

El sitio se despliega solo a GitHub Pages con cada push a `main`.

1. Settings → Pages → Source: rama `main`, carpeta `/ (root)`
2. Para usar un dominio propio: cargarlo en Settings → Pages → Custom domain
   (crea el archivo `CNAME`) y apuntar el DNS del dominio a GitHub Pages
3. Reemplazar `{{DOMINIO}}` en `robots.txt` y `sitemap.xml` por el dominio definitivo

## Licencia

Todos los derechos reservados.
