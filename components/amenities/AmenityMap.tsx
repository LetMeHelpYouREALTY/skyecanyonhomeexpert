'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { MapPin, Navigation } from 'lucide-react'
import { SKYE_CANYON } from '@/lib/community/skye-canyon'
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  getCategoryById,
} from '@/lib/amenities/categories'
import {
  CURATED_NEARBY_PLACES,
  directionsUrlForPlace,
  formatPlaceAddress,
  placesForCategory,
  type CuratedPlace,
} from '@/lib/amenities/places'

const MAP_HEIGHT_CLASS = 'h-[min(480px,70vh)] min-h-[360px]'
const SEARCH_RADIUS_M = 8000

type MapPlace = {
  id: string
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
  directionsUrl: string
  isCommunity?: boolean
}

type AmenityMapProps = {
  defaultCategory?: AmenityCategoryId
  compact?: boolean
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function infoWindowHtml(place: MapPlace): string {
  const ratingLine =
    place.rating != null
      ? `<p style="margin:4px 0;font-size:14px;">Rating: ${place.rating.toFixed(1)}</p>`
      : ''
  return `<div style="max-width:240px;padding:4px 0;">
    <strong style="font-size:15px;">${escapeHtml(place.name)}</strong>
    ${ratingLine}
    <p style="margin:6px 0 8px;font-size:13px;line-height:1.4;">${escapeHtml(place.address)}</p>
    <a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9;font-weight:600;">Directions</a>
  </div>`
}

function curatedToMapPlace(place: CuratedPlace, index: number): MapPlace | null {
  if (place.lat == null || place.lng == null) {
    return null
  }
  return {
    id: `curated-${index}`,
    name: place.name,
    address: formatPlaceAddress(place),
    lat: place.lat,
    lng: place.lng,
    directionsUrl: directionsUrlForPlace(place),
  }
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('No window'))
  }
  if (typeof window.google !== 'undefined' && window.google.maps) {
    return Promise.resolve()
  }

  const existing = document.querySelector<HTMLScriptElement>('script[data-amenity-map-loader]')
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Maps script failed')))
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.dataset.amenityMapLoader = 'true'
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Google Maps'))
    document.head.appendChild(script)
  })
}

export default function AmenityMap({
  defaultCategory = 'parks',
  compact = false,
}: AmenityMapProps) {
  const mapRegionId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const mapHostRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const communityMarkerRef = useRef<google.maps.Marker | null>(null)
  const initStartedRef = useRef(false)

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(defaultCategory)
  const [isVisible, setIsVisible] = useState(false)
  const [useFallback, setUseFallback] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [mapReady, setMapReady] = useState(false)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px', threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null))
    markersRef.current = []
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    infoWindowRef.current?.close()
  }, [])

  const addCommunityMarker = useCallback((map: google.maps.Map) => {
    const position = SKYE_CANYON.center
    const marker = new google.maps.Marker({
      map,
      position,
      title: SKYE_CANYON.name,
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: new google.maps.Size(42, 42),
      },
    })
    marker.addListener('click', () => {
      const iw = infoWindowRef.current ?? new google.maps.InfoWindow()
      infoWindowRef.current = iw
      iw.setContent(
        infoWindowHtml({
          id: 'community',
          name: SKYE_CANYON.name,
          address: `${SKYE_CANYON.address.streetAddress}, ${SKYE_CANYON.address.addressLocality}, ${SKYE_CANYON.address.addressRegion} ${SKYE_CANYON.address.postalCode}`,
          lat: position.lat,
          lng: position.lng,
          directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`,
          isCommunity: true,
        })
      )
      iw.open({ map, anchor: marker })
    })
    communityMarkerRef.current = marker
  }, [])

  const renderPlaces = useCallback(
    (map: google.maps.Map, places: MapPlace[]) => {
      clearMarkers()
      addCommunityMarker(map)

      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        })
        marker.addListener('click', () => {
          const iw = infoWindowRef.current ?? new google.maps.InfoWindow()
          infoWindowRef.current = iw
          iw.setContent(infoWindowHtml(place))
          iw.open({ map, anchor: marker })
        })
        markersRef.current.push(marker)
      })

      const bounds = new google.maps.LatLngBounds()
      bounds.extend(SKYE_CANYON.center)
      places.forEach((p) => bounds.extend({ lat: p.lat, lng: p.lng }))
      if (places.length > 0) {
        map.fitBounds(bounds)
      } else {
        map.setCenter(SKYE_CANYON.center)
        map.setZoom(13)
      }
    },
    [addCommunityMarker, clearMarkers]
  )

  const searchCategory = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = getCategoryById(categoryId)
      setIsSearching(true)
      setLoadError(null)

      const fallbackPlaces = placesForCategory(categoryId)
        .map(curatedToMapPlace)
        .filter((p): p is MapPlace => p != null)

      try {
        const { Place } = await google.maps.importLibrary('places')
        const { places } = await Place.searchNearby({
          fields: ['displayName', 'location', 'formattedAddress', 'rating', 'googleMapsURI'],
          locationRestriction: {
            center: SKYE_CANYON.center,
            radius: SEARCH_RADIUS_M,
          },
          includedPrimaryTypes: category.primaryTypes,
          maxResultCount: 15,
        })

        const mapped: MapPlace[] = places
          .filter((p) => p.location)
          .map((p, i) => {
            const lat = p.location!.lat
            const lng = p.location!.lng
            return {
              id: `place-${i}`,
              name: p.displayName ?? 'Place',
              address: p.formattedAddress ?? 'Las Vegas, NV',
              rating: p.rating,
              lat,
              lng,
              directionsUrl:
                p.googleMapsURI ??
                `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
            }
          })

        if (mapped.length === 0 && fallbackPlaces.length > 0) {
          renderPlaces(map, fallbackPlaces)
        } else {
          renderPlaces(map, mapped)
        }
      } catch {
        try {
          const service = new google.maps.PlacesService(map)
          const legacyType = category.legacyTypes[0]
          await new Promise<void>((resolve) => {
            service.nearbySearch(
              {
                location: SKYE_CANYON.center,
                radius: SEARCH_RADIUS_M,
                type: legacyType,
              },
              (results, status) => {
                if (status === google.maps.PlacesServiceStatus.OK && results?.length) {
                  const mapped: MapPlace[] = results
                    .filter((r) => r.geometry?.location)
                    .slice(0, 15)
                    .map((r, i) => {
                      const lat = r.geometry!.location!.lat()
                      const lng = r.geometry!.location!.lng()
                      return {
                        id: `legacy-${i}`,
                        name: r.name ?? 'Place',
                        address: r.vicinity ?? r.formatted_address ?? 'Las Vegas, NV',
                        rating: r.rating,
                        lat,
                        lng,
                        directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
                      }
                    })
                  renderPlaces(map, mapped)
                } else if (fallbackPlaces.length > 0) {
                  renderPlaces(map, fallbackPlaces)
                } else {
                  renderPlaces(map, [])
                }
                resolve()
              }
            )
          })
        } catch {
          if (fallbackPlaces.length > 0) {
            renderPlaces(map, fallbackPlaces)
          } else {
            renderPlaces(map, [])
          }
        }
      } finally {
        setIsSearching(false)
      }
    },
    [renderPlaces]
  )

  useEffect(() => {
    if (!isVisible || initStartedRef.current) return

    if (!apiKey) {
      setUseFallback(true)
      return
    }

    initStartedRef.current = true
    let cancelled = false

    async function init() {
      try {
        await loadGoogleMapsScript(apiKey!)
        if (cancelled || !mapHostRef.current) return

        const { Map } = await google.maps.importLibrary('maps')
        const map = new Map(mapHostRef.current, {
          center: SKYE_CANYON.center,
          zoom: 13,
          mapTypeControl: !compact,
          streetViewControl: false,
          fullscreenControl: !compact,
          ...(mapId ? { mapId } : {}),
        })
        mapRef.current = map
        infoWindowRef.current = new google.maps.InfoWindow()
        setMapReady(true)
        await searchCategory(map, activeCategory)
      } catch (err) {
        if (!cancelled) {
          setUseFallback(true)
          setLoadError(err instanceof Error ? err.message : 'Map unavailable')
        }
      }
    }

    void init()
    return () => {
      cancelled = true
      clearMarkers()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when visible
  }, [isVisible, apiKey, compact, clearMarkers])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReady || useFallback || !apiKey) return
    void searchCategory(map, activeCategory)
  }, [activeCategory, searchCategory, useFallback, apiKey, mapReady])

  const staticList = placesForCategory(activeCategory)
  const embedSrc = `https://www.google.com/maps?q=${SKYE_CANYON.center.lat},${SKYE_CANYON.center.lng}&z=14&output=embed`

  return (
    <div ref={containerRef} className="w-full">
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2 mb-4"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = cat.id === activeCategory
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`${mapRegionId}-tab-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${mapRegionId}-panel`}
              aria-label={`Show ${cat.label} near ${SKYE_CANYON.name}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-skye-blue focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-skye-navy text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <div
        id={`${mapRegionId}-panel`}
        role="tabpanel"
        aria-labelledby={`${mapRegionId}-tab-${activeCategory}`}
        aria-busy={isSearching}
        className={`relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg ${MAP_HEIGHT_CLASS}`}
      >
        {useFallback ? (
          <>
            <iframe
              title={`Map of ${SKYE_CANYON.name}, ${SKYE_CANYON.city}`}
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 max-h-[40%] overflow-y-auto">
              <p className="text-sm text-gray-600 mb-2">
                Interactive place search requires a Google Maps API key. Showing map center and
                curated nearby places for {getCategoryById(activeCategory).label.toLowerCase()}.
                {loadError ? ` (${loadError})` : null}
              </p>
              <StaticPlaceList places={staticList} />
            </div>
          </>
        ) : (
          <>
            <div
              ref={mapHostRef}
              className="absolute inset-0 h-full w-full"
              aria-label={`Interactive map of amenities near ${SKYE_CANYON.name}`}
            />
            {!isVisible && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
                Loading map…
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function StaticPlaceList({ places }: { places: CuratedPlace[] }) {
  if (places.length === 0) {
    return (
      <p className="text-sm text-gray-600">
        See the{' '}
        <Link href={SKYE_CANYON.nearbyAmenitiesPath} className="text-skye-blue font-semibold">
          nearby amenities page
        </Link>{' '}
        for verified places in this category.
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {places.map((place) => (
        <li key={place.name} className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 text-skye-blue shrink-0 mt-0.5" aria-hidden />
          <div>
            <span className="font-semibold text-gray-900">{place.name}</span>
            <p className="text-gray-600">{formatPlaceAddress(place)}</p>
            <a
              href={directionsUrlForPlace(place)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-skye-blue font-medium hover:underline mt-1"
            >
              <Navigation className="h-3 w-3" aria-hidden />
              Directions
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
