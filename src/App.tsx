import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#050914] text-slate-900 dark:text-slate-100 selection:bg-[#00CFFF]/30 selection:text-white flex flex-col transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section (Split screen) */}
          <Hero />

          {/* 2. About Section (With exact stated copy & experience claim) */}
          <About />

          {/* 3. Portfolio Section (Filterable, searchable, lightbox preview, sample tags) */}
          <Portfolio />

          {/* 5. Skills & Tools Section (Editable percentage bars) */}
          <Skills />

          {/* 6. How I Work Section (3-step workflow) */}
          <Process />

          {/* 7. Testimonials Section (Cleanly hidden when array is empty) */}
          <Testimonials />

          {/* 8. Contact Section (WhatsApp brief formatter, email copy fallback, hidden Instagram) */}
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />

        {/* Persistent Floating Controls */}
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
