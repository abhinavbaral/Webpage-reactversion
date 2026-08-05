const BASE = import.meta.env.VITE_API_BASE;

if (!BASE) {
  throw new Error("VITE_API_BASE is not defined. Check your environment variables.");
}

async function request(path, options = {}) {
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    let payload = null;

    try {
      payload = await res.json();
    } catch {
      payload = null;
    }

    if (!res.ok) {
      const error = new Error(
        payload?.error ?? `Request failed (${res.status})`
      );
      error.status = res.status;
      error.errors = payload?.errors ?? null;
      throw error;
    }

    return payload;
  } catch (err) {
    // 🔥 This is what shows your current error
    console.error("API request failed:", err.message);
    throw new Error("Could not reach the server");
  }
}

// API functions
export const getContent = () => request('/api/content');

export const getContactDetails = () =>
  request('/api/contact/details');

export const sendEnquiry = (body) =>
  request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
  });