// What each staging package covers, plus the practical terms.
// Rendered by <PackageDetails service="..." /> on the service pages.
//
// Any row set to null is HIDDEN on the site until Vad confirms the real
// answer — fill it in here and it appears everywhere, no code changes.
// Prices live in data/pricing.ts; statistics live in data/claims.ts.

export type PackageInfo = {
  id: 'sale' | 'sa' | 'hmo';
  /** Bullet list under "What's included" */
  included: string[];
  /** e.g. "Staged within 10 working days of your consultation" — null hides the row. [VAD TO CONFIRM] */
  timescale: string | null;
  /** Practical terms — each null row is hidden until confirmed. */
  terms: {
    /** Hired or purchased? [VAD TO CONFIRM per service] */
    furniture: string | null;
    /** Hire duration and what happens after. [VAD TO CONFIRM] */
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
    timescale: null, // [VAD TO CONFIRM] e.g. 'Staged within X working days of your consultation'
    terms: {
      furniture: null, // [VAD TO CONFIRM] hired or purchased
      hireDuration: null, // [VAD TO CONFIRM] e.g. 'Initial X-week hire, extendable monthly while the property sells'
      delivery: 'Delivery, assembly and installation are included — our team handles everything.',
      photography: 'Professional photography is included, so your listing looks exceptional online.',
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
    ],
    timescale: null, // [VAD TO CONFIRM]
    terms: {
      furniture: null, // [VAD TO CONFIRM]
      hireDuration: null, // [VAD TO CONFIRM]
      delivery: 'Delivery, assembly and installation are included, so the property is guest-ready without you managing multiple suppliers.',
      photography: null, // [VAD TO CONFIRM]
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
    ],
    timescale: null, // [VAD TO CONFIRM]
    terms: {
      furniture: null, // [VAD TO CONFIRM]
      hireDuration: null, // [VAD TO CONFIRM]
      delivery: 'Delivery, assembly and installation are included across every room.',
      photography: null, // [VAD TO CONFIRM]
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
