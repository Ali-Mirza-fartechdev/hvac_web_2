import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** Optional right-hand note (e.g. "Licensed gas mechanical contractor") */
  note?: string;
  rule?: boolean;
}

export function Breadcrumbs({ items, note, rule }: BreadcrumbsProps) {
  const all: Crumb[] = [{ label: 'Home', to: '/' }, ...items];
  return (
    <div className={`breadcrumb-bar${rule ? ' breadcrumb-bar--rule' : ''}`}>
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            {all.map((c, i) => {
              const last = i === all.length - 1;
              return (
                <li key={c.label}>
                  {last || !c.to ? <span aria-current={last ? 'page' : undefined}>{c.label}</span> : <Link to={c.to}>{c.label}</Link>}
                </li>
              );
            })}
          </ol>
        </nav>
        {note && <span className="breadcrumb-bar__note">{note}</span>}
      </div>
    </div>
  );
}
