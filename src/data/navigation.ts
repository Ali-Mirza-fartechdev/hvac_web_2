export interface NavItem {
  label: string;
  to: string;
  description?: string;
}

export const serviceNav: NavItem[] = [
  { label: 'All Services', to: '/services', description: 'Complete heating & cooling overview' },
  { label: 'AC Repair', to: '/services/ac-repair', description: 'Cooling diagnostics and repair' },
  { label: 'AC Installation & Replacement', to: '/services/ac-installation', description: 'Right-sized system upgrades' },
  { label: 'Heating & Furnace Services', to: '/services/heating', description: 'Furnace and heat pump care' },
  { label: 'HVAC Maintenance', to: '/services/maintenance', description: 'Seasonal tune-ups' },
];

export const mainNav: NavItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Financing', to: '/financing-specials' },
];

export const footerServices: NavItem[] = [
  { label: 'AC Repair & Diagnostics', to: '/services/ac-repair' },
  { label: 'AC Installation & Replacement', to: '/services/ac-installation' },
  { label: 'Furnace & Heating Repair', to: '/services/heating' },
  { label: 'Seasonal System Tune-ups', to: '/services/maintenance' },
  { label: 'All Services', to: '/services' },
];
