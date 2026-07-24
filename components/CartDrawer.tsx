'use client';

import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import Image from 'next/image';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-originl-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-originl-sand">
          <div>
            <h2 className="text-xl font-bold text-originl-black">YOUR CART</h2>
            <p className="text-sm text-originl-warmGray">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-originl-sand rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-originl-sand rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-originl-warmGray" />
              </div>
              <p className="text-originl-charcoal/70 mb-2">Your cart is empty</p>
              <p className="text-sm text-originl-warmGray mb-6">Add some items to get started!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary text-sm"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-4">
                  <div className="relative w-24 h-24 bg-originl-sand rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-originl-black truncate">{item.name}</h3>
                    <p className="text-sm text-originl-warmGray">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                    <p className="price-tag mt-1">${item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-originl-sand rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="p-2 hover:bg-originl-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="p-2 hover:bg-originl-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        className="text-originl-warmGray hover:text-originl-terracotta transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-originl-sand p-6 space-y-4 bg-originl-cream">
            <div className="flex justify-between items-center">
              <span className="text-originl-charcoal">Subtotal</span>
              <span className="text-xl font-bold text-originl-black">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-originl-warmGray">
              {cartTotal >= 75 ? '✓ Free shipping applied!' : `Add $${(75 - cartTotal).toFixed(2)} more for free shipping`}
            </p>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full btn-primary text-center"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 text-sm font-semibold tracking-wide hover:bg-originl-sand transition-colors rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
