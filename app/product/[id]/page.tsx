'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronRight, Check, Heart, Share2 } from 'lucide-react';
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
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center bg-originl-cream min-h-screen">
        <div className="w-24 h-24 bg-originl-sand rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">😕</span>
        </div>
        <h1 className="text-3xl font-bold text-originl-black mb-4">Product Not Found</h1>
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
    <div className="pt-20 bg-originl-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center text-sm text-originl-warmGray">
          <Link href="/" className="hover:text-originl-terracotta transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/products" className="hover:text-originl-terracotta transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-originl-black">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="bg-originl-sand aspect-square relative overflow-hidden rounded-3xl">
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
                    className={`bg-originl-sand aspect-square relative overflow-hidden rounded-xl border-2 transition-all ${
                      selectedImage === idx ? 'border-originl-terracotta' : 'border-transparent hover:border-originl-warmGray'
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
              {/* Category Badge */}
              <div>
                <span className="bg-originl-terracotta/10 text-originl-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                  {product.category.replace('-', ' ')}
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-originl-black">
                  {product.name}
                </h1>
              </div>

              <p className="text-3xl font-bold text-originl-terracotta">${product.price.toFixed(2)}</p>

              <p className="text-originl-charcoal/80 leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <p className="text-sm font-semibold mb-3 text-originl-black">
                  COLOR: <span className="text-originl-warmGray font-normal">{selectedColor}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2 text-sm font-medium rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-originl-terracotta bg-originl-terracotta text-white'
                          : 'border-originl-sand bg-white hover:border-originl-warmGray'
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
                  <p className="text-sm font-semibold text-originl-black">
                    SIZE: <span className="text-originl-warmGray font-normal">{selectedSize}</span>
                  </p>
                  <button className="text-sm text-originl-terracotta hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-semibold rounded-xl border-2 transition-all ${
                        selectedSize === size
                          ? 'border-originl-terracotta bg-originl-terracotta text-white'
                          : 'border-originl-sand bg-white hover:border-originl-warmGray text-originl-black'
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
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Check className="w-5 h-5" />
                ADD TO CART
              </button>

              {/* Action buttons */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-originl-sand rounded-xl hover:bg-originl-sand transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-semibold">Wishlist</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-originl-sand rounded-xl hover:bg-originl-sand transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">Share</span>
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-originl-sand pt-6 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-originl-charcoal">
                  <Check className="w-5 h-5 text-originl-sage" />
                  Free shipping on orders over $75
                </p>
                <p className="flex items-center gap-3 text-originl-charcoal">
                  <Check className="w-5 h-5 text-originl-sage" />
                  100% premium organic cotton
                </p>
                <p className="flex items-center gap-3 text-originl-charcoal">
                  <Check className="w-5 h-5 text-originl-sage" />
                  Easy 30-day returns
                </p>
                <p className="flex items-center gap-3 text-originl-charcoal">
                  <Check className="w-5 h-5 text-originl-sage" />
                  Ethically made & sustainable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="text-originl-terracotta text-sm font-semibold tracking-widest uppercase">
                You May Also Like
              </span>
              <h2 className="text-3xl font-black text-originl-black mt-2">RELATED PRODUCTS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
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
      <div className="pt-24 pb-16 px-4 bg-originl-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-originl-sand aspect-square rounded-3xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-4 bg-originl-sand rounded w-1/4 animate-pulse" />
              <div className="h-10 bg-originl-sand rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-originl-sand rounded w-1/4 animate-pulse" />
              <div className="h-24 bg-originl-sand rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}
