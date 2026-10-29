import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { getGeneralIntroWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Instant WhatsApp inquiry"
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2"
    >
      {/* Tooltip on hover/focus */}
      {isHovered && (
        <div
          role="tooltip"
          className="hidden sm:block px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl border border-white/10 dark:border-slate-200 animate-in fade-in duration-150"
        >
          Chat on WhatsApp
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralIntroWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct inquiry on WhatsApp with Farid"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 cursor-pointer"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
};
