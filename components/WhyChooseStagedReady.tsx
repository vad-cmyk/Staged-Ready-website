import TrustBar from '@/components/landing/TrustBar';

const REASONS = [
  'Property developer founded',
  'Real-world renovation experience',
  'Strategic staging, not just interior styling',
  'Covering Norfolk & East Anglia',
  'Tailored packages for developers and investors',
];

export default function WhyChooseStagedReady() {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#2D2926' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>Our Approach</p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#F2EDE8',
              marginTop: '0.75rem',
            }}
          >
            Why Choose <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Staged Ready?</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
          {REASONS.map((reason, i) => (
            <div
              key={reason}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s`, textAlign: 'center' }}
            >
              <div style={{ width: '2rem', height: '1px', background: '#C9A96E', margin: '0 auto 1.25rem' }} />
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'rgba(242,237,232,0.85)', fontWeight: 500 }}>
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'clamp(3rem,6vw,4.5rem)' }}>
        <TrustBar
          stats={[
            { value: '10+', label: 'Properties Staged' },
            { value: '73%', label: 'Homes Staged Spend Less Time on the Market' },
            { value: '63%', label: 'Of Buyers Pay More' },
            { value: '90%', label: "Can't Visualise an Empty Space" },
          ]}
        />
      </div>
    </section>
  );
}
