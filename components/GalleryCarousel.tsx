'use client';

import Link from 'next/link';
import PolaroidLineCarousel, { type Slide } from '@/components/ui/polaroid-line-carousel';
import { projects } from '@/data/projects';

// Served through the Next.js image optimizer so each print downloads at ~640px, not the full photo.
const img = (file: string) => `/_next/image?url=${encodeURIComponent('/brand_assets/' + file)}&w=640&q=75`;

const SLIDES: Slide[] = [
  { image: img('IMG_1601.jpg'), title: 'Open-Plan Living', caption: 'Serviced accommodation · Teal sofas and mustard cushions in a barn conversion', alt: 'Staged open-plan barn conversion living room with teal sofas and mustard cushions' },
  { image: img('IMG_0566.JPG'), title: 'Living Room', caption: 'Property for sale · Cream corner sofa beside a media wall and log store', alt: 'Staged living room with a cream corner sofa, media wall and log store' },
  { image: img('IMG_0503.JPG'), title: 'Twin Bedroom', caption: 'HMO furniture package · Twin beds with sage cushions and fresh towels', alt: 'Staged HMO twin bedroom with sage cushions and folded towels' },
  { image: img('IMG_1599.jpg'), title: 'Kitchen', caption: 'Serviced accommodation · Navy kitchen island with bar stools', alt: 'Serviced accommodation kitchen with a navy island and bar stools' },
  { image: img('IMG_0518.JPG'), title: 'Bedroom', caption: 'Property for sale · Upholstered headboard and soft grey linens', alt: 'Staged bedroom with a tall upholstered headboard and grey bedding' },
  { image: img('IMG_0541.JPG'), title: 'Bathroom', caption: 'HMO furniture package · Freestanding bath with brass fittings', alt: 'Styled bathroom with a freestanding bath, stone basin and brass fittings' },
  { image: img('IMG_0552.JPG'), title: 'Hallway', caption: 'Property for sale · Rattan console beneath a round mirror', alt: 'Styled hallway with a rattan console table and round mirror' },
  { image: img('IMG_1607.jpg'), title: 'Lounge', caption: 'Serviced accommodation · Blue velvet sofas in an open-plan barn', alt: 'Serviced accommodation lounge with blue velvet sofas in an open-plan barn' },
  { image: img('IMG_1603.jpg'), title: 'Guest Bedroom', caption: 'HMO furniture package · Panelled wall and towels laid out for arrival', alt: 'Staged bedroom with a panelled feature wall and towels laid on the bed' },
  { image: img('IMG_1605.jpg'), title: 'Landing', caption: 'Serviced accommodation · Console and mirror leading to the bedroom', alt: 'Styled landing with a console table and mirror leading to a bedroom' },
  { image: img('IMG_1608.jpg'), title: 'Dining', caption: 'HMO furniture package · Long dining table set beside the garden doors', alt: 'Long dining table set for a meal beside open garden doors' },
];

export default function GalleryCarousel() {
  const showHeading = projects.length === 0;
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
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
        <Link href="/portfolio" className="btn-outline-dark reveal">
          View the full portfolio
        </Link>
      </div>

      {/* Full-bleed: the string runs edge to edge across the screen, outside the content column */}
      <div style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <PolaroidLineCarousel
          slides={SLIDES}
          className="brand-carousel"
          height="clamp(480px, 72svh, 680px)"
          cardWidth={300}
          sag={40}
          autoplay={0}
          string="#A8844A"
          background="#F8F5F1"
          ink="#2D2926"
          ariaLabel="Portfolio of staged properties"
          style={{ ['--pl-muted' as string]: '#6B6460', ['--pl-line' as string]: 'rgba(45,41,38,0.3)' }}
        />
      </div>
    </>
  );
}
