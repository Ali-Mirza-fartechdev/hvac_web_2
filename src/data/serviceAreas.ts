export interface Neighborhood {
  name: string;
  detail: string;
}

/** Home page "Service-Area Preview" tiles (Figma section 7). */
export const neighborhoods: Neighborhood[] = [
  { name: 'Metro Center', detail: 'ZIP 75001 • 75002' },
  { name: 'Oakridge', detail: '& Woodlawn District' },
  { name: 'Northwood', detail: 'Estates & Glenwood' },
  { name: 'Highland Park', detail: 'North & South Heights' },
  { name: 'Westlake Hills', detail: 'Residences & Ridge' },
  { name: 'Riverdale Corridor', detail: 'East Metro Basin' },
  { name: 'Fairview Valley', detail: 'Suburban District' },
  { name: 'Summit Ridge', detail: 'Hilltop Community' },
];

export type RouteStatus = 'HQ Dispatch' | 'Priority Zone' | 'Same-Day' | 'Standard Route';

export interface ZoneTown {
  name: string;
  status: RouteStatus;
  arrival: string;
  /** Matches typed in the lookup (lower-case). ZIPs only where the design supplies them. */
  aliases?: string[];
  zips?: string[];
}

export interface Zone {
  id: string;
  title: string;
  blurb: string;
  systems: string;
  towns: ZoneTown[];
}

/** Service Areas page — regional corridors (Figma "Communities We Serve"). */
export const zones: Zone[] = [
  {
    id: '01',
    title: 'Central Metro Corridor',
    blurb: 'Fastest transit times centered around our Commerce Parkway fabrication and staging facility.',
    systems: 'Hydronic & High-Efficiency Dual Fuel',
    towns: [
      { name: 'Metro Center', status: 'HQ Dispatch', arrival: 'Under 60 min', zips: ['75001', '75002'], aliases: ['metro', 'central metro'] },
      { name: 'Northwood', status: 'Same-Day', arrival: '60–90 min' },
      { name: 'Oakridge', status: 'Same-Day', arrival: '60–90 min', aliases: ['woodlawn'] },
    ],
  },
  {
    id: '02',
    title: 'Western Foothills & Valley',
    blurb: 'Specialized elevation service routes handling residential microclimates and estate configurations.',
    systems: 'Multi-Zone Inverter & Heat Pumps',
    towns: [
      { name: 'Westlake Hills', status: 'Priority Zone', arrival: '45–75 min', aliases: ['westlake'] },
      { name: 'Fairview Valley', status: 'Same-Day', arrival: '60–90 min', aliases: ['fairview'] },
      { name: 'Riverdale Corridor', status: 'Same-Day', arrival: '60–90 min', aliases: ['riverdale'] },
    ],
  },
  {
    id: '03',
    title: 'Northern & Eastern Ridges',
    blurb: 'Suburban acreage and established neighborhoods with dedicated weekday daily maintenance runs.',
    systems: 'Gas Furnace & Ductwork Retrofits',
    towns: [
      { name: 'Highland Park', status: 'Same-Day', arrival: '60–90 min' },
      { name: 'Summit Ridge', status: 'Priority Zone', arrival: '45–75 min' },
      { name: 'Cedar Creek Township', status: 'Standard Route', arrival: '90–120 min', aliases: ['cedar creek'] },
    ],
  },
];

export const allTowns = zones.flatMap((z) => z.towns.map((t) => ({ ...t, zone: z.title })));

export type LookupResult =
  | { kind: 'match'; town: (typeof allTowns)[number] }
  | { kind: 'unknown-zip'; zip: string }
  | { kind: 'none'; query: string };

/**
 * Looks a city or ZIP up against the towns we have real data for.
 * Anything we cannot confirm is reported honestly as "call to confirm".
 */
export function lookupServiceArea(raw: string): LookupResult {
  const query = raw.trim().toLowerCase();
  if (/^\d{5}$/.test(query)) {
    const hit = allTowns.find((t) => t.zips?.includes(query));
    return hit ? { kind: 'match', town: hit } : { kind: 'unknown-zip', zip: query };
  }
  const hit = allTowns.find(
    (t) => t.name.toLowerCase() === query || t.name.toLowerCase().includes(query) || t.aliases?.some((a) => a === query || query.includes(a)),
  );
  return hit && query.length >= 3 ? { kind: 'match', town: hit } : { kind: 'none', query: raw.trim() };
}
