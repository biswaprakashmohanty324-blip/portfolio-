import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isProduction = project.status === 'PRODUCTION';

  return (
    <article className="project-card">
      {/* Top Metadata Strip */}
      <div className="project-meta-strip">
        <div className="project-status-group">
          <span
            className="project-status-dot"
            style={{
              backgroundColor: isProduction
                ? 'var(--status-success)'
                : 'var(--status-warning)',
            }}
          />
          <span className="project-status-text">{project.status}</span>
          <span className="project-category-text">
            // {project.category.toUpperCase()}
          </span>
        </div>

        <div className="project-links-group">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            REPO ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-live-link"
            >
              LIVE DEMO ↗
            </a>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <div className="project-divider" />

        {/* Architecture Section */}
        <div className="project-section-block">
          <div className="project-section-label">// SYSTEM_ARCHITECTURE</div>
          <p className="project-architecture-text">{project.architecture}</p>
        </div>

        {/* Benchmarks Section */}
        <div className="project-section-block">
          <div className="project-section-label">// MEASURABLE_METRICS</div>
          <div className="project-benchmarks-list">
            {project.benchmarks.map((benchmark: string, idx: number) => (
              <div key={idx} className="project-benchmark-row">
                <span className="project-benchmark-bullet">■</span>
                <span className="project-benchmark-text">{benchmark}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-divider" />

        {/* Tech Stack Badges */}
        <div className="project-stack-row">
          {project.stack.map((tech: string, idx: number) => (
            <span key={idx} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--space-lg);
          transition: border-color 0.2s ease;
        }

        .project-card:hover {
          border-color: var(--border-prominent);
        }

        .project-meta-strip {
          background-color: var(--color-secondary);
          border-bottom: 1px solid var(--border-structural);
          padding: var(--space-xs) var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-status-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .project-status-text {
          font-family: var(--font-mono);
          color: var(--color-neutral);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .project-category-text {
          font-family: var(--font-mono);
          color: var(--color-neutral-subtle);
          font-size: 11px;
        }

        .project-links-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .project-link {
          font-family: var(--font-mono);
          color: var(--color-neutral-muted);
          font-size: 11px;
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .project-link:hover {
          color: var(--color-primary-light);
        }

        .project-live-link {
          color: var(--color-primary-light);
        }

        .project-body {
          padding: var(--space-md);
        }

        .project-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .project-tagline {
          font-size: 14px;
          line-height: 1.4;
          margin-bottom: var(--space-sm);
        }

        .project-divider {
          height: 1px;
          background-color: rgba(51, 65, 85, 0.4);
          margin-top: var(--space-sm);
          margin-bottom: var(--space-sm);
        }

        .project-section-block {
          margin-top: 6px;
          margin-bottom: 6px;
        }

        .project-section-label {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .project-architecture-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--color-neutral);
        }

        .project-benchmarks-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-benchmark-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-benchmark-bullet {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 8px;
        }

        .project-benchmark-text {
          font-family: var(--font-mono);
          color: var(--color-neutral-muted);
          font-size: 12px;
        }

        .project-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
      `}</style>
    </article>
  );
};
