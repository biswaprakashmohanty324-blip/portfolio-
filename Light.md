---
name: Technical Blueprint
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0c0f0e'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2a'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#dbc2b0'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3130'
  outline: '#a38c7c'
  outline-variant: '#554336'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#d97707'
  on-primary-container: '#432100'
  inverse-primary: '#904d00'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#b9c7df'
  on-tertiary: '#233144'
  tertiary-container: '#8392a8'
  on-tertiary-container: '#1c2a3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d5e3fc'
  tertiary-fixed-dim: '#b9c7df'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#3a485b'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-tag:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  container-max: 72rem
  gutter: 1.5rem
---

## Brand & Style

This design system establishes an engineering-first portfolio and presentation surface tailored for software engineering recruiters, hiring managers, and senior technical interviewers. The interface projects high technical competence, pragmatic judgment, operational rigor, and systematic precision. It eschews modern portfolio clichés—diffuse drop shadows, arbitrary floating shapes, decorative frosted glass, and oversized display copy—in favor of structural clarity inspired by high-density developer tools, hardware test benches, and official systems documentation.

The emotional tone balances analytical sobriety with active technical curiosity. Interfaces built with this system read like an interactive engineering workbench: dense, navigable, and ruthlessly legible. Every element serves an informational purpose; interactive states resemble electrical switches, status registers, and compiled logs rather than whimsical novelties.

## Colors

The palette simulates a high-contrast dark-mode technical workbench, anchored by deep charcoal inks and calibrated slate middle-tones optimized for extended low-light engineering sessions.

- **Primary (`#D97706`)**: An electric industrial amber. Used exclusively for points of current focus, active operational states, live metrics, git-branch chips, key links, and interactive feedback. Avoid filling full-width container backgrounds with this tint.
- **Secondary (`#0F172A`)**: Deep obsidian slate. Serves as the primary dark-mode structural ink for high-priority interactive components, primary button fills, and structural framework boundaries.
- **Tertiary (`#475569`)**: Cool slate. Reserved for secondary copy, inline file metadata, timestamps, subtle dividers, and inactive borders.
- **Neutral (`#FAFAF9`)**: Warm technical off-white (inverted for high-contrast dark theme surfaces). Provides a high-legibility canvas against dark backgrounds reminiscent of terminal syntax highlighting and spec sheets.

Supporting operational tokens include:
- `surface-canvas`: `#0F172A`
- `surface-subtle`: `#1E293B`
- `surface-elevated`: `#334155`
- `border-structural`: `#334155`
- `border-prominent`: `#64748B`
- `status-success`: `#059669`
- `status-warning`: `#D97706`
- `status-error`: `#DC2626`

All text-to-background combinations strictly enforce a minimum contrast ratio of 7:1 for normal copy and 4.5:1 for structural UI elements.

## Typography

Typography prioritizes rapid code scan-rates, modular readability, and clear tabular layout. 

- **Primary Sans (`Geist`)**: Used for all major structural titling, section headers, interface copy, and narrative text. Headers stay constrained, never ballooning into poster-sized display text. Clear geometric weight cuts eliminate visual ambiguity.
- **Monospace (`JetBrains Mono`)**: Applied to all technical indicators, repository tags, git commits, terminal snippets, build statuses, and tabular data labels. Monospace text creates immediate semantic separation between author notes and machine-readable data.

Do not mix italicized serif copy or cursive treatments into this system. Code badges and metadata always run uppercase or exact raw syntax casing (e.g., `camelCase` or `kebab-case`).

## Layout & Spacing

This system relies on an asymmetric, purposeful 12-column grid system rather than repetitive rows of symmetrical cards. Layouts prioritize scannability for engineering managers reviewing credentials in under 30 seconds.

- **Desktop (>=1024px)**: 12-column layout, fixed maximum width of `72rem` (`1152px`), `1.5rem` gutters, and `2rem` page margins. Structural compositions use asymmetric splits—such as 4 columns for technical specifications/metadata sidebars and 8 columns for engineering write-ups, architecture breakdowns, and benchmark figures.
- **Tablet (768px - 1023px)**: 8-column layout, `1.5rem` margins, auto-reflowing multi-column specs into stacked documentation blocks.
- **Mobile (<768px)**: 4-column layout, `1rem` margins. All sidebars collapse to full-width collapsible panels with persistent status lines.

Vertical rhythm adheres strictly to an 8px baseline grid (using multiples of `0.5rem` / `8px`). Component interior padding remains compact (`0.75rem` to `1rem`) to keep information density high without feeling cramped.

## Elevation & Depth

Visual hierarchy is maintained without drop shadows, glows, or translucent blurs. Instead, depth is constructed via three deliberate mechanisms:

1. **Flat Structural Borders**: Surfaces are partitioned by sharp, 1px lines (`#334155` for standard dividers, `#64748B` for key containers). Active, focused, or hovered items transition directly to a 1px border of `#D97706` or `#0F172A`.
2. **Subtle Surface Tinting**: Backgrounds shift between `#0F172A` (main page body), `#1E293B` (isolated modules, data tables, code inspector blocks), and `#334155` (sidebar panels, metadata summaries, and code blocks).
3. **Hard Offset Overlays**: When modals or dropdown commands require separation, they utilize a clean 1px solid border with an optional hard 2px/4px non-diffuse black offset shadow (`box-shadow: 2px 2px 0px 0px #000000`).

## Shapes

Shapes reflect precision and utilitarian craftsmanship. Radii are slightly more rounded and distinct across the system to support a polished dark-mode environment:

- Standard elements (buttons, inputs, surface cards, inline code segments) use a moderate `0.5rem` (`8px`) border radius.
- Code blocks and terminal frames limit corner rounding to `0.75rem` (`12px`).
- Badges and status pills maintain standard `0.5rem` corners; circular pill corners (`9999px`) are banned to avoid playful or consumer-app connotations.
- No organic, fluid, or hand-drawn shapes are permitted. Every bounding box must maintain orthogonal lines.

## Components

### Buttons
- **Primary**: Solid background of `#0F172A`, text in `#FFFFFF`, `8px` radius, typography `label-code` (uppercase or title-case). Hover state transitions to `#1E293B` with a sharp focus ring (`2px solid #D97706`, `2px` offset).
- **Secondary / Outline**: Transparent background, `1px solid #475569` border, `#F8FAFC` text. Hover state shifts border to `#F8FAFC` with `#1E293B` fill.
- **Circuit / Accent Action**: Solid `#D97706`, text in `#FFFFFF`. Reserved solely for prime direct calls to action (e.g., "Download Resume [PDF]", "Launch Live Cluster").

### Badges & Technical Chips
- Fixed `8px` radius, `0.25rem 0.5rem` padding, typography `label-tag`.
- Technology/Language badges: `#1E293B` background, `#E2E8F0` text, and a `1px solid #334155` border.
- Active Status / Metric badges: Transparent background, `1px solid #D97706`, `#FBBF24` text, accompanied by a `6px` solid indicator dot (`#D97706`).

### Cards & Project Documentation Units
- Cards must never use soft gradients or float decorations.
- Dark elevated background (`#1E293B`), `1px solid #334155` border, `8px` radius.
- Headers contain a dedicated metadata strip: project status, stack breakdown in monospace, and repository link aligned in a single horizontal register.
- Sub-elements are split by internal 1px horizontal or vertical dividers rather than isolated card islands. Avoid identical 3-column rows; favor detailed asymmetric cards showing architecture outlines, problem statements, and measurable outcomes.

### Form Inputs & Code Search Fields
- Crisp `1px solid #475569` border, dark fill (`#0F172A`), `#F8FAFC` placeholder/text, `Geist` or `JetBrains Mono` font.
- Focus state instantly drops the gray border in favor of `1px solid #D97706` paired with an outline ring of `2px rgba(217, 119, 6, 0.3)`.

### Lists & Activity Feeds
- Timeline and milestone lists use a vertical `1px solid #334155` guideline with precise square node markers (`6px × 6px`).
- Monospace timestamps are left-aligned in a dedicated structural column, separating dates distinctly from role descriptions and performance metrics.