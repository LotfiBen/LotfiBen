'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-originl-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 hover:bg-originl-sand rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              <span className="text-originl-black">ORI</span>
              <span className="text-originl-terracotta">GIN</span>
              <span className="text-originl-black">L</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-semibold tracking-wide hover:text-originl-terracotta transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-semibold tracking-wide hover:text-originl-terracotta transition-colors">
              Shop
            </Link>
            <Link href="/products?category=t-shirt" className="text-sm font-semibold tracking-wide hover:text-originl-terracotta transition-colors">
              Tees
            </Link>
            <Link href="/products?category=hoodie" className="text-sm font-semibold tracking-wide hover:text-originl-terracotta transition-colors">
              Hoodies
            </Link>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-originl-sand rounded-lg transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-6 h-6 text-originl-black" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-originl-terracotta text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-originl-sand mobile-menu-enter">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block py-3 text-lg font-semibold tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-3 text-lg font-semibold tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              href="/products?category=t-shirt"
              className="block py-3 text-lg font-semibold tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tees
            </Link>
            <Link
              href="/products?category=hoodie"
              className="block py-3 text-lg font-semibold tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hoodies
            </Link>
          </div>
        </div>
      )}

      <CartDrawer />
    </nav>
  );
}

import CartDrawer from './CartDrawer';
