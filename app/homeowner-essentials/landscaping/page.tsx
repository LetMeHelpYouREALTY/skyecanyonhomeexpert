import { TreePine, Droplets, Sun, Sprout, ThermometerSun } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desert Landscaping Tips for Skye Canyon Yards | Nevada Xeriscaping Guide',
  description: 'Complete desert landscaping guide for Skye Canyon homeowners: water-wise plants, xeriscaping tips, HOA-approved designs, and maintaining beautiful yards in Nevada climate.',
}

export default function LandscapingPage() {
  const nativePlants = [
    { name: 'Mexican Feather Grass', water: 'Low', sun: 'Full sun', notes: 'Elegant, low-maintenance ornamental' },
    { name: 'Desert Marigold', water: 'Low', sun: 'Full sun', notes: 'Year-round yellow blooms' },
    { name: 'Red Yucca', water: 'Very low', sun: 'Full sun', notes: 'Drought-tolerant, attracts hummingbirds' },
    { name: 'Texas Ranger', water: 'Low', sun: 'Full sun', notes: 'Purple flowers after rain' },
    { name: 'Desert Spoon', water: 'Very low', sun: 'Full sun', notes: 'Architectural interest, very hardy' },
    { name: 'Purple Trailing Lantana', water: 'Low', sun: 'Full sun', notes: 'Colorful ground cover' },
  ]

  const wateringTips = [
    { tip: 'Water deeply but infrequently', detail: 'Encourages deep root growth and drought resistance' },
    { tip: 'Early morning watering', detail: 'Reduces evaporation and fungal growth' },
    { tip: 'Drip irrigation systems', detail: 'Most efficient for desert landscaping' },
    { tip: 'Mulch everything', detail: '3-4 inches of mulch retains moisture and regulates temperature' },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <TreePine className="h-12 w-12 mb-4 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">Desert Landscaping Tips for Skye Canyon</h1>
            <p className="text-xl text-green-100">
              Create a beautiful, water-wise yard that thrives in Nevada's desert climate while meeting HOA guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Native Plants */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-4 flex items-center">
            <Sprout className="h-8 w-8 mr-2 text-green-600" />
            Best Native Plants for Skye Canyon
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            These water-wise plants are perfect for our desert climate and approved by the HOA:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nativePlants.map((plant) => (
              <div key={plant.name} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{plant.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                    <span><strong>Water:</strong> {plant.water}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                    <span><strong>Sun:</strong> {plant.sun}</span>
                  </div>
                  <p className="text-gray-600 mt-3">{plant.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watering Tips */}
      <section className="py-16 bg-blue-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8 flex items-center">
            <Droplets className="h-8 w-8 mr-2 text-blue-600" />
            Water-Wise Watering Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wateringTips.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.tip}</h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-800">
              <strong>Nevada Water Authority Rebates:</strong> Check if you qualify for rebates when converting grass to desert landscaping. The SNWA offers incentives for water-efficient landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8 flex items-center">
            <ThermometerSun className="h-8 w-8 mr-2 text-orange-600" />
            Seasonal Landscaping Calendar
          </h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Spring (March-May)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Plant warm-season annuals and perennials</li>
                <li>Apply pre-emergent weed control</li>
                <li>Increase watering frequency as temperatures rise</li>
                <li>Prune dead wood from winter</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-3">Summer (June-August)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Deep water established plants 2-3 times per week</li>
                <li>Apply fresh mulch to retain moisture</li>
                <li>Avoid major pruning during extreme heat</li>
                <li>Monitor irrigation systems for efficiency</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">Fall (September-November)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Best time for planting most desert natives</li>
                <li>Reduce watering as temperatures cool</li>
                <li>Fertilize before winter dormancy</li>
                <li>Plant cool-season color annuals</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Winter (December-February)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Minimal watering needed - check soil moisture</li>
                <li>Protect sensitive plants during freezes</li>
                <li>Plan next year's landscaping projects</li>
                <li>Prune dormant trees and shrubs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Guidelines */}
      <section className="py-16 bg-desert-sand">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8">Skye Canyon HOA Landscaping Requirements</h2>
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-4">What You Need to Know:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Front yards must be maintained and free of weeds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Rock landscaping must be professionally installed with proper weed barrier</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Artificial turf requires architectural committee approval</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Trees and large shrubs need approval before planting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">✓</span>
                <span>Backyard landscaping is homeowner's choice (within reason)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Landscapers CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Browse our directory of trusted landscaping contractors serving Skye Canyon.
          </p>
          <a href="/resident-resources/contractors#landscaping" className="btn-primary bg-white text-green-700 hover:bg-gray-100">
            View Landscaping Contractors
          </a>
        </div>
      </section>
    </>
  )
}

