# SEO guidelines

## Per-page requirements

Every page (currently just `/`) must set, via `BaseLayout`'s props:

- A unique `<title>` — defaults to `"{name} — {title}"` from `profile.ts`.
- A `<meta name="description">` — defaults to `profile.summary`.
- A `<link rel="canonical">` — derived automatically from `Astro.url` + `astro.config.mjs`'s `site`.

## Social previews

`BaseLayout.astro` emits Open Graph and Twitter card tags pointing at `/images/og-cover.png` (1200×630). If the headline or positioning in `profile.ts` changes meaningfully, regenerate that image so link previews stay accurate — it's a static asset, not generated at build time.

## Structured data

`BaseLayout.astro` embeds a `schema.org/Person` JSON-LD block built from `profile.ts` (name, job title, email, `sameAs` for LinkedIn/GitHub, home address). Keep it in sync with the visible contact section — don't let structured data claim something the page doesn't say.

## Sitemap & robots

- `@astrojs/sitemap` generates `sitemap-index.xml` automatically from `astro.config.mjs`'s `site` value at build time. If the production domain changes, update `site` there — nowhere else.
- `public/robots.txt` allows all crawlers and points at the sitemap. Update the `Sitemap:` line if the domain changes.

## Performance budget

This is a static, JS-framework-free page — there's no excuse for a bad score. Before shipping a change, `npm run build && npm run preview` and check:

- Lighthouse Performance / Accessibility / Best Practices / SEO all ≥ 95.
- No layout shift from font loading (fonts are preloaded and self-hosted — don't remove the `<link rel="preload">` tags in `BaseLayout.astro` without checking CLS again).
- Images stay compressed; don't add a new photo or screenshot without running it through compression first.
