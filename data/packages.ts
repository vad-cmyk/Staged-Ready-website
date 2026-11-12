// What each staging package covers, plus the practical terms.
// Rendered by <PackageDetails service="..." /> on the service pages.
//
// Any row set to null is HIDDEN on the site. Terms confirmed by Vad,
// 12 Nov 2026: sale furniture hired (6 weeks, extendable per T&Cs); SA and
// HMO furniture purchased; photography included on all quotes; installs
// take 2–4 days with ~2 weeks' notice.
// Prices live in data/pricing.ts; statistics live in data/claims.ts.

export type PackageInfo = {
  id: 'sale' | 'sa' | 'hmo';
  /** Bullet list under "What's included" */
  included: string[];
  /** e.g. "Staged within 10 working days of your consultation" — null hides the row. */
  timescale: string | null;
  /** Practical terms — each null row is hidden until confirmed. */
  terms: {
    /** Hired or purchased? */
    furniture: string | null;
    /** Hire duration and what happens after. */
    hireDuration: string | null;
    /** Delivery & installation — included or extra, typical lead time. */
    delivery: string | null;
    /** Is professional photography included? */
    photography: string | null;
  };
};

export const PACKAGES: Record<PackageInfo['id'], PackageInfo> = {
  sale: {
    id: 'sale',
    included: [
      'Consultation and a tailored staging plan for your target buyer',
      'Furniture for the key living and bedroom spaces',
      'Artwork, mirrors, lighting and soft furnishings',
      'Accessories and final styling, room by room',
      'Delivery, assembly and installation by our team',
      'Professional photography of the finished rooms',
    ],
    timescale: 'Staging takes 2–4 days depending on the size of the property. Please book around two weeks ahead so we can prepare for your staging days.',
    terms: {
      furniture: 'Staging furniture is hired, so you present the property beautifully without buying anything.',
      hireDuration: 'An initial 6-week hire, which can be extended — see our terms and conditions.',
      delivery: 'Delivery, assembly and installation are included — our team handles everything.',
      photography: 'Professional photography is included in your quote.',
    },
  },
  sa: {
    id: 'sa',
    included: [
      'Consultation and a furnishing plan built around your guest profile',
      'Furniture for living, dining, bedroom and kitchen spaces',
      'Soft furnishings, artwork and lighting chosen to photograph well',
      'Guest-ready styling and finishing touches',
      'Delivery, assembly and installation by our team',
      'Professional photography for your listing',
    ],
    timescale: 'Furnishing takes 2–4 days depending on the size of the property. Please book around two weeks ahead so we can prepare for your installation days.',
    terms: {
      furniture: 'All furniture is purchased — it’s yours to keep, specified for guest use.',
      hireDuration: null, // not applicable — furniture is purchased
      delivery: 'Delivery, assembly and installation are included, so the property is guest-ready without you managing multiple suppliers.',
      photography: 'Professional photography is included in your quote.',
    },
  },
  hmo: {
    id: 'hmo',
    included: [
      'Consultation and a package scoped to your property and licence',
      'Bedroom furniture for every letting room',
      'Communal living and kitchen furnishing',
      'Durable, tenant-proof pieces specified for HMO use',
      'Delivery, assembly and installation by our team',
      'Professional photography of the finished rooms',
    ],
    timescale: 'Furnishing takes 2–4 days depending on the size of the property. Please book around two weeks ahead so we can prepare for your installation days.',
    terms: {
      furniture: 'All furniture is purchased — it’s yours to keep, specified for HMO use.',
      hireDuration: null, // not applicable — furniture is purchased
      delivery: 'Delivery, assembly and installation are included across every room.',
      photography: 'Professional photography is included in your quote.',
    },
  },
};

/** Practical-terms rows in display order, with their headings. */
export const TERM_ROWS: { key: keyof PackageInfo['terms']; heading: string }[] = [
  { key: 'furniture', heading: 'Furniture' },
  { key: 'hireDuration', heading: 'Hire period' },
  { key: 'delivery', heading: 'Delivery & installation' },
  { key: 'photography', heading: 'Photography' },
];
