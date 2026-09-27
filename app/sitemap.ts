import type { MetadataRoute } from 'next'
import { SKYE_CANYON } from '@/lib/community/skye-canyon'

const baseUrl = SKYE_CANYON.siteUrl

const staticRoutes = [
  '',
  '/community',
  '/community/amenities',
  '/community/skye-fitness',
  '/community-living',
  '/community-living/restaurants',
  '/community-living/schools',
  '/homeowner-essentials',
  '/homeowner-essentials/hoa-guide',
  '/homeowner-essentials/hvac',
  '/homeowner-essentials/landscaping',
  '/homeowner-essentials/pool-maintenance',
  '/resident-resources',
  '/century-communities',
  '/paloma-collection',
  SKYE_CANYON.nearbyAmenitiesPath,
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === SKYE_CANYON.nearbyAmenitiesPath ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === SKYE_CANYON.nearbyAmenitiesPath ? 0.9 : 0.7,
  }))
}
