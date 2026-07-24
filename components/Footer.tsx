import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-originl-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-4xl font-black tracking-tighter">
              <span className="text-white">ORI</span>
              <span className="text-originl-terracotta">GIN</span>
              <span className="text-white">L</span>
            </Link>
            <p className="mt-5 text-originl-warmGray leading-relaxed">
              Premium streetwear for those who dare to express their authentic self. Bold designs. Conscious fashion.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-originl-charcoal rounded-full flex items-center justify-center hover:bg-originl-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-originl-charcoal rounded-full flex items-center justify-center hover:bg-originl-terracotta transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg tracking-wide mb-5">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-originl-warmGray hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=t-shirt" className="text-originl-warmGray hover:text-white transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products?category=hoodie" className="text-originl-warmGray hover:text-white transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/products?category=sweatshirt" className="text-originl-warmGray hover:text-white transition-colors">
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link href="/products?category=tank-top" className="text-originl-warmGray hover:text-white transition-colors">
                  Tank Tops
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg tracking-wide mb-5">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg tracking-wide mb-5">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  About ORIGINL
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-originl-charcoal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-originl-warmGray">
            © {new Date().getFullYear()} ORIGINL. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-originl-warmGray hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
