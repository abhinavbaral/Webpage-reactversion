# abhinav-portfolio

React (Vite) client + Express API for Abhinav Baral — full stack developer,
mobile apps, and content writing.

Sections: hero → manifesto → (01) skills → (02) proof → (03) work →
(05) studied & worked → (06) process → contact.

Skill proficiency uses two honest levels — `daily` and `working` — rather than
percentage bars. "React 85%" is 85% of what? Nobody can answer it and clients
read it as decoration.

## Run it

```bash
npm run install:all

# two terminals
npm run dev:server   # Express on :4000
npm run dev:client   # Vite on :5173, proxies /api to :4000
```

Open http://localhost:5173

## Build and serve as one app

```bash
npm run build    # builds client/dist
npm start        # Express serves the API *and* the built client on :4000
```

## Where the content lives

**`server/data/content.js` is the only file you edit to change the site.**
Nothing is hardcoded in the React components. Change a project name there and it
changes on the page.

## Before you deploy — five things

1. **Fill in the metrics.** `metrics.rows` in `content.js` is full of `—` and
   `REPLACE ME`. Every number must be one you can reproduce live: run Lighthouse
   on your own deployed project, read the bundle size from `vite build`, time an
   endpoint with `curl`. If you can't fill three rows honestly, set
   `metrics.enabled = false` and the section disappears cleanly.

2. **Wire up email delivery.** `server/routes/contact.js` currently only
   `console.log`s enquiries. On Render that means they exist in the log tail and
   nowhere else. Install `resend` or `nodemailer` and fill in the marked block.

3. **Add the live links.** Every project has `live: null` because I don't know
   your deployment URLs. Cards with no live link render as "Not deployed" —
   accurate, but deploy them and it reads much better.

4. **Check the GitHub URLs.** I guessed `github.com/abhinavbaral/<repo>`. Fix any
   that are wrong.

4b. **Two work cards say REPLACE ME** — the MOBILE card (№01) and the WRITING
   card (№05). Those are the two most important cards on the page.

4c. **Check `history`.** I inferred the dates from your current site. The
   `current: true` flag puts the crimson "Now" badge on an entry.

5. **Set `ALLOWED_ORIGIN`.** Copy `server/.env.example` to `.env` and point it at
   your real domain, or CORS will reject your own frontend in production.

## Theming — two axes, four combinations

| | Crimson | Lime |
|---|---|---|
| **Light** | `<html>` | `<html data-accent="lime">` |
| **Dark**  | `<html data-theme="dark">` | `<html data-theme="dark" data-accent="lime">` |

The visitor-facing toggle lives in the nav (`ThemeToggle` in `components/Top.jsx`).
Theme follows the visitor's OS setting on first paint via `prefers-color-scheme`
and keeps following it until they choose manually. Accent defaults to crimson.

Dark mode is not an inversion. The contrast bands (manifesto, contact, footer)
stay dark and separate by elevation instead of flipping to white, so dark mode is
genuinely dark. Crimson also lifts from `#d01b2c` to `#f03b4c` on dark surfaces —
the light-mode red muddies against near-black.

All four combinations pass WCAG AA. Run `contrast_check.py` if you change a
colour; the tightest pairing is the accent fill button at 4.67:1 in light+crimson,
so darkening crimson will break it.

## What's already handled

- Contact details are served from `/api/contact/details`, not baked into the HTML,
  so scrapers crawling the static page don't harvest your email and number.
- Honeypot field plus a 5-per-15-minutes IP rate limit on the contact endpoint.
- `helmet`, `compression`, JSON body cap at 64kb, CSP in production.
- `prefers-reduced-motion` respected; scroll reveals skip straight to visible.
- Visible keyboard focus rings; nav uses `aria-current`.
- Responsive to 360px.

## Deploying on Render

Two services from one repo, or one service:

**One service (simplest)**
- Build command: `npm run build`
- Start command: `npm start`
- Environment: `NODE_ENV=production`, `ALLOWED_ORIGIN=https://your-domain`

## Routes

| Method | Path                    | Purpose                                  |
|--------|-------------------------|------------------------------------------|
| GET    | `/api/health`           | Uptime check                             |
| GET    | `/api/content`          | All page content (email/phone excluded)  |
| GET    | `/api/contact/details`  | Email, phone, social links               |
| POST   | `/api/contact`          | Submit enquiry — validated, rate limited |

## Routes
If you plan to use this project for your own porfilo please be sure to change as much as you can also this is still underdevelopment. 