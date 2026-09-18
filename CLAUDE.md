# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Leopoldo Medeiros' personal portfolio — a single-page, dark-themed, statically-generated site for a backend/observability engineer. Built with Astro 7 (static output) + TypeScript + Tailwind CSS 4, no client-side framework. Deployed to Vercel on a custom domain (see `vercel.json`, `CNAME`).

This replaced an earlier plain-HTML "online CV" version. If you see references to `live-server`, a single `public/index.html`, or Tailwind CLI watch scripts in git history or old docs, that's the previous version — the current stack is Astro.

## Commands

```bash
npm run dev      # astro dev — localhost:4321
npm run build    # runs scripts/validate-content.ts, then astro build -> dist/
npm run preview  # serve the dist/ build locally
npm run check     # astro check (type-checks .astro files)
npm run lint      # eslint .
```

There is no test suite. `npm run build` is the closest thing to one — it fails if the CV content doesn't match its Zod schema, or if TypeScript/Astro compilation fails.

## Architecture

Full detail lives in `docs/` — read it before making non-trivial changes:

- [`docs/architecture.md`](docs/architecture.md) — stack, directory layout, build/deploy, fonts.
- [`docs/coding_standards.md`](docs/coding_standards.md) — conventions for components, content edits, styling.
- [`docs/design_system.md`](docs/design_system.md) — the "Ember" visual language and its hard rules (one accent color, no gradients/glassmorphism, hairlines not shadows, etc.) — **read this before touching any visual styling**, it's there specifically to keep the site from drifting toward a generic AI-template look.
- [`docs/seo_guidelines.md`](docs/seo_guidelines.md) — meta tags, structured data, sitemap, performance budget.

The one thing worth restating here: **content is data.** `src/content/profile.ts` and `src/content/case-studies.ts` are the single source of truth for every piece of CV content (name, experience, tech stack, case studies), typed against `src/content/schema.ts` and validated by `scripts/validate-content.ts` on every build. Section components (`src/components/sections/`) render that data — they should not contain hardcoded CV facts. If a task is "change what it says," edit the content files; if it's "change how it looks," edit the components/design tokens.

## Known issue

`.env` (containing a `VERCEL_TOKEN`) is committed and tracked in git history. It's now gitignored going forward, but the historical commit still exposes it — treat that token as already compromised; rotate it, don't just remove the file.
