import Link from 'next/link'
import { MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import { SKYE_CANYON } from '@/lib/community/skye-canyon'
import type { AmenityCategoryId } from '@/lib/amenities/categories'

const AmenityMap = dynamic(() => import('@/components/amenities/AmenityMap'), {
  ssr: false,
  loading: () => (
    <div
      className="h-[min(480px,70vh)] min-h-[360px] w-full rounded-xl bg-gray-100 animate-pulse flex items-center justify-center text-gray-500"
      aria-hidden
    >
      Loading map…
    </div>
  ),
})

type WhatsNearbySectionProps = {
  title?: string
  description?: string
  defaultCategory?: AmenityCategoryId
  compact?: boolean
  className?: string
}

export default function WhatsNearbySection({
  title = `Life Near ${SKYE_CANYON.name}`,
  description = `Explore restaurants, grocery, parks, healthcare, and more within a short drive of ${SKYE_CANYON.name} in ${SKYE_CANYON.region}.`,
  defaultCategory = 'grocery',
  compact = false,
  className = 'py-16 bg-white',
}: WhatsNearbySectionProps) {
  return (
    <section className={className} aria-labelledby="whats-nearby-heading">
      <div className="section-container">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-skye-blue mb-3">
            <MapPin className="h-6 w-6" aria-hidden />
            <span className="font-semibold uppercase tracking-wide text-sm">What&apos;s Nearby</span>
          </div>
          <h2 id="whats-nearby-heading" className="text-3xl md:text-4xl font-bold text-skye-navy mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        <AmenityMap defaultCategory={defaultCategory} compact={compact} />

        <p className="mt-6 text-center">
          <Link
            href={SKYE_CANYON.nearbyAmenitiesPath}
            className="text-skye-blue font-semibold hover:underline inline-flex items-center gap-1"
          >
            View full nearby amenities guide
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
    </section>
  )
}
