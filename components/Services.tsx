import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#F2EDE8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header — centered */}
        <div className="text-center mb-16">
          <p className="section-label reveal">What We Do</p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#2D2926',
              marginTop: '0.75rem',
              marginBottom: '1rem',
              transitionDelay: '0.1s',
            }}
          >
            Staging for Every
            <br />
            <em style={{ fontStyle: 'italic' }}>Property Strategy</em>
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: '#6B6460',
              maxWidth: '45ch',
              margin: '0 auto',
              transitionDelay: '0.2s',
            }}
          >
            Whether you&apos;re selling, letting to multiple tenants, or running a serviced accommodation, we
            stage your property to perform at its best.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: For Sale */}
          <div className="service-card reveal stagger" style={{ transitionDelay: '0s' }}>
            <div className="service-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_assets/IMG_0566.JPG" alt="Elegantly staged bedroom for property sale" loading="lazy" />
            </div>
            <div style={{ padding: '2rem 1.75rem 2.25rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                01
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#2D2926',
                  marginBottom: '1rem',
                }}
              >
                Property
                <br />
                for Sale
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#6B6460', marginBottom: '1.5rem' }}>
                First impressions sell properties. We stage your home to create an emotional connection with
                buyers — helping you achieve a faster sale and the best possible price.
              </p>
              <Link
                href="/home-staging"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                className="group"
              >
                <span>Learn More</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'transform 0.25s ease' }}
                  className="group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M1 6h10M6 1l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: HMO */}
          <div className="service-card reveal stagger" style={{ transitionDelay: '0.1s', marginTop: '2rem' }}>
            <div className="service-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_assets/IMG_0503.JPG" alt="Staged HMO twin bedroom with high-quality furnishings" loading="lazy" />
            </div>
            <div style={{ padding: '2rem 1.75rem 2.25rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                02
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#2D2926',
                  marginBottom: '1rem',
                }}
              >
                HMO
                <br />
                Furniture Packages
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#6B6460', marginBottom: '1.5rem' }}>
                Attract quality long-term tenants to your House in Multiple Occupation. Our staging creates
                welcoming, functional rooms that command premium rents and reduce voids.
              </p>
              <Link
                href="/hmo-furniture-packages"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                className="group"
              >
                <span>Learn More</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'transform 0.25s ease' }}
                  className="group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M1 6h10M6 1l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Service Accommodation Furniture Packages */}
          <div className="service-card reveal stagger" style={{ transitionDelay: '0.2s' }}>
            <div className="service-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_assets/IMG_1599.jpg" alt="Staged luxury kitchen for service accommodation" loading="lazy" />
            </div>
            <div style={{ padding: '2rem 1.75rem 2.25rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                03
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.875rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: '#2D2926',
                  marginBottom: '1rem',
                }}
              >
                Service Accommodation
                <br />
                Furniture Packages
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: '#6B6460', marginBottom: '1.5rem' }}>
                Maximise occupancy rates and guest reviews for your holiday or short-let property. We create
                spaces that look stunning in listings and deliver exceptional guest experiences.
              </p>
              <Link
                href="/serviced-accommodation-furniture-packages"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                className="group"
              >
                <span>Learn More</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'transform 0.25s ease' }}
                  className="group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M1 6h10M6 1l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
