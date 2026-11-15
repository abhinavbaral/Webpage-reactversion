import React, { useEffect, useState } from 'react';

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
