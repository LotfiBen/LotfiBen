import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="logo-text text-2xl">
              <span className="text-white">O</span>
              <span className="text-brand-ember">R</span>
              <span className="text-white">I</span>
              <span className="text-white">G</span>
              <span className="text-brand-ember">I</span>
              <span className="text-white">N</span>
              <span className="text-white">L</span>
            </Link>
            <p className="text-brand-mist text-sm mt-4 leading-relaxed">
              Premium streetwear for those who dare to be original.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center hover:bg-brand-ember transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-brand-slate rounded-full flex items-center justify-center hover:bg-brand-ember transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-sm mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li><Link href="/products" className="hover:text-white transition-colors">All</Link></li>
              <li><Link href="/products?category=t-shirt" className="hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link href="/products?category=hoodie" className="hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link href="/products?category=sweatshirt" className="hover:text-white transition-colors">Sweatshirts</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-sm mb-4">HELP</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">INFO</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-slate mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-mist">
            © {new Date().getFullYear()} ORIGINL. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-brand-mist">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
