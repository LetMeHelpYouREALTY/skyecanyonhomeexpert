import { Phone, Mail, MapPin, Facebook, Users } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { name: 'HOA Guide', href: '/homeowner-essentials/hoa-guide' },
    { name: 'Events Calendar', href: '/events' },
    { name: 'Contractor Directory', href: '/resident-resources/contractors' },
    { name: 'Amenities', href: '/community-living/amenities' },
  ]

  const resources = [
    { name: 'New Resident Guide', href: '/resident-resources/new-resident-guide' },
    { name: 'Trash Schedule', href: '/resident-resources/trash-schedule' },
    { name: 'Local Schools', href: '/community-living/schools' },
    { name: 'Pet Services', href: '/resident-resources/pet-services' },
  ]

  return (
    <footer className="bg-skye-navy text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-skye-gold" />
              <h3 className="text-xl font-bold">Skye Canyon Living</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted resource hub for everything about living in Skye Canyon, Nevada.
            </p>
            <div className="space-y-2">
              <a href="tel:702-222-1964" className="flex items-center space-x-2 text-skye-gold hover:text-yellow-300">
                <Phone className="h-4 w-4" />
                <span>702-222-1964</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-skye-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-skye-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Community</h3>
            <p className="text-gray-300 mb-4">
              Connect with fellow Skye Canyon homeowners and stay updated on local events.
            </p>
            <a
              href="tel:702-222-1964"
              className="inline-flex items-center space-x-2 bg-skye-gold text-skye-navy font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Join Network</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skye Canyon Living. A community lifestyle resource for Skye Canyon homeowners.</p>
        </div>
      </div>
    </footer>
  )
}

