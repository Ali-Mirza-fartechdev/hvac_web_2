import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { footerServices } from '../../data/navigation';
import { Brand } from '../ui/Brand';
import { ButtonLink } from '../ui/ButtonLink';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__about">
          <Brand />
          <p>
            Providing honest, high-craftsmanship heating and air conditioning service to local homeowners since {business.foundedYear}.
          </p>
          <div className="credential-box">
            <strong>Verified credentials</strong>
            <span>
              State License {business.license}
              <br />
              Fully Bonded &amp; Insured
            </span>
          </div>
        </div>

        <nav aria-label="Services">
          <h2>Services</h2>
          <ul className="footer-links">
            {footerServices.map((s) => (
              <li key={s.to}>
                <Link to={s.to}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Service Areas &amp; Hours</h2>
          <div className="footer-block">
            <span className="footer-block__label">Active territories</span>
            <p>{business.activeTerritories}</p>
          </div>
          <div className="footer-block">
            <span className="footer-block__label">Operating hours</span>
            <ul className="footer-hours">
              {business.hours.map((h) => (
                <li key={h.label}>
                  <span>{h.label}:</span>
                  <span>{h.value}</span>
                </li>
              ))}
              <li className="is-emergency">
                <span>{business.emergencyHours.label}:</span>
                <span>{business.emergencyHours.value}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <div>
            <strong>Headquarters:</strong>
            <p>{business.headquarters.street}</p>
          </div>
          <div>
            <strong>Direct line:</strong>
            <a href={business.phoneHref}>{business.phone}</a>
          </div>
          <div>
            <strong>Inquiries:</strong>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <ButtonLink to="/contact" variant="secondary" size="sm">
            Book Service Online
          </ButtonLink>
        </div>
      </div>

      <div className="site-footer__legal">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved. License {business.license}.
          </span>
          <nav aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
