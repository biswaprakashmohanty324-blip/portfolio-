# Visual Design System: Technical Blueprint — React (Vite)

## 1. Design Identity & Emotional Tone
The **Technical Blueprint** design system projects an engineering-first portfolio tailored for software engineering recruiters, hiring managers, and senior technical interviewers.
- **Analytical Sobriety**: Eschews decorative portfolio trends (diffuse drop shadows, arbitrary floating shapes, frosted glass, poster-sized titles) in favor of structural clarity.
- **Interactive Workbench**: Inspired by high-density developer tools, hardware test benches, and official systems documentation.
- **Ruthless Legibility**: High contrast (minimum 7:1 for normal copy, 4.5:1 for structural UI) with calibrated dark-mode slate tones and electric industrial amber.

---

## 2. CSS Design Tokens (`src/styles/tokens.css`)

### 2.1 Color Palette
```css
:root {
  /* Brand & Accents */
  --color-primary: #D97706;          /* Electric industrial amber */
  --color-secondary: #0F172A;        /* Deep obsidian slate */
  --color-tertiary: #475569;         /* Cool slate */
  --color-neutral: #FAFAF9;          /* Technical off-white */

  /* Surface Elevations */
  --color-surface-canvas: #0F172A;    /* Main page body canvas */
  --color-surface-subtle: #1E293B;    /* Card modules, data tables */
  --color-surface-elevated: #334155;  /* Sidebar panels, elevated registers */
  --color-surface-deep: #0C0F0E;      /* Terminal interior background well */

  /* Structural Borders */
  --color-border-structural: #334155; /* Standard 1px divider */
  --color-border-prominent: #64748B;  /* Container boundary frame */
  --color-border-active: #D97706;     /* Focused or active item border */

  /* Operational Status */
  --color-status-success: #059669;    /* Live/online/production */
  --color-status-warning: #D97706;    /* Beta/WIP */
  --color-status-error: #DC2626;      /* Error/alert */
}
```

---

## 3. Typography Hierarchy

Defined in `src/styles/tokens.css` with Google Fonts `Geist` and `JetBrains Mono`:

| Token | Size | Weight | LineHeight | Family / Role |
|---|---|---|---|---|
| `--font-size-xl` | 32px | `700` | 1.25 | Screen & section main titling (`<h1>`) |
| `--font-size-lg` | 24px | `600` | 1.33 | Card headers & module titles (`<h2>`, `<h3>`) |
| `--font-size-sm` | 18px | `600` | 1.33 | Sub-section headers (`<h4>`) |
| `--font-size-body` | 15px | `400` | 1.5 | Primary narrative copy (`<p>`) |
| `--font-size-code` | 13px | `500` | 1.4 | Monospace buttons & terminal input |
| `--font-size-tag` | 11px | `500` | 1.3 | Monospace technology badges |
| `--font-size-meta` | 12px | `400` | 1.4 | Monospace timestamps & hashes |

---

## 4. Spacing & Grid System (8px Baseline)

```css
:root {
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
}
```

- **Max Container Width**: 1152px (`72rem`), centered horizontally on desktop screens.
- **Desktop (>=1024px)**: 12-column asymmetric layout with sidebars and dual-column cards.
- **Tablet & Mobile (<1024px)**: Single-column vertically stacked modular flow with full-width cards.

---

## 5. Elevation, Depth & Geometry

### 5.1 Depth Construction
- **Flat 1px Structural Borders**: `border: 1px solid var(--color-border-structural)`
- **Hard 2px Offset Shadows**: `box-shadow: 2px 2px 0px 0px #000000`
- **Prohibited**: Soft blurred glows and diffuse drop shadows are strictly prohibited.

### 5.2 Corner Radii
```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;   /* Standard components (buttons, cards, inputs) */
  --radius-lg: 12px;  /* Terminal frames, code containers */
}
```
- Full circular pills (`border-radius: 9999px`) are banned to preserve utilitarian precision.
