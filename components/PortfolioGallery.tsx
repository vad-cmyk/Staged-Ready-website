import { projects } from '@/data/projects';

type GalleryItem = {
  category: string;
  full: string;
  src: string;
  alt: string;
  ariaLabel: string;
  transitionDelay: string;
  tall?: boolean;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    category: 'hmo',
    full: '/brand_assets/IMG_0503.JPG',
    src: '/brand_assets/IMG_0503.JPG',
    alt: 'Staged HMO twin bedroom',
    ariaLabel: 'View: HMO twin bedroom',
    transitionDelay: '0s',
  },
  {
    category: 'sale',
    full: '/brand_assets/IMG_0518.JPG',
    src: '/brand_assets/IMG_0518.JPG',
    alt: 'Staged bedroom for sale',
    ariaLabel: 'View: Staged bedroom for sale',
    transitionDelay: '0.05s',
    tall: true,
  },
  {
    category: 'sa',
    full: '/brand_assets/IMG_1599.jpg',
    src: '/brand_assets/IMG_1599.jpg',
    alt: 'Serviced accommodation kitchen',
    ariaLabel: 'View: Serviced accommodation kitchen',
    transitionDelay: '0.1s',
  },
  {
    category: 'sa',
    full: '/brand_assets/IMG_1601.jpg',
    src: '/brand_assets/IMG_1601.jpg',
    alt: 'Serviced accommodation living room',
    ariaLabel: 'View: Serviced accommodation living room',
    transitionDelay: '0.15s',
  },
  {
    category: 'hmo',
    full: '/brand_assets/IMG_0541.JPG',
    src: '/brand_assets/IMG_0541.JPG',
    alt: 'Staged HMO bedroom',
    ariaLabel: 'View: HMO bedroom',
    transitionDelay: '0.2s',
  },
  {
    category: 'sale',
    full: '/brand_assets/IMG_0552.JPG',
    src: '/brand_assets/IMG_0552.JPG',
    alt: 'Styled hallway for sale',
    ariaLabel: 'View: Styled hallway for sale',
    transitionDelay: '0.25s',
  },
  {
    category: 'sale',
    full: '/brand_assets/IMG_0566.JPG',
    src: '/brand_assets/IMG_0566.JPG',
    alt: 'Property staging for sale',
    ariaLabel: 'View: Property staging for sale',
    transitionDelay: '0.3s',
  },
  {
    category: 'sa',
    full: '/brand_assets/IMG_1607.jpg',
    src: '/brand_assets/IMG_1607.jpg',
    alt: 'Serviced accommodation interior',
    ariaLabel: 'View: Serviced accommodation interior',
    transitionDelay: '0.35s',
    tall: true,
  },
  {
    category: 'hmo',
    full: '/brand_assets/IMG_1603.jpg',
    src: '/brand_assets/IMG_1603.jpg',
    alt: 'HMO room styling',
    ariaLabel: 'View: HMO room styling',
    transitionDelay: '0.4s',
  },
  {
    category: 'sa',
    full: '/brand_assets/IMG_1605.jpg',
    src: '/brand_assets/IMG_1605.jpg',
    alt: 'Serviced accommodation room',
    ariaLabel: 'View: Serviced accommodation room',
    transitionDelay: '0.45s',
  },
  {
    category: 'hmo',
    full: '/brand_assets/IMG_1608.jpg',
    src: '/brand_assets/IMG_1608.jpg',
    alt: 'HMO property staging',
    ariaLabel: 'View: HMO property staging',
    transitionDelay: '0.5s',
  },
];

function GalleryOverlayIcon() {
  return (
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
  );
}

export default function PortfolioGallery() {
  const showHeading = projects.length === 0;
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        {showHeading && (
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
        )}
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
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.full}
            className="gallery-item cursor-gold reveal"
            data-category={item.category}
            style={{
              height: item.tall ? '100%' : '240px',
              transitionDelay: item.transitionDelay,
              ...(item.tall ? { gridRow: 'span 2' } : {}),
            }}
            data-full={item.full}
            role="button"
            tabIndex={0}
            aria-label={item.ariaLabel}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={item.tall ? { height: '100%' } : undefined}
            />
            <GalleryOverlayIcon />
          </div>
        ))}
      </div>
    </>
  );
}
