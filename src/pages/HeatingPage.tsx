import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';

const offerings: { icon: IconName; tag: string; title: string; body: string; cta: string; to: string }[] = [
  {
    icon: 'wrench',
    tag: 'Repair',
    title: 'Heating & Furnace Repair',
    body: 'Troubleshooting for gas furnaces, electric air handlers, and heat pumps. We pinpoint ignition failures, blower motor issues, and heat exchanger concerns with transparent, upfront pricing before work begins.',
    cta: 'Request Heating Repair',
    to: '/contact',
  },
  {
    icon: 'flame',
    tag: 'Efficiency upgrades',
    title: 'Heating System Installation',
    body: "Properly sized replacement furnaces and modern dual-fuel heat pump systems engineered to match your home's thermal load, with code-compliant duct transitions.",
    cta: 'Request a Replacement Estimate',
    to: '/contact',
  },
  {
    icon: 'calendar',
    tag: 'Longevity & care',
    title: 'Preventive Heating Maintenance',
    body: 'Pre-season tune-ups including combustion analysis, safety limit testing, blower assembly cleaning, and carbon monoxide safety checks to help prevent winter breakdowns.',
    cta: 'Explore Maintenance',
    to: '/services/maintenance',
  },
];

const symptoms: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'thermometer',
    title: 'Inadequate Heat Output',
    body: 'Home is not reaching the desired temperature: inadequate heat delivery often points to thermostat calibration variances, restricted airflow, dirty flame sensors, or failing heating elements.',
  },
  {
    icon: 'wind',
    title: 'Uneven Room Temperatures',
    body: 'Noticeable temperature gaps between upstairs and downstairs or perimeter rooms typically indicate ductwork static pressure imbalances or zoning damper issues.',
  },
  {
    icon: 'volume',
    title: 'Unusual Operating Noises',
    body: 'Mechanical grinding, rattling sheet metal, squealing bearings, or delayed ignition bangs suggest worn blower assemblies, loose inducer fans, or delayed combustion.',
  },
  {
    icon: 'activity',
    title: 'Short-Cycling Behavior',
    body: 'Repeated turning on and off before satisfying the thermostat often indicates restricted airflow, overheating high-limit switches, or an oversized heating unit.',
  },
  {
    icon: 'flame',
    title: 'Odors or Spike in Fuel Bills',
    body: 'Unusual burning odors after initial autumn startup, sudden utility bill spikes, or yellow burner flames can indicate poor combustion and should be evaluated promptly.',
  },
];

const evaluates = [
  { t: 'Heat Exchanger Integrity', d: 'Visual inspection for cracks or corrosion that could allow combustion gases into living areas.' },
  { t: 'Burner Assembly & Ignition', d: 'Cleaning and testing hot-surface ignitors, pilot assemblies, and flame rectification sensors for dependable cold-start reliability.' },
  { t: 'Airflow & Static Pressure', d: 'Measuring blower motor amperage, inspecting return air filtration, and verifying airflow across the heating elements.' },
  { t: 'Flue Drafting & Exhaust Ventilation', d: 'Checking inducer fan draft pressure and vent pipe clearances to ensure safe venting of combustion byproducts.' },
  { t: 'Thermostat & Electrical Safety Limits', d: 'Verifying low-voltage communication, high-limit safety cutoffs, roll-out switches, and all primary terminal connections.' },
];

const repairWhen = [
  'System is under 12 years old with a structurally sound heat exchanger.',
  'Repair costs represent a modest portion of total system value.',
  'Consistent history of dependable performance with routine annual maintenance.',
  'Issue is isolated to standard electrical or minor mechanical component replacement.',
];
const replaceWhen = [
  'System is 15+ years old and operating at outdated, low AFUE efficiency ratings.',
  'Major component failure (e.g., cracked heat exchanger or obsolete blower assembly).',
  'Frequent winter service calls and continuously rising seasonal heating consumption.',
  'Homeowner interest in high-efficiency variable-speed heat pumps, with any available incentives confirmed for your situation.',
];

const steps = [
  {
    n: '01',
    title: 'Describe Your Heating Concern',
    body: 'Call or submit your symptoms online. We schedule a fully equipped service vehicle with transparent scheduling windows.',
  },
  {
    n: '02',
    title: 'Arrange an Assessment',
    body: 'A licensed technician arrives on time, tests electrical and mechanical safety components, and explains diagnostic findings in clear, plain language.',
  },
  {
    n: '03',
    title: 'Review Recommended Next Steps',
    body: 'You receive straightforward upfront pricing with repair or replacement options before any work begins. Work starts only upon your explicit approval.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What should I do if my heating stops working?',
    a: "Check that your thermostat is set to 'Heat' with the target temperature set at least 3 degrees above room temperature, verify your furnace power switch is turned on, and ensure the furnace filter is not severely clogged. If the breaker hasn't tripped and the unit won't ignite, turn the system off and contact us for prompt diagnostic service.",
  },
  {
    q: 'How often should a furnace be inspected?',
    a: 'Most manufacturers recommend an annual inspection before the heating season. A pre-winter tune-up lets a technician check combustion, venting and safety controls while there is still time to schedule repairs.',
  },
  {
    q: 'Should I be concerned about carbon monoxide?',
    a: 'Fuel-burning heating equipment should always be paired with working carbon monoxide alarms. If an alarm sounds or you suspect a gas leak, leave the home immediately and call your utility’s emergency line from outside — do not wait for a service appointment.',
  },
  {
    q: 'How do I request heating service?',
    a: `Use the form on our Contact page or call ${business.phone}. Describe the symptoms and choose a preferred appointment window, and our team will follow up to confirm.`,
  },
];

export default function HeatingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'Heating & Furnace Services' }]} note="Licensed gas mechanical contractor" rule />

      <section className="hero" aria-labelledby="ht-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--navy">Residential heating solutions</span>
            <h1 className="h1" id="ht-h1">
              Reliable Heating for the Colder Months
            </h1>
            <p className="lead">
              Whether your system needs furnace diagnosis, a pre-winter safety tune-up, or a high-efficiency heat pump replacement, our licensed
              craftsmen deliver honest assessments and dependable, code-compliant workmanship.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request Heating Service</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <div className="hero__badges badge-bar">
              <span className="eyebrow eyebrow--muted">Our workmanship commitment</span>
              <ul className="inline-points">
                <li>
                  <Icon name="badge" size={15} /> Certified gas &amp; electric
                </li>
                <li>
                  <Icon name="banknote" size={15} /> Upfront flat-rate pricing
                </li>
                <li>
                  <Icon name="shield" size={15} /> Rigorous safety testing
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="heating-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="flame" size={18} />
                  <div>
                    <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--rust-600)' }}>
                      Diagnostic safety inspection
                    </strong>
                    <span className="sub">Heat exchanger, hot-surface ignition, and electrical limit safety testing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ht-services">
        <div className="wrap">
          <SectionHeader
            eyebrow="Solutions overview"
            title="Heating Services for Your Home"
            id="ht-services"
            lead="Tailored residential heating solutions engineered for cold weather reliability, safety, and energy efficiency."
          />
          <div className="grid grid--3">
            {offerings.map((o) => (
              <article className="card card--hover stack service-offer" key={o.title} data-reveal>
                <span className="icon-box">
                  <Icon name={o.icon} size={22} />
                </span>
                <p className="eyebrow eyebrow--muted">{o.tag}</p>
                <h3 className="card__title">{o.title}</h3>
                <p className="card__body">{o.body}</p>
                <TextLink to={o.to}>{o.cta}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="ht-signs">
        <div className="wrap">
          <SectionHeader
            eyebrow="Early warning signs"
            title="When Your Heating System Needs Attention"
            id="ht-signs"
            lead="Recognizing early mechanical and airflow indicators helps avoid sudden loss of heat during freezing temperatures."
          />
          <div className="grid grid--3">
            {symptoms.map((s) => (
              <article className="card stack" key={s.title} data-reveal>
                <span className="icon-box icon-box--sm">
                  <Icon name={s.icon} size={18} />
                </span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </article>
            ))}
            <aside className="callout-dark" data-reveal>
              <span className="eyebrow eyebrow--blush">Direct heating dispatch</span>
              <h3>Need an immediate evaluation?</h3>
              <p>Call our dispatch line and we’ll tell you what availability we can offer for your address.</p>
              <a className="callout-dark__link" href={business.phoneHref}>
                Call {business.phone} <Icon name="arrowRight" size={14} />
              </a>
            </aside>
          </div>
          <div className="safety-notice" style={{ marginTop: 24 }} role="note">
            <Icon name="alert" size={22} />
            <div>
              <strong>Important safety notice</strong>
              <p>
                If you suspect a gas leak, smell persistent sulfur/rotten eggs, or your carbon monoxide alarm sounds, evacuate immediately and call your
                utility emergency line from outside your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ht-eval">
        <div className="wrap split">
          <div className="split__media" data-reveal>
            <div className="photo-frame">
              <ImageSlot imageKey="heating-inspection" sizes="(min-width: 960px) 480px, 100vw" />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="gauge" size={18} />
                  <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Precision system diagnostics</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="split__copy">
            <SectionHeader
              eyebrow="System integrity & safety"
              title="What Our Technicians Evaluate"
              id="ht-eval"
              lead="Every furnace inspection follows a multi-point procedure to confirm baseline safety, correct flame geometry, and efficient operation."
            />
            <ul className="check-detail">
              {evaluates.map((c) => (
                <li key={c.t} data-reveal>
                  <Icon name="checkCircle" size={18} />
                  <div>
                    <strong>{c.t}</strong>
                    <p className="small">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="ht-vs">
        <div className="wrap">
          <SectionHeader
            eyebrow="Clear comparisons"
            title="Repair or Replace Your Heating System?"
            id="ht-vs"
            lead="The right decision depends on equipment age, overall condition, recurring repair frequency, and efficiency goals. Our craftsmen provide clear side-by-side cost options without high-pressure sales."
          />
          <div className="grid grid--2">
            <article className="card compare" data-reveal>
              <span className="icon-box icon-box--sm">
                <Icon name="wrench" size={18} />
              </span>
              <p className="eyebrow eyebrow--muted">Target: keep operating</p>
              <h3 className="h2 h2--md">When Repair Is Recommended</h3>
              <ul className="check-list">
                {repairWhen.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card compare" data-reveal>
              <span className="icon-box icon-box--sm">
                <Icon name="zap" size={18} />
              </span>
              <p className="eyebrow">Target: energy upgrade</p>
              <h3 className="h2 h2--md">When Replacement Is Worth Considering</h3>
              <ul className="check-list">
                {replaceWhen.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="note-strip" style={{ marginTop: 24, padding: 24 }}>
            <div>
              <h3 className="card__title">Unsure which option makes financial sense?</h3>
              <p className="small">Request an honest, no-obligation evaluation with transparent system comparisons.</p>
            </div>
            <ButtonLink to="/contact" size="sm">
              Discuss Your Options
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ht-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="Straightforward workflow"
            title="How Heating Service Visits Work"
            id="ht-process"
            lead="Clear communication from first call to completed checkout, with no unexpected charges."
          />
          <div className="grid grid--3">
            {steps.map((s) => (
              <article className="step-card" key={s.n} data-reveal>
                <div>
                  <div className="step-card__top">
                    <span className="step-card__num step-card__num--outline">{s.n}</span>
                  </div>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="ht-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader
            eyebrow="Homeowner inquiries"
            title="Frequently Asked Questions About Heating Services"
            id="ht-faq"
            align="center"
            lead="Practical answers to common heating diagnostics, seasonal tune-ups, and equipment life cycles."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Keep Your Home Warm and Safe This Winter"
        lead="Schedule a heating diagnostic or pre-winter safety inspection with licensed craftsmen."
        primaryLabel="Request Heating Service"
      />
    </>
  );
}
