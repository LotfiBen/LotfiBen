'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  const handlePlaceOrder = () => {
    alert('Thank you for your order! This is a demo checkout.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some items to your cart to checkout.</p>
        <Link href="/products" className="btn-primary inline-block">
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm mb-6 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-black tracking-tight">CHECKOUT</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form className="space-y-8">
              {/* Contact */}
              <div>
                <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300"
                  required
                />
              </div>

              {/* Shipping */}
              <div>
                <h2 className="text-lg font-semibold mb-4">SHIPPING ADDRESS</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3 border border-gray-300"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 border border-gray-300"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full mt-4 px-4 py-3 border border-gray-300"
                  required
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full mt-4 px-4 py-3 border border-gray-300"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 border border-gray-300"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="px-4 py-3 border border-gray-300"
                    required
                  />
                </div>
                <select className="w-full mt-4 px-4 py-3 border border-gray-300 bg-white">
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-lg font-semibold mb-4">PAYMENT</h2>
                <div className="border border-gray-300 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock size={16} />
                    <span className="text-sm text-gray-600">All transactions are secure and encrypted</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-3 border border-gray-300 mb-4"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="px-4 py-3 border border-gray-300"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full btn-primary"
              >
                PLACE ORDER - ${cartTotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 h-fit">
            <h2 className="text-lg font-semibold mb-6">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-gray-200 flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>{cartTotal >= 75 ? 'FREE' : '$8.99'}</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-2 border-t">
                <span>Total</span>
                <span>${(cartTotal + (cartTotal >= 75 ? 0 : 8.99)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
