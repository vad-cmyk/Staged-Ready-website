export default function Process() {
  return (
    <section id="process" style={{ background: '#F2EDE8', padding: 'clamp(5rem,10vw,9rem) 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: header */}
          <div className="reveal-left">
            <p className="section-label">Our Approach</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#2D2926',
                marginTop: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              A Seamless
              <br />
              <em style={{ fontStyle: 'italic' }}>Process,</em>
              <br />
              Start to Finish
            </h2>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6460', marginBottom: '2rem' }}>
              We take care of every detail so you don&apos;t have to. From initial consultation through to
              final reveal, our process is designed to be effortless for you.
            </p>
            <a href="#contact" className="btn-primary btn-magnetic" style={{ marginTop: '0.5rem' }}>
              Start Your Project
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

            {/* Inline image below CTA */}
            <div style={{ marginTop: '3rem', overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand_assets/IMG_1600.jpg"
                alt="Staged property interior detail"
                loading="lazy"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top,rgba(45,41,38,0.4),transparent 60%)',
                }}
              />
            </div>
          </div>

          {/* Right: steps */}
          <div className="reveal-right" style={{ transitionDelay: '0.15s' }}>
            <div className="flex flex-col gap-0">
              {/* Step 1 */}
              <div className="process-step flex gap-6 pb-8 relative" style={{ borderBottom: '1px solid rgba(74,69,64,0.1)' }}>
                <div style={{ minWidth: '3rem' }}>
                  <p className="process-number">01</p>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      fontWeight: 500,
                      marginBottom: '0.4rem',
                    }}
                  >
                    Consultation
                  </p>
                  <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#2D2926', marginBottom: '0.5rem' }}>
                    We Assess Your Property
                  </p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460' }}>
                    A site visit or call to understand your property, target audience, and staging objectives.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="process-step flex gap-6 py-8 relative" style={{ borderBottom: '1px solid rgba(74,69,64,0.1)' }}>
                <div style={{ minWidth: '3rem' }}>
                  <p className="process-number">02</p>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      fontWeight: 500,
                      marginBottom: '0.4rem',
                    }}
                  >
                    Design Plan
                  </p>
                  <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#2D2926', marginBottom: '0.5rem' }}>
                    Tailored Staging Concept
                  </p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460' }}>
                    We present a bespoke staging plan with furniture selections, colour scheme, and layout —
                    crafted for your market.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="process-step flex gap-6 py-8 relative" style={{ borderBottom: '1px solid rgba(74,69,64,0.1)' }}>
                <div style={{ minWidth: '3rem' }}>
                  <p className="process-number">03</p>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      fontWeight: 500,
                      marginBottom: '0.4rem',
                    }}
                  >
                    Installation
                  </p>
                  <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#2D2926', marginBottom: '0.5rem' }}>
                    Full Furnishing &amp; Styling
                  </p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460' }}>
                    Our team delivers and installs everything — furniture, artwork, soft furnishings, and
                    accessories.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="process-step flex gap-6 py-8 relative" style={{ borderBottom: '1px solid rgba(74,69,64,0.1)' }}>
                <div style={{ minWidth: '3rem' }}>
                  <p className="process-number">04</p>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      fontWeight: 500,
                      marginBottom: '0.4rem',
                    }}
                  >
                    Photography
                  </p>
                  <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#2D2926', marginBottom: '0.5rem' }}>
                    Professional Shots Included
                  </p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460' }}>
                    We can coordinate professional photography to ensure your listing looks exceptional online.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="process-step flex gap-6 pt-8">
                <div style={{ minWidth: '3rem' }}>
                  <p className="process-number">05</p>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      fontWeight: 500,
                      marginBottom: '0.4rem',
                    }}
                  >
                    Results
                  </p>
                  <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#2D2926', marginBottom: '0.5rem' }}>
                    Your Property Performs
                  </p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460' }}>
                    Watch your property attract more interest, sell faster, and achieve higher returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
