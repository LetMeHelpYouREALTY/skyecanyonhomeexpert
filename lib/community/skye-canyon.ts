/**
 * Skye Canyon community center — Skye Center / Home Finding Center
 * Source: https://skyecanyon.com/contact/ (10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166)
 * Coordinates: ~36.3130, -115.3163 (Skye Canyon Recreational Center / Skye Center area)
 */
export const SKYE_CANYON = {
  name: 'Skye Canyon',
  city: 'Las Vegas',
  state: 'NV',
  region: 'Northwest Las Vegas',
  center: {
    lat: 36.313,
    lng: -115.3163,
  },
  address: {
    streetAddress: '10111 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
  },
  siteUrl: 'https://skyecanyonhomeexpert.com',
  nearbyAmenitiesPath: '/nearby-amenities',
} as const

export const AGENT = {
  name: 'Dr. Jan Duffy',
  telephone: '702-222-1964',
  telephoneE164: '+1-702-222-1964',
  brokerage: 'BHHS Nevada Properties',
  license: 'S.0197614.LLC',
} as const
