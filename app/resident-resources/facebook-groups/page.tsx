import Link from 'next/link'
import { Facebook, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skye Canyon Neighborhood Groups',
  description:
    'How Skye Canyon residents find neighborhood Facebook groups and online forums to share local tips, events, and contractor referrals safely.',
}

export default function FacebookGroupsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-16">
        <div className="section-container">
          <Facebook className="h-12 w-12 mb-4 text-indigo-200" />
          <h1 className="text-5xl font-bold mb-4">Neighborhood Online Groups</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Social groups can help you meet neighbors and hear about local happenings—use common-sense privacy practices when you join.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-6 text-gray-700 text-lg">
          <div className="flex gap-4">
            <Users className="h-8 w-8 text-indigo-600 shrink-0" />
            <p>
              Search Facebook for Skye Canyon homeowner or village-specific groups. Verify that a group is active and moderated before you share personal information.
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>Never post gate codes, alarm details, or vacation dates publicly.</li>
            <li>Treat contractor recommendations as leads—still verify licenses and insurance.</li>
            <li>Report spam or suspicious solicitations to group admins.</li>
          </ul>
          <Link href="/events" className="btn-primary inline-block">
            Community Events Guide
          </Link>
        </div>
      </section>
    </>
  )
}
