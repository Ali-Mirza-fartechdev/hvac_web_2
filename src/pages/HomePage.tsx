import { Link } from 'react-router-dom';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ReviewStars } from '../components/sections/ReviewStars';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';
import { featuredQuotes } from '../data/reviews';
import { neighborhoods } from '../data/serviceAreas';
import { services } from '../data/services';

const trust: { icon: IconName; title: string; body: string }[] = [
  { icon: 'shield', title: 'Licensed & Insured', body: `Mechanical Contractor ${business.license}` },
  { icon: 'home', title: 'Locally Owned & Run', body: `Serving county residents since ${business.foundedYear}` },
  { icon: 'badge', title: 'Certified Specialists', body: 'Vetted, background-checked craftsmen' },
  { icon: 'handshake', title: '100% Guarantee', body: 'Direct warranty on all parts & labor' },
];

const commitments: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'message',
    title: 'Clear, Upfront Communication',
    body: 'We explain the exact issue in plain language and provide written estimates before any work begins. Never high-pressure sales.',
  },
  {
    icon: 'wrench',
    title: 'Master Craftsman Workmanship',
    body: 'Every repair, pipe connection, and duct seal is executed with meticulous attention to safety and local building codes.',
  },
  {
    icon: 'gauge',
    title: 'Practical, Long-Term Recommendations',
    body: 'We only recommend equipment replacement when repair is genuinely uneconomical, protecting your home budget.',
  },
];

const steps: { n: string; title: string; body: string; foot: string; icon: IconName }[] = [
  {
    n: '01',
    title: 'Request Service',
    body: `Contact our team online or call ${business.phone} to choose a 2-hour arrival window that fits your schedule.`,
    foot: 'Prompt dispatch confirmation',
    icon: 'calendar',
  },
  {
    n: '02',
    title: 'Diagnostic & Upfront Quote',
    body: 'A certified technician inspects your system, pinpoints the root issue, and presents clear repair options with exact pricing.',
    foot: 'No surprises or hidden fees',
    icon: 'file',
  },
  {
    n: '03',
    title: 'Expert Repair & Verification',
    body: 'Upon your approval, we complete the service with quality parts, test all system operations, and clean our work area completely.',
    foot: 'Tested before departure',
    icon: 'checkCircle',
  },
];

export default function HomePage() {
  const q = featuredQuotes.home;
  return (
    <>
      {/* 1. Hero */}
      <section className="hero hero--home" aria-labelledby="home-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="chip">
              <span className="chip__dot" aria-hidden="true" />
              Residential Heating &amp; Cooling
            </span>
            <h1 className="h1 h1--home" id="home-h1">
              Reliable HVAC Service.
              <br />
              Comfort You Can Count On.
            </h1>
            <p className="lead">
              From emergency air conditioning repairs and seasonal tune-ups to high-efficiency system replacements, our licensed technicians deliver
              honest diagnostic assessments and dependable workmanship for your home.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request Service</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <ul className="inline-points hero__badges">
              <li>
                <Icon name="banknote" size={15} /> Upfront, flat-rate pricing
              </li>
              <li>
                <Icon name="shield" size={15} /> License {business.license}
              </li>
              <li>
                <Icon name="check" size={15} /> No hidden dispatch fees
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="home-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <span className="icon-box icon-box--accent" style={{ width: 40, height: 40 }}>
                    <Icon name="clock" size={18} />
                  </span>
                  <div>
                    <strong>Same-Day Service</strong>
                    <span className="sub">Direct dispatch in 2-hour windows</span>
                  </div>
                </div>
                <Link to="/contact">
                  Dispatch <Icon name="arrowRight" size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust strip */}
      <section className="trust-strip" aria-label="Why homeowners trust Heritage Craft">
        <div className="wrap">
          <ul className="trust-strip__grid">
            {trust.map((t) => (
              <li key={t.title} className="trust-strip__item">
                <span className="icon-box icon-box--sm">
                  <Icon name={t.icon} size={16} />
                </span>
                <div>
                  <h2 className="trust-strip__title">{t.title}</h2>
                  <p className="small">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Services overview */}
      <section className="section section--page" aria-labelledby="home-services">
        <div className="wrap">
          <SectionHeader
            eyebrow="What we do"
            title="Heating & Cooling Services"
            id="home-services"
            lead="Comprehensive residential climate solutions designed for year-round reliability, lower energy bills, and lasting indoor comfort."
          />
          <div className="grid grid--4">
            {services.map((s) => (
              <article className="card card--hover service-card" key={s.slug} data-reveal>
                <div className="stack">
                  <span className="icon-box">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="card__title">{s.homeTitle}</h3>
                  <p className="card__body">{s.homeBody}</p>
                </div>
                <div className="service-card__foot">
                  <TextLink to={s.path}>
                    Explore Service<span className="sr-only">: {s.name}</span>
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why homeowners choose us */}
      <section className="section section--white" aria-labelledby="home-commitment">
        <div className="wrap home-commit">
          <div className="photo-frame home-commit__photo" data-reveal>
            <ImageSlot imageKey="home-commitment" sizes="(min-width: 960px) 455px, 100vw" />
          </div>
          <div className="home-commit__copy">
            <SectionHeader
              eyebrow="Our commitment"
              title="Service Built Around Your Home"
              id="home-commitment"
              lead="We operate on a straightforward premise: treat every heating and cooling system like it belongs in our own home. That means honest advice, clean execution, and no unneeded sales pitches."
            />
            <ul className="commit-list">
              {commitments.map((c) => (
                <li className="commit-list__item" key={c.title} data-reveal>
                  <span className="icon-box icon-box--xs">
                    <Icon name={c.icon} size={16} />
                  </span>
                  <div>
                    <h3 className="commit-list__title">{c.title}</h3>
                    <p className="small">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ButtonLink to="/about" variant="secondary" size="sm">
              Meet Our Team
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 5. How service works */}
      <section className="section section--soft" aria-labelledby="home-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="Simple process"
            title="How Service Works"
            id="home-process"
            align="center"
            lead="Straightforward, stress-free HVAC care from the first call to final testing."
          />
          <div className="grid grid--3">
            {steps.map((s) => (
              <article className="step-card" key={s.n} data-reveal>
                <div>
                  <div className="step-card__top">
                    <span className="step-card__num">{s.n}</span>
                    <span className="step-card__label">Step {Number(s.n)}</span>
                  </div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <p className="step-card__foot">
                  <Icon name={s.icon} size={15} />
                  {s.foot}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured review */}
      <section className="section section--page featured-review" aria-label="Featured customer review">
        <div className="wrap wrap--narrow">
          <figure className="quote-block" data-reveal>
            <ReviewStars />
            <blockquote>“{q.quote}”</blockquote>
            <figcaption>
              <cite>
                {q.name}
                <span>{q.meta}</span>
              </cite>
            </figcaption>
            <div className="quote-block__foot">
              <TextLink to="/reviews" tone="navy">
                Read All Verified Customer Reviews
              </TextLink>
            </div>
          </figure>
        </div>
      </section>

      {/* 7. Service-area preview */}
      <section className="section section--white" aria-labelledby="home-areas">
        <div className="wrap">
          <SectionHeader
            eyebrow="Local coverage"
            title="Proud to Serve Local Homeowners"
            id="home-areas"
            lead="Providing responsive, neighborhood heating and air conditioning services across our primary service communities:"
            action={
              <TextLink to="/service-areas" tone="navy">
                View Full Service Area Map
              </TextLink>
            }
          />
          <ul className="area-tiles">
            {neighborhoods.map((n) => (
              <li className="area-tile" key={n.name} data-reveal>
                <Icon name="pin" size={16} />
                <div>
                  <strong>{n.name}</strong>
                  <span>{n.detail}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="note-strip" style={{ marginTop: 24 }}>
            <span className="note-strip__main">
              <span>
                Don’t see your neighborhood? We frequently serve adjacent townships — call us to confirm immediate dispatch availability.
              </span>
            </span>
            <a className="link-arrow" href={business.phoneHref}>
              <Icon name="phone" size={14} /> {business.phone}
            </a>
          </p>
        </div>
      </section>

      <CtaBanner
        center
        chip="Immediate dispatch available"
        title={
          <>
            Need Help With Your Heating or
            <br />
            Cooling System?
          </>
        }
        lead="Whether you need immediate diagnostics for an emergency breakdown or want to schedule a seasonal tune-up, our team is ready to help."
        primaryLabel="Request Service Online"
        fine="Same-day emergency service available • Straightforward pricing guaranteed"
      />
    </>
  );
}
