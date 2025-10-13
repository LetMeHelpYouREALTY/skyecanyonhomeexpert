import { Phone, Mail, FileText, DollarSign, Home, AlertCircle, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Skye Canyon HOA Guide - Rules, Fees & Contacts Explained | Nevada',
  description: 'Everything about Skye Canyon HOA rules explained: monthly fees, architectural guidelines, amenity access, contact information, and regulations for homeowners in Nevada.',
  keywords: 'Skye Canyon HOA rules explained, Skye Canyon HOA fees, Skye Canyon homeowner association',
}

export default function HOAGuidePage() {
  const hoaFees = [
    { type: 'Single Family Homes', fee: '$90-120/month', includes: 'Community amenities, landscaping, security' },
    { type: 'Townhomes', fee: '$150-200/month', includes: 'All above plus exterior maintenance' },
  ]

  const commonRules = [
    { rule: 'Exterior Paint Colors', detail: 'Must be approved by Architectural Committee from pre-approved palette' },
    { rule: 'Landscaping', detail: 'Front yards must be maintained; desert-friendly plants encouraged' },
    { rule: 'Parking', detail: 'No commercial vehicles overnight; RV/boat storage restrictions apply' },
    { rule: 'Fencing', detail: 'Wrought iron or approved materials; height restrictions vary by location' },
    { rule: 'Solar Panels', detail: 'Permitted with prior approval; installation guidelines apply' },
    { rule: 'Pets', detail: 'Allowed with restrictions on number and breed; must be leashed in common areas' },
  ]

  const contacts = [
    { title: 'HOA Management Company', name: 'FirstService Residential', phone: '702-435-7414', email: 'skyecanyon@fsresidential.com' },
    { title: 'Architectural Committee', detail: 'Submit requests via HOA management portal or email' },
    { title: 'Security', phone: '702-XXX-XXXX', detail: 'Non-emergency community security' },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-skye-navy to-blue-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <FileText className="h-12 w-12 mb-4 text-skye-gold" />
            <h1 className="text-5xl font-bold mb-4">Complete Skye Canyon HOA Guide</h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about your Homeowners Association: fees, rules, architectural guidelines, and contact information.
            </p>
          </div>
        </div>
      </section>

      {/* HOA Fees */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8 flex items-center">
            <DollarSign className="h-8 w-8 mr-2 text-skye-blue" />
            HOA Fees & What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {hoaFees.map((item) => (
              <div key={item.type} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.type}</h3>
                <div className="text-3xl font-bold text-skye-blue mb-4">{item.fee}</div>
                <p className="text-gray-600">{item.includes}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-skye-blue p-6 rounded">
            <p className="text-gray-700">
              <strong>What Your HOA Fees Cover:</strong> Community pools, fitness centers, parks, walking trails, landscaping of common areas, security patrols, street maintenance, and community events.
            </p>
          </div>
        </div>
      </section>

      {/* Common Rules */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8 flex items-center">
            <Home className="h-8 w-8 mr-2 text-skye-blue" />
            Common HOA Rules & Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonRules.map((item) => (
              <div key={item.rule} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  {item.rule}
                </h3>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Important: Get Approval First</h3>
                <p className="text-gray-700">
                  Any exterior changes to your home (paint, landscaping, structures, solar) require prior written approval from the Architectural Committee. Submit requests at least 30 days before planned work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Access */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8">Amenity Access & Reservations</h2>
          <div className="prose max-w-none">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4">Community Amenities Available to Homeowners:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span><strong>Skye Fitness Center:</strong> State-of-the-art gym with cardio and weight equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span><strong>Community Pools:</strong> Multiple pools and splash pads throughout the community</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span><strong>Parks & Playgrounds:</strong> Over 20 parks with modern equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span><strong>Event Lawn:</strong> Reservable for private parties and gatherings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                  <span><strong>Walking/Biking Trails:</strong> Miles of maintained trails connecting the community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-desert-sand">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8">HOA Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                {contact.name && <p className="text-gray-700 font-semibold mb-2">{contact.name}</p>}
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="flex items-center text-skye-blue hover:text-blue-700 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    {contact.phone}
                  </a>
                )}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="flex items-center text-skye-blue hover:text-blue-700 mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    {contact.email}
                  </a>
                )}
                {contact.detail && <p className="text-gray-600 text-sm mt-2">{contact.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-skye-navy to-skye-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About HOA Rules?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the Skye Canyon Homeowner Network for insider tips and connect with neighbors.
          </p>
          <a href="tel:702-222-1964" className="btn-primary bg-skye-gold text-skye-navy hover:bg-yellow-300">
            Call: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}

