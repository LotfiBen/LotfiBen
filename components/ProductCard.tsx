'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* Image Container - Mobile Optimized Aspect Ratio */}
        <div className="relative aspect-[3/4] bg-brand-bone rounded-2xl overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="category-pill rounded-full">
              {product.category.replace('-', ' ')}
            </span>
          </div>

          {/* Color Options - Bottom */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
              {product.colors.slice(0, 4).map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-brand-bone"
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-[10px] text-brand-mist font-medium self-center ml-1">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Product Info - Mobile Optimized */}
        <div className="mt-3 px-1">
          <h3 className="font-semibold text-sm md:text-base text-brand-midnight truncate group-hover:text-brand-ember transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <p className="price text-base md:text-lg">${product.price.toFixed(2)}</p>
            <p className="text-[11px] text-brand-mist">{product.sizes.length} sizes</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
