import { PRICING_TIERS, type PricingTier } from '@/data/pricing';

export default function Pricing({ highlight }: { highlight?: PricingTier['id'] }) {
  return (
    <section id="pricing" style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#F8F5F1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>Investment</p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#2D2926',
              marginTop: '0.75rem',
              marginBottom: '1rem',
              transitionDelay: '0.1s',
            }}
          >
            Staging Packages,
            <br />
            <em style={{ fontStyle: 'italic' }}>From</em>
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: '#6B6460',
              maxWidth: '38ch',
              margin: '0 auto',
              transitionDelay: '0.2s',
            }}
          >
            Every property is different — get a tailored quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING_TIERS.map((tier, i) => {
            const isHighlighted = highlight === tier.id;
            return (
              <div
                key={tier.id}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: isHighlighted ? '#2D2926' : '#FFFFFF',
                  border: isHighlighted ? '1.5px solid #C9A96E' : '1px solid rgba(74,69,64,0.08)',
                  borderRadius: '4px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  boxShadow: isHighlighted
                    ? '0 20px 60px rgba(45,41,38,0.25), 0 0 0 1px rgba(201,169,110,0.2)'
                    : '0 2px 8px rgba(74,69,64,0.06)',
                }}
              >
                {isHighlighted && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-0.75rem',
                      left: '2rem',
                      background: '#C9A96E',
                      color: '#2D2926',
                      fontSize: '0.625rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2px',
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: 400,
                    color: isHighlighted ? '#F2EDE8' : '#2D2926',
                    marginBottom: '0.5rem',
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: isHighlighted ? 'rgba(242,237,232,0.6)' : '#6B6460',
                    marginBottom: '1.5rem',
                    minHeight: '2.8em',
                  }}
                >
                  {tier.description}
                </p>
                <p style={{ marginBottom: '1.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isHighlighted ? 'rgba(242,237,232,0.5)' : '#A8A29B',
                    }}
                  >
                    From{' '}
                  </span>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '2.25rem',
                      fontWeight: 300,
                      letterSpacing: '-0.02em',
                      color: isHighlighted ? '#DFC08A' : '#C9A96E',
                    }}
                  >
                    {tier.fromPrice}
                  </span>
                </p>
                <a
                  href="#contact"
                  className={isHighlighted ? 'btn-primary btn-magnetic' : 'btn-outline btn-magnetic'}
                  style={
                    isHighlighted
                      ? { width: '100%', justifyContent: 'center' }
                      : { width: '100%', justifyContent: 'center', color: '#2D2926', borderColor: 'rgba(45,41,38,0.25)' }
                  }
                >
                  Get a Free Staging Quote
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
