import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { SKYE_CANYON } from '@/lib/community/skye-canyon'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/community',
    '/community/amenities',
    '/community/skye-fitness',
    '/homeowner-essentials',
    '/homeowner-essentials/hoa-guide',
    '/homeowner-essentials/hvac',
    '/homeowner-essentials/landscaping',
    '/homeowner-essentials/pool-maintenance',
    '/community-living',
    '/community-living/restaurants',
    '/community-living/schools',
    '/community-living/things-to-do',
    '/community-living/mt-charleston',
    '/resident-resources',
    '/resident-resources/contractors',
    '/resident-resources/new-resident-guide',
    '/resident-resources/trash-schedule',
    '/resident-resources/pet-services',
    '/resident-resources/facebook-groups',
    '/events',
    '/paloma-collection',
    '/century-communities',
    SKYE_CANYON.nearbyAmenitiesPath,
  ]

  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency:
      path === '' ? 'weekly' : path === SKYE_CANYON.nearbyAmenitiesPath ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === SKYE_CANYON.nearbyAmenitiesPath ? 0.9 : 0.7,
  }))
}
