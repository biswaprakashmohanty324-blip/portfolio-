# Project Memory & Context State Tracker — React Native

This document records what is finished, what is currently in progress, key architectural decisions, and critical constraints to remember across all development sessions.

---

## 1. Project Context
- **Project Name**: Technical Blueprint Developer Portfolio (React Native Cross-Platform)
- **Owner**: Biswa Prakash Mohanty (Software Engineer)
- **Current Milestone**: Git Repository Connected & Initial Commit Created on `main`
- **GitHub Repository**: [https://github.com/biswaprakashmohanty324-blip/portfolio-](https://github.com/biswaprakashmohanty324-blip/portfolio-)
- **Active Philosophy**: High-density engineering workbench; analytical sobriety; ruthless legibility; cross-platform React Native.

---

## 2. Status Board

### 2.1 What is Finished
- [x] Analyzed design specifications (`Dark.md`, `Light.md`).
- [x] Initialized and synchronized all 6 context files (`PRD.md`, `Architecture.md`, `rules.md`, `phases.md`, `design.md`, `memory.md`).
- [x] Scaffolding and packages installed (`expo`, `react-native`, `react-native-web`, `@expo/metro-runtime`, `expo-asset`).
- [x] Implemented React Native component library (`SystemBar`, `HeroWorkbench`, `SpecSheet`, `ProjectCard`, `TerminalWidget`, `ExperienceTimeline`, `SkillsMatrix`, `ContactSection`, `App.tsx`).
- [x] Resolved TypeScript compiler configuration and ambient type declarations (`tsconfig.json`, `src/types/declarations.d.ts`).
- [x] Installed user profile picture to `assets/profile.jpg` with verified telemetry frame.
- [x] Added bold uppercase headline **BISWA PRAKASH MOHANTY**.
- [x] Configured `.gitignore` (excluding `node_modules/`, `.expo/`, build outputs).
- [x] Initialized local Git repository on branch `main`.
- [x] Connected Git remote to `https://github.com/biswaprakashmohanty324-blip/portfolio-.git`.
- [x] Created initial commit `04e76fb` containing all 27 project files.
- [x] Development server running on `http://localhost:8081`.

---

## 3. Key Architectural Decisions & Memory Items

| Decision | Selection | Rationale / Rule |
|---|---|---|
| **Framework** | React Native (Expo + `react-native-web`) | Allows unified codebase for web deployment (for recruiters) and native mobile apps (iOS & Android). |
| **Language** | TypeScript (`.tsx`) | Enforces type safety across design tokens, project data schemas, and props. |
| **Git Remote** | `https://github.com/biswaprakashmohanty324-blip/portfolio-.git` | Source repository for version control and remote deployment. |
| **Profile Photo** | `assets/profile.jpg` | Positioned at the top of the workbench with high-contrast amber border and verified status tag. |
| **Headline** | **BISWA PRAKASH MOHANTY** (Bold) | Prominently establishes developer identity with 34px bold sans styling. |
| **Color Palette** | Amber `#D97706` + Slate `#0F172A` / `#1E293B` | Strictly preserves the calibrated dark workbench palette from `Dark.md`. |

---

## 4. File Inventory & Cross-References

| File | Role | Link |
|---|---|---|
| `.gitignore` | Git ignore rules | [.gitignore](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/.gitignore) |
| `App.tsx` | Main root application container | [App.tsx](file:///c:/Users/BISWA%20PRAKASH/Desktop/portfolio/App.tsx) |
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
