'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All', emoji: '✨' },
  { id: 't-shirt', label: 'T-Shirts', emoji: '👕' },
  { id: 'hoodie', label: 'Hoodies', emoji: '🧥' },
  { id: 'sweatshirt', label: 'Sweatshirts', emoji: '👔' },
  { id: 'tank-top', label: 'Tank Tops', emoji: '🎽' },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  const filteredProducts: Product[] = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20 bg-originl-cream min-h-screen">
      {/* Header */}
      <div className="bg-originl-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-originl-terracotta text-sm font-semibold tracking-widest uppercase">
              Our Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-3">
              <span className="text-white">ORI</span>
              <span className="text-originl-terracotta">GIN</span>
              <span className="text-white">L</span>
            </h1>
            <p className="text-originl-warmGray mt-4 max-w-xl">
              Discover our premium streetwear collection. Quality fabrics, bold designs, conscious fashion.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-originl-terracotta text-white shadow-lg'
                  : 'bg-white text-originl-charcoal hover:bg-originl-sand'
              }`}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-originl-warmGray mb-8">
          Showing <span className="font-semibold text-originl-black">{filteredProducts.length}</span> products
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-originl-sand rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">😕</span>
            </div>
            <p className="text-originl-charcoal/70 mb-2">No products found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary mt-4"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 bg-originl-cream min-h-screen">
        <div className="bg-originl-black text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-black tracking-tight">SHOP ALL</h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-originl-sand aspect-[3/4] rounded-2xl" />
                <div className="mt-4 h-5 bg-originl-sand rounded w-3/4" />
                <div className="mt-2 h-4 bg-originl-sand rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
