export interface Product {
  id: string;
  name: string;
  price: number;
  category: 't-shirt' | 'hoodie' | 'sweatshirt' | 'tank-top';
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}
