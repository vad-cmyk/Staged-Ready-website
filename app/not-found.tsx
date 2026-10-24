import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Page not found | Staged Ready',
};

const links = [
  { href: '/home-staging', label: 'Home staging for sale' },
  { href: '/developer-home-staging', label: 'Staging for property developers' },
  { href: '/hmo-furniture-packages', label: 'HMO furniture packages' },
  { href: '/serviced-accommodation-furniture-packages', label: 'Serviced accommodation packages' },
  { href: '/portfolio', label: 'Our portfolio' },
  { href: '/faq', label: 'Questions and answers' },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: '#2D2926', padding: 'clamp(8rem,16vw,12rem) 0 clamp(5rem,10vw,8rem)' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.02, color: '#F2EDE8', marginBottom: '1.25rem' }}
            >
              This room is empty
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(242,237,232,0.75)', maxWidth: '46ch', marginBottom: '2.5rem' }}>
              The page you were looking for has moved or never existed. Pick up from one of our services below, or
              tell us about your property and we&apos;ll come back to you.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/#contact" className="btn-primary btn-magnetic">
                Get a free staging quote
              </Link>
              <a href={SITE.phoneHref} className="contact-link" style={{ color: '#F2EDE8', fontSize: '1rem', textDecoration: 'none' }}>
                or call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
        <section style={{ background: '#F8F5F1', padding: 'clamp(3.5rem,7vw,5rem) 0' }}>
          <nav aria-label="Popular pages" className="max-w-3xl mx-auto px-6 lg:px-10">
            <ul className="grid sm:grid-cols-2 gap-x-10">
              {links.map((l) => (
                <li key={l.href} style={{ borderBottom: '1px solid rgba(74,69,64,0.15)' }}>
                  <Link href={l.href} className="not-found-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
