'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 border border-black rounded-full" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-black rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black rounded-full" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            Premium Print on Demand
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            ORIGINL
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Where style meets individuality. Express yourself with our curated collection of premium apparel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn-primary"
            >
              SHOP COLLECTION
            </Link>
            <Link
              href="/products?category=hoodie"
              className="bg-transparent border-2 border-black text-black px-8 py-4 font-semibold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              NEW ARRIVALS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
