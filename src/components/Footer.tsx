import React from 'react';
import { FPBrandLockup } from './FPLogo';
import { CONTACT_INFO } from '../data/contactInfo';
import { getGeneralIntroWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#050914] text-white border-t border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand lockup */}
          <FPBrandLockup size="md" onClick={scrollToTop} />

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            {/* WhatsApp Link */}
            <a
              href={getGeneralIntroWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#00CFFF] transition-colors"
              aria-label="Contact Farid on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram Link (rendered only when configured) */}
            {CONTACT_INFO.instagramUrl && (
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-pink-400 transition-colors"
                aria-label="FaridPixelPro on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            )}

            {/* Scroll to Top Trigger */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} FaridPixelPro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Graphic Design</span>
            <span aria-hidden="true">·</span>
            <span>Visual Branding</span>
            <span aria-hidden="true">·</span>
            <span>Document Services</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
