import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  MessageSquare,
  LayoutList,
  Eye,
  Tag,
} from 'lucide-react';

interface PDFReaderProps {
  pdfUrl: string;
  pdfPages: string[];
  title: string;
  onClose: () => void;
  onDiscussWhatsApp: () => void;
  onSwitchToOverview?: () => void;
}

const PAGE_SECTIONS = [
  'Page 1: Title & Cover',
  'Page 2: Designer Brand Info',
  'Page 3: Business Positioning & Pillars',
  'Page 4: About Company & Typography',
  'Page 5: Font Scale & Target Sizes',
  'Page 6: Brand Colour Palette',
  'Page 7: Main Logo & Icon System',
  'Page 8: Icon Variants',
  'Page 9: Business Card Front & Back',
  'Page 10: Business Card Credentials',
  'Page 11: Ceramic Coffee Mug Mockup',
  'Page 12: Steel Bottle & Notebook',
  'Page 13: Staff Facecap & Polo Shirt',
  'Page 14: Employee ID & Reception Signage',
  'Page 15: Commercial Vehicle & Shopping Bag',
  'Page 16: Brand Compliance & Contact',
];

export const PDFReader: React.FC<PDFReaderProps> = ({
  pdfUrl,
  pdfPages,
  title,
  onClose,
  onDiscussWhatsApp,
  onSwitchToOverview,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewStyle, setViewStyle] = useState<'single' | 'continuous'>('continuous');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(prev + 1, pdfPages.length));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pdfPages.length, onClose]);

  const scrollToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    if (viewStyle === 'continuous') {
      const targetElement = pageRefs.current[pageNum - 1];
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 60), 160));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-reader-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-6xl h-[95vh] bg-[#050914] text-white border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 sm:px-6 bg-[#071B3D]/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  16-Page Brand Identity Manual
                </span>
                <span className="text-[10px] text-slate-400 hidden md:inline">· High-Res Native Reader</span>
              </div>
              <h2 id="pdf-reader-title" className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                {title}
              </h2>
            </div>
          </div>

          {/* Navigation & Zoom Tools */}
          <div className="flex items-center gap-2 flex-wrap">
            
            {/* View Mode Switcher */}
            <div className="hidden sm:inline-flex p-1 bg-black/40 rounded-lg border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setViewStyle('continuous')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewStyle === 'continuous'
                    ? 'bg-emerald-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Continuous document scroll"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>All Pages</span>
              </button>
              <button
                type="button"
                onClick={() => setViewStyle('single')}
                className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewStyle === 'single'
                    ? 'bg-emerald-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Single page booklet view"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Page View</span>
              </button>
            </div>

            {/* Switch to Cover & Specs Button */}
            {onSwitchToOverview && (
              <button
                type="button"
                onClick={onSwitchToOverview}
                className="hidden sm:inline-flex px-2.5 py-1 rounded-lg text-xs bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all items-center gap-1.5 cursor-pointer"
                title="View project cover & specifications"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Cover &amp; Specs</span>
              </button>
            )}

            {/* Jump to Page Dropdown */}
            <select
              value={currentPage}
              onChange={(e) => scrollToPage(Number(e.target.value))}
              aria-label="Select page"
              className="px-2.5 py-1.5 text-xs bg-black/40 border border-white/10 rounded-lg text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer"
            >
              {pdfPages.map((_, idx) => (
                <option key={idx} value={idx + 1} className="bg-[#050914] text-white">
                  {PAGE_SECTIONS[idx] || `Page ${idx + 1} of ${pdfPages.length}`}
                </option>
              ))}
            </select>

            {/* Zoom Controls */}
            <div className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => handleZoom(-15)}
                disabled={zoomLevel <= 60}
                aria-label="Zoom out"
                className="p-1 hover:text-emerald-400 text-slate-300 disabled:opacity-30 cursor-pointer"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1.5 text-slate-300 tabular-nums">
                {zoomLevel}%
              </span>
              <button
                type="button"
                onClick={() => handleZoom(15)}
                disabled={zoomLevel >= 160}
                aria-label="Zoom in"
                className="p-1 hover:text-emerald-400 text-slate-300 disabled:opacity-30 cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download PDF Button */}
            <a
              href={pdfUrl}
              download="Alameen_Brand_Identity_FaridPixelPro.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all whitespace-nowrap"
              title="Download official PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Window Link */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Open raw PDF file in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close PDF reader"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Reader Workspace Area */}
        <div
          ref={containerRef}
          className="flex-1 w-full overflow-y-auto overflow-x-auto p-4 sm:p-6 bg-slate-950 flex flex-col items-center select-none"
        >
          {viewStyle === 'continuous' ? (
            /* Continuous Multi-Page Scroll View */
            <div
              className="flex flex-col items-center gap-8 w-full transition-all duration-200"
              style={{ maxWidth: `${Math.round(zoomLevel * 8.5)}px` }}
            >
              {pdfPages.map((pageSrc, index) => {
                const pageNum = index + 1;
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      pageRefs.current[index] = el;
                    }}
                    className="relative w-full bg-white rounded-lg shadow-2xl overflow-hidden border border-white/10 group"
                  >
                    {/* Page Header Indicator */}
                    <div className="absolute top-2 right-2 z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono bg-black/80 text-white px-2 py-0.5 rounded shadow">
                        Page {pageNum} of {pdfPages.length}
                      </span>
                    </div>

                    <img
                      src={pageSrc}
                      alt={`Al-Ameen Brand Identity Manual – Page ${pageNum}`}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      className="w-full h-auto block object-contain"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            /* Single Page Booklet View */
            <div
              className="flex flex-col items-center justify-center my-auto w-full transition-all duration-200"
              style={{ maxWidth: `${Math.round(zoomLevel * 8.5)}px` }}
            >
              <div className="relative w-full bg-white rounded-lg shadow-2xl overflow-hidden border border-white/10">
                <img
                  src={pdfPages[currentPage - 1]}
                  alt={`Al-Ameen Brand Identity Manual – Page ${currentPage}`}
                  className="w-full h-auto block object-contain"
                />
              </div>

              {/* Single Page Paging Controls */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage <= 1}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="font-mono text-xs text-slate-300 px-3">
                  Page {currentPage} of {pdfPages.length}
                </span>

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, pdfPages.length))}
                  disabled={currentPage >= pdfPages.length}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Information & WhatsApp Action Bar */}
        <div className="px-4 py-3 sm:px-6 bg-[#071B3D] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">
              A complete visual branding system on a wholesale and household store by FaridPixelPro.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Alameen_Brand_Identity_FaridPixelPro.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onDiscussWhatsApp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg gradient-brand text-white font-semibold shadow-md hover:opacity-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
