import { Product } from '../types';

// Sample product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Sweet and fresh organic bananas, perfect for smoothies or a healthy snack.',
    price: 4.99,
    unit: 'bunch',
    category: 'Fresh',
    subCategory: 'Fruits',
    image: 'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    description: 'Juicy, ripe strawberries, locally sourced and ready to eat.',
    price: 5.99,
    unit: '250g',
    category: 'Fresh',
    subCategory: 'Fruits',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '3',
    name: 'Avocado',
    description: 'Perfectly ripe avocados, great for salads or making guacamole.',
    price: 2.99,
    unit: 'each',
    category: 'Fresh',
    subCategory: 'Vegetables',
    image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '4',
    name: 'Frozen Pizza',
    description: 'Quick and easy pepperoni pizza, ready in minutes from your freezer.',
    price: 8.99,
    unit: '400g',
    category: 'Frozen',
    subCategory: 'Ready Meals',
    image: 'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '5',
    name: 'Ice Cream',
    description: 'Premium vanilla ice cream made with real cream and vanilla beans.',
    price: 6.49,
    unit: '500ml',
    category: 'Frozen',
    subCategory: 'Desserts',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: false
  },
  {
    id: '6',
    name: 'Orange Juice',
    description: 'Freshly squeezed orange juice with no added sugar or preservatives.',
    price: 3.99,
    unit: '1L',
    category: 'Beverages',
    subCategory: 'Juices',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '7',
    name: 'Sparkling Water',
    description: 'Refreshing sparkling water with a hint of natural lemon flavor.',
    price: 2.49,
    unit: '750ml',
    category: 'Beverages',
    subCategory: 'Water',
    image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '8',
    name: 'Toilet Paper',
    description: 'Soft and strong 3-ply toilet paper, pack of 12 rolls.',
    price: 9.99,
    unit: '12 pack',
    category: 'Home',
    subCategory: 'Household',
    image: 'https://images.pexels.com/photos/6021556/pexels-photo-6021556.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '9',
    name: 'Dish Soap',
    description: 'Powerful dish soap that cuts through grease while being gentle on hands.',
    price: 3.49,
    unit: '500ml',
    category: 'Home',
    subCategory: 'Cleaning',
    image: 'https://images.pexels.com/photos/5217954/pexels-photo-5217954.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '10',
    name: 'Dog Food',
    description: 'Premium dry dog food with real chicken as the first ingredient.',
    price: 24.99,
    unit: '5kg',
    category: 'Pet-food',
    subCategory: 'Dog',
    image: 'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: false
  },
  {
    id: '11',
    name: 'Cat Food',
    description: 'Gourmet wet cat food with tender pieces in gravy.',
    price: 12.99,
    unit: '12 pack',
    category: 'Pet-food',
    subCategory: 'Cat',
    image: 'https://images.pexels.com/photos/6413433/pexels-photo-6413433.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
  },
  {
    id: '12',
    name: 'Milk',
    description: 'Fresh whole milk from local farms, pasteurized and homogenized.',
    price: 2.99,
    unit: '1L',
    category: 'Fresh',
    subCategory: 'Dairy',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600',
    inStock: true
    
  },
  {
      id: '14',
      name: 'Whole Wheat Bread',
      description: 'Freshly baked whole wheat bread, perfect for sandwiches and toast.',
      price: 3.49,
      unit: '1 loaf',
      category: 'Fresh',
      subCategory: 'Bakery',
      image: 'https://images.pexels.com/photos/2434/food-healthy-vegetables-bread.jpg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '15',
      name: 'Cheddar Cheese',
      description: 'Aged cheddar cheese, rich and creamy with a sharp flavor.',
      price: 5.99,
      unit: '200g',
      category: 'Fresh',
      subCategory: 'Dairy',
      image: 'https://images.pexels.com/photos/161079/cheese-cheddar-dairy-161079.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '16',
      name: 'Almonds',
      description: 'Crunchy and nutritious roasted almonds, lightly salted.',
      price: 7.49,
      unit: '500g',
      category: 'Pantry',
      subCategory: 'Nuts',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '17',
      name: 'Olive Oil',
      description: 'Extra virgin olive oil, cold-pressed for maximum flavor.',
      price: 9.99,
      unit: '1L',
      category: 'Pantry',
      subCategory: 'Cooking',
      image: 'https://images.pexels.com/photos/160357/olive-oil-salad-dressing-cooking-160357.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '18',
      name: 'Shampoo',
      description: 'Herbal shampoo with natural extracts for healthy, shiny hair.',
      price: 6.99,
      unit: '400ml',
      category: 'Personal Care',
      subCategory: 'Hair Care',
      image: 'https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '19',
      name: 'Toothpaste',
      description: 'Refreshing mint toothpaste that whitens and protects enamel.',
      price: 3.49,
      unit: '120g',
      category: 'Personal Care',
      subCategory: 'Oral Care',
      image: 'https://images.pexels.com/photos/6623605/pexels-photo-6623605.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '20',
      name: 'Canned Tuna',
      description: 'Premium quality canned tuna in olive oil, great for salads.',
      price: 2.99,
      unit: '185g',
      category: 'Pantry',
      subCategory: 'Canned Goods',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '21',
      name: 'Carrots',
      description: 'Crunchy fresh carrots packed with nutrients.',
      price: 1.99,
      unit: '1kg',
      category: 'Fresh',
      subCategory: 'Vegetables',
      image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '22',
      name: 'Cucumber',
      description: 'Crisp and refreshing cucumbers perfect for salads.',
      price: 1.49,
      unit: 'each',
      category: 'Fresh',
      subCategory: 'Vegetables',
      image: 'https://images.pexels.com/photos/1458695/pexels-photo-1458695.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '23',
      name: 'Chocolate Bar',
      description: 'Rich and creamy milk chocolate bar for a sweet treat.',
      price: 2.49,
      unit: '100g',
      category: 'Snacks',
      subCategory: 'Sweets',
      image: 'https://images.pexels.com/photos/2067402/pexels-photo-2067402.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '24',
      name: 'Blueberries',
      description: 'Fresh, sweet blueberries packed with antioxidants, perfect for breakfast bowls and desserts.',
      price: 4.49,
      unit: '125g',
      category: 'Fresh',
      subCategory: 'Fruits',
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '25',
      name: 'Greek Yogurt',
      description: 'Creamy Greek yogurt, rich in protein and ideal for smoothies or as a healthy snack.',
      price: 5.49,
      unit: '500g',
      category: 'Fresh',
      subCategory: 'Dairy',
      image: 'https://images.pexels.com/photos/4112954/pexels-photo-4112954.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '26',
      name: 'Broccoli',
      description: 'Fresh green broccoli, packed with fiber and vitamins, perfect for steaming or stir-fry.',
      price: 2.29,
      unit: '1 head',
      category: 'Fresh',
      subCategory: 'Vegetables',
      image: 'https://images.pexels.com/photos/245203/pexels-photo-245203.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '27',
      name: 'Energy Drink',
      description: 'Refreshing energy drink to boost your stamina throughout the day.',
      price: 2.99,
      unit: '250ml',
      category: 'Beverages',
      subCategory: 'Energy Drinks',
      image: 'https://images.pexels.com/photos/6172786/pexels-photo-6172786.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '28',
      name: 'Laundry Detergent',
      description: 'Powerful liquid laundry detergent for bright, fresh-smelling clothes.',
      price: 11.99,
      unit: '2L',
      category: 'Home',
      subCategory: 'Cleaning',
      image: 'https://images.pexels.com/photos/3737148/pexels-photo-3737148.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '29',
      name: 'Chocolate Cookies',
      description: 'Crunchy chocolate chip cookies, baked fresh with rich cocoa and butter.',
      price: 3.99,
      unit: '300g',
      category: 'Snacks',
      subCategory: 'Sweets',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '30',
      name: 'Green Tea',
      description: 'Premium organic green tea bags, a natural source of antioxidants.',
      price: 6.49,
      unit: '20 bags',
      category: 'Beverages',
      subCategory: 'Tea',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '31',
      name: 'Body Lotion',
      description: 'Hydrating body lotion enriched with aloe vera for soft, smooth skin.',
      price: 7.99,
      unit: '400ml',
      category: 'Personal Care',
      subCategory: 'Skin Care',
      image: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '32',
      name: 'Rice',
      description: 'Long-grain basmati rice, perfect for fluffy and aromatic dishes.',
      price: 12.99,
      unit: '5kg',
      category: 'Pantry',
      subCategory: 'Staples',
      image: 'https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '33',
      name: 'Eggs',
      description: 'Farm-fresh free-range eggs, rich in flavor and nutrients.',
      price: 4.49,
      unit: '12 pack',
      category: 'Fresh',
      subCategory: 'Dairy',
      image: 'https://images.pexels.com/photos/4110259/pexels-photo-4110259.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '34',
      name: 'Mango',
      description: 'Sweet and juicy tropical mangoes, full of flavor and perfect for desserts.',
      price: 2.49,
      unit: 'each',
      category: 'Fresh',
      subCategory: 'Fruits',
      image: 'https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '35',
      name: 'Granola',
      description: 'Crunchy granola with oats, nuts, and honey — a healthy start to your day.',
      price: 6.99,
      unit: '500g',
      category: 'Pantry',
      subCategory: 'Breakfast',
      image: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '36',
      name: 'Pasta',
      description: 'Traditional Italian durum wheat pasta, ideal for classic dishes.',
      price: 2.29,
      unit: '500g',
      category: 'Pantry',
      subCategory: 'Staples',
      image: 'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '37',
      name: 'Tomatoes',
      description: 'Vibrant red tomatoes, great for sauces, salads, and sandwiches.',
      price: 3.49,
      unit: '1kg',
      category: 'Fresh',
      subCategory: 'Vegetables',
      image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    },
    {
      id: '38',
      name: 'Hand Wash',
      description: 'Gentle foaming hand wash with antibacterial properties.',
      price: 4.29,
      unit: '250ml',
      category: 'Home',
      subCategory: 'Cleaning',
      image: 'https://images.pexels.com/photos/4492133/pexels-photo-4492133.jpeg?auto=compress&cs=tinysrgb&w=600',
      inStock: true
    }
    
  
];