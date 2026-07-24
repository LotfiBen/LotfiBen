import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              ORIGINL
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Premium print-on-demand apparel for those who dare to stand out. Quality, style, and self-expression.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold tracking-wide mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/products?category=t-shirt" className="hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link href="/products?category=hoodie" className="hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link href="/products?category=sweatshirt" className="hover:text-white transition-colors">Sweatshirts</Link></li>
              <li><Link href="/products?category=tank-top" className="hover:text-white transition-colors">Tank Tops</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold tracking-wide mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold tracking-wide mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About ORIGINL</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ORIGINL. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
