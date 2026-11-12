# Claims audit — stagedready.com

_Last updated: 12 November 2026 (terms confirmed by Vad)_

Every statistic and factual claim on the site, where it appears, and what it needs.
Statistics now render from **one source: `data/claims.ts`** — the same figure reads
identically on every page. Edit a figure there and it changes everywhere.

## Statistics (need sources — [VAD TO SUPPLY])

Shown in the trust bar on: home page, /home-staging, /serviced-accommodation-furniture-packages,
/hmo-furniture-packages, /developer-home-staging.

| Figure | Canonical wording (live now) | Status |
|---|---|---|
| 10+ | Properties Staged | **[VAD TO CONFIRM]** the current count — update `data/claims.ts` as it grows |
| 73% | Of Staged Homes Spend Less Time on the Market | Vad confirms (12 Nov 2026) the figures are real, drawn from industry research (Rightmove and similar). **[VAD TO SUPPLY the exact report names/links]** so they can be cited if an ad reviewer or buyer asks. |
| 63% | Of Buyers Will Pay More for a Staged Home | As above — confirmed real; exact citation still to file here. |
| 90% | Of Buyers Can't Visualise an Empty Space | As above — confirmed real; exact citation still to file here. |

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

- **Professional photography is included in the quote for every service** — confirmed by Vad,
  12 Nov 2026 (and 30 Oct 2026 for sale). Shown in the Process section and in each
  service's package section.
- **Package terms** — confirmed by Vad, 12 Nov 2026: sale staging furniture is **hired**
  (initial 6-week hire, extendable per T&Cs); **SA and HMO furniture is purchased**;
  installation takes **2–4 days** depending on property size, with around **two weeks'
  notice** needed to prepare.
- **"Delivery, assembly and installation are included"** — consistent with existing site copy
  (Process step 03, SA/HMO FAQs). Listed in `data/packages.ts`; flag if ever not true.

## Qualitative claims (no figures — acceptable, no action needed)

- "Sell faster and achieve a stronger price" (hero, meta descriptions)
- "Significantly higher sale price" / "more offers" / "faster sale" (Benefits, /home-staging)
- "Standout photos drive higher click-through rates on portals like Rightmove" (Benefits)
- "Wins clicks on Airbnb and Booking.com" / "5-star guest experience" (SA hero)
- "Property developer founded / real-world renovation experience" (Why Choose — biographical,
  confirm it stays accurate)

## Remaining open items

- Exact report names/links for the 73% / 63% / 90% statistics (confirmed real, citation not yet filed).
- The "10+" properties-staged count — update `data/claims.ts` as it grows.

## Rules going forward

1. New statistics go in `data/claims.ts` with a `source` — never hard-coded in a page.
2. Never adapt a figure's wording per audience; the meaning must match the source.
3. Google Ads policy: unsupported superlatives and fabricated statistics risk ad disapproval —
   keep this file current before launching new ad copy.
