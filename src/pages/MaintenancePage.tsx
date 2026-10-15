import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';

const matters: { icon: IconName; title: string; body: string }[] = [
  { icon: 'activity', title: 'Reviewing System Operation', body: 'Verifying heating and cooling cycles start cleanly and run smoothly through normal household temperature demands.' },
  { icon: 'wind', title: 'Checking Filters & Airflow', body: 'Assessing return air restriction, blower motor resistance, and static duct pressure that strain internal motors.' },
  { icon: 'eye', title: 'Identifying Visible Wear', body: 'Catching micro-frayed belts, weak dual-run capacitors, and pitted contactors before sudden electrical shutoffs.' },
  { icon: 'gauge', title: 'Reviewing Equipment Condition', body: 'Checking coil cleanliness, clearing condensate drainage lines, and confirming balanced mechanical mountings.' },
  { icon: 'message', title: 'Discussing Recommended Service', body: 'Plain-language summaries with honest craftsman advice on what needs immediate care versus routine monitoring.' },
];

const homeowner = [
  { t: 'Replace or clean air filters', d: 'Check the filter on a regular schedule and replace it when it looks dirty, following your equipment manufacturer’s guidance.' },
  { t: 'Keep outdoor units clear', d: 'Trim vegetation and remove leaves or debris around the outdoor unit so air can move freely.' },
  { t: 'Keep vents and returns unblocked', d: 'Make sure furniture, rugs and curtains are not covering supply registers or return grilles.' },
  { t: 'Notice changes and write them down', d: 'New noises, odors, or longer run times are worth noting so a technician can look at them during a visit.' },
];
const professional = [
  { t: 'Electrical testing', d: 'Measuring voltage and amperage and testing capacitors, contactors and safety controls.' },
  { t: 'Refrigerant-side checks', d: 'Evaluating system readings with calibrated gauges. Refrigerant handling requires certified technicians.' },
  { t: 'Combustion & venting checks', d: 'Inspecting burners, ignition, heat exchanger condition and venting on gas-fired equipment.' },
  { t: 'Coil, drain & airflow service', d: 'Cleaning accessible components, clearing condensate lines and verifying airflow.' },
];

const cooling = [
  'Condenser coil and cabinet inspection',
  'Capacitor and contactor testing',
  'Condensate drain line clearing',
  'Refrigerant-side readings and line checks',
  'Thermostat and airflow verification',
];
const heating = [
  'Burner and ignition inspection',
  'Heat exchanger visual inspection',
  'Flue and venting check',
  'Blower assembly and filter review',
  'Safety limit and carbon monoxide checks',
];

const steps = [
  { n: '01', label: 'Step 1', title: 'Request an Appointment', body: 'Choose a convenient arrival window online or call our direct dispatch desk. We confirm your date and arrive on time with fully stocked diagnostic gear and shoe covers.', foot: 'Confirmation of your visit', icon: 'calendar' as IconName },
  { n: '02', label: 'Step 2', title: 'Have the System Inspected', body: 'A licensed technician performs an exhaustive 21-point mechanical and safety inspection adhering to manufacturer protocols, cleaning critical parts and taking live electrical readings.', foot: 'Multi-point inspection', icon: 'clipboard' as IconName },
  { n: '03', label: 'Step 3', title: 'Review Findings & Recommendations', body: 'Receive a comprehensive written status report. If minor adjustments or part replacements are suggested, get clear upfront quotes with zero high-pressure sales tactics.', foot: 'Written condition report', icon: 'file' as IconName },
];

const faqs: FaqItem[] = [
  {
    q: 'How often should HVAC equipment be serviced?',
    a: 'Many manufacturers recommend servicing heating equipment before the heating season and cooling equipment before the cooling season. We can recommend a schedule based on your equipment and how your home is used.',
  },
  {
    q: 'What is included in a maintenance visit?',
    a: 'A technician performs a multi-point mechanical and safety inspection, cleans accessible critical parts, takes electrical readings and then walks you through a written condition report. Specific tasks vary by equipment type.',
  },
  {
    q: 'Will maintenance prevent every breakdown?',
    a: 'No. Preventive service does not guarantee equipment will run forever without repairs. What it does is help catch small electrical and mechanical problems early, so they are less likely to become emergency failures.',
  },
  {
    q: 'Do you offer maintenance agreements?',
    a: `Our team can discuss recurring service options for single or multi-system homes. Call ${business.phone} or send a request through our Contact page and we will explain what is available and the current pricing.`,
  },
];

export default function MaintenancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'HVAC Maintenance' }]} rule />

      <section className="hero" aria-labelledby="mt-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="chip">
              <span className="chip__dot" aria-hidden="true" />
              Preventive HVAC maintenance
            </span>
            <h1 className="h1" id="mt-h1">
              Help Your Heating and Cooling System Stay Ready
            </h1>
            <p className="lead">
              Seasonal maintenance gives a licensed technician the chance to inspect, clean and test your equipment before the weather puts it under
              load — and to tell you plainly what, if anything, needs attention.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Schedule a Tune-Up</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <ul className="inline-points hero__badges">
              <li>
                <Icon name="clipboard" size={15} /> 21-point inspection
              </li>
              <li>
                <Icon name="file" size={15} /> Written condition report
              </li>
              <li>
                <Icon name="handshake" size={15} /> No high-pressure sales
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="maintenance-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="shield" size={18} />
                  <div>
                    <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Clean, careful service</strong>
                    <span className="sub">Shoe covers, drop cloths and clear explanations on every visit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="mt-matters">
        <div className="wrap">
          <SectionHeader
            eyebrow="Why maintenance matters"
            title="A Little Attention Goes a Long Way"
            id="mt-matters"
            lead="Mechanical heating and cooling equipment endures thousands of hours of vibration, seasonal temperature swings, and heavy dust accumulation each year. Regular preventive service does not guarantee equipment will run forever without repairs, but systematic attention keeps small electrical and mechanical issues from turning into emergency failures on peak weather days."
          />
          <div className="grid grid--5">
            {matters.map((m, i) => (
              <article className="card stack" key={m.title} data-reveal>
                <span className="icon-box icon-box--sm" aria-hidden="true">
                  <Icon name={m.icon} size={18} />
                </span>
                <span className="sr-only">Item {i + 1}</span>
                <h3 className="card__title" style={{ fontSize: 18 }}>
                  {m.title}
                </h3>
                <p className="card__body">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="mt-who">
        <div className="wrap">
          <SectionHeader
            eyebrow="Division of care"
            title="Who Does What: Homeowner Care vs. Professional Service"
            id="mt-who"
            lead="Safe household habits preserve air quality and protect exterior components. High-voltage wiring, pressurized refrigerants, and combustible gas systems require licensed technician credentials and diagnostic instrumentation."
          />
          <div className="grid grid--2">
            <article className="card care-col" data-reveal>
              <header className="care-col__head">
                <div>
                  <p className="eyebrow eyebrow--muted">Safe to do yourself</p>
                  <h3 className="h2 h2--md">Homeowner Routine Care</h3>
                </div>
                <Icon name="home" size={22} />
              </header>
              <ul className="check-detail">
                {homeowner.map((c) => (
                  <li key={c.t}>
                    <Icon name="checkCircle" size={18} />
                    <div>
                      <strong>{c.t}</strong>
                      <p className="small">{c.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card care-col" data-reveal>
              <header className="care-col__head">
                <div>
                  <p className="eyebrow eyebrow--muted">Leave to licensed technicians</p>
                  <h3 className="h2 h2--md">Professional Multi-Point Service</h3>
                </div>
                <Icon name="hardHat" size={22} />
              </header>
              <ul className="check-detail">
                {professional.map((c) => (
                  <li key={c.t}>
                    <Icon name="checkCircle" size={18} />
                    <div>
                      <strong>{c.t}</strong>
                      <p className="small">{c.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="mt-seasons">
        <div className="wrap">
          <SectionHeader
            eyebrow="Seasonal maintenance"
            title="Tailored Inspections for Every Season"
            id="mt-seasons"
            lead="Air conditioners and heating furnaces face drastically different stresses. We divide our maintenance scope into dedicated pre-cooling and pre-heating protocols."
          />
          <div className="grid grid--2">
            <article className="panel" data-reveal>
              <div className="panel__media">
                <ImageSlot imageKey="maintenance-cooling" fill />
                <span className="tag panel__tag">Spring / early summer</span>
              </div>
              <div className="panel__body">
                <h3 className="h2 h2--md">Cooling-System Preparation</h3>
                <p className="body">
                  Before 90-degree summer heat sets in, condensers require comprehensive thermal and electrical inspections to prevent sudden shutdown
                  during high-demand afternoon hours.
                </p>
                <div className="protocols">
                  <p className="eyebrow eyebrow--muted">Key diagnostic protocols</p>
                  <ul className="dot-list">
                    {cooling.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            <article className="panel" data-reveal>
              <div className="panel__media">
                <ImageSlot imageKey="maintenance-heating" fill />
                <span className="tag panel__tag">Autumn / pre-winter</span>
              </div>
              <div className="panel__body">
                <h3 className="h2 h2--md">Heating-System Preparation</h3>
                <p className="body">
                  Combustion safety, venting integrity, and heating ignition are non-negotiable for family safety as sub-freezing temperatures arrive
                  across our service territories.
                </p>
                <div className="protocols">
                  <p className="eyebrow eyebrow--muted">Key diagnostic protocols</p>
                  <ul className="dot-list">
                    {heating.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="mt-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="How appointments work"
            title="How Routine Service Visits Work"
            id="mt-process"
            lead="From first dispatch notice to your written post-service condition report, our field appointments follow a transparent, disciplined sequence."
          />
          <div className="grid grid--3">
            {steps.map((s) => (
              <article className="step-card" key={s.n} data-reveal>
                <div>
                  <div className="step-card__top">
                    <span className="step-card__num">{s.n}</span>
                    <span className="step-card__label">{s.label}</span>
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

      <section className="section section--white" aria-labelledby="mt-plans">
        <div className="wrap">
          <SectionHeader
            eyebrow="Maintenance plans"
            title="Recurring Service Overview"
            id="mt-plans"
            lead="Seasonal visits can be booked individually. Recurring service agreements are available for homeowners who prefer to schedule once — ask our team what is currently offered."
            action={
              <ButtonLink to="/contact" variant="secondary" iconAfter="arrowRight">
                Ask About Maintenance Plans
              </ButtonLink>
            }
          />
          <div className="grid grid--3">
            <article className="card stack" data-reveal>
              <p className="eyebrow eyebrow--muted">Seasonal visit</p>
              <h3 className="card__title">Spring Cooling Visit</h3>
              <p className="card__body">Full diagnostic tune-up performed before summer heat begins to peak across the region.</p>
              <ul className="check-list">
                {cooling.slice(0, 4).map((c) => (
                  <li key={c}>
                    <Icon name="check" size={15} />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card stack" data-reveal>
              <p className="eyebrow eyebrow--muted">Seasonal visit</p>
              <h3 className="card__title">Autumn Heating Visit</h3>
              <p className="card__body">Thorough furnace or heat pump safety and burner performance verification before freeze warnings arrive.</p>
              <ul className="check-list">
                {heating.slice(0, 4).map((c) => (
                  <li key={c}>
                    <Icon name="check" size={15} />
                    {c}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card stack" data-reveal>
              <p className="eyebrow eyebrow--muted">Recurring agreement</p>
              <h3 className="card__title">Year-Round Agreement Benefits</h3>
              <div className="card card--soft" style={{ padding: 14 }}>
                <p className="eyebrow eyebrow--muted">Pricing options</p>
                <p className="small" style={{ color: 'var(--ink)' }}>
                  Customizable rates for single or multi-system homes
                </p>
              </div>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={15} /> Both seasonal visits on one agreement
                </li>
                <li>
                  <Icon name="check" size={15} /> Priority scheduling for plan members
                </li>
              </ul>
            </article>
          </div>
          <div className="note-strip" style={{ marginTop: 24, padding: 20 }}>
            <span className="note-strip__main">
              <Icon name="info" size={18} />
              <span>
                <strong>Honest Craftsman Commitment:</strong> Preventive maintenance reduces the chance of avoidable problems but cannot guarantee that
                equipment will never need repair. Plan details and pricing are confirmed with you before you agree to anything.
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="mt-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Common questions" title="Frequently Asked Questions About HVAC Maintenance" id="mt-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Make HVAC Maintenance Part of Your Home Care"
        lead="Protect your equipment investment and keep your home comfortable through every season. Schedule a convenient pre-season tune-up with our licensed craftsmen today."
        primaryLabel="Schedule a Tune-Up"
        meta={[
          { icon: 'shield', label: `License ${business.license}` },
          { icon: 'file', label: 'Written condition report' },
          { icon: 'clock', label: 'Mon–Sat appointments' },
        ]}
      />
    </>
  );
}
