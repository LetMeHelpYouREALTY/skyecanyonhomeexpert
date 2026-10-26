'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Calendar, Wrench, MapPin } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Skye Canyon Community', href: '/community', icon: MapPin },
    { name: 'Homeowner Essentials', href: '/homeowner-essentials', icon: Home },
    { name: 'Community Living', href: '/community-living', icon: Calendar },
    { name: 'Nearby Amenities', href: '/nearby-amenities', icon: MapPin },
    { name: 'Resident Resources', href: '/resident-resources', icon: Wrench },
    { name: 'Events Calendar', href: '/events', icon: Calendar },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-skye-blue" />
            <div>
              <div className="text-xl font-bold text-skye-navy">Skye Canyon Living</div>
              <div className="text-xs text-gray-600">Homeowner Resource Hub</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-skye-blue font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="tel:702-222-1964"
              className="btn-primary text-sm"
            >
              Call: 702-222-1964
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="tel:702-222-1964"
              className="block mx-4 mt-2 text-center btn-primary"
            >
              Call: 702-222-1964
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

