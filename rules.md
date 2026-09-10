# Development Rules & Operational Constraints — React Native

This document defines what AI agents and developers **must use**, **must avoid**, and **must preserve** when developing the React Native Technical Blueprint portfolio.

---

## 1. What to USE

### 1.1 Technology & Frameworks
- **React Native Primitives**: Always use standard React Native components (`View`, `Text`, `Pressable`, `ScrollView`, `TextInput`, `SafeAreaView`, `StyleSheet`).
- **Expo Toolchain**: Use Expo for consistent cross-platform web, iOS, and Android support.
- **TypeScript**: Use strict TypeScript (`.tsx` / `.ts`) for all components, theme token typing, and data structures.
- **Design Tokens (`src/theme/tokens.ts`)**: Derive all colors, margins, paddings, and font sizes directly from the centralized theme object.
- **Mobile & Web Accessibility**:
  - Use `accessible={true}`, `accessibilityRole`, and `accessibilityLabel` on all interactive buttons and inputs.
  - Maintain contrast ratio of at least 7:1 for body copy and 4.5:1 for structural UI components.
  - Provide visible focus rings or active states on `Pressable` components.
- **8px Grid Rhythm**: All margins, paddings, and heights must adhere to multiples of 8 (`8`, `16`, `24`, `32`, `48`).

---

## 2. What to AVOID

### 2.1 Web-Only DOM Anti-Patterns
- **NO Raw HTML Elements**: Do not use `<div>`, `<span>`, `<p>`, `<h1>`, `<a>`, or `<button>`. Use `View`, `Text`, and `Pressable`.
- **NO CSS Class Strings**: Do not use Tailwind CSS class strings (`className="..."`) or external CSS stylesheets unless specifically utilizing CSS-in-JS primitives that support React Native. Use `StyleSheet.create()`.
- **NO Browser-Only APIs**: Avoid direct references to `window`, `document`, or `localStorage` without platform checks (`Platform.OS === 'web'`). Use standard React Native or Expo APIs (e.g. `Linking.openURL`, `useWindowDimensions`).

### 2.2 Visual Anti-Patterns
- **NO Diffuse Drop Shadows or Glows**: Avoid blurred drop shadows (`shadowRadius: 20`, `elevation: 10`). Use flat 1px borders (`borderWidth: 1`, `borderColor: theme.colors.borderStructural`) and sharp platform offset shadows.
- **NO Circular Pill Buttons**: Do not use `borderRadius: 9999` for buttons or badges. All buttons must use `borderRadius: 8`.
- **NO Generic Colors**: Do not use raw colors like `red`, `blue`, or `#fff`. Use calibrated tokens from `theme.colors`.
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
- **Asymmetric Grid**: Preserve the 12-column asymmetric desktop composition with max width `1152px`, reflowing into stacked modular cards on mobile devices.
- **Utilitarian Corners**: Maintain `8px` and `12px` border radii with orthogonal geometric discipline.
