import { useState } from 'react';
import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ReviewStars } from '../components/sections/ReviewStars';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { SectionHeader } from '../components/ui/SectionHeader';
import { reviewFilters, reviews, type ReviewCategory } from '../data/reviews';

const pillars: { icon: IconName; title: string; body: string }[] = [
  { icon: 'clock', title: 'Punctuality', body: 'Clear appointment windows and communication if anything changes.' },
  { icon: 'banknote', title: 'Transparent Pricing', body: 'Upfront pricing and options explained before work begins.' },
  { icon: 'home', title: 'Care for Your Home', body: 'Clean, respectful work and a tidy site when we leave.' },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState<'all' | ReviewCategory>('all');
  const visible = filter === 'all' ? reviews : reviews.filter((r) => r.category === filter);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Reviews' }]} rule />

      <section className="hero hero--simple" aria-labelledby="rv-h1">
        <div className="wrap">
          <div className="hero__copy hero__copy--wide">
            <span className="eyebrow eyebrow--navy">Homeowner feedback</span>
            <h1 className="h1" id="rv-h1">
              What Local Homeowners Say About Our Work
            </h1>
            <p className="lead">
              Straightforward feedback from the homeowners we serve, organized by the type of service they received.
            </p>
            <p className="note-strip" role="note">
              <span className="note-strip__main">
                <Icon name="info" size={18} />
                <span>
                  Template content: the entries below are placeholders from the design and must be replaced with real, verified customer reviews
                  before launch.
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="rv-list">
        <div className="wrap">
          <h2 className="sr-only" id="rv-list">
            Customer reviews
          </h2>
          <div className="filter-tabs" role="group" aria-label="Filter reviews by service">
            {reviewFilters.map((f) => (
              <button
                key={f.key}
                type="button"
                className="filter-tab"
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="small" role="status" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'review' : 'reviews'}
          </p>
          <ul className="review-grid">
            {visible.map((r) => (
              <li key={r.id}>
                <article className="card stack review-card">
                  <div className="review-card__top">
                    <ReviewStars />
                    <time dateTime={r.isoDate}>{r.dateLabel}</time>
                  </div>
                  <h3 className="card__title">{r.jobTitle}</h3>
                  <blockquote className="card__body">{r.quote}</blockquote>
                  <footer>
                    <strong>{r.names}</strong>
                    <span className="small">
                      {r.location} · {r.source}
                    </span>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="rv-expect">
        <div className="wrap">
          <SectionHeader
            eyebrow="What to expect"
            title="The Standards Behind Every Visit"
            id="rv-expect"
          />
          <div className="grid grid--3">
            {pillars.map((p) => (
              <article className="card stack" key={p.title} data-reveal>
                <span className="icon-box icon-box--sm">
                  <Icon name={p.icon} size={18} />
                </span>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="rv-leave">
        <div className="wrap wrap--narrow">
          <div className="note-strip" data-reveal>
            <div>
              <h2 className="h3" id="rv-leave">
                Worked with us? Share your experience.
              </h2>
              <p className="small">Your feedback helps neighbors choose a contractor they can trust and helps us improve.</p>
            </div>
            <ButtonLink to="/contact" variant="secondary" size="sm">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner title="Experience the Difference for Yourself" lead="Request service and see how we work." />
    </>
  );
}
