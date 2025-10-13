import Link from 'next/link'
import { Calendar, MapPin, Utensils, School, Mountain, Users, Heart, Dumbbell } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Living in Skye Canyon - Events, Restaurants & Local Guide | Nevada',
  description: 'Discover life in Skye Canyon Nevada: monthly community events, best restaurants nearby, Skye Fitness amenities, weekend trips to Mt. Charleston, and local school ratings.',
  keywords: 'things to do near Skye Canyon, Skye Canyon community events, best restaurants Skye Canyon',
}

export default function CommunityLivingPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Monthly Skye Canyon Events Calendar',
      description: 'Stay connected with community gatherings, fitness events, holiday celebrations, and family activities.',
      href: '/events',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Dumbbell,
      title: 'Guide to Skye Fitness & All Amenities',
      description: 'Complete overview of world-class fitness center, pools, parks, and community facilities.',
      href: '/community/skye-fitness',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Utensils,
      title: 'Best Restaurants Near Skye Canyon (2025)',
      description: 'Local dining guide featuring the top restaurants, cafes, and eateries near your neighborhood.',
      href: '/community-living/restaurants',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Mountain,
      title: 'Skye Canyon to Mt. Charleston: Weekend Guide',
      description: 'Explore nearby outdoor recreation, hiking trails, skiing, and mountain escapes just minutes away.',
      href: '/community-living/mt-charleston',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: School,
      title: 'Local Schools Deep Dive: Ratings & Reviews',
      description: 'Comprehensive guide to elementary, middle, and high schools serving Skye Canyon families.',
      href: '/community-living/schools',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: MapPin,
      title: 'Things to Do Near Skye Canyon',
      description: 'Entertainment, attractions, shopping, and activities in northwest Las Vegas and beyond.',
      href: '/community-living/things-to-do',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Users className="h-12 w-12 mb-4 text-purple-200" />
            <h1 className="text-5xl font-bold mb-4">Community Living</h1>
            <p className="text-xl text-purple-100">
              Discover everything that makes Skye Canyon an amazing place to call home. From local amenities to community events, explore all the ways to enjoy living here.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">Your Community Living Guide</h2>
            <p className="text-xl text-gray-600">Everything you need to know about life in Skye Canyon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="p-8">
                  <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-skye-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-skye-blue font-semibold flex items-center">
                    Explore <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-500" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Residents Love Living Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-semibold">Community Events Annually</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">1,700</div>
                <div className="text-gray-700 font-semibold">Acres of Master-Planned Living</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-700 font-semibold">Parks & Recreation Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Skye Canyon Lifestyle</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our vibrant community and discover what makes Skye Canyon special.
          </p>
          <a href="tel:702-222-1964" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300">
            Call: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}

