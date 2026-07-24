import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ORIGINL Classic Tee',
    price: 34.99,
    category: 't-shirt',
    description: 'Our signature tee made from 100% organic cotton. Features a relaxed fit and premium feel. The perfect canvas for your expression.',
    colors: ['Black', 'White', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'ORIGINL Oversized Hoodie',
    price: 74.99,
    category: 'hoodie',
    description: 'Cozy up in our premium oversized hoodie. Features a kangaroo pocket, ribbed cuffs, and a soft fleece interior for maximum comfort.',
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'ORIGINL Essential Sweatshirt',
    price: 54.99,
    category: 'sweatshirt',
    description: 'A wardrobe staple reimagined. This sweatshirt combines classic style with modern comfort. Perfect for layering or wearing solo.',
    colors: ['Black', 'Cream', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'ORIGINL Tank Top',
    price: 29.99,
    category: 'tank-top',
    description: 'Stay cool and stylish with our performance tank. Features a modern cut with dropped armholes for maximum mobility.',
    colors: ['White', 'Black', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    ],
  },
  {
    id: '5',
    name: 'ORIGINL Vintage Wash Tee',
    price: 39.99,
    category: 't-shirt',
    description: 'A vintage-inspired tee with a worn-in feel. Each piece is garment-dyed for a unique, lived-in look that gets better with time.',
    colors: ['Faded Black', 'Washed Blue', 'Dusty Rose'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
      'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800',
    ],
  },
  {
    id: '6',
    name: 'ORIGINL Zip Hoodie',
    price: 84.99,
    category: 'hoodie',
    description: 'Our full-zip hoodie for those who prefer easy on-and-off. Features the same premium quality as our classic pullover.',
    colors: ['Black', 'Gray', 'Forest'],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800',
    ],
  },
  {
    id: '7',
    name: 'ORIGINL Crop Hoodie',
    price: 64.99,
    category: 'hoodie',
    description: 'Make a statement with our trendy crop hoodie. Perfect for showing off your style while staying cozy.',
    colors: ['Black', 'Lavender', 'Mint'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
    ],
  },
  {
    id: '8',
    name: 'ORIGINL Long Sleeve',
    price: 44.99,
    category: 't-shirt',
    description: 'The perfect transition piece. Our long sleeve tee offers all-day comfort with a polished, versatile look.',
    colors: ['White', 'Black', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800',
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};
