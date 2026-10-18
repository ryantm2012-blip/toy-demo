import React from 'react';
import { Sparkles, ArrowRight, Gift, Tag } from 'lucide-react';

interface SpecialOffersProps {
  onShopCollection: () => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onShopCollection }) => {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Playful Banner Container with Joyful Gradients and Rounded Borders */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-purple-700 via-pink-600 to-amber-500 p-8 sm:p-12 lg:p-14 text-white overflow-hidden shadow-2xl shadow-purple-900/15">
          
          {/* Decorative shapes and floating sparkles */}
          <div className="absolute top-4 right-1/3 text-3xl opacity-30 select-none animate-float pointer-events-none">
            ⭐
          </div>
          <div className="absolute bottom-6 left-12 text-3xl opacity-30 select-none animate-float-delayed pointer-events-none">
            🎁
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Discount Promo Pill */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider mb-6 border border-white/30">
                <Tag className="w-3.5 h-3.5 text-amber-300" />
                <span>Special Promotion · Demo Example</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                DOUBLE THE FUN, DOUBLE THE SMILES!
              </h2>

              {/* Supporting Text */}
              <p className="font-body text-base sm:text-lg text-purple-100 max-w-xl mb-8 leading-relaxed">
                Discover exciting toys for every age, every personality and every adventure.
              </p>

              {/* Action Button & Note */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onShopCollection}
                  className="px-8 py-3.5 bg-white text-purple-900 hover:bg-amber-100 font-display font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Gift className="w-4 h-4 text-rose-500" />
                  <span>Shop the Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-xs text-white/80 font-medium">
                  *Promotional discounts are editable sample templates.
                </span>
              </div>

            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Image Card Frame */}
                <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl">
                  <img
                    src="/src/assets/images/promo_double_fun_1792258250311.jpg"
                    alt="Purity's Toy Extravaganza Double the Fun Festive display"
                    className="w-full h-auto object-cover rounded-2xl aspect-[16/10] shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Discount Tag */}
                <div className="absolute -top-3 -right-3 bg-amber-400 text-purple-950 font-display font-bold px-4 py-2 rounded-2xl shadow-lg border-2 border-white flex items-center gap-1.5 animate-bounce">
                  <Sparkles className="w-4 h-4 fill-purple-950" />
                  <span className="text-xs sm:text-sm">Save Up To 25%</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
