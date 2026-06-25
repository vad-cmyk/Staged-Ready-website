export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'sale' | 'hmo' | 'sa';
};

// Single source of truth for FAQs. Used by the global accordion (mounted on
// every page) and the dedicated /faq page. Add new entries here — no need
// to touch any component.
export const faqs: FAQ[] = [
  {
    id: 'what-is-staging',
    question: 'What is home staging?',
    answer:
      'Home staging is the strategic furnishing and styling of a property to present it at its best to potential buyers or tenants — helping them connect emotionally with the space and picture themselves living there, which supports faster sales, lettings, and stronger offers.',
    category: 'general',
  },
  {
    id: 'pricing',
    question: 'How much does staging cost, and how is it priced?',
    answer:
      'Pricing depends on the property’s size, the number of rooms staged, and how long the furniture stays in place. We provide a tailored, no-obligation quote after a free consultation, so you know the exact cost before committing. As a guide, Property for Sale staging starts from £1,997, Serviced Accommodation packages from £2,897, and HMO packages from £3,997.',
    category: 'general',
  },
  {
    id: 'timeline',
    question: 'How long does staging take?',
    answer:
      'Most properties are fully staged within a few days of the consultation and design plan being agreed, depending on furniture availability and access to the property.',
    category: 'general',
  },
  {
    id: 'furniture-supply',
    question: 'Do you supply all the furniture?',
    answer:
      'Yes — we supply, deliver, and install every piece of furniture, soft furnishings, and styling accessories needed, and collect everything once the staging period ends.',
    category: 'general',
  },
  {
    id: 'coverage-area',
    question: 'Which areas do you cover?',
    answer:
      'We are based in Norwich and cover Norfolk and East Anglia. Get in touch with your property location and we will confirm coverage.',
    category: 'general',
  },
  {
    id: 'occupied-homes',
    question: 'Can you stage a property that is still occupied?',
    answer:
      'Yes. We regularly stage occupied homes by editing and restyling existing furniture, decluttering, and adding finishing pieces to present a lived-in home at its best for sale or listing photos.',
    category: 'sale',
  },
  {
    id: 'launch-deadline',
    question: 'Can you work to a launch or listing deadline?',
    answer:
      'Yes — we regularly coordinate around show home launches, marketing deadlines, and listing dates. Let us know your target date during the consultation and we will plan installation accordingly.',
    category: 'general',
  },
  {
    id: 'hmo-furniture',
    question: 'What’s included in an HMO furniture package?',
    answer:
      'HMO packages include bedroom furniture for every let room (bed, wardrobe, desk where applicable), communal living and kitchen furnishing, and durable, easy-to-clean finishes chosen to withstand tenant turnover.',
    category: 'hmo',
  },
  {
    id: 'sa-furniture',
    question: 'How is a Serviced Accommodation package different from standard staging?',
    answer:
      'Serviced Accommodation packages are styled for short-let guest experience and listing photography — durable, hotel-standard furnishings, full kitchen and bathroom amenities, and styling chosen to perform well on Airbnb and Booking.com listings.',
    category: 'sa',
  },
];
