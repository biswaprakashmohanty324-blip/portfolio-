import React from 'react';
import { experienceData, ExperienceItem } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="section-divider">
      <div className="container">
        <div className="section-header">
          <div className="section-code">// SECTION_03</div>
          <h2 className="section-title">ENGINEERING EXPERIENCE & MILESTONES</h2>
        </div>

        <div className="timeline-list">
          {experienceData.map((item: ExperienceItem, index: number) => (
            <div key={item.id} className="timeline-item">
              {/* Left guideline & node */}
              <div className="timeline-line-col">
                <div className="timeline-node-marker" />
                {index !== experienceData.length - 1 && (
                  <div className="timeline-vertical-line" />
                )}
              </div>

              {/* Content block */}
              <div className="timeline-content-col">
                <div className="timeline-item-header">
                  <div className="timeline-period">{item.period}</div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-company">@ {item.company}</span>
                </div>

                <p className="timeline-scope">{item.scope}</p>

                <div className="timeline-metrics-box">
                  {item.metrics.map((metric: string, idx: number) => (
                    <div key={idx} className="timeline-metric-row">
                      <span className="timeline-metric-bullet">▸</span>
                      <span className="timeline-metric-text">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-list {
          padding-left: 4px;
        }

        .timeline-item {
          display: flex;
          margin-bottom: var(--space-xl);
        }

        .timeline-line-col {
          width: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .timeline-node-marker {
          width: 8px;
          height: 8px;
          background-color: var(--color-primary);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .timeline-vertical-line {
          width: 1px;
          flex: 1;
          background-color: var(--border-structural);
          margin-top: 4px;
        }

        .timeline-content-col {
          flex: 1;
          padding-left: var(--space-sm);
        }

        .timeline-item-header {
          margin-bottom: 6px;
        }

        .timeline-period {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .timeline-role {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-neutral);
          display: inline-block;
          margin-right: 6px;
        }

        .timeline-company {
          font-family: var(--font-mono);
          color: var(--color-neutral-subtle);
          font-size: 13px;
        }

        .timeline-scope {
          font-size: 14px;
          line-height: 1.5;
          color: var(--color-neutral-muted);
          margin-bottom: 8px;
        }

        .timeline-metrics-box {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-sm);
          padding: var(--space-sm);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .timeline-metric-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .timeline-metric-bullet {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 12px;
          line-height: 18px;
        }

        .timeline-metric-text {
          font-size: 13px;
          line-height: 1.5;
          color: var(--color-neutral);
        }
      `}</style>
    </section>
  );
};
