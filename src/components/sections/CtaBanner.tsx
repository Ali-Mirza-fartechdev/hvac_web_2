import type { ReactNode } from 'react';
import { business } from '../../data/business';
import { ButtonLink } from '../ui/ButtonLink';
import { Icon } from '../ui/Icon';
import type { IconName } from '../ui/icons';

interface CtaBannerProps {
  eyebrow?: string;
  chip?: string;
  title: ReactNode;
  lead: ReactNode;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  secondaryIcon?: IconName;
  meta?: { icon: IconName; label: string }[];
  fine?: string;
  center?: boolean;
}

/** Full-width navy conversion block that closes every page in the design. */
export function CtaBanner({
  eyebrow,
  chip,
  title,
  lead,
  primaryLabel = 'Request Service',
  primaryTo = '/contact',
  secondaryLabel = `Call ${business.phone}`,
  secondaryTo = business.phoneHref,
  secondaryIcon = 'phone',
  meta,
  fine,
  center,
}: CtaBannerProps) {
  return (
    <section className={`cta-banner${center ? ' cta-banner--center' : ''}`} aria-labelledby="cta-heading">
      <div className="wrap">
        <div className="cta-banner__inner" data-reveal>
          {chip && <span className="chip chip--dark">{chip}</span>}
          {eyebrow && <span className="eyebrow eyebrow--blush">{eyebrow}</span>}
          <h2 className="h2" id="cta-heading">
            {title}
          </h2>
          <p className="cta-banner__lead">{lead}</p>
          <div className="cta-banner__actions">
            <ButtonLink to={primaryTo}>{primaryLabel}</ButtonLink>
            <ButtonLink to={secondaryTo} variant="light" icon={secondaryIcon}>
              {secondaryLabel}
            </ButtonLink>
          </div>
          {meta && (
            <ul className="cta-banner__meta">
              {meta.map((m) => (
                <li key={m.label}>
                  <Icon name={m.icon} size={15} />
                  {m.label}
                </li>
              ))}
            </ul>
          )}
          {fine && <p className="cta-banner__fine">{fine}</p>}
        </div>
      </div>
    </section>
  );
}
