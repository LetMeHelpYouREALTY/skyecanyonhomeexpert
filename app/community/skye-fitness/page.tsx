import { Dumbbell, Waves, Users, Heart, Clock, Award, Calendar } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Fitness Center - World-Class Gym & Junior Olympic Pool | Skye Canyon',
  description: 'State-of-the-art fitness center at Skye Canyon featuring cardio equipment, free weights, group fitness classes, junior Olympic pool, and professional trainers. Living fit has a new home.',
}

export default function SkyeFitnessPage() {
  const facilityFeatures = [
    {
      title: 'Cardio Equipment',
      description: 'Latest treadmills, ellipticals, bikes, and rowing machines with entertainment systems',
      icon: Heart,
    },
    {
      title: 'Strength Training',
      description: 'Comprehensive free weight area and resistance machines for all fitness levels',
      icon: Dumbbell,
    },
    {
      title: 'Junior Olympic Pool',
      description: '25-meter pool with dedicated lanes for lap swimming and recreational areas',
      icon: Waves,
    },
    {
      title: 'Group Fitness Studio',
      description: 'Spacious studio for classes including yoga, HIIT, Zumba, and more',
      icon: Users,
    },
  ]

  const classSchedule = [
    { time: '6:00 AM', class: 'Morning Yoga', level: 'All Levels' },
    { time: '7:00 AM', class: 'Boot Camp', level: 'Intermediate' },
    { time: '9:00 AM', class: 'Aqua Aerobics', level: 'All Levels' },
    { time: '10:00 AM', class: 'Pilates', level: 'Beginner' },
    { time: '5:30 PM', class: 'Spin Class', level: 'All Levels' },
    { time: '6:30 PM', class: 'HIIT Training', level: 'Advanced' },
    { time: '7:30 PM', class: 'Zumba', level: 'All Levels' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-700 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Dumbbell className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Living Fit Has a New Home
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-green-200">
              Welcome to Skye Fitness
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-10">
              Your premier fitness destination featuring state-of-the-art equipment, world-class facilities, and a community committed to wellness.
            </p>
            <a href="tel:702-786-0207" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300 text-lg">
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>

      {/* Vitality Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Vitality Has a New Home</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Skye Fitness, we believe that wellness is more than just working out—it's about creating a sustainable, healthy lifestyle. Our facility is designed to inspire, motivate, and support you every step of your fitness journey, whether you're a seasoned athlete or just beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-skye-navy mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need to achieve your fitness goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facilityFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Premium Equipment & Amenities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cardio Zone</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Treadmills with entertainment systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Elliptical trainers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Stationary and spin bikes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Rowing machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Stair climbers</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strength Area</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Complete free weight collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Olympic platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Cable machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Smith machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Resistance equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Aquatic Center</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Junior Olympic 25m pool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Dedicated lap lanes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Recreational swim area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Locker rooms with showers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Pool deck seating</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Extended Hours for Your Convenience</h3>
              <div className="text-xl">
                <p className="mb-2"><strong>Monday - Friday:</strong> 5:00 AM - 10:00 PM</p>
                <p className="mb-2"><strong>Saturday - Sunday:</strong> 6:00 AM - 9:00 PM</p>
                <p className="text-blue-100 text-sm mt-4">Pool hours may vary seasonally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Fitness Classes */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Group Fitness Classes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our energizing group classes led by certified instructors. All classes are FREE for Skye Canyon residents!
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6">
                <h3 className="text-2xl font-bold text-center">Sample Weekly Class Schedule</h3>
              </div>
              <div className="divide-y">
                {classSchedule.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-2 md:mb-0">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-bold text-gray-900">{item.time}</span>
                      </div>
                      <div className="flex-1 md:mx-6">
                        <span className="text-lg text-gray-900">{item.class}</span>
                      </div>
                      <div>
                        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                          {item.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              <Calendar className="h-5 w-5 inline mr-2" />
              Schedule subject to change. Check community calendar for updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Yoga & Pilates</h4>
              <p className="text-sm text-gray-600">Mind-body connection for flexibility and strength</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg text-gray-900 mb-2">HIIT & Boot Camp</h4>
              <p className="text-sm text-gray-600">High-intensity workouts for maximum results</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Aqua Fitness</h4>
              <p className="text-sm text-gray-600">Low-impact pool workouts for all ages</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Dance & Zumba</h4>
              <p className="text-sm text-gray-600">Fun, high-energy cardio dance parties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Personal Training Available</h2>
            <p className="text-xl text-gray-700 mb-8">
              Take your fitness to the next level with one-on-one guidance from our certified personal trainers. Get customized workout plans, nutrition guidance, and accountability to reach your goals faster.
            </p>
            <a href="tel:702-786-0207" className="btn-primary text-lg">
              Inquire About Personal Training
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-700 text-white">
        <div className="section-container text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Your Fitness Journey Starts Here</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join the Skye Fitness community and discover what it means to truly live fit. Schedule your tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:702-786-0207" className="btn-primary bg-white text-blue-700 hover:bg-gray-100 text-lg">
              Call: 702-786-0207
            </a>
            <Link href="/events" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300 text-lg">
              View Fitness Events
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

