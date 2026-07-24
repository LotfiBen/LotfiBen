'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronRight, Check } from 'lucide-react';
import { Suspense } from 'react';

function ProductDetailContent() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[2] || '');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="btn-primary inline-block mt-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/products" className="hover:text-black">Shop</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="bg-gray-100 aspect-square relative overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-gray-100 aspect-square relative overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  {product.category.replace('-', ' ')}
                </p>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  {product.name}
                </h1>
              </div>

              <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <p className="text-sm font-medium mb-3">
                  COLOR: <span className="text-gray-500">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-sm border-2 transition-all ${
                        selectedColor === color
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium">
                    SIZE: <span className="text-gray-500">{selectedSize}</span>
                  </p>
                  <button className="text-sm underline hover:text-gray-600">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border-2 text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Check size={20} />
                ADD TO CART
              </button>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Free shipping on orders over $75
                </p>
                <p className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  100% premium cotton
                </p>
                <p className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Easy 30-day returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 aspect-square animate-pulse" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}
