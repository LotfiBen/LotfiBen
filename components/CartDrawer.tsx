'use client';

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
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
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold tracking-wide">YOUR CART</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500 mb-6">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary text-sm"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-4">
                  <div className="relative w-24 h-24 bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                    <p className="font-medium mt-1">${item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        className="text-sm text-gray-500 hover:text-black underline"
                      >
                        Remove
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
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full btn-primary text-center"
            >
              CHECKOUT
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}
