# Design system — "Ember"

Direction explored and chosen via Stitch (two options generated: "Ember" — warm/orange — and "Signal" — cool/violet; Ember was picked). The concept: the site as a telemetry panel — mono labels, numbered sections, real metrics, hairlines instead of shadows. This is deliberately the opposite of a generic AI-generated SaaS template.

## Tokens (`src/styles/global.css`, `@theme` block)

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0b0b0c` | Page background — near-black, never pure black |
| `--color-surface` | `#14130f` | Raised surfaces, if ever needed |
| `--color-border` / `--color-border-strong` | `rgba(255,255,255,.09)` / `.16` | Hairlines — replace shadows entirely |
| `--color-ink` | `#f5f1ec` | Primary text |
| `--color-muted` | `#a29a8d` | Secondary text |
| `--color-ember` | `#e4572e` | **The only accent color.** CTAs, active states, one highlighted word per headline |
| `--font-display` | Bricolage Grotesque (variable) | Headlines only |
| `--font-body` | Hanken Grotesk (variable) | Body copy |
| `--font-mono` | JetBrains Mono (variable) | Labels, tags, metrics, section numbers — never body copy |
| `--radius-sm` | `4px` | Subtle roundness on buttons/tags/cards — never pill-shaped |

## Hard rules (treat as lint for design review)

**Forbidden:**
- Emoji anywhere in copy or UI.
- Gradient text, glassmorphism, purple→pink or multi-hue gradients. Gradient *backgrounds* have exactly one blessed exception — see "The hero portrait" below; don't add a second one elsewhere without checking first.
- More than one accent color at a time in *our own* UI (buttons, links, active states, headings). Third-party company logos in the "worked with" strip keep their real brand colors — see below — that's attribution, not a design choice, and doesn't count against this rule.
- Soft drop shadows — use `border-border` hairlines instead.
- Fully rounded ("pill") buttons or fully rounded cards (the hero's glow orb is the deliberate exception — a focal element around the portrait, not a button or card).
- Three identical cards in a row — vary column widths, break the grid.
- Fake testimonials, fake client logos, fake stats.
- A contact form that doesn't actually send anywhere — use real `mailto:`/`tel:` links.
- Decorative "connected systems" line/dot motifs (network diagrams, curved signal-sweep connectors between sections). Tried a few variations during design review and all were rejected — see "Background texture" below. The page background is just flat `--color-bg` + grain; keep it that way.

**Required:**
- Left-aligned, asymmetric layout — resist centering everything.
- Every metric shown must be real and traceable to `src/content/profile.ts` — no invented numbers.
- Section numbering (`01 —`, `02 —`, ...) via `SectionHeading`, consistently.
- Copy in first person, specific and technical — never "passionate about crafting beautiful experiences."
- Body paragraphs (summary, case-study narrative, experience highlights, contact intro) are `text-justify` — a deliberate typographic choice, not a default. Keep it on multi-line prose; don't apply it to short labels, tags, or single-line text.
- Subtle grain texture on `body` (already in `global.css`) — a deliberate, very low-opacity detail, not decoration.

## The hero portrait

`Hero.astro` uses a background-removed cutout (`public/images/leopoldo-cutout.webp`, RGBA/WebP, alpha matting done locally with `rembg`) rather than a framed photo — it floats directly on the page background, edge-masked to a soft fade at the bottom (`.hero-cutout`'s `mask-image` in the component) instead of a hard crop line. Behind it sits a blurred radial-gradient "glow orb" (`.glow-orb`, single ember hue, `blur-2xl`) — **this is the one deliberate exception to the no-gradient rule**, chosen after explicitly weighing it against a flat solid-circle alternative during design review. Keep it single-hue (ember only, no second color, no rainbow) and keep the blur soft enough that it reads as ambient light, not a shape with a visible edge.

If you replace the source photo, redo the cutout the same way (`rembg` locally, not a new manual crop) and re-check the mask fade and glow sizing against the new image's proportions.

## The "worked with" logo strip

`Hero.astro` closes with a row of real employer/institution logos (`public/images/logos/`), each in its own hairline-bordered card — a dark card (`bg-surface`) for logos designed for dark backgrounds, a white card (`bg-white`) for logos that only exist on light backgrounds. This is the one place logos keep their actual brand colors instead of our single-accent palette (see the Forbidden list above) — it's factual attribution ("I worked here"), not a design flourish, so don't recolor or monochrome them.

Rules for this strip specifically:
- **Only real, sourced logos** — pulled from each company's own site or official media kit (New Relic's came from their public media-assets page), never fabricated or reconstructed from memory. If a company has no usable isolated logo asset (e.g. Syncro Web's mark only exists overlaid on a busy photo), render its name as plain styled text instead of faking a logo image — don't invent a wordmark.
- Prefer each brand's dark-mode/reversed logo variant when one exists (most companies publish one) so it sits on our `bg-surface` card without needing a white background at all.
- Every entry must correspond to a real line in `src/content/profile.ts`'s `experience` — don't add a logo for a company that isn't listed there.

## Background texture

The page background is flat `--color-bg` plus a fractal-noise grain overlay (`body::before` in `global.css`, `opacity: 0.035`, `mix-blend-mode: overlay`) — nothing else. Several ambient background treatments were tried and rejected during design review; don't reintroduce any of them without checking first:

- A full-page dot/particle field — read as noise, not atmosphere, even sparse and low-opacity.
- Straight-line "network diagram" backgrounds (dots joined into hard triangular meshes) — busy and mechanical.
- A soft curved "signal sweep" connector line between sections — decided the page reads cleaner with no connective line motif at all once the rest of the content carries the "systems" theme (case studies, tech stack, metrics).

## When adding a new section

1. Does it need a new accent color, gradient, or background pattern to look "finished"? If yes, the layout is the problem — fix spacing/hierarchy instead.
2. Would it read the same with the name swapped to a template placeholder? If yes, make the copy more specific.
3. Check it against the Dribbble references this design was benchmarked against — it should feel like it belongs, without copying any one of them directly.
