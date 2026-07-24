'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-ivory overflow-hidden pt-16">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-brand-bone -z-10" />
      
      {/* Decorative Circle */}
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] border border-brand-bone rounded-full -z-10 hidden md:block" />

      <div className="w-full px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-brand-ember/10 text-brand-ember px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wider uppercase">New Season 2026</span>
              </motion.div>

              {/* New Logo Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-midnight">O</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-ember">R</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-midnight">I</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-midnight">G</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-ember">I</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-midnight">N</span>
                <span className="logo-text text-6xl md:text-7xl lg:text-8xl text-brand-midnight">L</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-lg text-brand-mist mb-8 max-w-md leading-relaxed"
              >
                Premium streetwear that speaks your language. Bold designs for those who refuse to blend in.
              </motion.p>

              {/* CTA Buttons - Mobile Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/products"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products?category=hoodie"
                  className="btn-outline text-center"
                >
                  New Arrivals
                </Link>
              </motion.div>

              {/* Trust Indicators - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-brand-bone"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <span className="text-xs font-semibold text-brand-slate">100% Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <span className="text-xs font-semibold text-brand-slate">Free $75+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">↩️</span>
                  <span className="text-xs font-semibold text-brand-slate">30-Day Returns</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative aspect-square md:aspect-[4/5] bg-brand-bone rounded-3xl overflow-hidden">
                {/* Placeholder Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="logo-text text-[12rem] md:text-[18rem] text-brand-midnight/5">O</span>
                </div>
                
                {/* Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-56 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-ember rounded-xl flex items-center justify-center text-2xl">
                      🔥
                    </div>
                    <div>
                      <p className="font-bold text-sm text-brand-midnight">Best Seller</p>
                      <p className="text-xs text-brand-mist">Oversized Hoodie</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
