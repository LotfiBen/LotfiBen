import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            BESTSELLERS
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our most loved pieces, chosen by customers who appreciate quality and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block border-2 border-black px-12 py-4 font-semibold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>

      {/* Category Banner */}
      <section className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-700 hover:border-white transition-colors duration-300">
              <span className="text-5xl font-black tracking-tight mb-4 block">TEE</span>
              <p className="text-gray-400 mb-6">Classic essentials for every wardrobe</p>
              <Link
                href="/products?category=t-shirt"
                className="text-sm tracking-wider uppercase hover:underline"
              >
                Shop Tees →
              </Link>
            </div>
            <div className="text-center p-8 border border-gray-700 hover:border-white transition-colors duration-300">
              <span className="text-5xl font-black tracking-tight mb-4 block">HOODIE</span>
              <p className="text-gray-400 mb-6">Premium comfort meets iconic style</p>
              <Link
                href="/products?category=hoodie"
                className="text-sm tracking-wider uppercase hover:underline"
              >
                Shop Hoodies →
              </Link>
            </div>
            <div className="text-center p-8 border border-gray-700 hover:border-white transition-colors duration-300">
              <span className="text-5xl font-black tracking-tight mb-4 block">MORE</span>
              <p className="text-gray-400 mb-6">Sweatshirts, tanks & accessories</p>
              <Link
                href="/products"
                className="text-sm tracking-wider uppercase hover:underline"
              >
                Explore All →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              BORN TO BE DIFFERENT
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              ORIGINL was born from a simple belief: everyone deserves to express themselves without compromise. We create premium print-on-demand apparel that lets you wear your identity, not just follow trends.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every piece is crafted with care, using sustainable materials and ethical production methods. Because looking good should feel good too.
            </p>
            <Link
              href="#"
              className="inline-block border-b-2 border-black pb-1 font-medium hover:text-gray-600 transition-colors"
            >
              Learn more about our mission
            </Link>
          </div>
          <div className="bg-gray-100 aspect-square flex items-center justify-center">
            <div className="text-center">
              <span className="text-9xl font-black text-gray-200">O</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about new drops, exclusive offers, and behind-the-scenes content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 focus:border-black transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
