import type { AmenityCategoryId } from './categories'

export type CuratedPlace = {
  name: string
  category: AmenityCategoryId
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
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
 * Verified nearby places only — names and addresses from public sources
 * (skyecanyon.com, grocer/hospital listings, CCSD school names on this site).
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
    note: 'Anchor at Skye Canyon Marketplace',
  },
  {
    name: 'Skye Canyon Marketplace',
    category: 'shopping',
    streetAddress: '9710 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Starbucks',
    category: 'cafes',
    streetAddress: '9710 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'CafeOrCoffeeShop',
    note: 'Inside Skye Canyon Marketplace',
  },
  {
    name: 'Aspire Coffee House',
    category: 'cafes',
    streetAddress: '10111 W Skye Canyon Park Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89166',
    schemaType: 'CafeOrCoffeeShop',
    note: 'At Skye Center',
  },
  {
    name: "Mimi's Cafe",
    category: 'restaurants',
    streetAddress: '7595 N Durango Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Restaurant',
  },
  {
    name: 'Market Grille Cafe',
    category: 'restaurants',
    streetAddress: '7595 N Durango Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Restaurant',
  },
  {
    name: 'Centennial Hills Hospital',
    category: 'healthcare',
    streetAddress: '6900 N Hualapai Way',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89149',
    schemaType: 'Hospital',
  },
  {
    name: 'William & Mary Scherbenbach Elementary School',
    category: 'schools',
    streetAddress: '7250 W Azure Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    schemaType: 'School',
  },
  {
    name: 'Arbor View High School',
    category: 'schools',
    streetAddress: '7362 W Azure Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    schemaType: 'School',
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
