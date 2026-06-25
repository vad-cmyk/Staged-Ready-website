import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import WeHelp from '@/components/WeHelp';
import Services from '@/components/Services';
import WhyStageChecklist from '@/components/WhyStageChecklist';
import PortfolioGallery from '@/components/PortfolioGallery';
import Process from '@/components/Process';
import WhyChooseStagedReady from '@/components/WhyChooseStagedReady';
import Pricing from '@/components/Pricing';
import Founder from '@/components/Founder';
import Reviews from '@/components/Reviews';
import CaseStudies from '@/components/CaseStudies';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import Lightbox from '@/components/Lightbox';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <WeHelp />
        <Services />
        <WhyStageChecklist />
        <section id="portfolio" style={{ background: '#F8F5F1', padding: 'clamp(5rem,10vw,9rem) 0' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <CaseStudies />
            <PortfolioGallery />
          </div>
        </section>
        <Process />
        <WhyChooseStagedReady />
        <Pricing highlight="sale" />
        <Founder />
        <Reviews />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
