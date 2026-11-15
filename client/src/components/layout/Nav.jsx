import React from 'react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { Arrow } from '../ui/Arrow.jsx';
import { ThemeToggle } from './ThemeToggle.jsx';

// Add 'proof' back (after 'stack') when metrics.enabled is true in content.js.
const SECTIONS = ['stack', 'work', 'history', 'process'];
const LABELS = {
  stack: 'Skills',
  proof: 'Proof',
  work: 'Work',
  history: 'History',
  process: 'Process',
};

export function Nav({ profile }) {
  const active = useActiveSection(SECTIONS);

  return (
    <nav className="nav">
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          {profile.shortName}
          <sup>®</sup>
        </a>

        <ul className="nav__links">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                className={`nav__link${active === id ? ' is-active' : ''}`}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
              >
                {LABELS[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__end">
          <ThemeToggle />
          <a className="btn btn--fill nav__cta" href="#contact">
            Say hello <Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}
