type Benefit = { title: string; description: string };

export default function Benefits({ eyebrow, heading, items }: { eyebrow: string; heading: React.ReactNode; items: Benefit[] }) {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F8F5F1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</p>
          <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#2D2926', marginTop: '0.75rem' }}>
            {heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ width: '2.5rem', height: '1px', background: '#C9A96E', marginBottom: '1.25rem' }} />
              <h3 className="font-display" style={{ fontSize: '1.375rem', fontWeight: 400, color: '#2D2926', marginBottom: '0.625rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B6460' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
