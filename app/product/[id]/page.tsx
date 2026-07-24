'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Check, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';
import { formatPrice } from '@/lib/settings';

function ProductDetailContent() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[2] || '');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-20 pb-16 px-4 text-center bg-brand-ivory min-h-screen">
        <h1 className="text-2xl font-bold text-brand-midnight">Produit non trouvé</h1>
        <Link href="/products" className="btn-primary inline-block mt-4 text-sm">
          Retour à la boutique
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
    <div className="pt-16 bg-brand-ivory min-h-screen">
      {/* Mobile Back Button */}
      <div className="px-4 py-3 border-b border-brand-bone">
        <Link href="/products" className="inline-flex items-center gap-1 text-sm text-brand-mist hover:text-brand-midnight">
          <ArrowLeft className="w-4 h-4" />
          Retour à la boutique
        </Link>
      </div>

      <div className="px-4 py-6 pb-16">
        {/* Images */}
        <div className="space-y-3">
          <div className="bg-brand-bone aspect-square relative overflow-hidden rounded-2xl">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 bg-brand-bone relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === idx ? 'border-brand-ember' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt={`Vue ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-6">
          <span className="category-pill rounded-full">
            {product.category === 't-shirt' && 'T-Shirt'}
            {product.category === 'hoodie' && 'Hoodie'}
            {product.category === 'sweatshirt' && 'Sweatshirt'}
            {product.category === 'tank-top' && 'Débardeur'}
          </span>
          
          <h1 className="section-title text-2xl md:text-3xl text-brand-midnight mt-3">
            {product.name}
          </h1>
          
          <p className="price text-2xl mt-2">{formatPrice(product.price)}</p>
          
          <p className="text-brand-mist text-sm mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-brand-midnight mb-2">
              Couleur: <span className="font-normal text-brand-mist">{selectedColor}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-brand-ember bg-brand-ember text-white'
                      : 'border-brand-bone bg-white hover:border-brand-mist'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-semibold text-brand-midnight">
                Taille: <span className="font-normal text-brand-mist">{selectedSize}</span>
              </p>
              <button className="text-xs text-brand-ember underline">Guide des tailles</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-sm font-bold rounded-xl border-2 transition-all ${
                    selectedSize === size
                      ? 'border-brand-ember bg-brand-ember text-white'
                      : 'border-brand-bone bg-white text-brand-midnight hover:border-brand-mist'
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
            className="w-full btn-primary mt-6 text-sm"
          >
            Ajouter au panier
          </button>

          {/* Wishlist & Share */}
          <div className="flex gap-3 mt-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-brand-bone rounded-xl text-sm font-semibold hover:bg-brand-bone transition-colors">
              <Heart className="w-4 h-4" />
              Favoris
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-brand-bone rounded-xl text-sm font-semibold hover:bg-brand-bone transition-colors">
              <Share2 className="w-4 h-4" />
              Partager
            </button>
          </div>

          {/* Features */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2 text-brand-mist">
              <Check className="w-4 h-4 text-green-500" />
              Livraison gratuite dès 10.000 د.ج
            </p>
            <p className="flex items-center gap-2 text-brand-mist">
              <Check className="w-4 h-4 text-green-500" />
              Coton organique 100%
            </p>
            <p className="flex items-center gap-2 text-brand-mist">
              <Check className="w-4 h-4 text-green-500" />
              Retours faciles sous 14 jours
            </p>
            <p className="flex items-center gap-2 text-brand-mist">
              <Check className="w-4 h-4 text-green-500" />
              Paiement à la livraison disponible
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="section-title text-xl text-brand-midnight mb-4">Vous aimerez aussi</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      <div className="pt-20 bg-brand-ivory min-h-screen p-4">
        <div className="skeleton aspect-square rounded-2xl" />
        <div className="mt-4 h-8 bg-brand-bone rounded w-3/4" />
        <div className="mt-2 h-6 bg-brand-bone rounded w-1/4" />
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}
