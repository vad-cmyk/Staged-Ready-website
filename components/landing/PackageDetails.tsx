import { PACKAGES, TERM_ROWS, type PackageInfo } from '@/data/packages';
import { PRICING_TIERS } from '@/data/pricing';

// "What's included" + practical terms for one service, all driven by
// data/packages.ts and data/pricing.ts. Rows without a confirmed answer
// are hidden automatically.
export default function PackageDetails({
  service,
  background = '#F8F5F1',
}: {
  service: PackageInfo['id'];
  background?: string;
}) {
  const pkg = PACKAGES[service];
  const tier = PRICING_TIERS.find((t) => t.id === service);
  const terms = TERM_ROWS.filter(({ key }) => pkg.terms[key] !== null);

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* What's included */}
          <div className="reveal-left">
            <p className="section-label">The Package</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem,4.5vw,3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#2D2926',
                marginTop: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              What&apos;s <em style={{ fontStyle: 'italic' }}>Included</em>
            </h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {pkg.included.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(74,69,64,0.1)',
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#84672B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flexShrink: 0, marginTop: '0.3rem' }}
                  >
                    <path d="M2.5 8.5 6 12l7.5-8" />
                  </svg>
                  <span style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#4A4540' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical details + indicative price */}
          <div className="reveal-right" style={{ transitionDelay: '0.15s' }}>
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(74,69,64,0.08)',
                borderRadius: '4px',
                padding: '2.25rem 2rem',
                boxShadow: '0 2px 8px rgba(74,69,64,0.06)',
              }}
            >
              {tier && (
                <p style={{ marginBottom: pkg.timescale || terms.length ? '1.75rem' : '2rem' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6460' }}>
                    From{' '}
                  </span>
                  <span className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.02em', color: '#A68248' }}>
                    {tier.fromPrice}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.875rem', lineHeight: 1.7, color: '#6B6460', marginTop: '0.5rem' }}>
                    Every property is different — get a tailored quote.
                  </span>
                </p>
              )}

              {pkg.timescale && (
                <div style={{ padding: '1rem 0', borderTop: '1px solid rgba(74,69,64,0.1)' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#84672B', fontWeight: 600, marginBottom: '0.375rem' }}>
                    Timescale
                  </p>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#4A4540' }}>{pkg.timescale}</p>
                </div>
              )}

              {terms.map(({ key, heading }) => (
                <div key={key} style={{ padding: '1rem 0', borderTop: '1px solid rgba(74,69,64,0.1)' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#84672B', fontWeight: 600, marginBottom: '0.375rem' }}>
                    {heading}
                  </p>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#4A4540' }}>{pkg.terms[key]}</p>
                </div>
              ))}

              <a
                href="#contact"
                className="btn-primary btn-magnetic"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
              >
                Get a Free Staging Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
