import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Staged Ready',
  description:
    'Answers to common questions about home staging, HMO furniture packages, and serviced accommodation furnishing with Staged Ready in Norwich & Norfolk.',
  alternates: { canonical: 'https://stagedready.com/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Staged Ready',
    description: 'Answers to common questions about property staging with Staged Ready.',
    url: 'https://stagedready.com/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: '#2D2926', padding: 'clamp(7rem,14vw,10rem) 0 3rem' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>Support</p>
            <h1
              className="font-display reveal"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#F2EDE8',
                marginTop: '0.75rem',
              }}
            >
              Frequently Asked <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Questions</em>
            </h1>
          </div>
        </section>
        <FAQSection hideHeading />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
