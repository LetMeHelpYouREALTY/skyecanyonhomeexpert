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
  directionsUrlForPlace,
  formatPlaceAddress,
  placesForCategory,
  type CuratedPlace,
} from '@/lib/amenities/places'
import { searchCategoryNearSkyeCanyon } from '@/lib/amenities/search-category'
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader'

const MAP_HEIGHT_CLASS = 'h-[min(480px,70vh)] min-h-[360px]'
const LIST_MIN_HEIGHT_CLASS = 'min-h-[120px]'

type MapPlace = {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  directionsUrl: string
  isCommunity?: boolean
}

type AmenityMapProps = {
  defaultCategory?: AmenityCategoryId
  compact?: boolean
}

function buildInfoWindowContent(place: MapPlace): HTMLElement {
  const root = document.createElement('div')
  root.style.maxWidth = '240px'
  root.style.padding = '4px 0'

  const title = document.createElement('strong')
  title.style.fontSize = '15px'
  title.textContent = place.name
  root.appendChild(title)

  const address = document.createElement('p')
  address.style.margin = '6px 0 8px'
  address.style.fontSize = '13px'
  address.style.lineHeight = '1.4'
  address.textContent = place.address
  root.appendChild(address)

  const link = document.createElement('a')
  link.href = place.directionsUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.style.color = '#0ea5e9'
  link.style.fontWeight = '600'
  link.textContent = 'Directions'
  root.appendChild(link)

  return root
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

function placeFromGooglePlace(p: google.maps.places.Place, index: number): MapPlace | null {
  if (!p.location) return null
  const { lat, lng } = p.location.toJSON()
  const displayName = p.displayName
  const name =
    typeof displayName === 'string'
      ? displayName
      : displayName && typeof displayName === 'object' && 'text' in displayName
        ? String((displayName as { text?: string }).text ?? 'Place')
        : 'Place'
  return {
    id: `place-${index}`,
    name,
    address: p.formattedAddress ?? 'Las Vegas, NV',
    lat,
    lng,
    directionsUrl:
      p.googleMapsURI ?? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
  }
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
  const [isSearching, setIsSearching] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [curatedList, setCuratedList] = useState<CuratedPlace[]>(() =>
    placesForCategory(defaultCategory)
  )

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
  const embedSrc = `https://www.google.com/maps?q=${SKYE_CANYON.center.lat},${SKYE_CANYON.center.lng}&z=14&output=embed`

  const enterFallback = useCallback(() => {
    setUseFallback(true)
    setMapReady(false)
    mapRef.current = null
    markersRef.current.forEach((m) => m.setMap(null))
    markersRef.current = []
    communityMarkerRef.current?.setMap(null)
    communityMarkerRef.current = null
    infoWindowRef.current?.close()
  }, [])

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback()
      setCuratedList(placesForCategory(activeCategory))
    }
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [activeCategory, enterFallback])

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

  const openInfoWindow = useCallback((map: google.maps.Map, marker: google.maps.Marker, place: MapPlace) => {
    const iw = infoWindowRef.current ?? new google.maps.InfoWindow()
    infoWindowRef.current = iw
    iw.setContent(buildInfoWindowContent(place))
    iw.open({ map, anchor: marker })
  }, [])

  const addCommunityMarker = useCallback(
    (map: google.maps.Map) => {
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
        openInfoWindow(map, marker, {
          id: 'community',
          name: SKYE_CANYON.name,
          address: `${SKYE_CANYON.address.streetAddress}, ${SKYE_CANYON.address.addressLocality}, ${SKYE_CANYON.address.addressRegion} ${SKYE_CANYON.address.postalCode}`,
          lat: position.lat,
          lng: position.lng,
          directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`,
          isCommunity: true,
        })
      })
      communityMarkerRef.current = marker
    },
    [openInfoWindow]
  )

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
          openInfoWindow(map, marker, place)
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
    [addCommunityMarker, clearMarkers, openInfoWindow]
  )

  const searchCategoryOnMap = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const fallbackPlaces = placesForCategory(categoryId)
      setIsSearching(true)

      try {
        const places = await searchCategoryNearSkyeCanyon(categoryId)
        const mapped = places
          .map((p, i) => placeFromGooglePlace(p, i))
          .filter((p): p is MapPlace => p != null)

        if (mapped.length === 0) {
          const curatedOnMap = fallbackPlaces
            .map(curatedToMapPlace)
            .filter((p): p is MapPlace => p != null)
          renderPlaces(map, curatedOnMap)
          setCuratedList(fallbackPlaces)
        } else {
          renderPlaces(map, mapped)
          setCuratedList([])
        }
      } catch {
        const curatedOnMap = fallbackPlaces
          .map(curatedToMapPlace)
          .filter((p): p is MapPlace => p != null)
        renderPlaces(map, curatedOnMap)
        setCuratedList(fallbackPlaces)
      } finally {
        setIsSearching(false)
      }
    },
    [renderPlaces]
  )

  useEffect(() => {
    if (!isVisible || initStartedRef.current) return

    if (!apiKey || mapsAuthFailed) {
      setUseFallback(true)
      setCuratedList(placesForCategory(activeCategory))
      return
    }

    initStartedRef.current = true
    let cancelled = false

    async function init() {
      try {
        await loadGoogleMaps(apiKey!)
        if (cancelled || mapsAuthFailed) {
          enterFallback()
          return
        }
        if (!mapHostRef.current) return

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
        await searchCategoryOnMap(map, activeCategory)
      } catch {
        if (!cancelled) {
          enterFallback()
          setCuratedList(placesForCategory(activeCategory))
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
  }, [isVisible, apiKey, compact, clearMarkers, enterFallback])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReady || useFallback || !apiKey) return
    void searchCategoryOnMap(map, activeCategory)
  }, [activeCategory, searchCategoryOnMap, useFallback, apiKey, mapReady])

  useEffect(() => {
    if (useFallback) {
      setCuratedList(placesForCategory(activeCategory))
    }
  }, [activeCategory, useFallback])

  const staticList = curatedList.length > 0 ? curatedList : placesForCategory(activeCategory)

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
                Showing map center and curated nearby places for{' '}
                {getCategoryById(activeCategory).label.toLowerCase()}.
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

      {!useFallback && curatedList.length > 0 && (
        <div
          className={`mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 ${LIST_MIN_HEIGHT_CLASS}`}
        >
          <p className="text-sm text-gray-600 mb-2">
            Curated {getCategoryById(activeCategory).label.toLowerCase()} near {SKYE_CANYON.name}:
          </p>
          <StaticPlaceList places={curatedList} />
        </div>
      )}
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
