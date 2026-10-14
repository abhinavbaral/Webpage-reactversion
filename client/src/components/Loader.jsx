import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
const MIN_MS = 1400;
const TERMINAL_MS = 2500;
const EXIT_MS = 700;

function stageText(progress, ready) {
  if (ready) return progress >= 100 ? 'Ready' : 'Almost there';
  if (progress < 30) return 'Connecting to the server';
  return 'Loading content';
}

function logLines(elapsed, ready, error) {
  const lines = [
    { at: TERMINAL_MS, kind: 'cmd', text: '$ GET /api/content' },
    { at: TERMINAL_MS, kind: 'dim', text: 'waiting for a response...' },
    {
      at: 5000,
      kind: 'dim',
      text: 'no response yet. The server may be waking up from sleep.',
    },
    {
      at: 10000,
      kind: 'dim',
      text: 'still waiting. A cold start can take up to a minute.',
    },
  ].filter((l) => elapsed >= l.at);

  if (ready) {
    lines.push({ kind: 'ok', text: '\u2714 200 content received' });
    lines.push({ kind: 'dim', text: 'rendering page...' });
  }
  if (error) lines.push({ kind: 'err', text: '\u2716 could not reach the server' });
  return lines;
}

export default function Loader({ ready, error, onRetry, onDone }) {
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const startedAt = useRef(performance.now());
  const rootRef = useRef(null);

   useLayoutEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, []);


  useEffect(() => {
    if (error) return undefined;
    let raf;
    const tick = (now) => {
      const spent = now - startedAt.current;
      const mayFinish = ready && spent >= MIN_MS;
      const target = mayFinish ? 100 : 88;
      const rate = mayFinish ? 0.14 : 0.035;
      setProgress((p) => {
        const next = p + (target - p) * rate;
        return target - next < 0.2 ? target : next;
      });
      setElapsed(spent);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, error]);


  useEffect(() => {
    if (progress < 100 || leaving) return undefined;
    const hold = setTimeout(() => setLeaving(true), 250);
    return () => clearTimeout(hold);
  }, [progress, leaving]);

  useEffect(() => {
    if (!leaving) return undefined;
    const t = setTimeout(onDone, EXIT_MS);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  const shown = Math.round(progress);
  const showTerminal = elapsed >= TERMINAL_MS || Boolean(error);
  const lines = logLines(elapsed, ready, error);

  return (
    <div
      ref={rootRef}
      className={`loader${leaving ? ' is-leaving' : ''}${error ? ' has-error' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy={!error}
    >
      <div className="loader__stage">
        <h1 className="loader__name" aria-label="Abhinav">
          <span className="loader__outline" aria-hidden="true">
            ABHINAV
          </span>
          <span
            className="loader__fill"
            aria-hidden="true"
            style={{ '--p': `${progress}%` }}
          >
            ABHINAV
          </span>
        </h1>

        {showTerminal && (
          <div className="loader__terminal" aria-hidden="true">
            {lines.map((line) => (
              <p className={`loader__line loader__line--${line.kind}`} key={line.text}>
                {line.text}
              </p>
            ))}
            {!error && <span className="loader__cursor" />}
          </div>
        )}

        <div className="loader__meta">
          {error ? (
            <>
              <p className="loader__text">
                Could not reach the server. Check your connection and try again.
              </p>
              <button type="button" className="loader__retry" onClick={onRetry}>
                Try again
              </button>
            </>
          ) : (
            <>
              <p className="loader__text">{stageText(shown, ready)}</p>
              <p className="loader__count" aria-hidden="true">
                {String(shown).padStart(3, '0')}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
