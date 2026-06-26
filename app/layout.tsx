import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Staged Ready — Professional Property Staging',
  description:
    'Professional property staging for sale, HMO, and serviced accommodation in Norwich & Norfolk. Strategic staging that maximises sale price and reduces time on market.',
  metadataBase: new URL('https://stagedready.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/brand_assets/Staged%20ready.jpeg" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18275103746" strategy="beforeInteractive" />
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18275103746');`}
        </Script>
        <Script id="google-tag-request-quote-conversion" strategy="beforeInteractive">
          {`function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-18275103746/C9lxCNu-k8YcEILon4pE',
                'value': 1.0,
                'currency': 'GBP',
                'event_callback': callback
            });
            return false;
          }`}
        </Script>
      </head>
      <body>
        <SiteInteractions />
        {children}
      </body>
    </html>
  );
}
