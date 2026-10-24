import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LEGAL_LAST_UPDATED } from '@/data/site';

export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">
        <section style={{ background: '#2D2926', padding: 'clamp(8rem,14vw,10rem) 0 clamp(3.5rem,7vw,5rem)' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#F2EDE8', marginBottom: '1.25rem' }}
            >
              {title}
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(242,237,232,0.75)', maxWidth: '58ch' }}>{intro}</p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(242,237,232,0.65)', marginTop: '1.5rem' }}>
              Last updated {LEGAL_LAST_UPDATED}
            </p>
          </div>
        </section>
        <section style={{ background: '#F8F5F1', padding: 'clamp(3.5rem,7vw,5.5rem) 0 clamp(5rem,10vw,8rem)' }}>
          <div className="legal-prose max-w-3xl mx-auto px-6 lg:px-10">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
