import Link from 'next/link'
import {
  Wrench,
  Users,
  Trash2,
  Heart,
  BookOpen,
  Facebook,
  MapPin,
  Building2,
  Trees,
} from 'lucide-react'
import type { Metadata } from 'next'

const LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation?utm_source=skyecanyonhomeexpert.com&utm_medium=website&utm_content=buy-sell-block'

export const metadata: Metadata = {
  alternates: { canonical: '/resident-resources' },
  title: 'Skye Canyon Resident Resources | Dr. Jan Duffy',
  description:
    'Skye Center, Skye Canyon Park, and HOA info for Skye Canyon homeowners (89166). Contractor guides, schools link, buy/sell resources. Dr. Jan Duffy.',
  keywords: 'Skye Canyon contractors, best contractors Skye Canyon, Skye Canyon community resources',
}

export default function ResidentResourcesPage() {
  const resources = [
    {
      icon: Wrench,
      title: 'Contractor Directory',
      description: 'Trusted local plumbers, electricians, landscapers, and home service professionals serving Skye Canyon.',
      href: '/resident-resources/contractors',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: BookOpen,
      title: 'New Resident Welcome Guide',
      description: 'Everything new homeowners need to know about living in Skye Canyon—from utilities to amenities.',
      href: '/resident-resources/new-resident-guide',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Trash2,
      title: 'Trash & Recycling Schedule',
      description: 'Collection days, guidelines, bulk pickup information, and recycling tips for Skye Canyon residents.',
      href: '/resident-resources/trash-schedule',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Heart,
      title: 'Pet-Friendly Amenities & Services',
      description: 'Dog parks, veterinarians, groomers, pet stores, and pet-friendly areas in and around Skye Canyon.',
      href: '/resident-resources/pet-services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Facebook,
      title: 'Neighborhood Facebook Groups',
      description: 'Connect with neighbors, stay informed, and join the Skye Canyon online community.',
      href: '/resident-resources/facebook-groups',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Users,
      title: 'Community Association Info',
      description: 'HOA contacts, board meetings, community guidelines, and association resources.',
      href: '/homeowner-essentials/hoa-guide',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Users className="h-12 w-12 mb-4 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">Resident Resources</h1>
            <p className="text-xl text-blue-100">
              Everything you need as a Skye Canyon homeowner—from trusted contractors to community connections.
            </p>
          </div>
        </div>
      </section>

      {/* Community facts (sourced skyecanyon.com, verified 2026-11-09) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold text-skye-navy mb-6">Skye Canyon at a glance</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Skye Canyon is a 1,000-acre master-planned community in northwest Las Vegas (ZIP 89166).
            Community programming is centered at{' '}
            <strong>10111 W Skye Canyon Park Dr, Las Vegas, NV 89166</strong> — the address for the
            Skye Center and adjacent Skye Canyon Park.
          </p>
          <ul className="space-y-6 text-gray-700">
            <li className="flex gap-4">
              <Trees className="h-8 w-8 shrink-0 text-green-600" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Skye Canyon Park</h3>
                <p className="leading-relaxed">
                  A 15-acre neighborhood park with open space, trails, and recreation areas for
                  residents.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Building2 className="h-8 w-8 shrink-0 text-amber-600" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Skye Center</h3>
                <p className="leading-relaxed">
                  The 8,142 sq ft community hub at Skye Canyon Park Drive — events, gathering
                  space, and resident services.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Users className="h-8 w-8 shrink-0 text-teal-600" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Community association</h3>
                <p className="leading-relaxed">
                  The <strong>Skye Canyon Community Association</strong> is managed by{' '}
                  <strong>Olympia Management Services</strong>. For association and amenity
                  questions, use the{' '}
                  <a
                    href="https://skyecanyon.com/contact"
                    className="text-skye-blue font-semibold hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Skye Canyon contact page
                  </a>
                  .
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="h-8 w-8 shrink-0 text-blue-600" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Schools</h3>
                <p className="leading-relaxed">
                  CCSD school names and grade spans for the Skye Canyon area are listed on our{' '}
                  <Link href="/community-living/schools" className="text-skye-blue font-semibold hover:underline">
                    schools guide
                  </Link>
                  .
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">Your Complete Resource Hub</h2>
            <p className="text-xl text-gray-600">Everything you need to know about living in Skye Canyon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="p-8">
                  <div className={`${resource.bgColor} ${resource.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-skye-blue transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="text-skye-blue font-semibold flex items-center">
                    Access Resource <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured: Most Popular Resources */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Most Popular Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Wrench className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contractor Directory</h3>
              <p className="text-gray-600 mb-4">Find trusted local professionals</p>
              <Link href="/resident-resources/contractors" className="text-blue-600 font-semibold hover:text-blue-700">
                Browse Contractors →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">New Resident Guide</h3>
              <p className="text-gray-600 mb-4">Essential info for new homeowners</p>
              <Link href="/resident-resources/new-resident-guide" className="text-green-600 font-semibold hover:text-green-700">
                Read Guide →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Facebook className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook Groups</h3>
              <p className="text-gray-600 mb-4">Connect with your neighbors</p>
              <Link href="/resident-resources/facebook-groups" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Join Groups →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buy / sell — sister sites + listing consultation */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-skye-navy mb-4">Buying or selling in Skye Canyon?</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            This site is a homeowner and community guide. For MLS listings, agent representation, and
            listing consultations, use the resources below.
          </p>
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-left sm:text-center">
            <li>
              <a
                href="https://www.skyecanyonhomesforsale.com"
                className="inline-block px-6 py-3 rounded-lg border-2 border-skye-blue text-skye-blue font-semibold hover:bg-blue-50 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Skye Canyon homes for sale
              </a>
            </li>
            <li>
              <a
                href="https://skyecanyonrealtor.com"
                className="inline-block px-6 py-3 rounded-lg border-2 border-skye-blue text-skye-blue font-semibold hover:bg-blue-50 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Skye Canyon REALTOR®
              </a>
            </li>
            <li>
              <a
                href={LISTING_CONSULTATION_URL}
                className="inline-block px-6 py-3 rounded-lg bg-skye-blue text-white font-semibold hover:bg-blue-800 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Schedule a listing consultation
                <span className="sr-only"> (opens Calendly in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Skye Canyon Homeowner Network</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get exclusive access to local recommendations, community updates, and resident-only resources.
          </p>
          <a href="tel:702-500-1955" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300">
            Call: 702-500-1955
          </a>
        </div>
      </section>
    </>
  )
}

