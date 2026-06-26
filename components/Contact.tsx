import { SITE } from '@/data/site';
import PhoneIcon from '@/components/icons/PhoneIcon';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="relative grain" style={{ background: '#2D2926', padding: 'clamp(6rem,12vw,10rem) 0', overflow: 'hidden' }}>
      {/* Background radial glows */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at 0% 0%, rgba(201,169,110,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse at 100% 100%, rgba(201,169,110,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.7)' }}>
          Get Started
        </p>
        <h2
          className="font-display reveal"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: '#F2EDE8',
            marginTop: '0.75rem',
            marginBottom: '1.5rem',
            transitionDelay: '0.1s',
          }}
        >
          Ready to Maximise Your
          <br />
          <em style={{ fontStyle: 'italic', color: '#DFC08A' }}>Property&apos;s Sale Potential?</em>
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 'clamp(0.9375rem,2vw,1.125rem)',
            lineHeight: 1.75,
            color: 'rgba(242,237,232,0.6)',
            maxWidth: '45ch',
            margin: '0 auto 2.5rem',
            transitionDelay: '0.2s',
          }}
        >
          Book a free consultation and we&apos;ll recommend the most effective staging solution for your
          property.
        </p>

        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <ContactForm dark />
        </div>

        {/* Contact details below */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-14 reveal" style={{ transitionDelay: '0.4s' }}>
          <a
            href={`mailto:${SITE.email}`}
            className="contact-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontSize: '0.875rem',
              color: 'rgba(242,237,232,0.5)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {SITE.email}
          </a>
          <div style={{ width: '1px', height: '1.25rem', background: 'rgba(242,237,232,0.15)', display: 'none' }} className="sm:block" />
          <a
            href={SITE.phoneHref}
            className="contact-link"
            aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontSize: '0.875rem',
              color: 'rgba(242,237,232,0.5)',
              textDecoration: 'none',
              transition: 'color 0.25s ease',
            }}
          >
            <PhoneIcon size={16} stroke="currentColor" strokeWidth={1.5} />
            {SITE.phoneDisplay}
          </a>
          <div style={{ width: '1px', height: '1.25rem', background: 'rgba(242,237,232,0.15)', display: 'none' }} className="sm:block" />
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(242,237,232,0.5)' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {SITE.location}
          </span>
        </div>
      </div>
    </section>
  );
}
