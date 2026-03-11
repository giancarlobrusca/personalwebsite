# Instrucciones: Migración del sitio personal a nuevo diseño

## Contexto

Tengo un sitio personal en Next.js en este repositorio. Quiero reemplazar el diseño actual por uno nuevo que ya está prototipado en HTML puro. El objetivo es trasladar ese diseño al stack de Next.js manteniendo las buenas prácticas del framework.

El archivo HTML de referencia está en: `reference/giancarlobrusca.html` (copialo ahí antes de correr estas instrucciones).

---

## Stack actual

- Next.js (App Router o Pages Router, verificá cuál usa el repo)
- El sitio está en `giancarlobrusca.com`

---

## Tokens de diseño

Usá estos valores en todo el proyecto. Creá un archivo `styles/tokens.css` o definilos en `globals.css`:

```css
:root {
  --bg: #0a0a08;
  --bg2: #111110;
  --text: #e8e4d9;
  --muted: #6b6860;
  --accent: #c8f04a;
  --accent2: #ff6b35;
  --border: #2a2a26;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-serif: 'Playfair Display', serif;
  --font-display: 'Unbounded', sans-serif;
}
```

---

## Tipografías

Instalá las fuentes via `next/font/google` en el layout principal:

```ts
import { Playfair_Display, IBM_Plex_Mono, Unbounded } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  variable: '--font-serif',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-display',
})
```

Aplicá las variables en el `<body>` del layout raíz.

---

## Estructura de componentes a crear

Creá los siguientes componentes en `components/`:

### `components/Cursor.tsx`
Cursor personalizado. Dos elementos: punto central (`cursor`) y anillo (`cursor-ring`). El anillo sigue al mouse con un lag suave usando `requestAnimationFrame`. Al hacer hover sobre links, botones y cards, el punto escala a 3x y el anillo se agranda a 48px.

- Usá `useEffect` para los event listeners
- Ocultá el cursor nativo con `cursor: none` en el body
- Aplicalo en el layout raíz

### `components/Nav.tsx`
Navbar fija con:
- Logo "GB" a la izquierda (fuente Unbounded, color accent, link a `#`)
- Links a la derecha: apps, escritura, newsletter, contacto
- Fondo con gradiente hacia transparente (no sólido)
- `position: fixed`, `z-index: 100`

### `components/Hero.tsx`
Grid de dos columnas:

**Columna izquierda:**
- Tag "Buenos Aires, Argentina" con línea decorativa
- Nombre en Playfair Display con efecto glitch al hover (implementá con pseudo-elementos CSS y `data-text` attribute)
- Subtítulo en Unbounded
- Bio en IBM Plex Mono

**Columna derecha:**
- Coordenadas verticales `34°36'S · 58°22'W`
- Avatar con frame decorativo (bordes con esquinas en color accent)
- Stats: ideas (∞), proyectos lanzados, en progreso

### `components/Marquee.tsx`
Banda horizontal con texto que se desplaza en loop. Contenido: `Frontend Lead ✦ Builder ✦ AI/Agentes ✦ Escritura ✦ Robótica ✦ Producto ✦ Buenos Aires ✦ Open Source`. Animación CSS pura con `@keyframes marquee`. Duplicá el contenido para que el loop sea seamless.

### `components/AppsGrid.tsx`
Grid 3 columnas con `gap: 1px` y fondo `var(--border)` (crea el efecto de líneas entre cards).

Cada `AppCard` tiene:
- Badge de estado (Live / En construcción / Archivo) con punto animado
- Nombre en Unbounded
- Descripción en IBM Plex Mono
- Tags con borde
- Barra superior en accent que aparece al hover con `transform: scaleX()`

Proyectos a incluir:
```ts
const apps = [
  {
    name: 'Angelos',
    status: 'En construcción',
    desc: 'App de newsletters con IA. Agrega, filtra y personaliza tu consumo de información.',
    tags: ['TypeScript', 'Node.js', 'Claude API', 'RSS'],
    url: null,
  },
  {
    name: 'Trucazo',
    status: 'Live',
    desc: 'Prototipo jugable del truco argentino con mecánicas de cartas tipo Balatro.',
    tags: ['Web', 'Juego', 'Truco'],
    url: null,
  },
  {
    name: 'AGSM',
    status: 'Archivo · 2023',
    desc: 'Archivo General Sergio Massa. Primera cuenta de Twitter con IA en una elección presidencial. 10k seguidores en una semana. NYT.',
    tags: ['IA', 'Twitter', 'Política'],
    url: null,
  },
]
```

Completá el grid con 3 placeholders que muestren `+` y el texto "Próximamente".

### `components/WritingList.tsx`
Lista de artículos. Cada item es un link con:
- Fecha a la izquierda
- Título en Playfair Display (font-style: italic)
- Publicación a la derecha
- Al hover, padding-left aumenta (efecto de deslizamiento)

Artículos a incluir:
```ts
const articles = [
  {
    title: 'Remilia, Milady y la nueva internet',
    date: '2024',
    pub: '421.news',
    url: 'https://www.cuatroveintiuno.com/remilia-milady-charlotte-fang-nueva-internet/',
  },
]
```

### `components/Newsletter.tsx`
Sección con fondo `var(--bg2)`. Grid de dos columnas:
- Izquierda: título en Playfair Display italic + descripción
- Derecha: input de email + botón "Suscribirse"

El botón usa Unbounded, fondo accent, color bg. Sin `<form>` — manejá el submit con `onClick`.

### `components/Contact.tsx`
Grid de dos columnas:
- Izquierda: texto grande en Playfair Display italic
- Derecha: lista de links (Twitter, Email, Instagram) con flecha `↗` que se mueve al hover

### `components/Footer.tsx`
Una línea. Izquierda: copyright. Derecha: "Hecho a mano · con ideas propias".

---

## Animaciones de scroll

Implementá un hook `useInView` (o usá `IntersectionObserver` directamente) para agregar la clase `visible` a elementos con clase `fade-in` cuando entran al viewport. Los elementos arrancan con `opacity: 0; transform: translateY(30px)` y transicionan a `opacity: 1; transform: translateY(0)`.

---

## Página principal `app/page.tsx`

Componé todos los componentes en este orden:

```tsx
<Nav />
<Hero />
<Marquee />
<section id="apps"><AppsGrid /></section>
<section id="writing"><WritingList /></section>
<Newsletter />
<section id="contact"><Contact /></section>
<Footer />
<Cursor />
```

---

## globals.css

Asegurate de incluir:

```css
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  overflow-x: hidden;
  cursor: none;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
```

---

## Efecto glitch en el nombre

El nombre "Giancarlo" lleva un efecto glitch al hover implementado con pseudo-elementos CSS. En el componente Hero, el elemento `<h1>` necesita el atributo `data-text="Giancarlo"`. Los pseudo-elementos `::before` y `::after` leen ese atributo con `content: attr(data-text)` y se animan con keyframes de translate en X/Y. Uno usa `clip-path` en el tercio superior, el otro en el tercio inferior. Los colores son `var(--accent2)` y `var(--accent)` respectivamente.

---

## Ruido de fondo

Agregá una capa de ruido sutil sobre todo el sitio. En el layout raíz, un `<div>` fixed con `z-index: 9997`, `pointer-events: none`, y un SVG de turbulencia como background-image con opacidad 0.04. Referencia:

```
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
```

---

## Responsive (mobile)

En pantallas menores a 768px:
- Hero: una sola columna, ocultar columna derecha
- AppsGrid: una sola columna
- WritingList: apilar fecha, título y publicación verticalmente
- Newsletter: una sola columna
- Contact: una sola columna
- Nav: ocultar links, mostrar solo logo

---

## Metadata SEO

En `app/layout.tsx` o `pages/_app.tsx`, configurá:

```ts
export const metadata = {
  title: 'Giancarlo Brusca',
  description: 'Frontend Lead, builder y escritor desde Buenos Aires.',
  openGraph: {
    title: 'Giancarlo Brusca',
    description: 'Frontend Lead, builder y escritor desde Buenos Aires.',
    url: 'https://giancarlobrusca.com',
  },
}
```

---

## Checklist final

- [ ] Fuentes cargan con `next/font` (sin parpadeo)
- [ ] Cursor personalizado funciona en desktop, desactivado en mobile
- [ ] Animaciones de scroll funcionan en todos los componentes
- [ ] El efecto glitch funciona solo en desktop
- [ ] El marquee hace loop sin saltos visibles
- [ ] El grid de apps muestra correctamente la separación entre cards
- [ ] Mobile responsive en todos los breakpoints
- [ ] No hay errores de hidratación (cuidado con el cursor — usá `useEffect`)
- [ ] Metadata correcta para SEO y redes sociales