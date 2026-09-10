import React from 'react';
import { profileData } from '../data/portfolioData';
import { SpecSheet } from './SpecSheet';
import profileImg from '../../assets/profile.jpg';

interface HeroWorkbenchProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroWorkbench: React.FC<HeroWorkbenchProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="hero-section section-divider">
      <div className="container hero-layout">
        {/* Left / Main Column */}
        <div className="hero-main-col">
          {/* Top Profile Photo Frame */}
          <div className="hero-photo-container">
            <div className="hero-photo-frame">
              <img
                src={profileImg}
                alt="Biswa Prakash Mohanty"
                className="hero-profile-img"
              />
              <div className="hero-photo-status-tag">
                <span className="hero-status-dot" />
                <span className="hero-photo-status-text">SYS_ID: VERIFIED // SDE</span>
              </div>
            </div>
          </div>

          <div className="hero-breadcrumb-tag">
            <span>SYS_INIT // DEVELOPER_WORKBENCH</span>
          </div>

          {/* Bold Name Headline */}
          <h1 className="hero-headline">{profileData.headline}</h1>
          <div className="hero-role-badge">SOFTWARE ENGINEER // FULL-STACK & SYSTEMS</div>

          <p className="hero-subheadline">{profileData.subheadline}</p>

          {/* Action Button Row */}
          <div className="hero-action-row">
            <button
              onClick={() => onNavigate('projects')}
              className="btn btn-primary"
            >
              INSPECT PROJECTS ↓
            </button>

            <button
              onClick={() => onNavigate('terminal')}
              className="btn btn-secondary"
            >
              LAUNCH TERMINAL &gt;
            </button>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        {/* Right Column: Spec Sheet */}
        <div className="hero-spec-col">
          <SpecSheet />
        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--space-xl);
          align-items: flex-start;
        }

        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
          }
        }

        .hero-photo-container {
          margin-bottom: var(--space-lg);
        }

        .hero-photo-frame {
          width: 140px;
          height: 180px;
          background-color: var(--surface-subtle);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-hard);
        }

        .hero-profile-img {
          width: 100%;
          height: 152px;
          object-fit: cover;
          display: block;
        }

        .hero-photo-status-tag {
          height: 28px;
          background-color: var(--color-secondary);
          border-top: 1px solid var(--border-structural);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding-left: 6px;
          padding-right: 6px;
        }

        .hero-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--status-success);
        }

        .hero-photo-status-text {
          font-family: var(--font-mono);
          color: var(--color-neutral);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hero-breadcrumb-tag {
          display: inline-block;
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-sm);
          padding: 4px 8px;
          margin-bottom: var(--space-sm);
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .hero-headline {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
          text-transform: uppercase;
          color: var(--color-neutral);
        }

        .hero-role-badge {
          font-family: var(--font-mono);
          color: var(--color-primary-light);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: var(--space-md);
        }

        .hero-subheadline {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: var(--space-xl);
          max-width: 640px;
        }

        .hero-action-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .hero-spec-col {
          width: 100%;
        }
      `}</style>
    </section>
  );
};
