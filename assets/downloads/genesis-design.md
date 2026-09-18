# Genesis Consulting — Style Reference
> near-black forest floor with a single working green. Green-tinted neutrals all the way down, geometric sans set tight, and one brand green that swaps hue between themes so it never fails contrast.

**Theme:** dark

Genesis Consulting speaks in a measured, technical voice: a green-tinted near-black (#030903) carries almost every surface — page, sections, cards, nav — while a single Genesis Green (#46A239) does the functional work on CTAs, links, active states and chart series. The system's defining move is that **the brand green is not one colour**: it resolves `#46A239` on dark surfaces and `#1B4A14` on light ones, because a single green cannot clear WCAG AA on both. Every neutral in the ramp is green-tinted — there is no true gray anywhere, and substituting one visibly de-brands the page. Type is Plus Jakarta Sans throughout, tracked tight and negative at display sizes, with one deliberately wide-tracked label style for eyebrows. Corners are modest (4/8/16px) rather than pill-shaped; the only fully-round shapes are badges and avatars. Depth is tonal, not shadowed: on dark surfaces cards step up from `#030903` to `#242824` and cast nothing at all.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Genesis Green | `#46a239` | `--color-green-500` | The brand green on **dark** surfaces — Pantone 362 C. Primary CTA fills, links, focus rings, active states, chart series 1. 6.21:1 on the page surface. Never use it as text on a light background (2.87:1 — fails) |
| Genesis Deep Green | `#1b4a14` | `--color-green-900` | The brand green on **light** surfaces — Pantone 350 C. Same semantic role as Genesis Green, opposite theme. 9.16:1 on white, the strongest light-surface performer in the palette. This is the green that HTML email must use |
| Accent Neon | `#8fc05d` | `--color-green-neon-400` | Decorative highlight and chart series 2. **Fill and large-graphic only** — 1.89:1 on light means it is deliberately barred from text. Never promote it to a CTA colour |
| Neon Deep | `#578b23` | `--color-green-neon-700` | Light-theme counterpart of Accent Neon, used only in the data-viz ramp where series 2 needs to survive a white background |
| Mist | `#edf3ed` | `--color-neutral-0` | Primary text on dark, page canvas on light. Green-tinted off-white, not `#ffffff` — the tint is what keeps it on-brand |
| Sage | `#8f9c8f` | `--color-neutral-400` | Secondary text on dark. Passes AA on **both** the page (7.01:1) and raised cards (5.21:1), which is why it exists — its predecessor failed on cards |
| Moss | `#798679` | `--color-neutral-500` | Disabled text and hairline borders on dark. Permitted below 4.5:1 only under the WCAG 1.4.3 inactive-control exemption |
| Slate Moss | `#3d433d` | `--color-neutral-700` | Secondary text on light, subtle borders on dark. The mid-tone that recedes without going gray |
| Raised | `#242824` | `--color-neutral-800` | Card and panel surface on dark. The single tonal step that replaces shadow in the dark theme |
| Forest Black | `#030903` | `--color-neutral-950` | The dominant surface. Page background, dark sections, overlay scrim, and primary text on light. Green-tinted black, never `#000000` |
| Paper | `#ffffff` | `--color-white-pure` | Raised card surface in the light theme only, and the safest HTML-email background |
| True Black | `#000000` | `--color-black-pure` | Reserved exclusively for the monochrome logo plate. Exists for single-colour reproduction — print, engraving — not for contrast |
| Error | `#f4776a` / `#b3261e` | `--color-red-400` / `--color-red-700` | Destructive and failure states. Dark / light pair |
| Warning | `#d69323` / `#8a5314` | `--color-amber-500` / `--color-amber-800` | Caution and near-limit states, plus chart series 3 |
| Success | `#4bc37d` / `#256f44` | `--color-emerald-400` / `--color-emerald-800` | Confirmation and pass states. Deliberately **not** the brand green — success must not read as "branded" |
| Info | `#5ba0fb` / `#0f5abd` | `--color-blue-400` / `--color-blue-700` | Neutral information, plus chart series 4 |

### Semantic mapping — this is the layer you actually build against

Never bind a primitive directly. Every value below resolves per theme.

| Semantic token | Dark | Light | Notes |
|---|---|---|---|
| `--surface-page` | `#030903` | `#edf3ed` | The canvas |
| `--surface-raised` | `#242824` | `#ffffff` | Cards, panels, menus |
| `--surface-inverse` | `#edf3ed` | `#030903` | Inverted blocks |
| `--text-primary` | `#edf3ed` | `#030903` | 17.85:1 both themes |
| `--text-secondary` | `#8f9c8f` | `#3d433d` | Safe on page **and** card |
| `--text-on-brand` | `#030903` | `#edf3ed` | **Polarity inverts** — see Don'ts |
| `--brand-primary` | `#46a239` | `#1b4a14` | The core theme-aware split |
| `--brand-accent` | `#8fc05d` | `#8fc05d` | Same both themes; no text use |
| `--border-default` | `#798679` | `#3d433d` | Meaningful borders |
| `--border-subtle` | `#3d433d` | `#798679` | Decorative hairlines only |
| `--border-focus` | `#46a239` | `#1b4a14` | 2px ring, never a glow |
| `--overlay-scrim` | `#030903` | `#030903` | **Identical by design** — a scrim must not invert |

## Tokens — Typography

### Plus Jakarta Sans — the entire system · `--font-sans`
- **Substitute:** Plus Jakarta Sans (native Google Fonts)
- **Weights:** 400, 600, 700
- **Sizes:** 14px, 16px, 20px, 24px, 32px, 48px, 76px
- **Line height:** 120%, 130%, 140%, 160%
- **Letter spacing:** -2px at 48px, -1px at 76px, 0 at 16–32px, +2px at 24px (heading/3), +20px at 14px (label/tag)
- **Role:** Everything. Display, headings, body, UI, labels and captions all come from one family — the system has no secondary face. Geometric, slightly rounded, and open enough to hold up as light text on a near-black surface, which is where most of this product lives.

### Space Mono — code and the tag eyebrow · `--font-mono`
- **Substitute:** Space Mono (native Google Fonts)
- **Weights:** 400, 700
- **Sizes:** 14px
- **Line height:** 140% (blocks), 160% (inline)
- **Letter spacing:** 0
- **Role:** Two jobs, and only two. **Code** — code blocks, inline token names, property values, terminal output. **The tag eyebrow** — `label/tag`, the wide-tracked uppercase line that sits above a headline. Set at 14px rather than 16px because Space Mono's larger x-height would read *bigger* than the surrounding 16px body at matching px. Its geometric, slightly retro forms contrast deliberately with Plus Jakarta Sans' humanist neutrality: on a dark surface, a difference in letterform separates both code and the eyebrow from ordinary UI faster than a difference in colour does. Everything outside those two jobs stays in Plus Jakarta Sans — never prose, never body UI labels, never brand voice.

### Sukhumvit Set — legacy and print only · `--font-legacy-print`
- **Substitute:** none — do not load on the web
- **Weights:** 300, 500, 700
- **Role:** The face declared in the printed brand guidelines and used in the logo wordmark. It is an Apple system font: absent from Figma's library and not licensable for web or email. It appears in this system **only** as outlined vector inside the logo. Never set live text in it, never add it to a font stack.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Weight | Token |
|------|------|-------------|----------------|--------|-------|
| display | 76px | 130% | -1px | 700 | `--text-display` |
| heading-1 | 48px | 120% | -2px | 700 | `--text-heading-1` |
| heading-2 | 32px | 120% | 0 | 700 | `--text-heading-2` |
| heading-3 | 24px | 120% | +2px | 600 | `--text-heading-3` |
| heading-4 | 20px | 140% | 0 | 700 | `--text-heading-4` |
| body | 16px | 160% | 0 | 400 | `--text-body` |
| body-strong | 16px | 160% | 0 | 700 | `--text-body-strong` |
| body-link | 16px | 160% | 0 | 400 underline | `--text-body-link` |
| body-sm | 14px | 160% | 0 | 400 | `--text-body-sm` |
| label-tag | 14px | 160% | **+20px** | 400 · UPPERCASE · **mono** | `--text-label-tag` |
| code-block | 14px | 140% | 0 | 400 | `--text-code-block` |
| code-inline | 14px | 160% | 0 | 400 | `--text-code-inline` |
| code-block-strong | 14px | 140% | 0 | 700 | `--text-code-block-strong` |

Two values in this scale look like mistakes and are not: `heading-3` tracks **positive** +2px where every other heading tracks negative or zero, and `label-tag` tracks **+20px** — an extremely wide eyebrow style. Both are confirmed intentional. Do not normalise them.

`label-tag` is also the one non-code style set in **Space Mono**, in **uppercase** — the eyebrow is deliberately a different letterform from the headline it sits above.

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable — component-internal spacing is tight (4–32px), section rhythm is generous (64–200px)

### Spacing Scale

| Name | Value | Token | Typical use |
|------|-------|-------|-------------|
| 2xs | 4px | `--spacing-2xs` | Icon-to-label gap, badge padding |
| xs | 8px | `--spacing-xs` | Button gap, tight stacks |
| sm | 16px | `--spacing-sm` | Card inner gap, form field spacing |
| sm-md | 24px | `--spacing-sm-md` | Card padding, grid gutter |
| md | 32px | `--spacing-md` | Section inner padding, column gap |
| lg | 64px | `--spacing-lg` | Between content blocks |
| xl | 80px | `--spacing-xl` | Section separation |
| 2xl | 120px | `--spacing-2xl` | Major section rhythm |
| 3xl | 200px | `--spacing-3xl` | Hero breathing room, page-level pauses |

The scale doubles cleanly to 64, then goes irregular (80 · 120 · 200). That tail is **section rhythm**, not component spacing — never reach for `3xl` inside a card.

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| none | 0 | `--radius-none` |
| checkbox | 4px | `--radius-sm` |
| button | 8px | `--radius-button` |
| input | 8px | `--radius-input` |
| card | 16px | `--radius-card` |
| modal | 16px | `--radius-modal` |
| badge / avatar | 9999px | `--radius-full` |

Corners are modest by default. Only badges, tags, avatars and spinners go fully round — buttons are 8px, **not** pills.

### Shadows

| Name | Value | Token |
|------|-------|-------|
| 0 | `none` | `--elevation-0` |
| 1 | `0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10)` | `--elevation-1` |
| 2 | `0 2px 4px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.10)` | `--elevation-2` |
| 3 | `0 4px 8px rgba(0,0,0,0.08), 0 6px 16px rgba(0,0,0,0.12)` | `--elevation-3` |
| 4 | `0 8px 16px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.14)` | `--elevation-4` |
| 5 | `0 16px 32px rgba(0,0,0,0.10), 0 24px 48px rgba(0,0,0,0.16)` | `--elevation-5` |

**Elevation is per-theme.** The ramp above applies to the **light** theme only. In the dark theme every surface holds at `elevation-0` and depth comes from the tonal step `#030903 → #242824`, because a black shadow on a near-black page is invisible.

### Motion

| Token | Value |
|-------|-------|
| `--duration-instant` | 0ms |
| `--duration-fast` | 150ms |
| `--duration-base` | 250ms |
| `--duration-slow` | 400ms |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

Every motion pair ships a `prefers-reduced-motion` counterpart (WCAG 2.3.3). The AI-processing pulse is the one continuous animation in the system and must respect it.

### Layout

- **Page max-width:** 1200px
- **Page gutter:** 40px
- **Breakpoints:** 320 (mobile) · 800 (tablet) · 1280 (desktop)
- **Grid:** 12 columns, 24px gap
- **Sidebar width:** 280px
- **Modal max-width:** 560px
- **Section gap:** 80–120px
- **Card padding:** 24px
- **Control heights:** 32 / 40 / 48px
- **Icon sizes:** 16 / 24 / 32px

## Components

### Primary Button
**Role:** The main action on any surface — hero CTA, form submit, "Aprovar e exportar".

`--brand-primary` fill, `--text-on-brand` label, 8px radius, 40px height, 24px horizontal padding, Plus Jakarta Sans 700 at 16px. No shadow. Maximum one per container. **The label colour inverts with the theme** — near-black on green in dark, off-white on deep green in light. Hardcoding white here produces 2.87:1 and fails.

### Secondary / Tertiary / Ghost Button
**Role:** Alternative, low-priority and in-table actions.

Secondary is a tonal fill on `--surface-raised` with `--text-primary`. Tertiary is transparent with a 1px `--border-default` outline. Ghost is transparent with no border, for dense tables and lists. All share the 8px radius and 40px height. Pair a filled primary with a text link — never two filled buttons side by side.

### Text Link
**Role:** Inline navigation with no side effect.

`--brand-primary` at 16px/400 with an underline. On dark this is `#46A239` on `#030903` — 6.21:1. In body copy the underline is mandatory, not decorative: colour alone is not a sufficient affordance.

### Top Navigation
**Role:** Persistent header — logo, section menus, language, primary CTA.

`--surface-page` background, full-bleed, with the content row constrained to 1200px. Logo left (combined/horizontal lockup, 32px minimum), menu triggers centre, CTA right. Menu panels open as `--surface-raised` cards at 200/280/360px with 16px radius. Below 768px the lockup swaps to the monogram and the menus collapse.

### Card
**Role:** The workhorse content container — service grids, result lists, dashboards.

`--surface-raised` fill, 16px radius, 24px padding, `elevation-0` in dark and `elevation-1..2` in light. The Outlined variant adds a 1px `--border-default` for dense grids where shadow would be noise. Interactive cards get a 2px `--border-focus` ring on keyboard focus — a stroke, never a glow, so it survives forced-colours mode.

### Bento Grid
**Role:** Mixed-size feature grid for landing and dashboard surfaces.

2- or 3-column arrangement of cards at varying spans, 24px gap, 1200px container. Every child must be width-flexible; a fixed-width child inside a flexible grid is the single most common breakage in this system.

### Input & Form Field
**Role:** Text entry with label, helper text and error state.

8px radius, 1px `--border-default`, 40px height, 16px horizontal padding. Focus swaps the border to 2px `--border-focus`. The error state pairs `--status-error` with an icon and a message — never colour alone.

### Badge & Tag
**Role:** Status labels and category chips.

9999px radius, 4px vertical / 8px horizontal padding, 14px text. Status badges always carry a glyph alongside the colour. A badge is never an action — if it is clickable, it is a button.

### Alert & Toast
**Role:** Inline and transient feedback.

`--surface-raised` with a 1px status-coloured border and a leading status icon. 16px radius, 16px padding. Toasts enter with `--duration-base` and `--ease-out`, and hold position rather than sliding under a reduced-motion preference.

### Data Table
**Role:** Dense record lists — campaigns, assets, approvals.

Header row in `label-tag`… **except** at narrow column widths, where +20px tracking wraps headers letter-by-letter; drop to `body-sm` 600 there. Row hover is an 8% tint, not a fill swap. Columns are proportional (`flex-grow`), never fixed pixel widths.

### Dashboard Chart
**Role:** Line, bar and donut visualisations.

Series use the 5-colour `data-viz` ramp in order. Adjacent donut segments need a `--surface-page` separator stroke, and the legend must name each series **with its value** — the ramp is not fully colour-blind-safe, and the label is what carries the meaning.

### AI Trust Marker
**Role:** The brand's signature governance element — marks AI-generated or AI-adapted content.

A small pill carrying an icon and a word: *Sugerido por IA*, *Adaptado por IA*, *Autoria humana*, *Revisado por IA*. Never colour-alone; the word is load-bearing. This appears on every AI-touched artefact and is the visible face of the brand's transparency commitment — treat it as non-negotiable chrome, not decoration.

### Compliance & Contrast Badge
**Role:** Inline validation feedback while authoring.

Compliance shows brand/token conformance; Contrast prints a live WCAG ratio and its level (e.g. `9,16:1 AA`). Pass the ratio **only** — the component appends the level itself.

### Code Block
**Role:** Token exports and implementation snippets — the documentation portal's core artefact.

`--surface-raised` fill, 16px radius, 24px padding. Code in `--text-code-block` (Space Mono 14px/140%) in `--text-primary`; the target label above it stays in `body-sm` **sans** — that sans/mono contrast is what makes the block read as code at a glance. Four targets ship: CSS custom properties, inline-CSS HTML for email, a React token import, and Figma token JSON, matching the four export targets the system actually supports. Lines wrap rather than truncate; a copy affordance sits top-right.

### Email Section
**Role:** HTML-email block — hero, two-column, CTA, footer.

The one component locked to the **light** theme, because dark-mode support across Outlook, Gmail and Apple Mail is unreliable. 600px content width, `radius-none` at the root (Outlook ignores table `border-radius`), single-direction stacking that maps to table rows, padding never margin, and no flex, grid, custom properties or web fonts. Brand green resolves `#1b4a14` here — using `#46a239` would ship a 2.87:1 failure.

### Social Frame
**Role:** Fixed-ratio export canvases — 1:1, 9:16, 16:9.

Not a UI surface. Safe-area guides mark platform chrome and must be hidden before export.

## Do's and Don'ts

### Do
- Bind every value to a semantic token and let the theme resolve it — `--brand-primary`, never a raw hex. The theme-aware split is the whole reason the system passes AA in both modes.
- Use `--text-on-brand` for any label sitting on a brand fill, and let it invert. On dark it is near-black; on light it is off-white.
- Keep every neutral green-tinted. `#edf3ed`, `#8f9c8f`, `#3d433d`, `#242824`, `#030903` — the tint is a brand signature, and swapping in true grays visibly de-brands the page.
- Carry depth tonally in the dark theme: step `--surface-page` → `--surface-raised` and hold `elevation-0`. Reserve the shadow ramp for light surfaces.
- Pair every status colour with an icon or a word (WCAG 1.4.1). This applies to alerts, toasts, badges, policy checklists and diff highlighting alike.
- Use `#1b4a14` for anything that will render on a light or email surface — it reaches 9.16:1 on white, the strongest pairing available.
- Set section rhythm from the large end of the spacing scale (80 / 120 / 200) and component spacing from the small end (4 / 8 / 16 / 24).
- Give interactive cards and inputs a 2px stroke focus ring in `--border-focus`; a stroke survives forced-colours mode, a shadow does not.
- Set every code sample in `--font-mono` at 14px, and keep its label in sans — the family switch is the signal that the block is code.
- Write UI copy in pt-BR with the CTA canon: **"Fale com um especialista"**, **"Conheça nossas soluções"**, **"Agende uma conversa"**, **"Saiba mais"**.

### Don't
- Don't hardcode a white label on `#46a239` — it measures 2.87:1 and fails AA. This is the most common mistake in this system.
- Don't use `#46a239` as text on any light surface. It is a dark-theme colour; the light-theme equivalent is `#1b4a14`.
- Don't use Accent Neon `#8fc05d` for text or meaningful icons — 1.89:1 on light. It is fill-and-large-graphic only, and the token deliberately carries no text scope.
- Don't use `--border-subtle` for a border that means something. At 1.98:1 on the dark page it is decorative hairline only; meaningful edges use `--border-default`.
- Don't apply shadows in the dark theme. A black shadow on `#030903` is invisible — you get the cost without the effect.
- Don't use `#000000` anywhere except the monochrome logo plate, and don't use `#ffffff` as a dark-theme text colour — `#edf3ed` is the on-brand off-white.
- Don't "correct" the two odd type values: `heading-3` at +2px tracking and `label-tag` at +20px are both intentional.
- Don't use `label-tag` on narrow table columns — the +20px tracking wraps headers one letter per line.
- Don't put a fixed-width child inside a flexible container. A flexible root with a rigid child looks correct in the layer tree and breaks on canvas.
- Don't say "Fale com a gente" — the voice guide rules out "a gente"; the approved form is "Fale com um especialista".
- Don't set prose, body UI labels or numbers in Space Mono. It carries exactly two meanings in this system — *this is code* and *this is the tag eyebrow* (`label/tag`) — and using it for "technical feel" anywhere else dilutes both.
- Don't introduce gradients. The source brand has none, and none were invented.

## Surfaces

| Level | Name | Dark | Light | Purpose |
|-------|------|------|-------|---------|
| 0 | Page | `#030903` | `#edf3ed` | The canvas — default background for all sections |
| 1 | Raised | `#242824` | `#ffffff` | Cards, menus, panels, modals. In dark this step *is* the elevation |
| 2 | Inverse | `#edf3ed` | `#030903` | Inverted blocks for rhythm and emphasis |
| 3 | Brand | `#46a239` | `#1b4a14` | CTA fills, active states, emphasis zones |
| 4 | Scrim | `#030903` @ 40–60% | `#030903` @ 40–60% | Modal overlay — identical in both themes by design |

## Elevation

- **Dark theme:** tonal only. `--surface-page` → `--surface-raised`, `elevation-0` throughout.
- **Light cards:** `0 2px 4px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.10)`
- **Light menus / dropdowns:** `0 4px 8px rgba(0,0,0,0.08), 0 6px 16px rgba(0,0,0,0.12)`
- **Light modals:** `0 8px 16px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.14)`
- **Focus ring (both themes):** 2px solid `--border-focus`, inside-aligned stroke — never a glow

## Imagery

Photography is corporate-documentary: real teams, real workplaces, desaturated and cool-toned so the green accent stays the only saturated element on the page. Images sit in 16px-radius containers and are frequently overlaid with a `#030903` scrim at 40–60% so light text can sit on them at full contrast. The recurring abstract motif is the network — nodes and connections rendered as thin monochrome line work, echoing the icon set's thin geometric stroke. Client logos appear monochrome in a uniform grid, never in their native brand colours, so the wall reads as one texture rather than a colour riot. No stock illustration, no 3D renders, no gradient meshes. Every image slot requires real alt text describing the scene and the point it makes — never the words *imagem*, *foto* or *banner*.

## Layout

Max-width 1200px centred, 40px page gutter, 12 columns at 24px gap. Long-scroll pages are the norm: the reference homepage runs 5800px, sectioned into hero → value statement → service grid → proof (awards, client wall) → geographic reach → testimonial → CTA → footer. Rhythm comes from surface inversion rather than decoration — dark page, raised card cluster, dark page again. The hero is a centred stack with an oversized `display` headline where a single phrase takes the brand green while the rest stays `--text-primary`. Supporting sections alternate between 3-column feature rows and 2-column text-plus-visual. Internal product surfaces (Creator Hub, approval flows, documentation) use a 280px fixed sidebar with a flexible main column. Navigation is a single sticky top bar; menu panels open as raised cards rather than full-width drawers.

## Agent Prompt Guide

Quick Color Reference — dark theme (the default)
- text: `#edf3ed` primary, `#8f9c8f` secondary
- background: `#030903` page, `#242824` cards
- border: `#798679` meaningful, `#3d433d` decorative hairline
- accent: `#8fc05d` fills and large graphics only, never text
- primary action: `#46a239` fill with `#030903` label
- focus: 2px `#46a239` stroke

Quick Color Reference — light theme (email, print, light surfaces)
- text: `#030903` primary, `#3d433d` secondary
- background: `#edf3ed` page, `#ffffff` cards
- border: `#3d433d` meaningful, `#798679` decorative
- primary action: `#1b4a14` fill with `#edf3ed` label
- focus: 2px `#1b4a14` stroke

Example Component Prompts

1. Primary CTA: 40px height, 8px radius, `#46a239` fill, label in Plus Jakarta Sans 700 at 16px in `#030903`, 24px horizontal padding, 8px gap to an optional 24px icon. No shadow. On a light or email surface, swap the fill to `#1b4a14` and the label to `#edf3ed`.

2. Service card (3-column grid): `#242824` surface, 16px radius, 24px padding, no shadow. 32px icon in `#46a239` at top, 24px gap to heading at 20px/700 in `#edf3ed`, 16px gap to body at 16px/400 line-height 160% in `#8f9c8f`. Column gap 24px inside a 1200px container.

3. Hero: full-bleed `#030903`, content constrained to 1200px, 200px vertical padding. Display headline 76px/700, line-height 130%, letter-spacing -1px, in `#edf3ed` with one phrase in `#46a239`. 32px gap to a 16px/400 body line in `#8f9c8f` capped at 640px. 32px gap to a primary CTA plus an underlined text link.

4. Dark section card with inset panel: `#030903` background, 16px radius, 32px padding, headline 32px/700 in `#edf3ed`. Contains an inset `#242824` panel at 16px radius and 24px padding for the interactive control.

5. Top nav: `#030903`, 80px tall, content row at 1200px. Logo left at 32px height, menu triggers in 16px/400 `#edf3ed` with a `caret-down` icon, right cluster with a language switcher and a primary CTA. Menu panel opens as a `#242824` card at 280px wide, 16px radius, 8px item gap.

6. AI provenance marker: 9999px radius pill, 4px vertical / 8px horizontal padding, 24px height. Leading 16px icon plus a 14px/400 label reading "Adaptado por IA". `#242824` fill with a 1px `#798679` border and `#edf3ed` text. Place it adjacent to any AI-generated artefact, never inside it.

## Similar Brands

- **Linear** — Near-black green-adjacent canvas, one saturated accent doing all interactive work, tight negative tracking on display type, and depth carried by tonal surface steps rather than shadow.
- **Vercel** — High-contrast monochrome base with a single functional accent, modest corner radii, geometric sans throughout, and a documentation-first product surface.
- **Supabase** — Dark-first developer brand built on a green accent over near-black, with green-tinted neutrals rather than pure gray and a strong technical, unembellished voice.
- **Stripe** — Restrained enterprise palette where one brand colour carries every action, long-scroll marketing pages sectioned by surface inversion, and dense data surfaces held to the same token system as the marketing site.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Primitives — Color */
  --color-green-500: #46a239;
  --color-green-900: #1b4a14;
  --color-green-neon-400: #8fc05d;
  --color-green-neon-700: #578b23;
  --color-neutral-0: #edf3ed;
  --color-neutral-400: #8f9c8f;
  --color-neutral-500: #798679;
  --color-neutral-700: #3d433d;
  --color-neutral-800: #242824;
  --color-neutral-950: #030903;
  --color-white-pure: #ffffff;
  --color-black-pure: #000000;
  --color-red-400: #f4776a;
  --color-red-700: #b3261e;
  --color-amber-500: #d69323;
  --color-amber-800: #8a5314;
  --color-emerald-400: #4bc37d;
  --color-emerald-800: #256f44;
  --color-blue-400: #5ba0fb;
  --color-blue-700: #0f5abd;

  /* Semantic — Dark theme (default) */
  --surface-page: var(--color-neutral-950);
  --surface-raised: var(--color-neutral-800);
  --surface-inverse: var(--color-neutral-0);
  --text-primary: var(--color-neutral-0);
  --text-secondary: var(--color-neutral-400);
  --text-disabled: var(--color-neutral-500);
  --text-on-brand: var(--color-neutral-950);
  --text-on-status: var(--color-neutral-950);
  --brand-primary: var(--color-green-500);
  --brand-accent: var(--color-green-neon-400);
  --border-default: var(--color-neutral-500);
  --border-subtle: var(--color-neutral-700);
  --border-focus: var(--color-green-500);
  --status-error: var(--color-red-400);
  --status-warning: var(--color-amber-500);
  --status-success: var(--color-emerald-400);
  --status-info: var(--color-blue-400);
  --overlay-scrim: var(--color-neutral-950);
  --data-viz-1: var(--color-green-500);
  --data-viz-2: var(--color-green-neon-400);
  --data-viz-3: var(--color-amber-500);
  --data-viz-4: var(--color-blue-400);
  --data-viz-5: var(--color-red-400);

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  --text-display: 76px;      --leading-display: 1.3;      --tracking-display: -1px;
  --text-heading-1: 48px;    --leading-heading-1: 1.2;    --tracking-heading-1: -2px;
  --text-heading-2: 32px;    --leading-heading-2: 1.2;    --tracking-heading-2: 0px;
  --text-heading-3: 24px;    --leading-heading-3: 1.2;    --tracking-heading-3: 2px;
  --text-heading-4: 20px;    --leading-heading-4: 1.4;    --tracking-heading-4: 0px;
  --text-body: 16px;         --leading-body: 1.6;         --tracking-body: 0px;
  --text-body-sm: 14px;      --leading-body-sm: 1.6;      --tracking-body-sm: 0px;
  --text-label-tag: 14px;    --leading-label-tag: 1.6;    --tracking-label-tag: 20px;
  --transform-label-tag: uppercase;
  --text-code-block: 14px;   --leading-code-block: 1.4;   --tracking-code-block: 0px;
  --text-code-inline: 14px;  --leading-code-inline: 1.6;  --tracking-code-inline: 0px;

  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-2xs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-sm-md: 24px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 80px;
  --spacing-2xl: 120px;
  --spacing-3xl: 200px;

  /* Layout */
  --page-max-width: 1200px;
  --page-gutter: 40px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --sidebar-width: 280px;
  --modal-max-width: 560px;
  --breakpoint-mobile: 320px;
  --breakpoint-tablet: 800px;
  --breakpoint-desktop: 1280px;

  /* Sizing */
  --control-height-sm: 32px;
  --control-height-md: 40px;
  --control-height-lg: 48px;
  --icon-sm: 16px;
  --icon-md: 24px;
  --icon-lg: 32px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-button: 8px;
  --radius-input: 8px;
  --radius-card: 16px;
  --radius-modal: 16px;
  --radius-full: 9999px;

  /* Border Width */
  --border-width-default: 1px;
  --border-width-focus: 2px;

  /* Opacity (0–100 scale in Figma; use decimals in CSS) */
  --opacity-disabled: 0.32;
  --opacity-hover-tint: 0.08;
  --opacity-scrim-subtle: 0.40;
  --opacity-scrim-default: 0.60;

  /* Elevation — LIGHT theme only; dark stays tonal at 0 */
  --elevation-0: none;
  --elevation-1: 0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10);
  --elevation-2: 0 2px 4px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.10);
  --elevation-3: 0 4px 8px rgba(0,0,0,0.08), 0 6px 16px rgba(0,0,0,0.12);
  --elevation-4: 0 8px 16px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.14);
  --elevation-5: 0 16px 32px rgba(0,0,0,0.10), 0 24px 48px rgba(0,0,0,0.16);

  /* Motion */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Light theme — only the tokens that change */
[data-theme="light"] {
  --surface-page: var(--color-neutral-0);
  --surface-raised: var(--color-white-pure);
  --surface-inverse: var(--color-neutral-950);
  --text-primary: var(--color-neutral-950);
  --text-secondary: var(--color-neutral-700);
  --text-on-brand: var(--color-neutral-0);
  --text-on-status: var(--color-neutral-0);
  --brand-primary: var(--color-green-900);
  --border-default: var(--color-neutral-700);
  --border-subtle: var(--color-neutral-500);
  --border-focus: var(--color-green-900);
  --status-error: var(--color-red-700);
  --status-warning: var(--color-amber-800);
  --status-success: var(--color-emerald-800);
  --status-info: var(--color-blue-700);
  --data-viz-1: var(--color-green-900);
  --data-viz-2: var(--color-green-neon-700);
  --data-viz-3: var(--color-amber-800);
  --data-viz-4: var(--color-blue-700);
  --data-viz-5: var(--color-red-700);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
  }
}
```

### Tailwind v4

```css
@theme {
  /* Colors — primitives */
  --color-green-500: #46a239;
  --color-green-900: #1b4a14;
  --color-green-neon-400: #8fc05d;
  --color-green-neon-700: #578b23;
  --color-neutral-0: #edf3ed;
  --color-neutral-400: #8f9c8f;
  --color-neutral-500: #798679;
  --color-neutral-700: #3d433d;
  --color-neutral-800: #242824;
  --color-neutral-950: #030903;
  --color-white-pure: #ffffff;
  --color-black-pure: #000000;
  --color-red-400: #f4776a;
  --color-red-700: #b3261e;
  --color-amber-500: #d69323;
  --color-amber-800: #8a5314;
  --color-emerald-400: #4bc37d;
  --color-emerald-800: #256f44;
  --color-blue-400: #5ba0fb;
  --color-blue-700: #0f5abd;

  /* Colors — semantic aliases (dark default) */
  --color-surface-page: var(--color-neutral-950);
  --color-surface-raised: var(--color-neutral-800);
  --color-text-primary: var(--color-neutral-0);
  --color-text-secondary: var(--color-neutral-400);
  --color-text-on-brand: var(--color-neutral-950);
  --color-brand-primary: var(--color-green-500);
  --color-brand-accent: var(--color-green-neon-400);
  --color-border-default: var(--color-neutral-500);
  --color-border-subtle: var(--color-neutral-700);
  --color-border-focus: var(--color-green-500);

  /* Typography */
  --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  --text-display: 76px;
  --text-display--line-height: 1.3;
  --text-display--letter-spacing: -1px;
  --text-display--font-weight: 700;
  --text-heading-1: 48px;
  --text-heading-1--line-height: 1.2;
  --text-heading-1--letter-spacing: -2px;
  --text-heading-1--font-weight: 700;
  --text-heading-2: 32px;
  --text-heading-2--line-height: 1.2;
  --text-heading-2--font-weight: 700;
  --text-heading-3: 24px;
  --text-heading-3--line-height: 1.2;
  --text-heading-3--letter-spacing: 2px;
  --text-heading-3--font-weight: 600;
  --text-heading-4: 20px;
  --text-heading-4--line-height: 1.4;
  --text-heading-4--font-weight: 700;
  --text-body: 16px;
  --text-body--line-height: 1.6;
  --text-body-sm: 14px;
  --text-body-sm--line-height: 1.6;
  --text-label-tag: 14px;
  --text-label-tag--line-height: 1.6;
  --text-label-tag--letter-spacing: 20px;
  --text-label-tag--text-transform: uppercase;
  --text-code-block: 14px;
  --text-code-block--line-height: 1.4;
  --text-code-block--font-weight: 400;
  --text-code-inline: 14px;
  --text-code-inline--line-height: 1.6;
  --text-code-inline--font-weight: 400;

  /* Spacing */
  --spacing-2xs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-sm-md: 24px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 80px;
  --spacing-2xl: 120px;
  --spacing-3xl: 200px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-button: 8px;
  --radius-input: 8px;
  --radius-card: 16px;
  --radius-modal: 16px;
  --radius-full: 9999px;

  /* Breakpoints */
  --breakpoint-mobile: 320px;
  --breakpoint-tablet: 800px;
  --breakpoint-desktop: 1280px;

  /* Shadows — light theme only */
  --shadow-elevation-1: 0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10);
  --shadow-elevation-2: 0 2px 4px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.10);
  --shadow-elevation-3: 0 4px 8px rgba(0,0,0,0.08), 0 6px 16px rgba(0,0,0,0.12);
  --shadow-elevation-4: 0 8px 16px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.14);
  --shadow-elevation-5: 0 16px 32px rgba(0,0,0,0.10), 0 24px 48px rgba(0,0,0,0.16);

  /* Motion */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

*Derived from the Genesis Consulting Design System v1.0 (Figma, published) — 211 Variables, 13 text styles, 60 components, 414 variants, audited to WCAG 2.1 AA. Every hex, size and ratio in this document is read from the built system, not reconstructed. Prose and structure are in English to match the reference format; all UI copy examples stay in pt-BR, the product language.*
