'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'Tout' },
  { id: 't-shirt', label: 'T-Shirts' },
  { id: 'hoodie', label: 'Hoodies' },
  { id: 'sweatshirt', label: 'Sweats' },
  { id: 'tank-top', label: 'Débardeurs' },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  const filteredProducts: Product[] = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-16 bg-brand-ivory min-h-screen">
      {/* Header */}
      <div className="bg-brand-midnight text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title text-4xl md:text-6xl">
              <span className="text-white">O</span>
              <span className="text-brand-ember">R</span>
              <span className="text-white">I</span>
              <span className="text-white">G</span>
              <span className="text-brand-ember">I</span>
              <span className="text-white">N</span>
              <span className="text-white">L</span>
            </h1>
            <p className="text-brand-mist mt-2 text-sm md:text-base">
              {filteredProducts.length} produits
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:flex-wrap md:mx-0 md:px-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-ember text-white'
                  : 'bg-white text-brand-slate hover:bg-brand-bone'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-brand-mist">Aucun produit trouvé.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary mt-4 text-sm"
            >
              Voir tout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-16 bg-brand-ivory min-h-screen">
        <div className="bg-brand-midnight text-white py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="section-title text-4xl">BOUTIQUE</h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton aspect-[3/4] rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
