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
};

export const projects: Project[] = [];
