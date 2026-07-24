'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Lock, Check } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert('🎉 Thank you for your order! This is a demo checkout.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center bg-originl-cream min-h-screen">
        <div className="w-24 h-24 bg-originl-sand rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🛒</span>
        </div>
        <h1 className="text-3xl font-bold text-originl-black mb-4">Your cart is empty</h1>
        <p className="text-originl-warmGray mb-8">Add some items to your cart to checkout.</p>
        <Link href="/products" className="btn-primary inline-block">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-originl-cream min-h-screen">
      {/* Header */}
      <div className="bg-originl-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:text-originl-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-white">CHECK</span>
            <span className="text-originl-terracotta">OUT</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form className="space-y-8">
              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-originl-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-originl-terracotta text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h2>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                  required
                />
                <label className="flex items-center gap-2 mt-3 text-sm text-originl-warmGray">
                  <input type="checkbox" className="accent-originl-terracotta" />
                  Email me with news and offers
                </label>
              </div>

              {/* Shipping */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-originl-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-originl-terracotta text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full mt-4 px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full mt-4 px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                    required
                  />
                </div>
                <select className="w-full mt-4 px-4 py-3 border-2 border-originl-sand rounded-xl bg-white focus:border-originl-terracotta transition-colors">
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-originl-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-originl-terracotta text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Payment
                </h2>
                <div className="border-2 border-originl-sand rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-4 h-4 text-originl-sage" />
                    <span className="text-sm text-originl-warmGray">All transactions are secure and encrypted</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border-2 border-originl-sand rounded-xl focus:border-originl-terracotta transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full btn-primary text-lg"
              >
                Place Order - ${cartTotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-originl-black mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-originl-sand rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-originl-terracotta text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-originl-black truncate">{item.name}</h3>
                    <p className="text-originl-warmGray text-sm">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                  </div>
                  <p className="font-bold text-originl-black">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-originl-sand pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-originl-warmGray">Subtotal</span>
                <span className="text-originl-black">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-originl-warmGray">Shipping</span>
                <span className="text-originl-sage font-semibold">{cartTotal >= 75 ? 'FREE' : '$8.99'}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-3 border-t border-originl-sand">
                <span className="text-originl-black">Total</span>
                <span className="text-originl-terracotta">${(cartTotal + (cartTotal >= 75 ? 0 : 8.99)).toFixed(2)}</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-originl-sand">
              <div className="flex items-center gap-2 text-sm text-originl-warmGray">
                <Lock className="w-4 h-4 text-originl-sage" />
                Secure checkout powered by SSL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
