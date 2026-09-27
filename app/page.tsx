import Link from 'next/link'
import { Home, Calendar, Wrench, Users, MapPin, Sparkles, Award, Heart } from 'lucide-react'
import type { Metadata } from 'next'
import WhatsNearbySection from '@/components/amenities/WhatsNearbySection'

export const metadata: Metadata = {
  title: 'Living in Skye Canyon Nevada - Homeowner Resource Hub & Community Guide',
  description: 'Complete guide to living in Skye Canyon Nevada: HOA rules explained, community events calendar, best contractors, local amenities, and essential resources for Skye Canyon homeowners.',
}

export default function HomePage() {
  const features = [
    {
      icon: Home,
      title: 'Homeowner Essentials',
      description: 'HOA guides, desert landscaping tips, HVAC companies, pool maintenance, and home security options.',
      href: '/homeowner-essentials',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      title: 'Community Living',
      description: 'Monthly events calendar, Skye Fitness amenities, best restaurants, weekend getaways, and school ratings.',
      href: '/community-living',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Wrench,
      title: 'Resident Resources',
      description: 'Contractor directory, neighborhood groups, trash schedules, new resident guide, and pet services.',
      href: '/resident-resources',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const recentArticles = [
    {
      title: 'Complete Skye Canyon HOA Guide',
      excerpt: 'Everything you need to know about HOA fees, rules, contacts, and regulations.',
      href: '/homeowner-essentials/hoa-guide',
      category: 'Homeowner Essentials',
    },
    {
      title: 'Skye Canyon Community Events Calendar',
      excerpt: 'Stay updated with all upcoming events, activities, and gatherings in our community.',
      href: '/events',
      category: 'Community',
    },
    {
      title: 'Best Contractors in Skye Canyon',
      excerpt: 'Trusted plumbers, electricians, landscapers, and more servicing our community.',
      href: '/resident-resources/contractors',
      category: 'Resources',
    },
    {
      title: 'Guide to Skye Fitness & All Amenities',
      excerpt: 'Complete overview of fitness center, pools, parks, and community facilities.',
      href: '/community-living/amenities',
      category: 'Community',
    },
  ]

  const quickLinks = [
    { name: 'Things to Do Near Skye Canyon', href: '/community-living/things-to-do' },
    { name: 'Best Restaurants Near Skye Canyon 2025', href: '/community-living/restaurants' },
    { name: 'Desert Landscaping Tips', href: '/homeowner-essentials/landscaping' },
    { name: 'New Resident Welcome Guide', href: '/resident-resources/new-resident-guide' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-skye-navy via-blue-800 to-skye-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="h-16 w-16 text-skye-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-skye-gold">Skye Canyon</span> Living
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Complete Homeowner Resource Hub for Living in Skye Canyon, Nevada
            </p>
            <p className="text-lg mb-10 text-blue-200">
              Everything current residents need: HOA guides, community events, trusted contractors, local amenities, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:702-222-1964" className="bg-skye-gold text-skye-navy font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg">
                Join Homeowner Network: 702-222-1964
              </a>
              <Link href="/events" className="bg-white text-skye-navy font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl text-lg">
                View Events Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">Explore Your Community Resources</h2>
            <p className="text-xl text-gray-600">Everything you need to know about living in Skye Canyon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="card p-8 hover:scale-105 transition-transform"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-6 text-skye-blue font-semibold flex items-center">
                  Learn More <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy">Featured Guides & Articles</h2>
            <Link href="/homeowner-essentials" className="text-skye-blue hover:text-blue-700 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="card group"
              >
                <div className="p-6">
                  <div className="text-sm text-skye-blue font-semibold mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-skye-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-desert-sand">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-skye-navy mb-8 text-center">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all text-center font-semibold text-gray-700 hover:text-skye-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsNearbySection defaultCategory="grocery" compact />

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">Why Skye Canyon Living?</h2>
            <p className="text-xl text-gray-600">Your trusted resource for everything about living in our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-skye-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Curated by and for Skye Canyon residents</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Contractors</h3>
              <p className="text-gray-600">Verified local businesses serving our area</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-gray-600">Built for homeowners, by homeowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-skye-gold" />
          <h2 className="text-4xl font-bold mb-4">Join the Skye Canyon Homeowner Network</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Connect with neighbors, stay informed about community events, and access exclusive homeowner resources.
          </p>
          <a
            href="tel:702-222-1964"
            className="inline-block bg-skye-gold text-skye-navy font-bold py-4 px-10 rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
          >
            Call Now: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}
