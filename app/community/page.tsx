import Link from 'next/link'
import { MapPin, Phone, Home, Dumbbell, Trees, Store, School, Users, Calendar, Award, Mountain, Bike, Coffee, Heart, Star, Building2 } from 'lucide-react'
import type { Metadata } from 'next'
import WhatsNearbySection from '@/components/amenities/WhatsNearbySection'

export const metadata: Metadata = {
  title: "Las Vegas' Premier Master-Planned Community - Skye Canyon Nevada",
  description: "Discover Skye Canyon, Las Vegas' premier master-planned community. Modern homes, stunning natural landscapes, world-class amenities, fitness center, parks, trails, and vibrant community events.",
  keywords: "Skye Canyon Las Vegas, master-planned community Nevada, Skye Canyon homes, Skye Canyon amenities, northwest Las Vegas",
}

export default function CommunityPage() {
  const builders = [
    {
      name: 'Century Communities',
      description: 'Offering versatile one- and two-story homes with up to six bedrooms. Customize your space with options like lofts, dens, and luxurious suites.',
      icon: Building2,
    },
    {
      name: 'Toll Brothers',
      description: 'Craft luxurious living with contemporary designs from Toll Brothers, ideal for both home offices and large family setups.',
      icon: Home,
    },
    {
      name: 'Quick Move-In Homes',
      description: 'For a swift move, explore our ready-to-occupy residences perfect for immediate transition.',
      icon: Star,
    },
  ]

  const amenities = [
    {
      name: 'Skye Canyon Park',
      description: 'Acres of natural space, perfect for enthusiasts of all outdoor activities.',
      icon: Trees,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Skye Center',
      description: 'Our vibrant social hub features events, Aspire Coffee House, and various gathering spaces.',
      icon: Coffee,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      name: 'Skye Fitness',
      description: 'Stay fit with our expansive gym and junior Olympic pool, designed to cater to all fitness levels.',
      icon: Dumbbell,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Trails & Bike Lanes',
      description: 'Immerse yourself in the scenery with extensive trails and bike lanes for all to enjoy.',
      icon: Bike,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const events = [
    {
      name: 'Fitness Classes',
      description: 'Stay active and energized with a variety of fitness classes tailored to all levels.',
      icon: Dumbbell,
    },
    {
      name: 'Holiday Gatherings',
      description: 'Embrace the spirit of the season with festive celebrations for the whole community.',
      icon: Heart,
    },
    {
      name: 'Creative Workshops',
      description: 'Explore your artistic side with hands-on classes and workshops.',
      icon: Star,
    },
    {
      name: 'Special Events',
      description: 'From stargazing to festive fairs, our special events offer unique experiences for all.',
      icon: Calendar,
    },
  ]

  const skyeLifeFeatures = [
    {
      title: 'Convenient Shopping',
      description: 'The Skye Canyon Marketplace offers a diverse range of shops, restaurants, and businesses, ensuring all your needs are met within arm\'s reach.',
      icon: Store,
    },
    {
      title: 'Quality Education',
      description: 'Choose from excellent public and private schools nearby, providing a top-tier education for children of all ages.',
      icon: School,
    },
    {
      title: 'Community Association',
      description: 'Our dedicated Community Association fosters a vibrant and social environment, creating a place residents are proud to call home.',
      icon: Users,
    },
    {
      title: 'Exciting Events',
      description: 'Join us for a variety of events designed to promote a healthy and active lifestyle, fostering community connection.',
      icon: Calendar,
    },
    {
      title: 'Exclusive Partnerships',
      description: 'Enjoy exclusive benefits as a Skye Canyon resident with the Skye Pass, granting preferred access and discounts at select partner destinations.',
      icon: Award,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-skye-navy via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.5) 0%, transparent 50%)',
          }}></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Mountain className="h-20 w-20 mx-auto mb-6 text-skye-gold" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Live the <span className="text-skye-gold">Skye</span> Life.
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
              Las Vegas' Premier Master-Planned Community
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Nestled between the bright lights of the Las Vegas Strip and the tall timbers of Mt. Charleston, Skye Canyon is the heart of dynamic living. This community merges modern homes with stunning natural landscapes, emphasizing outdoor activities, wellness, and a connected lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:702-786-0207" className="bg-skye-gold text-skye-navy font-bold py-4 px-10 rounded-lg hover:bg-yellow-300 transition-all shadow-xl text-lg">
                Call: 702-786-0207
              </a>
              <a href="#visit" className="bg-white text-skye-navy font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Schedule Your Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Announcements Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="font-semibold">
              🏡 <span className="text-yellow-300">Now Open!</span> Sierra at Skyeview
            </div>
            <div className="hidden md:block text-blue-200">|</div>
            <div className="font-semibold">
              ⭐ <span className="text-yellow-300">Final Opportunity!</span> Move-In Ready Homes at Eaglepointe
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Perfect Home */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-skye-navy mb-4">Find Your Perfect Home At Skye Canyon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnered with top national builders, our community features a range of homes to fit your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {builders.map((builder) => (
              <div key={builder.name} className="card group hover:scale-105 transition-transform">
                <div className="p-8">
                  <div className="bg-blue-50 text-skye-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-skye-blue group-hover:text-white transition-colors">
                    <builder.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{builder.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{builder.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/paloma-collection" className="btn-primary text-lg">
              View All Homes
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Amenities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-skye-navy mb-4">Explore Skye Canyon's Signature Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skye Canyon offers a wealth of exclusive amenities tailored to enhance your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className={`${amenity.bgColor} ${amenity.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <amenity.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{amenity.name}</h3>
                <p className="text-gray-600 text-center">{amenity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/community/amenities" className="btn-primary text-lg">
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Living Fit Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Dumbbell className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-4">Living Fit Has a New Home.</h2>
            <h3 className="text-3xl font-semibold mb-6">Vitality Has a New Home.</h3>
            <p className="text-xl text-green-100 mb-8">
              At Skye Canyon, wellness isn't just a goal—it's a way of life. From state-of-the-art fitness facilities to miles of trails, everything you need to stay active and healthy is right here.
            </p>
            <Link href="/community/skye-fitness" className="btn-primary bg-white text-green-700 hover:bg-gray-100 text-lg">
              Discover Skye Fitness
            </Link>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-skye-navy mb-4">Community Events at Skye Canyon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skye Canyon fosters a thriving community where residents come together for engaging activities and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {events.map((event) => (
              <div key={event.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="bg-blue-100 text-skye-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">FitFEST</h4>
                  <p className="text-sm text-gray-600">Community fitness celebration</p>
                </div>
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">International Astronomy Day</h4>
                  <p className="text-sm text-gray-600">Stargazing and celestial exploration</p>
                </div>
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">Patriotic Parade</h4>
                  <p className="text-sm text-gray-600">Community celebration</p>
                </div>
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-center mt-6">
              <Link href="/events" className="btn-primary">
                View Full Events Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover The Skye Life */}
      <section className="py-20 bg-desert-sand">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-skye-navy mb-4">Discover The SKYE LIFE</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Skye Canyon, you'll find more than just a place to live—it's a vibrant community designed to enrich your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skyeLifeFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="bg-blue-50 text-skye-blue w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-8">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">The Skye Pass</h3>
              <p className="text-xl text-blue-100 mb-6">
                Exclusive benefits for Skye Canyon residents with preferred access and discounts at select partner destinations throughout Las Vegas.
              </p>
              <Link href="/community/partnerships" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Learn About Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsNearbySection
        title="What's Near Skye Canyon"
        description="Northwest Las Vegas dining, grocery, healthcare, and recreation within easy reach of Skye Canyon Park."
        defaultCategory="restaurants"
      />

      {/* Location Section */}
      <section id="visit" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-skye-navy mb-4">Visit Skye Canyon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in northwest Las Vegas, just off the 95 freeway at Skye Canyon Park Drive, this is where active lifestyles thrive. We are a community built for those who love to live, work, and play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <MapPin className="h-12 w-12 text-skye-blue mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-700 mb-6">
                Skye Canyon Park Drive<br />
                Northwest Las Vegas, NV<br />
                Off the 95 Freeway
              </p>
              <a 
                href="https://maps.google.com/?q=Skye+Canyon+Park+Drive+Las+Vegas+NV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <Phone className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3 mb-6">
                <a href="tel:702-786-0207" className="flex items-center text-lg text-gray-700 hover:text-skye-blue">
                  <Phone className="h-5 w-5 mr-3" />
                  (702) 786-0207
                </a>
              </div>
              <p className="text-gray-700 mb-6">
                Visit us and discover how Skye Canyon can turn your daily routine into an adventure.
              </p>
              <a href="tel:702-786-0207" className="btn-primary bg-green-600 hover:bg-green-700">
                Schedule Your Visit
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <div className="bg-gradient-to-r from-skye-navy to-blue-800 text-white rounded-2xl p-8">
              <Mountain className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">The Perfect Location</h3>
              <p className="text-xl text-blue-100">
                How many places offer the contrast from desert to mountains, from yucca to aspen in a matter of minutes? Experience the unique beauty of Skye Canyon—where Las Vegas meets nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Network CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
        <div className="section-container text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Join the Skye Canyon Premier Agent Network</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Take your real estate career to new heights by becoming part of a community that values excellence and innovation.
          </p>
          <Link href="/agents" className="btn-primary bg-white text-purple-700 hover:bg-gray-100 text-lg">
            Get Certified Today
          </Link>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-6 bg-gray-100">
        <div className="section-container">
          <p className="text-sm text-gray-600 text-center">
            © 2025 Skye Canyon. All rights reserved. Plans, specifications and ideas are all subject to change without notice.
          </p>
        </div>
      </section>
    </>
  )
}

