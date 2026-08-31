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
        <Script id="gtm" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PRVKS2NP');`}</Script>
        <link rel="icon" type="image/jpeg" href="/brand_assets/Staged%20ready.jpeg" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18275103746" strategy="afterInteractive" />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18275103746');
          gtag('config', 'G-TPKYFVKXZ');`}
        </Script>
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRVKS2NP" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        <SiteInteractions />
        {children}
      </body>
    </html>
  );
}
