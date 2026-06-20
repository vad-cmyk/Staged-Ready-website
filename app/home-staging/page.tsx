import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import LandingHero from '@/components/landing/LandingHero';
import TrustBar from '@/components/landing/TrustBar';
import ProblemSolution from '@/components/landing/ProblemSolution';
import Benefits from '@/components/landing/Benefits';
import ProcessCondensed from '@/components/landing/ProcessCondensed';
import PortfolioStrip from '@/components/landing/PortfolioStrip';
import Reviews from '@/components/Reviews';
import FAQAccordion from '@/components/landing/FAQAccordion';
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
          heading={<>Professional Home Staging<br />in <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Norwich &amp; Norfolk</em></>}
          subhead="We stage your property so buyers can picture themselves living there — creating stronger emotional connection, more viewings, and a faster sale at a better price."
          ctaLabel="Book a Free Consultation"
          ctaHref="#contact"
          heroImage="/brand_assets/IMG_1601.jpg"
        />
        <TrustBar
          stats={[
            { value: '10+', label: 'Properties Staged' },
            { value: '73%', label: 'Less Time on Market' },
            { value: '63%', label: 'Of Buyers Pay More' },
            { value: '90%', label: "Can't Visualise an Empty Space" },
          ]}
        />
        <ProblemSolution
          eyebrow="Why Staging Matters"
          heading={<>Empty Rooms Don&apos;t <em style={{ fontStyle: 'italic' }}>Sell Themselves</em></>}
          pairs={[
            {
              problem: 'Buyers struggle to picture an empty or dated room as their future home, and scroll past listing photos that fail to create an emotional pull.',
              solution: 'We dress every room with furniture and styling chosen to flatter the space, photograph beautifully, and let buyers picture their own life there.',
            },
            {
              problem: 'Unstaged properties often sit on the market longer, racking up costs and losing momentum with every price drop.',
              solution: 'Staged Ready properties sell faster on average — strong first impressions generate more viewings and offers in the critical first weeks.',
            },
            {
              problem: 'Buyers anchor their offer to what they see — an empty or cluttered property can quietly undervalue itself.',
              solution: 'Strategic staging highlights a property’s strengths and proportions, supporting a higher achieved sale price.',
            },
            {
              problem: "You don't want to buy and store furniture you'll never use again after the sale.",
              solution: 'We supply, install, and later collect everything — a fully managed, no-hassle service from consultation to final removal.',
            },
          ]}
        />
        <Benefits
          eyebrow="Why Staged Ready"
          heading={<>Staging Built Around <em style={{ fontStyle: 'italic' }}>Financial Return</em></>}
          items={[
            { title: 'Strategic, Not Decorative', description: 'Every furniture and styling decision is made to maximise perceived value and buyer appeal — not just to look nice.' },
            { title: 'Faster Sales', description: 'Staged properties typically spend significantly less time on the market than unstaged comparables.' },
            { title: 'Stronger Offers', description: 'A well-presented home supports higher buyer valuations and reduces the risk of lowball offers.' },
            { title: 'Fully Managed', description: 'From consultation to design, delivery, installation, and collection — we handle the entire process.' },
          ]}
        />
        <ProcessCondensed heading={<>From Consultation to <em style={{ fontStyle: 'italic' }}>Sold</em></>} />
        <PortfolioStrip propertyType="sale" />
        <Reviews filterService="sale" />
        <FAQAccordion
          heading={<>Common <em style={{ fontStyle: 'italic' }}>Questions</em></>}
          items={[
            { question: 'What is home staging?', answer: 'Home staging is the strategic furnishing and styling of a property to present it at its best to potential buyers — helping them connect emotionally with the space and picture themselves living there, which supports faster sales and stronger offers.' },
            { question: 'How much does home staging cost, and how is it priced?', answer: "Pricing depends on the property's size, the number of rooms staged, and how long the furniture stays in place. We provide a tailored, no-obligation quote after a free consultation, so you know the exact cost before committing." },
            { question: 'How long does staging take?', answer: 'Most properties are fully staged within a few days of the consultation and design plan being agreed, depending on furniture availability and access to the property.' },
            { question: 'Do you supply all the furniture?', answer: 'Yes — we supply, deliver, and install every piece of furniture, soft furnishings, and styling accessories needed, and collect everything once the staging period ends.' },
            { question: 'Which areas do you cover?', answer: 'We are based in Norwich and cover Norfolk and the surrounding areas. Get in touch with your property location and we will confirm coverage.' },
          ]}
        />
        <FinalCTA
          heading={<>Ready to Stage Your<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Property?</em></>}
          subhead="Tell us about your property and we'll provide a free staging consultation and proposal tailored to your goals."
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
