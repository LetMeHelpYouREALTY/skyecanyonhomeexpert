import type { AmenityCategoryId } from './categories'
import { getCategoryById } from './categories'
import { SKYE_CANYON } from '@/lib/community/skye-canyon'

const SEARCH_RADIUS_M = 5000

// module scope: one request per category per page session
const cache = new Map<string, Promise<google.maps.places.Place[]>>()

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<google.maps.places.Place[]> {
  const category = getCategoryById(categoryId)
  let p = cache.get(categoryId)
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: { center, radius: SEARCH_RADIUS_M },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 10,
        rankPreference: 'POPULARITY' as any,
      })
      return places
    })()
    p.catch(() => cache.delete(categoryId))
    cache.set(categoryId, p)
  }
  return p
}

export function searchCategoryNearSkyeCanyon(categoryId: AmenityCategoryId) {
  return searchCategory(SKYE_CANYON.center, categoryId)
}
