# Heritage Craft HVAC — Website

Multi-page residential HVAC website implemented from the Figma file **Heritage Craft – Template 2**
(file key `8xzyAAGl1cNiB3A9vNQnoy`). React 19 + TypeScript + Vite, React Router, GSAP/ScrollTrigger, Motion,
Lucide icons, and a lazy-loaded Three.js (R3F) equipment viewer. Pages are prerendered to static HTML at build time.

## Routes
`/`, `/services`, `/services/ac-repair`, `/services/ac-installation`, `/services/heating`, `/services/maintenance`,
`/about`, `/service-areas`, `/reviews`, `/financing-specials`, `/contact`, `/privacy`, plus a custom 404.

## Develop
```bash
npm install
npm run dev          # Vite dev server (the /api/contact function is not served here)
npm run typecheck
npm run build        # typecheck + client + SSR build + prerender + sitemap/robots
npm run preview
```

## Environment variables
Copy `.env.example` to `.env` (never commit it).

| Variable | Where | Purpose |
|---|---|---|
| `VITE_SITE_URL` | build | Canonical URLs, sitemap, JSON-LD (public) |
| `RESEND_API_KEY` | server only | Resend API key for the contact form |
| `CONTACT_FROM_EMAIL` | server only | Verified sender in Resend |
| `CONTACT_TO_EMAIL` | server only | Inbox(es) receiving requests, comma-separated |

The form posts to `api/contact.ts` (Vercel function). If the variables are missing, or Resend rejects the
message, the visitor sees an honest error with the phone number. It never shows success unless Resend accepted the email.

## Images
Seven photographs live in `src/assets/images/` and are mapped to the page slots in `src/lib/images.ts` (`sourceFor`).
To replace a slot's photo, add a file named after the slot key (for example `home-hero.jpg`); it takes priority over the
mapped photo and needs no code change. Note: some of the supplied photos show third-party names (van, uniforms, equipment
brands such as Carrier, Rheem, Trane). Replace or retouch them before launch.

Icons use Lucide in place of the Figma SVG icons.

## Contact form
`src/components/forms/ContactForm.tsx` posts to `/api/contact` (`api/contact.ts`, Resend). Until `RESEND_API_KEY`,
`CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` are set in Vercel, the form tells visitors online requests aren't switched on
and shows the phone number. It never reports success unless the email was accepted.

## Deploy (Vercel)
Import the repo; framework preset Vite. `vercel.json` sets the build, output, security headers and the SPA rewrite
for nested routes. Add the environment variables above in the Vercel project settings.

## Before launch
See [docs/CONTENT_TO_VERIFY.md](docs/CONTENT_TO_VERIFY.md): template placeholders (license, reviews, claims, financing) must be replaced with real facts.
