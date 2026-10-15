/**
 * Single source of truth for business facts. Values come from the Figma file
 * "Heritage Craft - Template 2". Several of them are template placeholders —
 * see docs/CONTENT_TO_VERIFY.md before launch.
 */
export const business = {
  name: 'Heritage Craft',
  legalName: 'Heritage Craft HVAC',
  tagline: 'Heating & Cooling',
  foundedYear: 1998,
  phone: '(555) 382-4822',
  phoneHref: 'tel:+15553824822',
  email: 'service@heritagecrafthvac.com',
  license: '#HVAC-49201',
  headquarters: {
    street: '1420 Commerce Parkway, Suite 100',
    district: 'Central Metro District, State Lic. Zone 1',
  },
  hours: [
    { label: 'Mon – Fri', value: '7:00 AM – 7:00 PM' },
    { label: 'Saturday', value: '8:00 AM – 4:00 PM' },
  ],
  emergencyHours: { label: 'Emergency', value: '24/7 On-Call' },
  /** Shown in the utility bar of the header. */
  utilityHours: 'mon–sat: 7:00 am – 7:00 pm',
  utilityNotice: '24/7 Emergency Service Available',
  utilityRegion: 'Serving Greater Metro & Surrounding Counties',
  /** Example contact channels — replace with real ones before launch. */
  contactChannels: [
    { label: 'Scheduling & service', value: 'service@heritagecrafthvac.com', href: 'mailto:service@heritagecrafthvac.com' },
    { label: 'Dispatch line', value: '(555) 382-4822', href: 'tel:+15553824822' },
    { label: 'Text us', value: '(555) 382-4823', href: 'sms:+15553824823' },
    { label: 'Billing questions', value: 'billing@heritagecrafthvac.com', href: 'mailto:billing@heritagecrafthvac.com' },
  ],
  activeTerritories: 'Metro Center, Northwood, Oakridge, Highland Park, Westlake, Fairview',
} as const;

export const siteUrl: string =
  (import.meta.env?.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? 'https://www.example.com';
