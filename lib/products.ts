import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ORIGINL Classic Tee',
    price: 34.99,
    category: 't-shirt',
    description: 'Notre tee signature en coton organique 100%. Coupe relaxée et toucher premium. Le support parfait pour votre expression.',
    colors: ['Noir', 'Blanc', 'Gris'],
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
    description: 'Raffinez-vous dans notre hoodie oversized premium. Poche kangourou, bordures côtelées et intérieur en polaire douce pour un confort maximal.',
    colors: ['Noir', 'Navy', 'Anthracite'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'ORIGINL Sweatshirt Essentiel',
    price: 54.99,
    category: 'sweatshirt',
    description: 'Un essentiel de garde-robe réinventé. Ce sweatshirt combine style classique et confort moderne. Parfait pour superposer ou porter seul.',
    colors: ['Noir', 'Crème', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800',
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'ORIGINL Débardeur',
    price: 29.99,
    category: 'tank-top',
    description: 'Restez au frais et stylé avec notre débardeur performance. Coupe moderne avec emmanchures tombantes pour une mobilité maximale.',
    colors: ['Blanc', 'Noir', 'Sauge'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    ],
  },
  {
    id: '5',
    name: 'ORIGINL Tee Vintage',
    price: 39.99,
    category: 't-shirt',
    description: 'Un tee inspiré vintage avec un toucher usé. Chaque pièce est teinte en garment pour un look unique, porté qui s\'améliore avec le temps.',
    colors: ['Noir Délavé', 'Bleu Lavé', 'Rose Poudré'],
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
    description: 'Notre hoodie zip complet pour ceux qui préfèrent l\'enfilage facile. Même qualité premium que notre pullover classique.',
    colors: ['Noir', 'Gris', 'Forêt'],
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
    description: 'Faites une déclaration avec notre crop hoodie tendance. Parfait pour montrer votre style tout en restant confortable.',
    colors: ['Noir', 'Lavande', 'Menthe'],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
    ],
  },
  {
    id: '8',
    name: 'ORIGINL Manche Longue',
    price: 44.99,
    category: 't-shirt',
    description: 'La pièce de transition parfaite. Notre manche longue offre un confort toute la journée avec un look polyvalent et élégant.',
    colors: ['Blanc', 'Noir', 'Bordeaux'],
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
