import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { profile } from '../../data/content.js';
import { bootChecks, markBootSeen } from '../../lib/boot.js';

const MIN_MS = 900; // shortest intro, so it never just flashes
const TERMINAL_MS = 1500; // past this, show what is actually still pending
const MAX_MS = 4000; // never hold the page longer than this
const HOLD_MS = 200; // pause at 100% before the wipe
const EXIT_MS = 600; // keep in sync with .loader in loader.css

const NAME = profile.shortName;
const LETTERS = NAME.split('');

const ROWS = [
  { key: 'fonts', cmd: 'load fonts', wait: 'waiting', ok: 'ok', fail: 'skipped' },
  { key: 'image', cmd: 'load images', wait: 'waiting', ok: 'ok', fail: 'skipped' },
  { key: 'server', cmd: 'ping server', wait: 'waking up', ok: 'online', fail: 'offline' },
];

function statusText(progress, done) {
  if (progress >= 100) return 'Ready';
  if (done.fonts === null) return 'Loading fonts';
  if (done.image === null) return 'Loading images';
  return 'Almost there';
}

/**
 * Intro screen. It waits for the things that make the first paint look right
 * (fonts, hero image), never for the server. If that is slow, it shows a
 * terminal that reports each check as it really stands.
 */
export default function Loader({ onLeave, onDone }) {
  const [progress, setProgress] = useState(0);
  const [spent, setSpent] = useState(0);
  const [done, setDone] = useState({ fonts: null, image: null, server: null });
  const [leaving, setLeaving] = useState(false);
  // Fixed at mount: the clock must not restart when `ready` changes.
  const startRef = useRef(performance.now());

  // Swap the static shell from index.html for this component, same background.
  useLayoutEffect(() => {
    document.getElementById('boot')?.remove();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    let alive = true;
    Object.entries(bootChecks).forEach(([key, promise]) => {
      promise.then((ok) => alive && setDone((d) => ({ ...d, [key]: ok })));
    });
    return () => {
      alive = false;
    };
  }, []);

  const assetsReady = done.fonts !== null && done.image !== null;
  const ready = assetsReady || spent >= MAX_MS;

  // Progress follows time, but is held at 90% until the assets have settled.
  useEffect(() => {
    if (leaving) return undefined;
    let raf;
    const tick = (now) => {
      const t = now - startRef.current;
      const eased = 1 - (1 - Math.min(1, t / MIN_MS)) ** 3;
      const target = ready ? eased * 100 : Math.min(90, eased * 100);
      setSpent(t);
      setProgress((p) => {
        const next = p + (target - p) * 0.25;
        return target - next < 0.3 && target >= 100 ? 100 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, leaving]);

  useEffect(() => {
    if (progress < 100 || leaving) return undefined;
    const t = setTimeout(() => {
      setLeaving(true);
      markBootSeen();
      onLeave();
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [progress, leaving, onLeave]);

  useEffect(() => {
    if (!leaving) return undefined;
    const t = setTimeout(onDone, EXIT_MS);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  const shown = Math.round(progress);
  const lit = Math.floor((progress / 100) * LETTERS.length + 0.001);
  const showTerminal = spent >= TERMINAL_MS && !leaving;

  return (
    <div className={`loader${leaving ? ' is-leaving' : ''}`} role="status" aria-live="polite">
      <span className="loader__sr">Loading {NAME}</span>

      <div className="loader__top" aria-hidden="true">
        <span>{profile.name}</span>
        <span>{profile.role}</span>
      </div>

      <div className="loader__name" aria-hidden="true">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={`loader__letter${i < lit ? ' is-on' : ''}`}
            style={{ '--i': i }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="loader__foot">
        <div className="loader__bar" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </div>

        <div className="loader__row">
          {showTerminal ? (
            <div className="loader__terminal" aria-hidden="true">
              {ROWS.map((row) => {
                const state = done[row.key];
                const text = state === null ? row.wait : state ? row.ok : row.fail;
                return (
                  <p className="loader__line" key={row.key}>
                    <span>$ {row.cmd}</span>
                    <span
                      className={`loader__state${
                        state === null ? ' is-wait' : state ? ' is-ok' : ' is-fail'
                      }`}
                    >
                      {text}
                      {state === null && <i className="loader__cursor" />}
                    </span>
                  </p>
                );
              })}
              {!assetsReady && spent >= MAX_MS && (
                <p className="loader__line loader__line--note">continuing without waiting</p>
              )}
            </div>
          ) : (
            <p className="loader__text">{statusText(shown, done)}</p>
          )}
          <p className="loader__count" aria-hidden="true">
            {String(shown).padStart(3, '0')}
          </p>
        </div>
      </div>
    </div>
  );
}
