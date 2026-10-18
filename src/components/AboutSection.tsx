import React, { useState } from 'react';
import { Sparkles, Heart, CheckCircle2, X } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white via-purple-50/30 to-amber-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Playful Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative backdrop shapes */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 via-pink-200 to-amber-200 rounded-[2.5rem] transform -rotate-1 opacity-70 blur-xs"></div>
              
              {/* Image Frame */}
              <div className="relative bg-white p-3 sm:p-4 rounded-[2rem] shadow-xl border-4 border-white overflow-hidden">
                <img
                  src="/src/assets/images/about_toys_wonder_1792258249103.jpg"
                  alt="Joyful playroom with cuddly unicorn plushie, colorful building blocks, and art supplies at Purity's Toy Extravaganza"
                  className="w-full h-auto object-cover rounded-2xl aspect-[4/3] transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-purple-100 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-display font-bold text-lg">
                    ✨
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                      Where Magic Meets Quality
                    </h4>
                    <p className="text-[11px] text-slate-500">Every toy is tested for maximum smiles & safety</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Headline */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3.5 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider mb-4 border border-purple-200">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Our Playful Heart</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Making Childhood Extra Special!
            </h2>

            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              At Purity’s Toy Extravaganza, we believe that every toy holds the possibility of a new adventure. From cuddly companions to exciting games and creative toys, our goal is to help families discover products that inspire imagination, laughter and unforgettable memories.
            </p>

            <p className="font-body text-sm text-slate-500 leading-relaxed mb-8">
              Whether you are hunting for the ideal birthday treasure, enriching a creative nursery corner, or organizing an exciting family board game night, we hand-curate toys that inspire active minds and warm hearts.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Screen-Free Sensory Play</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Curated for Age Suitability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Durable & Child-Friendly</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Warm Family Service</span>
              </div>
            </div>

            {/* Get to Know Us Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-semibold text-sm rounded-2xl shadow-md shadow-purple-500/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get to Know Us</span>
            </button>

          </div>

        </div>

      </div>

      {/* Get to Know Us Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-purple-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl mb-4">
              🧸
            </div>

            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
              The Purity Story
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mt-1 mb-4">
              Behind Purity’s Toy Extravaganza
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Founded out of a deep passion for children’s wonder and play, Purity’s Toy Extravaganza started with one simple wish: to bring joy, hearty laughter, and boundless imagination back into the hands of children through thoughtful, tactile toys.
              </p>
              <p>
                We know how challenging it can be for parents to find toys that are engaging, durable, and safe. That is why every product in our collection is carefully curated to foster real connection — whether it is building a tower together, staging an epic dinosaur safari, or singing a bedtime lullaby with a plush bear.
              </p>
              <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                <h4 className="font-display font-bold text-slate-900 text-sm mb-1">
                  Our 3 Golden Tenets:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs">
                  <li><strong>Play-First Learning:</strong> Toys that invite open-ended storytelling and exploration.</li>
                  <li><strong>Family Trust:</strong> Clear age guidance and transparent product details.</li>
                  <li><strong>Big Smiles:</strong> Every package delivered feels like an exciting birthday present.</li>
                </ul>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                *Note: This is an editable brand story template for the store owner.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Store
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
