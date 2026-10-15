import { useId, useState, type FormEvent } from 'react';
import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';
import { services } from '../data/services';
import { lookupServiceArea, zones, type LookupResult } from '../data/serviceAreas';

const faqs: FaqItem[] = [
  {
    q: 'How do I know if you serve my address?',
    a: `Enter your city or ZIP code above, or call ${business.phone}. If your area is not listed we will tell you honestly whether we can reach you.`,
  },
  {
    q: 'Are arrival times guaranteed?',
    a: 'The arrival ranges shown are typical estimates for each route, not guarantees. Actual timing depends on schedule, weather and call volume, and dispatch will confirm a window when you book.',
  },
  {
    q: 'Do you serve areas outside the listed communities?',
    a: 'We frequently serve adjacent townships. Call us and we will confirm availability for your address.',
  },
];

function LookupMessage({ result }: { result: LookupResult }) {
  if (result.kind === 'match') {
    return (
      <p>
        <strong>{result.town.name}</strong> is on our route list ({result.town.zone}). Typical arrival: {result.town.arrival}. Dispatch confirms the exact
        window when you book.
      </p>
    );
  }
  if (result.kind === 'unknown-zip') {
    return (
      <p>
        We can’t confirm ZIP <strong>{result.zip}</strong> from this list. Call <a href={business.phoneHref}>{business.phone}</a> and we’ll tell you whether
        we can reach you.
      </p>
    );
  }
  return (
    <p>
      We couldn’t find “{result.query}” in our listed communities. We often serve adjacent townships, so please{' '}
      <a href={business.phoneHref}>call {business.phone}</a> to confirm.
    </p>
  );
}

export default function ServiceAreasPage() {
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<LookupResult | null>(null);
  const [empty, setEmpty] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim().length < 3) {
      setResult(null);
      setEmpty(true);
      return;
    }
    setEmpty(false);
    setResult(lookupServiceArea(query));
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Service Areas' }]} rule />

      <section className="hero" aria-labelledby="sa-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--navy">Service coverage</span>
            <h1 className="h1" id="sa-h1">
              Neighborhoods We Proudly Serve
            </h1>
            <p className="lead">
              {business.utilityRegion}. Check your community below to see our typical arrival range for your area.
            </p>

            <form className="lookup" onSubmit={onSubmit} role="search" aria-label="Check service area" noValidate>
              <label className="field__label" htmlFor={inputId}>
                Enter your city or ZIP code
              </label>
              <div className="lookup__row">
                <input
                  id={inputId}
                  className="input"
                  type="text"
                  inputMode="text"
                  autoComplete="postal-code"
                  placeholder="e.g. Oakridge or 75001"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-describedby={`${inputId}-result`}
                />
                <button className="btn btn--primary" type="submit">
                  <Icon name="search" size={15} /> Check Coverage
                </button>
              </div>
              <div id={`${inputId}-result`} className="lookup__result" role="status" aria-live="polite">
                {empty && <p>Please enter at least three characters or a 5-digit ZIP code.</p>}
                {result && <LookupMessage result={result} />}
              </div>
            </form>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="service-areas-hero" priority sizes="(min-width: 960px) 520px, 100vw" reveal />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="sa-zones">
        <div className="wrap">
          <SectionHeader
            eyebrow="Communities we serve"
            title="Service Corridors &amp; Typical Arrival Ranges"
            id="sa-zones"
            lead="Arrival ranges are typical estimates by route and are confirmed by dispatch at booking."
          />
          <div className="grid grid--3">
            {zones.map((z) => (
              <article className="card stack zone" key={z.id} data-reveal>
                <p className="eyebrow">Zone {z.id}</p>
                <h3 className="card__title">{z.title}</h3>
                <p className="card__body">{z.blurb}</p>
                <p className="small">
                  <strong>Common systems:</strong> {z.systems}
                </p>
                <ul className="zone__towns">
                  {z.towns.map((t) => (
                    <li key={t.name}>
                      <span>
                        <strong>{t.name}</strong>
                        <small>{t.status}</small>
                      </span>
                      <span className="tag">{t.arrival}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="sa-services">
        <div className="wrap">
          <SectionHeader
            eyebrow="Available in every zone"
            title="Services Across Our Territory"
            id="sa-services"
          />
          <div className="grid grid--4">
            {services.map((s) => (
              <article className="card card--hover stack" key={s.slug} data-reveal>
                <span className="icon-box icon-box--sm">
                  <Icon name={s.icon} size={18} />
                </span>
                <h3 className="card__title">{s.title}</h3>
                <TextLink to={s.path} small>
                  Learn more
                </TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="sa-hq">
        <div className="wrap grid grid--2">
          <article className="card stack" data-reveal>
            <span className="eyebrow">Headquarters</span>
            <h2 className="h2 h2--md" id="sa-hq">
              {business.legalName}
            </h2>
            <p className="body">
              <Icon name="pin" size={15} /> {business.headquarters.street}
              <br />
              {business.headquarters.district}
            </p>
            <dl className="mini-facts">
              {business.hours.map((h) => (
                <div key={h.label}>
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
              <div>
                <dt>{business.emergencyHours.label}</dt>
                <dd>{business.emergencyHours.value}</dd>
              </div>
            </dl>
            <ButtonLink to={business.phoneHref} icon="phone" variant="secondary">
              Call {business.phone}
            </ButtonLink>
          </article>
          <article className="card stack" data-reveal>
            <span className="eyebrow">Active territories</span>
            <h2 className="h2 h2--md">Where Our Crews Are Working</h2>
            <p className="body">{business.activeTerritories}.</p>
            <p className="small">Don’t see your neighborhood? We frequently serve adjacent townships. Call to confirm availability.</p>
          </article>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="sa-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Coverage questions" title="Service Area FAQ" id="sa-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Ready to Schedule Service in Your Neighborhood?"
        lead="Send us your details and we will confirm availability for your address."
      />
    </>
  );
}
