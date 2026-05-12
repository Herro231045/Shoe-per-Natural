export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  features: string[];
  materials: { name: string; percentage: number }[];
  variants: { color: string; sizes: number[]; image: string }[];
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  productId: string;
  variantColor: string;
  size: number;
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}
