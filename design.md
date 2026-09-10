# Visual Design System: Technical Blueprint — React Native

## 1. Design Identity & Emotional Tone
The **Technical Blueprint** design system projects an engineering-first portfolio tailored for software engineering recruiters, hiring managers, and senior technical interviewers.
- **Analytical Sobriety**: Eschews decorative portfolio trends (diffuse drop shadows, arbitrary floating shapes, frosted glass, poster-sized titles) in favor of structural clarity.
- **Interactive Workbench**: Inspired by high-density developer tools, hardware test benches, and official systems documentation.
- **Ruthless Legibility**: High contrast (minimum 7:1 for normal copy, 4.5:1 for structural UI) with calibrated dark-mode slate tones and electric industrial amber.

---

## 2. React Native Theme Tokens (`src/theme/tokens.ts`)

### 2.1 Color Palette
```typescript
export const colors = {
  // Brand & Accents
  primary: '#D97706',          // Electric industrial amber (active states, metrics, focus rings)
  secondary: '#0F172A',        // Deep obsidian slate (structural ink, button fills)
  tertiary: '#475569',         // Cool slate (secondary text, timestamps, inactive borders)
  neutral: '#FAFAF9',          // Technical off-white (high-legibility readable copy)

  // Surface Elevations
  surfaceCanvas: '#0F172A',    // Main page body canvas
  surfaceSubtle: '#1E293B',    // Card modules, data tables, inspect wells
  surfaceElevated: '#334155',  // Sidebar panels, elevated registers
  surfaceDeep: '#0C0F0E',      // Terminal interior background well

  // Structural Borders
  borderStructural: '#334155', // Standard 1px divider
  borderProminent: '#64748B',  // Container boundary frame
  borderActive: '#D97706',     // Focused or active item border

  // Operational Status
  statusSuccess: '#059669',    // Live/online/production
  statusWarning: '#D97706',    // Beta/WIP
  statusError: '#DC2626'       // Error/alert
};
```

---

## 3. Typography Hierarchy in React Native

In React Native, typography is defined with `fontSize`, `fontWeight`, and `lineHeight`:

| Token | Size | Weight | LineHeight | Family / Role |
|---|---|---|---|---|
| `headlineXl` | 32 | `'700'` | 40 | Screen & section main titling |
| `headlineLg` | 24 | `'600'` | 32 | Card headers & module titles |
| `headlineSm` | 18 | `'600'` | 24 | Sub-section headers |
| `bodyLg` | 16 | `'400'` | 24 | Primary narrative copy |
| `bodyMd` | 14 | `'400'` | 20 | Secondary narrative copy |
| `bodySm` | 13 | `'400'` | 18 | Micro-copy, captions |
| `labelCode` | 13 | `'500'` | 18 | Monospace buttons & terminal input |
| `labelTag` | 11 | `'500'` | 14 | Monospace technology badges |
| `labelMeta` | 12 | `'400'` | 16 | Monospace timestamps & hashes |

---

## 4. Spacing & Grid System (8px Baseline)

```typescript
export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64
};
```

- **Max Container Width**: 1152px (`72rem`), centered horizontally on desktop screens.
- **Desktop (>=1024px)**: 12-column asymmetric layout with sidebars and dual-column cards.
- **Tablet & Mobile (<1024px)**: Single-column vertically stacked modular flow with full-width cards.

---

## 5. Elevation, Depth & Geometry in React Native

### 5.1 Depth Construction
- **Flat 1px Structural Borders**:
  ```typescript
  borderWidth: 1,
  borderColor: colors.borderStructural,
  ```
- **Hard Platform Offset Shadows**:
  ```typescript
  // Platform-safe hard shadow (Web & Native)
  ...Platform.select({
    web: {
      boxShadow: '2px 2px 0px 0px #000000',
    },
    default: {
      shadowColor: '#000000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 2,
    },
  })
  ```
- **Prohibited**: Soft blurred glows and diffuse drop shadows are strictly prohibited.

### 5.2 Corner Radii
```typescript
export const radii = {
  sm: 4,
  md: 8,   // Standard components (buttons, cards, inputs)
  lg: 12   // Terminal frames, code containers
};
```
- Full circular pills (`borderRadius: 9999`) are **banned** to preserve utilitarian precision.

---

## 6. React Native Component Specifications

### 6.1 Buttons
- **Primary**: Background `colors.secondary`, border `1px solid colors.borderStructural`, text `colors.neutral`, radius `8px`. Active focus ring with `borderColor: colors.primary`.
- **Accent Action**: Solid `colors.primary`, text `#FFFFFF`, radius `8px`. Used for high-priority CTAs.

### 6.2 Badges & Chips
- Fixed `8px` radius, padding `4px 8px`.
- Tech Stack badge: Background `colors.surfaceSubtle`, text `colors.neutral`, border `1px solid colors.borderStructural`.
- Active metric badge: Border `1px solid colors.primary`, text `#FBBF24`, 6px indicator dot.

### 6.3 Project Documentation Cards
- Background `colors.surfaceSubtle`, border `1px solid colors.borderStructural`, radius `8px`.
- Metadata strip: Horizontal flex container displaying status, monospace stack tags, and repository link.
- Sub-elements divided by 1px horizontal lines (`height: 1`, `backgroundColor: colors.borderStructural`).
