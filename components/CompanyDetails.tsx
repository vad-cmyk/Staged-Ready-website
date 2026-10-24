import { COMPANY, SITE } from '@/data/site';

// Registered company details, rendered only for the fields that have been filled in data/site.ts.
export default function CompanyDetails() {
  const parts = [
    COMPANY.legalName,
    COMPANY.companyNumber && `Registered in ${COMPANY.registeredIn}, company number ${COMPANY.companyNumber}`,
    COMPANY.registeredOffice && `Registered office: ${COMPANY.registeredOffice}`,
    COMPANY.vatNumber && `VAT number ${COMPANY.vatNumber}`,
  ].filter(Boolean);

  return (
    <p>
      {SITE.name} is a limited company based in {SITE.location}.{' '}
      {parts.length > 0 && <>{parts.join('. ')}. </>}
      You can contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or on{' '}
      <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.
    </p>
  );
}
