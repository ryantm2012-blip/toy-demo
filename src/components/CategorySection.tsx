import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-purple-700 font-display font-semibold text-xs tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Wonderlands</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Shop by Category
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From snuggly bedtime plushies to mind-bending STEM puzzles, pick a world to jump straight into play!
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className={`mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-display font-bold px-4 py-2 rounded-xl transition-all border cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                : 'text-purple-700 bg-purple-50 hover:bg-purple-100 border-purple-200'
            }`}
          >
            <span>View All Toys ({CATEGORIES.reduce((acc, c) => acc + c.itemCount, 0)} items)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-purple-600 bg-gradient-to-b from-purple-50/80 to-pink-50/80 shadow-lg shadow-purple-500/10 scale-[1.02]'
                    : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-1'
                }`}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-amber-200/40 via-purple-200/40 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Category Icon and count */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md shadow-slate-200/60 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                      {category.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 font-sans tabular-nums bg-white px-2.5 py-1 rounded-full border border-slate-100 shadow-2xs">
                      {category.itemCount} items
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-purple-700 transition-colors">
                    {category.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                {/* Footer action link */}
                <div className="mt-5 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    {isSelected ? 'Currently Viewing' : 'Explore Category'}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
