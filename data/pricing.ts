export type PricingTier = {
  id: 'sale' | 'sa' | 'hmo';
  name: string;
  fromPrice: string;
  description: string;
  href: string;
};

// Single source of truth for the three staging packages.
// Update the "from" prices here — both the homepage and the
// Property for Sale page render this same list via <Pricing />.
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sale',
    name: 'Property for Sale',
    fromPrice: '£1,997',
    description: 'Full staging for properties going to market.',
    href: '/home-staging',
  },
  {
    id: 'sa',
    name: 'Serviced Accommodation',
    fromPrice: '£2,897',
    description: 'Furniture packages for holiday lets and short-term stays.',
    href: '/serviced-accommodation-furniture-packages',
  },
  {
    id: 'hmo',
    name: 'HMO Packages',
    fromPrice: '£3,997',
    description: 'Multi-room furnishing built for tenant turnover.',
    href: '/hmo-furniture-packages',
  },
];
