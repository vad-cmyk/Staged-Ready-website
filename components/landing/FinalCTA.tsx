import { SITE } from '@/data/site';
import PhoneIcon from '@/components/icons/PhoneIcon';

export default function FinalCTA({ heading, subhead }: { heading: React.ReactNode; subhead: string }) {
  return (
    <section id="contact" className="relative grain" style={{ background: '#2D2926', padding: 'clamp(6rem,12vw,10rem) 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '600px', height: '400px', background: 'radial-gradient(ellipse at 0% 0%, rgba(201,169,110,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.7)' }}>Get Started</p>
        <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1, color: '#F2EDE8', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
          {heading}
        </h2>
        <p className="reveal" style={{ fontSize: 'clamp(0.9375rem,2vw,1.125rem)', lineHeight: 1.75, color: 'rgba(242,237,232,0.6)', maxWidth: '45ch', margin: '0 auto 2.5rem' }}>
          {subhead}
        </p>
        <div className="reveal flex flex-wrap items-center justify-center gap-5">
          <a href={`mailto:${SITE.email}`} className="btn-dark btn-magnetic" style={{ fontSize: '0.875rem', padding: '1.125rem 3rem' }}>
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 8h12M8 2l6 6-6 6" />
            </svg>
          </a>
          <a href={SITE.phoneHref} aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`} style={{ color: '#F2EDE8', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <PhoneIcon size={16} stroke="#DFC08A" strokeWidth={1.5} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
