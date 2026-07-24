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

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-originl-cream">
        <div className="text-center mb-16">
          <span className="text-originl-terracotta text-sm font-semibold tracking-widest uppercase">
            Best Sellers
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-originl-black mt-3">
            FEATURED
          </h2>
          <div className="section-divider mx-auto mt-6" />
          <p className="text-originl-charcoal/70 max-w-xl mx-auto mt-6">
            Our most loved pieces, chosen by customers who appreciate quality, comfort, and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Category Banner */}
      <section className="bg-originl-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Tees', emoji: '👕', desc: 'Essential wardrobe staples', category: 't-shirt' },
              { name: 'Hoodies', emoji: '🧥', desc: 'Cozy streetwear vibes', category: 'hoodie' },
              { name: 'More', emoji: '✨', desc: 'Sweatshirts, tanks & more', category: 'all' },
            ].map((cat, i) => (
              <Link
                key={i}
                href={cat.category === 'all' ? '/products' : `/products?category=${cat.category}`}
                className="group relative overflow-hidden rounded-2xl p-10 bg-originl-charcoal hover:bg-originl-terracotta transition-all duration-500"
              >
                <div className="relative z-10">
                  <span className="text-6xl mb-4 block">{cat.emoji}</span>
                  <h3 className="text-3xl font-black tracking-tight mb-2">{cat.name}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{cat.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-originl-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-originl-terracotta text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-originl-black mt-3 mb-6">
              BORN TO BE <span className="text-originl-terracotta">ORIGINAL</span>
            </h2>
            <p className="text-originl-charcoal/80 leading-relaxed mb-6">
              ORIGINL was born from a simple belief: everyone deserves to express themselves without compromise. We create premium streetwear that lets you wear your identity, not just follow trends.
            </p>
            <p className="text-originl-charcoal/80 leading-relaxed mb-8">
              Every piece is crafted with care, using organic materials and ethical production. Because looking good should feel good too.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-originl-terracotta font-semibold hover:gap-4 transition-all"
            >
              Learn more about our mission
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-originl-sand aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden">
              <span className="text-[20rem] md:text-[25rem] font-black text-originl-black/5 select-none">O</span>
              <div className="absolute inset-0 bg-gradient-to-br from-originl-terracotta/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-originl-sand py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainable',
                desc: '100% organic cotton and eco-friendly production methods.',
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Free Shipping',
                desc: 'Free shipping on all orders over $75. Fast delivery.',
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: 'Easy Returns',
                desc: '30-day hassle-free returns. Your satisfaction guaranteed.',
              },
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-originl-terracotta/10 text-originl-terracotta rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-originl-black mb-2">{feature.title}</h3>
                <p className="text-originl-warmGray">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-originl-cream">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-originl-terracotta text-sm font-semibold tracking-widest uppercase">
            Stay Connected
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-originl-black mt-3 mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-originl-charcoal/70 mb-8">
            Be the first to know about new drops, exclusive offers, and behind-the-scenes content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-originl-sand bg-white rounded-xl focus:border-originl-terracotta transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-originl-warmGray mt-4">
            No spam, ever. Unsubscribe anytime. 🔒
          </p>
        </div>
      </section>
    </>
  );
}
