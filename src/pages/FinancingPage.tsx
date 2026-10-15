import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { CtaBanner } from '../components/sections/CtaBanner';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { ImageSlot } from '../components/ui/ImageSlot';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';

const steps: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Get an Estimate', body: 'We assess your home and provide a clear written estimate for the work you need.' },
  { n: '02', title: 'Review Options', body: 'If financing is available for your project, we walk through the options and terms with you.' },
  { n: '03', title: 'Apply with the Lender', body: 'Applications and approvals are handled by the financing partner, subject to their credit requirements.' },
  { n: '04', title: 'Schedule the Work', body: 'Once approved and you give the go-ahead, we schedule your installation.' },
];

const offers: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'banknote',
    title: 'Financing Options',
    body: 'Where available, financing for system replacement and larger repairs. Rates and terms depend on the lender and your credit approval.',
  },
  {
    icon: 'calendar',
    title: 'Seasonal Specials',
    body: 'We may offer seasonal promotions. Ask us what is currently available; offers vary and have conditions.',
  },
  {
    icon: 'zap',
    title: 'Manufacturer & Utility Incentives',
    body: 'Some high-efficiency systems qualify for manufacturer rebates or utility incentives. We can point you to what may apply, but eligibility is determined by the program.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Does applying affect my credit?',
    a: 'That depends on the lender. We will tell you what we know, and the lender’s application will disclose how your credit is checked before you submit.',
  },
  {
    q: 'What can be financed?',
    a: 'Availability depends on the project and the financing partner. Ask us during your estimate and we will confirm what is offered for your situation.',
  },
  {
    q: 'Are there any promotions right now?',
    a: `Offers change and have conditions. Call ${business.phone} or request an estimate and we will share what is currently available.`,
  },
  {
    q: 'Who approves my application?',
    a: 'The financing partner reviews and approves applications. Heritage Craft does not make credit decisions.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Financing & Specials' }]} rule />

      <section className="hero" aria-labelledby="fn-h1">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--navy">Financing &amp; specials</span>
            <h1 className="h1" id="fn-h1">
              Planning for a Comfortable Home, Made Simpler
            </h1>
            <p className="lead">
              Replacing or upgrading a heating and cooling system is a significant investment. Ask us about the financing options and seasonal
              offers that may be available for your project.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact">Request an Estimate</ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
                Call {business.phone}
              </ButtonLink>
            </div>
          </div>
          <div className="hero__media">
            <div className="photo-frame">
              <ImageSlot imageKey="financing-hero" priority sizes="(min-width: 960px) 520px, 100vw" reveal />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="fn-steps">
        <div className="wrap">
          <SectionHeader eyebrow="How it works" title="A Clear Path from Estimate to Installation" id="fn-steps" />
          <ol className="grid grid--4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {steps.map((s) => (
              <li className="linear-step" key={s.n} data-reveal>
                <span className="step-card__num step-card__num--outline">{s.n}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="fn-offers">
        <div className="wrap">
          <SectionHeader eyebrow="Offers &amp; options" title="What May Be Available" id="fn-offers" />
          <div className="grid grid--3">
            {offers.map((o) => (
              <article className="card stack" key={o.title} data-reveal>
                <span className="icon-box">
                  <Icon name={o.icon} size={22} />
                </span>
                <h3 className="card__title">{o.title}</h3>
                <p className="card__body">{o.body}</p>
              </article>
            ))}
          </div>
          <p className="small" style={{ marginTop: 24 }} role="note">
            <Icon name="info" size={14} /> All financing is subject to credit approval and the lender’s terms. Specific partners, rates and promotions
            are confirmed at the time of your estimate.
          </p>
        </div>
      </section>

      <section className="section section--page" aria-labelledby="fn-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Common questions" title="Financing FAQ" id="fn-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CtaBanner
        title="Talk Through Your Options With Us"
        lead="Request an estimate and ask about financing and current offers for your project."
        primaryLabel="Request an Estimate"
      />
    </>
  );
}
