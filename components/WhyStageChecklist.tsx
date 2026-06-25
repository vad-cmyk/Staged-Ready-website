const CHECKLIST = [
  'Helps buyers emotionally connect with a property',
  'Makes rooms feel larger and more functional',
  'Creates stronger Rightmove and Zoopla photos',
  'Helps properties stand out from competing listings',
  'Can reduce time on the market',
];

export default function WhyStageChecklist() {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F8F5F1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="section-label">Why Stage?</p>
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
              The Case for
              <br />
              <em style={{ fontStyle: 'italic' }}>Staging</em>
            </h2>
            <a href="#contact" className="btn-primary btn-magnetic">
              Get a Free Staging Quote
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
          </div>
          <div className="reveal-right" style={{ transitionDelay: '0.15s' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {CHECKLIST.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '1.5rem',
                      height: '1.5rem',
                      minWidth: '1.5rem',
                      borderRadius: '50%',
                      background: 'rgba(201,169,110,0.12)',
                      color: '#C9A96E',
                      marginTop: '0.1rem',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.5l2.5 2.5 4.5-6" />
                    </svg>
                  </span>
                  <p style={{ fontSize: '1rem', lineHeight: 1.65, color: '#2D2926', paddingTop: '0.05rem' }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
