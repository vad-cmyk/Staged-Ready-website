import { SITE } from '@/data/site';

type Props = {
  eyebrow: string;
  heading: React.ReactNode;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
  heroImage: string;
};

export default function LandingHero({ eyebrow, heading, subhead, ctaLabel, ctaHref, heroImage }: Props) {
  return (
    <section className="grain relative" style={{ minHeight: 'min(92vh, 820px)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url('${heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(45,41,38,0.88) 0%, rgba(45,41,38,0.35) 50%, rgba(45,41,38,0.12) 100%), linear-gradient(120deg, rgba(201,169,110,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40 w-full">
        <div className="max-w-3xl">
          <div className="section-label mb-6 reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</div>
          <h1
            className="font-display reveal"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.25rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em', color: '#F2EDE8', marginBottom: '1.5rem', transitionDelay: '0.1s' }}
          >
            {heading}
          </h1>
          <p className="reveal" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.75, color: 'rgba(242,237,232,0.78)', maxWidth: '48ch', marginBottom: '2.5rem', transitionDelay: '0.2s' }}>
            {subhead}
          </p>
          <div className="flex flex-wrap items-center gap-5 reveal stagger" style={{ transitionDelay: '0.3s' }}>
            <a href={ctaHref} className="btn-primary btn-magnetic">
              {ctaLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </a>
            <a href={SITE.phoneHref} aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '1rem', color: '#F2EDE8', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFC08A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{ fontWeight: 500 }}>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
