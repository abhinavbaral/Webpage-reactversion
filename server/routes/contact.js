import { Router } from 'express';
import { profile } from '../data/content.js';

const router = Router();

// Simple in-memory rate limit. Enough for a portfolio site on a single instance.
// If you ever run more than one dyno, move this to Redis or use express-rate-limit.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimit(req, res, next) {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const record = hits.get(ip) ?? { count: 0, start: now };

  if (now - record.start > WINDOW_MS) {
    record.count = 0;
    record.start = now;
  }

  record.count += 1;
  hits.set(ip, record);

  if (record.count > MAX_PER_WINDOW) {
    return res.status(429).json({
      error: 'Too many messages from this address. Try again in fifteen minutes.',
    });
  }
  return next();
}

// Periodically clear old entries so the map cannot grow without bound.
setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS;
  for (const [ip, record] of hits) {
    if (record.start < cutoff) hits.delete(ip);
  }
}, WINDOW_MS).unref();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * GET /api/contact/details
 * Contact details are served here rather than baked into the HTML so that
 * scrapers crawling the static page do not harvest the address and number.
 */
router.get('/details', (_req, res) => {
  res.json({
    email: profile.email,
    phone: profile.phone,
    github: profile.githubUrl,
    linkedin: profile.linkedinUrl,
  });
});

/**
 * POST /api/contact
 * Accepts an enquiry. Validates, then hands off to whatever delivery you wire up.
 */
router.post('/', rateLimit, async (req, res) => {
  const { name, email, message, budget, honeypot } = req.body ?? {};

  // Bots fill every field they can see. Humans never see this one.
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  const errors = {};
  if (!name || String(name).trim().length < 2) {
    errors.name = 'Enter your name.';
  }
  if (!email || !EMAIL_RE.test(String(email).trim())) {
    errors.email = 'Enter an email address I can reply to.';
  }
  if (!message || String(message).trim().length < 20) {
    errors.message = 'Tell me a bit more — at least a couple of sentences.';
  }
  if (String(message ?? '').length > 4000) {
    errors.message = 'That is longer than 4000 characters. Trim it down.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const enquiry = {
    receivedAt: new Date().toISOString(),
    name: String(name).trim().slice(0, 120),
    email: String(email).trim().toLowerCase().slice(0, 200),
    budget: budget ? String(budget).trim().slice(0, 60) : null,
    message: String(message).trim(),
  };

  // ---------------------------------------------------------------------
  // DELIVERY. Pick one and wire it up before you launch.
  //
  //  Resend      npm i resend
  //              const { Resend } = await import('resend');
  //              await new Resend(process.env.RESEND_API_KEY).emails.send({...});
  //
  //  Nodemailer  npm i nodemailer  (works fine with a Gmail app password)
  //
  //  Until then, enquiries are logged to the server console only. On Render
  //  that means they live in the log tail and nowhere else. Do not ship like this.
  // ---------------------------------------------------------------------
  console.log('[enquiry]', JSON.stringify(enquiry));

  return res.status(201).json({
    ok: true,
    message: 'Message received. I reply within one working day.',
  });
});

export default router;
