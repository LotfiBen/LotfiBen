'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert('🎉 Thank you for your order! This is a demo.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="pt-20 pb-16 px-4 text-center bg-brand-ivory min-h-screen">
        <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🛒</span>
        </div>
        <h1 className="text-2xl font-bold text-brand-midnight">Your cart is empty</h1>
        <Link href="/products" className="btn-primary inline-block mt-4 text-sm">
          Start Shopping
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
            Continue Shopping
          </Link>
          <h1 className="section-title text-3xl md:text-4xl">
            <span className="text-white">CHEC</span>
            <span className="text-brand-ember">KOUT</span>
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
                Contact
              </h2>
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="font-bold text-brand-midnight mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-ember text-white rounded-full flex items-center justify-center text-xs">2</span>
                Shipping
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="First name" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                <input type="text" placeholder="Last name" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              </div>
              <input type="text" placeholder="Address" className="w-full mt-2 px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input type="text" placeholder="City" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                <input type="text" placeholder="ZIP" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
              </div>
              <select className="w-full mt-2 px-4 py-3 border-2 border-brand-bone rounded-xl bg-white text-sm">
                <option value="">Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
              </select>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="font-bold text-brand-midnight mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-ember text-white rounded-full flex items-center justify-center text-xs">3</span>
                Payment
              </h2>
              <div className="border-2 border-brand-bone rounded-xl p-3">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-brand-mist">Secure checkout</span>
                </div>
                <input type="text" placeholder="Card number" className="w-full px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <input type="text" placeholder="MM / YY" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                  <input type="text" placeholder="CVV" className="px-4 py-3 border-2 border-brand-bone rounded-xl focus:border-brand-ember text-sm" required />
                </div>
              </div>
            </div>

            <button onClick={handlePlaceOrder} className="w-full btn-primary text-sm">
              Place Order - ${cartTotal.toFixed(2)}
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-4 h-fit">
            <h2 className="font-bold text-brand-midnight mb-4">Order Summary</h2>
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
                  <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-bone mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-brand-mist">Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-mist">Shipping</span>
                <span className="text-green-600 font-semibold">{cartTotal >= 75 ? 'FREE' : '$8.99'}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-brand-bone">
                <span>Total</span>
                <span className="price">${(cartTotal + (cartTotal >= 75 ? 0 : 8.99)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
