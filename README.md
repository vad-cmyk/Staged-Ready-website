# Staged Ready — stagedready.com

Next.js 14 (App Router) site for Staged Ready Ltd, deployed on Vercel. Production domain:
https://www.stagedready.com (apex 308-redirects to www).

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables (and in `.env.local` for
local development):

| Variable | Required | What it is |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key — the contact form email send fails without it. |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID. Falls back to the live container `GTM-PRVKS2NP` if unset. |

Other tag IDs (loaded via GTM / inline): Google Ads `AW-18275103746`, GA4 `G-TPKYFVKKZZ`
(GA4 is loaded **by GTM**, see `lib/analytics.ts`).

## Where to edit things (no code knowledge needed)

| What | File |
|---|---|
| Prices (the three "from" prices) | `data/pricing.ts` |
| What's included, timescales, hire/delivery/photography terms | `data/packages.ts` — any row left `null` is hidden on the site |
| Statistics (73% / 63% / 90% etc.) and their sources | `data/claims.ts` — see `content/claims-audit.md` |
| FAQs | `data/faqs.ts` |
| Case studies (before/after, result, client feedback) | `data/projects.ts` — empty list = section hidden |
| Reviews | `data/reviews.ts` |
| Company details, phone, email, address | `data/site.ts` |
| Process step copy and images | `data/process.ts` |
| Timed enquiry pop-up (on/off + delay) | `components/EnquiryPopup.tsx` — `POPUP_ENABLED`, `POPUP_DELAY_MS` |

## Analytics events (dataLayer / GA4)

- `generate_lead` + Google Ads conversion — fires on `/thank-you` after a successful enquiry (`components/ConversionTracker.tsx`)
- `phone_click`, `email_click`, `cta_click` — wired in `components/SiteInteractions.tsx`
- `popup_shown`, `popup_dismissed`, `popup_submit` — timed enquiry pop-up

The pop-up shows once per visitor (localStorage `sr_popup`), never on `/thank-you`, never
after a successful enquiry (`sr_enquired`), and waits for the cookie banner to be answered
before appearing.

## Consent

Google Consent Mode v2 with everything denied by default (`lib/consent.ts`) and a
banner/settings panel (`components/CookieConsent.tsx`). Choice stored in localStorage
`sr_consent`.

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build (run before pushing)
npm start       # serve the production build
```

Pushing to `main` deploys to production via Vercel; any other branch gets a preview URL.
