# Documentación — Pin Pun Pizzería · Sitio web

> Para nuevos integrantes: este archivo es la fuente de verdad del proyecto.
> Leelo completo antes de tocar una línea de código.
> Si algo no está claro o desactualizado, es un bug — reportalo.

**Última actualización:** 2026-05-03
**Versión:** 0.1.0
**Agente:** WebAgent v1.0

---

## 1. ¿Qué es este sitio?

Sitio web institucional y editorial para **Pin Pun**, pizzería al molde fundada en **1927** en Av. Corrientes 3954, Almagro (CABA). El sitio cuenta la historia de la casa, presenta la carta completa, muestra la experiencia del salón y reúne reseñas y galería visual.

**Objetivo principal:** posicionar Pin Pun como referencia gastronómica porteña centenaria con presencia digital moderna, moviendo visitantes a la pizzería física (CTA principal: "Cómo llegar"). No es e-commerce ni reservas online (todavía).

---

## 2. Objetivo y público objetivo

### Públicos
1. **Vecinos de Almagro y CABA** — buscan la carta, horarios y teléfono.
2. **Turistas en Buenos Aires** — buscan experiencia auténtica porteña, historia, ubicación.
3. **Foodies y entusiastas de pizza** — leen historia, reseñas y prensa.
4. **Prensa gastronómica** — referencia para notas, fotos, datos históricos.

### Conversiones esperadas
- Click en "Cómo llegar" (Google Maps)
- Click en teléfono (`tel:` link)
- Click en Instagram (`@pinpuncorrientes`)
- Permanencia y scroll-depth en historia y carta

---

## 3. Stack tecnológico y justificación

| Capa | Tecnología | Por qué |
|------|-----------|---------|
| Framework | **Astro 4** | Multi-página estático, HTML mínimo en el cliente, SEO impecable, build a `/dist` que se sube directo a Vercel/Netlify |
| Lenguaje | TypeScript (strict) | Tipado fuerte en datos de menú y contenido |
| Estilos | CSS nativo con custom properties | Sin runtime, sin build extra, total control. Variables tipográficas y de color centralizadas |
| Animación | **GSAP 3 + ScrollTrigger** | Estándar de oro para microanimaciones premium |
| Smooth scroll | **Lenis** | Buttery scroll integrado al loop de GSAP |
| Tipografías | Google Fonts (Fraunces, Inter, Caveat) | Display editorial + body legible + acento manuscrito |
| Imágenes | Unsplash (hot-link, free) | Placeholders hasta tener fotos reales del local |
| Hosting | Vercel / Netlify (recomendado) | Deploy gratuito, edge CDN, HTTPS automático |

**Por qué Astro y no Next.js:** este sitio es 100% contenido estático sin lógica de servidor. Astro genera HTML puro con peso mínimo (51 kB JS gzipped total), mejor LCP que cualquier React.

---

## 4. Estructura de carpetas

```
pin-pun-pizzeria/
├── public/                       # estáticos sin procesar (favicon, og images)
├── src/
│   ├── components/               # componentes Astro reutilizables
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Loader.astro
│   │   ├── Marquee.astro
│   │   ├── PizzaCard.astro
│   │   └── SectionTitle.astro
│   ├── data/                     # datos editoriales y de menú
│   │   ├── contenido.ts          # textos, hitos, manifiesto, prensa, contacto
│   │   ├── imagenes.ts           # URLs de Unsplash agrupadas por uso
│   │   └── menu.ts               # carta completa con 5 categorías y 30 ítems
│   ├── layouts/
│   │   └── Layout.astro          # head + meta SEO + schema.org + slot
│   ├── pages/                    # rutas del sitio (file-based routing)
│   │   ├── index.astro           # /
│   │   ├── carta.astro           # /carta
│   │   ├── experiencia.astro     # /experiencia
│   │   ├── historia.astro        # /historia
│   │   ├── resenas.astro         # /resenas
│   │   ├── galeria.astro         # /galeria
│   │   └── contacto.astro        # /contacto
│   ├── scripts/
│   │   └── animaciones.ts        # GSAP + Lenis + cursor + reveals
│   └── styles/
│       └── global.css            # variables, reset, utilidades base
├── astro.config.mjs              # configuración del framework
├── tsconfig.json                 # TypeScript strict
├── package.json
├── .gitignore
└── documentacion.md              # este archivo
```

---

## 5. Páginas y rutas

| Ruta | Archivo | Propósito | Secciones principales |
|------|---------|-----------|----------------------|
| `/` | `index.astro` | Home editorial | Hero · Marquee · Intro + stats · Pizzas emblema · Experiencia teaser · Historia teaser · Prensa · Galería preview · Marquee oscuro · CTA visita |
| `/carta` | `carta.astro` | Menú completo | Portada con índice de categorías · 5 categorías (Pizzas, Empanadas, Acompañamientos, Postres, Bebidas) · Info adicional · CTA |
| `/experiencia` | `experiencia.astro` | Pilares experienciales | Portada · 4 pilares con imágenes alternadas · Detalles secundarios (6 puntos) · Cita de cierre |
| `/historia` | `historia.astro` | Narrativa centenaria | Portada vintage · Origen · Línea de tiempo (6 hitos) · Manifiesto (4 reglas) · Anécdota Gardel · Cierre |
| `/resenas` | `resenas.astro` | Prensa y testimonios | Portada · Premio Muza 5K destacado · Menciones prensa (4) · Testimonios clientes (3) · Stats · CTA |
| `/galeria` | `galeria.astro` | Imágenes | Portada con filtros (todos / productos / local) · Grid masonry 12 fotos · CTA Instagram |
| `/contacto` | `contacto.astro` | Info práctica | Portada · 2 locales (Almagro + Villa Urquiza) · Mapa · Redes y contacto rápido · FAQ (6 preguntas) |

---

## 6. Componentes principales

### Globales (todas las páginas)
- **`Layout.astro`** — head con meta SEO, Open Graph, schema.org Restaurant, preconnects, slot para contenido.
- **`Loader.astro`** — overlay inicial con contador animado 1900 → 1927.
- **`Header.astro`** — nav sticky con auto-hide al hacer scroll, menú mobile fullscreen.
- **`Footer.astro`** — claim editorial, dos locales, redes, links de navegación.

### Reutilizables
- **`Marquee.astro`** — banda horizontal con frases en loop (variantes claro/oscuro).
- **`PizzaCard.astro`** — tarjeta de plato con imagen, nombre, descripción, precio, etiqueta. Hover con tilt sutil y zoom de imagen.
- **`SectionTitle.astro`** — encabezado de sección con eyebrow + título grande + bajada. Soporta animación letra por letra.

---

## 7. SEO — decisiones y configuración

### Meta tags
Todas las páginas usan `<Layout>` que renderiza:
- `<title>` único por página (50-65 caracteres)
- `<meta name="description">` único (150-160 caracteres)
- Open Graph completo (og:type=`restaurant.restaurant`, og:image, og:locale=`es_AR`)
- Twitter card `summary_large_image`
- Canonical automático basado en `Astro.url.pathname`

### Schema.org
Layout incluye JSON-LD `Restaurant` con:
- Nombre, fundación (1927), dirección estructurada, teléfono, descripción, cocina (Pizza · Argentine · Italian).

### Otros
- `lang="es-AR"` en `<html>`
- Preconnect a `images.unsplash.com` (acelera LCP)
- Sitemap automático: pendiente activar `@astrojs/sitemap` (ver tarea pendiente al final)

---

## 8. Analytics y tracking

**Pendiente** — todavía no integrado. Sugerencia para próxima iteración:
- **Google Analytics 4** (eventos básicos: page_view automático + click en CTA "Cómo llegar" + click en teléfono + scroll depth)
- **Google Search Console** (verificación de dominio una vez deployado)

Cuando se contrate dominio, agregar el snippet de GA4 en `Layout.astro` antes del cierre de `</body>`.

---

## 9. Cómo correr el proyecto

### Requisitos
- Node.js 20+ (LTS)
- npm 10+

### Comandos
```bash
# Instalar dependencias (primera vez)
npm install

# Servidor de desarrollo en http://localhost:4321
npm run dev

# Build estático a /dist
npm run build

# Preview del build local (verifica producción)
npm run preview
```

### Editar contenido
- **Carta y precios** → `src/data/menu.ts`
- **Textos editoriales, hitos, manifiesto, prensa, contacto** → `src/data/contenido.ts`
- **Imágenes** → `src/data/imagenes.ts` (reemplazar URLs de Unsplash por las definitivas cuando estén)
- **Paleta y tipografías** → `src/styles/global.css` (sección `:root`)

---

## 10. Deploy y hosting

### Opción recomendada: Vercel (gratis para sitios estáticos)
1. Conectar el repo de GitHub en vercel.com
2. Framework preset: Astro (autodetectado)
3. Build command: `npm run build` (autodetectado)
4. Output directory: `dist` (autodetectado)
5. Deploy

### Opción alternativa: Netlify
Mismo flujo. Build command y output directory iguales.

### Dominio definitivo
Cuando se contrate `pinpun.com.ar` (o similar):
1. Apuntar DNS al hosting elegido
2. Editar `site:` en `astro.config.mjs` para que canonical y Open Graph apunten al dominio real

---

## 11. Mantenimiento (guía para el cliente)

### Actualizar precios de la carta
1. Abrir `src/data/menu.ts`
2. Buscar el ítem (los precios están en `precio: NUMERO`)
3. Cambiar el número (sin puntos, en pesos)
4. Guardar y commitear → el deploy se actualiza solo

### Cambiar fotos
1. Subir las fotos definitivas a `public/imagenes/` (carpeta a crear)
2. En `src/data/imagenes.ts`, reemplazar las URLs de Unsplash por las nuevas: `'/imagenes/mi-foto.jpg'`
3. Guardar y commitear

### Agregar una nueva pizza al menú
1. En `src/data/menu.ts`, agregar un objeto al array `pizzas`:
```ts
{
  nombre: 'Nombre nuevo',
  descripcion: 'Descripción evocativa.',
  precio: 14000,
  destacado: false,
}
```

### Cambiar horarios o teléfonos
- `src/data/contenido.ts` → objeto `negocio.ubicaciones[]`

---

## 12. Decisiones de diseño y copy

### Paleta
| Rol | Hex | Uso |
|-----|-----|-----|
| Carbón profundo | `#0A0908` | Fondos oscuros, footer, cierre |
| Crema napolitana | `#F5EFE6` | Fondo principal |
| Crema soft | `#EDE5D6` | Cards, secciones secundarias |
| Tomate San Marzano | `#C73E1D` | Acento primario, CTAs, números destacados |
| Verde basílico | `#3D4A2A` | Secundario (reservado, uso esporádico) |
| Dorado champagne | `#C9A87C` | Acento premium, eyebrows en oscuro, hover |

### Tipografías
- **Fraunces** (display, italic): identidad editorial, titulares, números grandes.
- **Inter** (body): cuerpo, UI, navegación.
- **Caveat** (script): toques manuscritos, tipo cartelería de pizzería ("desde 1927", "tomá uno por mí").

### Tono editorial
- Cercano y porteño, sin caer en lunfardo forzado.
- Frases cortas, ritmo de oralidad.
- Datos concretos > superlativos vacíos ("medio kilo de mozzarella" > "abundante mozzarella").
- Anclaje constante en lo concreto: 1927, Av. Corrientes 3954, Gardel, Muza 5K, azulejos blanco y negro.

### Microanimaciones implementadas
1. **Loader** con contador 1900 → 1927 + fade-out (1.6s)
2. **Smooth scroll** con Lenis (duration 1.15, easing exponencial)
3. **Cursor custom** mix-blend difference, hover sobre links/botones
4. **Botones magnéticos** con elastic ease en mouseleave
5. **Reveal por palabra** en titulares (`data-split`)
6. **Reveal por línea** con clip-path mask
7. **Clip-path reveal** en imágenes al entrar en viewport
8. **Parallax** sutil en imágenes con `data-parallax`
9. **Marquee infinito** con frases identitarias
10. **Scroll progress bar** rojo tomate top
11. **Hover tilt** en cards de plato
12. **Header auto-hide** al bajar, reaparece al subir
13. **Hero zoom** lento al cargar (12s ease-out)
14. **Acordeón FAQ** con rotación del +
15. **Filtros de galería** con fade + grayscale en ítems ocultos

---

## 13. Errores frecuentes y soluciones

### "Cannot find module 'lenis' or its corresponding type declarations"
Pasó: las types de Lenis a veces no resuelven en strict mode.
Solución: ya manejado en `astro.config.mjs` con `vite.ssr.noExternal`.

### Las imágenes de Unsplash no cargan en preview
Pasó: rate limit de hot-linking.
Solución: a producción descargar las imágenes a `public/imagenes/` y cambiar las URLs.

### El cursor custom queda fijo en mobile
No pasa: ya hay un `@media (hover: none)` que lo oculta.

### Build falla por TypeScript strict
Mirar el error específico. Habitualmente es un `data-` prop sin tipar — agregarlo al objeto Props correspondiente.

---

## 14. Tareas pendientes / próximas iteraciones

- [ ] Reemplazar fotos de Unsplash por fotografías reales del local y los platos.
- [ ] Logo definitivo (actualmente texto en serif italic).
- [ ] Agregar `@astrojs/sitemap` para sitemap.xml automático.
- [ ] Integrar Google Analytics 4 cuando haya dominio.
- [ ] Verificar dominio en Google Search Console.
- [ ] Conseguir el menú real con precios actualizados (los actuales son estimaciones basadas en precio promedio publicado).
- [ ] Considerar integrar formulario de contacto (Formspree o similar) en `/contacto`.
- [ ] Página `/menu-pdf` con el PDF descargable del menú.
- [ ] Sumar reservas online si se decide a futuro (Restorando, OpenTable, o solución propia).
- [ ] Test de PageSpeed en producción (objetivo > 90 mobile y desktop).
- [ ] Revisar contraste de la combinación dorado sobre carbón en accesibilidad WCAG AA.

---

## Changelog

### 2026-05-03 — Inicialización del proyecto
- Proyecto Astro 4 + GSAP + Lenis levantado.
- 7 páginas implementadas: Inicio, Carta, Experiencia, Historia, Reseñas, Galería, Contacto.
- Sistema de diseño completo (paleta, tipografías Fraunces + Inter + Caveat, escala fluida).
- Datos editoriales y de menú centralizados en `src/data/`.
- Microanimaciones: loader, cursor, reveals, parallax, marquee, hover tilt, smooth scroll.
- Build verificado: 7 páginas estáticas, 51.6 kB JS gzipped.
- Documentación completa generada en este archivo.
