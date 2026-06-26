import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Thank You | Staged Ready',
  description: 'Thanks for your enquiry — we’ll be in touch shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: '#2D2926', padding: 'clamp(8rem,16vw,12rem) 0 clamp(6rem,12vw,9rem)' }}>
          <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
            <p className="section-label" style={{ color: 'rgba(201,169,110,0.9)' }}>Enquiry Received</p>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#F2EDE8',
                marginTop: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              Thank <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>You</em>
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(242,237,232,0.65)', maxWidth: '38ch', margin: '0 auto' }}>
              We&apos;ve received your enquiry and will get back to you within one business day. In the
              meantime, feel free to call us on{' '}
              <a href={SITE.phoneHref} style={{ color: '#DFC08A', textDecoration: 'underline' }}>
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Script id="ads-conversion" strategy="afterInteractive">
        {`if (typeof window.gtag === 'function') { window.gtag('event', 'conversion', { send_to: 'AW-18275103746' }); }`}
      </Script>
    </>
  );
}
