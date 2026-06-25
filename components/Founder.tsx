const POINTS = [
  {
    label: 'Property Development Background',
    description: 'Deep understanding of what buyers, tenants, and investors respond to.',
  },
  {
    label: 'Interior Design Passion',
    description: 'Every staging decision is guided by both aesthetics and market strategy.',
  },
  {
    label: 'Hands-On & Results-Driven',
    description: 'Personally involved in every project from consultation to final reveal.',
  },
];

export default function Founder() {
  return (
    <section id="founder" style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#F2EDE8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: portrait */}
          <div className="reveal-left" style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand_assets/IMG_1741.jpeg"
                alt="Jazmine Harbuz — Founder of Staged Ready, styling a property"
                loading="lazy"
                style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(45,41,38,0.55) 0%, transparent 45%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                }}
              >
                <p
                  className="font-display"
                  style={{ fontSize: '1.25rem', fontWeight: 400, color: '#F2EDE8', letterSpacing: '-0.01em' }}
                >
                  Jazmine Harbuz
                </p>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(242,237,232,0.7)',
                    marginTop: '0.2rem',
                  }}
                >
                  Founder, Staged Ready
                </p>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Right: bio */}
          <div className="reveal-right" style={{ transitionDelay: '0.15s' }}>
            <p className="section-label">Meet the Founder</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#2D2926',
                marginTop: '0.75rem',
                marginBottom: '0.5rem',
              }}
            >
              Jazmine <em style={{ fontStyle: 'italic' }}>Harbuz</em>
            </h2>
            <p
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C9A96E',
                fontWeight: 600,
                marginBottom: '1.75rem',
              }}
            >
              Founder &amp; Lead Stager
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6460', marginBottom: '1.25rem' }}>
              Jazmine&apos;s passion for property started long before Staged Ready was born. With a background
              in property development and an instinctive eye for interior design, she spent years understanding
              exactly what makes a space feel desirable — and how that translates into real financial results.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6460', marginBottom: '2.25rem' }}>
              Driven by the belief that every property deserves to be presented at its absolute best, she founded
              Staged Ready to bridge the gap between beautiful interiors and investment performance. Her
              hands-on approach and relentless attention to detail is at the heart of everything we do.
            </p>
            <div className="flex flex-col gap-5">
              {POINTS.map((point) => (
                <div key={point.label} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ minWidth: '1.5rem', paddingTop: '0.3rem' }}>
                    <div style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: '#C9A96E' }} />
                  </div>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#2D2926' }}>
                    <span style={{ fontWeight: 600 }}>{point.label}</span>
                    <span style={{ color: '#6B6460' }}> — {point.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
