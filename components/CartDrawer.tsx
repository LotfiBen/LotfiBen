'use client';

import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import Image from 'next/image';
import { storeSettings, formatPrice, getShippingCost, calculateTotal } from '@/lib/settings';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  const totals = calculateTotal(cartTotal);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-bone">
          <div>
            <h2 className="text-lg font-bold text-brand-midnight">Votre Panier</h2>
            <p className="text-xs text-brand-mist">{items.length} {items.length === 1 ? 'article' : 'articles'}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-brand-bone rounded-full transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-brand-bone rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-brand-mist" />
              </div>
              <p className="text-brand-slate font-semibold">Votre panier est vide</p>
              <p className="text-sm text-brand-mist mt-1 mb-4">Ajoutez des articles pour commencer!</p>
              <button onClick={() => setIsCartOpen(false)} className="btn-primary text-sm">
                Commencer shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="flex gap-3 pb-4 border-b border-brand-bone">
                  <div className="w-20 h-20 bg-brand-bone rounded-xl overflow-hidden flex-shrink-0 relative">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-brand-midnight truncate">{item.name}</h3>
                    <p className="text-xs text-brand-mist">{item.selectedColor} / {item.selectedSize}</p>
                    <p className="price text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-bone rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-bone transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-bone transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        className="p-1 text-brand-mist hover:text-brand-ember transition-colors"
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
          <div className="p-4 border-t border-brand-bone bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-brand-slate">Sous-total</span>
              <span className="font-bold text-lg text-brand-midnight">{formatPrice(totals.subtotalUSD)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-brand-slate text-sm">Livraison</span>
              <span className={`font-semibold text-sm ${totals.isFreeShipping ? 'text-green-600' : 'text-brand-midnight'}`}>
                {totals.isFreeShipping ? 'Gratuit' : `${storeSettings.defaultShippingCost.toLocaleString('fr-DZ')} ${storeSettings.currencySymbol}`}
              </span>
            </div>
            
            {/* Free shipping progress */}
            {!totals.isFreeShipping && (
              <div className="mb-3">
                <p className="text-xs text-brand-mist mb-1">
                  Plus que {formatPrice((storeSettings.freeShippingThreshold / storeSettings.currencyConversionRate) - cartTotal)} pour livraison gratuite!
                </p>
                <div className="w-full h-2 bg-brand-bone rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-ember rounded-full transition-all"
                    style={{ width: `${Math.min((cartTotal / (storeSettings.freeShippingThreshold / storeSettings.currencyConversionRate)) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center py-2 border-t border-brand-bone mt-2">
              <span className="font-bold text-brand-midnight">Total</span>
              <span className="font-bold text-xl price">{formatPrice(totals.totalUSD)}</span>
            </div>
            
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full btn-primary text-center text-sm mt-4"
            >
              Commander - {formatPrice(totals.totalUSD)}
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 text-sm font-semibold text-brand-mist hover:bg-brand-bone transition-colors mt-2 rounded-xl"
            >
              continuer shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
