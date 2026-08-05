import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import contactRoutes from './routes/contact.js';
import {
  profile,
  disciplines,
  manifesto,
  skillLegend,
  stack,
  metrics,
  projects,
  process as processSteps,
  history,
  languages,
} from './data/content.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;
const isProd = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);

app.use(
  helmet({
    // The client loads fonts from Google Fonts; relax CSP just enough for that.
    contentSecurityPolicy: isProd
      ? {
          directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            imgSrc: ["'self'", 'data:', 'https:'],
            scriptSrc: ["'self'"],
            connectSrc: ["'self'"],
          },
        }
      : false,
  })
);
app.use(compression());
app.use(express.json({ limit: '64kb' }));

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

// --- API ------------------------------------------------------------------

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, uptime: Math.round(process.uptime()) });
});

/**
 * Everything the page renders, in one request.
 * The email and phone are deliberately excluded — those come from
 * /api/contact/details so they are not in the initial payload.
 */
app.get('/api/content', (_req, res) => {
  const { email, phone, ...publicProfile } = profile;
  res.json({
    profile: publicProfile,
    disciplines,
    manifesto,
    skillLegend,
    stack,
    metrics,
    projects,
    process: processSteps,
    history,
    languages,
  });
});

app.use('/api/contact', contactRoutes);

// --- Static client (production) -------------------------------------------

if (isProd) {
  const clientDist = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientDist, { maxAge: '1y', index: false }));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    return res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// --- Fallbacks ------------------------------------------------------------

app.use((req, res) => {
  res.status(404).json({ error: `No route for ${req.method} ${req.path}` });
});

app.use((err, _req, res, _next) => {
  console.error('[error]', err);
  res.status(500).json({ error: 'Something broke on the server.' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} (${isProd ? 'production' : 'development'})`);
});
