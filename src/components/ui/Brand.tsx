import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import { resolveImage } from '../../lib/images';

interface BrandProps {
  size?: number;
  asLink?: boolean;
}

/**
 * Logo lock-up. The Figma logo image is used when it has been added to
 * `src/assets/images/logo.png`; otherwise a neutral monogram stands in.
 */
export function Brand({ size = 32, asLink = true }: BrandProps) {
  const logo = resolveImage('logo');
  const inner = (
    <>
      <span className="brand__mark" style={{ width: size, height: size }}>
        {logo ? (
          <img src={logo} alt="" width={size} height={size} />
        ) : (
          <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#18334b" />
            <path d="M7 15.5 16 8l9 7.5V25h-5v-6h-8v6H7z" fill="#ffdad3" />
          </svg>
        )}
      </span>
      <span className="brand__text">
        <span className="brand__name">{business.name}</span>
        <span className="brand__tag">{business.tagline}</span>
      </span>
    </>
  );
  return asLink ? (
    <Link to="/" className="brand" aria-label={`${business.legalName} — home`}>
      {inner}
    </Link>
  ) : (
    <div className="brand">{inner}</div>
  );
}
