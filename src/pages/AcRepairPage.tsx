import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ReviewStars } from '../components/sections/ReviewStars';
import { EquipmentViewer } from '../components/three/EquipmentViewer';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';
import { featuredQuotes } from '../data/reviews';

const problems: { icon: IconName; title: string; body: string; root: string }[] = [
  {
    icon: 'thermometer',
    title: 'AC blowing warm air',
    body: 'System runs continuously but registers minimal temperature drop across registers, often pointing to low refrigerant, a failed capacitor, or a dirty condenser coil.',
    root: 'Likely root: refrigerant / capacitor',
  },
  {
    icon: 'wind',
    title: 'Weak airflow',
    body: 'Diminished output through supply vents, frequently caused by clogged filters, blower motor resistance, or duct leakage compromising distribution.',
    root: 'Likely root: blower motor / filtration',
  },
  {
    icon: 'volume',
    title: 'Unusual noises',
    body: 'Grinding, squealing, buzzing, or metallic clicking coming from the outdoor fan assembly or indoor air handler indicating loose parts or worn bearings.',
    root: 'Likely root: fan bearings / contactor',
  },
  {
    icon: 'droplets',
    title: 'Water around indoor unit',
    body: 'Clogged condensate drain lines, damaged drain pans, or frozen evaporator coils melting into the utility closet or attic floor.',
    root: 'Likely root: condensate trap / freezing',
  },
  {
    icon: 'activity',
    title: 'Repeated turning on and off',
    body: 'Frequent short-cycling caused by faulty thermostat calibration, high-pressure limit trips, dirty condenser coils, or oversized equipment.',
    root: 'Likely root: thermostat / pressure switch',
  },
];

const steps = [
  {
    n: '01',
    label: 'Step one',
    title: 'Describe the Problem',
    body: 'Contact our dispatch team online or by phone. Tell us the symptoms your system is showing and choose a convenient service window that works for your schedule.',
  },
  {
    n: '02',
    label: 'Step two',
    title: 'Schedule a Technician Visit',
    body: 'A licensed technician arrives on time in a fully equipped service vehicle stocked with digital diagnostic meters and common replacement components.',
  },
  {
    n: '03',
    label: 'Step three',
    title: 'Review Findings & Options',
    body: 'We inspect the unit, explain the mechanical breakdown in clear language, and give you flat-rate options before touching a tool to begin the work.',
    accent: true,
  },
];

const checks = [
  { t: 'Thermostat settings & calibration', d: 'Confirming proper low-voltage signal communication, temperature variance, and cycle regulation.' },
  { t: 'Airflow & filtration', d: 'Checking return static pressure, filter condition, blower wheel cleanliness, and duct intake integrity.' },
  { t: 'Outdoor condenser & fan assembly', d: 'Testing dual run capacitor microfarads, fan motor bearing play, blade clearance, and coil heat transfer.' },
  { t: 'Refrigerant charge & line temperatures', d: 'Evaluating subcooling and superheat metrics via digital gauges to isolate restriction or micro-leaks.' },
  { t: 'Electrical connections & contactors', d: 'Inspecting contactor point pitting, voltage drop, wire insulation hardening, and high/low safety disconnect switches.' },
];

const repairWhen = [
  'The system is under 10 years old with a mechanically sound compressor.',
  'Repair costs represent a modest percentage of overall replacement value.',
  'The unit has a documented history of reliable seasonal performance and timely maintenance.',
  'R-410A refrigerant system with minor electrical component or sensor failure.',
];
const replaceWhen = [
  'The equipment is 12–15+ years old and relies on phased-out R-22 Freon refrigerant.',
  'Major component failure (e.g. seized hermetic compressor or cracked evaporator coil) with costly parts.',
  'Frequent recurring breakdowns over consecutive cooling seasons causing compounded bills.',
  'Desire for quiet operation, significantly higher SEER2 energy ratings, and 10-year warranty peace of mind.',
];

const faqs: FaqItem[] = [
  {
    q: 'What should I check before requesting service?',
    a: "Ensure your thermostat is set to 'Cool' with the fan on 'Auto', check that the outdoor circuit breaker hasn't tripped in your main electrical panel, and inspect your furnace filter to verify it isn't completely blocked with dust or pet hair.",
  },
  {
    q: 'Can you inspect an AC that is running but not cooling?',
    a: 'Yes. A system that runs without cooling is one of the most common reasons homeowners call. A technician will check airflow, electrical components and refrigerant-side readings to find the cause, then explain the findings and options before any repair begins.',
  },
  {
    q: 'How do I request an appointment?',
    a: `Use the service request form on our Contact page or call ${business.phone}. Describe what the system is doing and choose a preferred appointment window, and our team will follow up to confirm your visit.`,
  },
];

export default function AcRepairPage() {
  const q = featuredQuotes.acRepair;
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'AC Repair' }]} />

      <section className="hero" aria-labelledby="acr-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Air conditioning repair</span>
            <h1 className="h1" id="acr-h1">
              AC Not Cooling Like It Should?
            </h1>
            <p className="lead">
              Prompt, honest diagnostic evaluations for residential cooling systems. Whether your unit is blowing lukewarm air, freezing up, or making
              unusual noises, our certified craftsmen troubleshoot root mechanical causes and provide straightforward upfront options before any work
              begins.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request AC Repair</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <ul className="inline-points inline-points--caps hero__badges">
              <li>
                <Icon name="shield" size={14} /> Licensed &amp; insured {business.license}
              </li>
              <li>
                <Icon name="banknote" size={14} /> Flat-rate quoting
              </li>
              <li>
                <Icon name="badge" size={14} /> NATE-certified technicians
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="ac-repair-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="clipboard" size={18} />
                  <div>
                    <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Diagnostic inspection</strong>
                    <span className="sub">Thorough electrical, refrigerant &amp; airflow checks before quoting repairs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="section section--white" aria-labelledby="acr-problems">
        <div className="wrap">
          <SectionHeader
            eyebrow="Diagnostic indicators"
            title="Signs Your Air Conditioner May Need Service"
            id="acr-problems"
            lead="Recognizing early mechanical warning signs helps prevent sudden compressor failure and costly emergency repairs."
          />
          <div className="grid grid--3">
            {problems.map((p) => (
              <article className="card card--hover stack" key={p.title} data-reveal>
                <span className="icon-box">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
                <p className="eyebrow eyebrow--muted">{p.root}</p>
              </article>
            ))}
            <aside className="callout-dark" data-reveal>
              <span className="eyebrow eyebrow--blush">Immediate assistance</span>
              <h3>Need an Emergency Assessment?</h3>
              <p>Call our dispatch line and we will tell you what availability we can offer for your address.</p>
              <a className="callout-dark__link" href={business.phoneHref}>
                Call Direct Dispatch <Icon name="arrowRight" size={14} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--page" aria-labelledby="acr-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="Transparent workflow"
            title="A Clear Approach to AC Repair"
            id="acr-process"
            lead="Straightforward diagnostics with zero guesswork or high-pressure upselling."
          />
          <div className="grid grid--3">
            {steps.map((s) => (
              <article className="step-card" key={s.n} data-reveal>
                <div>
                  <div className="step-card__top">
                    <span className={`step-card__num step-card__num--outline${s.accent ? ' is-accent' : ''}`}>{s.n}</span>
                    <span className="step-card__label">{s.label}</span>
                  </div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technician checks */}
      <section className="section section--white" aria-labelledby="acr-checks">
        <div className="wrap split">
          <div className="split__media" data-reveal>
            <EquipmentViewer
              fallback={<ImageSlot imageKey="ac-repair-inspection" sizes="(min-width: 960px) 480px, 100vw" />}
              caption="Precision multimeter load analysis of capacitors, safety cut-offs & wiring integrity."
              label="Physical diagnostics"
            />
          </div>
          <div className="split__copy">
            <SectionHeader
              eyebrow="Methodical inspection"
              title="What Our Technicians Check"
              id="acr-checks"
              lead="Every system receives a thorough multi-point physical and electrical inspection based on symptoms rather than arbitrary part swapping:"
            />
            <ul className="check-detail">
              {checks.map((c) => (
                <li key={c.t} data-reveal>
                  <Icon name="checkCircle" size={18} />
                  <div>
                    <strong>{c.t}</strong>
                    <p className="small">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="small" style={{ color: 'var(--muted)', marginTop: 20 }}>
              Inspection areas are tailored to your system’s symptoms and mechanical age to isolate the root problem efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Repair vs replace */}
      <section className="section section--soft" aria-labelledby="acr-vs">
        <div className="wrap">
          <SectionHeader
            eyebrow="Honest advice"
            title="Repair or Replace Your AC?"
            id="acr-vs"
            lead="The right decision depends on equipment condition, system age, repair costs, efficiency goals, and your household budget."
          />
          <div className="grid grid--2">
            <article className="card compare" data-reveal>
              <span className="icon-box icon-box--sm">
                <Icon name="wrench" size={18} />
              </span>
              <p className="eyebrow eyebrow--navy">Target scenario A</p>
              <h3 className="h2 h2--md">When a Repair May Be Appropriate</h3>
              <ul className="check-list">
                {repairWhen.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="compare__rec">
                <span className="eyebrow eyebrow--muted">Our recommendation</span>
                <p>Perform a targeted component repair to restore manufacturer efficiency.</p>
              </div>
            </article>
            <article className="card compare" data-reveal>
              <span className="icon-box icon-box--sm">
                <Icon name="snowflake" size={18} />
              </span>
              <p className="eyebrow" style={{ color: 'var(--rust-900)' }}>
                Target scenario B
              </p>
              <h3 className="h2 h2--md">When It May Be Worth Discussing Replacement</h3>
              <ul className="check-list">
                {replaceWhen.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="compare__rec">
                <span className="eyebrow eyebrow--muted">Our recommendation</span>
                <p>Request a comparison estimate on high-efficiency modern replacement options.</p>
              </div>
            </article>
          </div>
          <div className="note-strip" style={{ marginTop: 24, padding: 24 }}>
            <div>
              <h3 className="card__title">Unsure which route makes practical sense?</h3>
              <p className="small">We provide both repair and replacement numbers side by side so you can compare costs transparently.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <ButtonLink to="/contact" size="sm">
                Request an Estimate
              </ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" size="sm">
                Call {business.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="section section--white" aria-label="Customer review">
        <div className="wrap wrap--narrow">
          <figure className="quote-block" data-reveal>
            <ReviewStars />
            <p className="eyebrow eyebrow--muted">5.0 star verified experience</p>
            <blockquote style={{ marginTop: 16 }}>“{q.quote}”</blockquote>
            <figcaption>
              <cite>
                {q.name}
                <span>{q.meta}</span>
              </cite>
            </figcaption>
            <div className="quote-block__foot">
              <TextLink to="/reviews">Read All Verified Customer Reviews</TextLink>
            </div>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--page" aria-labelledby="acr-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Common questions" title="Frequently Asked Questions About AC Repair" id="acr-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Area links */}
      <section className="section section--white" style={{ paddingBlock: 40 }} aria-label="Related pages">
        <div className="wrap area-links">
          <p className="small">
            Serving homeowners across our{' '}
            <TextLink to="/service-areas" small>
              service areas
            </TextLink>
            . Also see{' '}
            <TextLink to="/services/ac-installation" small>
              AC installation &amp; replacement
            </TextLink>{' '}
            and{' '}
            <TextLink to="/services/maintenance" small>
              seasonal maintenance
            </TextLink>
            .
          </p>
        </div>
      </section>

      <CtaBanner
        title="Get Your Cooling Back on Track"
        lead="Describe what your system is doing and we’ll schedule a diagnostic visit with clear options before any work begins."
        primaryLabel="Request AC Repair"
      />
    </>
  );
}
