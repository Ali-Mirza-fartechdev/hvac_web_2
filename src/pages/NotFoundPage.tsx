import { ButtonLink } from '../components/ui/ButtonLink';
import { business } from '../data/business';

export default function NotFoundPage() {
  return (
    <section className="section section--page" aria-labelledby="nf-h1">
      <div className="wrap not-found">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="h1" id="nf-h1">
          This page couldn’t be found
        </h1>
        <p className="lead">The page you’re looking for may have moved. Head back home, browse our services, or give us a call.</p>
        <div className="hero__actions">
          <ButtonLink to="/">Back to Home</ButtonLink>
          <ButtonLink to="/services" variant="secondary">
            Our Services
          </ButtonLink>
          <ButtonLink to={business.phoneHref} variant="secondary" icon="phone">
            Call {business.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
