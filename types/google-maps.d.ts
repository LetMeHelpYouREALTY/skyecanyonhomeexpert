/* Minimal typings for Maps JS + Places (New) used by AmenityMap */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts: MapOptions)
    setCenter(latLng: LatLng | LatLngLiteral): void
    setZoom(zoom: number): void
    fitBounds(bounds: LatLngBounds): void
  }

  class Marker {
    constructor(opts?: MarkerOptions)
    setMap(map: Map | null): void
    addListener(event: string, handler: () => void): void
  }

  class InfoWindow {
    constructor(opts?: InfoWindowOptions)
    setContent(content: string): void
    open(opts: { map: Map; anchor?: Marker }): void
    close(): void
  }

  class LatLngBounds {
    extend(point: LatLng | LatLngLiteral): void
  }

  class Size {
    constructor(width: number, height: number)
  }

  class Point {
    constructor(x: number, y: number)
  }

  class PlacesService {
    constructor(map: Map)
    nearbySearch(
      request: {
        location: LatLng | LatLngLiteral
        radius: number
        type?: string
      },
      callback: (results: PlaceResult[] | null, status: PlacesServiceStatus) => void
    ): void
  }

  enum PlacesServiceStatus {
    OK = 'OK',
  }

  interface MapOptions {
    center?: LatLngLiteral
    zoom?: number
    mapId?: string
    mapTypeControl?: boolean
    streetViewControl?: boolean
    fullscreenControl?: boolean
  }

  interface MarkerOptions {
    map?: Map
    position?: LatLngLiteral
    title?: string
    icon?: { url: string; scaledSize?: Size; anchor?: Point }
  }

  interface InfoWindowOptions {
    content?: string
  }

  interface PlaceResult {
    name?: string
    vicinity?: string
    formatted_address?: string
    geometry?: { location?: LatLng }
    rating?: number
    place_id?: string
  }

  interface LatLng {
    lat(): number
    lng(): number
  }

  interface LatLngLiteral {
    lat: number
    lng: number
  }

  interface PlacesLibrary {
    Place: typeof Place
  }

  class Place {
    static searchNearby(request: {
      fields: string[]
      locationRestriction: { center: LatLngLiteral; radius: number }
      includedPrimaryTypes?: string[]
      maxResultCount?: number
    }): Promise<{ places: PlaceInstance[] }>
  }

  interface PlaceInstance {
    displayName?: string
    formattedAddress?: string
    location?: LatLngLiteral
    rating?: number
    googleMapsURI?: string
  }

  function importLibrary(name: 'maps'): Promise<{ Map: typeof Map }>
  function importLibrary(name: 'places'): Promise<PlacesLibrary>
  function importLibrary(name: 'marker'): Promise<{ Marker: typeof Marker }>
}

declare const google: {
  maps: typeof google.maps
}

interface Window {
  google?: typeof google
}
