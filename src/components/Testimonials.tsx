import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Quote } from 'lucide-react';

/**
 * Testimonials Section Component
 * 
 * In accordance with client specifications:
 * When there are no verified testimonials (TESTIMONIALS_DATA is empty),
 * this component automatically returns null and stays completely hidden.
 * As soon as genuine client feedback is added to src/data/testimonialsData.ts,
 * this section renders seamlessly.
 */
export const Testimonials: React.FC = () => {
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#050914] transition-colors border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Words &amp; Experience
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real feedback from collaborators and organizations who partnered with FaridPixelPro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-[#071B3D]/50 border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-electric dark:text-[#00CFFF] opacity-50 mb-4" />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.clientName}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} · {item.company}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-electric dark:text-[#00CFFF]">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
