# Claims audit — stagedready.com

_Last updated: 12 November 2026_

Every statistic and factual claim on the site, where it appears, and what it needs.
Statistics now render from **one source: `data/claims.ts`** — the same figure reads
identically on every page. Edit a figure there and it changes everywhere.

## Statistics (need sources — [VAD TO SUPPLY])

Shown in the trust bar on: home page, /home-staging, /serviced-accommodation-furniture-packages,
/hmo-furniture-packages, /developer-home-staging.

| Figure | Canonical wording (live now) | Status |
|---|---|---|
| 10+ | Properties Staged | **[VAD TO CONFIRM]** the current count — update `data/claims.ts` as it grows |
| 73% | Of Staged Homes Spend Less Time on the Market | **[VAD TO SUPPLY source]** — e.g. the industry report it came from (publication + year). If no source can be found, reword to "Staged homes typically spend less time on the market" or remove. |
| 63% | Of Buyers Will Pay More for a Staged Home | **[VAD TO SUPPLY source]** — same as above; qualitative fallback: "Buyers consistently pay more for a well-presented home". |
| 90% | Of Buyers Can't Visualise an Empty Space | **[VAD TO SUPPLY source]** — same as above; qualitative fallback: "Most buyers struggle to visualise an empty space". |

> **Drift fixed:** these four figures previously carried a *different meaning on each page*
> (e.g. 73% was "Homes Staged Spend Less Time on the Market" on the home page but
> "Faster Turnaround to Live" on the SA page and "Faster Time to Let" on the HMO page).
> Those reworded variants were unsupported adaptations and have been removed — all
> pages now show the single canonical wording above.

## Prices (owner-supplied — no external source needed)

Single source: `data/pricing.ts`, also rendered by the package section on each service page.

- Property for Sale — from **£1,997**
- Serviced Accommodation — from **£2,897**
- HMO Packages — from **£3,997**

## Confirmed claims

- **"Professional Shots Included" / "Professional photography is included"** (Process section,
  home + /home-staging; Package section on /home-staging) — confirmed by Vad, 30 Oct 2026
  ("included in price"). For the SA and HMO packages this is **not yet confirmed** and the
  row is hidden (see `data/packages.ts`).
- **"Delivery, assembly and installation are included"** — consistent with existing site copy
  (Process step 03, SA/HMO FAQs). Listed in `data/packages.ts`; flag if ever not true.

## Qualitative claims (no figures — acceptable, no action needed)

- "Sell faster and achieve a stronger price" (hero, meta descriptions)
- "Significantly higher sale price" / "more offers" / "faster sale" (Benefits, /home-staging)
- "Standout photos drive higher click-through rates on portals like Rightmove" (Benefits)
- "Wins clicks on Airbnb and Booking.com" / "5-star guest experience" (SA hero)
- "Property developer founded / real-world renovation experience" (Why Choose — biographical,
  confirm it stays accurate)

## Unconfirmed package terms (rows hidden on the site until filled in)

In `data/packages.ts` — each `null` row is invisible to visitors until Vad supplies the answer:

- Furniture **hired or purchased** — per service **[VAD TO CONFIRM]**
- **Hire duration** and what happens after — **[VAD TO CONFIRM]**
- **Timescale** ("staged within X working days of consultation") — per service **[VAD TO CONFIRM]**
- **Photography** for SA and HMO packages — **[VAD TO CONFIRM]**

## Rules going forward

1. New statistics go in `data/claims.ts` with a `source` — never hard-coded in a page.
2. Never adapt a figure's wording per audience; the meaning must match the source.
3. Google Ads policy: unsupported superlatives and fabricated statistics risk ad disapproval —
   keep this file current before launching new ad copy.
