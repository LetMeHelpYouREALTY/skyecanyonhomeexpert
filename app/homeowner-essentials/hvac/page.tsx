import { Wind, ThermometerSun, Wrench, Phone, Star, CheckCircle, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best HVAC Companies Servicing Skye Canyon | Las Vegas Air Conditioning',
  description: 'Trusted HVAC contractors for Skye Canyon homeowners: air conditioning repair, maintenance, installation, and energy-saving tips for desert living in Las Vegas, Nevada.',
  keywords: 'HVAC Skye Canyon, air conditioning Las Vegas, AC repair Skye Canyon, best contractors Skye Canyon',
}

export default function HVACPage() {
  const hvacCompanies = [
    {
      name: 'Air Conditioning Specialists',
      services: ['AC Repair', 'Installation', '24/7 Emergency', 'Maintenance Plans'],
      specialties: 'Residential HVAC experts with 30+ years in Las Vegas',
      phone: '702-555-0101',
      rating: '4.8',
    },
    {
      name: 'Desert Air Cooling & Heating',
      services: ['AC/Heating Repair', 'New Systems', 'Duct Cleaning', 'Smart Thermostats'],
      specialties: 'Energy-efficient systems for desert climate',
      phone: '702-555-0102',
      rating: '4.7',
    },
    {
      name: 'Nevada Climate Control',
      services: ['Full HVAC Service', 'Preventive Maintenance', 'Commercial & Residential'],
      specialties: 'Licensed, insured, same-day service available',
      phone: '702-555-0103',
      rating: '4.9',
    },
    {
      name: 'Las Vegas Air Experts',
      services: ['AC Repair', 'Installation', 'Maintenance Plans', 'Indoor Air Quality'],
      specialties: 'Skye Canyon specialists, fast response times',
      phone: '702-555-0104',
      rating: '4.6',
    },
  ]

  const maintenanceTips = [
    {
      season: 'Spring (March-May)',
      icon: '🌸',
      tasks: [
        'Schedule pre-summer AC tune-up',
        'Replace air filters',
        'Clean outdoor condenser unit',
        'Test thermostat functionality',
        'Check refrigerant levels',
      ],
    },
    {
      season: 'Summer (June-August)',
      icon: '☀️',
      tasks: [
        'Change filters monthly during heavy use',
        'Keep outdoor unit clear of debris',
        'Monitor energy bills for spikes',
        'Set thermostat to 78°F when home',
        'Use ceiling fans to circulate air',
      ],
    },
    {
      season: 'Fall (September-November)',
      icon: '🍂',
      tasks: [
        'Switch to heating mode test',
        'Schedule furnace inspection',
        'Clean vents and registers',
        'Check for air leaks around windows',
        'Replace batteries in thermostat',
      ],
    },
    {
      season: 'Winter (December-February)',
      icon: '❄️',
      tasks: [
        'Test heating system regularly',
        'Keep vents unblocked',
        'Check pilot light if gas furnace',
        'Maintain humidity levels',
        'Schedule spring AC check',
      ],
    },
  ]

  const energySavingTips = [
    'Upgrade to a programmable or smart thermostat',
    'Keep thermostat at 78°F or higher in summer',
    'Change air filters every 30-60 days',
    'Seal air leaks around doors and windows',
    'Install ceiling fans to improve circulation',
    'Close blinds during peak sun hours',
    'Schedule biannual professional maintenance',
    'Consider upgrading to high-efficiency HVAC system',
  ]

  const emergencySigns = [
    'No cold air despite AC running',
    'Strange noises (grinding, squealing, banging)',
    'Burning smell from vents',
    'Water leaking around unit',
    'Frozen evaporator coils',
    'Tripped breakers repeatedly',
    'System won\'t turn on at all',
    'Unusually high energy bills',
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Wind className="h-12 w-12 mb-4 text-cyan-200" />
            <h1 className="text-5xl font-bold mb-4">Best HVAC Companies Servicing Skye Canyon</h1>
            <p className="text-xl text-cyan-100">
              Trusted air conditioning and heating contractors, maintenance schedules, and energy-saving tips for desert living.
            </p>
          </div>
        </div>
      </section>

      {/* Desert Climate Info */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <ThermometerSun className="h-16 w-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">HVAC in the Las Vegas Desert</h2>
            <p className="text-xl text-gray-700 text-center mb-8">
              Living in Skye Canyon means your HVAC system works harder than most. With summer temperatures exceeding 110°F, proper maintenance and reliable service are essential for comfort and safety.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">110°F+</div>
                <div className="text-gray-700">Summer highs require robust AC</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">9 months</div>
                <div className="text-gray-700">Cooling season in Las Vegas</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2x/year</div>
                <div className="text-gray-700">Recommended professional service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Companies */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Trusted HVAC Contractors</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Local companies recommended by Skye Canyon homeowners</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hvacCompanies.map((company) => (
              <div key={company.name} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                      <p className="text-cyan-100 text-sm">{company.specialties}</p>
                    </div>
                    <div className="bg-white text-blue-600 px-3 py-1 rounded-full flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      <span className="font-bold">{company.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Services:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {company.services.map((service) => (
                      <div key={service} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`tel:${company.phone}`}
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {company.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Get Multiple Quotes</h3>
                <p className="text-gray-700">
                  For major repairs or new installations, always get 2-3 quotes. Prices can vary significantly, and you want to ensure you're getting quality service at a fair price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Seasonal Maintenance Calendar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {maintenanceTips.map((season) => (
              <div key={season.season} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{season.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{season.season}</h3>
                </div>
                <ul className="space-y-3">
                  {season.tasks.map((task) => (
                    <li key={task} className="flex items-start text-gray-700">
                      <Wrench className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Saving Tips */}
      <section className="py-20 bg-green-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Energy-Saving Tips for Desert Living</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Lower your energy bills while staying comfortable in Skye Canyon
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {energySavingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow flex items-start">
                  <span className="bg-green-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{tip}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Average Savings</h3>
              <p className="text-4xl font-bold mb-2">$200-400/year</p>
              <p className="text-green-100">By following these energy-saving practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">When to Call for Emergency Service</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Don't wait if you notice these warning signs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencySigns.map((sign) => (
                <div key={sign} className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{sign}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-red-100 border-2 border-red-600 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-red-900 mb-3">During Las Vegas Summer Heat</h3>
              <p className="text-red-800 mb-4">
                A broken AC in 110°F+ weather is a health emergency, especially for children, elderly, and pets. Don't delay—call for service immediately.
              </p>
              <p className="text-red-900 font-bold">Most HVAC companies offer 24/7 emergency service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="section-container text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Need More Home Service Recommendations?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Browse our complete contractor directory for plumbers, electricians, and more trusted local professionals.
          </p>
          <a href="/resident-resources/contractors" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg">
            View Contractor Directory
          </a>
        </div>
      </section>
    </>
  )
}

