import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import LandingHero from '@/components/landing/LandingHero';
import SubServices from '@/components/landing/SubServices';
import Benefits from '@/components/landing/Benefits';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import WhyChooseStagedReady from '@/components/WhyChooseStagedReady';
import Founder from '@/components/Founder';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';

export const metadata: Metadata = {
  title: 'Home Staging in Norwich & Norfolk | Staged Ready',
  description: 'Professional home staging in Norwich & Norfolk. Strategic furniture and styling that helps your property sell faster and for more money. Free consultation.',
  alternates: { canonical: 'https://stagedready.com/home-staging' },
  openGraph: {
    title: 'Professional Home Staging in Norwich & Norfolk',
    description: 'Strategic home staging that helps your property sell faster and for more money.',
    url: 'https://stagedready.com/home-staging',
    images: ['/brand_assets/IMG_1601.jpg'],
  },
};

export default function HomeStagingPage() {
  return (
    <>
      <Header />
      <main>
        <LandingHero
          eyebrow="Home Staging Specialists"
          heading={<>Home Staging for Properties<br />for Sale — <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Norfolk &amp; East Anglia</em></>}
          subhead="We stage your property so buyers can picture themselves living there — creating stronger emotional connection, more viewings, and a faster sale at a better price."
          ctaLabel="Get a free staging quote"
          ctaHref="#contact"
          heroImage="/brand_assets/IMG_1601.jpg"
        />
        <SubServices
          eyebrow="What We Offer"
          heading={<>Property <em style={{ fontStyle: 'italic' }}>for Sale</em></>}
          items={[
            {
              title: 'Vacant Property Staging',
              description: 'Full furnishing and styling of empty properties so buyers can instantly picture themselves living there.',
            },
            {
              title: 'Show Home Staging',
              description: 'Aspirational, magazine-standard staging for new-build show homes and development launches.',
            },
            {
              title: 'Occupied Property Staging',
              description: 'Editing and restyling existing furniture to present a lived-in home at its absolute best for sale.',
            },
          ]}
        />
        <Benefits
          eyebrow="Why Stage?"
          heading={<>The Case for <em style={{ fontStyle: 'italic' }}>Staging</em></>}
          items={[
            { title: 'Higher price', description: 'Strategic staging can achieve a significantly higher sale price than an identical non-staged property.' },
            { title: 'Quicker sale', description: 'Staging creates instant demand, generating more offers and ultimately a faster sale.' },
            { title: 'More views online', description: 'Standout photos drive higher click-through rates on portals like Rightmove.' },
            { title: 'More views in person', description: 'Demand and competition mean more viewings and stronger offers.' },
          ]}
        />
        <Process />
        <Pricing highlight="sale" />
        <WhyChooseStagedReady />
        <Founder />
        <Reviews filterService="sale" />
        <FAQSection category="sale" />
        <FinalCTA
          heading={<>Ready to Maximise Your<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Property&apos;s Sale Potential?</em></>}
          subhead="Book a free consultation and we'll recommend the most effective staging solution for your property."
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
