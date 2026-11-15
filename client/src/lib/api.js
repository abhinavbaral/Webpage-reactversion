// Talks to the Node server. Only the contact form and a warm-up ping need it;
// the page itself renders from src/data/content.js and never waits on this.
//
// VITE_API_BASE is empty by default, so requests go to the same origin
// (what you want when the server also serves the built client, and in dev via
// the Vite proxy). Set it only if the API lives on a different domain.
const BASE = import.meta.env.VITE_API_BASE ?? '';
const TIMEOUT_MS = 15000;

async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      ...options,
    });
  } catch {
    // Only genuine network failures and timeouts land here.
    throw new Error('Could not reach the server. Please try again in a moment.');
  } finally {
    clearTimeout(timer);
  }

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    payload = null;
  }

  if (!res.ok) {
    // Keep the server's own message and field errors (validation, rate limit).
    const error = new Error(payload?.error ?? `Request failed (${res.status})`);
    error.status = res.status;
    error.errors = payload?.errors ?? null;
    throw error;
  }
  return payload;
}

export const getContactDetails = () => request('/api/contact/details');

export const sendEnquiry = (body) =>
  request('/api/contact', { method: 'POST', body: JSON.stringify(body) });

/**
 * Wakes a sleeping server (free hosting spins down when idle) so it is ready
 * by the time someone reaches the contact form. Resolves true/false, never rejects.
 */
export function pingServer() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  return fetch(`${BASE}/api/health`, { cache: 'no-store', signal: controller.signal })
    .then((res) => res.ok)
    .catch(() => false)
    .finally(() => clearTimeout(timer));
}
