import React from 'react';
import { Sparkles, ArrowRight, Star, Heart, Flame, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onBestSellersClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBestSellersClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-purple-50/60 via-amber-50/40 to-white">
      {/* Playful Floating Decorative Background Elements */}
      <div className="absolute top-12 left-10 text-3xl opacity-40 select-none animate-float pointer-events-none">
        ⭐
      </div>
      <div className="absolute top-1/4 right-8 text-4xl opacity-50 select-none animate-float-delayed pointer-events-none">
        🎈
      </div>
      <div className="absolute bottom-10 left-1/4 text-3xl opacity-30 select-none animate-float pointer-events-none">
        ✨
      </div>
      <div className="absolute top-3/4 right-1/4 text-2xl opacity-40 select-none animate-float-delayed pointer-events-none">
        🌈
      </div>

      {/* Subtle organic color blobs in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Action Buttons, Trust Markers */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Promotional Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 via-rose-100 to-purple-100 border border-purple-200/80 px-4 py-1.5 rounded-full shadow-sm mb-6 animate-pulse">
              <span className="text-base">✨</span>
              <span className="font-display font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-purple-700 to-rose-600 bg-clip-text text-transparent">
                A World of Fun Awaits!
              </span>
              <span className="text-xs bg-white/80 text-purple-700 px-2 py-0.5 rounded-full font-bold shadow-2xs">
                Demo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6 text-balance">
              Big Smiles.{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
                Bigger Adventures!
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Discover toys that spark imagination, inspire creativity and turn every ordinary day into an extraordinary adventure!
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-semibold text-base rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Toys</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBestSellersClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-amber-50 text-slate-800 border-2 border-amber-300 hover:border-amber-400 font-display font-semibold text-base rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 text-amber-900 cursor-pointer"
              >
                <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
                <span>Discover Best Sellers</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-purple-100/80 w-full max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-display font-bold text-slate-900 text-sm">4.9 / 5</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">Happy Parents</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-teal-600 mb-0.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-display font-bold text-slate-900 text-sm">Safe & Non-Toxic</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">Child-Approved</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-purple-600 mb-0.5">
                  <Heart className="w-4 h-4 fill-purple-400" />
                  <span className="font-display font-bold text-slate-900 text-sm">ZAR Pricing</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">Sample Rand Rates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Toy Extravaganza Showcase Image & Floating Interactive Badges */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Playful Backdrop Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 via-pink-100 to-amber-100 rounded-3xl sm:rounded-[2.5rem] transform rotate-2 scale-102 opacity-70"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-purple-900/10 border-4 border-white overflow-hidden">
                <img
                  src="/src/assets/images/hero_toy_extravaganza_1792258248693.jpg"
                  alt="Arrangement of colourful toys including teddy bears, building blocks, toy racecars, and dinosaurs at Purity's Toy Extravaganza"
                  className="w-full h-auto object-cover rounded-2xl sm:rounded-[2rem] aspect-[16/10] sm:aspect-[16/10] transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay Subtle Ribbon */}
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-4 rounded-xl text-white backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-sm sm:text-base">Purity’s Handpicked Collection</p>
                    <p className="text-xs text-amber-200">Teddy bears, racing cars, blocks & puzzles</p>
                  </div>
                  <span className="bg-amber-400 text-purple-950 font-display font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                    New 2026
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border-2 border-rose-200 shadow-lg px-3.5 py-2 rounded-2xl flex items-center gap-2 animate-float">
                <span className="text-2xl">🧸</span>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 font-display">Cuddle Approved</p>
                  <p className="text-[10px] text-rose-500 font-medium">Extra Soft Plushies</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border-2 border-teal-200 shadow-lg px-3.5 py-2 rounded-2xl flex items-center gap-2 animate-float-delayed">
                <span className="text-2xl">🧱</span>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 font-display">Rainbow Creativity</p>
                  <p className="text-[10px] text-teal-600 font-medium">STEM Building Blocks</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
