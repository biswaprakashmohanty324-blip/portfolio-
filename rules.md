# Development Rules & Operational Constraints — React (Vite)

This document defines what AI agents and developers **must use**, **must avoid**, and **must preserve** when developing the standard React Technical Blueprint portfolio.

---

## 1. What to USE

### 1.1 Technology & Frameworks
- **React 18 + Vite**: Use standard React functional components with hooks (`useState`, `useEffect`, `useRef`).
- **Semantic HTML5**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<footer>`, `<h1>`-`<h4>`, `<button>`, `<a>`, and `<pre>`.
- **Vanilla CSS Tokens (`src/styles/tokens.css`)**: Derive all colors, margins, paddings, and font sizes directly from CSS custom properties.
- **Modern Typography**: Geist for technical UI and JetBrains Mono for telemetry, metrics, code snippets, and terminal interactions.
- **Web Accessibility**:
  - Semantic tags with appropriate `aria-label`, `aria-expanded`, and role attributes.
  - Maintain contrast ratio of at least 7:1 for body copy and 4.5:1 for structural UI components.
  - Visible focus rings (`outline: 2px solid var(--color-primary)`) on all interactive buttons and inputs.
- **8px Grid Rhythm**: All margins, paddings, and heights must adhere to multiples of 8 (`8px`, `16px`, `24px`, `32px`, `48px`).

---

## 2. What to AVOID

### 2.1 CSS & Styling Anti-Patterns
- **NO Tailwind CSS**: Avoid Tailwind utility classes. Use structured, semantic class names backed by CSS custom properties in `src/styles/tokens.css` and `src/styles/index.css`.
- **NO Diffuse Drop Shadows or Glows**: Avoid blurred drop shadows (`box-shadow: 0 10px 30px rgba(...)`). Use flat 1px borders (`1px solid var(--color-border-structural)`) and crisp hard 2px offset shadows (`box-shadow: 2px 2px 0px 0px #000000`).
- **NO Circular Pill Buttons**: Do not use `border-radius: 9999px` for buttons or badges. All buttons must use `border-radius: 8px`.
- **NO Generic Colors**: Do not use raw colors like `red`, `blue`, or `#ffffff`. Use calibrated tokens from `tokens.css`.
- **NO Placeholder Fluff**: Use realistic engineering write-ups, architecture notes, and quantifiable benchmarks.

---

## 3. What to PRESERVE

### 3.1 Design System Integrity
- **Color Identity**:
  - Primary Amber: `#D97706` (active states, live metrics, key highlights)
  - Obsidian Slate: `#0F172A` (canvas background, primary button fill)
  - Subtle Surface: `#1E293B` (card backgrounds)
  - Elevated Surface: `#334155` (sidebars and dividers)
  - Neutral Text: `#FAFAF9` (high-contrast readable text)
- **Developer Identity**:
  - Developer Name: **BISWA PRAKASH MOHANTY** in bold uppercase headline.
  - Profile Photo: `assets/profile.jpg` in high-contrast amber border with verified telemetry tag.
- **Asymmetric Grid**: Preserve the 12-column asymmetric desktop composition with max width `1152px`, reflowing into stacked modular cards on mobile devices.
- **Utilitarian Corners**: Maintain `8px` and `12px` border radii with orthogonal geometric discipline.
