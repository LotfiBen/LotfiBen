'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-originl-sand rounded-2xl overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="product-overlay absolute inset-0 bg-originl-black/40 flex items-center justify-center gap-4">
            <div className="bg-white text-originl-black p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              <Eye className="w-5 h-5" />
            </div>
            <div className="bg-originl-terracotta text-white p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-originl-terracotta/90 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              {product.category.replace('-', ' ')}
            </span>
          </div>

          {/* Quick colors */}
          <div className="absolute bottom-4 left-4 flex gap-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-white/80 border-2 border-white shadow-sm"
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="w-5 h-5 rounded-full bg-originl-black/70 text-white text-xs flex items-center justify-center">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-5 space-y-2">
          <h3 className="font-bold text-originl-black group-hover:text-originl-terracotta transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="price-tag text-lg">${product.price.toFixed(2)}</p>
            <p className="text-xs text-originl-warmGray">
              {product.sizes.length} sizes
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
