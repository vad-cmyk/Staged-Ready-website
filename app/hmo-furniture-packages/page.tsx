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
  title: 'HMO Furniture Packages for Landlords | Staged Ready',
  description: 'Durable, compliant HMO furniture packages for landlords and investors in Norfolk. Command premium rents, attract quality tenants, and reduce voids.',
  alternates: { canonical: 'https://stagedready.com/hmo-furniture-packages' },
  openGraph: {
    title: 'HMO Furniture Packages for Landlords',
    description: 'Durable, compliant furniture packages that command premium rents and reduce voids.',
    url: 'https://stagedready.com/hmo-furniture-packages',
    images: ['/brand_assets/IMG_1741.jpeg'],
  },
};

export default function HmoFurniturePackagesPage() {
  return (
    <>
      <Header />
      <main>
        <LandingHero
          eyebrow="For HMO Landlords & Investors"
          heading={<>HMO Furniture Packages<br />for <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Landlords</em></>}
          subhead="Durable, compliant furnishing that presents your HMO to a standard quality tenants expect — supporting premium rents, faster lets, and fewer voids."
          ctaLabel="Book a Free Consultation"
          ctaHref="#contact"
          heroImage="/brand_assets/IMG_1741.jpeg"
        />
        <TrustBar
          stats={[
            { value: '10+', label: 'HMOs Furnished' },
            { value: '73%', label: 'Faster Time to Let' },
            { value: '63%', label: 'Tenants Pay More for Presentation' },
            { value: '90%', label: "Can't Visualise an Unfurnished Room" },
          ]}
        />
        <ProblemSolution
          eyebrow="Built for HMO Landlords"
          heading={<>A Poorly Furnished Room Is a <em style={{ fontStyle: 'italic' }}>Void Waiting to Happen</em></>}
          pairs={[
            {
              problem: 'Mismatched, low-quality, or worn furniture makes rooms harder to let and gives quality tenants a reason to look elsewhere.',
              solution: 'We furnish every room to a consistent, presentable standard that attracts quality long-term tenants and supports the rent you’re asking.',
            },
            {
              problem: 'Cheap furniture wears out fast under HMO turnover, leading to repeat replacement costs and maintenance call-outs.',
              solution: 'We specify durable, practical furnishing built for HMO use, reducing wear-related replacement and maintenance over the tenancy.',
            },
            {
              problem: 'Some furniture for licensed HMOs must meet fire-safety regulations, and getting this wrong creates compliance risk.',
              solution: 'Where relevant, we specify appropriate, compliant furnishings — including fire-safety-rated pieces — so you meet your obligations as a landlord.',
            },
            {
              problem: 'Furnishing room-by-room as tenants change, or coordinating a whole-property fit-out, is time you don’t have as a landlord or investor.',
              solution: 'We handle single rooms, communal areas, or full whole-property fit-outs on one schedule, so refurnishing doesn’t fall on you.',
            },
          ]}
        />
        <Benefits
          eyebrow="Why Landlords Choose Staged Ready"
          heading={<>Furnishing That Protects Your <em style={{ fontStyle: 'italic' }}>Rental Income</em></>}
          items={[
            { title: 'Premium Rent Presentation', description: 'Consistent, quality furnishing that supports asking rent and attracts tenants willing to pay for it.' },
            { title: 'Built to Last', description: 'Durable, practical furniture specified for the wear and turnover typical of HMO living.' },
            { title: 'Compliance-Aware', description: 'Fire-safety-rated and appropriate furnishings specified where regulations require it.' },
            { title: 'Whole-Property Fit-Outs', description: 'From a single room to communal areas to a full HMO fit-out, all coordinated on one schedule.' },
          ]}
        />
        <ProcessCondensed heading={<>From Brief to <em style={{ fontStyle: 'italic' }}>Tenant-Ready</em></>} />
        <PortfolioStrip propertyType="hmo" />
        <Reviews filterService="hmo" />
        <FAQAccordion
          heading={<>Landlord <em style={{ fontStyle: 'italic' }}>FAQs</em></>}
          items={[
            { question: "What's included per room or property?", answer: 'Each package is scoped to your property, typically covering bedroom furniture per room plus communal living and kitchen areas, specified for durability and HMO use.' },
            { question: 'Do you furnish communal areas?', answer: 'Yes — communal living rooms, kitchens, and dining areas can be furnished as part of the same package as individual bedrooms.' },
            { question: "What's the lead time?", answer: 'Lead time depends on the number of rooms and furniture availability. Get in touch with your property details and timeline and we will confirm a schedule.' },
            { question: 'Is the furniture durable enough for HMO use?', answer: 'Yes — we specify furniture for durability and practicality under typical HMO turnover, not just appearance, to reduce repeat replacement costs.' },
            { question: 'Do you handle whole-property fit-outs?', answer: 'Yes — from a single room refresh to a complete whole-property fit-out across every bedroom and communal area, we can manage the full scope on one schedule.' },
          ]}
        />
        <FinalCTA
          heading={<>Ready to Furnish Your<br /><em style={{ fontStyle: 'italic', color: '#DFC08A' }}>HMO?</em></>}
          subhead="Tell us about your property and we'll provide a free consultation and a furniture package proposal built for your tenants."
        />
      </main>
      <Footer />
      <Lightbox />
    </>
  );
}
