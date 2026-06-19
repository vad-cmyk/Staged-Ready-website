const MARQUEE_ITEMS = [
  'Property for Sale',
  'HMO Furniture Packages',
  'Service Accommodation Furniture Packages',
  'Professional Staging',
];

function MarqueeSet({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3rem', paddingRight: '3rem' }} aria-hidden={ariaHidden}>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '3rem' }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 'clamp(1.5rem,3vw,2rem)',
              fontWeight: 300,
              color: 'rgba(242,237,232,0.3)',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
          <span style={{ color: '#C9A96E', fontSize: '0.75rem' }}>✦</span>
        </span>
      ))}
    </span>
  );
}

export default function MarqueeStrip() {
  return (
    <div style={{ background: '#2D2926', padding: '1rem 0', overflow: 'hidden', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="marquee-track" aria-hidden="true">
        <MarqueeSet ariaHidden={false} />
        <MarqueeSet ariaHidden={true} />
      </div>
    </div>
  );
}
