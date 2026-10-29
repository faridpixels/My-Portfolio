import React from 'react';
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import { getGeneralIntroWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      const headerOffset = 70;
      const elementPosition = portfolioElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-[#050914] transition-colors"
    >
      {/* Subtle Futuristic Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#087BFF]/20 to-[#00CFFF]/15 rounded-full filter blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-[#00CFFF]/10 rounded-full filter blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#087BFF] dark:text-[#00CFFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Graphic Design &amp; Visual Branding</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Hi, I'm Farid{' '}
              <span className="text-gradient-brand">
                welcome to FaridPixelPro
              </span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              FaridPixelPro specializes in high-impact visual branding, promotional flyers, posters, and 
              standout creative assets engineered to capture attention, alongside precision document and 
              transcription services for modern businesses worldwide.
            </p>

            {/* Primary & Secondary Calls to Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA: "Let's Talk" -> WhatsApp */}
              <a
                href={getGeneralIntroWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white gradient-brand rounded-xl hover:opacity-95 transition-all shadow-[0_0_25px_rgba(8,123,255,0.35)] hover:shadow-[0_0_35px_rgba(0,207,255,0.5)] active:scale-98 whitespace-nowrap"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA: "View My Work" -> Smooth scroll to portfolio */}
              <button
                type="button"
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300/80 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 rounded-xl transition-all active:scale-98 cursor-pointer whitespace-nowrap"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4 text-[#00CFFF]" />
              </button>
            </div>

            {/* Micro Credibility Text (Clean Unboxed Metadata) */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <span>Fast WhatsApp Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>2+ Years Experience</span>
              <span aria-hidden="true">·</span>
              <span>Global Client Reach</span>
            </div>
          </div>

          {/* Right Column: Prominent Profile Picture / Visual Brand Anchor */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Outer Radiant Orbit Rings */}
              <div 
                className="absolute inset-0 rounded-3xl border border-[#087BFF]/30 dark:border-[#087BFF]/30 border-blue-400/40 rotate-6 transition-transform duration-700 hover:rotate-12 pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute inset-3 rounded-3xl border border-[#00CFFF]/25 dark:border-[#00CFFF]/25 border-cyan-400/30 -rotate-3 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Central Glowing Shield / Profile Showcase Container */}
              <div className="relative w-5/6 h-5/6 rounded-2xl bg-gradient-to-br from-[#071B3D] via-[#050914] to-[#071B3D] dark:from-[#071B3D] dark:via-[#050914] dark:to-[#071B3D] from-slate-900 to-[#071B3D] border border-cyan-500/30 p-2.5 overflow-hidden flex flex-col items-center justify-center shadow-2xl shadow-blue-900/40 select-none">
                
                {/* Holographic Ambient Light */}
                <div className="absolute inset-0 bg-radial from-[#00CFFF]/15 via-transparent to-transparent opacity-60 rounded-2xl pointer-events-none z-10" />

                {/* Profile Photo */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src="https://i.ibb.co/ZRPP7RmC/profile-ic.png"
                    alt="Farid – FaridPixelPro"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Scrim & Name Pill */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050914] via-[#050914]/70 to-transparent pointer-events-none flex flex-col justify-end p-2.5 text-center z-10">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#00CFFF] uppercase">
                      Farid
                    </span>
                    <span className="text-[10px] text-slate-300">
                      FaridPixelPro
                    </span>
                  </div>
                </div>

                {/* Tech Corner Markers */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#00CFFF]/70 rounded-tl-sm pointer-events-none z-20" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#087BFF]/70 rounded-tr-sm pointer-events-none z-20" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#087BFF]/70 rounded-bl-sm pointer-events-none z-20" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#00CFFF]/70 rounded-br-sm pointer-events-none z-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
