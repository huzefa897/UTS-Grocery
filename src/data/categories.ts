import { Category } from '../types';


export const categories: Category[] = [
  {
    id: 'fresh',
    name: 'Fresh',
    subCategories: [
      { id: 'fruits', name: 'Fruits', parentId: 'fresh' },
      { id: 'vegetables', name: 'Vegetables', parentId: 'fresh' },
      { id: 'dairy', name: 'Dairy', parentId: 'fresh' },
      { id: 'meat', name: 'Meat', parentId: 'fresh' }
    ]
  },
  {
    id: 'frozen',
    name: 'Frozen',
    subCategories: [
      { id: 'ready-meals', name: 'Ready Meals', parentId: 'frozen' },
      { id: 'desserts', name: 'Desserts', parentId: 'frozen' },
      { id: 'vegetables-frozen', name: 'Vegetables', parentId: 'frozen' }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    subCategories: [
      { id: 'juices', name: 'Juices', parentId: 'beverages' },
      { id: 'coffee-tea', name: 'Coffee & Tea', parentId: 'beverages' },
      { id: 'water', name: 'Water', parentId: 'beverages' },
      { id: 'soft-drinks', name: 'Soft Drinks', parentId: 'beverages' }
    ]
  },
  {
    id: 'home',
    name: 'Home',
    subCategories: [
      { id: 'cleaning', name: 'Cleaning', parentId: 'home' },
      { id: 'household', name: 'Household', parentId: 'home' },
      { id: 'laundry', name: 'Laundry', parentId: 'home' }
    ]
  },
  {
    id: 'pet-food',
    name: 'Pet-food',
    subCategories: [
      { id: 'dog', name: 'Dog', parentId: 'pet-food' },
      { id: 'cat', name: 'Cat', parentId: 'pet-food' },
      { id: 'other-pets', name: 'Other Pets', parentId: 'pet-food' }
    ]
  },
  {
    id: 'pantry',
    name: 'Pantry',
    subCategories: [
      { id: 'staples', name: 'Staples', parentId: 'pantry' },
      { id: 'breakfast', name: 'Breakfast', parentId: 'pantry' },
      { id: 'canned-goods', name: 'Canned Goods', parentId: 'pantry' }
    ]
  }
];
