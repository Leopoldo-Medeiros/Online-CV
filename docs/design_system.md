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
- Gradient text, gradient backgrounds, glassmorphism, purple→pink gradients.
- More than one accent color at a time.
- Soft drop shadows — use `border-border` hairlines instead.
- Fully rounded ("pill") buttons or fully rounded cards (the circular hero portrait/orbit ring is the one deliberate exception — a focal element, not a button or card).
- Three identical cards in a row — vary column widths, break the grid.
- Fake testimonials, fake client logos, fake stats.
- A contact form that doesn't actually send anywhere — use real `mailto:`/`tel:` links.
- Rigid straight-line "network diagram" backgrounds (dots joined into hard triangular meshes). Tried and rejected during design review — reads as busy and mechanical rather than calm. See "Background texture" below for what to use instead.

**Required:**
- Left-aligned, asymmetric layout — resist centering everything.
- Every metric shown must be real and traceable to `src/content/profile.ts` — no invented numbers.
- Section numbering (`01 —`, `02 —`, ...) via `SectionHeading`, consistently.
- Copy in first person, specific and technical — never "passionate about crafting beautiful experiences."
- Subtle grain texture on `body` (already in `global.css`) — a deliberate, very low-opacity detail, not decoration.

## Background texture

Two layers, both intentionally quiet:
1. **Grain** (`body::before` in `global.css`) — a fractal-noise overlay, `opacity: 0.035`, `mix-blend-mode: overlay`. Breaks up flat color; never touch its opacity without checking it's still barely-there.
2. **Particle field** (`body`'s own `background-image` in `global.css`) — a repeating SVG tile of sparse, irregularly-placed soft dots (varied size/opacity, a couple with a gentle blur for depth). This is the *only* ambient background pattern — it reads as quiet atmosphere, not a diagram. If a section needs to gesture at "connected systems," use a single soft, gently-curved line (see `SectionConnector.astro` for the pattern: one low-opacity curve, one short ember-highlighted segment near its end, one dot) — never multiple straight segments meeting at hard angles.

## When adding a new section

1. Does it need a new accent color or gradient to look "finished"? If yes, the layout is the problem — fix spacing/hierarchy instead.
2. Would it read the same with the name swapped to a template placeholder? If yes, make the copy more specific.
3. Check it against the four Dribbble references this design was benchmarked against (kept in `docs/references/` if added) — it should feel like it belongs, without copying any one of them directly.
