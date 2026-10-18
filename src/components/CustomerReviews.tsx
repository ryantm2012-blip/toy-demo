import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, MessageCircleHeart, Info } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-purple-700 font-display font-semibold text-xs tracking-wider uppercase mb-2">
            <MessageCircleHeart className="w-4 h-4 text-rose-500" />
            <span>Family Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Loved by Parents & Kids Alike
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            See how our toys have brought extra smiles and adventures to family playrooms across South Africa.
          </p>

          {/* Explicit Sample Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs px-3.5 py-1.5 rounded-full border border-amber-200">
            <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Example testimonials — placeholder reviews to be replaced with real customer feedback</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-purple-100/80 shadow-sm hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-xs font-bold text-slate-700">5.0</span>
                </div>

                {/* Review Title */}
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  &ldquo;{review.title}&rdquo;
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-purple-700 font-medium">
                    {review.childAge} · {review.location}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
