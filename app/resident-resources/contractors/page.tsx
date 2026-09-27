import Link from 'next/link'
import { Wrench, ShieldCheck, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { AGENT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Skye Canyon Contractor Directory Guide',
  description:
    'How Skye Canyon homeowners can find licensed plumbers, electricians, landscapers, and HVAC pros—vetting tips and HOA-friendly project planning.',
}

export default function ContractorsPage() {
  const steps = [
    'Confirm whether your project needs HOA architectural approval before work begins.',
    'Verify Nevada contractor licensing and insurance for the trade you are hiring.',
    'Ask for recent references from homeowners in northwest Las Vegas or Skye Canyon.',
    'Get written estimates that spell out scope, timeline, and warranty terms.',
  ]

  const categories = [
    'Plumbing & water heaters',
    'Electrical & EV charger prep',
    'HVAC service & maintenance',
    'Desert landscaping & irrigation',
    'Pool service & equipment repair',
    'Roofing, stucco, and exterior paint',
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="section-container">
          <Wrench className="h-12 w-12 mb-4 text-blue-200" />
          <h1 className="text-5xl font-bold mb-4">Contractor Directory Guide</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Skye Canyon homeowners use this checklist to hire home service professionals safely—without relying on an unverified online list.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-skye-navy mb-6 flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-skye-blue" />
            Vetting checklist
          </h2>
          <ul className="space-y-4 mb-12">
            {steps.map((step) => (
              <li key={step} className="flex gap-3 text-gray-700">
                <span className="text-skye-blue font-bold">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-skye-navy mb-4">Common homeowner projects</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {categories.map((name) => (
              <div key={name} className="bg-gray-50 rounded-lg px-4 py-3 text-gray-800 font-medium">
                {name}
              </div>
            ))}
          </div>

          <p className="text-gray-600 mb-8">
            For deeper guides on desert landscaping, HVAC, and pool care in Skye Canyon, start with our homeowner essentials section.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/homeowner-essentials" className="btn-primary">
              Homeowner Essentials
            </Link>
            <Link href="/homeowner-essentials/hoa-guide" className="btn-secondary">
              HOA &amp; Approvals
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-skye-navy text-white">
        <div className="section-container text-center max-w-2xl">
          <Phone className="h-10 w-10 mx-auto mb-4 text-skye-gold" />
          <h2 className="text-2xl font-bold mb-3">Need a local referral?</h2>
          <p className="text-blue-100 mb-6">
            {AGENT.name} helps Skye Canyon buyers and homeowners navigate vendors and resale requirements.
          </p>
          <a href={`tel:${AGENT.phoneDisplay}`} className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300">
            Call {AGENT.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  )
}
