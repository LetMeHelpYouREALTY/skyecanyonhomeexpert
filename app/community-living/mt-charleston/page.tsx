import Link from 'next/link'
import { Mountain, Snowflake, Trees } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mount Charleston Day Trips from Skye Canyon',
  description:
    'Plan a Mount Charleston getaway from Skye Canyon: hiking, picnics, seasonal snow, and driving tips from northwest Las Vegas.',
}

export default function MountCharlestonPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-800 to-emerald-900 text-white py-16">
        <div className="section-container">
          <Mountain className="h-12 w-12 mb-4 text-emerald-200" />
          <h1 className="text-5xl font-bold mb-4">Weekend Getaway: Mount Charleston</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Escape the Las Vegas heat with a mountain day trip. Check road conditions, fire restrictions, and trail status before you go.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-3xl space-y-8 text-gray-700 text-lg">
          <div className="flex gap-4">
            <Trees className="h-8 w-8 text-emerald-600 shrink-0" />
            <p>
              Spring through fall, popular trails around Kyle and Lee Canyons offer pine forest scenery. Arrive early on weekends for parking.
            </p>
          </div>
          <div className="flex gap-4">
            <Snowflake className="h-8 w-8 text-sky-600 shrink-0" />
            <p>
              Winter visitors may find snow play areas when storms arrive. Bring chains or 4WD if forecasts call for ice on mountain roads.
            </p>
          </div>
          <p>
            Pack layers, sunscreen, and plenty of water. Cell service can be spotty—download maps ahead of time and let someone know your plans.
          </p>
          <Link href="/community-living/things-to-do" className="btn-primary inline-block">
            More Things to Do
          </Link>
        </div>
      </section>
    </>
  )
}
