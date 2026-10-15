# Content to verify before launch

Everything below came from the Figma template or was written to fill a gap. None of it is verified business fact.

## Template placeholders from Figma
- **License number** `#HVAC-49201` — the Figma file also shows `#HVAC-48291` in places. Use the real one.
- **Founding year** — site says "since 1998"; Figma also contains "since 1978".
- **Phone `(555) 382-4822`, addresses, hours, 24/7 emergency service** — placeholder values.
- **Email** — `service@heritagecrafthvac.com` vs `dispatch@` appear in Figma; confirm the real inbox.
- **Photos** show third-party brand names (Mountain Air van, Carrier/Rheem/Trane equipment, other uniforms); replace or retouch.
- **Extra contact channels** (text line, billing email) and reviews r7–r12 are examples.
- **Reviews** (`src/data/reviews.ts`, Home/AC Repair/About quotes) — sample text, names, ticket numbers. Replace with real, permissioned reviews. No aggregate rating is shown; add one only from a real source.
- **Claims**: NATE-certified technicians, "100% guarantee", warranty terms, insurance/bonding, "background-checked", arrival-time windows.
- **Service areas, towns, ZIP codes, arrival ranges** (`src/data/serviceAreas.ts`).
- **Financing partners, rates, promotions** — the Financing page deliberately states no specific terms.

## Copy written without Figma source
The Figma rate limit stopped further reads, so these were written conservatively and need review:
- Maintenance page sections (care split, seasonal panels, plans overview, FAQ)
- FAQ answers across service pages, Service Areas, Financing and Contact
- About page values, field standards, credentials block
- Privacy Policy (template; needs legal review)

## Technical
- Contact form needs Resend env vars and a verified sender domain to send mail.
- Set `VITE_SITE_URL` to the production domain before building.
