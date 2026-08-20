# Hoss — sitio web

Sitio estático (HTML/CSS/JS puro, sin build) para el estudio Hoss.

## Estructura

```
schlossberg/
├── index.html                        Home
├── proyectos.html                    Projects — índice de categorías
├── proyectos-residential.html        Obras residenciales
├── proyectos-commercial.html         Obras comerciales
├── proyectos-hospitality.html        Obras de hospitalidad
├── proyecto.html                     Plantilla de galería (una sola, dinámica)
├── estudio.html                      Studio
├── contacto.html                     Contact
├── css/style.css
├── js/script.js
├── js/projects-data.js               Datos de todos los proyectos
└── assets/projects/                  Acá van tus fotos reales
```

## 0. Estructura del sitio (actualizada)

**El sitio ahora está en inglés** (todo el texto visible). Este README se
mantiene en español porque es para vos, no para tus visitantes.

- **Home (`index.html`)**: landing minimalista — "HOSS" + "Architecture
  & Design" centrados sobre un slideshow de imágenes/video, y un botón de
  menú (con fondo oscuro semitransparente para que se vea bien sobre
  cualquier imagen) arriba a la izquierda que abre los links a Projects /
  Studio / Contact.
- **Projects (`proyectos.html`)**: es un índice con las tres categorías
  apiladas (Residential / Commercial / Hospitality). Cada una lleva a su
  propia página:
  - `proyectos-residential.html`
  - `proyectos-commercial.html`
  - `proyectos-hospitality.html`

  Cada página de categoría muestra esas obras, la primera arriba de todo
  con su imagen de portada. Al hacer click en una obra, se abre
  `proyecto.html?slug=nombre-del-proyecto` con la galería completa.
- **`proyecto.html`**: es una sola plantilla que arma la página de cada
  proyecto automáticamente, leyendo los datos desde **`js/projects-data.js`**.
  Para agregar, editar o sacar un proyecto, ese es el ÚNICO archivo que
  necesitás tocar — no hace falta crear una página HTML por cada obra. El
  archivo tiene comentarios explicando cada campo.
- **Studio (`estudio.html`)**: Who we are, What we do, How we work.

### Cómo agregar/editar diapositivas del hero (home)

En `index.html`, dentro de `<div class="hero-slides">`, cada diapositiva es:

```html
<div class="hero-slide"><img src="assets/hero/photo-1.jpg" alt=""></div>
```

o para video:

```html
<div class="hero-slide"><video src="assets/hero/clip-1.mp4" autoplay muted loop playsinline></video></div>
```

El JS las rota solas cada 5 segundos — no hace falta tocar `script.js`,
solo agregar o sacar bloques `.hero-slide`.

### Cómo agregar un proyecto nuevo

1. Abrí `js/projects-data.js` y copiá un bloque de proyecto existente.
2. Cambiá `slug` (sin espacios ni tildes), `category`, `categoryPage`, `name`,
   `year` e `images` (cuántas fotos va a tener la galería, por ahora
   placeholders).
3. Agregá una entrada nueva en la página de esa categoría
   (`proyectos-residential.html`, etc.) copiando un bloque
   `<article class="project-row">` existente y apuntando el link a
   `proyecto.html?slug=el-slug-que-elegiste`.

Con eso, `proyecto.html` arma la galería sola.

## 1. Reemplazar las imágenes placeholder

Cada proyecto/foto está representado por un bloque gris con textura de grilla
y un texto tipo "Imagen del proyecto — reemplazar". Son intencionalmente
simples para que puedas subir tus fotos ya editadas más adelante.

Para cambiar una:

1. Poné tu imagen en `assets/projects/` (ej: `casa-retiro-01.jpg`).
2. En el HTML, buscá el bloque así:
   ```html
   <div class="tile-frame">
     <div class="ph"><span class="ph-label">Imagen del proyecto</span></div>
   </div>
   ```
   y reemplazalo por:
   ```html
   <div class="tile-frame">
     <img src="assets/projects/casa-retiro-01.jpg" alt="Casa Retiro, Punta del Este">
   </div>
   ```
3. Agregá esta regla una sola vez en `css/style.css` (o dejala ya en tu HTML con `style="width:100%;height:100%;object-fit:cover"`):
   ```css
   .tile-frame img{ width:100%; height:100%; object-fit:cover; }
   ```

Recomendación de tamaño: imágenes de al menos 1800px de ancho, en `.jpg`
optimizado (calidad ~80) para que el sitio cargue rápido.

## 2. Editar textos y proyectos

Todo el contenido (nombres de proyecto, categorías, años, textos del estudio)
está directo en el HTML — no hay CMS. Buscá y reemplazá en:

- `index.html` → proyectos destacados en portada
- `proyectos.html` → grilla completa (agregá un `<article class="tile ...">` por proyecto nuevo)
- `estudio.html` → filosofía del estudio
- `contacto.html` → datos de contacto y direcciones

## 3. Conectar el formulario de contacto

Ahora mismo el formulario de `contacto.html` no envía emails de verdad — solo
muestra un mensaje. Opciones simples para activarlo sin backend propio:

- **Formspree** (más simple): creá una cuenta en formspree.io, te dan una URL,
  y cambiás el `<form id="contactForm">` para que apunte a esa URL con
  `action="https://formspree.io/f/TU_ID" method="POST"` (podés borrar el
  `preventDefault` del JS o dejar que Formspree lo maneje).
- **Resend / Vercel Functions**: si más adelante querés algo más prolijo,
  se puede agregar una función serverless en Vercel que envíe el email.

## 4. Publicar en Vercel

### Opción A — Sin usar la terminal (más fácil)

1. Andá a [vercel.com](https://vercel.com) y creá una cuenta gratis (podés
   entrar con GitHub, GitLab o email).
2. Subí esta carpeta a un repositorio de GitHub (podés arrastrar los
   archivos directamente en github.com → "Create new repository" → "uploading
   an existing file").
3. En Vercel, click en **"Add New" → "Project"**, elegí ese repositorio.
4. Como es un sitio estático, Vercel lo detecta solo — no hace falta
   configurar ningún "build command" ni "framework". Click en **"Deploy"**.
5. En 1-2 minutos tenés una URL tipo `schlossberg.vercel.app`.
6. Para usar tu propio dominio (ej. `hoss.com`): en el proyecto,
   andá a **Settings → Domains**, agregá tu dominio y seguí las
   instrucciones para apuntar el DNS.

### Opción B — Con Vercel CLI

Si preferís la terminal:

```bash
npm install -g vercel
cd schlossberg
vercel login
vercel        # despliega una versión de prueba
vercel --prod # despliega a producción
```

## 5. Antes de lanzar — checklist

- [ ] Reemplazar todas las imágenes placeholder por fotos reales
- [ ] Revisar/editar los textos de cada página
- [ ] Actualizar el email y direcciones en `contacto.html` y los footers
- [ ] Conectar el formulario de contacto (paso 3)
- [ ] Agregar tu Instagram real (buscá `href="#"` en los footers)
- [ ] Probar el sitio en el celular
