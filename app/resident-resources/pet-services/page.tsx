import Link from 'next/link'
import { Heart, Dog } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pet Services Near Skye Canyon',
  description:
    'Pet-friendly tips for Skye Canyon homeowners: leash rules in common areas, local vet and groomer search ideas, and dog parks in northwest Las Vegas.',
}

export default function PetServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-700 to-violet-700 text-white py-16">
        <div className="section-container">
          <Heart className="h-12 w-12 mb-4 text-purple-200" />
          <h1 className="text-5xl font-bold mb-4">Pet-Friendly Living in Skye Canyon</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Practical guidance for pet owners in a master-planned community—confirm breed and leash rules in your HOA documents.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-6 text-gray-700 text-lg">
          <div className="flex gap-4">
            <Dog className="h-8 w-8 text-purple-600 shrink-0" />
            <p>
              Keep pets leashed in common areas unless signage clearly allows otherwise. Carry waste bags on trails and in parks out of respect for neighbors.
            </p>
          </div>
          <p>
            For veterinarians, groomers, and pet supply stores, search northwest Las Vegas (89149 and nearby ZIP codes) and read recent reviews. Your neighbors and local social groups are often the best source for trusted providers.
          </p>
          <p>
            Before installing pet fencing or outdoor kennels, check architectural guidelines—many Skye Canyon villages require prior HOA approval.
          </p>
          <Link href="/homeowner-essentials/hoa-guide" className="btn-primary inline-block">
            HOA Rules Overview
          </Link>
        </div>
      </section>
    </>
  )
}
