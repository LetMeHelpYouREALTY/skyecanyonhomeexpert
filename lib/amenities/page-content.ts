import { Metadata } from 'next'
import { SKYE_CANYON, AGENT } from '@/lib/community/skye-canyon'
import { CURATED_NEARBY_PLACES, formatPlaceAddress } from '@/lib/amenities/places'
import { NEARBY_AMENITIES_FAQ } from '@/lib/amenities/faq'

const pagePath = SKYE_CANYON.nearbyAmenitiesPath
const canonical = `${SKYE_CANYON.siteUrl}${pagePath}`

export const nearbyAmenitiesMetadata: Metadata = {
  title: `Nearby Amenities in ${SKYE_CANYON.name}, Las Vegas | Dining, Grocery & Healthcare`,
  description: `Interactive map and local guide to restaurants, grocery, parks, healthcare, schools, and shopping near ${SKYE_CANYON.name} in northwest Las Vegas. Verified places and drive-time context for buyers and residents.`,
  alternates: { canonical },
  openGraph: {
    title: `Nearby Amenities in ${SKYE_CANYON.name}, Las Vegas`,
    description: `Explore what is near ${SKYE_CANYON.name}: Skye Canyon Marketplace, dining, Centennial Hills Hospital, parks, and CCSD schools.`,
    url: canonical,
    type: 'website',
  },
}

export function buildNearbyAmenitiesJsonLd() {
  const communityPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: SKYE_CANYON.name,
    description: `Master-planned community in ${SKYE_CANYON.region}, ${SKYE_CANYON.city}, ${SKYE_CANYON.state}.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SKYE_CANYON.center.lat,
      longitude: SKYE_CANYON.center.lng,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SKYE_CANYON.address.streetAddress,
      addressLocality: SKYE_CANYON.address.addressLocality,
      addressRegion: SKYE_CANYON.address.addressRegion,
      postalCode: SKYE_CANYON.address.postalCode,
      addressCountry: 'US',
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SKYE_CANYON.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nearby Amenities',
        item: canonical,
      },
    ],
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: NEARBY_AMENITIES_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Featured places near ${SKYE_CANYON.name}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: place.streetAddress,
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
      },
    })),
  }

  const agent = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: AGENT.name,
    telephone: AGENT.telephoneE164,
    url: SKYE_CANYON.siteUrl,
    memberOf: {
      '@type': 'Organization',
      name: AGENT.brokerage,
    },
    areaServed: {
      '@type': 'Place',
      name: `${SKYE_CANYON.name}, ${SKYE_CANYON.city}, ${SKYE_CANYON.state}`,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SKYE_CANYON.center.lat,
        longitude: SKYE_CANYON.center.lng,
      },
    },
  }

  return [communityPlace, breadcrumb, faqPage, itemList, agent]
}

export function commuteSection() {
  return [
    {
      title: 'Las Vegas Strip',
      detail:
        'Approximately 25–35 minutes south via US-95 and I-15, depending on traffic and your village within Skye Canyon.',
    },
    {
      title: 'Harry Reid International Airport',
      detail:
        'Approximately 30–40 minutes via US-95 and the 215 Beltway—allow extra time during peak travel periods.',
    },
    {
      title: 'Downtown Summerlin',
      detail:
        'Approximately 15–25 minutes for additional shopping, dining, and services west of the 215.',
    },
    {
      title: 'Mount Charleston',
      detail:
        'Approximately 30–45 minutes to cooler mountain recreation—one of the reasons northwest Las Vegas residents choose Skye Canyon.',
    },
  ] as const
}

export { formatPlaceAddress, NEARBY_AMENITIES_FAQ, pagePath, canonical }
