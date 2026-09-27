import Link from 'next/link'
import { Calendar, Bell, MapPin, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Events & Community Calendar',
  description:
    'How to find Skye Canyon community events, fitness classes, and neighborhood gatherings in northwest Las Vegas—plus tips for staying in the loop.',
}

export default function EventsPage() {
  const tips = [
    {
      icon: Bell,
      title: 'Check official HOA channels',
      text:
        'Your HOA management company and resident portal often post the most current community meetings, pool hours, and association updates.',
    },
    {
      icon: Users,
      title: 'Connect with neighbors',
      text:
        'Neighborhood groups and resident networks are a practical way to hear about block parties, volunteer days, and informal meetups.',
    },
    {
      icon: MapPin,
      title: 'Explore on-site amenities',
      text:
        'Skye Fitness, parks, and community spaces host recurring programs. Confirm schedules on-site or through management before you plan a visit.',
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-skye-navy to-blue-700 text-white py-16">
        <div className="section-container">
          <Calendar className="h-12 w-12 mb-4 text-skye-gold" />
          <h1 className="text-5xl font-bold mb-4">Skye Canyon Events Calendar</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A practical guide to finding community events, programs, and gatherings in Skye Canyon—without relying on outdated third-party listings.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-4xl">
          <p className="text-lg text-gray-700 mb-10">
            Event dates change seasonally. Use the sources below to confirm times, registration requirements, and any resident-only access rules before you attend.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {tips.map((item) => (
              <div key={item.title} className="card p-6">
                <item.icon className="h-8 w-8 text-skye-blue mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/community/skye-fitness" className="btn-primary">
              Skye Fitness &amp; Programs
            </Link>
            <Link href="/community" className="btn-secondary">
              Community Overview
            </Link>
            <Link href="/resident-resources/facebook-groups" className="btn-secondary">
              Neighborhood Groups
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
