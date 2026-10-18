import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onFindSomethingFun: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onFindSomethingFun,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 500;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shipping = items.length === 0 ? 0 : (isFreeShipping ? 0 : 60);
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-purple-50/50 to-pink-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Your Toy Basket
              </h3>
              <p className="text-xs text-slate-500">
                {items.reduce((acc, i) => acc + i.quantity, 0)} {items.reduce((acc, i) => acc + i.quantity, 0) === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        {items.length > 0 && (
          <div className="bg-amber-50 px-5 py-3 border-b border-amber-200/60 text-xs">
            <div className="flex items-center justify-between mb-1.5 font-medium text-amber-900">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {isFreeShipping ? (
                  <strong className="text-emerald-700">You unlocked Free Simulated Delivery! 🎉</strong>
                ) : (
                  <span>
                    Add <strong className="tabular-nums">R {freeShippingThreshold - subtotal}</strong> more for Free Delivery!
                  </span>
                )}
              </span>
              <span className="font-bold tabular-nums">
                {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
              </span>
            </div>
            <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:border-purple-200 bg-slate-50/50 hover:bg-white transition-all group"
              >
                {/* Product Thumbnail */}
                <div className={`w-16 h-16 rounded-xl ${item.product.accentBg} p-1 shrink-0 overflow-hidden flex items-center justify-center`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-sm text-slate-900 truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">
                    {item.product.categoryName}
                  </p>
                  <p className="font-display font-bold text-sm text-purple-700 tabular-nums mt-0.5">
                    R {item.product.price}
                  </p>
                </div>

                {/* Quantity Adjustment Stepper */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-1.5 py-1 shrink-0">
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    className="w-6 h-6 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-slate-900 w-5 text-center tabular-nums">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    className="w-6 h-6 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            /* Friendly Empty Cart State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-4xl animate-bounce">
                🧸
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">
                Your toy basket is empty!
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                Looks like you haven&apos;t added any magical toys yet. Adventure is just one click away!
              </p>
              <button
                onClick={onFindSomethingFun}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-bold text-sm rounded-2xl shadow-md shadow-purple-500/20 hover:shadow-lg transition-all cursor-pointer"
              >
                Find Something Fun
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-purple-100 bg-slate-50/70 space-y-3">
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900 tabular-nums">R {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Simulated Delivery</span>
                <span className="font-bold text-slate-900 tabular-nums">
                  {shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `R ${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-display font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total (ZAR)</span>
                <span className="text-purple-700 tabular-nums">R {total}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-slate-400">
              *Demo Store: No real payments or charges occur.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
