# LandingHub — Landing page SaaS

Landing page premium para **LandingHub**, un producto SaaS de páginas web por suscripción mensual. Construido con Next.js 15, React 19, TypeScript, Tailwind CSS v4 y Framer Motion.

## Editar el nombre de marca

Todo el texto de marca vive en un solo archivo: `src/lib/site-config.ts`. Cambia `name`, `whatsapp`, `email`, etc. ahí y se actualiza en toda la página (navbar, footer, metadatos SEO, formulario de contacto).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build de producción

```bash
npm run build
```

Esto genera un sitio 100% estático en la carpeta `out/` (gracias a `output: "export"` en `next.config.ts`), listo para cualquier hosting estático.

## Desplegar en Netlify

**Opción A — Netlify UI / Git**
1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En Netlify: "Add new site" → "Import an existing project" → conecta el repo.
3. Netlify detecta automáticamente `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy 🚀

**Opción B — Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

**Dominio propio:** una vez desplegado, conecta tu dominio desde Netlify → Domain settings → Add a domain, y actualiza los DNS con tu proveedor (Namecheap, GoDaddy, Hostinger, etc.).

## Formulario de contacto

El formulario de contacto no requiere backend: arma un mensaje prellenado y lo abre directo en WhatsApp usando el número configurado en `siteConfig.whatsapp`. Cambia ese número antes de publicar.

## Estructura

```
src/
  app/            # layout, page, SEO (metadata, sitemap, robots)
  components/     # todas las secciones de la landing
  lib/            # utilidades y configuración de marca
```

## Stack

- Next.js 15 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
