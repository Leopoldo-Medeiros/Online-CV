# Architecture

## Stack

- **Astro 7** (static output) + **TypeScript** — no client-side framework; the whole site ships as HTML/CSS with zero JS runtime beyond what the browser needs for anchors and hover states.
- **Tailwind CSS 4** via `@tailwindcss/vite` — CSS-first config (`src/styles/global.css`'s `@theme` block), no `tailwind.config.js`.
- **Zod** — runtime schema for the CV content (see below).
- **@astrojs/sitemap** — generates `sitemap-index.xml` at build time from `astro.config.mjs`'s `site`.

## Content as data

`src/content/profile.ts` and `src/content/case-studies.ts` are the single source of truth for everything on the page — name, role, contact info, experience, tech stack, case studies. Components read from these files; nothing is hardcoded in markup.

`src/content/schema.ts` defines the Zod shape of that data. `scripts/validate-content.ts` parses both files against their schemas and exits non-zero on a mismatch — `npm run build` runs it first, so a malformed edit to the CV content fails the build instead of shipping broken markup.

To update the CV: edit `src/content/profile.ts` (or `case-studies.ts`), not the components.

## Directory layout

```
docs/                 architecture, standards, design system, SEO — this folder
scripts/
  validate-content.ts   content schema gate, runs before every build
src/
  content/               typed CV data + zod schemas (see above)
  components/
    ui/                  small reusable primitives (Button, TechPill, SectionHeading, ...)
    sections/            one component per homepage section (Hero, About, Work, ...)
  layouts/BaseLayout.astro  <head>, meta tags, JSON-LD, font preloads
  pages/index.astro        assembles the sections — the only route
  styles/global.css        Tailwind import + design tokens (@theme) + font-face rules
public/
  fonts/                 self-hosted variable woff2 fonts (no Google Fonts CDN at runtime)
  images/                headshot + OG image
  resume.pdf             CV download (added separately, not committed by default)
```

## Build & deploy

```bash
npm run dev      # astro dev, localhost:4321
npm run build    # validate-content.ts, then astro build -> dist/
npm run preview  # serve the dist/ build locally
npm run check    # astro check (type-checks .astro files)
npm run lint      # eslint .
```

Deploys to Vercel (`vercel.json`: `framework: astro`, static output from `dist/`). Custom domain via `CNAME`/Vercel dashboard, not client-side routing — this is a single static page, so there's no SPA fallback rule.

## Fonts

Bricolage Grotesque, Hanken Grotesk and JetBrains Mono are variable fonts, self-hosted as single `woff2` files per family under `public/fonts/` (downloaded once from Google Fonts' `gstatic` CDN, not loaded from a CDN at runtime). Each `@font-face` in `global.css` declares a `font-weight` range instead of one `@font-face` per static weight, since the variable axis covers it.
