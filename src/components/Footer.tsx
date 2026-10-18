import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t-4 border-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center text-xl shadow-md">
                🧸
              </div>
              <span className="font-display font-bold text-xl text-white">
                Purity’s Toy Extravaganza
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Making childhood extra special with magical toys that spark imagination, foster creativity, and turn everyday playtime into extraordinary family memories.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                South Africa · ZAR Currency
              </span>
            </div>

            {/* Social Links Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram (Sample)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook (Sample)"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp (Sample)"
              >
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-purple-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Toys
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bestsellers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Category Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-purple-300 uppercase tracking-wider">
              Toy Categories
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-400">
              {CATEGORIES.slice(0, 6).map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectCategory(c.id);
                    onNavigate('shop');
                  }}
                  className="text-left hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{c.icon}</span>
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Demo Notice */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-purple-300 uppercase tracking-wider">
              Store Contact (Sample)
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>+27 (0) 11 000 0000 (Sample)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>hello@puritystoys.co.za</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>South Africa</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-amber-300 block mb-0.5">Demo Prototype:</strong>
              Product inventory, pricing, contact details, and policies are sample placeholders designed for client evaluation.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Purity’s Toy Extravaganza. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Big Smiles & Bigger Adventures
          </p>
        </div>

      </div>
    </footer>
  );
};
