# Leopoldo Medeiros — Portfolio

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Leopoldo-Medeiros/Online-CV/blob/main/LICENSE)

Personal portfolio for Leopoldo Medeiros — backend & observability engineer. A single-page, dark-themed, statically-generated site built with Astro, TypeScript and Tailwind CSS 4. No client-side framework, no CMS — content is a typed data file validated at build time.

## Stack

- [Astro 7](https://astro.build) (static output)
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Zod (content schema validation)
- Self-hosted variable fonts (Bricolage Grotesque, Hanken Grotesk, JetBrains Mono)

See [`docs/architecture.md`](docs/architecture.md) for the full breakdown, [`docs/design_system.md`](docs/design_system.md) for the visual language, and [`docs/coding_standards.md`](docs/coding_standards.md) before making changes.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```bash
npm run build     # validates content, then builds to dist/
npm run preview   # serves the production build locally
npm run check     # astro check (type-checking)
npm run lint       # eslint .
```

## Updating content

All CV content — name, summary, experience, tech stack, case studies — lives in `src/content/profile.ts` and `src/content/case-studies.ts`, typed against `src/content/schema.ts`. Edit those files, not the components; `npm run build` fails loudly if the shape breaks.

## Deployment

Deployed on Vercel as a static site (see `vercel.json`), on a custom domain configured via `CNAME`.

## License

MIT — see [LICENSE](LICENSE).

---

**Leopoldo Medeiros** — [LinkedIn](https://www.linkedin.com/in/leopoldomedeiros/) · [GitHub](https://github.com/Leopoldo-Medeiros) · [Email](mailto:leopoldof.medeiros@gmail.com)
