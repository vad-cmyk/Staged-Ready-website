import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import Services from '@/components/Services';
import PortfolioGallery from '@/components/PortfolioGallery';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Lightbox from '@/components/Lightbox';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <section id="portfolio" style={{ background: '#F8F5F1', padding: 'clamp(5rem,10vw,9rem) 0' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <PortfolioGallery />
          </div>
        </section>
        <Process />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
