import Link from 'next/link'
import { Trash2, Recycle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Trash & Recycling Schedule',
  description:
    'How Skye Canyon residents find trash and recycling pickup days, bulk item rules, and holiday schedule changes in northwest Las Vegas.',
}

export default function TrashSchedulePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="section-container">
          <Trash2 className="h-12 w-12 mb-4 text-orange-200" />
          <h1 className="text-5xl font-bold mb-4">Trash &amp; Recycling Schedule</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Collection days vary by street and hauler. Always confirm your pickup window rather than assuming a neighborhood-wide schedule.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-8 text-gray-700 text-lg">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Find your pickup day</h2>
            <p>
              Check welcome materials from closing, your HOA resident portal, or the sticker on your cart. Clark County and private haulers serving northwest Las Vegas publish address lookup tools online.
            </p>
          </div>
          <div className="card p-6 flex gap-4">
            <Recycle className="h-8 w-8 text-green-600 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Recycling &amp; bulk items</h2>
              <p>
                Separate glass, cardboard, and yard waste according to your hauler&apos;s guidelines. Bulk pickup usually requires advance scheduling—confirm weight limits and acceptable items before you leave materials at the curb.
              </p>
            </div>
          </div>
          <Link href="/resident-resources/new-resident-guide" className="btn-primary inline-block">
            New Resident Checklist
          </Link>
        </div>
      </section>
    </>
  )
}
