# Product Requirements Document (PRD) — React Native Edition

## 1. Overview & Objective
- **Product Name**: Technical Blueprint — React Native Engineering Portfolio & Workbench
- **Target Owner**: Biswa Prakash (Software Engineer)
- **Primary Goal**: Deliver a high-density, engineering-first portfolio application built with **React Native (Expo + React Native Web)**. It serves as both an instantly accessible web portfolio for technical recruiters and an installable cross-platform mobile application (iOS & Android).
- **Core Problem Solved**: Eliminates the disconnect between mobile-first engineering portfolios and recruiter access. Most portfolios are either rigid desktop web pages or locked-down mobile apps. By using React Native with web support, the portfolio provides universal scannability across desktop screens, tablets, and phones with a unified, high-performance codebase.

---

## 2. Target Audience & User Personas
1. **Engineering Managers & Tech Leads**
   - *Goal*: Rapidly evaluate architectural rigor, component structure, clean code practices, and system design clarity.
   - *Behavior*: Scans project architectures, metric benchmarks, and technical trade-offs in under 30 seconds.
2. **Technical Recruiters & Talent Partners**
   - *Goal*: Quickly assess core skills, years of experience, primary stacks, and download candidate resume.
   - *Behavior*: Accesses via mobile phone or desktop web browser; requires immediate visibility of resume, contact options, and role fit.
3. **Senior Engineers & Mobile Specialists**
   - *Goal*: Review React Native component architecture, TypeScript types, state management, and interactive terminal functionality.
   - *Behavior*: Interacts with the embedded terminal widget, tests responsive touch targets, and inspects clean component composition.

---

## 3. Key Product Pillars
- **Universal Cross-Platform Delivery**: Runs natively on Web (via `react-native-web`), iOS, and Android using a single Expo codebase.
- **Analytical Sobriety**: High-density engineering workbench aesthetic adhering strictly to the **Technical Blueprint** design system (`#D97706` amber accents, `#0F172A` obsidian canvas, `#1E293B` elevated cards).
- **30-Second Scannability**: 12-column asymmetric layout on desktop browser viewports, reflowing into stacked modular cards on mobile viewports.
- **Interactive Terminal Workbench**: An interactive command-line emulator built with React Native primitives (`TextInput`, `ScrollView`, command parsing engine).

---

## 4. Functional Specifications & Component Hierarchy

### 4.1 System Header & Status Bar (`SystemBar.tsx`)
- Persistent/sticky top header with safe-area insets.
- Displays candidate name (`Biswa Prakash`), role (`Software Engineer`), and live pulse indicator (`[ONLINE] Open to Opportunities`).
- Action triggers: "Resume [PDF]" link and section navigation anchors.

### 4.2 Hero & Technical Workbench (`HeroWorkbench.tsx`)
- Positioning headline emphasizing systems engineering, software craft, and performance.
- Action button row (`Inspect Projects`, `Download Resume`, `Open Terminal`).
- Integrated **Technical Spec Sheet** (`SpecSheet.tsx`): quick data register showing primary languages, frameworks, cloud tooling, and current focus.

### 4.3 Featured Projects Registry (`ProjectCard.tsx`)
- Asymmetric project documentation cards:
  - **Metadata Strip**: Status badge (`Production`, `Active Beta`), repository URL, live demo link.
  - **Architecture Summary**: Concrete problem statement, system architecture design, and technical stack chips.
  - **Measurable Benchmarks**: Real performance indicators (e.g. latency, throughput, reliability).
  - **Tag Filter**: Category filter chips (All, Distributed Systems, Frontend/Mobile, Cloud/DevOps).

### 4.4 Interactive Terminal Console (`TerminalWidget.tsx`)
- Utilitarian terminal emulator powered by React Native state:
  - Supported commands: `help`, `about`, `skills`, `projects`, `contact`, `clear`.
  - Command input prompt with autocompletion/suggestion chips for quick touch access.
  - Scrollable output buffer with syntax-highlighted monospace text.

### 4.5 Engineering Experience Timeline (`ExperienceTimeline.tsx`)
- Vertical structural line with square node markers (`6px × 6px`).
- Monospace timestamps aligned in a dedicated column separating dates from role descriptions.
- Measurable business and technical outcomes.

### 4.6 Technical Skills Matrix (`SkillsMatrix.tsx`)
- Categorized skill domains: Languages, Mobile & Frontend, Backend & Systems, Cloud & Infra, Databases.
- Monospace chips with subtle 1px borders and high-contrast text.

### 4.7 Contact & Communication Register (`ContactSection.tsx`)
- Direct contact links (Email, GitHub, LinkedIn) with copy-to-clipboard feedback alerts.

---

## 5. Non-Functional Requirements
- **TypeScript**: Strict type definitions for theme tokens, project records, and component props.
- **Performance**: 60fps animations/scrolling; zero jank; sub-second initial load on web.
- **Accessibility**: Standard React Native accessibility properties (`accessible`, `accessibilityRole`, `accessibilityLabel`, `accessibilityHint`).
- **Responsive Layout**: Fluid breakpoints handling desktop screens (>=1024px), tablets (768px-1023px), and mobile phones (<768px).
