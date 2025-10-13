import { School, GraduationCap, Users, BookOpen, Award, MapPin, Star } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Schools Guide - Ratings & Reviews | Las Vegas NV',
  description: 'Complete guide to schools serving Skye Canyon: elementary, middle, and high schools with ratings, reviews, and information for families in northwest Las Vegas.',
  keywords: 'Skye Canyon schools, Las Vegas schools, Clark County schools, Arbor View High School',
}

export default function SchoolsPage() {
  const elementarySchools = [
    {
      name: 'William & Mary Scherbenbach Elementary School',
      type: 'Public Elementary',
      grades: 'Pre-K through 5th',
      district: 'Clark County School District',
      highlights: [
        'Modern facilities',
        'STEM-focused curriculum',
        'Active parent involvement',
        'After-school programs available',
      ],
    },
    {
      name: 'James Bilbray Elementary School',
      type: 'Public Elementary',
      grades: 'Pre-K through 5th',
      district: 'Clark County School District',
      highlights: [
        'Strong reading programs',
        'Technology integration',
        'Physical education focus',
        'Community partnerships',
      ],
    },
    {
      name: 'Kenneth Divich Elementary School',
      type: 'Public Elementary',
      grades: 'Pre-K through 5th',
      district: 'Clark County School District',
      highlights: [
        'Experienced teaching staff',
        'Arts programs',
        'Safe learning environment',
        'Parent-teacher collaboration',
      ],
    },
  ]

  const middleSchools = [
    {
      name: 'Ralph Cadwallader Middle School',
      type: 'Public Middle School',
      grades: '6th through 8th',
      district: 'Clark County School District',
      highlights: [
        'Advanced academic programs',
        'Extracurricular activities',
        'Sports programs',
        'College prep focus',
      ],
    },
    {
      name: 'Edmundo Escobedo Middle School',
      type: 'Public Middle School',
      grades: '6th through 8th',
      district: 'Clark County School District',
      highlights: [
        'Honors courses available',
        'Music and arts programs',
        'Student clubs and organizations',
        'Character education',
      ],
    },
  ]

  const highSchools = [
    {
      name: 'Arbor View High School',
      type: 'Public High School',
      grades: '9th through 12th',
      district: 'Clark County School District',
      highlights: [
        'Advanced Placement (AP) courses',
        'Strong athletics program',
        'Performing arts center',
        'College and career counseling',
        'STEM academies',
        'Award-winning programs',
      ],
    },
  ]

  const charterSchools = [
    {
      name: 'Somerset Academy - Skye Canyon Campus',
      type: 'Charter School',
      grades: 'K through 12th',
      district: 'Charter School',
      highlights: [
        'College preparatory curriculum',
        'Small class sizes',
        'International Baccalaureate',
        'Character development focus',
        'Extended learning opportunities',
        'Located within Skye Canyon',
      ],
    },
  ]

  const factors = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Strong curriculum with focus on college and career readiness',
    },
    {
      icon: Users,
      title: 'Community Involvement',
      description: 'Active parent-teacher organizations and community partnerships',
    },
    {
      icon: Award,
      title: 'Extracurricular Activities',
      description: 'Sports, arts, clubs, and enrichment programs for all interests',
    },
    {
      icon: Star,
      title: 'Modern Facilities',
      description: 'Updated campuses with technology and learning resources',
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <GraduationCap className="h-12 w-12 mb-4 text-blue-200" />
            <h1 className="text-5xl font-bold mb-4">Local Schools Deep Dive: Ratings & Reviews</h1>
            <p className="text-xl text-blue-100">
              Complete guide to elementary, middle, and high schools serving Skye Canyon families in Clark County School District.
            </p>
          </div>
        </div>
      </section>

      {/* District Overview */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Clark County School District</h2>
            <p className="text-xl text-gray-700 text-center mb-8">
              Skye Canyon is served by the Clark County School District, the fifth-largest school district in the United States, providing quality education to students throughout the Las Vegas valley.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {factors.map((factor) => (
                <div key={factor.title} className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <factor.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-600">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elementary Schools */}
      <section className="py-16 bg-blue-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <School className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Elementary Schools</h2>
            <p className="text-xl text-gray-600">Grades Pre-K through 5th</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {elementarySchools.map((school) => (
              <div key={school.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
                  <School className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  <p className="text-blue-100 text-sm">{school.type}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Grades: <span className="font-semibold text-gray-900">{school.grades}</span></div>
                    <div className="text-sm text-gray-600">District: <span className="font-semibold text-gray-900">{school.district}</span></div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {school.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Schools */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Middle Schools</h2>
            <p className="text-xl text-gray-600">Grades 6th through 8th</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {middleSchools.map((school) => (
              <div key={school.name} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-indigo-100 hover:border-indigo-300 transition-all">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-6">
                  <BookOpen className="h-8 w-8 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{school.name}</h3>
                  <p className="text-indigo-100">{school.type}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Grades: <span className="font-semibold text-gray-900">{school.grades}</span></div>
                    <div className="text-sm text-gray-600">District: <span className="font-semibold text-gray-900">{school.district}</span></div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {school.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Schools */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">High School</h2>
            <p className="text-xl text-gray-600">Grades 9th through 12th</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {highSchools.map((school) => (
              <div key={school.name} className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-8">
                  <GraduationCap className="h-12 w-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-3">{school.name}</h3>
                  <p className="text-purple-100 text-lg">{school.type}</p>
                </div>
                <div className="p-8">
                  <div className="mb-6 pb-6 border-b">
                    <div className="text-gray-600 mb-2">Grades: <span className="font-semibold text-gray-900 text-lg">{school.grades}</span></div>
                    <div className="text-gray-600">District: <span className="font-semibold text-gray-900 text-lg">{school.district}</span></div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Program Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {school.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start bg-purple-50 rounded-lg p-4">
                        <Star className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Schools */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Charter School Option</h2>
            <p className="text-xl text-gray-600">Alternative education within Skye Canyon</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {charterSchools.map((school) => (
              <div key={school.name} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                  <MapPin className="h-12 w-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-3">{school.name}</h3>
                  <p className="text-green-100 text-lg">{school.type}</p>
                  <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold">Located Within Skye Canyon Community</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6 pb-6 border-b">
                    <div className="text-gray-600 mb-2">Grades: <span className="font-semibold text-gray-900 text-lg">{school.grades}</span></div>
                    <div className="text-gray-600">Type: <span className="font-semibold text-gray-900 text-lg">{school.district}</span></div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Families Choose Somerset Academy:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {school.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start bg-green-50 rounded-lg p-4">
                        <Star className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Selection Tips */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choosing the Right School for Your Family</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">✓ Visit Schools in Person</h3>
                <p className="text-gray-600">Schedule tours to see facilities, meet staff, and get a feel for the school culture.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">✓ Review Academic Programs</h3>
                <p className="text-gray-600">Look into curriculum offerings, special programs, and college prep opportunities.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">✓ Check Extracurriculars</h3>
                <p className="text-gray-600">Consider sports, arts, clubs, and activities that align with your child's interests.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">✓ Talk to Other Parents</h3>
                <p className="text-gray-600">Connect with Skye Canyon neighbors to learn about their experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="section-container text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Connect With Other Skye Canyon Parents</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the Skye Canyon Homeowner Network to connect with parents and get insider school tips.
          </p>
          <a href="tel:702-222-1964" className="btn-primary bg-white text-blue-700 hover:bg-gray-100 text-lg">
            Call: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}

