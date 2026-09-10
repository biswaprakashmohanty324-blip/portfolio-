import React from 'react';
import { profileData } from '../data/portfolioData';

interface SystemBarProps {
  onNavigate: (sectionId: string) => void;
}

export const SystemBar: React.FC<SystemBarProps> = ({ onNavigate }) => {
  return (
    <header className="sys-bar-wrapper">
      <div className="container sys-bar-inner">
        {/* Identity & Status Beacon */}
        <div className="sys-identity-group">
          <button onClick={() => onNavigate('hero')} className="sys-brand-link">
            <span className="sys-brand-code">[BP]</span>
            <span className="sys-brand-name">{profileData.name.toUpperCase()}</span>
            <span className="sys-brand-role">// {profileData.title.toUpperCase()}</span>
          </button>

          <div className="sys-status-chip">
            <span className="sys-status-dot" />
            <span className="sys-status-text">SYS: ACTIVE // READY</span>
          </div>
        </div>

        {/* Navigation Action Links */}
        <nav className="sys-nav-group" aria-label="Main Navigation">
          <button onClick={() => onNavigate('projects')} className="sys-nav-link">
            PROJECTS
          </button>
          <button onClick={() => onNavigate('terminal')} className="sys-nav-link">
            TERMINAL
          </button>
          <button onClick={() => onNavigate('experience')} className="sys-nav-link">
            EXPERIENCE
          </button>
          <button onClick={() => onNavigate('skills')} className="sys-nav-link">
            SKILLS
          </button>
          <button onClick={() => onNavigate('contact')} className="sys-nav-link">
            CONTACT
          </button>

          <a
            href="https://example.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary sys-resume-btn"
          >
            RESUME.PDF ↗
          </a>
        </nav>
      </div>

      <style>{`
        .sys-bar-wrapper {
          width: 100%;
          background-color: var(--surface-canvas);
          border-bottom: 1px solid var(--border-structural);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .sys-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-sm);
          padding-bottom: var(--space-sm);
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .sys-identity-group {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        .sys-brand-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-align: left;
        }

        .sys-brand-code {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 13px;
          font-weight: 700;
        }

        .sys-brand-name {
          font-family: var(--font-sans);
          color: var(--color-neutral);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .sys-brand-role {
          font-family: var(--font-mono);
          color: var(--color-tertiary);
          font-size: 12px;
          font-weight: 500;
        }

        .sys-status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 8px;
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-sm);
        }

        .sys-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--status-success);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .sys-status-text {
          font-family: var(--font-mono);
          color: var(--color-neutral-muted);
          font-size: 11px;
          font-weight: 500;
        }

        .sys-nav-group {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        .sys-nav-link {
          font-family: var(--font-mono);
          color: var(--color-neutral-muted);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 4px 6px;
          transition: color 0.15s ease;
        }

        .sys-nav-link:hover {
          color: var(--color-primary-light);
        }

        .sys-resume-btn {
          font-size: 11px;
          padding: 6px 10px;
        }
      `}</style>
    </header>
  );
};
