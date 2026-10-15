export interface Hotspot {
  id: string;
  label: string;
  detail: string;
  position: [number, number, number];
}

export const hotspots: Hotspot[] = [
  { id: 'fan', label: 'Fan motor & blade', detail: 'Bearing play, blade clearance and motor amperage are checked here.', position: [0, 1.28, 0] },
  { id: 'coil', label: 'Condenser coil', detail: 'Coil cleanliness and heat transfer are evaluated on the outer fins.', position: [0.95, 0.55, 0.4] },
  { id: 'cap', label: 'Capacitor & contactor', detail: 'Dual run capacitor microfarads and contactor point condition are tested at the control panel.', position: [-0.95, 0.35, 0.55] },
  { id: 'lines', label: 'Refrigerant line set', detail: 'Line temperatures feed the subcooling and superheat readings.', position: [-0.2, 0.15, -1.0] },
];
