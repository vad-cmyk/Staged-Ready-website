// Customer reviews shown in the homepage and landing-page Reviews sections.
//
// Shape of one entry:
//   id       — any unique string, e.g. "james-t-2026-03"
//   author   — display name, e.g. "James T." (last-name initial is fine for privacy)
//   rating   — whole number 1-5
//   text     — the review body, verbatim from the customer
//   source   — optional: "Google" | "Facebook" | "Direct" (omit if unknown)
//   date     — optional: human-readable, e.g. "March 2026"
//   service  — optional: "sale" | "hmo" | "serviced" | "general" — lets a landing
//              page show only the reviews relevant to its audience
//
// To add a review, copy the commented example below into the `reviews` array,
// fill in real values, and remove the comment markers. The Reviews section
// renders nothing until this array has at least one entry.
//
// {
//   id: 'example-2026-01',
//   author: 'A. Smith',
//   rating: 5,
//   text: 'Staged Ready transformed our show home — sold within two weeks.',
//   source: 'Google',
//   date: 'January 2026',
//   service: 'sale',
// },

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  source?: 'Google' | 'Facebook' | 'Direct';
  date?: string;
  service?: 'sale' | 'hmo' | 'serviced' | 'general';
};

export const reviews: Review[] = [];

// TODO: once we have a Google Business Profile review link, put it here and
// it will appear as "Read more on Google" at the top of the Reviews section.
export const GOOGLE_REVIEWS_URL: string | null = null;

// Later option (do NOT implement yet — native/static only for now):
// swap this static array for a live fetch from the Google Places API, or
// embed a third-party widget (e.g. Elfsight), once we have enough reviews
// to justify the added dependency/cost.
