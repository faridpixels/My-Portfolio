import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioMockupProps {
  item: PortfolioItem;
  className?: string;
}

export const PortfolioMockup: React.FC<PortfolioMockupProps> = ({ item, className = '' }) => {
  if (item.imageUrl) {
    return (
      <div className={`w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  switch (item.visualMockupType) {
    case 'techno-flyer':
      return (
        <div className={`w-full h-full bg-[#050914] relative overflow-hidden flex flex-col justify-between p-5 text-white ${className}`}>
          {/* Background grid and ambient lights */}
          <div className="absolute inset-0 bg-[radial-gradient(#087BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00CFFF] rounded-full filter blur-3xl opacity-25 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#087BFF] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-3">
            <span className="text-[10px] font-mono tracking-widest text-[#00CFFF] uppercase">FaridPixelPro · Concept</span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400">DEC 2026</span>
          </div>

          {/* Hero Typography */}
          <div className="relative z-10 my-auto py-4">
            <div className="text-[11px] font-semibold tracking-wider text-[#087BFF] uppercase mb-1">Live Audio Experience</div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-none bg-gradient-to-r from-white via-cyan-100 to-[#00CFFF] bg-clip-text text-transparent">
              CYBER BEAT
            </div>
            <div className="text-xs text-slate-400 mt-2 max-w-[200px] leading-relaxed">
              Featuring 12 International DJs · 3 Futuristic Soundstages · Neon Arena
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm flex items-center justify-between">
            <div>
              <div className="text-[9px] text-slate-400 uppercase tracking-wider">Venue Location</div>
              <div className="text-xs font-semibold text-white">Metropolis Dome, Hall B</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-[#00CFFF] uppercase tracking-wider">Tickets Available</div>
              <div className="text-xs font-mono font-bold text-white">DOORS 20:00</div>
            </div>
          </div>
        </div>
      );

    case 'summit-flyer':
      return (
        <div className={`w-full h-full bg-[#071B3D] relative overflow-hidden flex flex-col justify-between p-5 text-white ${className}`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#087BFF]/30 to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-[10px] font-semibold tracking-widest text-[#00CFFF] uppercase">Horizon Summit</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">GLOBAL 2026</span>
          </div>

          <div className="relative z-10 my-4 space-y-2">
            <span className="text-xs text-blue-300 font-medium tracking-wide">Keynote & Innovation Forum</span>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
              Designing the Future of Tech & Brands
            </div>
            <p className="text-[11px] text-slate-300 line-clamp-2">
              Leading executives & creative directors share actionable frameworks on digital transformation.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
            <div className="bg-white/5 p-1.5 rounded">
              <div className="text-[9px] text-slate-400">Speakers</div>
              <div className="text-xs font-bold text-[#00CFFF]">40+ Lead</div>
            </div>
            <div className="bg-white/5 p-1.5 rounded">
              <div className="text-[9px] text-slate-400">Workshops</div>
              <div className="text-xs font-bold text-white">16 Tracks</div>
            </div>
            <div className="bg-white/5 p-1.5 rounded">
              <div className="text-[9px] text-slate-400">Delegates</div>
              <div className="text-xs font-bold text-blue-400">2,500+</div>
            </div>
          </div>
        </div>
      );

    case 'cyber-poster':
      return (
        <div className={`w-full h-full bg-[#050914] relative overflow-hidden flex flex-col justify-between p-6 text-white ${className}`}>
          {/* Cyber lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="posterGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00CFFF" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#posterGrid)" />
            </svg>
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <div className="w-8 h-8 rounded-lg border border-[#00CFFF] flex items-center justify-center text-[#00CFFF] font-mono text-xs font-bold">
              NP
            </div>
            <span className="text-[10px] font-mono text-[#00CFFF] uppercase tracking-widest">SERIES 09 // VISUAL POSTER</span>
          </div>

          {/* Central graphic */}
          <div className="relative z-10 my-auto text-center py-4">
            <div className="inline-block relative">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#087BFF] to-[#00CFFF] p-1 shadow-[0_0_30px_rgba(0,207,255,0.4)]">
                <div className="w-full h-full bg-[#050914] rounded-full flex items-center justify-center">
                  <span className="text-xl font-black italic tracking-tighter text-[#00CFFF]">NEO</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-2xl font-black tracking-tight uppercase text-white">
              PULSE KINETIC
            </div>
            <div className="text-xs text-cyan-200/80 font-mono tracking-wider mt-1">
              ZERO ARTIFICIAL · MAXIMUM IMPACT
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>FARIDPIXELPRO</span>
            <span className="text-[#00CFFF]">EXHIBITION EDITION</span>
          </div>
        </div>
      );

    case 'zenith-branding':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-[#071B3D] to-[#050914] relative overflow-hidden flex flex-col justify-between p-6 text-white ${className}`}>
          <div className="relative z-10 flex justify-between items-center">
            <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest">Brand Identity</span>
            <span className="text-[10px] text-slate-400">Mockup Guide</span>
          </div>

          <div className="relative z-10 my-auto text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00CFFF] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white">ZENITH FINANCIAL</div>
              <div className="text-xs text-cyan-300 font-medium tracking-wide mt-0.5">Capital & Digital Banking</div>
            </div>
            {/* Color Swatches */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="w-5 h-5 rounded-full bg-[#050914] border border-white/20" title="#050914" />
              <div className="w-5 h-5 rounded-full bg-[#071B3D]" title="#071B3D" />
              <div className="w-5 h-5 rounded-full bg-[#087BFF]" title="#087BFF" />
              <div className="w-5 h-5 rounded-full bg-[#00CFFF]" title="#00CFFF" />
            </div>
          </div>

          <div className="relative z-10 text-[10px] text-slate-400 text-center border-t border-white/10 pt-2">
            Scalable Vector Marks · Typography System · Corporate Assets
          </div>
        </div>
      );

    case 'luxury-card':
      return (
        <div className={`w-full h-full bg-[#080d1a] relative overflow-hidden flex flex-col justify-center items-center p-6 text-white ${className}`}>
          {/* Mockup card surface */}
          <div className="w-full max-w-[280px] bg-gradient-to-br from-[#0c182f] to-[#050914] border border-[#087BFF]/30 rounded-xl p-5 shadow-2xl relative">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-tr from-[#087BFF] to-[#00CFFF] opacity-80 flex items-center justify-center text-[10px] font-bold text-white">
              A
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold tracking-wide text-white">ALEXANDER REED</div>
              <div className="text-[10px] text-[#00CFFF] font-mono tracking-wider">CREATIVE STRATEGIST</div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 space-y-1 text-[9px] text-slate-400 font-mono">
              <div>hello@apexstudio.design</div>
              <div>+1 (555) 234-8900</div>
              <div>www.apexstudio.design</div>
            </div>
          </div>
        </div>
      );

    case 'pulse-social':
      return (
        <div className={`w-full h-full bg-[#071B3D] relative overflow-hidden flex flex-col justify-between p-5 text-white ${className}`}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00CFFF] flex items-center justify-center text-xs font-bold text-white">
              PV
            </div>
            <div>
              <div className="text-xs font-bold text-white">Pulse Velocity</div>
              <div className="text-[9px] text-slate-400">Sponsored Campaign</div>
            </div>
          </div>

          <div className="my-auto py-3 bg-[#050914]/60 rounded-xl p-4 border border-cyan-500/20 text-center">
            <div className="text-xs font-mono text-[#00CFFF] uppercase tracking-wider mb-1">Growth Metric</div>
            <div className="text-3xl font-extrabold text-white tracking-tight">3.8X</div>
            <div className="text-xs text-slate-300 mt-1">Audience Engagement Elevation</div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
            <span className="text-[#00CFFF] font-medium text-[11px]">Swipe for Strategy →</span>
            <span className="text-[10px] font-mono text-slate-400">1 of 5</span>
          </div>
        </div>
      );

    case 'corporate-document':
      return (
        <div className={`w-full h-full bg-white text-slate-900 relative overflow-hidden flex flex-col justify-between p-6 shadow-sm ${className}`}>
          {/* Header strip */}
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#087BFF]" />
              <span className="text-xs font-bold tracking-tight text-slate-900">GLOBAL ENTERPRISE REPORT</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">CONFIDENTIAL</span>
          </div>

          {/* Document Content Simulation */}
          <div className="my-3 space-y-2.5">
            <div className="text-sm font-bold text-slate-900 leading-snug">
              Executive Summary: FY2026 Strategic Horizons
            </div>
            <div className="h-2 w-full bg-slate-100 rounded" />
            <div className="h-2 w-5/6 bg-slate-100 rounded" />
            <div className="h-2 w-4/6 bg-slate-100 rounded" />

            <div className="mt-3 p-2.5 bg-slate-50 rounded border border-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-medium text-slate-700">Market Penetration Index</span>
              <span className="font-mono font-bold text-[#087BFF]">+42.6%</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[9px] text-slate-400">
            <span>Prepared by FaridPixelPro</span>
            <span>Page 04 of 28</span>
          </div>
        </div>
      );

    case 'pitch-deck':
    default:
      return (
        <div className={`w-full h-full bg-[#050914] relative overflow-hidden flex flex-col justify-between p-6 text-white ${className}`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-xs font-bold text-white">CURRICULUM VITAE</span>
            <span className="text-[10px] text-[#00CFFF] font-mono">ATS-OPTIMIZED</span>
          </div>

          <div className="my-3 space-y-2">
            <div className="text-sm font-bold text-white">Chief Technology Officer</div>
            <div className="text-xs text-[#087BFF] font-medium">10+ Years Enterprise Experience</div>

            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-[10px] bg-white/5 p-1.5 rounded">
                <span className="text-slate-300">Engineering Leadership</span>
                <span className="text-[#00CFFF] font-mono">Senior V.P.</span>
              </div>
              <div className="flex items-center justify-between text-[10px] bg-white/5 p-1.5 rounded">
                <span className="text-slate-300">System Architecture</span>
                <span className="text-[#00CFFF] font-mono">Principal</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[9px] text-slate-400">
            <span>Verified Structure</span>
            <span className="text-white">FaridPixelPro Doc Suite</span>
          </div>
        </div>
      );
  }
};
