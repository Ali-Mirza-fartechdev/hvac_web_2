import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  eyebrowTone?: 'rust' | 'muted' | 'navy' | 'blush';
  titleClass?: string;
  as?: 'h1' | 'h2';
  /** Optional right-aligned action (e.g. a link) */
  action?: ReactNode;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  eyebrowTone = 'rust',
  titleClass = 'h2',
  as: Tag = 'h2',
  action,
  id,
}: SectionHeaderProps) {
  const toneClass = eyebrowTone === 'rust' ? '' : ` eyebrow--${eyebrowTone}`;
  const copy = (
    <>
      {eyebrow && <span className={`eyebrow${toneClass}`}>{eyebrow}</span>}
      <Tag className={titleClass} id={id}>
        {title}
      </Tag>
      {lead && <p className="lead">{lead}</p>}
    </>
  );
  if (action) {
    return (
      <div className="section-head section-head--split" data-reveal>
        <div className="section-head__copy">{copy}</div>
        {action}
      </div>
    );
  }
  return (
    <div className={`section-head${align === 'center' ? ' section-head--center' : ''}`} data-reveal>
      {copy}
    </div>
  );
}
