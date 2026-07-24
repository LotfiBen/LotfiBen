import Link from 'next/link';
import { Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
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
              Mode streetwear premium pour ceux qui osent être originaux. Qualité algérienne, style international.
            </p>
            
            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-sm text-brand-mist">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-ember" />
                Alger, Algérie 🇩🇿
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-ember" />
                +213 XXX XXX XXX
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-ember" />
                contact@originl.dz
              </p>
            </div>

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
            <h3 className="font-bold text-sm mb-4">BOUTIQUE</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li><Link href="/products" className="hover:text-white transition-colors">Tous les produits</Link></li>
              <li><Link href="/products?category=t-shirt" className="hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link href="/products?category=hoodie" className="hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link href="/products?category=sweatshirt" className="hover:text-white transition-colors">Sweatshirts</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-sm mb-4">AIDE</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guide des tailles</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Livraison</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Retours</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Payment & Info */}
          <div>
            <h3 className="font-bold text-sm mb-4">PAIEMENT</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li>Paiement à la livraison</li>
              <li>CCP / BaridiMob</li>
              <li>Edahabia</li>
              <li>Virement bancaire</li>
            </ul>
            
            <h3 className="font-bold text-sm mb-4 mt-6">LIVRAISON</h3>
            <ul className="space-y-2 text-sm text-brand-mist">
              <li>Standard: 3-5 jours</li>
              <li>Express: 1-2 jours</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-slate mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-mist">
            © {new Date().getFullYear()} ORIGINL. Tous droits réservés. | 🇩🇿 Fait en Algérie
          </p>
          <div className="flex gap-4 text-xs text-brand-mist">
            <Link href="#" className="hover:text-white">Confidentialité</Link>
            <Link href="#" className="hover:text-white">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
