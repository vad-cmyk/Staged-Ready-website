export default function Hero() {
  return (
    <section id="hero" className="grain relative">
      <div className="hero-bg" id="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-tint" />
      <div className="hero-glow" />

      {/* Radial blob top-right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div className="max-w-3xl">
          <div className="section-label mb-6 reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>
            Property Staging Specialists
          </div>

          <h1
            className="font-display reveal"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.25rem)',
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#F2EDE8',
              marginBottom: '1.5rem',
              transitionDelay: '0.1s',
            }}
          >
            Professional Home Staging
            <br />
            Across Norfolk &amp; East Anglia
            <br />
            — Designed to Help Properties{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#DFC08A' }}>Sell Faster</em>.
          </h1>

          <p
            className="reveal"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.75,
              color: 'rgba(242,237,232,0.75)',
              maxWidth: '48ch',
              marginBottom: '2.5rem',
              transitionDelay: '0.2s',
            }}
          >
            We help property developers maximise the sale price of their properties through strategic home
            staging. By presenting each project at its full potential, we generate stronger buyer interest,
            reduce time on the market and help developers move onto their next project more quickly.
          </p>

          <div className="flex flex-wrap gap-4 reveal stagger" style={{ transitionDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary btn-magnetic">
              Get a free staging quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7h10M7 2l5 5-5 5" />
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline">
              View Portfolio
            </a>
          </div>
        </div>

        {/* Hero stats chips */}
        <div className="flex flex-wrap gap-6 mt-14 reveal" style={{ transitionDelay: '0.45s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '1px', height: '2.5rem', background: 'rgba(201,169,110,0.4)' }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.75rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#DFC08A',
                  letterSpacing: '-0.02em',
                }}
              >
                10<span style={{ fontSize: '1rem' }}>+</span>
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(242,237,232,0.5)',
                  marginTop: '0.2rem',
                }}
              >
                Properties Staged
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '1px', height: '2.5rem', background: 'rgba(201,169,110,0.4)' }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.75rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#DFC08A',
                  letterSpacing: '-0.02em',
                }}
              >
                95<span style={{ fontSize: '1rem' }}>%</span>
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(242,237,232,0.5)',
                  marginTop: '0.2rem',
                }}
              >
                Faster Results
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '1px', height: '2.5rem', background: 'rgba(201,169,110,0.4)' }} />
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.75rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  color: '#DFC08A',
                  letterSpacing: '-0.02em',
                }}
              >
                73<span style={{ fontSize: '1rem' }}>%</span>
              </p>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(242,237,232,0.5)',
                  marginTop: '0.2rem',
                }}
              >
                Homes Staged Spend Less Time on the Market
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#F2EDE8',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </p>
        <div
          style={{
            width: '1px',
            height: '3rem',
            background: 'linear-gradient(to bottom,rgba(242,237,232,0.6),transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
