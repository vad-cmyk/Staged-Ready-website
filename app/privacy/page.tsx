import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import CompanyDetails from '@/components/CompanyDetails';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Staged Ready',
  description: 'How Staged Ready collects, uses and protects your personal data when you visit our website or send us an enquiry.',
  alternates: { canonical: '/privacy' },
};

// TODO(client): review before launch — this is a draft, not legal advice.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="This explains what personal data we collect when you use this website or contact us, why we collect it, and the choices you have."
    >
      <h2>Who we are</h2>
      <CompanyDetails />
      <p>We are the controller of the personal data described in this policy.</p>

      <h2>What we collect and why</h2>
      <div className="legal-table-wrap" role="region" aria-label="What we collect and why" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Where it comes from</th>
              <th scope="col">Why we use it</th>
              <th scope="col">Lawful basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name, email address, phone number, the service you&apos;re interested in, your message</td>
              <td>Our enquiry form, or when you email or call us</td>
              <td>To reply to your enquiry, arrange a consultation and prepare a quote</td>
              <td>Steps you&apos;ve asked us to take before entering a contract; our legitimate interest in responding to enquiries</td>
            </tr>
            <tr>
              <td>Details of your property and the staging work we carry out</td>
              <td>You, during the consultation and project</td>
              <td>To deliver the service you&apos;ve booked</td>
              <td>Contract</td>
            </tr>
            <tr>
              <td>Invoices and payment records</td>
              <td>Our dealings with you</td>
              <td>Accounting and tax</td>
              <td>Legal obligation</td>
            </tr>
            <tr>
              <td>Pages visited, device and browser type, approximate location, how you arrived at the site</td>
              <td>Google Analytics, only if you accept analytics cookies</td>
              <td>To understand how the site is used and improve it</td>
              <td>Consent</td>
            </tr>
            <tr>
              <td>Whether you reached us from one of our Google adverts and sent an enquiry</td>
              <td>Google Ads, only if you accept marketing cookies</td>
              <td>To measure whether our advertising works</td>
              <td>Consent</td>
            </tr>
            <tr>
              <td>IP address and technical request logs</td>
              <td>Our hosting provider, automatically</td>
              <td>To deliver the website securely and prevent abuse</td>
              <td>Legitimate interests</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>We don&apos;t ask for special category data (such as health information) and ask that you don&apos;t include it in your message.</p>

      <h2>Who we share it with</h2>
      <p>We never sell your data. We share it only with service providers who process it on our behalf:</p>
      <ul>
        <li><strong>Vercel Inc.</strong> — hosts this website.</li>
        <li><strong>Resend</strong> — delivers enquiry form messages to our inbox.</li>
        <li><strong>Google</strong> — Google Tag Manager, Google Analytics and Google Ads, only where you have given consent.</li>
        <li>
          Our email provider, accountant and IT providers, where needed to run the business.{' '}
          {/* TODO(client): name your email provider and any CRM or booking tools you use */}
        </li>
      </ul>
      <p>We may also share data where the law requires it, for example with HMRC.</p>

      <h2>International transfers</h2>
      <p>
        Vercel, Resend and Google are based in the United States, so your data may be processed outside the UK. Where
        this happens we rely on appropriate safeguards — the UK Extension to the EU–US Data Privacy Framework or the
        UK International Data Transfer Addendum to the European Commission&apos;s standard contractual clauses.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Enquiries that don&apos;t lead to a booking: 12 months after our last contact.</li>
        <li>Client and project records, invoices: 6 years after the end of the tax year they relate to.</li>
        <li>Analytics data: 14 months, then deleted by Google Analytics automatically.</li>
      </ul>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>ask for a copy of the personal data we hold about you;</li>
        <li>ask us to correct data that is wrong or incomplete;</li>
        <li>ask us to delete your data, or restrict how we use it;</li>
        <li>object to us using your data, including for direct marketing at any time;</li>
        <li>ask for your data in a portable format;</li>
        <li>withdraw consent at any time — for cookies, use the &ldquo;Cookie settings&rdquo; link at the bottom of every page.</li>
      </ul>
      <p>
        To use any of these rights, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We&apos;ll respond within one
        month.
      </p>

      <h2>Cookies</h2>
      <p>
        We only use analytics and advertising cookies if you accept them. See our <Link href="/cookies">cookie policy</Link>{' '}
        for the full list.
      </p>

      <h2>Complaints</h2>
      <p>
        If you&apos;re unhappy with how we&apos;ve handled your data, please contact us first at{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we&apos;ll respond promptly. You can also complain to the
        Information Commissioner&apos;s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer" target="_blank">ico.org.uk</a> or
        on 0303 123 1113.
      </p>

      <h2>Changes to this policy</h2>
      <p>We&apos;ll update this page if the way we use personal data changes. The date at the top shows when it was last revised.</p>
    </LegalPage>
  );
}
