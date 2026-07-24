import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import Link from 'next/link';
import { ArrowRight, Leaf, Truck, RefreshCw } from 'lucide-react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Featured Products - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-brand-ember text-xs font-bold tracking-widest uppercase">
              Best Sellers
            </span>
            <h2 className="section-title text-3xl md:text-5xl text-brand-midnight mt-2">
              Featured
            </h2>
          </div>

          {/* Products Grid - Mobile 2 cols, Tablet 3-4 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="btn-outline inline-flex items-center gap-2 text-sm"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid - Mobile Stack, Desktop Row */}
      <section className="bg-brand-midnight text-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title text-3xl md:text-5xl">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Tees', emoji: '👕', desc: 'Essential fits', category: 't-shirt' },
              { name: 'Hoodies', emoji: '🧥', desc: 'Street vibes', category: 'hoodie' },
              { name: 'More', emoji: '✨', desc: 'Explore all', category: 'all' },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.category === 'all' ? '/products' : `/products?category=${cat.category}`}
                className="group bg-brand-slate rounded-2xl p-6 md:p-8 text-center hover:bg-brand-ember transition-colors"
              >
                <span className="text-5xl md:text-6xl block mb-4">{cat.emoji}</span>
                <h3 className="section-title text-xl md:text-2xl mb-1">{cat.name}</h3>
                <p className="text-sm text-white/60 group-hover:text-white/80">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-brand-ember text-xs font-bold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="section-title text-3xl md:text-5xl text-brand-midnight mt-2 mb-4">
                Born to Be <span className="text-brand-ember">Original</span>
              </h2>
              <p className="text-brand-mist leading-relaxed mb-6">
                ORIGINL was born from a simple belief: everyone deserves to express themselves without compromise. We create premium streetwear that lets you wear your identity, not just follow trends.
              </p>
              <p className="text-brand-mist leading-relaxed">
                Every piece is crafted with care, using organic materials and ethical production. Because looking good should feel good too.
              </p>
            </div>
            <div className="bg-brand-bone rounded-3xl aspect-square flex items-center justify-center">
              <span className="logo-text text-[10rem] md:text-[14rem] text-brand-midnight/5">O</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Mobile Optimized */}
      <section className="bg-brand-bone py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: 'Sustainable',
                desc: 'Organic cotton & eco-friendly production.',
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: 'Free Shipping',
                desc: 'On orders over $75. Fast delivery.',
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: 'Easy Returns',
                desc: '30-day hassle-free returns.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-ember/10 text-brand-ember rounded-xl mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-brand-midnight">{feature.title}</h3>
                <p className="text-sm text-brand-mist mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title text-2xl md:text-4xl text-brand-midnight mb-3">
            Join the Movement
          </h2>
          <p className="text-brand-mist mb-6 text-sm md:text-base">
            Get early access to drops, exclusive offers, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border-2 border-brand-bone rounded-xl bg-white focus:border-brand-ember transition-colors text-sm"
              required
            />
            <button type="submit" className="btn-primary text-sm">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-brand-mist mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
