import heroImage from '../assets/img/profile.jpg';
import { pingServer } from './api.js';

// Started the moment the app loads, so these overlap with the intro instead of
// running after it. Each promise resolves true/false and never rejects.
const fonts =
  typeof document !== 'undefined' && document.fonts
    ? Promise.all([
        document.fonts.load('400 1em "Archivo"'),
        document.fonts.load('1em "Archivo Black"'),
        document.fonts.load('1em "JetBrains Mono"'),
      ])
        .then(() => true)
        .catch(() => false)
    : Promise.resolve(true);

const image = new Promise((resolve) => {
  const img = new Image();
  img.onload = () => resolve(true);
  img.onerror = () => resolve(false);
  img.src = heroImage;
});

export const bootChecks = { fonts, image, server: pingServer() };

const SEEN_KEY = 'boot-seen';

/** The full intro plays once per browser session; reloads skip straight in. */
export function bootSeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

export function markBootSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    /* private mode: the intro just plays again next time */
  }
}
