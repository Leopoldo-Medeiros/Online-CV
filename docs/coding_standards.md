# Coding standards

## General

- TypeScript strict mode (`astro/tsconfigs/strict`). Don't add `any` to work around a type error — fix the type.
- `@/*` resolves to `src/*` (see `tsconfig.json`). Use it for anything outside the current directory; use relative imports for siblings.
- No client-side JavaScript framework. If a section ever needs interactivity beyond CSS (`:hover`, `:target`), reach for a `<script>` tag scoped to that component before reaching for a framework.

## Components

- `src/components/ui/` — small, content-agnostic primitives that take props and render markup. No imports from `src/content/` here.
- `src/components/sections/` — one component per homepage section. These import from `src/content/` and compose `ui/` primitives. A section owns its own `<section id="...">` wrapper, top/bottom border, and vertical padding — don't rely on the parent page for spacing.
- Keep the numbered-section convention (`01 —`, `02 —`, ...) driven by `SectionHeading`'s `index` prop, not hardcoded in each section — it's the visual language of the design system (see `design_system.md`).

## Content changes

- CV content lives in `src/content/profile.ts` and `case-studies.ts`, typed against `schema.ts`. Edit the data, not the section components, when the change is "what it says" rather than "how it looks."
- Run `node scripts/validate-content.ts` (or `npm run build`) after editing content — it's the only thing standing between a typo and a broken build.
- Case studies are reframed real work, not invented projects. If you add one, it must trace back to a real highlight in `profile.ts`.

## Styling

- Tailwind utility classes in markup; no new CSS files. If a value repeats more than twice, promote it to a token in `global.css`'s `@theme` block instead of copy-pasting the arbitrary value.
- Respect the design system's hard rules in `docs/design_system.md` — most importantly: one accent color, no gradients, no glassmorphism, hairlines instead of shadows.

## Before opening a PR

```bash
npm run lint
npm run check
npm run build
```
