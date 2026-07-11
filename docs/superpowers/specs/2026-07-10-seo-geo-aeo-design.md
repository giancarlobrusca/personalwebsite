# SEO / GEO / AEO — Diseño de implementación

**Fecha:** 2026-07-10
**Sitio:** giancarlobrusca.com (Next.js 14, App Router)
**Objetivo:** Dejar la web perfectamente optimizada para buscadores (SEO), motores generativos (GEO) y motores de respuesta (AEO).

## Contexto

Sitio de una sola página: `Nav + Hero + Bio + Footer + Cursor`. Contenido en español sobre Giancarlo Brusca (Frontend Lead, Buenos Aires). Renderiza SSR aunque los componentes sean `"use client"`.

## Auditoría — estado inicial

| Área | Estado | Detalle |
|------|--------|---------|
| `lang`, `<h1>` único, `alt` | ✅ | OK |
| Metadata básica | 🟡 | Falta `metadataBase`, canonical, OG `type`/`image`/`locale`, Twitter Card |
| Favicon | 🟡 | Ruta sin `/` inicial |
| `robots.txt` | ❌ | No existe |
| `sitemap.xml` | ❌ | No existe |
| JSON-LD | ❌ | Cero structured data — hueco crítico de GEO/AEO |
| Imagen OpenGraph | ❌ | Solo favicon |
| Bio larga en el DOM | ❌ | La versión larga no se renderiza hasta togglear → invisible a crawlers/IA |
| Web manifest / theme-color | ❌ | No existe |
| Componentes muertos | ℹ️ | `Marquee`, `Newsletter`, `WritingList`, `AppsGrid`, `Contact` sin uso |

## Decisiones aprobadas

1. **Bio:** renderizar ambas versiones siempre en el DOM; el toggle TLDR sólo cambia la visibilidad. UX idéntica, HTML completo para crawlers.
2. **Imagen OG:** generada dinámicamente con `next/og`.

## Diseño

### 1. Metadata completa (`src/app/layout.js`)
- `metadataBase: new URL("https://giancarlobrusca.com")`
- `alternates.canonical: "/"`
- `openGraph`: `type: "profile"`, `locale: "es_AR"`, `siteName`, `images` (la OG generada), `url`
- `twitter`: `card: "summary_large_image"`, `creator: "@giancarlobrusca"`, `title`, `description`, `images`
- `authors`, `creator`, `keywords` relevantes
- `icons.icon: "/favicongoku.png"` (fix del slash) + `apple`
- `robots`: index/follow explícito

### 2. JSON-LD `Person` + `WebSite` (núcleo GEO/AEO)
Componente server que inyecta `<script type="application/ld+json">` en el layout:
- `@type: Person` — `name`, `alternateName` ("gian"), `jobTitle`, `worksFor` (Urbetrack), `alumniOf` (Escuela Da Vinci), `knowsAbout` (React, Frontend, IA, Golang, Python…), `description` rica, `image`, `url`, `email`, `address` (Buenos Aires, AR)
- `sameAs`: Twitter/X, SLA, 421.news y demás perfiles/proyectos
- `@type: WebSite` — `name`, `url`, `inLanguage: es`, `author` → Person

### 3. `robots.js` + `sitemap.js` (App Router nativo)
- `robots.js`: `allow: "/"`, `host` y `sitemap` apuntando al dominio
- `sitemap.js`: entrada de la home con `lastModified`, `changeFrequency`, `priority`

### 4. Imagen OpenGraph dinámica (`src/app/opengraph-image.js`)
- `next/og` `ImageResponse` 1200×630
- Fondo oscuro (`#0a0a08`), acento lima (`#c8f04a`), nombre + rol + ubicación
- Reutilizada también como `twitter-image`

### 5. Web manifest (`src/app/manifest.js`)
- `name`, `short_name`, `theme_color: "#0a0a08"`, `background_color`, `icons`
- `theme-color` vía metadata `viewport`

### 6. Fix bio invisible (`src/components/Bio.js`)
- Renderizar `<Corta>` y `<Larga>` siempre montadas
- Toggle cambia visibilidad (no montaje); la larga queda en el HTML aunque esté colapsada
- Mantener la transición visual lo más parecida posible

## Testing / verificación
- `next build` sin errores ni warnings de lint
- Ver HTML servido: `curl` a la home (o build output) contiene el JSON-LD y el texto de la bio larga
- Validar rutas `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/manifest.webmanifest` que Next genera
- Chequear metadata con inspección del `<head>`

## Fuera de alcance
- No se borran los componentes muertos (no afectan SEO; se menciona como nota).
- No se agrega blog / rutas nuevas (el sitio sigue siendo single-page).
