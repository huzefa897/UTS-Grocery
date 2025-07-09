// Define types for the online grocery store

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  subCategory: string;
  image: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  parentId: string;
}

export interface DeliveryDetails {
  name: string;
  address: string;
  mobile: string;
  email: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  deliveryDetails: DeliveryDetails;
  totalAmount: number;
  orderDate: Date;
}