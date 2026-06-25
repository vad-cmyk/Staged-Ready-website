const AUDIENCES = [
  { emoji: '🏡', label: 'Property Developers' },
  { emoji: '🏢', label: 'Estate Agents' },
  { emoji: '🛏️', label: 'Airbnb & Holiday Lets' },
  { emoji: '🏠', label: 'Vacant Residential Properties' },
  { emoji: '🏘️', label: 'HMOs & Rental Investment' },
];

export default function WeHelp() {
  return (
    <section style={{ background: '#2D2926', padding: 'clamp(3rem,6vw,4.5rem) 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p
          className="section-label reveal text-center"
          style={{ color: 'rgba(201,169,110,0.7)', marginBottom: '2rem' }}
        >
          We Help:
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {AUDIENCES.map((item, i) => (
            <div
              key={item.label}
              className="reveal flex items-center gap-3"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">
                {item.emoji}
              </span>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'rgba(242,237,232,0.85)',
                  letterSpacing: '0.01em',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
