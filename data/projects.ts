// Portfolio case studies. Each entry becomes a case-study card with a
// before/after comparison slider on the homepage and the /portfolio page.
//
// Shape of one entry:
//   id            — unique slug, e.g. "norfolk-3bed-newbuild"
//   title         — e.g. "3-Bed New Build"
//   propertyType  — "sale" | "hmo" | "serviced" — controls which filter tab shows it
//   location      — e.g. "Norfolk"
//   beforeImage   — optional path under /brand_assets/...
//   afterImage    — optional path under /brand_assets/...
//   stagedIn      — optional, e.g. "5 days"
//   result        — optional, e.g. "Sold within 3 weeks"
//   feedback      — optional client quote shown on the card
//   summary       — optional longer blurb
//
// If only one of beforeImage/afterImage is set, the card shows that single
// image instead of a slider. If neither is set, the card shows a plain
// placeholder-free text card. Add real case studies here as before/after
// photos and results become available — copy the commented example below.
//
// {
//   id: 'norfolk-3bed-newbuild',
//   title: '3-Bed New Build',
//   propertyType: 'sale',
//   location: 'Norfolk',
//   beforeImage: '/brand_assets/IMG_0503.JPG',
//   afterImage: '/brand_assets/IMG_0518.JPG',
//   stagedIn: '5 days',
//   result: 'Sold within 3 weeks',
// },

export type Project = {
  id: string;
  title: string;
  propertyType: 'sale' | 'hmo' | 'serviced';
  location: string;
  beforeImage?: string;
  afterImage?: string;
  stagedIn?: string;
  result?: string;
  summary?: string;
  /** A short client quote shown on the card, e.g. "Jaz made the whole process effortless." */
  feedback?: string;
};

// Locations are listed as Norfolk pending exact towns from Vad.
// beforeImage + feedback: [VAD TO SUPPLY] — the card upgrades itself to a
// before/after slider and shows the quote as soon as they're added here.
export const projects: Project[] = [
  {
    id: 'barn-conversion-serviced-accommodation',
    title: 'Barn Conversion Short-Let',
    propertyType: 'serviced',
    location: 'Norfolk',
    afterImage: '/brand_assets/IMG_1601.jpg',
    summary:
      'Turnkey furnishing of an open-plan barn conversion for serviced accommodation — living, kitchen and bedrooms styled to photograph beautifully for Airbnb and Booking.com.',
  },
  {
    id: 'home-staged-for-sale',
    title: 'Home Staged for Sale',
    propertyType: 'sale',
    location: 'Norfolk',
    afterImage: '/brand_assets/IMG_0566.JPG',
    summary:
      'Full staging of a property going to market — living room, bedrooms and hallway dressed so buyers can picture themselves living there.',
  },
  {
    id: 'hmo-furniture-package',
    title: 'HMO Furniture Package',
    propertyType: 'hmo',
    location: 'Norfolk',
    afterImage: '/brand_assets/IMG_0503.JPG',
    summary:
      'Multi-room furnishing for an HMO — every letting bedroom plus communal spaces, specified for durability and tenant turnover.',
  },
];
