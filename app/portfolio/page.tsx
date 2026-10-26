import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudies from '@/components/CaseStudies';
import PortfolioGallery from '@/components/PortfolioGallery';
import Lightbox from '@/components/Lightbox';

export const metadata: Metadata = {
  title: 'Portfolio | Staged Ready — Property Staging Norwich & Norfolk',
  description: 'Property staging case studies and before/after transformations from Staged Ready, covering sale, HMO and serviced accommodation across Norfolk.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    siteName: 'Staged Ready',
    locale: 'en_GB',
    type: 'website',
    title: 'Portfolio | Staged Ready',
    description: 'Property staging case studies and before/after transformations across Norfolk.',
    url: '/portfolio',
    images: ['/opengraph-image.jpg'],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: '#F8F5F1', padding: 'clamp(8rem,12vw,11rem) 0 clamp(5rem,10vw,9rem)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="section-label reveal">Our Work</p>
              <h1 className="font-display reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#2D2926', marginTop: '0.75rem' }}>
                Staging That <em style={{ fontStyle: 'italic' }}>Performs</em>
              </h1>
            </div>
            <CaseStudies />
            <PortfolioGallery />
          </div>
        </section>
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
