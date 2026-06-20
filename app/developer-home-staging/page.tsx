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
  title: 'Home Staging for Property Developers & New Builds | Staged Ready',
  description: 'Show-home standard staging for property developers and new-build sales suites in Norfolk. Sell faster, present to a higher standard, move to your next project sooner.',
  alternates: { canonical: 'https://stagedready.com/developer-home-staging' },
  openGraph: {
    title: 'Home Staging for Property Developers & New Builds',
    description: 'Show-home standard staging that helps developers sell faster and move to the next project sooner.',
    url: 'https://stagedready.com/developer-home-staging',
    images: ['/brand_assets/IMG_1600.jpg'],
  },
};

export default function DeveloperHomeStagingPage() {
  return (
    <>
      <Header />
      <main>
        <LandingHero
          eyebrow="For Property Developers"
          heading={<>Home Staging for Property<br />Developers &amp; <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>New Builds</em></>}
          subhead="We present your developments to a show-home standard — generating stronger buyer interest, faster reservations, and quicker completions so you can move on to your next project."
          ctaLabel="Book a Free Consultation"
          ctaHref="#contact"
          heroImage="/brand_assets/IMG_1600.jpg"
        />
        <TrustBar
          stats={[
            { value: '10+', label: 'Developments Staged' },
            { value: '73%', label: 'Less Time on Market' },
            { value: '63%', label: 'Of Buyers Pay More' },
            { value: '90%', label: "Can't Visualise an Empty Unit" },
          ]}
        />
        <ProblemSolution
          eyebrow="Built for Developers"
          heading={<>Every Unsold Unit Is <em style={{ fontStyle: 'italic' }}>Carrying Cost</em></>}
          pairs={[
            {
              problem: 'An empty show home or unsold unit makes it hard for buyers to judge proportions, flow, or finish quality — and harder for your sales team to close.',
              solution: 'We stage to a show-home standard that demonstrates the lifestyle on offer, giving your sales team a stronger story and buyers a reason to commit.',
            },
            {
              problem: 'Holding costs, finance charges, and site overheads accumulate for every month a unit sits unsold.',
              solution: 'Staged units typically sell faster, reducing the time you carry holding costs and freeing your team to focus on the next phase or development.',
            },
            {
              problem: 'Launch deadlines are fixed, but furnishing multiple units or a sales suite to a consistent standard takes coordination most developers don’t have time for.',
              solution: 'We plan and install to your launch date, staging single show homes or multiple units across a development on one coordinated schedule.',
            },
            {
              problem: 'One-off staging relationships mean re-briefing a new supplier on every phase or site.',
              solution: 'We offer ongoing account and volume arrangements for developers staging multiple phases or sites, so every launch benefits from the same standard and speed.',
            },
          ]}
        />
        <Benefits
          eyebrow="Why Developers Choose Staged Ready"
          heading={<>Staging That Protects Your <em style={{ fontStyle: 'italic' }}>Margin</em></>}
          items={[
            { title: 'Show-Home Standard', description: 'Every unit is presented to the standard buyers expect from a show home — supporting premium pricing and faster reservations.' },
            { title: 'Launch-Deadline Ready', description: 'We plan installation around your launch or completion date, including multi-unit developments on a single schedule.' },
            { title: 'Reduced Holding Costs', description: 'Faster sales mean less time carrying finance and site overheads on unsold stock.' },
            { title: 'Volume Partnerships', description: 'Ongoing account arrangements for developers staging multiple phases, sites, or show homes per year.' },
          ]}
        />
        <ProcessCondensed heading={<>From Brief to <em style={{ fontStyle: 'italic' }}>Launch Day</em></>} />
        <PortfolioStrip propertyType="sale" />
        <Reviews filterService="sale" />
        <FAQAccordion
          heading={<>Developer <em style={{ fontStyle: 'italic' }}>FAQs</em></>}
          items={[
            { question: 'Can you stage multiple units across a development?', answer: 'Yes — we regularly stage multiple units or an entire phase on one coordinated schedule, keeping presentation consistent across the development.' },
            { question: 'What turnaround can you offer for a development?', answer: "Turnaround depends on the number of units and access, but we plan installation in advance so staging is complete and ready for your marketing launch or first viewings." },
            { question: 'Can you work to a fixed launch deadline?', answer: 'Yes — tell us your launch date as early as possible and we will plan the design, procurement, and installation schedule to be ready in time.' },
            { question: 'Do you stage show homes?', answer: 'Yes — show-home staging to a premium standard is one of our core services for developers, designed to demonstrate lifestyle and support your sales team.' },
            { question: 'Do you offer account or volume arrangements?', answer: 'Yes — for developers staging multiple phases, sites, or show homes per year, we offer ongoing account arrangements with consistent pricing and priority scheduling.' },
          ]}
        />
        <FinalCTA
          heading={<>Ready to Stage Your<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Next Development?</em></>}
          subhead="Tell us about your development and launch timeline and we'll provide a free consultation and tailored proposal."
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
