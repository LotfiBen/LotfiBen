'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-ivory/95 backdrop-blur-lg border-b border-brand-bone">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 touch-manipulation"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - New Typography */}
          <Link href="/" className="flex items-center">
            <span className="logo-text text-xl md:text-2xl">
              <span className="text-brand-midnight">O</span>
              <span className="text-brand-ember">R</span>
              <span className="text-brand-midnight">I</span>
              <span className="text-brand-midnight">G</span>
              <span className="text-brand-ember">I</span>
              <span className="text-brand-midnight">N</span>
              <span className="text-brand-midnight">L</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold tracking-wide hover:text-brand-ember transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-semibold tracking-wide hover:text-brand-ember transition-colors">
              Shop
            </Link>
            <Link href="/products?category=t-shirt" className="text-sm font-semibold tracking-wide hover:text-brand-ember transition-colors">
              Tees
            </Link>
            <Link href="/products?category=hoodie" className="text-sm font-semibold tracking-wide hover:text-brand-ember transition-colors">
              Hoodies
            </Link>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 touch-manipulation"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-ember text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-ivory border-t border-brand-bone">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block py-4 text-base font-semibold border-b border-brand-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-4 text-base font-semibold border-b border-brand-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              href="/products?category=t-shirt"
              className="block py-4 text-base font-semibold border-b border-brand-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tees
            </Link>
            <Link
              href="/products?category=hoodie"
              className="block py-4 text-base font-semibold border-b border-brand-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hoodies
            </Link>
            <Link
              href="/products?category=sweatshirt"
              className="block py-4 text-base font-semibold border-b border-brand-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sweatshirts
            </Link>
          </div>
        </div>
      )}

      <CartDrawer />
    </nav>
  );
}

import CartDrawer from './CartDrawer';
