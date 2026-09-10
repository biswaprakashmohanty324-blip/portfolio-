# Product Requirements Document (PRD) — React (Vite) Edition

## 1. Overview & Objective
- **Product Name**: Technical Blueprint — React Developer Portfolio & Workbench
- **Target Owner**: Biswa Prakash Mohanty (Software Engineer)
- **Primary Goal**: Deliver a high-density, engineering-first personal portfolio web application built with **React 18**, **Vite**, and **TypeScript**. Tailored for engineering managers and technical recruiters, it showcases technical competence, operational rigor, and system design skills.
- **Core Problem Solved**: Typical software engineer portfolios rely on superficial aesthetic trends (whimsical floating animations, generic card carousels, lack of architecture details, slow load times). Engineering managers and recruiters review portfolios in under 30 seconds and need immediate access to technical depth, production metrics, architecture decisions, and code quality.

---

## 2. Target Audience & User Personas
1. **Engineering Managers & Tech Leads**
   - *Goal*: Rapidly evaluate architectural rigor, component structure, clean code practices, and system design clarity.
   - *Behavior*: Scans project architectures, metric benchmarks, and technical trade-offs in under 30 seconds.
2. **Technical Recruiters & Talent Partners**
   - *Goal*: Quickly assess core skills, years of experience, primary stacks, and download candidate resume.
   - *Behavior*: Needs immediate access to resume download, key skills chips, contact info, and role fit.
3. **Senior Engineers & Peer Reviewers**
   - *Goal*: Review code craftsmanship, TypeScript type definitions, state management, and interactive terminal functionality.
   - *Behavior*: Interacts with the embedded terminal widget, tests responsive layouts, and inspects clean semantic markup.

---

## 3. Key Product Pillars
- **Analytical Sobriety**: High-density engineering workbench aesthetic adhering strictly to the **Technical Blueprint** design system (`#D97706` amber accents, `#0F172A` obsidian canvas, `#1E293B` elevated cards).
- **Fast Performance & Instant Paint**: Powered by Vite with sub-second FCP and minimal runtime overhead.
- **30-Second Scannability**: 12-column asymmetric layout with metadata registers that surface key credentials, project stats, and links instantly.
- **Interactive Terminal Workbench**: An interactive command-line emulator built with React state and keyboard event listeners.

---

## 4. Functional Specifications & Component Hierarchy

### 4.1 System Header & Status Bar (`SystemBar.tsx`)
- Persistent/sticky top header with brand lockup (`[BP] BISWA PRAKASH MOHANTY // SOFTWARE ENGINEER`) and live pulse indicator (`SYS: ACTIVE // READY`).
- Direct action triggers: "RESUME.PDF ↗" and in-page navigation anchors.

### 4.2 Hero & Technical Workbench (`HeroWorkbench.tsx`)
- Verified profile photo frame with user picture (`assets/profile.jpg`) and status tag `SYS_ID: VERIFIED // SDE`.
- Bold name headline `<h1>BISWA PRAKASH MOHANTY</h1>` and role badge `SOFTWARE ENGINEER // FULL-STACK & SYSTEMS`.
- Primary action buttons: `INSPECT PROJECTS ↓`, `LAUNCH TERMINAL >`, `GITHUB ↗`.
- Integrated **Technical Spec Sheet** (`SpecSheet.tsx`) showing primary stack, cloud infra, and current focus.

### 4.3 Featured Projects Registry (`ProjectCard.tsx`)
- Asymmetric project documentation cards:
  - **Metadata Strip**: Status badge (`PRODUCTION`, `ACTIVE BETA`), category, repository link, live demo link.
  - **Architecture Summary**: Concrete problem statement, system architecture design, and technical stack chips.
  - **Measurable Benchmarks**: Real performance indicators (e.g. latency, throughput, scale).
  - **Category Filter Bar**: Filter chips for all domains.

### 4.4 Interactive Terminal Console (`TerminalWidget.tsx`)
- Utilitarian terminal emulator powered by React state:
  - Commands: `help`, `about`, `projects`, `skills`, `contact`, `specs`, `clear`.
  - Command input prompt with suggestion chips for quick touch/click execution.
  - Auto-scrolling output buffer.

### 4.5 Engineering Experience Timeline (`ExperienceTimeline.tsx`)
- Vertical structural guideline with square node markers (`8px × 8px`) and monospace timestamps.
- Role, organization, technical scope, and quantifiable engineering deliverables.

### 4.6 Technical Skills Matrix (`SkillsMatrix.tsx`)
- Categorized skill domains: Languages, Mobile & Frontend, Backend & Systems, Cloud & Infra, Databases.

### 4.7 Contact & Communication Register (`ContactSection.tsx`)
- Direct contact links (Email, GitHub, LinkedIn) with copy-to-clipboard action and feedback alert.

---

## 5. Non-Functional Requirements
- **Performance**: Instant load via Vite; zero layout shift.
- **Accessibility**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) with visible focus states.
- **Responsiveness**: Fluid 12-column grid reflowing gracefully from mobile viewports (<768px) to desktop viewports (>=1024px).
