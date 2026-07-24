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
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-brand-ember text-xs font-bold tracking-widest uppercase">
              Meilleures ventes
            </span>
            <h2 className="section-title text-3xl md:text-5xl text-brand-midnight mt-2">
              En Vedette
            </h2>
          </div>

          {/* Products Grid */}
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
              Voir tous les produits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-brand-midnight text-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title text-3xl md:text-5xl">Parcourir par Catégorie</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'T-Shirts', emoji: '👕', desc: 'Essentiels absolus', category: 't-shirt' },
              { name: 'Hoodies', emoji: '🧥', desc: 'Vibes streetwear', category: 'hoodie' },
              { name: 'Plus', emoji: '✨', desc: 'Explorer tout', category: 'all' },
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

      {/* Brand Story */}
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-brand-ember text-xs font-bold tracking-widest uppercase">
                Notre Histoire
              </span>
              <h2 className="section-title text-3xl md:text-5xl text-brand-midnight mt-2 mb-4">
                né pour être <span className="text-brand-ember">Original</span>
              </h2>
              <p className="text-brand-mist leading-relaxed mb-6">
                ORIGINL est né d&apos;une croyance simple: tout le monde mérite de s&apos;exprimer sans compromis. Nous créons des vêtements streetwear premium qui vous permettent de porter votre identité.
              </p>
              <p className="text-brand-mist leading-relaxed">
                Chaque pièce est conçue avec soin, en utilisant des matières organiques et une production éthique. Parce que bien paraître devrait aussi bien se sentir.
              </p>
            </div>
            <div className="bg-brand-bone rounded-3xl aspect-square flex items-center justify-center">
              <span className="logo-text text-[10rem] md:text-[14rem] text-brand-midnight/5">O</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-bone py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: 'Éco-responsable',
                desc: 'Coton organique & production respectueuse.',
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: 'Livraison Gratuite',
                desc: 'Dès 10.000 د.ج en Algérie.',
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: 'Retours Faciles',
                desc: 'Retours gratuits sous 14 jours.',
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

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 bg-brand-ivory">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title text-2xl md:text-4xl text-brand-midnight mb-3">
            Rejoignez le Mouvement
          </h2>
          <p className="text-brand-mist mb-6 text-sm md:text-base">
            Accès anticipé aux nouveautés, offres exclusives et plus encore.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border-2 border-brand-bone rounded-xl bg-white focus:border-brand-ember transition-colors text-sm"
              required
            />
            <button type="submit" className="btn-primary text-sm">
              S&apos;inscrire
            </button>
          </form>
          <p className="text-xs text-brand-mist mt-3">Pas de spam. Désabonnement à tout moment.</p>
        </div>
      </section>
    </>
  );
}
