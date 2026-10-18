import React from 'react';
import { BENEFITS } from '../data/mockData';
import { Sparkles, ShieldCheck, ShoppingBag, HeartHandshake } from 'lucide-react';

export const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-purple-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-100">
            The Purity Promise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3">
            Why Shop With Us?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Crafting memorable playtimes and joyful memories for the whole family.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-slate-50/70 hover:bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-1 flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${benefit.accentColor} shadow-xs`}>
                {getIcon(benefit.icon)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
