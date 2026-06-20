export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ eyebrow = 'FAQ', heading, items }: { eyebrow?: string; heading: React.ReactNode; items: FAQItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F2EDE8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</p>
          <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#2D2926', marginTop: '0.75rem' }}>
            {heading}
          </h2>
        </div>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {items.map((item) => (
            <details key={item.question} style={{ background: '#FFFFFF', border: '1px solid rgba(74,69,64,0.08)', borderRadius: '4px', padding: '1.25rem 1.5rem' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 500, color: '#2D2926', listStyle: 'none' }}>
                {item.question}
              </summary>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B6460', marginTop: '0.875rem' }}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
