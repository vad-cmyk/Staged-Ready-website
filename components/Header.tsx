import Link from 'next/link';
import { SITE } from '@/data/site';

export default function Header() {
  return (
    <nav id="nav" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Staged Ready — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand_assets/Staged%20ready.jpeg"
            alt="Staged Ready Logo"
            className="h-10 w-10 object-cover"
            style={{ borderRadius: '2px' }}
          />
          <div className="hidden sm:block">
            <p
              className="font-display font-500 text-sm leading-tight tracking-widest uppercase"
              style={{ color: '#F2EDE8', letterSpacing: '0.18em', transition: 'color 0.3s' }}
              id="nav-brand-name"
            >
              Staged Ready
            </p>
            <p
              className="text-xs tracking-widest uppercase"
              style={{
                color: 'rgba(242,237,232,0.5)',
                letterSpacing: '0.2em',
                fontSize: '0.55rem',
                transition: 'color 0.3s',
              }}
              id="nav-brand-sub"
            >
              Property Staging
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#portfolio" className="nav-link">Portfolio</a>
          <a href="/#process" className="nav-link">Process</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>

        {/* Desktop phone + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={SITE.phoneHref}
            aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`}
            className="nav-link flex items-center gap-2"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {SITE.phoneDisplay}
          </a>
          <a href="/#contact" className="btn-primary btn-magnetic" style={{ padding: '0.65rem 1.75rem', fontSize: '0.75rem' }}>
            Get a Quote
          </a>
        </div>

        {/* Mobile: phone icon button + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <a
            href={SITE.phoneHref}
            aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`}
            className="flex items-center justify-center"
            style={{ width: '44px', height: '44px', color: '#F2EDE8' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            id="hamburger"
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-1"
            style={{ color: '#F2EDE8', width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="block w-6 h-px bg-current transition-transform duration-300" id="ham-1"></span>
            <span className="block w-4 h-px bg-current transition-opacity duration-300 ml-auto" id="ham-2"></span>
            <span className="block w-6 h-px bg-current transition-transform duration-300" id="ham-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" role="menu">
        <a href="/#services" className="nav-link" role="menuitem">Services</a>
        <a href="/#portfolio" className="nav-link" role="menuitem">Portfolio</a>
        <a href="/#process" className="nav-link" role="menuitem">Process</a>
        <a href="/#contact" className="nav-link" role="menuitem">Contact</a>
        <a
          href={SITE.phoneHref}
          aria-label={`Call Staged Ready on ${SITE.phoneDisplay}`}
          className="nav-link"
          role="menuitem"
        >
          {SITE.phoneDisplay}
        </a>
        <a href="/#contact" className="btn-primary" style={{ width: 'fit-content' }}>
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
