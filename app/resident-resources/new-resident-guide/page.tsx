import Link from 'next/link'
import { BookOpen, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Resident Guide for Skye Canyon',
  description:
    'Move-in checklist for new Skye Canyon homeowners: HOA documents, utilities, mail, trash, amenities, and northwest Las Vegas essentials.',
}

const checklist = [
  'Collect closing documents, warranty information, and any HOA resale package from escrow.',
  'Register with HOA management and note architectural approval rules before exterior changes.',
  'Set up electricity, gas, water, internet, and security monitoring for your address.',
  'Update your mailing address and file a change of address with USPS.',
  'Locate trash and recycling pickup days for your street (confirm with your hauler or HOA notice).',
  'Tour community amenities and save hours for pools, fitness, and parks.',
  'Introduce yourself to neighbors and bookmark local emergency numbers.',
]

export default function NewResidentGuidePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-16">
        <div className="section-container">
          <BookOpen className="h-12 w-12 mb-4 text-green-200" />
          <h1 className="text-5xl font-bold mb-4">New Resident Welcome Guide</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            A move-in checklist for homeowners new to Skye Canyon—confirm every detail with your HOA and service providers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl">
          <ul className="space-y-5">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/homeowner-essentials/hoa-guide" className="btn-primary">
              HOA Guide
            </Link>
            <Link href="/resident-resources/trash-schedule" className="btn-secondary">
              Trash &amp; Recycling
            </Link>
            <Link href="/community/amenities" className="btn-secondary">
              Community Amenities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
