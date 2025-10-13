import Link from 'next/link'
import { Home, Droplets, Wind, Shield, Wrench, TreePine } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homeowner Essentials - Skye Canyon HOA Guide & Home Maintenance | Nevada',
  description: 'Essential guides for Skye Canyon homeowners: Complete HOA rules explained, desert landscaping tips, best HVAC companies, pool maintenance, and home security options in Nevada.',
}

export default function HomeownerEssentialsPage() {
  const articles = [
    {
      icon: Home,
      title: 'Complete Skye Canyon HOA Guide',
      description: 'Everything you need to know about HOA fees, architectural guidelines, rules, regulations, and contact information.',
      href: '/homeowner-essentials/hoa-guide',
      featured: true,
    },
    {
      icon: TreePine,
      title: 'Desert Landscaping Tips for Skye Canyon Yards',
      description: 'Water-wise landscaping, native plants, xeriscaping tips, and maintaining beautiful yards in the Nevada desert climate.',
      href: '/homeowner-essentials/landscaping',
      featured: true,
    },
    {
      icon: Wind,
      title: 'Best HVAC Companies Servicing Skye Canyon',
      description: 'Trusted air conditioning and heating contractors, maintenance schedules, and energy-saving tips for desert living.',
      href: '/homeowner-essentials/hvac',
      featured: true,
    },
    {
      icon: Droplets,
      title: 'Pool Maintenance in Skye Canyon Climate',
      description: 'Complete pool care guide: cleaning schedules, chemical balance, equipment maintenance, and winterizing in Nevada.',
      href: '/homeowner-essentials/pool-maintenance',
      featured: false,
    },
    {
      icon: Shield,
      title: 'Skye Canyon Home Security Options',
      description: 'Best home security systems, monitoring services, smart home integration, and neighborhood watch programs.',
      href: '/homeowner-essentials/security',
      featured: false,
    },
    {
      icon: Wrench,
      title: 'Home Maintenance Checklist',
      description: 'Seasonal maintenance tasks, inspection schedules, and preventive care to protect your Skye Canyon home.',
      href: '/homeowner-essentials/maintenance-checklist',
      featured: false,
    },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-skye-navy to-blue-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Home className="h-12 w-12 mb-4 text-skye-gold" />
            <h1 className="text-5xl font-bold mb-4">Homeowner Essentials</h1>
            <p className="text-xl text-blue-100">
              Complete guides and resources for maintaining and enjoying your Skye Canyon home. From HOA rules to home maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-skye-navy mb-8">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="card group hover:scale-105 transition-transform"
              >
                <div className="p-8">
                  <div className="bg-blue-50 text-skye-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-skye-blue group-hover:text-white transition-colors">
                    <article.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-skye-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="text-skye-blue font-semibold flex items-center">
                    Read Full Guide <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-skye-navy mb-8">All Homeowner Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.filter(a => !a.featured).map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="card group"
              >
                <div className="p-6">
                  <div className="bg-gray-100 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-skye-blue group-hover:text-white transition-colors">
                    <article.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-skye-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-desert-sand">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-skye-navy mb-4">Need Help with Your Home?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with trusted local contractors and service providers in our Resident Resources section.
          </p>
          <Link href="/resident-resources/contractors" className="btn-primary">
            View Contractor Directory
          </Link>
        </div>
      </section>
    </>
  )
}

