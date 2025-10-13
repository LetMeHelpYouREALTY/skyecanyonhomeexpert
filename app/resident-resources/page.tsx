import Link from 'next/link'
import { Wrench, Users, Trash2, Heart, BookOpen, Facebook } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Resident Resources - Contractors, Guides & Community Info',
  description: 'Essential resources for Skye Canyon residents: contractor directory, new resident welcome guide, trash schedules, pet services, and neighborhood Facebook groups.',
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Skye Canyon Homeowner Network</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get exclusive access to local recommendations, community updates, and resident-only resources.
          </p>
          <a href="tel:702-222-1964" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300">
            Call: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}

