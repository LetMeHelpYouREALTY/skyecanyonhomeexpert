import Link from 'next/link'
import { Compass, Mountain, Utensils, Dumbbell } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things to Do Near Skye Canyon',
  description:
    'Outdoor recreation, dining, and day trips near Skye Canyon in northwest Las Vegas—from trails and parks to Red Rock and Mount Charleston.',
}

const ideas = [
  {
    icon: Dumbbell,
    title: 'On-site recreation',
    text: 'Explore Skye Fitness, neighborhood parks, and trail networks within the community.',
    href: '/community/skye-fitness',
  },
  {
    icon: Utensils,
    title: 'Local dining',
    text: 'Northwest Las Vegas offers casual chains and independent spots a short drive from Skye Canyon.',
    href: '/community-living/restaurants',
  },
  {
    icon: Mountain,
    title: 'Mount Charleston day trip',
    text: 'Cooler mountain air, hiking, and seasonal snow play are within driving distance.',
    href: '/community-living/mt-charleston',
  },
  {
    icon: Compass,
    title: 'Red Rock & desert outings',
    text: 'Plan early-morning hikes and scenic drives; carry water and check weather conditions.',
    href: '/community',
  },
]

export default function ThingsToDoPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-skye-navy to-skye-blue text-white py-16">
        <div className="section-container">
          <Compass className="h-12 w-12 mb-4 text-skye-gold" />
          <h1 className="text-5xl font-bold mb-4">Things to Do Near Skye Canyon</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Weekend ideas for Skye Canyon residents—on-campus amenities plus northwest Las Vegas and nearby outdoor destinations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container grid gap-6 md:grid-cols-2">
          {ideas.map((item) => (
            <Link key={item.title} href={item.href} className="card p-6 hover:shadow-xl transition-shadow group">
              <item.icon className="h-10 w-10 text-skye-blue mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-skye-blue">{item.title}</h2>
              <p className="text-gray-600">{item.text}</p>
              <span className="inline-block mt-4 text-skye-blue font-semibold">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
