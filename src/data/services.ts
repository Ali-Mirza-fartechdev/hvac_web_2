import type { IconName } from '../components/ui/icons';
import type { ImageKey } from '../lib/images';

export interface Service {
  slug: 'ac-repair' | 'ac-installation' | 'heating' | 'maintenance';
  path: string;
  /** Short name used in menus and chips */
  name: string;
  /** Title as shown on the Services overview rows */
  title: string;
  icon: IconName;
  /** Copy used on the Home page service cards */
  homeTitle: string;
  homeBody: string;
  /** Copy used on the Services overview directory */
  overview: {
    eyebrow: string;
    body: string;
    bullets: string[];
    linkLabel: string;
    image: ImageKey;
  };
}

export const services: Service[] = [
  {
    slug: 'ac-repair',
    path: '/services/ac-repair',
    name: 'AC Repair',
    title: 'Air Conditioning Repair',
    icon: 'snowflake',
    homeTitle: 'Air Conditioning Repair',
    homeBody:
      'Fast, accurate diagnosis and repair for all makes and models. We resolve cooling loss, strange noises, and electrical faults promptly.',
    overview: {
      eyebrow: 'Cooling repair & diagnostics',
      body: 'Prompt, accurate diagnosis and repair for all residential AC makes and models. We resolve cooling loss, frozen coils, strange noises, and electrical faults with transparent, flat-rate pricing before work begins.',
      bullets: ['Rapid diagnostic dispatch', 'Upfront written estimates', 'Stocked service vans for same-day fixes'],
      linkLabel: 'Explore AC Repair',
      image: 'services-ac-repair',
    },
  },
  {
    slug: 'ac-installation',
    path: '/services/ac-installation',
    name: 'AC Installation',
    title: 'AC Installation & Replacement',
    icon: 'wind',
    homeTitle: 'AC Installation & Replacement',
    homeBody:
      'Custom-sized, high-efficiency SEER2 cooling systems installed to manufacturer standards with comprehensive warranty protection.',
    overview: {
      eyebrow: 'System upgrades & replacement',
      body: 'Custom-sized residential cooling systems installed to strict manufacturer and local building code standards. Upgrade to quiet, high-efficiency SEER2 heat pumps and air conditioners that reduce summer electric bills.',
      bullets: ['Manual J load calculations', 'Multi-brand replacement options', 'Comprehensive manufacturer & labor warranty'],
      linkLabel: 'Explore Installation',
      image: 'services-ac-install',
    },
  },
  {
    slug: 'heating',
    path: '/services/heating',
    name: 'Heating & Furnace',
    title: 'Heating & Furnace Services',
    icon: 'flame',
    homeTitle: 'Heating & Furnace Services',
    homeBody:
      'Furnace diagnostics, heat pump maintenance, and winter safety inspections to keep your family warm during freezing temperatures.',
    overview: {
      eyebrow: 'Residential heating',
      body: 'Thorough furnace diagnostics, heat pump maintenance, blower repair, and heat exchanger safety inspections to keep your family warm and safe during severe winter temperatures.',
      bullets: ['Carbon monoxide safety checks', 'Ignition & thermostat repair', 'Dual-fuel & electric heat options'],
      linkLabel: 'Explore Heating Services',
      image: 'services-heating',
    },
  },
  {
    slug: 'maintenance',
    path: '/services/maintenance',
    name: 'Maintenance',
    title: 'Seasonal HVAC Maintenance',
    icon: 'wrench',
    homeTitle: 'Seasonal Maintenance',
    homeBody:
      'Thorough 21-point multi-system tune-ups that prevent sudden breakdowns, extend equipment lifespan, and lower utility bills.',
    overview: {
      eyebrow: 'Preventive protection',
      body: 'Comprehensive multi-point tune-ups designed to catch small issues before they turn into costly breakdowns, extend equipment operating life, and maintain peak energy efficiency year after year.',
      bullets: ['21-point system inspection', 'Coil cleaning & airflow verification', 'Priority scheduling for plan members'],
      linkLabel: 'Explore Maintenance',
      image: 'services-maintenance',
    },
  },
];

export const serviceBySlug = (slug: Service['slug']): Service => {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service: ${slug}`);
  return found;
};
