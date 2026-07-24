'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Product } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 't-shirt', label: 'T-Shirts' },
  { id: 'hoodie', label: 'Hoodies' },
  { id: 'sweatshirt', label: 'Sweatshirts' },
  { id: 'tank-top', label: 'Tank Tops' },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  const filteredProducts: Product[] = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            SHOP ALL
          </h1>
          <p className="text-gray-400 max-w-xl">
            Browse our complete collection of premium print-on-demand apparel.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-6">No products found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary"
            >
              VIEW ALL PRODUCTS
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
      <div className="pt-24 pb-16">
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              SHOP ALL
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[3/4]" />
                <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
                <div className="mt-2 h-3 bg-gray-200 rounded w-1/2" />
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
