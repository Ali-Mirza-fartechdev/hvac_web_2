import { business, siteUrl } from './business';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Breadcrumb trail for structured data (excluding Home) */
  crumbs?: { name: string; path: string }[];
  noindex?: boolean;
}

const brand = business.legalName;

export const routeMeta: RouteMeta[] = [
  {
    path: '/',
    title: `${brand} | Residential Heating & Cooling Service`,
    description:
      'Licensed residential HVAC service: AC repair, installation and replacement, furnace and heating service, and seasonal maintenance with upfront, flat-rate pricing.',
  },
  {
    path: '/services',
    title: `Heating & Cooling Services | ${brand}`,
    description:
      'Explore AC repair, AC installation and replacement, heating and furnace services, and seasonal HVAC maintenance from licensed residential craftsmen.',
    crumbs: [{ name: 'Services', path: '/services' }],
  },
  {
    path: '/services/ac-repair',
    title: `AC Repair & Diagnostics | ${brand}`,
    description:
      'Air conditioner not cooling? Learn the common warning signs, how our diagnostic repair visit works, and request AC repair with upfront options before any work begins.',
    crumbs: [
      { name: 'Services', path: '/services' },
      { name: 'AC Repair', path: '/services/ac-repair' },
    ],
  },
  {
    path: '/services/ac-installation',
    title: `AC Installation & Replacement | ${brand}`,
    description:
      'Right-sized central air conditioning installation and replacement, planned with an in-home assessment, load calculation and transparent written estimates.',
    crumbs: [
      { name: 'Services', path: '/services' },
      { name: 'AC Installation & Replacement', path: '/services/ac-installation' },
    ],
  },
  {
    path: '/services/heating',
    title: `Heating & Furnace Services | ${brand}`,
    description:
      'Furnace and heating repair, safety inspections, and replacement guidance from licensed craftsmen, with clear options and upfront pricing before work starts.',
    crumbs: [
      { name: 'Services', path: '/services' },
      { name: 'Heating & Furnace Services', path: '/services/heating' },
    ],
  },
  {
    path: '/services/maintenance',
    title: `HVAC Maintenance & Seasonal Tune-Ups | ${brand}`,
    description:
      'Preventive HVAC maintenance with seasonal cooling and heating inspections, a clear visit process, and written condition reports.',
    crumbs: [
      { name: 'Services', path: '/services' },
      { name: 'HVAC Maintenance', path: '/services/maintenance' },
    ],
  },
  {
    path: '/about',
    title: `About Us | ${brand}`,
    description:
      'Meet the team behind Heritage Craft: our approach to patient diagnostics, transparent proposals and respectful in-home service.',
    crumbs: [{ name: 'About', path: '/about' }],
  },
  {
    path: '/service-areas',
    title: `Service Areas | ${brand}`,
    description:
      'See the communities Heritage Craft serves and check whether your city or ZIP code is covered before you request service.',
    crumbs: [{ name: 'Service Areas', path: '/service-areas' }],
  },
  {
    path: '/reviews',
    title: `Customer Reviews | ${brand}`,
    description:
      'Read homeowner experiences with Heritage Craft across AC repair, installation, heating and maintenance, and filter reviews by service.',
    crumbs: [{ name: 'Reviews', path: '/reviews' }],
  },
  {
    path: '/financing-specials',
    title: `Financing & Special Offers | ${brand}`,
    description:
      'Understand how third-party financing works for HVAC projects and see current seasonal offers, with eligibility conditions stated up front.',
    crumbs: [{ name: 'Financing & Offers', path: '/financing-specials' }],
  },
  {
    path: '/contact',
    title: `Contact & Book Service | ${brand}`,
    description:
      'Request HVAC service online or call our office. Tell us about your system and preferred appointment window and we will follow up.',
    crumbs: [{ name: 'Contact & Book Service', path: '/contact' }],
  },
];

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: `Page not found | ${brand}`,
  description: 'The page you are looking for could not be found.',
  noindex: true,
};

export function findMeta(pathname: string): RouteMeta {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routeMeta.find((m) => m.path === clean) ?? notFoundMeta;
}

export const absoluteUrl = (path: string) => `${siteUrl}${path === '/' ? '' : path}`;

/** JSON-LD for the business — values come from src/data/business.ts. */
export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: business.legalName,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    foundingDate: String(business.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.headquarters.street,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '16:00' },
    ],
  };
}

export function breadcrumbJsonLd(meta: RouteMeta) {
  if (!meta.crumbs?.length) return null;
  const items = [{ name: 'Home', path: '/' }, ...meta.crumbs];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Builds the <head> markup string (used by the prerender step). */
export function headMarkup(meta: RouteMeta): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const url = absoluteUrl(meta.path === '/404' ? '/' : meta.path);
  const crumbs = breadcrumbJsonLd(meta);
  const ld = [meta.path === '/' ? businessJsonLd() : null, crumbs].filter(Boolean);
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '<meta name="robots" content="noindex" />' : '',
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(business.legalName)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...ld.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`),
  ]
    .filter(Boolean)
    .join('\n    ');
}
