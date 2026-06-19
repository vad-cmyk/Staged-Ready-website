import Link from 'next/link';
import { SITE } from '@/data/site';

const footerLinkStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'rgba(242,237,232,0.5)',
  textDecoration: 'none',
  transition: 'color 0.25s ease',
};

export default function Footer() {
  return (
    <footer style={{ background: '#1E1B18', padding: '4rem 0 2rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(242,237,232,0.06)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand_assets/Staged%20ready.jpeg"
                alt="Staged Ready"
                style={{ height: '2.75rem', width: '2.75rem', objectFit: 'cover' }}
              />
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', fontWeight: 400, color: '#F2EDE8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Staged Ready
                </p>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.35)' }}>
                  Property Staging
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(242,237,232,0.4)', maxWidth: '28ch' }}>
              Professional property staging for sale, HMO, and service accommodation.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.3)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="/#services" style={footerLinkStyle}>Services</a>
              <a href="/#portfolio" style={footerLinkStyle}>Portfolio</a>
              <a href="/#process" style={footerLinkStyle}>Process</a>
              <a href="/#contact" style={footerLinkStyle}>Contact</a>
            </div>
          </div>

          {/* Services + social */}
          <div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.3)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Services
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <Link href="/home-staging" style={footerLinkStyle}>Property for Sale</Link>
              <Link href="/hmo-furniture-packages" style={footerLinkStyle}>HMO Furniture Packages</Link>
              <Link href="/serviced-accommodation-furniture-packages" style={footerLinkStyle}>
                Serviced Accommodation Furniture Packages
              </Link>
              <Link href="/developer-home-staging" style={footerLinkStyle}>Property Developers</Link>
            </div>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              <a href="https://www.instagram.com/stagedready/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/stagedready/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/staged-ready" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontSize: '0.75rem', color: 'rgba(242,237,232,0.25)' }}>
            &copy; 2026 Staged Ready. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(242,237,232,0.2)' }}>
            Property Staging Specialists — {SITE.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
