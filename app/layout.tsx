import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import SiteInteractions from '@/components/SiteInteractions';
import CookieConsent from '@/components/CookieConsent';
import { consentDefaultsScript } from '@/lib/consent';
import { SITE } from '@/data/site';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Property Staging in Norwich & Norfolk | Staged Ready',
  description:
    'Professional property staging for sale, HMO, and serviced accommodation in Norwich & Norfolk. Strategic staging that maximises sale price and reduces time on market.',
  openGraph: {
    siteName: SITE.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  description:
    'Professional home staging and furniture packages for properties for sale, property developers, HMOs and serviced accommodation in Norwich, Norfolk and East Anglia.',
  url: SITE.url,
  telephone: SITE.phoneE164,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image.jpg`,
  logo: `${SITE.url}/icon.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: 'GB',
  },
  areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
  hasMap: SITE.googleMaps,
  sameAs: [SITE.googleMaps, SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Consent Mode v2 defaults must run before GTM / gtag load */}
        <Script id="consent-defaults" strategy="beforeInteractive">{consentDefaultsScript}</Script>
        <Script id="gtm" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PRVKS2NP');`}</Script>
        {/* Google Ads only — GA4 (G-TPKYFVKKZZ) is loaded by Google Tag Manager, so don't configure it here too */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18275103746" strategy="afterInteractive" />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18275103746');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRVKS2NP" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteInteractions />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
