import React from 'react';
import { profileData } from '../data/portfolioData';

export const SpecSheet: React.FC = () => {
  return (
    <aside className="spec-card">
      <div className="spec-header-strip">
        <span className="spec-header-code">// SYSTEM_SPECIFICATIONS</span>
        <span className="spec-header-meta">ARCH: ARM64/X86_64</span>
      </div>

      <div className="spec-body">
        {profileData.specs.map((spec: { label: string; value: string }, index: number) => (
          <div
            key={index}
            className={`spec-row ${index !== profileData.specs.length - 1 ? 'spec-row-border' : ''}`}
          >
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">{spec.value}</div>
          </div>
        ))}
      </div>

      <style>{`
        .spec-card {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-md);
          overflow: hidden;
          width: 100%;
        }

        .spec-header-strip {
          background-color: var(--color-secondary);
          border-bottom: 1px solid var(--border-structural);
          padding: var(--space-xs) var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spec-header-code {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .spec-header-meta {
          font-family: var(--font-mono);
          color: var(--color-tertiary);
          font-size: 10px;
        }

        .spec-body {
          padding: var(--space-md);
        }

        .spec-row {
          padding-top: 6px;
          padding-bottom: 6px;
        }

        .spec-row-border {
          border-bottom: 1px solid rgba(51, 65, 85, 0.4);
        }

        .spec-label {
          font-family: var(--font-mono);
          color: var(--color-neutral-subtle);
          font-size: 11px;
          font-weight: 500;
          margin-bottom: 2px;
          letter-spacing: 0.5px;
        }

        .spec-value {
          font-family: var(--font-mono);
          color: var(--color-neutral);
          font-size: 12px;
          font-weight: 400;
        }
      `}</style>
    </aside>
  );
};
