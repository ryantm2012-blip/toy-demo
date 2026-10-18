import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, ShieldCheck, Check, Heart, Sparkles, Plus, Minus } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-purple-100 max-h-[92vh] overflow-y-auto z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-20"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image */}
          <div className="md:col-span-6 relative">
            <div className={`relative aspect-square rounded-2xl overflow-hidden ${product.accentBg} p-4 flex items-center justify-center border border-slate-100 shadow-sm`}>
              
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-xs font-display font-bold px-3 py-1 rounded-full shadow-sm tracking-wide ${
                      product.badge === 'Bestseller'
                        ? 'bg-amber-400 text-purple-950'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {!imageError ? (
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="text-center p-6">
                  <span className="text-6xl mb-2 block animate-bounce">🧸</span>
                  <span className="font-display font-bold text-sm text-purple-900">{product.name}</span>
                </div>
              )}

              <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 shadow-xs border border-slate-100">
                Recommended: {product.ageRange}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-bold text-purple-700 uppercase tracking-wider text-[11px]">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900 tabular-nums">{product.rating.toFixed(1)}</span>
                  <span className="text-slate-400 text-xs">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display font-bold text-3xl text-slate-900 tabular-nums">
                  R {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    R {product.originalPrice}
                  </span>
                )}
                <span className="text-xs text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full font-semibold border border-teal-200">
                  ZAR Demo Rate
                </span>
              </div>

              {/* Descriptions */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {product.detailedDescription || product.description}
              </p>

              {/* Key Features */}
              <div className="mb-6 space-y-1.5">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Key Toy Features:
                </h4>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Safety Note */}
              <div className="mb-6 p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Parent Care & Safety:</strong> {product.safetyNote}
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-1 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center font-bold shadow-2xs transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-xs font-bold font-sans tabular-nums text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center font-bold shadow-2xs transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3 px-6 rounded-2xl text-sm font-display font-bold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-purple-500/20'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {quantity} to Basket (R {product.price * quantity})</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
