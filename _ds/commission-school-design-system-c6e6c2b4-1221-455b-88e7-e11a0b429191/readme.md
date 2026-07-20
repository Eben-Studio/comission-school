# Commission School — Design System

## What this is

Commission School is a Brazilian Christian bible-study brand ("COMMISSION SCHOOL")
whose primary output is bold, high-contrast **Instagram carousel posts** — short
scripture/translation-study lessons broken into swipeable cards (e.g. comparing
how the NIV and ESV translate Romans 8:28, or a "seja forte e corajoso" quote
card). This design system captures that visual language so new posts, quote
cards, and any adjacent screens can be produced on-brand.

## Sources

- **Figma file** "Commission.fig" (mounted read-only VFS). One page ("Page-1"),
  three frames — `Elementos`, `Elementos2`, `Elementos3` — each a swatch sheet
  of hand-drawn illustration stickers (birds, flowers, mountains, star bursts,
  human figures) in flat blue/red, plus one embedded full-color logo/lockup
  image. **The file defines no reusable components, no Figma Variables, and no
  text styles** — it is purely an illustration-asset sheet, not a component
  library. (`/METADATA.md`: 0 components, 0 fonts, 0 text styles logged.)
- **Uploaded brand sheet** `Tipo - Paleta - Commission School-2.jpg` — the
  canonical type + color spec (Bebas Neue / Garet, 4 hex swatches).
- **Uploaded logo** `Logo - Commission School.jpg` — the only lockup provided
  (an oval "COMMISSION SCHOOL" stamp mark).
- **Uploaded reference posts** (`CARD (1–8).png`, `Be strong.png`, `FRASE*.png`)
  — real finished Instagram posts, used as ground truth for layout, color
  blocking, duotone photo treatment, and copy tone.
- **Font files uploaded**: Bebas Neue (Regular, .ttf) and Garet (Book weight,
  .otf/.ttf/.woff/.woff2). No bold weight of either face was supplied.

## Font substitution — needs your input

The reference cards also use a decorative serif with blackletter capitals for
scripture emphasis (e.g. "**Ɖeus**", "**Ⅼord**" swashes in `card-3`,
`card-1`). No font file for it was provided. `--font-accent-serif` currently
points at **Playfair Display** (Google Fonts) as the closest general-purpose
stand-in, loaded from CDN where used. **Please share the real typeface** (or
confirm Playfair Display is an acceptable permanent substitute) so this can be
corrected.

## Content fundamentals

- **Language:** Portuguese (Brazilian) is the primary voice; English scripture
  quotes appear verbatim when comparing translations (e.g. "Be Strong and
  Courageous" / Joshua 1:9).
- **Address:** Direct and informal — "conta nos comentários, qual versão você
  prefere?" (second person, casual verb forms, no formal "você" distancing).
- **Sentence shape:** Short, punchy declaratives, often split across 2–4
  stacked highlight blocks rather than one paragraph — each block reads as a
  standalone beat ("Um versículo" / "Duas Traduções" / "Duas interpretações
  completamente diferentes.").
- **Tone:** Curious and even-handed, not preachy or absolutist — "A tradução
  importa. Mas isso não significa que uma esteja certa e a outra errada."
  Ends on an open question, not a hard conclusion.
- **Structure:** Lesson-style micro-content — poses a tension (two
  translations disagree), unpacks the original-language nuance, invites
  discussion. Scripture references are always cited precisely ("Romanos
  8:28 — NIV").
- **Emoji:** none observed. Emphasis comes from color blocking, underlines,
  and bold weight — not emoji or exclamation-heavy copy (one exclamation mark
  sticker graphic appears as a *drawn illustration*, not typed punctuation).
- **Casing:** Headlines set in Bebas Neue are automatically all-caps by the
  face's design; body sentences are otherwise normal sentence case.

## Visual foundations

- **Palette:** exactly four flat colors, no tints/shades — blue `#0305C6`,
  red `#E93323`, cream `#FFFFF3`, ink gray `#333333`, plus one supporting
  cream-paper tone `#EFE2C0` observed as the "highlighter tag" behind quoted
  text. No gradients anywhere.
- **Type:** Bebas Neue (condensed, all-caps) for every headline; Garet
  (rounded, humanist) for all running copy, labels, and captions. Two-font
  system, strictly enforced — no third body face.
- **Backgrounds:** always one flat brand color (blue, red, cream, or near-
  black) covering the full canvas, with a **visible film-grain/noise pass**
  over the top (every reference card has grain, even flat-color ones). Some
  photo elements get an additional **halftone dot** pass.
- **Photography:** every photo is recolored into a hard **duotone** — shadows
  mapped to blue, highlights mapped to red (never a natural photo, never
  grayscale). Subject matter is warm/human or object-still-life (a helmet,
  a mountain, books, a face) — never cool/corporate.
- **Highlight blocks:** the signature move. Solid rectangles of red, blue, or
  cream-paper sit directly behind a line of text, cropped tight to the
  wordmark width (not full-bleed) — this is how emphasis and hierarchy are
  built, in place of italics or letter-spacing tricks. Blocks are stacked at
  slightly different widths to read as torn paper strips.
  Underlines (hand-drawn-looking, thick, offset below baseline) mark the
  single most important phrase within a highlight block.
- **Illustration elements:** flat single-color hand-drawn stickers — bird,
  flower, mountain, blob, and 4-point star — each supplied in exactly one
  blue and one red version (10 assets total, from Figma's `Elementos`/
  `Elementos2` frames). No outlines, no shading, no gradients. Used to fill
  negative space around type, always small relative to the canvas, rotated
  or overlapping for a collaged, hand-placed feel. (The reference JPGs also
  show a headless "mascot" figure and a drawn exclamation mark, but no clean
  extractable asset for either exists in the Figma file — flag if you have
  source art for them.)
- **Corners / shape:** everything is hard-edged. No rounded corners, no pill
  shapes, no card borders or drop shadows anywhere in the reference set.
- **Animation:** none observed (these are static social posts) — if animated
  variants are ever needed, prefer simple cuts/hard color swaps over easing,
  to match the collage/print aesthetic rather than a soft UI feel.
- **Hover/press states:** not applicable — no interactive UI exists in the
  source. If buttons are ever needed for an adjacent surface, follow the
  brand's flat, hard-edged, high-contrast language: solid fill, no shadow, a
  color swap (not an opacity fade) for state changes.
- **Transparency/blur:** none, except the grain overlay itself
  (`mix-blend-mode: overlay`) — the brand does not use frosted/blur panels.
- **Layout:** portrait 4:5 canvases (1080×1350), designed for Instagram
  carousels — content is asymmetric and collage-like, not centered/gridded.

## Iconography

No icon font, SVG icon set, or icon library exists in the source. The only
graphic vocabulary is the **hand-drawn illustration stickers** described above
(birds, flowers, mountains, stars, figures) plus a couple of found/vintage
object photos (megaphone, rotary phone, magnifying glass) used as duotone
collage elements, not as a systematic icon set. One drawn exclamation-mark
illustration appears as a sticker, not as typed punctuation or a unicode
glyph. Do not introduce a generic icon font (Lucide/Heroicons/etc.) into this
brand — it would be off-voice; reuse the sticker set instead, or ask for more
illustration assets if new post types need iconography this set doesn't cover.

## Assets

- `assets/logo/commission-logo.jpg` — the only lockup available (oval stamp
  wordmark, blue on white). No standalone icon/favicon mark exists.
- `assets/logo/commission-logo-figma.png` — same lockup as embedded in Figma.
- `assets/illustrations/` — the illustration stickers pulled from Figma's
  `Elementos`/`Elementos2` frames: bird, flower, mountain, and blob as raster
  PNGs (each in a blue + red pair), plus star as an SVG pair. This is the
  complete illustration-sticker inventory the Figma file defines.
- `assets/reference/` — the original uploaded post images, kept as ground
  truth for future compositions (not to be shipped in consumer output).
- `assets/fonts/` — Bebas Neue (Regular) and Garet (Book) webfont files.

## Components (`components/content/`)

No component library existed in the source, so this is an **intentional
addition** sized to the brand's actual product (Instagram post composition),
not a generic UI kit:

- **GrainBackground** — full-bleed color canvas + the brand's noise overlay.
- **HighlightMark** — the solid-color highlight rectangle behind text.
- **QuoteMark** — large accent-serif scripture/quote line.
- **StickerElement** — one of the brand's 10 hand-drawn illustration stickers
  (bird / flower / mountain / blob / star, each in blue + red).
- **PostFrame** — 1080×1350 Instagram-post canvas, scaled to fit any render size.

## Components (`components/school/`)

Intentional addition for the internal pedagogical-management platform (also
not defined by any source — no admin/dashboard UI existed before):

- **Pill** — hard-edged status chip (stage, waitlist, alert flags).
- **OccupancyMeter** — class-capacity bar, flags ≥90% full or over capacity.
- **InitialsAvatar** — square initials placeholder (no student/teacher photos
  exist in the brand), blue/red alternating by name.

## UI kits

- `ui_kits/instagram-posts/` — a phone-framed, swipeable recreation of the
  translation-comparison carousel (cards 1–8) plus the standalone quote-post
  format, built from the `components/content/` primitives.
- `ui_kits/school-platform/` — a Netflix-style pedagogical-management
  platform (team dashboard, teacher login, student area with Google Agenda
  integration UI) built from real class-roster data and the
  `components/school/` primitives. See its own `README.md` for details.

- `readme.md` — this file.
- `styles.css` — global stylesheet entry point (imports everything in `tokens/`).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- `components/content/` — the 5 components listed above.
- `ui_kits/instagram-posts/` — the Instagram carousel recreation.
- `assets/` — logo, illustration SVGs, reference post images, webfonts.
- `SKILL.md` — portable skill definition for use in Claude Code.
