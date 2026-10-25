// Global business constants. Update here once; every page/component imports from this file.
export const SITE = {
  name: 'Staged Ready',
  url: 'https://www.stagedready.com',
  phoneDisplay: '01603 339339',
  phoneHref: 'tel:+441603339339',
  phoneE164: '+441603339339',
  email: 'hello@stagedready.com',
  location: 'Norwich, UK',
  locationLong: 'Norwich, UK — serving Norfolk and the surrounding areas',
  locality: 'Norwich',
  region: 'Norfolk',
  areaServed: ['Norwich', 'Norfolk', 'East Anglia'],
  social: {
    instagram: 'https://www.instagram.com/stagedready/',
    facebook: 'https://www.facebook.com/stagedready/',
    linkedin: 'https://www.linkedin.com/company/staged-ready',
  },
  // Google Business Profile (Maps listing), stable CID form of the place URL
  googleMaps: 'https://maps.google.com/?cid=10540208413829365465',
} as const;

// Legal identity of the limited company. Shown in the footer and legal pages once filled in.
// UK law (Companies Act 2006) requires the registered name, company number, place of
// registration and registered office address on the website of a limited company.
export const COMPANY: {
  legalName: string | null;
  companyNumber: string | null;
  registeredIn: string;
  registeredOffice: string | null;
  vatNumber: string | null;
} = {
  legalName: 'Staged Ready Ltd',
  companyNumber: '17037657',
  registeredIn: 'England and Wales',
  registeredOffice: '14 Tipperary Avenue, Wymondham, Norfolk, NR18 0ZA',
  vatNumber: null, // Add the VAT number here if the company becomes VAT-registered
};

export const LEGAL_LAST_UPDATED = '25 October 2026';
