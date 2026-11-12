// Single source of truth for every statistic shown on the site.
// The same figure must read identically on every page — edit it here, nowhere else.
//
// `source` is the citation for the figure (publication + year, ideally a URL).
// Figures without a source are listed in content/claims-audit.md for Vad to
// supply or reword — do not add new figures here without one.

export type Stat = {
  value: string;
  label: string;
  source: string | null; // [VAD TO SUPPLY sources]
};

export const STATS: Stat[] = [
  {
    value: '10+',
    label: 'Properties Staged',
    source: null, // [VAD TO CONFIRM current count]
  },
  {
    value: '73%',
    label: 'Of Staged Homes Spend Less Time on the Market',
    source: null, // [VAD TO SUPPLY source]
  },
  {
    value: '63%',
    label: 'Of Buyers Will Pay More for a Staged Home',
    source: null, // [VAD TO SUPPLY source]
  },
  {
    value: '90%',
    label: "Of Buyers Can't Visualise an Empty Space",
    source: null, // [VAD TO SUPPLY source]
  },
];

// Convenience for <TrustBar stats={...} /> call sites.
export const TRUST_STATS = STATS.map(({ value, label }) => ({ value, label }));
