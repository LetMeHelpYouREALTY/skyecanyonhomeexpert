import { Phone, Mail, MapPin, Home, Bed, Bath, Square, Car, Building2, Waves, Dumbbell, Users, ChevronRight, Star, Award } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import WhatsNearbySection from '@/components/amenities/WhatsNearbySection'

export const metadata: Metadata = {
  title: 'Toll Brothers at Skye Canyon - Paloma Collection | Luxury Homes Las Vegas',
  description: 'New luxury homes in Las Vegas, NV. Single-family homes starting at $549,995. 3-5 bedrooms, 2,263+ sqft. Gated community with pool, fitness center, and master-plan amenities.',
  keywords: 'Toll Brothers Skye Canyon, Paloma Collection, luxury homes Las Vegas, new homes Skye Canyon, gated community Las Vegas',
}

export default function PalomaCollectionPage() {
  const quickMoveInHomes = [
    {
      name: 'Avella Modern Craftsman',
      style: 'Modern Craftsman',
      price: '$635,000',
      beds: 3,
      baths: 2,
      sqft: '2,236',
      halfBaths: 1,
      garages: 2,
      stories: 2,
      moveIn: 'Quick Move-In 10/2025',
      site: 'Home Site 89',
      designerAppointed: true,
    },
    {
      name: 'Bergamo Modern Craftsman',
      style: 'Modern Craftsman',
      price: '$625,000',
      beds: 3,
      baths: 2,
      sqft: '2,389',
      halfBaths: 1,
      garages: 2,
      stories: 2,
      moveIn: 'Quick Move-In 3/2026',
      site: 'Home Site 46',
      designerAppointed: false,
    },
    {
      name: 'Porto Modern Craftsman',
      style: 'Modern Craftsman',
      price: '$670,000',
      beds: 4,
      baths: 3,
      sqft: '2,740',
      halfBaths: 0,
      garages: 2,
      stories: 2,
      moveIn: 'Move-In Ready',
      site: 'Home Site 84',
      designerAppointed: true,
    },
  ]

  const homeDesigns = [
    {
      name: 'Avella',
      style: 'Modern Farmhouse',
      price: '$549,995',
      beds: '3–4',
      baths: 2,
      sqft: '2,263+',
      halfBaths: 1,
      garages: 2,
      stories: 2,
      decoratedModel: true,
      quickMoveIn: 1,
    },
    {
      name: 'Bergamo',
      style: 'Modern Craftsman',
      price: '$570,995',
      beds: '3–4',
      baths: 2,
      sqft: '2,389+',
      halfBaths: 1,
      garages: 2,
      stories: 2,
      decoratedModel: true,
      quickMoveIn: 1,
    },
    {
      name: 'Nola',
      style: 'Spanish Contemporary',
      price: '$592,995',
      beds: '4–5',
      baths: 3,
      sqft: '2,543+',
      halfBaths: 0,
      garages: 2,
      stories: 2,
      decoratedModel: true,
      quickMoveIn: 0,
    },
    {
      name: 'Porto',
      style: 'Modern Craftsman',
      price: '$602,995',
      beds: '4–5',
      baths: '3–4',
      sqft: '2,740+',
      halfBaths: 0,
      garages: 2,
      stories: 2,
      decoratedModel: false,
      quickMoveIn: 1,
    },
    {
      name: 'Sarno',
      style: 'Modern Farmhouse',
      price: '$612,995',
      beds: 5,
      baths: '3–4',
      sqft: '2,900+',
      halfBaths: 0,
      garages: 2,
      stories: 2,
      decoratedModel: false,
      quickMoveIn: 0,
    },
  ]

  const amenities = [
    { name: 'Pool', icon: Waves },
    { name: 'Amenity Center', icon: Building2 },
    { name: 'Fitness Center', icon: Dumbbell },
  ]

  const features = [
    'Five new open-concept, two-story home designs',
    'Flex space options for an additional living or work-from-home space',
    'Covered patios on all home designs to enjoy year-round outdoor living',
    'Select finishes and personalize your home with the help of a professional designer at the Toll Brothers Design Studio',
    'Gated community offering a private community pool and access to Skye Canyon\'s master plan amenities',
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 text-center">
        <div className="section-container">
          <p className="font-bold text-lg">
            Fall Savings Event • Move-in Appliance Package + Up to $40,000 Flexible Incentives on Select Homes*
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 flex items-center text-sm text-gray-300">
              <Link href="/" className="hover:text-white">Nevada</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/" className="hover:text-white">Las Vegas</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/" className="hover:text-white">Toll Brothers at Skye Canyon</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>Paloma Collection</span>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Quick Move-In Homes Available
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Toll Brothers at Skye Canyon
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mb-6">
              Paloma Collection
            </h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Las Vegas, NV | Clark County</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-2 mb-8">
              <span className="text-gray-400 text-lg">Single-Family Homes</span>
              <span className="text-gray-500">•</span>
              <span className="text-2xl font-bold text-amber-400">starting at $549,995</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:855-700-8655" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center shadow-xl">
                Contact Sales: 855-700-8655
              </a>
              <a href="#quick-move-in" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-center shadow-xl">
                View Available Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Home Starts Here</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Paloma Collection, ideally situated in Skye Canyon, is a new home community offering luxury two-story home designs with flexible living spaces and access to the master-plan amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Kitchens</h3>
              <p className="text-gray-600">All home designs feature bright, open floor plans ideal for entertaining</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Home className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cozy Casual Dining Areas</h3>
              <p className="text-gray-600">Perfect for everyday family meals and gatherings</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Building2 className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Generous Loft</h3>
              <p className="text-gray-600">Versatile living and entertaining options</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why You Will Love This Community</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <Star className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Move-In Homes */}
      <section id="quick-move-in" className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Move-In Homes</h2>
            <p className="text-xl text-gray-600">Designer Appointed • Available Now</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickMoveInHomes.map((home) => (
              <div key={home.name} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-700 relative">
                  <div className="absolute top-4 left-4 space-y-2">
                    <span className="block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {home.moveIn}
                    </span>
                    {home.designerAppointed && (
                      <span className="block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Designer Appointed
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">{home.site}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 font-medium">{home.style}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{home.name.replace(' Modern Craftsman', '')}</h3>
                  <div className="text-3xl font-bold text-amber-600 mb-6">{home.price}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Bed className="h-4 w-4 mr-2" />
                      <span>{home.beds} Bedrooms</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Bath className="h-4 w-4 mr-2" />
                      <span>{home.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Square className="h-4 w-4 mr-2" />
                      <span>{home.sqft} Sq Ft</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Car className="h-4 w-4 mr-2" />
                      <span>{home.garages} Car Garage</span>
                    </div>
                  </div>

                  <a href="tel:855-700-8655" className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg text-center transition-colors">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Designs */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Home Designs</h2>
            <p className="text-xl text-gray-600">Thoughtfully Created</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeDesigns.map((home) => (
              <div key={home.name} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200">
                <div className="h-56 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 relative">
                  <div className="absolute top-4 left-4 space-y-2">
                    {home.decoratedModel && (
                      <span className="block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Decorated Model
                      </span>
                    )}
                    {home.quickMoveIn > 0 && (
                      <span className="block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {home.quickMoveIn} Quick Move-In Available
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{home.style}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{home.name}</h3>
                  <div className="text-2xl font-bold text-amber-600 mb-6">{home.price}</div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-between text-gray-700 py-2 border-b">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-2" />
                        <span>Bedrooms</span>
                      </div>
                      <span className="font-semibold">{home.beds}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 py-2 border-b">
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-2" />
                        <span>Bathrooms</span>
                      </div>
                      <span className="font-semibold">{home.baths}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 py-2 border-b">
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-2" />
                        <span>Square Feet</span>
                      </div>
                      <span className="font-semibold">{home.sqft}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-700 py-2">
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-2" />
                        <span>Garages</span>
                      </div>
                      <span className="font-semibold">{home.garages}</span>
                    </div>
                  </div>

                  <a href="tel:855-700-8655" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg text-center transition-colors">
                    View {home.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Elevate the Everyday</h2>
            <p className="text-xl text-gray-600">World-Class Amenities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <amenity.icon className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{amenity.name}</h3>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-lg text-gray-700">
              Plus access to all Skye Canyon master-plan amenities including additional pools, parks, walking trails, and community events.
            </p>
          </div>
        </div>
      </section>

      {/* School District */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-4xl">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">School District</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Clark County School District</strong>
            </p>
            <p className="text-gray-600">
              Families residing in Toll Brothers at Skye Canyon - Paloma Collection will be served by Clark County School District, offering quality education options for students of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Location Highlights</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              With five spacious, open-concept, two-story home designs, Toll Brothers at Skye Canyon - Paloma Collection is an ideal choice for buyers who seek more luxury living space. These new homes in Las Vegas, NV offer proximity to Mt. Charleston and other nearby recreational opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Outdoor Recreation</h3>
                <p className="text-gray-600">Minutes from Mt. Charleston for hiking, skiing, and year-round activities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Shopping & Dining</h3>
                <p className="text-gray-600">Easy access to retail, restaurants, and entertainment</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Master-Planned Community</h3>
                <p className="text-gray-600">Part of the premier Skye Canyon development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Las Vegas Access</h3>
                <p className="text-gray-600">Convenient to downtown Las Vegas and major employers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsNearbySection
        title="What's Near Paloma at Skye Canyon"
        description="Explore grocery, dining, healthcare, and recreation around your new home in northwest Las Vegas."
        defaultCategory="grocery"
        className="py-16 bg-white"
      />

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-4xl font-bold mb-4">Schedule Your Private Tour</h2>
            <p className="text-xl mb-8 text-gray-300">
              Visit our decorated models and discover your dream home at Paloma Collection
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Sales Center</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-3 text-amber-400" />
                  <span>9000 Cielo Canyon St, Las Vegas, NV 89166</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-3 text-amber-400" />
                  <a href="tel:855-700-8655" className="hover:text-amber-400 transition-colors">
                    855-700-8655
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:855-700-8655" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-xl text-lg">
                Call Now
              </a>
              <a href="https://maps.google.com/?q=9000+Cielo+Canyon+St+Las+Vegas+NV+89166" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all shadow-xl text-lg">
                Get Directions
              </a>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              Nevada RED License No. S.0174935, S.0191723, S.064436
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="section-container">
          <p className="text-xs text-gray-600 text-center max-w-5xl mx-auto">
            *Terms and conditions apply. Incentives valid on select homes only. Contact sales for complete details. Prices, plans, and specifications subject to change without notice. Square footages are approximate. Toll Brothers reserves the right to change or modify floor plans, specifications, features, and prices without notice.
          </p>
        </div>
      </section>
    </>
  )
}

