import type { AmenityCategoryId } from './categories'

export type CuratedPlace = {
  name: string
  category: AmenityCategoryId
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  /** Official source used to verify name and address */
  sourceUrl: string
  /** Schema.org @type */
  schemaType:
    | 'Place'
    | 'Restaurant'
    | 'CafeOrCoffeeShop'
    | 'GroceryStore'
    | 'Supermarket'
    | 'Park'
    | 'Hospital'
    | 'Pharmacy'
    | 'ShoppingCenter'
    | 'GolfCourse'
    | 'School'
    | 'ExerciseGym'
  lat?: number
  lng?: number
  note?: string
}

/**
 * Verified nearby places — name and address checked against official sources (see sourceUrl).
 */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Skye Center',
    category: 'parks',
    streetAddress: '10111 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'Place',
    sourceUrl: 'https://skyecanyon.com/about/',
    lat: 36.313,
    lng: -115.3163,
    note: 'Community hub at Skye Canyon Park',
  },
  {
    name: 'Skye Fitness',
    category: 'fitness',
    streetAddress: '10111 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'ExerciseGym',
    sourceUrl: 'https://skyecanyon.com/about/',
    note: 'On-site fitness center and pool',
  },
  {
    name: "Smith's Marketplace",
    category: 'grocery',
    streetAddress: '9710 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'Supermarket',
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/smiths-marketplace/706/00367',
    lat: 36.3164,
    lng: -115.308,
    note: 'Anchor grocery at Skye Canyon Marketplace',
  },
  {
    name: 'Skye Canyon Marketplace',
    category: 'shopping',
    streetAddress: '9700 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://skyecanyon.com/about/',
    lat: 36.3145,
    lng: -115.3074,
  },
  {
    name: 'Starbucks',
    category: 'cafes',
    streetAddress: '9710 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'CafeOrCoffeeShop',
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/smiths-marketplace/706/00367',
    note: 'Inside Smith\'s Marketplace at Skye Canyon',
  },
  {
    name: 'Aspire Coffee House',
    category: 'cafes',
    streetAddress: '10111 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'CafeOrCoffeeShop',
    sourceUrl: 'https://aspirecoffeehouse.com/',
    note: 'At Skye Center',
  },
  {
    name: "Mimi's Cafe",
    category: 'restaurants',
    streetAddress: '6760 N Durango Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Restaurant',
    sourceUrl: 'https://www.mimiscafe.com/locations/n-las-vegas/',
    lat: 36.283,
    lng: -115.2874,
  },
  {
    name: 'Market Grille Cafe',
    category: 'restaurants',
    streetAddress: '7070 N Durango Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Restaurant',
    sourceUrl: 'https://www.marketgrillecafe.com/',
    lat: 36.2855,
    lng: -115.287,
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    streetAddress: '6900 N Durango Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/about/contact-us',
    lat: 36.2867,
    lng: -115.2861,
  },
  {
    name: 'William and Mary Scherkenbach Elementary School',
    category: 'schools',
    streetAddress: '9371 Iron Mountain Road',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89143',
    schemaType: 'School',
    sourceUrl: 'https://williamandmaryscherkenbaches.ccsd.net/contact-us',
  },
  {
    name: 'Arbor View High School',
    category: 'schools',
    streetAddress: '7500 Whispering Sands Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89131',
    schemaType: 'School',
    sourceUrl: 'https://www.arborviewhs.org/apps/contact/',
  },
]

export function placesForCategory(categoryId: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === categoryId)
}

export function formatPlaceAddress(place: CuratedPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`
}

export function directionsUrlForPlace(place: CuratedPlace): string {
  if (place.lat != null && place.lng != null) {
    return `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(formatPlaceAddress(place))}`
}
