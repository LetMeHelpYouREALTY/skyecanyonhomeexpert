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
  /** Places API (New) primary types */
  primaryTypes: string[]
  /** Legacy PlacesService types */
  legacyTypes: string[]
}

/** Family master-planned community — parks, fitness, and daily errands first */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    legacyTypes: ['park'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym', 'fitness_center'],
    legacyTypes: ['gym'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    legacyTypes: ['grocery_or_supermarket', 'supermarket'],
  },
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    legacyTypes: ['restaurant'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    legacyTypes: ['cafe'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    legacyTypes: ['hospital', 'doctor'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy'],
    legacyTypes: ['pharmacy'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    legacyTypes: ['shopping_mall', 'department_store'],
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    legacyTypes: ['golf_course'],
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    legacyTypes: ['school'],
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    legacyTypes: ['parking'],
  },
]

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const category = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!category) {
    throw new Error(`Unknown amenity category: ${id}`)
  }
  return category
}
