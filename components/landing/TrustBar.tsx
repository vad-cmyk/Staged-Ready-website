type Stat = { value: string; label: string };

export default function TrustBar({ stats }: { stats: Stat[] }) {
  return (
    <div style={{ background: '#2D2926', padding: 'clamp(2rem,4vw,3rem) 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal text-center md:text-left">
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 300, color: '#DFC08A', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.55)', marginTop: '0.4rem' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
