import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import CompanyDetails from '@/components/CompanyDetails';
import { COMPANY, SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Website Terms of Use | Staged Ready',
  description: 'The terms that apply when you use the Staged Ready website.',
  alternates: { canonical: '/terms' },
};

// TODO(client): review before launch — this is a draft, not legal advice.
// Covers use of the website only; staging contracts are agreed separately with each client.
export default function TermsPage() {
  return (
    <LegalPage
      title="Website terms of use"
      intro="These terms apply when you use this website. By using the site you agree to them. They don't cover staging work itself — that is agreed with you in writing before any project starts."
    >
      <h2>Who we are</h2>
      <CompanyDetails />

      <h2>Using this site</h2>
      <p>
        You may use this site to find out about our services and contact us. You must not misuse it — for example by
        trying to gain unauthorised access, introducing viruses or other harmful code, sending spam through our
        enquiry form, or copying the site&apos;s content in bulk.
      </p>

      <h2>Content and photographs</h2>
      <p>
        The text, photographs, logo and design of this site belong to {COMPANY.legalName ?? SITE.name} or are used with
        permission. You may view and share links to our pages, but you may not reproduce our photographs or content for
        commercial use without our written permission.
      </p>

      <h2>Prices and information</h2>
      <p>
        Information on this site, including &ldquo;from&rdquo; prices, is a general guide. Every property is different,
        so the price and scope of any work is confirmed in a written quote after a consultation. Prices and availability
        can change.
      </p>

      <h2>Links to other sites</h2>
      <p>
        Where we link to other websites, such as our social media pages, we aren&apos;t responsible for their content or
        how they handle your data.
      </p>

      <h2>Our liability</h2>
      <p>
        We work to keep this site accurate and available, but we can&apos;t promise it will always be error-free or
        uninterrupted. To the extent the law allows, we aren&apos;t liable for any loss arising from your use of the site.
        Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud, or
        for anything else that can&apos;t be limited by law, and nothing affects your statutory rights as a consumer.
      </p>

      <h2>Your data</h2>
      <p>
        Our <Link href="/privacy">privacy policy</Link> explains how we use personal data you send us, and our{' '}
        <Link href="/cookies">cookie policy</Link> explains the cookies used on this site.
      </p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The date at the top shows when they were last revised.</p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of {COMPANY.registeredIn}, and the courts of {COMPANY.registeredIn} have
        jurisdiction over any dispute.
      </p>
    </LegalPage>
  );
}
