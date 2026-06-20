const STEPS = ['Consultation', 'Design Plan', 'Installation', 'Photography', 'Results'];

export default function ProcessCondensed({ eyebrow = 'How It Works', heading }: { eyebrow?: string; heading: React.ReactNode }) {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F2EDE8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</p>
          <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#2D2926', marginTop: '0.75rem' }}>
            {heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <div key={step} className="reveal text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.25rem', fontWeight: 300, color: '#DFC08A', marginBottom: '0.5rem' }}>
                0{i + 1}
              </p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#2D2926' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
