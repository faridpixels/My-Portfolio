import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { FPBrandLockup } from './FPLogo';
import { useTheme } from '../context/ThemeContext';
import { getGeneralIntroWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#050914]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Monogram */}
        <FPBrandLockup
          size="md"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollTo('home')}
            className="hover:text-electric dark:hover:text-[#00CFFF] transition-colors whitespace-nowrap cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-electric dark:hover:text-[#00CFFF] transition-colors whitespace-nowrap cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className="hover:text-electric dark:hover:text-[#00CFFF] transition-colors whitespace-nowrap cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-electric dark:hover:text-[#00CFFF] transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Primary Action) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Switcher Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-electric dark:hover:text-[#00CFFF] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00CFFF] cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Primary Action Button: "Let's Talk" */}
          <a
            href={getGeneralIntroWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white gradient-brand rounded-lg hover:opacity-95 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,207,255,0.3)] whitespace-nowrap shrink-0 active:scale-98"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#050914] border-b border-slate-200 dark:border-white/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-800 dark:text-slate-200">
            <button
              onClick={() => scrollTo('home')}
              className="text-left py-2 hover:text-electric dark:hover:text-[#00CFFF] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 hover:text-electric dark:hover:text-[#00CFFF] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="text-left py-2 hover:text-electric dark:hover:text-[#00CFFF] transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-electric dark:hover:text-[#00CFFF] transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <a
                href={getGeneralIntroWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white gradient-brand rounded-xl"
              >
                <span>Let's Talk on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
