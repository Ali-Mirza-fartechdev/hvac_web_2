import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import type { IconName } from './icons';

type Variant = 'primary' | 'secondary' | 'light' | 'outline-light';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  iconAfter?: IconName;
  size?: 'md' | 'sm';
  block?: boolean;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const isExternal = (to: string) => /^(https?:|tel:|mailto:)/.test(to);

/** Renders a styled <a> or router <Link> depending on the destination. */
export function ButtonLink({
  to,
  children,
  variant = 'primary',
  icon,
  iconAfter,
  size = 'md',
  block,
  className = '',
  onClick,
  ...rest
}: ButtonLinkProps) {
  const cls = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', block ? 'btn--block' : '', className]
    .filter(Boolean)
    .join(' ');
  const content = (
    <>
      {icon && <Icon name={icon} size={15} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={15} />}
    </>
  );
  if (isExternal(to)) {
    return (
      <a className={cls} href={to} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link className={cls} to={to} onClick={onClick} {...rest}>
      {content}
    </Link>
  );
}

interface TextLinkProps {
  to: string;
  children: ReactNode;
  tone?: 'rust' | 'navy';
  small?: boolean;
  className?: string;
}

/** The animated "Explore Service →" style link used throughout the design. */
export function TextLink({ to, children, tone = 'rust', small, className = '' }: TextLinkProps) {
  const cls = ['link-arrow', tone === 'navy' ? 'link-arrow--navy' : '', small ? 'link-arrow--sm' : '', className]
    .filter(Boolean)
    .join(' ');
  const content = (
    <>
      {children}
      <Icon name="arrowRight" size={small ? 12 : 14} />
    </>
  );
  return isExternal(to) ? (
    <a className={cls} href={to}>
      {content}
    </a>
  ) : (
    <Link className={cls} to={to}>
      {content}
    </Link>
  );
}
