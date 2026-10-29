import React from 'react';
import { Palette, FileCheck2, Zap, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-100/70 dark:bg-[#071B3D]/30 border-y border-slate-200 dark:border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            About Farid &amp; The Brand
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Creativity with Purpose. Design with Impact.
          </h2>
          <div className="w-16 h-1 mx-auto gradient-brand rounded-full" />
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I’m a creative graphic designer with over 2 years of experience turning ideas into bold, memorable visuals. Through FaridPixelPro, I combine creativity, strategy, and attention to detail to create designs that do more than look good — they communicate, connect, and leave a lasting impression.
            </p>
            <p>
              From striking flyers and posters to professional branding, business designs, and polished documents, I’m passionate about helping businesses stand out, communicate effectively, and build a distinctive professional identity.
            </p>

            {/* Unboxed Discipline Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-200 dark:border-white/10">
              <div>
                <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white tabular-nums">
                  2+ Years
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Design Experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-electric dark:text-[#00CFFF]">
                  20+ Works
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Portfolio Showcase
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Direct WhatsApp
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Seamless Communication
                </div>
              </div>
            </div>
          </div>

          {/* Core Brand Pillars (Airy Structural Highlights) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="p-5 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:border-[#087BFF]/50">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-electric dark:text-[#00CFFF] shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Graphic Design &amp; Visual Identity
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    Crafting memorable logos, high-impact flyers, promotional posters, and social media visuals that command attention.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:border-[#00CFFF]/50">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-electric dark:text-[#00CFFF] shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Precision Document Solutions
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    Accurate transcription, structured document formatting, ATS-friendly CV design, and flawless PDF preparation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 shadow-sm transition-all hover:border-[#087BFF]/50">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-electric dark:text-[#00CFFF] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Client-Centered Partnership
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    Transparent communication from initial discussion to final delivery, ensuring every detail aligns with your vision.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
