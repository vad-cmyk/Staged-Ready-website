export default function PortfolioGallery() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="section-label reveal">Our Work</p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#2D2926',
              marginTop: '0.75rem',
              transitionDelay: '0.1s',
            }}
          >
            Spaces <em style={{ fontStyle: 'italic' }}>We&apos;ve</em>
            <br />
            Transformed
          </h2>
        </div>
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 reveal" style={{ transitionDelay: '0.2s' }} id="filter-tabs">
          <button className="filter-tab" data-filter="sale">
            For Sale
          </button>
          <button className="filter-tab" data-filter="hmo">
            HMO
          </button>
          <button className="filter-tab" data-filter="sa">
            Serviced Acc.
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" id="gallery-grid">
        <div
          className="gallery-item cursor-gold reveal"
          data-category="hmo"
          style={{ height: '240px', transitionDelay: '0s' }}
          data-full="/brand_assets/IMG_0503.JPG"
          role="button"
          tabIndex={0}
          aria-label="View: HMO twin bedroom"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_0503.JPG" alt="Staged HMO twin bedroom" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sale"
          style={{ height: '240px', transitionDelay: '0.05s', gridRow: 'span 2' }}
          data-full="/brand_assets/IMG_0518.JPG"
          role="button"
          tabIndex={0}
          aria-label="View: Staged bedroom for sale"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_0518.JPG" alt="Staged bedroom for sale" loading="lazy" style={{ height: '100%' }} />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sa"
          style={{ height: '240px', transitionDelay: '0.1s' }}
          data-full="/brand_assets/IMG_1599.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: Serviced accommodation kitchen"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1599.jpg" alt="Serviced accommodation kitchen" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sa"
          style={{ height: '240px', transitionDelay: '0.15s' }}
          data-full="/brand_assets/IMG_1601.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: Serviced accommodation living room"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1601.jpg" alt="Serviced accommodation living room" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="hmo"
          style={{ height: '240px', transitionDelay: '0.2s' }}
          data-full="/brand_assets/IMG_0541.JPG"
          role="button"
          tabIndex={0}
          aria-label="View: HMO bedroom"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_0541.JPG" alt="Staged HMO bedroom" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sale"
          style={{ height: '240px', transitionDelay: '0.25s' }}
          data-full="/brand_assets/IMG_0552.JPG"
          role="button"
          tabIndex={0}
          aria-label="View: Styled hallway for sale"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_0552.JPG" alt="Styled hallway for sale" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sale"
          style={{ height: '240px', transitionDelay: '0.3s' }}
          data-full="/brand_assets/IMG_0566.JPG"
          role="button"
          tabIndex={0}
          aria-label="View: Property staging for sale"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_0566.JPG" alt="Property staging for sale" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sa"
          style={{ height: '240px', transitionDelay: '0.35s', gridRow: 'span 2' }}
          data-full="/brand_assets/IMG_1607.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: Serviced accommodation interior"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1607.jpg" alt="Serviced accommodation interior" loading="lazy" style={{ height: '100%' }} />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="hmo"
          style={{ height: '240px', transitionDelay: '0.4s' }}
          data-full="/brand_assets/IMG_1603.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: HMO room styling"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1603.jpg" alt="HMO room styling" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="sa"
          style={{ height: '240px', transitionDelay: '0.45s' }}
          data-full="/brand_assets/IMG_1605.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: Serviced accommodation room"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1605.jpg" alt="Serviced accommodation room" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="gallery-item cursor-gold reveal"
          data-category="hmo"
          style={{ height: '240px', transitionDelay: '0.5s' }}
          data-full="/brand_assets/IMG_1608.jpg"
          role="button"
          tabIndex={0}
          aria-label="View: HMO property staging"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/IMG_1608.jpg" alt="HMO property staging" loading="lazy" />
          <div className="gallery-overlay-icon">
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                border: '1px solid rgba(242,237,232,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2EDE8" strokeWidth={2} aria-hidden="true">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
