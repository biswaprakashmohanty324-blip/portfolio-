import React from 'react';
import { skillsData, SkillCategory } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="section-divider">
      <div className="container">
        <div className="section-header">
          <div className="section-code">// SECTION_04</div>
          <h2 className="section-title">TECHNICAL SKILLS & DOMAIN MATRIX</h2>
        </div>

        <div className="skills-matrix-grid">
          {skillsData.map((category: SkillCategory, idx: number) => (
            <div key={idx} className="skills-category-card">
              <div className="skills-card-header">
                <span className="skills-category-name">
                  // {category.name.toUpperCase()}
                </span>
              </div>
              <div className="skills-chips-container">
                {category.skills.map((skill: string, skillIdx: number) => (
                  <span key={skillIdx} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-matrix-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .skills-category-card {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .skills-card-header {
          background-color: var(--color-secondary);
          border-bottom: 1px solid var(--border-structural);
          padding: var(--space-xs) var(--space-md);
        }

        .skills-category-name {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .skills-chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: var(--space-md);
        }
      `}</style>
    </section>
  );
};
