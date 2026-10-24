# Launch audit — Staged Ready — 2026-10-24

Stack: Next.js 14.2.18, App Router, hosted on Vercel (`.vercel/project.json` → `staged-ready-website`)
Production domain: https://www.stagedready.com (apex `stagedready.com` redirects to `www`)
Business: Staged Ready (limited company), property staging, Norwich — serving Norfolk & East Anglia. 01603 339339 · hello@stagedready.com

All measurements below are from the local production build (`next build && next start`). Nothing has been deployed yet — the live site still runs the old code until this is pushed.

## Summary

| | Before | After |
|---|---|---|
| ✅ Pass | 4 | 19 |
| ⚠️ Needs work | 9 | 1 |
| ❌ Fail | 10 | 0 |
| Lighthouse mobile, home (Perf / A11y / BP / SEO) | 59 / 97 / 77 / 100 | 94–96 / 100 / 100 / 100 |
| Home LCP · CLS · page weight | 17.6 s · 0.147 · 4.1 MB | 2.7–3.1 s · 0 · 0.9 MB |
| `/home-staging` Perf · LCP | 70 · 8.9 s | 95 · 2.9 s |
| axe WCAG 2.2 AA violations (12 pages) | 6–10 per page | 0 |
| Cookies set before consent | `_ga`, `_ga_*` ×2, `_gcl_au`, `test_cookie`, `_gcl_ls` | none |
| `public/brand_assets` | 19 MB | 3.9 MB |

## Checks

| # | Item | Status | Evidence (after) | What changed |
|---|------|--------|----------|-----|
| 3 | Secrets off the frontend | ✅ | No `NEXT_PUBLIC_` secrets; key-pattern grep of source and `.next/static` clean; `.env*` gitignored and never committed. | Nothing needed |
| 4 | Force HTTPS + security headers | ✅ | `curl -sI` shows HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`. HTTP → HTTPS 308 already live. | `next.config.mjs` headers. HSTS kept without `includeSubDomains`/`preload` until subdomains are confirmed. 🧑‍💼 Apex → www is still a **307** — see client actions |
| 17 | Form validation | ✅ | `curl` non-JSON → 400; invalid fields → 400 with per-field messages. | `app/api/contact/route.ts`: email/phone/length/service checks, links capped, CR/LF stripped from subject. Form: errors under each field (`aria-invalid`, `aria-describedby`), `role="alert"`, `autocomplete`, 16px inputs, single column on phones, added missing "Property Developers" option |
| 18 | Spam protection | ✅ | Honeypot filled → silent `{ok:true}`, nothing sent; submit < 3 s → silent `{ok:true}`. | Honeypot `company` field + time trap. No per-IP rate limit (in-memory limits don't work on serverless) — 🧑‍💼 add a Vercel Firewall rate-limit rule on `/api/contact`; add Cloudflare Turnstile only if spam still gets through |
| 1 | Privacy policy | ✅ | `/privacy` 200, linked in footer and under every form submit button. Matches data inventory: form → Resend, Vercel hosting, GTM/GA4/Google Ads (consent only). | New page. 🧑‍💼 **review before launch**; name email provider/CRM |
| 2 | Terms | ✅ | `/terms` 200 (website terms of use — the site takes enquiries, not payments). | New page. 🧑‍💼 **review before launch** |
| 5 | Cookie consent | ✅ | Fresh visit: 0 cookies, 0 localStorage on all 12 pages. Reject → 0 cookies. Accept → `_ga`, `_ga_*`, `_gcl_au`, `IDE`. Analytics-only → `_ga*` only. Footer "Cookie settings" reopens panel with focus. | Google Consent Mode v2 (all denied by default, set before GTM loads), `components/CookieConsent.tsx` with equal Accept/Reject + Manage settings, choice stored with a version number (`lib/consent.ts`), `/cookies` policy page |
| 6 | Meta titles + descriptions | ✅ | All indexable pages have unique title/description; home title now "Property Staging in Norwich & Norfolk \| Staged Ready"; canonicals are `https://www.stagedready.com/...`; `<html lang="en-GB">`. | `metadataBase` → www, relative canonicals, home metadata, `/thank-you` + 404 noindex |
| 7 | Social preview image | ✅ | `og:image` = `https://www.stagedready.com/opengraph-image.jpg` (1200×630, 90 KB) on every page; `twitter:card summary_large_image`. | `app/opengraph-image.jpg` + `twitter-image.jpg` with alt text, generated from the hero photo + brand name |
| 8 | Favicon | ✅ | `/favicon.ico` (16+32), `/icon.png` 192×192, `/apple-icon.png` 180×180 all 200. | "SR" monogram in brand colours (the full logo's small text is unreadable at 16px) |
| 9 | Sitemap + robots.txt | ✅ | `/robots.txt` allows all, disallows `/api/` and `/thank-you`, points to sitemap; `/sitemap.xml` lists 10 canonical www URLs. | `app/sitemap.ts`, `app/robots.ts` |
| 15 | Custom 404 | ✅ | `/this-does-not-exist` → **404**, on-brand page with quote CTA, phone, and links to every service page. | `app/not-found.tsx` |
| 16 | No broken links | ✅ | `linkinator --recurse`: 172 internal links, 0 broken. External check: only 404s are `www.stagedready.com/{privacy,terms,cookies,icon.png,opengraph-image.jpg}` — new files that exist after deploy. | — |
| 11 | Compressed images | ✅ | 19 MB → 3.9 MB (originals recoverable from git). Hero, service, process, founder and gallery images now served through `next/image` with `sizes`; hero is `priority`. | Ran `optimise-images.mjs --write`; added `sharp` dev dependency |
| 12 | Page load speed | ⚠️ | Lighthouse mobile home 94–96, LCP 2.7–3.1 s (target 2.5 s), CLS 0, TBT 20–30 ms. LCP element is the hero `<h1>` with ~80 ms render delay; the rest is simulated slow-4G + GTM/Google tag JS. | Self-hosted fonts via `next/font` (removed render-blocking Google Fonts `@import`), hero H1 no longer fades in from `opacity:0`, hero images preloaded. 🧑‍💼 Re-measure on PageSpeed Insights after deploy |
| 14 | Mobile friendly | ✅ | 0 px horizontal scroll on all pages at 390px (was 8 px); CTA above the fold; form single-column with 16px inputs; mobile header icons now dark on the light scrolled bar. | `overflow-x: clip`, form grid, nav icon colour |
| 10 | Alt text | ✅ | All content images have descriptive alt; decorative hero backgrounds and the footer logo next to the brand name use `alt=""`. | — |
| 13 | Colour contrast | ✅ | axe WCAG 2.2 AA: 0 violations on all 12 pages (was 6–10 each). | Small gold text on cream now `#84672B` (same hue as brand gold, 4.5:1+); brand gold `#C9A96E` kept for dark backgrounds, buttons, borders and large decorative numbers. Cream text on dark raised to ≥ 65% opacity (footer was 20–40%) |
| 19 | Analytics | ✅ | After Accept, browser test: phone click → GA4 `G-TPKYFVKKZZ` `phone_click` (+ GTM `track_call_button`); `/thank-you` → GA4 `generate_lead` + Google Ads conversion `AW-18275103746/C9IxCNu-k8YcEIL0n4pE`. Only `_ga` + `_ga_TPKYFVKKZZ` set. Before Accept: cookieless GA4 ping only (Consent Mode, `gcs=G100`). | Removed duplicate wrong ID `G-TPKYFVKXZ` (it had been receiving all custom events). Site events now `send_to` the GTM-loaded GA4 ID via `lib/analytics.ts` |
| 20 | One clear CTA | ✅ | "Get a free staging quote" gold primary above the fold at 390px, in header, end of every page, 404 and service pages; thank-you page with next steps + phone. | Privacy note under the submit button |

### Ranking extras (local-seo-ranking)

| Item | Status | Evidence | Fix |
|------|--------|----------|-----|
| Crawlable content | ✅ | Raw HTML contains `<h1>`, copy, phone and "Norwich" on every page. | — |
| Headings | ⚠️ | One `<h1>` per page. `/portfolio` H1 is a tagline ("Staging That Performs"). | Optional: "Property Staging Portfolio — Norfolk & East Anglia" (left as is — copy change for the client) |
| One page per service | ✅ | 4 service pages, each in the sitemap. | — |
| LocalBusiness structured data | ✅ | `LocalBusiness` JSON-LD on every page: name, url, phone, email, Norwich/Norfolk/GB, areaServed, sameAs (Instagram, Facebook, LinkedIn). No invented address, hours or ratings. | 🧑‍💼 Add opening hours + Google Business Profile URL when known; validate with Rich Results Test after deploy |
| Canonical domain | ⚠️ | Code now uses `www` everywhere. Apex → www is a **307 temporary** redirect on Vercel. | 🧑‍💼 Make it permanent (308) |
| NAP in footer | ✅ | Footer: "Norwich, UK — serving Norfolk…", phone and email as text on every page. | — |
| Redirects from old site | ✅ N/A | Client confirmed no previous site. | — |
| Search Console / GBP | 🧑‍💼 | Can't verify from code. | See below |

## Client actions (can't be done in code)

### Before launch

- [x] Fill in the company details in `data/site.ts` → `COMPANY` (registered name, company number, registered office, VAT if any). A limited company must show these on its website; the footer and legal pages display them automatically once filled. ✅ Done: Staged Ready Ltd, 17037657, 14 Tipperary Avenue, Wymondham, NR18 0ZA.
- [x] Review `/privacy`, `/terms` and `/cookies` — drafts, not legal advice. Name your email provider and any CRM/booking tools in the privacy policy. ✅ Reviewed by client 2026-10-24.
- [x] Confirm which GA4 measurement ID is real (`G-TPKYFVKKZZ` in GTM vs `G-TPKYFVKXZ` in code) and remove the other. ✅ `G-TPKYFVKKZZ` confirmed by client; duplicate removed.
- [ ] In GTM, check every tag uses built-in consent checks (Google tags do) and don't add non-Google tags without adding them to `/cookies` and bumping `CONSENT_VERSION` in `lib/consent.ts`.
- [x] Vercel → Domains: set `stagedready.com` → `www.stagedready.com` to **308 Permanent**. ✅ Done — `curl -sI https://stagedready.com` → 308 to www (2026-10-24).
- [x] Vercel → Firewall: add a rate-limit rule for `POST /api/contact` (e.g. 5 requests / 10 min per IP). ✅ Done — 5 POSTs / 600 s per IP; live test: requests 1–5 → 400, 6–7 → 429 (2026-10-24).
- [ ] Check whether the ICO data protection fee is due (ico.org.uk self-assessment).

### After deploy

- [ ] Submit one test enquiry on the live site and confirm it arrives.
- [ ] PageSpeed Insights on `/` and `/home-staging` (mobile).
- [ ] Rich Results Test on `/` (LocalBusiness + FAQ).
- [ ] Share a link in WhatsApp to confirm the preview image.
- [ ] Google Search Console: verify the domain (DNS TXT), submit `https://www.stagedready.com/sitemap.xml`, request indexing for home + 4 service pages. Add to Bing Webmaster Tools.

### Ongoing (what actually moves local rankings)

- [ ] Google Business Profile: verified, primary category right, service area Norwich/Norfolk, website link, phone matching 01603 339339, 10+ real job photos, occasional posts.
- [ ] Ask every happy client for a Google review and reply to all; add genuine reviews to `data/reviews.ts`. Never add invented reviews.
- [ ] Same name/phone everywhere (GBP, Facebook, Instagram, LinkedIn, Houzz, Yell, Bing Places, Apple Maps).
- [ ] Links from local estate agents, developers and property networks you work with.
- [ ] Add real case studies with before/after photos to `data/projects.ts` as jobs complete.
