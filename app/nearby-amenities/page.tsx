import Link from 'next/link'
import { Phone, MapPin, Shield } from 'lucide-react'
import WhatsNearbySection from '@/components/amenities/WhatsNearbySection'
import JsonLd from '@/components/seo/JsonLd'
import { AGENT, SKYE_CANYON } from '@/lib/community/skye-canyon'
import {
  buildNearbyAmenitiesJsonLd,
  commuteSection,
  formatPlaceAddress,
  NEARBY_AMENITIES_FAQ,
  nearbyAmenitiesMetadata,
} from '@/lib/amenities/page-content'
import { CURATED_NEARBY_PLACES } from '@/lib/amenities/places'

export const metadata = nearbyAmenitiesMetadata

export default function NearbyAmenitiesPage() {
  const jsonLd = buildNearbyAmenitiesJsonLd()
  const commutes = commuteSection()

  const diningPlaces = CURATED_NEARBY_PLACES.filter((p) =>
    ['restaurants', 'cafes'].includes(p.category)
  )
  const groceryPlaces = CURATED_NEARBY_PLACES.filter((p) => p.category === 'grocery')
  const healthcarePlaces = CURATED_NEARBY_PLACES.filter((p) =>
    ['healthcare', 'pharmacies'].includes(p.category)
  )
  const schoolPlaces = CURATED_NEARBY_PLACES.filter((p) => p.category === 'schools')
  const recreationPlaces = CURATED_NEARBY_PLACES.filter((p) =>
    ['parks', 'fitness', 'shopping'].includes(p.category)
  )

  return (
    <>
      {jsonLd.map((block, index) => (
        <JsonLd key={`nearby-amenities-ld-${index}`} data={block} />
      ))}

      <section className="bg-gradient-to-br from-skye-navy via-blue-800 to-skye-blue text-white py-16">
        <div className="section-container">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200 mb-6">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white font-medium">Nearby Amenities</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <MapPin className="h-12 w-12 text-skye-gold mb-4" aria-hidden />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nearby Amenities in {SKYE_CANYON.name}, Las Vegas
            </h1>
            <p className="text-xl text-blue-100">
              Hyperlocal map and verified guide to dining, grocery, healthcare, schools, and recreation
              around {SKYE_CANYON.region}—centered on Skye Center at{' '}
              {SKYE_CANYON.address.streetAddress}.
            </p>
          </div>
        </div>
      </section>

      <WhatsNearbySection
        title="Interactive Amenity Map"
        description="Filter by category to see places near Skye Canyon. The blue marker shows the community center; select any pin for directions."
        defaultCategory="grocery"
        className="py-16 bg-gray-50"
      />

      <section className="py-16 bg-white">
        <div className="section-container max-w-4xl prose prose-lg">
          <h2 className="text-3xl font-bold text-skye-navy not-prose">Dining &amp; Cafes</h2>
          <p>
            Skye Canyon Marketplace combines Smith&apos;s with multiple restaurants and cafes listed by
            the developer, including Starbucks on site. For sit-down options a few minutes away, Durango
            and Centennial Hills corridors include established names such as Mimi&apos;s Cafe and Market
            Grille Cafe.
          </p>
          <ul className="not-prose space-y-3">
            {diningPlaces.map((place) => (
              <li key={place.name} className="border-l-4 border-skye-blue pl-4">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-600">{formatPlaceAddress(place)}</span>
                {place.note ? <span className="block text-sm text-gray-500">{place.note}</span> : null}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-skye-navy not-prose mt-12">Grocery &amp; Daily Errands</h2>
          <p>
            Most Skye Canyon residents start weekly shopping at Smith&apos;s Marketplace inside the
            community. The center also hosts services listed on skyecanyon.com—salons, pet care, and
            professional offices—reducing cross-town trips for routine needs.
          </p>
          <ul className="not-prose space-y-3">
            {groceryPlaces.map((place) => (
              <li key={place.name} className="border-l-4 border-green-600 pl-4">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-600">{formatPlaceAddress(place)}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-skye-navy not-prose mt-12">Parks, Fitness &amp; Shopping</h2>
          <p>
            On-site recreation centers on Skye Canyon Park—Skye Center, Skye Fitness, trails, and pools—
            while Skye Canyon Marketplace handles retail and dining. Together they define the daily
            rhythm for active northwest Las Vegas living.
          </p>
          <ul className="not-prose space-y-3">
            {recreationPlaces.map((place) => (
              <li key={place.name} className="border-l-4 border-purple-600 pl-4">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-600">{formatPlaceAddress(place)}</span>
                {place.note ? <span className="block text-sm text-gray-500">{place.note}</span> : null}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-skye-navy not-prose mt-12">Healthcare</h2>
          <p>
            For hospital-level care, Centennial Hills Hospital in the 89149 area is the major northwest
            valley facility referenced by local guides serving Skye Canyon.
          </p>
          <ul className="not-prose space-y-3">
            {healthcarePlaces.map((place) => (
              <li key={place.name} className="border-l-4 border-red-500 pl-4">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-600">{formatPlaceAddress(place)}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-skye-navy not-prose mt-12">Schools</h2>
          <p>
            Families in Skye Canyon typically look to Clark County School District assignments. Schools
            commonly discussed for this area include William &amp; Mary Scherbenbach Elementary and Arbor
            View High School—always verify your zoned school with CCSD for your lot.
          </p>
          <ul className="not-prose space-y-3">
            {schoolPlaces.map((place) => (
              <li key={place.name} className="border-l-4 border-amber-500 pl-4">
                <strong>{place.name}</strong>
                <br />
                <span className="text-gray-600">{formatPlaceAddress(place)}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            <Link href="/community-living/schools" className="text-skye-blue font-semibold hover:underline">
              Read our Skye Canyon schools guide
            </Link>
          </p>

          <h2 className="text-3xl font-bold text-skye-navy not-prose mt-12">Commute &amp; Drive Times</h2>
          <p className="text-gray-600 text-base">
            Times below are approximate and vary with traffic, route, and construction.
          </p>
          <ul className="not-prose grid gap-4 md:grid-cols-2">
            {commutes.map((item) => (
              <li key={item.title} className="bg-gray-50 rounded-lg p-4">
                <strong className="text-gray-900">{item.title}</strong>
                <p className="text-gray-700 mt-1">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-desert-sand" aria-labelledby="nearby-faq-heading">
        <div className="section-container max-w-3xl">
          <h2 id="nearby-faq-heading" className="text-3xl font-bold text-skye-navy mb-8">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8">
            {NEARBY_AMENITIES_FAQ.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-bold text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container max-w-3xl text-center">
          <Shield className="h-12 w-12 mx-auto mb-4 text-skye-gold" aria-hidden />
          <h2 className="text-3xl font-bold mb-4">Your Skye Canyon Area Expert</h2>
          <p className="text-lg text-blue-100 mb-2">
            {AGENT.name} helps buyers and sellers navigate {SKYE_CANYON.name} and northwest Las Vegas with
            local market knowledge—homes, amenities, and lifestyle fit.
          </p>
          <p className="text-blue-200 mb-6">
            {AGENT.brokerage} · Nevada License {AGENT.license}
          </p>
          <a
            href={`tel:${AGENT.telephone}`}
            className="inline-flex items-center gap-2 bg-skye-gold text-skye-navy font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call {AGENT.telephone}
          </a>
          <p className="mt-6 text-sm text-blue-200">
            Prefer community HOA resources?{' '}
            <Link href="/homeowner-essentials/hoa-guide" className="underline hover:text-white">
              See the Skye Canyon HOA guide
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
