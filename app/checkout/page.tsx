'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import { formatPrice, getShippingCost, storeSettings } from '@/lib/settings';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert('🎉 Merci pour votre commande! Ceci est une démo.');
    clearCart();
  };

  const shipping = getShippingCost(cartTotal);
  const total = cartTotal + (shipping.isFree ? 0 : storeSettings.defaultShippingCost);

  if (items.length === 0) {
    return (
      <div className="pt-20 pb-16 px-4 text-center bg-brand-ivory min-h-screen">
        <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🛒</span>
        </div>
        <h1 className="text-2xl font-bold text-brand-midnight">Votre panier est vide</h1>
        <Link href="/products" className="btn-primary inline-block mt-4 text-sm">
          Commencer shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-brand-ivory min-h-screen">
      {/* Header */}
      <div className="bg-brand-midnight text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm mb-4 text-brand-mist hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            Continuer shopping
          </Link>
          <h1 className="section-title text-3xl md:text-4xl">
            <span className="text-white">COMMAN</span>
            <span className="text-brand-ember">DER</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="space-y-4">
            {/* Contact */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="font-bold text-brand-midnight mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-ember text-white rounded-full flex items-center justify-center text-xs">1</span>
                Informations
              </h2>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="font-bold text-brand-midnight mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-ember text-white rounded-full flex items-center justify-center text-xs">2</span>
                Adresse de livraison
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="Prénom" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                <input type="text" placeholder="Nom" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              </div>
              <input type="tel" placeholder="Téléphone (Obligatoire)" className="w-full mt-2 px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              <input type="text" placeholder="Adresse" className="w-full mt-2 px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input type="text" placeholder="Ville" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                <input type="text" placeholder="Code Postal" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" />
              </div>
              <select className="w-full mt-2 px-4 py-3 border-2 border-brand-bone rounded-xl bg-white text-sm">
                <option value="DZ">Algérie</option>
              </select>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="font-bold text-brand-midnight mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-ember text-white rounded-full flex items-center justify-center text-xs">3</span>
                Paiement
              </h2>
              <div className="space-y-2 mb-3">
                <label className="flex items-center gap-2 p-3 border-2 border-brand-bone rounded-xl cursor-pointer hover:border-brand-ember transition-colors">
                  <input type="radio" name="payment" value="cod" defaultChecked className="accent-brand-ember" />
                  <span className="text-sm font-medium">Paiement à la livraison (COD)</span>
                </label>
                <label className="flex items-center gap-2 p-3 border-2 border-brand-bone rounded-xl cursor-pointer hover:border-brand-ember transition-colors">
                  <input type="radio" name="payment" value="ccp" className="accent-brand-ember" />
                  <span className="text-sm font-medium">CCP / BaridiMob</span>
                </label>
                <label className="flex items-center gap-2 p-3 border-2 border-brand-bone rounded-xl cursor-pointer hover:border-brand-ember transition-colors">
                  <input type="radio" name="payment" value="edahabia" className="accent-brand-ember" />
                  <span className="text-sm font-medium">Edahabia</span>
                </label>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-mist">
                <Lock className="w-4 h-4 text-green-500" />
                Paiement sécurisé
              </div>
            </div>

            <button onClick={handlePlaceOrder} className="w-full btn-primary text-sm py-4">
              Confirmer la commande - {formatPrice(total)}
            </button>
            
            <p className="text-xs text-center text-brand-mist">
              En commandant, vous acceptez nos conditions et politique de confidentialité.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-4 h-fit">
            <h2 className="font-bold text-brand-midnight mb-4">Récapitulatif</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-3">
                  <div className="w-16 h-16 bg-brand-bone rounded-lg overflow-hidden relative flex-shrink-0">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-ember text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xs text-brand-midnight truncate">{item.name}</h3>
                    <p className="text-xs text-brand-mist">{item.selectedColor} / {item.selectedSize}</p>
                  </div>
                  <p className="font-bold text-sm">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-bone mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-brand-mist">Sous-total</span>
                <span className="font-semibold">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-mist">Livraison</span>
                <span className={`font-semibold ${shipping.isFree ? 'text-green-600' : ''}`}>
                  {shipping.display}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-brand-bone">
                <span>Total</span>
                <span className="price">{formatPrice(total)}</span>
              </div>
            </div>
            
            {/* Delivery Info */}
            <div className="mt-4 p-3 bg-brand-bone rounded-lg text-xs text-brand-mist">
              <p className="font-semibold text-brand-midnight mb-1">🚚 Délai de livraison:</p>
              <p>Standard: {storeSettings.standardDelivery}</p>
              <p>Express: {storeSettings.expressDelivery}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
