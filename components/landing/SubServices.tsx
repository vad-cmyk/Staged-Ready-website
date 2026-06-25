type SubService = { title: string; description: string };

export default function SubServices({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  items: SubService[];
}) {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F2EDE8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.25rem,4.5vw,3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#2D2926',
              marginTop: '0.75rem',
            }}
          >
            {heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: '#FFFFFF',
                border: '1px solid rgba(74,69,64,0.08)',
                borderRadius: '4px',
                padding: '2.25rem 2rem',
                boxShadow: '0 2px 8px rgba(74,69,64,0.06)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3
                className="font-display"
                style={{ fontSize: '1.5rem', fontWeight: 400, color: '#2D2926', marginBottom: '0.75rem' }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#6B6460' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
