import { Utensils, MapPin, Star, Coffee, Pizza, Salad, IceCream } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Restaurants Near Skye Canyon (2025) - Local Dining Guide | Las Vegas NV',
  description: 'Complete guide to the best restaurants near Skye Canyon: breakfast spots, family dining, fast casual, coffee shops, and local favorites in northwest Las Vegas.',
  keywords: 'restaurants near Skye Canyon, Skye Canyon dining, Las Vegas restaurants, northwest Las Vegas food',
}

export default function RestaurantsPage() {
  const restaurants = [
    {
      name: "Mimi's Cafe",
      type: 'American, Breakfast & Brunch',
      location: 'Las Vegas, NV 89149',
      description: 'Cozy chain restaurant serving hearty American comfort food all day, including breakfast favorites.',
      bestFor: 'Family Brunch, Breakfast',
      icon: Coffee,
      rating: '4.2',
    },
    {
      name: 'Market Grille Cafe',
      type: 'American, Cafe',
      location: 'Las Vegas, NV 89149',
      description: 'Fresh, locally-sourced ingredients in a casual cafe setting. Great for healthy options and coffee.',
      bestFor: 'Healthy Lunch, Coffee',
      icon: Salad,
      rating: '4.5',
    },
    {
      name: 'Buffalo Wild Wings',
      type: 'Sports Bar, Wings',
      location: 'Las Vegas, NV 89147',
      description: 'Lively sports-bar chain serving wings, beer & other American pub fare with plenty of big-screen TVs.',
      bestFor: 'Sports Watching, Group Dining',
      icon: Utensils,
      rating: '4.0',
    },
    {
      name: 'Baby Stacks Cafe',
      type: 'Breakfast & Brunch',
      location: 'Las Vegas, NV 89128',
      description: 'Popular breakfast spot known for creative pancakes, French toast, and hearty morning meals.',
      bestFor: 'Weekend Breakfast',
      icon: Coffee,
      rating: '4.6',
    },
    {
      name: 'Michoacan Mexican Restaurant',
      type: 'Mexican',
      location: 'Las Vegas, NV 89149',
      description: 'Authentic Mexican cuisine with traditional flavors, generous portions, and friendly service.',
      bestFor: 'Mexican Food, Family Dinner',
      icon: Utensils,
      rating: '4.4',
    },
    {
      name: 'Starbucks',
      type: 'Coffee & Tea',
      location: 'Las Vegas, NV 89102',
      description: 'Seattle-based coffeehouse chain known for signature roasts, light bites, and WiFi availability.',
      bestFor: 'Coffee, Quick Breakfast',
      icon: Coffee,
      rating: '4.1',
    },
    {
      name: 'Cafe Rio',
      type: 'Mexican, Fast Casual',
      location: 'Las Vegas, NV 89102',
      description: 'Fresh Mex with made-from-scratch tortillas, burritos, salads, and tacos prepared daily.',
      bestFor: 'Quick Mexican, Lunch',
      icon: Utensils,
      rating: '4.3',
    },
    {
      name: 'Tropical Smoothie Cafe',
      type: 'Smoothies & Healthy',
      location: 'Las Vegas, NV 89103',
      description: 'Chain serving custom smoothies along with sandwiches & wraps in health-minded surroundings.',
      bestFor: 'Healthy Options, Smoothies',
      icon: Salad,
      rating: '4.2',
    },
    {
      name: 'Thai Spoon',
      type: 'Thai Cuisine',
      location: 'Las Vegas, NV 89149',
      description: 'Authentic Thai restaurant offering traditional dishes with customizable spice levels.',
      bestFor: 'Thai Food, Date Night',
      icon: Utensils,
      rating: '4.5',
    },
    {
      name: "Menchie's Frozen Yogurt",
      type: 'Frozen Yogurt, Dessert',
      location: 'Las Vegas, NV 89119',
      description: 'Self-serve frozen yogurt chain with a variety of flavors and toppings, priced by weight.',
      bestFor: 'Dessert, Family Treat',
      icon: IceCream,
      rating: '4.4',
    },
  ]

  const categories = [
    { name: 'Breakfast & Brunch', icon: Coffee, count: 3 },
    { name: 'Family Dining', icon: Utensils, count: 5 },
    { name: 'Healthy Options', icon: Salad, count: 2 },
    { name: 'Desserts', icon: IceCream, count: 1 },
  ]

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <Utensils className="h-12 w-12 mb-4 text-orange-200" />
            <h1 className="text-5xl font-bold mb-4">Best Restaurants Near Skye Canyon (2025)</h1>
            <p className="text-xl text-orange-100">
              Your complete guide to local dining—from quick bites to family favorites, all within minutes of home.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg p-4 text-center shadow">
                <category.icon className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} Options</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant List */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Local Dining Directory</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card hover:shadow-2xl transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{restaurant.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-600 mr-1 fill-current" />
                      <span className="font-bold text-gray-900">{restaurant.rating}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {restaurant.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{restaurant.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-700">
                      <restaurant.icon className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="font-semibold">Best For:</span>
                      <span className="ml-2">{restaurant.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-orange-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Local Dining Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Weekend Brunch Favorites</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Baby Stacks Cafe</strong> - Arrive early, popular spot!</li>
                  <li>• <strong>Mimi's Cafe</strong> - Great for larger groups</li>
                  <li>• <strong>Market Grille</strong> - Healthy breakfast options</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Quick Weeknight Dinner</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Cafe Rio</strong> - Fast fresh Mexican</li>
                  <li>• <strong>Buffalo Wild Wings</strong> - Sports & wings</li>
                  <li>• <strong>Thai Spoon</strong> - Quick authentic Thai</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Family-Friendly</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Michoacan</strong> - Kids menu & large portions</li>
                  <li>• <strong>Menchie's</strong> - Perfect dessert stop</li>
                  <li>• <strong>Mimi's Cafe</strong> - Comfortable & casual</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Healthy Choices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Tropical Smoothie</strong> - Smoothies & wraps</li>
                  <li>• <strong>Market Grille</strong> - Fresh, local ingredients</li>
                  <li>• <strong>Cafe Rio</strong> - Customizable bowls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Dining */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Pizza className="h-16 w-16 mx-auto mb-6 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Dining Options Nearby</h2>
            <p className="text-xl text-gray-700 mb-6">
              Skye Canyon residents are just minutes from the Skye Canyon Marketplace, Montecito Marketplace, and dozens more restaurants throughout northwest Las Vegas.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Plus, downtown Las Vegas and the Strip are only a 20-30 minute drive for endless world-class dining options.
            </p>
            <a href="/community-living/things-to-do" className="btn-primary">
              Explore More Local Attractions
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Know a Great Restaurant We Missed?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Help us keep this guide updated for fellow Skye Canyon residents.
          </p>
          <a href="tel:702-222-1964" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
            Contact Us: 702-222-1964
          </a>
        </div>
      </section>
    </>
  )
}

