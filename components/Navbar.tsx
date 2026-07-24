'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              ORIGINL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">
              HOME
            </Link>
            <Link href="/products" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">
              SHOP
            </Link>
            <Link href="/products?category=t-shirt" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">
              TEES
            </Link>
            <Link href="/products?category=hoodie" className="text-sm font-medium tracking-wide hover:text-gray-600 transition-colors">
              HOODIES
            </Link>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2"
            aria-label="Open cart"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-sm font-medium tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/products"
              className="block py-2 text-sm font-medium tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              SHOP ALL
            </Link>
            <Link
              href="/products?category=t-shirt"
              className="block py-2 text-sm font-medium tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              TEES
            </Link>
            <Link
              href="/products?category=hoodie"
              className="block py-2 text-sm font-medium tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOODIES
            </Link>
          </div>
        </div>
      )}

      <CartDrawer />
    </nav>
  );
}

import CartDrawer from './CartDrawer';
