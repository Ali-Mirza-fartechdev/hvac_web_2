/**
 * Image manifest.
 *
 * Photography from the Figma file lives in `src/assets/images/`. Each slot below
 * expects a file with the given base name (`.jpg`, `.jpeg`, `.png`, `.webp` or
 * `.avif`). Vite hashes and fingerprints whatever it finds at build time; if a
 * file is missing the slot renders a neutral placeholder instead of a broken
 * image, so the site never ships 404s.
 *
 * `figmaNode` is the node id in `Heritage Craft - Template 2` to export from.
 */
export type ImageKey =
  | 'logo'
  | 'home-hero'
  | 'home-commitment'
  | 'services-hero'
  | 'services-ac-repair'
  | 'services-ac-install'
  | 'services-heating'
  | 'services-maintenance'
  | 'maintenance-hero'
  | 'maintenance-cooling'
  | 'maintenance-heating'
  | 'ac-repair-hero'
  | 'ac-repair-inspection'
  | 'ac-install-hero'
  | 'heating-hero'
  | 'heating-inspection'
  | 'about-hero'
  | 'about-field-install'
  | 'about-field-diagnostic'
  | 'about-field-heating'
  | 'service-areas-hero'
  | 'financing-hero';

export interface ImageSpec {
  alt: string;
  /** Intrinsic ratio used to reserve space and avoid layout shift */
  width: number;
  height: number;
  figmaNode?: string;
}

export const imageSpecs: Record<ImageKey, ImageSpec> = {
  logo: { alt: 'Heritage Craft HVAC logo', width: 32, height: 32 },
  'home-hero': {
    alt: 'Licensed HVAC technician calibrating outdoor air conditioner condenser unit',
    width: 437,
    height: 440,
    figmaNode: '1:1258',
  },
  'home-commitment': {
    alt: 'Heritage Craft technician explaining diagnostic readings to a homeowner inside an entryway',
    width: 437,
    height: 460,
    figmaNode: '1:1387',
  },
  'services-hero': {
    alt: 'Friendly certified HVAC technician holding a diagnostic digital gauge speaking politely with a homeowner',
    width: 454,
    height: 460,
    figmaNode: '1:729',
  },
  'services-ac-repair': {
    alt: 'HVAC technician diagnosing outdoor air conditioning condenser unit',
    width: 492,
    height: 428,
    figmaNode: '1:781',
  },
  'services-ac-install': { alt: 'HVAC technicians installing a residential air conditioning system', width: 492, height: 428 },
  'services-heating': { alt: 'Technician servicing a residential gas furnace', width: 492, height: 428 },
  'services-maintenance': { alt: 'Technician performing a seasonal HVAC maintenance inspection', width: 492, height: 428 },
  'maintenance-hero': { alt: 'HVAC technician completing a preventive maintenance inspection', width: 468, height: 351, figmaNode: '1:54' },
  'maintenance-cooling': {
    alt: 'Professional American residential HVAC technician in clean navy work uniform inspecting outdoor AC condenser unit outside suburban home',
    width: 578,
    height: 361,
    figmaNode: '1:229',
  },
  'maintenance-heating': {
    alt: 'Professional certified American HVAC technician in navy uniform inspecting residential gas furnace in basement utility room using meter',
    width: 578,
    height: 361,
    figmaNode: '1:264',
  },
  'ac-repair-hero': { alt: 'Technician diagnosing a residential air conditioning system', width: 470, height: 560 },
  'ac-repair-inspection': { alt: 'Technician testing AC electrical components with a multimeter', width: 480, height: 640 },
  'ac-install-hero': {
    alt: 'Two certified HVAC craftsmen leveling and installing a modern central air conditioning system',
    width: 470,
    height: 520,
  },
  'heating-hero': { alt: 'Technician inspecting a residential furnace', width: 470, height: 560 },
  'heating-inspection': { alt: 'Technician performing a precision furnace safety diagnostic', width: 480, height: 640 },
  'about-hero': { alt: 'HVAC technician talking with a homeowner in her entryway', width: 470, height: 560 },
  'about-field-install': { alt: 'Lead installer commissioning a new HVAC system', width: 384, height: 320 },
  'about-field-diagnostic': { alt: 'Diagnostic specialist testing electrical components', width: 384, height: 320 },
  'about-field-heating': {
    alt: 'Professional certified American HVAC technician in navy work uniform inspecting and servicing a modern residential gas furnace in a tidy basement utility room',
    width: 384,
    height: 320,
  },
  'service-areas-hero': {
    alt: 'Established suburban neighborhood street in our core service area with mature trees and single-family homes',
    width: 520,
    height: 460,
  },
  'financing-hero': {
    alt: 'Technician reviewing options with a homeowner',
    width: 520,
    height: 480,
  },
};

const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byName: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const base = path.split('/').pop()?.replace(/\.[^.]+$/, '');
  if (base) byName[base] = url;
}

/**
 * Which photograph in src/assets/images/ fills each slot. A slot can also be filled
 * by a file named after its own key (e.g. `home-hero.jpg`), which takes priority —
 * so replacing a photo later never needs a code change.
 */
const sourceFor: Partial<Record<ImageKey, string>> = {
  'home-hero': 'outdoor-condenser',
  'home-commitment': 'tech-homeowner',
  'services-hero': 'outdoor-condenser',
  'services-ac-repair': 'disconnect-test',
  'services-ac-install': 'furnace-install',
  'services-heating': 'furnace-diagnostic',
  'services-maintenance': 'coil-cleaning',
  'maintenance-hero': 'coil-cleaning',
  'maintenance-cooling': 'outdoor-condenser',
  'maintenance-heating': 'furnace-diagnostic',
  'ac-repair-hero': 'outdoor-condenser',
  'ac-repair-inspection': 'disconnect-test',
  'ac-install-hero': 'furnace-install',
  'heating-hero': 'furnace-diagnostic',
  'heating-inspection': 'coil-cleaning',
  'about-hero': 'tech-homeowner',
  'about-field-install': 'furnace-install',
  'about-field-diagnostic': 'disconnect-test',
  'about-field-heating': 'furnace-diagnostic',
  'service-areas-hero': 'neighborhood',
  'financing-hero': 'tech-homeowner',
};

export function resolveImage(key: ImageKey): string | undefined {
  const own = byName[key];
  if (own) return own;
  const alias = sourceFor[key];
  return alias ? byName[alias] : undefined;
}
