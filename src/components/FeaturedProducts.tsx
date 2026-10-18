import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { Search, X, SlidersHorizontal, ArrowUpDown, Sparkles, AlertCircle } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
  searchQuery,
  setSearchQuery,
  searchInputRef,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'name'>('featured');
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'Bestseller' | 'New Arrival'>('all');

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }
        // Badge filter
        if (badgeFilter !== 'all' && p.badge !== badgeFilter) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchCat = p.categoryName.toLowerCase().includes(q);
          if (!matchName && !matchDesc && !matchCat) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // default featured
      });
  }, [products, selectedCategory, badgeFilter, searchQuery, sortBy]);

  const resetAllFilters = () => {
    onSelectCategory('all');
    setBadgeFilter('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <section id="shop" className="py-16 sm:py-20 bg-amber-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Notice */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-purple-700 font-display font-semibold text-xs tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated with Joy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Toy Extravaganza
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every toy is chosen to spark curiosity, bring boundless laughter, and withstand playful everyday adventures.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full border border-purple-200">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Sample catalogue and prices in ZAR (R) — editable by store owner</span>
          </div>
        </div>

        {/* Filter Bar: Category Tabs & Search & Sort */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-purple-100 shadow-sm mb-10 flex flex-col gap-4">
          
          {/* Top Row: Search Input & Sort Dropdown & Quick Badges */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search toys by name or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Badge Filters & Sort Dropdown */}
            <div className="flex flex-wrap items-center justify-between md:justify-end gap-2.5 w-full md:w-auto">
              {/* Badge Filters: All, Bestsellers, New Arrivals */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-semibold">
                <button
                  onClick={() => setBadgeFilter('all')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    badgeFilter === 'all'
                      ? 'bg-white text-purple-700 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Toys
                </button>
                <button
                  onClick={() => setBadgeFilter('Bestseller')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    badgeFilter === 'Bestseller'
                      ? 'bg-amber-400 text-purple-950 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ★ Best Sellers
                </button>
                <button
                  onClick={() => setBadgeFilter('New Arrival')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    badgeFilter === 'New Arrival'
                      ? 'bg-rose-500 text-white shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ✨ New
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 font-medium py-2 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

            </div>

          </div>

          {/* Bottom Row: Category Pills Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Categories:
            </span>

            <button
              onClick={() => onSelectCategory('all')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-display font-medium shrink-0 transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({products.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-display font-medium shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-sm font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Active Filters Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <p>
            Showing <strong className="text-slate-800 tabular-nums">{filteredProducts.length}</strong> of{' '}
            <strong className="text-slate-800 tabular-nums">{products.length}</strong> toys
            {selectedCategory !== 'all' && (
              <span> in <strong>{CATEGORIES.find((c) => c.id === selectedCategory)?.name}</strong></span>
            )}
            {searchQuery && (
              <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
            )}
          </p>

          {(selectedCategory !== 'all' || badgeFilter !== 'all' || searchQuery) && (
            <button
              onClick={resetAllFilters}
              className="text-purple-600 hover:text-purple-800 font-semibold underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-purple-200 p-8 max-w-lg mx-auto">
            <span className="text-5xl mb-3 block">🧸🔍</span>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
              No toys matched your search!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              We couldn’t find any toys matching your current filters. Try searching for something else or clear your filters to see all toys.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-display font-bold rounded-2xl transition-all shadow-md shadow-purple-500/20 cursor-pointer"
            >
              Reset Filters & Show All Toys
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
