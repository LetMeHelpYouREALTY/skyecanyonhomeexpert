export type AmenityCategoryId =
  | 'parks'
  | 'fitness'
  | 'grocery'
  | 'restaurants'
  | 'cafes'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'golf'
  | 'schools'
  | 'parking'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Places API (New) primary types — one searchNearby per category */
  primaryTypes: string[]
}

/** Master-planned community — parks, fitness, and daily errands first */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
  },
]

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const category = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!category) {
    throw new Error(`Unknown amenity category: ${id}`)
  }
  return category
}
