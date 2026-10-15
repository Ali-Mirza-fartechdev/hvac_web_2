import { ContactForm } from '../components/forms/ContactForm';
import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { FAQAccordion, type FaqItem } from '../components/sections/FAQAccordion';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/icons';
import { SectionHeader } from '../components/ui/SectionHeader';
import { business } from '../data/business';

const faqs: FaqItem[] = [
  {
    q: 'What happens after I submit the form?',
    a: 'Our team reviews your request and follows up using your preferred contact method to confirm details and an appointment window.',
  },
  {
    q: 'Is this the right way to reach you in an emergency?',
    a: `For urgent issues, call ${business.phone} instead of using the form. If you suspect a gas leak or your carbon monoxide alarm sounds, leave the home and call your utility’s emergency line from outside.`,
  },
  {
    q: 'Will I get a price before work starts?',
    a: 'Yes. We explain findings and provide pricing and options before any work begins, and work starts only with your approval.',
  },
];

export default function ContactPage() {
  const cards: { icon: IconName; title: string; body: React.ReactNode }[] = [
    {
      icon: 'phone',
      title: 'Call us',
      body: <a href={business.phoneHref}>{business.phone}</a>,
    },
    {
      icon: 'mail',
      title: 'Email',
      body: <a href={`mailto:${business.email}`}>{business.email}</a>,
    },
    {
      icon: 'pin',
      title: 'Office',
      body: (
        <>
          {business.headquarters.street}
          <br />
          {business.headquarters.district}
        </>
      ),
    },
    {
      icon: 'message',
      title: 'More ways to reach us',
      body: (
        <>
          {business.contactChannels.map((c) => (
            <span key={c.label} style={{ display: 'block' }}>
              {c.label}: <a href={c.href}>{c.value}</a>
            </span>
          ))}
          <span className="small" style={{ display: 'block', marginTop: 6 }}>
            Example details — replace before launch.
          </span>
        </>
      ),
    },
    {
      icon: 'clock',
      title: 'Hours',
      body: (
        <>
          {business.hours.map((h) => (
            <span key={h.label} style={{ display: 'block' }}>
              {h.label}: {h.value}
            </span>
          ))}
          <span style={{ display: 'block' }}>
            {business.emergencyHours.label}: {business.emergencyHours.value}
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} rule />

      <section className="section section--page" aria-labelledby="ct-h1">
        <div className="wrap contact-layout">
          <div className="contact-layout__form">
            <SectionHeader
              as="h1"
              titleClass="h1"
              eyebrow="Request service"
              title="Tell Us What’s Going On"
              id="ct-h1"
              lead="Share a few details and our team will follow up to confirm your appointment. For urgent issues, please call."
            />
            <div className="card contact-card">
              <ContactForm />
            </div>
          </div>
          <aside className="contact-layout__aside stack" aria-label="Other ways to reach us">
            {cards.map((c) => (
              <div className="card stack" key={c.title}>
                <span className="icon-box icon-box--sm">
                  <Icon name={c.icon} size={18} />
                </span>
                <h2 className="card__title">{c.title}</h2>
                <p className="card__body">{c.body}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="ct-faq">
        <div className="wrap wrap--narrow">
          <SectionHeader eyebrow="Before you send" title="Contact FAQ" id="ct-faq" align="center" />
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
