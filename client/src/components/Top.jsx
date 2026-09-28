import React, { useEffect, useState } from 'react';
import { useActiveSection, useReveal } from '../hooks/useReveal.js';
import profileImg from "../assets/img/profile.jpg";

// Add 'proof' back (after 'stack') when metrics.enabled is true in content.js.
const SECTIONS = ['stack', 'work', 'history', 'process'];
const LABELS = {
  stack: 'Skills',
  proof: 'Proof',
  work: 'Work',
  history: 'History',
  process: 'Process',
};

function Arrow() {
  return (
    <svg
      className="btn__arrow"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 5h13.5M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

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


/**
 * Two independent axes: light/dark and crimson/lime.
 * Four combinations, driven by two attributes on <html>.
 * Theme defaults to the visitor's OS setting; accent defaults to crimson.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [accent, setAccent] = useState('crimson');

  // Follow the OS on first paint, and keep following it until the visitor
  // makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mq.matches ? 'dark' : 'light');

    const onChange = (event) => setTheme(event.matches ? 'dark' : 'light');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (accent === 'lime') root.setAttribute('data-accent', 'lime');
    else root.removeAttribute('data-accent');
  }, [accent]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const nextAccent = accent === 'lime' ? 'crimson' : 'lime';

  return (
    <div className="theme">
      <button
        type="button"
        className="theme__btn"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
      >
        {theme === 'dark' ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <button
        type="button"
        className="theme__btn theme__btn--accent"
        onClick={() => setAccent(nextAccent)}
        aria-label={`Switch accent to ${nextAccent}`}
        title={`Switch accent to ${nextAccent}`}
      >
        <span className="theme__dot" aria-hidden="true" />
      </button>
    </div>
  );
}

export function Hero({ profile, disciplines = [] }) {
  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');

  return (
    <header className="hero shell" id="top">
      <div className="hero__meta">
        <p className="eyebrow">
          {profile.name} — {profile.role.toLowerCase()}
        </p>
        <p className="eyebrow">{profile.availability}</p>
      </div>
      <hr className="rule-dashed" />

      <div className="hero__grid">
        <div>
          <h1 className="display hero__name">
            <span className="line-1">{first}</span>
            <span className="line-2">{last}</span>
          </h1>

          {disciplines.length > 0 ? (
            <ul className="disciplines">
              {disciplines.map((d) => (
                <li className="disciplines__item" key={d}>
                  {d}
                </li>
              ))}
            </ul>
          ) : null}

          <p className="hero__promise">// {profile.promise}</p>

          <div className="hero__actions">
            <a className="btn btn--fill" href="#contact">
              Start a project <Arrow />
            </a>
            <a className="btn btn--ghost" href="#work">
              See the work
            </a>
          </div>
        </div>

        <aside className="hero__card">
          <dl>
            <div className="row">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="row">
              <dt>Builds</dt>
              <dd>Full-stack · Mobile</dd>
            </div>
            <div className="row">
              <dt>Status</dt>
              <dd>Open for work</dd>
            </div>
          </dl>
          <div className="hero__stamp">// {profile.promise}</div>
        </aside>
      </div>

      <div className="hero__badge" aria-hidden="true">
  <img src={profileImg} alt="Profile" />
</div>
    </header>
  );
}

export function Manifesto({ manifesto }) {
  const ref = useReveal();

  return (
    <section className="manifesto">
      <div className="shell reveal" ref={ref}>
        <p className="eyebrow">// {manifesto.eyebrow}</p>
        <h2 className="manifesto__head">
          {manifesto.lead}{' '}
          <span className="manifesto__mark">{manifesto.highlight}</span>
        </h2>
        <p className="manifesto__body">{manifesto.body}</p>
      </div>
    </section>
  );
}

export { Arrow };
