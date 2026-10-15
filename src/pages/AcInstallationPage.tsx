import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';

const indicators: { icon: IconName; title: string; body: string; tag: string }[] = [
  {
    icon: 'wrench',
    title: 'Frequent Repair Needs',
    body: "Rising frequency of service visits and component replacements that begin approaching a substantial portion of the system's replacement value.",
    tag: 'Indicator #01 • Wear & tear',
  },
  {
    icon: 'wind',
    title: 'Uneven Comfort Throughout',
    body: 'Stubborn hot spots, excessive summer humidity levels, or persistent temperature variance between rooms, additions, or upstairs levels.',
    tag: 'Indicator #02 • Airflow balance',
  },
  {
    icon: 'home',
    title: 'Changing Household Space',
    body: 'Home additions, attic conversions, changes in home occupancy, or transitioning away from obsolete and phased-out R-22 Freon platforms.',
    tag: 'Indicator #03 • Capacity match',
  },
  {
    icon: 'zap',
    title: 'Interest in Modern Efficiency',
    body: 'Looking to lower peak seasonal electrical demand with quiet multi-stage compressors, higher SEER2 ratings, or cold-climate heat pump options.',
    tag: 'Indicator #04 • SEER2 inverter',
  },
];

const steps = [
  {
    n: '01',
    title: 'Discuss Your Home & Goals',
    body: "We evaluate your home's square footage, room orientation, insulation, and specific cooling concerns during a thorough in-person walk-through.",
    tag: 'Duration: 45–60 mins',
  },
  {
    n: '02',
    title: 'Review Equipment Options',
    body: 'Compare matched systems, SEER2 efficiency tiers, and warranty protections tailored specifically to your home layout and budget parameters.',
    tag: 'Transparent options',
  },
  {
    n: '03',
    title: 'Plan the Installation',
    body: 'Set a confirmed arrival date, prepare protective drop cloths and floor runners, and secure all required municipal permits and equipment in advance.',
    tag: 'Home protection first',
  },
  {
    n: '04',
    title: 'Complete Hand-Off',
    body: 'Our technicians level and seal the unit, test airflow balance, calibrate the thermostat, and walk you through system operation and maintenance tips.',
    tag: 'Guaranteed satisfaction',
    accent: true,
  },
];

const sizing = [
  { t: 'Envelope & Window Exposure', d: 'Square footage, ceiling heights, insulation ratings, and solar orientation of west-facing windows.' },
  { t: 'Ductwork Capacity & Static Pressure', d: 'Air delivery capacity of supply runs and return air grilles to prevent restricting airflow to the new evaporator coil.' },
  { t: 'Occupancy & Multi-Zone Habits', d: 'Home office requirements, sleep temperature targets, and temperature differences between upstairs and basement zones.' },
  { t: 'Efficiency Preferences (SEER2 Tiers)', d: 'Evaluating dependable single-stage systems against modulated two-stage and variable-speed inverter technologies.' },
  { t: 'Utility Rebates & Federal Incentives', d: 'Matching qualifying equipment with applicable federal tax credits and regional power company incentives, where eligible.' },
];

const pillars: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'ruler',
    title: 'Accurate Engineering',
    body: 'Calculating true thermal loads rather than relying on crude guesswork or simply copying whatever tonnage was previously sitting in the yard.',
  },
  {
    icon: 'wind',
    title: 'Airtight Transition Fittings',
    body: 'Custom sheet metal transitions with mastic sealing to stop treated conditioned air loss and preserve optimal static blower pressure.',
  },
  {
    icon: 'shield',
    title: 'Vibration & Safety Prep',
    body: 'Reinforced composite equipment pads, weather-tight electrical disconnects, dedicated surge protection, and vibration isolating hardware.',
  },
  {
    icon: 'gauge',
    title: 'Full Commissioning Run',
    body: 'Verifying refrigerant subcooling and superheat metrics, measuring CFM across the coil, and demonstrating all thermostat functions before departure.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'How do I know whether to repair or replace my air conditioner?',
    a: 'Equipment age, repair history, refrigerant type and repair cost versus replacement value all matter. We provide side-by-side numbers after an in-home assessment so you can decide without pressure.',
  },
  {
    q: 'What happens during the in-home assessment?',
    a: "We walk through your home to evaluate square footage, room orientation, insulation, existing ductwork and your comfort concerns, then explain the equipment options that fit. Allow roughly 45–60 minutes.",
  },
  {
    q: 'Do you offer financing for new systems?',
    a: 'Financing is available through third-party lending partners, subject to credit approval. Terms are disclosed by the lender before you agree to anything — see our Financing page for how the process works.',
  },
  {
    q: 'How do I request an estimate?',
    a: `Use the form on our Contact page or call ${business.phone}. Choose "AC installation or replacement estimate" as the service needed and we will follow up to schedule your assessment.`,
  },
];

export default function AcInstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'AC Installation & Replacement' }]} />

      <section className="hero" aria-labelledby="aci-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--navy">AC installation &amp; replacement</span>
            <h1 className="h1 h1--lg" id="aci-h1">
              A Better-Fitting Cooling System Starts With the Right Plan
            </h1>
            <p className="lead">
              Evaluating your home's layout, existing ductwork, and family comfort requirements ensures your new cooling system delivers quiet, balanced
              performance and lasting efficiency. Our experienced craftsmen guide you through clear options without high-pressure sales.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request an Estimate</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <ul className="inline-points hero__badges">
              <li>
                <Icon name="home" size={15} /> In-home assessment
              </li>
              <li>
                <Icon name="ruler" size={15} /> Manual J load calculation
              </li>
              <li>
                <Icon name="file" size={15} /> Transparent written estimates
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="ac-install-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="wrench" size={18} />
                  <div>
                    <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Precision craftsmanship</strong>
                    <span className="sub">Proper duct connection, vibration dampening pads, and custom mechanical leveling.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="aci-indicators">
        <div className="wrap">
          <SectionHeader
            eyebrow="Diagnostic assessment"
            title="Is It Time to Consider a New System?"
            id="aci-indicators"
            lead="These common indicators are sensible reasons to schedule an honest equipment assessment—not automatic proof that a full replacement is required."
          />
          <div className="grid grid--4">
            {indicators.map((c) => (
              <article className="card card--hover stack" key={c.title} data-reveal>
                <span className="icon-box">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__body">{c.body}</p>
                <p className="eyebrow eyebrow--muted">{c.tag}</p>
              </article>
            ))}
          </div>
          <div className="note-strip" style={{ marginTop: 24 }}>
            <span className="note-strip__main">
              <Icon name="info" size={18} />
              <span>
                We provide clear, side-by-side cost comparisons of targeted component repairs versus replacement so you can make an unpressured
                household decision.
              </span>
            </span>
            <TextLink to="/services/ac-repair" small>
              View Repair vs. Replace Guide
            </TextLink>
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="aci-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="Standard operating procedure"
            eyebrowTone="muted"
            title="From Assessment to Installation"
            id="aci-process"
            lead="A calm, orderly process designed to respect your home, time, and budget every step of the way."
          />
          <ol className="grid grid--4 linear-steps">
            {steps.map((s) => (
              <li className="linear-step" key={s.n} data-reveal>
                <div className="linear-step__head">
                  <span className={`linear-step__num${s.accent ? ' is-accent' : ''}`}>{s.n}</span>
                  <span className={`eyebrow ${s.accent ? '' : 'eyebrow--navy'}`}>Step</span>
                </div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
                <p className={`eyebrow ${s.accent ? '' : 'eyebrow--muted'}`}>{s.tag}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="aci-sizing">
        <div className="wrap split split--even">
          <div className="split__copy">
            <span className="eyebrow">Manual J &amp; equipment selection</span>
            <h2 className="h2" id="aci-sizing" style={{ marginTop: 8 }}>
              Finding the System Sized Exactly for Your Home
            </h2>
            <p className="body" style={{ marginTop: 16 }}>
              In residential cooling, bigger is definitely not better. An oversized air conditioner cools rooms too rapidly without running long enough
              to remove sticky indoor humidity—causing rapid temperature swings, higher wear on internal compressors, and clammy discomfort.
            </p>
            <p className="body" style={{ marginTop: 16 }}>
              Conversely, an undersized unit runs nonstop on sweltering summer afternoons, straining mechanical parts while failing to hit your desired
              setpoint. We engineer your replacement based on real engineering criteria:
            </p>
            <div style={{ marginTop: 28 }}>
              <ButtonLink to="/contact" variant="secondary">
                Discuss System Sizing With an Advisor
              </ButtonLink>
            </div>
          </div>
          <aside className="card sizing" data-reveal>
            <p className="eyebrow eyebrow--muted">Precision engineering checklist</p>
            <h3 className="card__title" style={{ marginBottom: 8 }}>
              Five Factors Influencing AC Sizing
            </h3>
            <ul className="check-detail">
              {sizing.map((s) => (
                <li key={s.t}>
                  <Icon name="checkCircle" size={18} />
                  <div>
                    <strong>{s.t}</strong>
                    <p className="small">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="aci-quality">
        <div className="wrap">
          <SectionHeader
            eyebrow="Uncompromising standards"
            title="Details Matter During Installation"
            id="aci-quality"
            lead="Equipment is only as dependable as the craft with which it was installed. We follow meticulous field procedures on every job."
          />
          <div className="grid grid--4">
            {pillars.map((p) => (
              <article className="stack" key={p.title} data-reveal>
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

      <section className="section section--white" aria-labelledby="aci-fin">
        <div className="wrap wrap--narrow">
          <div className="card fin-card" data-reveal>
            <span className="icon-box icon-box--accent">
              <Icon name="banknote" size={22} />
            </span>
            <div className="stack">
              <p className="eyebrow eyebrow--navy">Budget-friendly solutions</p>
              <h2 className="h2 h2--md" id="aci-fin">
                Flexible Financing Available for Qualifying Systems
              </h2>
              <p className="body">
                Investing in a high-efficiency heating and cooling replacement shouldn't strain your household reserves. We work with third-party
                lending partners that offer financing plans with monthly payments, subject to credit approval.
              </p>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={16} /> Simple online application
                </li>
                <li>
                  <Icon name="check" size={16} /> No prepayment penalties
                </li>
                <li>
                  <Icon name="check" size={16} /> Clear, upfront terms
                </li>
              </ul>
              <p className="small" style={{ color: 'var(--muted)' }}>
                *Subject to credit approval. Ask your comfort advisor during your in-home estimate for complete details, current terms, and special
                promotion schedules.
              </p>
              <div>
                <ButtonLink to="/financing-specials" variant="secondary">
                  View Financing Options
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="aci-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Common questions" title="Frequently Asked Questions" id="aci-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Plan Your Cooling System Replacement With Confidence"
        lead="Schedule an in-home assessment and receive transparent written options — no pressure, no obligation."
        primaryLabel="Request an Estimate"
      />
    </>
  );
}
