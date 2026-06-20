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
  title: 'Serviced Accommodation Furniture Packages | Staged Ready',
  description: 'Turnkey furniture packages for Airbnb, short-let and serviced accommodation properties in Norfolk. Styled to win bookings and maximise occupancy and nightly rate.',
  alternates: { canonical: 'https://stagedready.com/serviced-accommodation-furniture-packages' },
  openGraph: {
    title: 'Serviced Accommodation Furniture Packages',
    description: 'Turnkey furniture packages styled to win bookings and maximise occupancy and nightly rate.',
    url: 'https://stagedready.com/serviced-accommodation-furniture-packages',
    images: ['/brand_assets/IMG_1734.jpeg'],
  },
};

export default function ServicedAccommodationPage() {
  return (
    <>
      <Header />
      <main>
        <LandingHero
          eyebrow="For Airbnb & Short-Let Owners"
          heading={<>Serviced Accommodation<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Furniture Packages</em></>}
          subhead="Turnkey furnishing and styling that wins clicks on Airbnb and Booking.com, delivers a 5-star guest experience, and keeps your occupancy and nightly rate working as hard as possible."
          ctaLabel="Book a Free Consultation"
          ctaHref="#contact"
          heroImage="/brand_assets/IMG_1734.jpeg"
        />
        <TrustBar
          stats={[
            { value: '10+', label: 'Properties Furnished' },
            { value: '73%', label: 'Faster Turnaround to Live' },
            { value: '63%', label: 'Guests Influenced by Photos' },
            { value: '90%', label: 'Book Based on Listing Images' },
          ]}
        />
        <ProblemSolution
          eyebrow="Why It Matters"
          heading={<>Your Listing Photos Are Your <em style={{ fontStyle: 'italic' }}>Shop Window</em></>}
          pairs={[
            {
              problem: 'Generic or mismatched furniture photographs poorly, and weak listing photos get scrolled past in a crowded Airbnb or Booking.com search.',
              solution: 'We furnish and style every room to photograph beautifully — coordinated palettes, considered layouts, and guest-ready styling that stands out in search.',
            },
            {
              problem: 'Furnishing a new short-let from scratch — sourcing, delivering, assembling, styling — takes weeks most hosts can’t spare before their listing goes live.',
              solution: 'Our turnkey packages cover sourcing, delivery, and installation end-to-end, so your property is guest-ready and earning sooner.',
            },
            {
              problem: 'Uncomfortable or impractical furniture leads to poor reviews, which directly suppress future bookings and nightly rate.',
              solution: 'We furnish for comfort and durability as well as style, supporting the 5-star guest experience that drives repeat bookings and higher reviews.',
            },
            {
              problem: 'Managing furnishing across several units or properties individually wastes time and creates inconsistent guest experiences.',
              solution: 'We furnish and style multiple properties under one coordinated package, keeping quality and brand consistent across your portfolio.',
            },
          ]}
        />
        <Benefits
          eyebrow="Why Hosts Choose Staged Ready"
          heading={<>Furnished to <em style={{ fontStyle: 'italic' }}>Earn</em>, Not Just Furnish</>}
          items={[
            { title: 'Built for Listing Photography', description: 'Styling and layout chosen specifically to photograph well for Airbnb and Booking.com listings.' },
            { title: 'Turnkey Delivery', description: 'Sourcing, delivery, assembly, and styling handled end-to-end so your property goes live faster.' },
            { title: '5-Star Guest Experience', description: 'Comfortable, durable furnishing that supports strong guest reviews and repeat bookings.' },
            { title: 'Multi-Property Packages', description: 'Consistent furnishing and styling standards across several units or properties in your portfolio.' },
          ]}
        />
        <ProcessCondensed heading={<>From Brief to <em style={{ fontStyle: 'italic' }}>Guest-Ready</em></>} />
        <PortfolioStrip propertyType="serviced" />
        <Reviews filterService="serviced" />
        <FAQAccordion
          heading={<>Frequently Asked <em style={{ fontStyle: 'italic' }}>Questions</em></>}
          items={[
            { question: "What's included in a furniture package?", answer: 'Each package is tailored to the property, but typically includes living, bedroom, kitchen, and styling furnishings — chosen to be comfortable, durable, and photograph well for your listing.' },
            { question: 'How fast can you furnish a unit?', answer: 'Timelines depend on the size of the property and furniture availability, but our turnkey packages are designed to get a unit guest-ready and listing-ready as quickly as possible.' },
            { question: 'Do you handle delivery and installation?', answer: 'Yes — delivery, assembly, and installation are all included, so the property is ready for styling and photography without you managing multiple suppliers.' },
            { question: 'Can you style for listing photography?', answer: 'Yes — styling for strong listing photography is built into every package, since photos are usually the single biggest driver of bookings on Airbnb and Booking.com.' },
            { question: 'Do you cover multiple properties?', answer: 'Yes — we offer multi-property packages for hosts and operators managing several serviced accommodation units, keeping furnishing and styling consistent across the portfolio.' },
          ]}
        />
        <FinalCTA
          heading={<>Ready to Furnish Your<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Next Listing?</em></>}
          subhead="Tell us about your property and we'll provide a free consultation and a furniture package proposal tailored to your guests."
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
