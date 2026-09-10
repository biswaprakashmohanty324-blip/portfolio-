import { useState } from 'react';
import { projectsData, Project } from './data/portfolioData';
import { SystemBar } from './components/SystemBar';
import { HeroWorkbench } from './components/HeroWorkbench';
import { ProjectCard } from './components/ProjectCard';
import { TerminalWidget } from './components/TerminalWidget';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories: string[] = [
    'ALL',
    'Distributed Systems',
    'Mobile & Frontend',
    'Cloud & Infra',
  ];

  const filteredProjects: Project[] =
    activeCategory === 'ALL'
      ? projectsData
      : projectsData.filter((p: Project) => p.category === activeCategory);

  return (
    <div className="app-canvas">
      {/* Top System Navigation Bar */}
      <SystemBar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="main-content">
        {/* Hero Section with Photo & Bold Headline */}
        <HeroWorkbench onNavigate={handleNavigate} />

        {/* Section 01: Featured Projects Showcase */}
        <section id="projects" className="section-divider">
          <div className="container">
            <div className="section-header">
              <div className="section-code">// SECTION_01</div>
              <h2 className="section-title">
                FEATURED PROJECTS & SYSTEM ARCHITECTURES
              </h2>
            </div>

            {/* Filter Chips Bar */}
            <div className="projects-filter-bar">
              <span className="filter-bar-label">FILTER:</span>
              {categories.map((cat: string) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-chip ${isActive ? 'filter-chip-active' : ''}`}
                  >
                    {cat.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Project Cards List */}
            <div className="project-cards-list">
              {filteredProjects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 02: Interactive Terminal Workbench */}
        <section id="terminal" className="section-divider">
          <div className="container">
            <div className="section-header">
              <div className="section-code">// SECTION_02</div>
              <h2 className="section-title">INTERACTIVE WORKBENCH TELEMETRY</h2>
            </div>
            <TerminalWidget />
          </div>
        </section>

        {/* Section 03: Engineering Experience & Milestones */}
        <ExperienceTimeline />

        {/* Section 04: Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Section 05: Contact & Communication Register */}
        <ContactSection />
      </main>

      <style>{`
        .app-canvas {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }

        .projects-filter-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: var(--space-lg);
        }

        .filter-bar-label {
          font-family: var(--font-mono);
          color: var(--color-neutral-subtle);
          font-size: 11px;
          font-weight: 700;
          margin-right: 4px;
        }

        .filter-chip {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-sm);
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--color-neutral-muted);
          transition: all 0.15s ease;
        }

        .filter-chip:hover {
          color: var(--color-neutral);
          border-color: var(--border-prominent);
        }

        .filter-chip-active {
          background-color: var(--color-primary-muted);
          border-color: var(--color-primary);
          color: var(--color-primary-light);
        }

        .project-cards-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
