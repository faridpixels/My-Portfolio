import React, { useState } from 'react';
import {
  Layers,
  Image as ImageIcon,
  Sparkles,
  Palette,
  CreditCard,
  Share2,
  Keyboard,
  AlignLeft,
  FileCheck,
  Briefcase,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { getServiceQuoteWhatsAppUrl } from '../utils/whatsapp';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'graphic-design' | 'document-services'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  const renderIcon = (iconName: string) => {
    const iconProps = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Layers':
        return <Layers {...iconProps} />;
      case 'Image':
        return <ImageIcon {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'CreditCard':
        return <CreditCard {...iconProps} />;
      case 'Share2':
        return <Share2 {...iconProps} />;
      case 'Keyboard':
        return <Keyboard {...iconProps} />;
      case 'AlignLeft':
        return <AlignLeft {...iconProps} />;
      case 'FileCheck':
        return <FileCheck {...iconProps} />;
      case 'Briefcase':
      default:
        return <Briefcase {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050914] dark:bg-[#050914] bg-white transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Creative &amp; Document Services
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            From high-visibility visual branding and promotional print designs to meticulous document
            engineering, discover how FaridPixelPro brings precision to every project.
          </p>
        </div>

        {/* Category Filter Tabs (Segmented Button Controls) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-100 dark:bg-[#071B3D] border border-slate-200 dark:border-white/10 rounded-xl" role="tablist">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-[#050914] text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#00CFFF]/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              role="tab"
              aria-selected={activeCategory === 'graphic-design'}
              onClick={() => setActiveCategory('graphic-design')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'graphic-design'
                  ? 'bg-white dark:bg-[#050914] text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#00CFFF]/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Graphic Design &amp; Branding (6)
            </button>
            <button
              role="tab"
              aria-selected={activeCategory === 'document-services'}
              onClick={() => setActiveCategory('document-services')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'document-services'
                  ? 'bg-white dark:bg-[#050914] text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#00CFFF]/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Document Services (4)
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-50 dark:bg-[#071B3D]/50 border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#087BFF]/50 dark:hover:border-[#00CFFF]/40 hover:shadow-lg dark:hover:shadow-[0_10px_30px_-10px_rgba(0,207,255,0.15)]"
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 flex items-center justify-center text-electric dark:text-[#00CFFF] group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-electric dark:group-hover:text-[#00CFFF] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Quote CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Custom quote via WhatsApp
                </span>
                <a
                  href={getServiceQuoteWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#071B3D] dark:bg-white/10 hover:bg-[#087BFF] dark:hover:bg-[#087BFF] border border-slate-300 dark:border-white/10 rounded-lg transition-colors whitespace-nowrap"
                  aria-label={`Request a quote for ${service.title}`}
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
