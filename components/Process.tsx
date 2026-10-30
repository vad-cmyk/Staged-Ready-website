import ProcessVideo from '@/components/process/ProcessVideo';
import ProcessStory from '@/components/process/ProcessStory';

export default function Process() {
  return (
    <section id="process" className="ps-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 lg:items-end">
          <div className="reveal-left">
            <p className="section-label">Our Approach</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#2D2926',
                marginTop: '0.75rem',
              }}
            >
              A Seamless
              <br />
              <em style={{ fontStyle: 'italic' }}>Process,</em>
              <br />
              Start to Finish
            </h2>
          </div>
          <div className="reveal-right" style={{ transitionDelay: '0.15s' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6460', marginBottom: '2rem' }}>
              We take care of every detail so you don&apos;t have to. From initial consultation through to
              final reveal, our process is designed to be effortless for you.
            </p>
            <a href="#contact" className="btn-primary btn-magnetic">
              Start Your Project
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
        </div>

        <ProcessVideo />
        <ProcessStory />
      </div>
    </section>
  );
}
