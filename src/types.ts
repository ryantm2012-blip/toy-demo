export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  price: number; // in South African Rand (ZAR / R)
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Bestseller' | 'New Arrival';
  description: string;
  detailedDescription: string;
  ageRange: string;
  image: string;
  imageAlt: string;
  accentBg: string;
  features: string[];
  safetyNote: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  accentGradient: string;
  pillColor: string;
  itemCount: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  childAge: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface OrderDetails {
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
}
