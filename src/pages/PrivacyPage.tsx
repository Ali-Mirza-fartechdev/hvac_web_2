import { Breadcrumbs } from '../components/sections/Breadcrumbs';
import { business } from '../data/business';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} rule />
      <section className="section section--white">
        <div className="wrap wrap--narrow stack prose">
          <h1 className="h1">Privacy Policy</h1>
          <p className="small">
            Template notice: this is a plain-language starting point. Have it reviewed by counsel and adapted to your business before launch.
          </p>
          <h2 className="h3">Information we collect</h2>
          <p>
            When you submit our contact form we collect the details you provide: name, phone number, optional email address, service address or ZIP code,
            service type, preferences, and a description of your issue.
          </p>
          <h2 className="h3">How we use it</h2>
          <p>We use this information only to respond to your request, schedule service, and provide the work you ask for.</p>
          <h2 className="h3">Sharing</h2>
          <p>
            Form submissions are delivered to our team by an email delivery provider. We do not sell your personal information.
          </p>
          <h2 className="h3">Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${business.email}`}>{business.email}</a> or call <a href={business.phoneHref}>{business.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
