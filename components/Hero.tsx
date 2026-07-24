'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-originl-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border-2 border-originl-terracotta rounded-full" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-originl-sage rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-originl-warmGray rounded-full" />
      </div>

      {/* Accent shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-originl-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-originl-sage/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-originl-terracotta text-white px-4 py-2 text-xs font-bold tracking-widest uppercase">
                New Collection 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-originl-black leading-none"
            >
              ORI
              <span className="text-originl-terracotta">GIN</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl">L</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-originl-charcoal/80 max-w-md leading-relaxed"
            >
              Premium streetwear for those who dare to express their authentic self. Bold designs. Conscious fashion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products?category=hoodie"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                New Arrivals
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-originl-black">100%</p>
                <p className="text-xs text-originl-warmGray uppercase tracking-wide">Organic Cotton</p>
              </div>
              <div className="w-px h-12 bg-originl-sand" />
              <div className="text-center">
                <p className="text-2xl font-bold text-originl-black">Eco</p>
                <p className="text-xs text-originl-warmGray uppercase tracking-wide">Friendly</p>
              </div>
              <div className="w-px h-12 bg-originl-sand" />
              <div className="text-center">
                <p className="text-2xl font-bold text-originl-black">Free</p>
                <p className="text-xs text-originl-warmGray uppercase tracking-wide">Shipping $75+</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-originl-sand rounded-3xl overflow-hidden relative">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-9xl font-black text-originl-black/5">O</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-originl-terracotta rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🔥</span>
                  </div>
                  <div>
                    <p className="font-bold text-originl-black">Trending Now</p>
                    <p className="text-sm text-originl-warmGray">Oversized Hoodies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-originl-terracotta/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-originl-sage/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-originl-charcoal/30 rounded-full flex justify-center pt-3">
          <motion.div
            className="w-2 h-2 bg-originl-terracotta rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
