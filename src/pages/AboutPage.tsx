import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ReviewStars } from '../components/sections/ReviewStars';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';
import { neighborhoods } from '../data/serviceAreas';
import { featuredQuotes } from '../data/reviews';
import type { ImageKey } from '../lib/images';

const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'handshake',
    title: 'Honest Communication',
    body: 'We explain what we find in plain language, show you the evidence, and present options before any work begins.',
  },
  {
    icon: 'ruler',
    title: 'Careful Workmanship',
    body: 'Clean, code-compliant work done the right way the first time, with attention to the details you may never see.',
  },
  {
    icon: 'home',
    title: 'Respect for Your Home',
    body: 'Shoe covers, drop cloths, and a tidy workspace. We treat your home the way we would want ours treated.',
  },
];

const field: { image: ImageKey; icon: IconName; title: string; body: string }[] = [
  {
    image: 'about-field-install',
    icon: 'wrench',
    title: 'Installation Standards',
    body: 'Load-based sizing, clean line sets, sealed ductwork transitions and a documented startup on every system.',
  },
  {
    image: 'about-field-diagnostic',
    icon: 'gauge',
    title: 'Diagnostic Discipline',
    body: 'We measure before we recommend: electrical readings, pressures and airflow guide every repair decision.',
  },
  {
    image: 'about-field-heating',
    icon: 'flame',
    title: 'Heating Safety',
    body: 'Combustion, venting and safety-limit checks are never skipped on fuel-burning equipment.',
  },
];

const credentials: { icon: IconName; label: string; value: string }[] = [
  { icon: 'badge', label: 'State contractor license', value: business.license },
  { icon: 'calendar', label: 'Serving homeowners since', value: String(business.foundedYear) },
  { icon: 'shield', label: 'Insurance', value: 'Available on request' },
];

export default function AboutPage() {
  const q = featuredQuotes.about;
  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} rule />

      <section className="hero" aria-labelledby="ab-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--navy">About {business.name}</span>
            <h1 className="h1" id="ab-h1">
              Local HVAC Service Built on Professionalism and Care
            </h1>
            <p className="lead">
              {business.legalName} is a residential heating and cooling contractor. We believe a comfortable home starts with careful diagnosis,
              honest pricing, and workmanship you can trust.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request Service</ButtonLink>
              <ButtonLink to="/services" variant="secondary">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="about-hero" priority sizes="(min-width: 960px) 520px, 100vw" reveal />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ab-philosophy">
        <div className="wrap wrap--narrow">
          <SectionHeader
            eyebrow="Our philosophy"
            title="Craftsmanship You Can See, Honesty You Can Count On"
            id="ab-philosophy"
            lead="Heating and cooling are systems of many small parts working together. Doing the job well means respecting every one of them, and every homeowner we work with."
          />
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <div className="grid grid--3">
            {values.map((v) => (
              <article className="card stack" key={v.title} data-reveal>
                <span className="icon-box">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="card__title">{v.title}</h3>
                <p className="card__body">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="ab-field">
        <div className="wrap">
          <SectionHeader
            eyebrow="In the field"
            title="How We Work on Your System"
            id="ab-field"
            lead="The standards our technicians bring to every visit."
          />
          <div className="grid grid--3">
            {field.map((f) => (
              <article className="card stack" key={f.title} data-reveal>
                <ImageSlot imageKey={f.image} sizes="(min-width: 960px) 380px, 100vw" />
                <span className="icon-box icon-box--sm">
                  <Icon name={f.icon} size={18} />
                </span>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ab-cred">
        <div className="wrap">
          <SectionHeader
            eyebrow="Credentials"
            title="Licensed and Accountable"
            id="ab-cred"
            lead="Ask us for proof of licensing and insurance at any time. We are happy to share it."
          />
          <ul className="grid grid--3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {credentials.map((c) => (
              <li className="card stack" key={c.label} data-reveal>
                <span className="icon-box icon-box--sm">
                  <Icon name={c.icon} size={18} />
                </span>
                <p className="eyebrow eyebrow--muted">{c.label}</p>
                <p className="h3">{c.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="ab-feedback">
        <div className="wrap wrap--narrow">
          <h2 className="sr-only" id="ab-feedback">
            Homeowner feedback
          </h2>
          <figure className="quote-block" data-reveal>
            <ReviewStars />
            <blockquote>{q.quote}</blockquote>
            <figcaption>
              <cite>
                {q.name} <span>{q.meta}</span>
              </cite>
            </figcaption>
          </figure>
          <p className="small" style={{ textAlign: 'center', marginTop: 16 }}>
            <TextLink to="/reviews">Read more homeowner feedback</TextLink>
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ab-area">
        <div className="wrap">
          <SectionHeader
            eyebrow="Where we work"
            title="Proudly Serving Local Neighborhoods"
            id="ab-area"
            action={<TextLink to="/service-areas">View service areas</TextLink>}
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
        </div>
      </section>

      <CtaBanner
        title="Work With a Team That Takes Pride in the Details"
        lead="Tell us what is going on with your system and we will help you plan the next step."
        primaryLabel="Request Service"
      />
    </>
  );
}
