import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { CookieSettingsLink } from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Cookie Policy | Staged Ready',
  description: 'The cookies and similar technologies used on the Staged Ready website, and how to change your choices.',
  alternates: { canonical: '/cookies' },
};

const cookies = [
  { name: 'sr_consent (local storage)', provider: 'Staged Ready', purpose: 'Remembers your cookie choices', duration: 'Until you clear it', type: 'Strictly necessary' },
  { name: '_ga', provider: 'Google Analytics', purpose: 'Tells visits from the same browser apart', duration: '2 years', type: 'Analytics — only with consent' },
  { name: '_ga_<ID>', provider: 'Google Analytics', purpose: 'Keeps track of the current visit', duration: '2 years', type: 'Analytics — only with consent' },
  { name: '_gcl_au, _gcl_ls (local storage)', provider: 'Google Ads', purpose: 'Links an enquiry to the advert that led to it', duration: '90 days', type: 'Marketing — only with consent' },
  { name: 'test_cookie, IDE (doubleclick.net)', provider: 'Google Ads', purpose: 'Checks cookies work and measures advert performance', duration: '15 minutes / 13 months', type: 'Marketing — only with consent' },
];

// TODO(client): re-check this list whenever a tag is added to Google Tag Manager, then bump CONSENT_VERSION in lib/consent.ts.
export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie policy"
      intro="This page lists every cookie and similar technology this website uses, and how to change your choices."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small files a website stores in your browser. Local storage works in a similar way. Some are needed
        for the site to work; others help us understand how the site is used or measure our advertising. We only set
        analytics and marketing cookies if you accept them.
      </p>

      <h2>The cookies we use</h2>
      <div className="legal-table-wrap" role="region" aria-label="Cookies we use" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Provider</th>
              <th scope="col">Purpose</th>
              <th scope="col">Duration</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c) => (
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>{c.provider}</td>
                <td>{c.purpose}</td>
                <td>{c.duration}</td>
                <td>{c.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Until you accept, Google tags run in a restricted mode that sets no cookies and sends only anonymous,
        cookieless signals.
      </p>

      <h2>Changing your choice</h2>
      <p>
        You can change or withdraw your consent at any time: <CookieSettingsLink className="inline-link legal-button-link" />.
        The same link is at the bottom of every page.
      </p>

      <h2>Controlling cookies in your browser</h2>
      <p>
        Most browsers let you see and delete cookies and block them for particular sites. Blocking all cookies may stop
        parts of some websites working. Your browser&apos;s help pages explain how.
      </p>

      <p>
        For more on how we use personal data, see our <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
