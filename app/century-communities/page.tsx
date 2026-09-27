import { Phone, MapPin, Clock, Home, Bed, Bath, Square, School, Store, Utensils, Award, Users, Trees, Dumbbell, Waves, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import CenturyCommunitiesRequestForm from '@/components/CenturyCommunitiesRequestForm'

export const metadata: Metadata = {
  title: 'Century Communities at Skye Canyon - New Homes Las Vegas from $429,990',
  description: 'New single-family homes and townhomes in Skye Canyon, Las Vegas, NV by Century Communities starting from $429,990. 5 collections available with quick move-in homes. Premier master-planned community.',
  keywords: 'Century Communities Skye Canyon, new homes Las Vegas, Skye Canyon homes for sale, Las Vegas new construction',
}

export default function CenturyCommunitiesPage() {
  const collections = [
    { name: 'Skycrest', type: 'Single Family', beds: '3-5', baths: '2-3', sqft: '1,800-2,500+' },
    { name: 'Marvella', type: 'Single Family', beds: '3-4', baths: '2-3', sqft: '1,900-2,600+' },
    { name: 'Pine Trail', type: 'Single Family', beds: '4-5', baths: '2.5-3.5', sqft: '2,200-2,900+' },
    { name: 'Avenue', type: 'Townhomes', beds: '3-4', baths: '2.5-3', sqft: '1,600-2,100+' },
    { name: 'Modern Farmhouse', type: 'Single Family', beds: '4-6', baths: '3-4', sqft: '2,500-3,500+' },
  ]

  const amenities = [
    { name: 'State-of-the-Art Fitness Center', icon: Dumbbell },
    { name: 'Scenic Community Parks', icon: Trees },
    { name: 'Resort-Style Pool', icon: Waves },
    { name: 'Splash Pads', icon: Waves },
    { name: 'Sports Fields & Courts', icon: Users },
    { name: 'Walking & Biking Trails', icon: Trees },
    { name: 'Year-Round Community Events', icon: Calendar },
    { name: 'Gathering Spots', icon: Users },
  ]

  const schools = [
    'William & Mary Scherbenbach Elementary School',
    'James Bilbray Elementary School',
    'Kenneth Divich Elementary School',
    'Ralph Cadwallader Middle School',
    'Edmundo Escobedo Middle School',
    'Arbor View High School',
    'Somerset Academy-Skye Canyon Campus Charter School',
  ]

  const shopping = [
    'Sprouts Farmers Market',
    'Smith\'s Food and Drug',
    'Montecito Marketplace',
    'The Shoppes',
    'Lowe\'s Home Improvement',
  ]

  const dining = [
    'Mimi\'s Cafe',
    'Market Grille Cafe',
    'Buffalo Wild Wings',
    'Baby Stacks Cafe',
    'Michoacan Mexican Restaurant',
    'Starbucks',
    'Cafe Rio',
    'Tropical Smoothie Cafe',
    'Thai Spoon',
    'Menchie\'s Frozen Yogurt',
  ]

  const officeHours = [
    { day: 'Monday', hours: '12:00 PM - 6:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 text-center">
        <div className="section-container">
          <p className="font-bold text-sm md:text-base">
            ⭐ 3 YEARS RUNNING: Voted One of America's Most Trusted Homebuilders
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 flex items-center text-sm text-gray-300">
              <Link href="/" className="hover:text-white">Nevada</Link>
              <span className="mx-2">›</span>
              <Link href="/" className="hover:text-white">Las Vegas Metro</Link>
              <span className="mx-2">›</span>
              <Link href="/" className="hover:text-white">Las Vegas</Link>
              <span className="mx-2">›</span>
              <span>Skye Canyon</span>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                Masterplan Community • NW Las Vegas
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Skye Canyon
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">
              New Homes in Las Vegas, NV
            </h2>
            
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-gray-300 text-lg">Starting from</span>
              <span className="text-4xl font-bold text-blue-300">$429,990</span>
            </div>

            <div className="space-y-2 mb-8 text-blue-100">
              <p className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                <span>Single Family Homes, Townhomes</span>
              </p>
              <p className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>5 Collections Available</span>
              </p>
              <p className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                <span>Quick Move-In Homes Available</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:702-936-3020" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center shadow-xl">
                Call: 702-936-3020
              </a>
              <a href="#request-info" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center shadow-xl">
                Request Information
              </a>
              <a href="#collections" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center">
                View Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Tag className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Make Your Move With Limited-Time Special Offers!</h2>
            <p className="text-xl mb-6 text-amber-100">Now selling to-be-built homesites!</p>
            <a href="tel:702-936-3020" className="btn-primary bg-white text-orange-600 hover:bg-gray-100 text-lg">
              Learn More About Current Offers
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Sales Office</h3>
              <p className="text-lg text-gray-700 mb-6">
                10111 W Skye Canyon Park Dr.<br />
                Las Vegas, NV 89166
              </p>
              <div className="space-y-3">
                <a href="tel:702-936-3020" className="flex items-center text-blue-600 hover:text-blue-700 text-lg font-semibold">
                  <Phone className="h-5 w-5 mr-3" />
                  702-936-3020
                </a>
                <a 
                  href="https://maps.google.com/?q=10111+W+Skye+Canyon+Park+Dr+Las+Vegas+NV+89166" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Office Hours</h3>
              <div className="space-y-2">
                {officeHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between py-2 border-b last:border-0">
                    <span className="font-semibold text-gray-700">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Collections at Skye Canyon</h2>
            <p className="text-xl text-gray-600">5 distinct home collections designed for every lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.name} className="card hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {collection.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{collection.name}</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <Bed className="h-5 w-5 mr-2" />
                        <span>Bedrooms</span>
                      </div>
                      <span className="font-semibold">{collection.beds}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <Bath className="h-5 w-5 mr-2" />
                        <span>Bathrooms</span>
                      </div>
                      <span className="font-semibold">{collection.baths}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <Square className="h-5 w-5 mr-2" />
                        <span>Sq Ft</span>
                      </div>
                      <span className="font-semibold">{collection.sqft}</span>
                    </div>
                  </div>
                  <a href="tel:702-936-3020" className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-center transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-blue-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Welcome to Skye Canyon</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Welcome to Skye Canyon, a premier planned community featuring new houses for sale in Las Vegas, NV by Century Communities—one of the nation's top 10 homebuilders. Conveniently situated northwest of Las Vegas near U.S. 95, Skye Canyon provides easy access to world-class entertainment and thriving economic hubs.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Skye Canyon is a sought-after planned community, boasting some of the best homebuying sites in the Las Vegas metro area, plus exceptional resort-style amenities, such as a state-of-the-art fitness center, scenic community parks, pool, splash pads, sports fields, trails, gathering spots, open space and year-round events.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Explore this remarkable new Las Vegas community—showcasing versatile layouts with stylish included features and much more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A recreational playground with inspiring scenery and an emotionally appealing setting. Skye Canyon's 1,700 acres are designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Information */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Area Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Schools */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <School className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schools</h3>
              <ul className="space-y-3">
                {schools.map((school) => (
                  <li key={school} className="text-gray-700 text-sm flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{school}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shopping */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Shopping</h3>
              <ul className="space-y-3">
                {shopping.map((store) => (
                  <li key={store} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{store}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dining */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dining</h3>
              <ul className="space-y-3">
                {dining.map((restaurant) => (
                  <li key={restaurant} className="text-gray-700 flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>{restaurant}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Century Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Top 10 Homebuilder</h3>
                <p className="text-sm text-gray-600">Nationally recognized for quality</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Most Trusted</h3>
                <p className="text-sm text-gray-600">3 years running</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">4.5/5 Stars</h3>
                <p className="text-sm text-gray-600">8,866 homebuyer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Information */}
      <section id="request-info" className="py-20 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Home className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Request Information</h2>
              <p className="text-xl text-blue-100">
                Get details about available homes, pricing, and special offers at Skye Canyon
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <CenturyCommunitiesRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Find Your Dream Home?</h3>
              <p className="text-gray-300">Contact us today to schedule your private tour</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:702-936-3020" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                Call: 702-936-3020
              </a>
              <a href="#request-info" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                Request Info
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

