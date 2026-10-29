import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-xl bg-white/80 dark:bg-[#071B3D]/80 backdrop-blur-md border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-electric dark:hover:text-[#00CFFF] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00CFFF]"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
