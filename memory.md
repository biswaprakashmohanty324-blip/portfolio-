# Project Memory & Context State Tracker — React (Vite)

This document records what is finished, what is currently in progress, key architectural decisions, and critical constraints to remember across all development sessions.

---

## 1. Project Context
- **Project Name**: Technical Blueprint Developer Portfolio (Standard React 18 + Vite)
- **Owner**: Biswa Prakash Mohanty (Software Engineer)
- **Current Milestone**: React 18 + Vite Transition Completed, Verified & Ready for GitHub Push
- **GitHub Repository**: [https://github.com/biswaprakashmohanty324-blip/portfolio-](https://github.com/biswaprakashmohanty324-blip/portfolio-)
- **Active Philosophy**: High-density engineering workbench; analytical sobriety; ruthless legibility; standard React 18 + Vite web app.

---

## 2. Status Board

### 2.1 What is Finished
- [x] Converted project architecture to standard React 18 + Vite with TypeScript.
- [x] Synchronized all 6 context files (`PRD.md`, `Architecture.md`, `rules.md`, `phases.md`, `design.md`, `memory.md`).
- [x] Implemented CSS design tokens and layout system (`src/styles/tokens.css`, `src/styles/index.css`).
- [x] Implemented React component library (`SystemBar`, `HeroWorkbench`, `SpecSheet`, `ProjectCard`, `TerminalWidget`, `ExperienceTimeline`, `SkillsMatrix`, `ContactSection`).
- [x] Prominently integrated user profile photo (`assets/profile.jpg`) on top with verified telemetry border.
- [x] Set headline to bold uppercase **BISWA PRAKASH MOHANTY**.
- [x] Configured `vite.config.ts`, `index.html`, and `tsconfig.json`.
- [x] Installed all dependencies cleanly via `npm install`.
- [x] Executed production build (`npx vite build`) with zero errors.
- [x] Connected Git remote to `https://github.com/biswaprakashmohanty324-blip/portfolio-.git`.

---

## 3. Key Architectural Decisions & Memory Items

| Decision | Selection | Rationale / Rule |
|---|---|---|
| **Framework** | Standard React 18 + Vite | Direct standard React web app per user request, ultra-fast HMR and minimal bundle footprint. |
| **Styling** | Vanilla CSS Tokens (`tokens.css`) | Maximum flexibility and fidelity to `Dark.md` without heavy Tailwind runtime or dependencies. |
| **Language** | TypeScript (`.tsx`) | Enforces type safety across design tokens, project data schemas, and props. |
| **Git Remote** | `https://github.com/biswaprakashmohanty324-blip/portfolio-.git` | Source repository for version control and remote deployment. |
| **Profile Photo** | `assets/profile.jpg` | Positioned at the top of the workbench with high-contrast amber border and verified status tag. |
| **Headline** | **BISWA PRAKASH MOHANTY** (Bold) | Prominently establishes developer identity with 32px bold uppercase styling. |
| **Color Palette** | Amber `#D97706` + Slate `#0F172A` / `#1E293B` | Strictly preserves the calibrated dark workbench palette from `Dark.md`. |

---

## 4. File Inventory & Cross-References

| File | Role | Link |
|---|---|---|
| `package.json` | React 18 + Vite dependencies | [package.json](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/package.json) |
| `vite.config.ts` | Vite configuration | [vite.config.ts](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/vite.config.ts) |
| `index.html` | Web entry HTML with fonts | [index.html](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/index.html) |
| `src/main.tsx` | React 18 DOM mount point | [main.tsx](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/main.tsx) |
| `src/App.tsx` | Main root application container | [App.tsx](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/App.tsx) |
| `src/styles/tokens.css` | Centralized design tokens | [tokens.css](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/styles/tokens.css) |
| `src/styles/index.css` | Component styles & utility classes | [index.css](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/styles/index.css) |
| `HeroWorkbench.tsx` | Hero section with photo & bold headline | [HeroWorkbench.tsx](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/components/HeroWorkbench.tsx) |
| `profile.jpg` | User profile picture asset | [profile.jpg](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/assets/profile.jpg) |
| `portfolioData.ts` | Data store with developer profile & projects | [portfolioData.ts](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/src/data/portfolioData.ts) |
| `PRD.md` | Product Requirements Document | [PRD.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/PRD.md) |
| `Architecture.md` | Application structure & technical organization | [Architecture.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/Architecture.md) |
| `rules.md` | What to use, avoid, or preserve | [rules.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/rules.md) |
| `phases.md` | Multi-stage roadmap | [phases.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/phases.md) |
| `design.md` | Visual design tokens and component specs | [design.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/design.md) |
| `memory.md` | State tracker & persistent memory | [memory.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/memory.md) |
| `Dark.md` | Raw design tokens & dark theme blueprint | [Dark.md](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/Dark.md) |
