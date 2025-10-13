import { Dumbbell, Waves, Coffee, Trees, Bike, Users, Sun, Heart, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Amenities - Fitness Center, Pools, Parks & Trails | Las Vegas NV',
  description: 'Explore world-class amenities at Skye Canyon: Skye Fitness center with junior Olympic pool, Skye Center with Aspire Coffee House, parks, trails, bike lanes, and community gathering spaces.',
}

export default function AmenitiesPage() {
  const mainAmenities = [
    {
      name: 'Skye Fitness',
      description: 'Our state-of-the-art fitness facility features cutting-edge equipment, group fitness studios, and a junior Olympic-sized pool. Whether you\'re a fitness enthusiast or just beginning your wellness journey, Skye Fitness has everything you need.',
      icon: Dumbbell,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'State-of-the-art cardio equipment',
        'Free weights and resistance training',
        'Group fitness classes',
        'Junior Olympic pool',
        'Lap swimming lanes',
        'Family swim areas',
        'Professional trainers available',
      ],
    },
    {
      name: 'Skye Center',
      description: 'The heart of our community, Skye Center is where neighbors become friends. This vibrant social hub features the Aspire Coffee House, event spaces, and areas perfect for gatherings and celebrations.',
      icon: Coffee,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      features: [
        'Aspire Coffee House',
        'Community event spaces',
        'Meeting rooms available',
        'Indoor gathering areas',
        'Outdoor patios',
        'Event hosting capabilities',
        'Home Finding Center',
      ],
    },
    {
      name: 'Skye Canyon Park',
      description: 'Acres of beautifully maintained natural space offering something for everyone. From playgrounds to sports courts, picnic areas to open spaces, this is where outdoor living comes alive.',
      icon: Trees,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        'Multiple playground areas',
        'Sports courts and fields',
        'Picnic pavilions',
        'BBQ areas',
        'Open green spaces',
        'Dog-friendly areas',
        'Event lawn for gatherings',
      ],
    },
    {
      name: 'Trails & Bike Lanes',
      description: 'Miles of scenic trails wind through the community, perfect for walking, jogging, or biking. Experience the stunning desert landscape and mountain views while staying active.',
      icon: Bike,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'Extensive walking trails',
        'Dedicated bike lanes',
        'Scenic desert views',
        'Mountain vistas',
        'Well-lit paths for safety',
        'Trail markers and maps',
        'Connect to community destinations',
      ],
    },
  ]

  const additionalAmenities = [
    { name: 'Multiple Community Pools', icon: Waves },
    { name: 'Basketball Courts', icon: Users },
    { name: 'Tennis Courts', icon: Users },
    { name: 'Splash Pads', icon: Sun },
    { name: 'Pickleball Courts', icon: Users },
    { name: 'Outdoor Fitness Stations', icon: Heart },
    { name: 'Community Gardens', icon: Trees },
    { name: 'Event Spaces', icon: Calendar },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Trees className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              World-Class Amenities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Discover the exceptional lifestyle offerings at Skye Canyon—where every day feels like a vacation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {mainAmenities.map((amenity, index) => (
              <div key={amenity.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`${amenity.bgColor} ${amenity.color} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                    <amenity.icon className="h-10 w-10" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{amenity.name}</h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {amenity.description}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Features Include:</h3>
                  <ul className="space-y-3">
                    {amenity.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`${amenity.bgColor} rounded-2xl p-12 h-96 flex items-center justify-center`}>
                    <amenity.icon className={`h-64 w-64 ${amenity.color} opacity-20`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">Even More to Explore</h2>
            <p className="text-xl text-gray-600">Additional amenities throughout the community</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalAmenities.map((amenity) => (
              <div key={amenity.name} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all">
                <div className="bg-blue-100 text-skye-blue w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-gray-900">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Classes Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="h-16 w-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Fitness Classes for All Levels</h2>
              <p className="text-xl text-gray-600">
                Join our community for group fitness classes designed to keep you motivated and engaged
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cardio & Strength</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• HIIT Training</li>
                  <li>• Boot Camp</li>
                  <li>• Spin Classes</li>
                  <li>• Circuit Training</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mind & Body</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Yoga (All Levels)</li>
                  <li>• Pilates</li>
                  <li>• Meditation</li>
                  <li>• Stretching & Mobility</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aqua Fitness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Water Aerobics</li>
                  <li>• Swim Lessons</li>
                  <li>• Aqua Zumba</li>
                  <li>• Lap Swimming</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Classes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zumba & Dance</li>
                  <li>• Senior Fitness</li>
                  <li>• Family Classes</li>
                  <li>• Personal Training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Lifestyle */}
      <section className="py-20 bg-gradient-to-r from-skye-navy to-blue-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">A Lifestyle Beyond Compare</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At Skye Canyon, our amenities aren't just facilities—they're the foundation of an active, connected lifestyle. Whether you're pursuing fitness goals, making new friends, or simply enjoying the beautiful Nevada outdoors, everything you need is right here in your community.
            </p>
            <Link href="/events" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300 text-lg">
              View Community Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-desert-sand">
        <div className="section-container text-center">
          <MapPin className="h-12 w-12 mx-auto mb-6 text-skye-blue" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience It Yourself</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour of Skye Canyon and see our world-class amenities in person.
          </p>
          <a href="tel:702-786-0207" className="btn-primary text-lg">
            Call to Schedule: 702-786-0207
          </a>
        </div>
      </section>
    </>
  )
}

