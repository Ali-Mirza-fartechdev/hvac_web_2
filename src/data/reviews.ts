export type ReviewCategory = 'ac-repair' | 'installation' | 'heating' | 'maintenance';

export interface Review {
  id: string;
  names: string;
  location: string;
  dateLabel: string;
  isoDate: string;
  category: ReviewCategory;
  jobTitle: string;
  quote: string;
  source: 'Verified Google Review' | 'Direct Homeowner Feedback';
  ticket: string;
}

/**
 * IMPORTANT: these are the representative entries that ship inside the Figma
 * template. Replace them with real, verified customer reviews before launch.
 */
export const reviews: Review[] = [
  {
    id: 'r1',
    names: 'David & Eleanor M.',
    location: 'Oakridge Corridor',
    dateLabel: 'October 14, 2024',
    isoDate: '2024-10-14',
    category: 'ac-repair',
    jobTitle: 'AC Diagnostic & Capacitor Replacement',
    quote:
      'Our upstairs condenser stopped cooling during a 92-degree afternoon. The technician arrived right within the two-hour window, wore clean shoe covers before stepping inside, and tested the dual run capacitor right in front of us. He showed us the voltage drop reading before discussing replacement options. No high-pressure sales, honest flat-rate pricing, and cold air was restored within an hour.',
    source: 'Verified Google Review',
    ticket: '#HC-8842-AC',
  },
  {
    id: 'r2',
    names: 'Marcus T.',
    location: 'Metro Center',
    dateLabel: 'September 28, 2024',
    isoDate: '2024-09-28',
    category: 'heating',
    jobTitle: 'Pre-Winter Furnace Safety Inspection',
    quote:
      'Scheduled a seasonal tune-up for an older gas furnace. Rather than immediately pushing for a new $9,000 unit like the last company did, the technician performed a thorough combustion analysis, vacuumed the burners, and gave us a realistic condition report on the heat exchanger. Truly appreciate the craftsman approach.',
    source: 'Direct Homeowner Feedback',
    ticket: '#HC-8719-HT',
  },
  {
    id: 'r3',
    names: 'Sarah & Robert K.',
    location: 'Highland Park',
    dateLabel: 'August 19, 2024',
    isoDate: '2024-08-19',
    category: 'installation',
    jobTitle: 'Full Heat Pump & Air Handler Replacement',
    quote:
      'Replacing an HVAC system is a major household investment. Heritage Craft provided a clear Manual J load calculation explaining why our previous unit was actually oversized. The installation crew placed protective drop cloths along the stairs, fabricated clean custom sheet metal transition ducting, and left our basement tidier than they found it.',
    source: 'Verified Google Review',
    ticket: '#HC-8541-INS',
  },
  {
    id: 'r4',
    names: 'Patricia G.',
    location: 'Westlake Hills',
    dateLabel: 'July 05, 2024',
    isoDate: '2024-07-05',
    category: 'maintenance',
    jobTitle: 'Seasonal Maintenance Agreement',
    quote:
      'Enrolled in their bi-annual maintenance plan after moving into our home. Both visits have been punctual, thorough, and clearly documented with written multi-point checklists. Knowing our system is checked before peak summer heat brings genuine peace of mind.',
    source: 'Verified Google Review',
    ticket: '#HC-8390-MN',
  },
  {
    id: 'r5',
    names: 'Greg L.',
    location: 'Fairview Valley',
    dateLabel: 'June 22, 2024',
    isoDate: '2024-06-22',
    category: 'ac-repair',
    jobTitle: 'Condensate Drain Line Clearing',
    quote:
      'Our drain line backed up into the safety float switch on a Saturday morning. Direct dispatch was courteous, and the field mechanic cleared the blockage, checked system static pressure, and tested the safety shut-off without surprise weekend surcharges.',
    source: 'Direct Homeowner Feedback',
    ticket: '#HC-8201-AC',
  },
  {
    id: 'r6',
    names: 'Elena V.',
    location: 'Summit Ridge',
    dateLabel: 'February 11, 2024',
    isoDate: '2024-02-11',
    category: 'heating',
    jobTitle: 'Blower Motor & Inducer Inspection',
    quote:
      'Thought our furnace was completely finished when it started making loud rattling sounds. The technician diagnosed a worn inducer assembly and fixed it same day with stocked truck parts. Honest tradesmanship at its best.',
    source: 'Verified Google Review',
    ticket: '#HC-7922-HT',
  },
  {
    id: 'r7',
    names: 'Jamal & Priya H.',
    location: 'Northwood',
    dateLabel: 'May 30, 2024',
    isoDate: '2024-05-30',
    category: 'installation',
    jobTitle: 'Central AC Replacement',
    quote:
      'We received two options with clear pricing and the technician explained the differences without pressure. The crew protected our floors, finished in a single day, and walked us through the thermostat before leaving. Example review: replace with a real one.',
    source: 'Direct Homeowner Feedback',
    ticket: '#HC-7655-IN',
  },
  {
    id: 'r8',
    names: 'Linda W.',
    location: 'Metro Center',
    dateLabel: 'April 12, 2024',
    isoDate: '2024-04-12',
    category: 'maintenance',
    jobTitle: 'Spring Cooling Tune-Up',
    quote:
      'Quick, tidy and thorough. He cleaned the coil, checked the electrical connections and sent me a written checklist afterwards. Example review: replace with a real one.',
    source: 'Verified Google Review',
    ticket: '#HC-7410-MN',
  },
  {
    id: 'r9',
    names: 'The Okafor Family',
    location: 'Riverdale Corridor',
    dateLabel: 'January 18, 2024',
    isoDate: '2024-01-18',
    category: 'heating',
    jobTitle: 'No-Heat Furnace Diagnosis',
    quote:
      'Our furnace quit on a freezing night. The technician found a failed ignitor, explained the repair cost up front and had heat back before bedtime. Example review: replace with a real one.',
    source: 'Verified Google Review',
    ticket: '#HC-7188-HT',
  },
  {
    id: 'r10',
    names: 'Brian S.',
    location: 'Oakridge',
    dateLabel: 'December 03, 2023',
    isoDate: '2023-12-03',
    category: 'ac-repair',
    jobTitle: 'Refrigerant Leak Inspection',
    quote:
      'Appreciated the honesty. He showed me where the leak was, gave me repair and replacement numbers side by side, and never pushed the expensive option. Example review: replace with a real one.',
    source: 'Direct Homeowner Feedback',
    ticket: '#HC-6932-AC',
  },
  {
    id: 'r11',
    names: 'Carmen & Luis R.',
    location: 'Westlake Hills',
    dateLabel: 'October 21, 2023',
    isoDate: '2023-10-21',
    category: 'installation',
    jobTitle: 'Heat Pump Upgrade',
    quote:
      'From estimate to startup the communication was clear. The installers were courteous and the system runs quietly. Example review: replace with a real one.',
    source: 'Verified Google Review',
    ticket: '#HC-6710-IN',
  },
  {
    id: 'r12',
    names: 'Dana P.',
    location: 'Highland Park',
    dateLabel: 'September 09, 2023',
    isoDate: '2023-09-09',
    category: 'maintenance',
    jobTitle: 'Pre-Winter Furnace Tune-Up',
    quote:
      'On time, careful with the house, and explained every reading. I now book my fall check-up every year. Example review: replace with a real one.',
    source: 'Direct Homeowner Feedback',
    ticket: '#HC-6544-MN',
  },
];

export const reviewFilters: { key: 'all' | ReviewCategory; label: string }[] = [
  { key: 'all', label: 'All Reviews' },
  { key: 'ac-repair', label: 'AC Repair' },
  { key: 'installation', label: 'Installation & Replacement' },
  { key: 'heating', label: 'Heating' },
  { key: 'maintenance', label: 'Maintenance' },
];

/** Pull-quotes used on other pages (copied from the Figma frames). */
export const featuredQuotes = {
  home: {
    quote:
      'Heritage Craft arrived within two hours when our AC failed in the middle of July. Mark diagnosed a faulty capacitor in twenty minutes, explained the pricing clearly before touching anything, and had our home cool again before dinner. Outstanding, honest service.',
    name: 'David & Sarah M.',
    meta: 'Oakridge Homeowners • Verified Google Review',
  },
  acRepair: {
    quote:
      'Our AC stopped cooling during a 95-degree afternoon. Heritage Craft sent Mark out that same evening. He tested the electrical disconnect, found a blown dual capacitor, showed me the meter reading, and had the cold air flowing again within 45 minutes. Upfront flat-rate price, no surprises.',
    name: 'Tom & Jennifer R.',
    meta: 'Highland Park Homeowners • Verified Google Review',
  },
  about: {
    quote:
      'The technician took the time to show me exactly what had failed on our blower motor and walked through the repair costs before doing anything. No high-pressure upselling, just honest craftsmanship and respect for our home.',
    name: 'Local Homeowner Review [Placeholder]',
    meta: 'Verified Residential Service Customer',
  },
} as const;
