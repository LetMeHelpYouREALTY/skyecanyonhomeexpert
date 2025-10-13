import { Droplets, Sun, ThermometerSun, Beaker, Calendar, AlertCircle, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Maintenance in Skye Canyon Climate | Las Vegas Pool Care Guide',
  description: 'Complete pool care guide for Skye Canyon homeowners: cleaning schedules, chemical balance, equipment maintenance, and winterizing tips for Nevada desert climate.',
  keywords: 'pool maintenance Skye Canyon, Las Vegas pool care, desert pool maintenance, best contractors Skye Canyon',
}

export default function PoolMaintenancePage() {
  const weeklyTasks = [
    'Test and balance water chemistry (pH, chlorine, alkalinity)',
    'Skim surface for leaves and debris',
    'Empty skimmer baskets',
    'Brush walls and floor',
    'Vacuum pool floor',
    'Check water level and refill if needed',
    'Inspect equipment for leaks or issues',
  ]

  const monthlyTasks = [
    'Deep clean filters',
    'Check and clean salt cell (if salt water pool)',
    'Inspect pool equipment and pump',
    'Test calcium hardness',
    'Check for algae growth',
    'Lubricate O-rings and gaskets',
    'Inspect pool surface for cracks or damage',
  ]

  const poolServices = [
    {
      name: 'Desert Oasis Pool Service',
      services: ['Weekly Maintenance', 'Chemical Balancing', 'Equipment Repair', 'Green Pool Recovery'],
      phone: '702-555-0201',
    },
    {
      name: 'Skye Canyon Pool Pros',
      services: ['Full Service', 'Filter Cleaning', 'Equipment Installation', 'Pool Opening/Closing'],
      phone: '702-555-0202',
    },
    {
      name: 'Las Vegas Pool Care',
      services: ['Maintenance Plans', 'Repairs', 'Automation Systems', 'Energy Efficient Upgrades'],
      phone: '702-555-0203',
    },
    {
      name: 'Crystal Clear Pools',
      services: ['Weekly Service', 'Emergency Repairs', 'Remodeling', 'Salt System Conversion'],
      phone: '702-555-0204',
    },
  ]

  const chemicalGuide = [
    {
      chemical: 'pH Level',
      ideal: '7.4 - 7.6',
      why: 'Ensures chlorine effectiveness and swimmer comfort',
      adjust: 'pH Up/Down chemicals',
    },
    {
      chemical: 'Free Chlorine',
      ideal: '2.0 - 4.0 ppm',
      why: 'Sanitizes water and kills bacteria',
      adjust: 'Chlorine tablets, liquid, or shock',
    },
    {
      chemical: 'Total Alkalinity',
      ideal: '80 - 120 ppm',
      why: 'Stabilizes pH levels',
      adjust: 'Alkalinity Increaser',
    },
    {
      chemical: 'Calcium Hardness',
      ideal: '200 - 400 ppm',
      why: 'Prevents plaster damage and scaling',
      adjust: 'Calcium Chloride or dilution',
    },
    {
      chemical: 'Cyanuric Acid',
      ideal: '30 - 50 ppm',
      why: 'Protects chlorine from UV breakdown',
      adjust: 'Stabilizer/Conditioner',
    },
  ]

  const seasonalTips = [
    {
      season: 'Spring (March-May)',
      temp: '70-85°F',
      tips: [
        'Increase filtration time as water warms',
        'Monitor chemical levels more frequently',
        'Check for winter damage',
        'Clean filters thoroughly',
        'Start regular maintenance schedule',
      ],
    },
    {
      season: 'Summer (June-August)',
      temp: '90-110°F',
      tips: [
        'Run pump 10-12 hours daily in extreme heat',
        'Test water chemistry 2-3 times per week',
        'Add water frequently due to evaporation',
        'Shock pool weekly',
        'Clean skimmers and filters more often',
        'Consider partial shade for water temp control',
      ],
    },
    {
      season: 'Fall (September-November)',
      temp: '70-90°F',
      tips: [
        'Remove falling leaves daily',
        'Reduce pump run time as temps drop',
        'Continue regular chemical balance',
        'Deep clean before winter',
        'Check heater if planning winter use',
      ],
    },
    {
      season: 'Winter (December-February)',
      temp: '50-70°F',
      tips: [
        'Run pump 4-6 hours daily minimum',
        'Continue basic chemical maintenance',
        'Monitor for algae in warmer periods',
        'Protect equipment from freezing temps',
        'Keep water circulating to prevent issues',
      ],
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Droplets className="h-12 w-12 mb-4 text-cyan-200" />
            <h1 className="text-5xl font-bold mb-4">Pool Maintenance in Skye Canyon Climate</h1>
            <p className="text-xl text-cyan-100">
              Complete pool care guide: cleaning schedules, chemical balance, equipment maintenance, and desert climate considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Desert Pool Challenges */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <ThermometerSun className="h-16 w-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Pool Ownership in the Las Vegas Desert</h2>
            <p className="text-xl text-gray-700 text-center mb-8">
              The Nevada desert presents unique challenges for pool maintenance. Extreme heat, intense UV rays, low humidity, and dust require extra attention to keep your pool pristine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <Sun className="h-10 w-10 text-orange-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Intense UV Rays</h3>
                <p className="text-gray-600">Breaks down chlorine faster, requiring more frequent chemical additions</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <Droplets className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">High Evaporation</h3>
                <p className="text-gray-600">Can lose 1/4" or more of water daily in summer heat</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <AlertCircle className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Dust & Debris</h3>
                <p className="text-gray-600">Desert winds bring dust and debris requiring frequent cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Maintenance Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Tasks</h3>
              <ul className="space-y-3">
                {weeklyTasks.map((task) => (
                  <li key={task} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Tasks</h3>
              <ul className="space-y-3">
                {monthlyTasks.map((task) => (
                  <li key={task} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-800">
              <strong>Pro Tip:</strong> Summer months may require 2-3 times per week attention due to increased use, evaporation, and chemical depletion. Many Skye Canyon homeowners hire professional weekly service during peak season.
            </p>
          </div>
        </div>
      </section>

      {/* Chemical Balance Guide */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <Beaker className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Chemical Balance Guide</h2>
            <p className="text-xl text-gray-600 text-center mb-12">Essential water chemistry for safe, sparkling pools</p>
            
            <div className="grid grid-cols-1 gap-4">
              {chemicalGuide.map((item) => (
                <div key={item.chemical} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.chemical}</h3>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Ideal Range</div>
                      <div className="text-lg font-bold text-blue-600">{item.ideal}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Why It Matters</div>
                      <div className="text-sm text-gray-800">{item.why}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">How to Adjust</div>
                      <div className="text-sm text-gray-800">{item.adjust}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Testing is Critical</h3>
                  <p className="text-gray-700">
                    Test your water at least twice per week during summer. Bring a water sample to a local pool store for professional testing monthly to catch any issues early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Seasonal Pool Care in Skye Canyon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {seasonalTips.map((season) => (
              <div key={season.season} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{season.season}</h3>
                  <div className="flex items-center text-cyan-100">
                    <ThermometerSun className="h-5 w-5 mr-2" />
                    <span>Average Temps: {season.temp}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {season.tips.map((tip) => (
                      <li key={tip} className="flex items-start text-gray-700">
                        <span className="text-blue-600 font-bold mr-3">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Service Companies */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Professional Pool Service Companies</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Local pool professionals serving Skye Canyon
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {poolServices.map((company) => (
              <div key={company.name} className="card">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{company.name}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.services.map((service) => (
                        <span key={service} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={`tel:${company.phone}`}
                    className="flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Call: {company.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pool Equipment Maintenance</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pump & Filter</h3>
                <p className="text-gray-700">Run pump 8-12 hours daily in summer. Clean or backwash filter when pressure gauge reads 8-10 PSI above normal. Replace filter cartridges every 1-2 years.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automatic Pool Cleaner</h3>
                <p className="text-gray-700">Empty debris bag/canister weekly. Check hoses for cracks. Inspect wheels and brushes for wear. Clean filter regularly for optimal performance.</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Salt System (if applicable)</h3>
                <p className="text-gray-700">Inspect salt cell every 3 months for scale buildup. Clean with diluted acid if needed. Test salt levels monthly (ideal: 2,700-3,400 ppm).</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heater</h3>
                <p className="text-gray-700">Annual professional inspection before use. Clear debris from around unit. Check for proper ignition and even heating. Service burner assembly as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="section-container text-center">
          <Droplets className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Need More Home Maintenance Help?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Explore our complete homeowner essentials guide for tips on landscaping, HVAC, security, and more.
          </p>
          <a href="/homeowner-essentials" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg">
            View All Homeowner Guides
          </a>
        </div>
      </section>
    </>
  )
}

