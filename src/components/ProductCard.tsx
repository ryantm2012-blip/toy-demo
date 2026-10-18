import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'teddy-plushies': return '🧸';
      case 'cars-vehicles': return '🚗';
      case 'building-blocks': return '🧱';
      case 'dolls-accessories': return '🪆';
      case 'action-figures': return '🦸';
      case 'puzzles-games': return '🧩';
      case 'board-games': return '🎲';
      case 'arts-crafts': return '🎨';
      default: return '✨';
    }
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-white rounded-3xl border border-purple-100/80 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Container */}
      <div className={`relative w-full aspect-square rounded-2xl overflow-hidden ${product.accentBg} flex items-center justify-center p-3 mb-4`}>
        
        {/* Badge: Bestseller or New Arrival */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span
              className={`text-[11px] font-display font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide ${
                product.badge === 'Bestseller'
                  ? 'bg-amber-400 text-purple-950'
                  : 'bg-rose-500 text-white'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Hover Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-purple-600 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          title="Quick View"
          aria-label={`Quick View for ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Product Image or Fallback */}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-amber-100 rounded-xl p-4 text-center">
            <span className="text-5xl mb-2 animate-bounce">{getCategoryIcon(product.category)}</span>
            <span className="font-display font-bold text-xs text-purple-900">{product.name}</span>
          </div>
        )}

        {/* Age Suitability Tag */}
        <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-slate-700 px-2 py-0.5 rounded-md shadow-2xs border border-slate-100">
          {product.ageRange}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col">
        {/* Category & Star Rating */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
          <span className="font-semibold text-purple-700 uppercase tracking-wider text-[11px]">
            {product.categoryName}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-800 tabular-nums">{product.rating.toFixed(1)}</span>
            <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-xl text-slate-900 tabular-nums">
                R {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through tabular-nums">
                  R {product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-teal-600 font-semibold">Demo Price</span>
          </div>

          <button
            onClick={handleAdd}
            className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-purple-500/20 hover:shadow-md'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
