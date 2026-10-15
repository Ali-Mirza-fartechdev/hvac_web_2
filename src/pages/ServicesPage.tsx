import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink, TextLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';
import { services } from '../data/services';

const guidance: { icon: IconName; title: string; body: string; cta: string; to: string }[] = [
  {
    icon: 'thermometer',
    title: 'System is not cooling properly',
    body: 'If your unit is blowing warm air, making grinding sounds, or cycling constantly, schedule an immediate diagnostic visit.',
    cta: 'Book Diagnosis',
    to: '/services/ac-repair',
  },
  {
    icon: 'home',
    title: 'Considering a new HVAC system',
    body: 'If your furnace or AC is over 12–15 years old, uses R-22 refrigerant, or faces frequent repairs, request an upfront replacement consultation.',
    cta: 'Request Estimate',
    to: '/services/ac-installation',
  },
  {
    icon: 'calendar',
    title: 'Looking for routine maintenance',
    body: "If your system is currently running but hasn't had an annual spring or fall inspection, book a preventive tune-up to protect reliability.",
    cta: 'Schedule Tune-Up',
    to: '/services/maintenance',
  },
];

const why: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'message',
    title: 'Clear Communication',
    body: 'Plain-language explanations of diagnostic findings and fixed upfront quotes before any tools touch your equipment. No hidden trip fees or surprise billing.',
  },
  {
    icon: 'hardHat',
    title: 'Professional Service',
    body: 'Licensed, background-checked craftsmen who wear boot covers, respect your home, protect flooring with drop cloths, and complete clean, code-compliant work.',
  },
  {
    icon: 'gauge',
    title: 'Solutions Suited to the Home',
    body: 'No high-pressure sales quotas. We only recommend equipment replacement when repair is genuinely uneconomical or the unit is unsafe to run.',
  },
];

const steps = [
  {
    n: '01',
    label: 'Step one',
    title: 'Tell Us What You Need',
    body: 'Book online or call our team with your symptoms and convenient arrival window. We dispatch on time with confirmed scheduling reminders.',
  },
  {
    n: '02',
    label: 'Step two',
    title: 'Arrange a Service Visit',
    body: 'A certified technician arrives on time with a fully equipped service vehicle, inspects the mechanical components, and tests performance.',
  },
  {
    n: '03',
    label: 'Step three',
    title: 'Receive Recommendations',
    body: 'Review honest diagnostic options and choose the plan that best fits your household budget. No surprise invoices or unapproved work.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Which HVAC services do you provide?',
    a: 'We provide complete residential air conditioning repair, system installation and replacement, heating and gas furnace repair, seasonal preventive tune-ups, and indoor air quality services.',
  },
  {
    q: 'How do I request a service appointment?',
    a: `Use the online request form on our Contact page, or call ${business.phone}. Tell us what your system is doing and choose a preferred appointment window, and our team will follow up to confirm.`,
  },
  {
    q: 'Which locations do you serve?',
    a: 'We serve the communities listed on our Service Areas page. If your neighborhood is not listed, call us and we will confirm whether we can dispatch to your address.',
  },
  {
    q: 'Do you provide estimates before work begins?',
    a: 'Yes. We explain the findings and give you pricing options before any repair work starts, and work proceeds only with your approval.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <section className="hero" aria-labelledby="services-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="chip">
              <span className="chip__dot" aria-hidden="true" />
              Our services
            </span>
            <h1 className="h1" id="services-h1">
              Complete Heating &amp; Cooling Services
            </h1>
            <p className="lead">
              Whether your system needs fast emergency repair, a precision seasonal tune-up, or a planned high-efficiency replacement, our licensed
              craftsmen deliver honest diagnostic assessments and dependable workmanship for your home.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request Service</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
            <dl className="mini-facts hero__badges">
              <div>
                <dt>License</dt>
                <dd>{business.license}</dd>
              </div>
              <div>
                <dt>Pricing</dt>
                <dd>Flat-Rate Quoted</dd>
              </div>
              <div>
                <dt>Technicians</dt>
                <dd>NATE-Certified</dd>
              </div>
            </dl>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="services-hero" priority sizes="(min-width: 960px) 455px, 100vw" reveal />
              <div className="photo-frame__badge">
                <div className="photo-frame__badge-main">
                  <Icon name="shield" size={18} />
                  <div>
                    <strong style={{ fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Craftsman promise</strong>
                    <span className="sub">Respectful, clean &amp; code-compliant technicians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="section section--white" aria-labelledby="services-directory">
        <div className="wrap">
          <SectionHeader
            eyebrow="Our craftsmanship"
            title="Four Core HVAC Disciplines"
            id="services-directory"
            lead="Engineered solutions executed by seasoned tradesmen with transparent flat-rate pricing on every call."
          />
          <div className="service-rows">
            {services.map((s, i) => (
              <article className={`service-row${i % 2 ? ' service-row--flip' : ''}`} key={s.slug} data-reveal>
                <div className="service-row__copy">
                  <span className="tag">{s.overview.eyebrow}</span>
                  <h3 className="h2 h2--md">{s.title}</h3>
                  <p className="body">{s.overview.body}</p>
                  <ul className="check-list">
                    {s.overview.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="checkCircle" size={17} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <TextLink to={s.path} tone="navy">
                    {s.overview.linkLabel}
                  </TextLink>
                </div>
                <div className="service-row__media">
                  <ImageSlot imageKey={s.overview.image} fill />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing */}
      <section className="section section--page" aria-labelledby="services-choose">
        <div className="wrap">
          <SectionHeader
            eyebrow="Diagnostic guidance"
            title="Not Sure What Your System Needs?"
            id="services-choose"
            lead="Every home comfort issue is different. Here is a practical guide to help you choose the right service call:"
          />
          <div className="grid grid--3">
            {guidance.map((g) => (
              <article className="card card--hover stack" key={g.title} data-reveal>
                <span className="icon-box">
                  <Icon name={g.icon} size={22} />
                </span>
                <h3 className="card__title">{g.title}</h3>
                <p className="card__body">{g.body}</p>
                <TextLink to={g.to}>{g.cta}</TextLink>
              </article>
            ))}
          </div>
          <div className="note-strip" style={{ marginTop: 24, padding: 24 }}>
            <div className="note-strip__main">
              <Icon name="phone" size={20} />
              <div>
                <h3 className="card__title" style={{ fontSize: 20 }}>
                  Need immediate advice on a tricky issue?
                </h3>
                <p className="small">Our direct dispatch team will help determine if an emergency technician is needed.</p>
              </div>
            </div>
            <ButtonLink to={business.phoneHref} variant="secondary" size="sm">
              {business.phone}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section section--soft" aria-labelledby="services-why">
        <div className="wrap">
          <SectionHeader
            eyebrow="The tradesman standard"
            title="Craftsmanship & Honest Advice"
            id="services-why"
            lead="We treat your heating and air conditioning system as a long-term investment, not a high-pressure sales opportunity."
          />
          <div className="grid grid--3">
            {why.map((w) => (
              <article className="stack" key={w.title} data-reveal>
                <span className="icon-box icon-box--sm">
                  <Icon name={w.icon} size={18} />
                </span>
                <h3 className="card__title">{w.title}</h3>
                <p className="body">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--white" aria-labelledby="services-process">
        <div className="wrap">
          <SectionHeader
            eyebrow="Predictable experience"
            title="How Service Visits Work"
            id="services-process"
            lead="From first phone call to post-repair walk-through, our structured diagnostic process keeps you in total control."
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--page" aria-labelledby="services-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader
            eyebrow="Clear answers"
            title="Frequently Asked Questions"
            id="services-faq"
            align="center"
            lead="Common details about our service calls, appointments, and coverage areas."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Your HVAC System Working Right?"
        lead="Tell us what you’re seeing and we’ll help you choose the right visit — repair, replacement consultation, or a seasonal tune-up."
      />
    </>
  );
}
