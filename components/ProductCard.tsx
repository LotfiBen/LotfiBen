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
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="product-card bg-gray-100 aspect-[3/4] relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium">Quick View</p>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm capitalize">{product.category.replace('-', ' ')}</p>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
