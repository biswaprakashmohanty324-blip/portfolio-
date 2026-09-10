import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileData.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="contact-section section-divider">
      <div className="container">
        <div className="section-header">
          <div className="section-code">// SECTION_05</div>
          <h2 className="section-title">CONTACT & COMMUNICATION REGISTER</h2>
        </div>

        <div className="contact-card">
          <div className="contact-card-header">
            <span className="contact-header-title">DIRECT_CHANNELS</span>
            <span className="contact-header-meta">STATUS: OPEN_TO_ROLES</span>
          </div>

          <div className="contact-body">
            <p className="contact-invitation">
              Interested in collaborating on distributed systems, cross-platform client architecture, or high-throughput services?
            </p>

            <div className="contact-actions-row">
              <a
                href={`mailto:${profileData.email}`}
                className="btn btn-primary"
              >
                SEND EMAIL ✉
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
              >
                {copied ? '✓ COPIED TO CLIPBOARD' : `COPY: ${profileData.email}`}
              </button>
            </div>

            <div className="contact-divider" />

            <div className="contact-links-row">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GITHUB: biswaprakashmohanty324-blip ↗
              </a>
              <a
                href={profileData.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                REPOSITORY: portfolio- ↗
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer System Register */}
        <div className="footer-system-register">
          <span className="footer-text">
            ENGINEERED WITH REACT 18 + VITE // TECHNICAL BLUEPRINT v3.0
          </span>
          <span className="footer-copy">
            © {new Date().getFullYear()} {profileData.name}. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>

      <style>{`
        .contact-card {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .contact-card-header {
          background-color: var(--color-secondary);
          border-bottom: 1px solid var(--border-structural);
          padding: var(--space-xs) var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-header-title {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .contact-header-meta {
          font-family: var(--font-mono);
          color: var(--status-success);
          font-size: 10px;
          font-weight: 600;
        }

        .contact-body {
          padding: var(--space-lg);
        }

        .contact-invitation {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: var(--space-lg);
          max-width: 600px;
        }

        .contact-actions-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);
        }

        .contact-divider {
          height: 1px;
          background-color: rgba(51, 65, 85, 0.4);
          margin-top: var(--space-md);
          margin-bottom: var(--space-md);
        }

        .contact-links-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .contact-link {
          font-family: var(--font-mono);
          color: var(--color-primary-light);
          font-size: 12px;
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .contact-link:hover {
          color: var(--color-neutral);
        }

        .footer-system-register {
          margin-top: var(--space-2xl);
          padding-top: var(--space-md);
          border-top: 1px solid var(--border-structural);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-text, .footer-copy {
          font-family: var(--font-mono);
          color: var(--color-neutral-subtle);
          font-size: 11px;
        }
      `}</style>
    </footer>
  );
};
