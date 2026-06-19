import { reviews, GOOGLE_REVIEWS_URL, type Review } from '@/data/reviews';

function average(list: Review[]) {
  return list.reduce((sum, r) => sum + r.rating, 0) / list.length;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} style={{ color: '#C9A96E', letterSpacing: '0.05em' }}>
      {'★'.repeat(rating)}
      <span style={{ color: 'rgba(45,41,38,0.2)' }}>{'★'.repeat(5 - rating)}</span>
    </span>
  );
}

export default function Reviews({ filterService }: { filterService?: Review['service'] } = {}) {
  const list = filterService ? reviews.filter((r) => r.service === filterService || r.service === 'general') : reviews;

  if (list.length === 0) return null;

  const showSummary = list.length >= 2;
  const avg = showSummary ? average(list) : null;

  return (
    <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: '#F8F5F1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="section-label reveal" style={{ color: 'rgba(201,169,110,0.9)' }}>
            What Clients Say
          </p>
          <h2
            className="font-display reveal"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.05,
              color: '#2D2926', marginTop: '0.75rem', marginBottom: '1rem', transitionDelay: '0.1s',
            }}
          >
            Results Our Clients
            <br />
            <em style={{ fontStyle: 'italic' }}>Trust</em>
          </h2>

          {showSummary && avg !== null && (
            <p className="reveal" style={{ fontSize: '1rem', color: '#6B6460', transitionDelay: '0.2s' }}>
              <Stars rating={Math.round(avg)} /> {avg.toFixed(1)} average from {list.length} reviews
            </p>
          )}

          {GOOGLE_REVIEWS_URL && (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal"
              style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.8125rem', color: '#A8844A', textDecoration: 'underline', transitionDelay: '0.25s' }}
            >
              Read more on Google
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {list.map((review, i) => (
            <div
              key={review.id}
              className="reveal"
              style={{
                background: '#FFFFFF', border: '1px solid rgba(74,69,64,0.08)', borderRadius: '4px',
                padding: '2rem', transitionDelay: `${0.1 + i * 0.08}s`,
              }}
            >
              <Stars rating={review.rating} />
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: '#4A4540', margin: '1rem 0' }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem', color: '#6B6460' }}>
                <span style={{ fontWeight: 600 }}>{review.author}</span>
                <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {review.source && (
                    <span
                      style={{
                        fontSize: '0.6875rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#A8844A',
                        border: '1px solid rgba(168,132,74,0.3)', borderRadius: '2px', padding: '0.15rem 0.5rem',
                      }}
                    >
                      {review.source}
                    </span>
                  )}
                  {review.date && <span>{review.date}</span>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
