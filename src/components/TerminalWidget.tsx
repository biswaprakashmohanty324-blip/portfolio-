import React, { useState, useRef, useEffect } from 'react';
import { profileData, projectsData, skillsData } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: string[];
}

export const TerminalWidget: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'sys.status',
      output: [
        'Biswa Prakash Mohanty Workbench v3.0.0 [React 18 + Vite / Linux-x86_64]',
        'Type "help" to view available terminal routines.',
      ],
    },
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: string[] = [];

    switch (cmd) {
      case 'help':
        output = [
          'AVAILABLE ROUTINES:',
          '  help      - Output this help register',
          '  about     - Output engineering biography and core competencies',
          '  projects  - Query featured project architectures and benchmarks',
          '  skills    - Print categorized technical skill matrix',
          '  contact   - Output direct communication endpoints',
          '  specs     - Print system runtime specifications',
          '  clear     - Flush terminal output buffer',
        ];
        break;

      case 'about':
        output = [
          `NAME: ${profileData.name}`,
          `TITLE: ${profileData.title}`,
          `STATUS: ${profileData.systemStatus}`,
          'BIO: Software engineer focused on building resilient distributed systems,',
          'low-latency microservices, and high-density cross-platform client interfaces.',
        ];
        break;

      case 'projects':
        output = [
          'FEATURED REPOSITORIES & SYSTEMS:',
          ...projectsData.map(
            (p) => `  [${p.status}] ${p.title} (${p.category}) -> ${p.benchmarks[0]}`
          ),
          'Explore project cards on the page for detailed architecture breakdowns.',
        ];
        break;

      case 'skills':
        output = [
          'SYSTEM CAPABILITIES & DOMAINS:',
          ...skillsData.map(
            (cat) => `  ${cat.name.toUpperCase()}: ${cat.skills.join(', ')}`
          ),
        ];
        break;

      case 'specs':
        output = [
          'SYSTEM TELEMETRY:',
          ...profileData.specs.map((s) => `  ${s.label}: ${s.value}`),
        ];
        break;

      case 'contact':
        output = [
          'COMMUNICATION ENDPOINTS:',
          `  EMAIL:    ${profileData.email}`,
          `  GITHUB:   ${profileData.github}`,
          `  LINKEDIN: ${profileData.linkedin}`,
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = [
          `Command not recognized: "${cmd}".`,
          'Type "help" to inspect valid operational routines.',
        ];
        break;
    }

    setHistory((prev: HistoryItem[]) => [
      ...prev,
      { id: String(Date.now()), command: rawCmd, output },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-card">
      {/* Terminal Title Bar */}
      <div className="terminal-title-bar">
        <div className="terminal-controls">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
        </div>
        <span className="terminal-title-text">session@biswa-workbench:~ (bash)</span>
        <span className="terminal-status-tag">● TTY1</span>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="terminal-chips-bar">
        <span className="terminal-chip-label">ROUTINES:</span>
        {['help', 'about', 'projects', 'skills', 'contact', 'clear'].map((cmd: string) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="terminal-cmd-chip"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {history.map((item: HistoryItem) => (
          <div key={item.id} className="terminal-history-item">
            <div className="terminal-prompt-row">
              <span className="terminal-arrow">&gt;</span>
              <span className="terminal-cmd-text">{item.command}</span>
            </div>
            <div className="terminal-output-lines">
              {item.output.map((line: string, idx: number) => (
                <div key={idx} className="terminal-output-line">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Input Line */}
        <div className="terminal-input-row">
          <span className="terminal-arrow">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type routine (e.g. help, projects, skills)..."
            className="terminal-input"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
          />
        </div>

        <div ref={outputEndRef} />
      </div>

      <style>{`
        .terminal-card {
          background-color: var(--surface-deep);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-top: var(--space-lg);
          margin-bottom: var(--space-lg);
          box-shadow: var(--shadow-hard-lg);
        }

        .terminal-title-bar {
          background-color: var(--color-secondary);
          border-bottom: 1px solid var(--border-structural);
          padding: var(--space-xs) var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .terminal-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background-color: var(--status-error); }
        .dot-yellow { background-color: var(--status-warning); }
        .dot-green { background-color: var(--status-success); }

        .terminal-title-text {
          font-family: var(--font-mono);
          color: var(--color-neutral-muted);
          font-size: 11px;
          font-weight: 500;
        }

        .terminal-status-tag {
          font-family: var(--font-mono);
          color: var(--status-success);
          font-size: 10px;
          font-weight: 700;
        }

        .terminal-chips-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          padding: 8px var(--space-md);
          background-color: rgba(15, 23, 42, 0.6);
          border-bottom: 1px solid var(--border-structural);
        }

        .terminal-chip-label {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 10px;
          font-weight: 700;
          margin-right: 4px;
        }

        .terminal-cmd-chip {
          background-color: var(--surface-subtle);
          border: 1px solid var(--border-structural);
          border-radius: var(--radius-sm);
          padding: 2px 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-neutral);
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .terminal-cmd-chip:hover {
          background-color: var(--color-primary-muted);
          border-color: var(--color-primary);
          color: var(--color-primary-light);
        }

        .terminal-body {
          height: 260px;
          overflow-y: auto;
          padding: var(--space-md);
          font-family: var(--font-mono);
        }

        .terminal-history-item {
          margin-bottom: var(--space-sm);
        }

        .terminal-prompt-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .terminal-arrow {
          color: var(--color-primary);
          font-weight: 700;
          font-size: 13px;
        }

        .terminal-cmd-text {
          color: var(--color-neutral);
          font-size: 13px;
          font-weight: 600;
        }

        .terminal-output-lines {
          padding-left: 16px;
        }

        .terminal-output-line {
          color: var(--color-neutral-muted);
          font-size: 12px;
          line-height: 1.5;
        }

        .terminal-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--color-neutral);
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 0;
        }

        .terminal-input::placeholder {
          color: var(--color-tertiary);
        }
      `}</style>
    </div>
  );
};
