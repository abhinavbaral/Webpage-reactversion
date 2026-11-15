import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import contactRoutes from './routes/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;
const isProd = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);

app.use(
  helmet({
    // Fonts are self-hosted, so the policy needs no third-party origins.
    contentSecurityPolicy: isProd
      ? {
          directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            fontSrc: ["'self'"],
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

// Same-origin needs no CORS. If the client is on another domain, list every
// exact origin in FRONTEND_URL, comma separated (with and without www).
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((o) => o.trim().replace(/\/$/, ''))
  .filter(Boolean);
app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true }));

// --- API ------------------------------------------------------------------

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, uptime: Math.round(process.uptime()) });
});

app.use('/api/contact', contactRoutes);

// --- Static client (production) -------------------------------------------

if (isProd) {
  const clientDist = path.join(__dirname, '..', 'client', 'dist');
  // Hashed build files never change, so cache them for a year. Everything else
  // (favicon, theme-init.js, og-image, downloads) revalidates after an hour.
  app.use('/assets', express.static(path.join(clientDist, 'assets'), { maxAge: '1y', immutable: true }));
  app.use(express.static(clientDist, { maxAge: '1h', index: false }));

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
