type Pair = { problem: string; solution: string };

export default function ProblemSolution({ eyebrow, heading, pairs }: { eyebrow: string; heading: React.ReactNode; pairs: Pair[] }) {
  return (
    <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: '#F2EDE8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>{eyebrow}</p>
          <h2 className="font-display reveal" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#2D2926', marginTop: '0.75rem' }}>
            {heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pairs.map((pair, i) => (
            <div key={i} className="reveal" style={{ background: '#FFFFFF', borderRadius: '4px', border: '1px solid rgba(74,69,64,0.08)', padding: '2rem', transitionDelay: `${i * 0.08}s` }}>
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8844A', marginBottom: '0.5rem' }}>Problem</p>
              <p style={{ fontSize: '1rem', color: '#2D2926', fontWeight: 500, marginBottom: '1.25rem' }}>{pair.problem}</p>
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8844A', marginBottom: '0.5rem' }}>Staged Ready&apos;s Approach</p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#6B6460' }}>{pair.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
