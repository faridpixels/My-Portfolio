import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  Maximize2,
  ExternalLink,
  RefreshCw,
  MessageSquare,
  Tag,
  Wrench,
  AlertCircle,
  Download,
  BookOpen,
  FileText,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioItem, PortfolioCategory } from '../types';
import { PortfolioMockup } from './PortfolioMockup';
import { PDFReader } from './PDFReader';
import { getPortfolioInquiryWhatsAppUrl } from '../utils/whatsapp';

const CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Flyers',
  'Posters',
  'Logos & Branding',
  'Social Media',
  'Documents',
];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [pdfViewMode, setPdfViewMode] = useState<'reader' | 'overview'>('reader');

  // Keyboard accessibility: Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  // Combined Search and Category Filter
  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return PORTFOLIO_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Projects' || project.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = project.title.toLowerCase().includes(query);
      const categoryMatch = project.category.toLowerCase().includes(query);
      const tagsMatch = project.tags.some((tag) => tag.toLowerCase().includes(query));
      const descriptionMatch = project.description.toLowerCase().includes(query);
      const toolsMatch = project.tools.some((t) => t.toLowerCase().includes(query));

      return titleMatch || categoryMatch || tagsMatch || descriptionMatch || toolsMatch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All Projects');
    setSearchQuery('');
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-100/80 dark:bg-[#071B3D]/20 transition-colors border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Creative Portfolio &amp; Visual Showcase
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Explore curated design concepts, visual identities, posters, and document layouts.
            Click any project to preview mockups and design specifications.
          </p>
        </div>

        {/* Gallery Controls Bar: Search & Category Filters */}
        <div className="space-y-4 mb-10">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tag, tool, or keyword..."
              aria-label="Search portfolio projects"
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-white dark:bg-[#050914] border border-slate-300 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CFFF] dark:focus:ring-[#00CFFF] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented Button Navigation) */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'bg-white dark:bg-[#050914] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}

            {(selectedCategory !== 'All Projects' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-electric dark:text-[#00CFFF] hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Gallery Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#050914] rounded-2xl border border-slate-200 dark:border-white/10 p-8 max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white gradient-brand rounded-lg shadow-sm cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear Search &amp; Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setActiveProject(project);
                  setPdfViewMode('reader');
                }}
                className="group relative bg-white dark:bg-[#050914] rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Mockup Container (Responsive Aspect Ratio) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <PortfolioMockup item={project} />

                  {/* Most Recent / Featured Banner */}
                  {project.badgeSubtitle && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-gradient-to-r from-[#087BFF] to-[#00CFFF] text-white shadow-lg flex items-center gap-1">
                        <span>★</span>
                        <span>{project.badgeSubtitle}</span>
                      </span>
                    </div>
                  )}

                  {/* PDF indicator badge */}
                  {project.pdfUrl && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/85 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1 shadow-md">
                        <FileText className="w-3 h-3 text-emerald-400" />
                        <span>Brand Guide PDF</span>
                      </span>
                    </div>
                  )}

                  {/* Sample Project Watermark Banner */}
                  {project.isSampleProject && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-black/75 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                        Sample Project
                      </span>
                    </div>
                  )}

                  {/* Overlay Expand Trigger */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold backdrop-blur-sm shadow-md">
                      {project.pdfUrl ? (
                        <>
                          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Read Brand Guide (PDF)</span>
                        </>
                      ) : (
                        <>
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Preview Details</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Project Metadata Body (Zero-Pill Discipline) */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Unboxed Category and Tools Separator */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-medium text-electric dark:text-[#00CFFF]">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.tools[0]}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-electric dark:group-hover:text-[#00CFFF] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags rendered as clean unboxed inline text with typographic separators */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <Tag className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{project.tags.join(' · ')}</span>
                    </div>
                    <span className="text-electric dark:text-[#00CFFF] font-semibold text-xs shrink-0 ml-2">
                      {project.pdfUrl ? 'Read PDF →' : 'View →'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Informational Note for Clients and Farid */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Need a specific design style not shown above? Commission a custom project directly via WhatsApp.
        </div>

      </div>

      {/* Lightbox / Project Details & Native PDF Overlay Screen */}
      {activeProject && activeProject.pdfPages && activeProject.pdfPages.length > 0 && pdfViewMode === 'reader' ? (
        <PDFReader
          pdfUrl={activeProject.pdfUrl || ''}
          pdfPages={activeProject.pdfPages}
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
          onSwitchToOverview={() => setPdfViewMode('overview')}
          onDiscussWhatsApp={() =>
            window.open(
              getPortfolioInquiryWhatsAppUrl(activeProject.title, activeProject.category),
              '_blank'
            )
          }
        />
      ) : activeProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-electric dark:text-[#00CFFF] uppercase tracking-wider">
                    {activeProject.category} · {activeProject.isSampleProject ? 'Sample Project' : 'Portfolio Work'}
                  </span>
                  {activeProject.pdfPages && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      16-Page Brand Guide
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title" className="text-base sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                  {activeProject.title}
                </h3>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {activeProject.pdfPages && (
                  <button
                    type="button"
                    onClick={() => setPdfViewMode('reader')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all whitespace-nowrap cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Reader</span>
                  </button>
                )}
                {activeProject.pdfUrl && (
                  <a
                    href={activeProject.pdfUrl}
                    download="Alameen_Brand_Identity_FaridPixelPro.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold border border-white/10 transition-all whitespace-nowrap"
                    title="Download the official PDF file"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close preview"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Standard Project Overview & Image Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
              {/* Visual Mockup Display */}
              <div className="w-full max-h-[60vh] min-h-[260px] sm:min-h-[360px] rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 flex items-center justify-center p-2">
                {activeProject.imageUrl ? (
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[56vh] w-auto max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <PortfolioMockup item={activeProject} className="h-full w-full" />
                )}
              </div>

              {/* PDF Action Banner if available */}
              {activeProject.pdfPages && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Complete 16-Page Brand Guidelines Available
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        Read the full style guide in the interactive reader or download a local copy.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPdfViewMode('reader')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all whitespace-nowrap cursor-pointer shadow"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open Reader</span>
                    </button>
                    {activeProject.pdfUrl && (
                      <a
                        href={activeProject.pdfUrl}
                        download="Alameen_Brand_Identity_FaridPixelPro.pdf"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 rounded-lg transition-all whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Project Description */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview &amp; Design Strategy
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Tools & Tags Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    <Wrench className="w-3.5 h-3.5 text-electric dark:text-[#00CFFF]" />
                    <span>Tools Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {activeProject.tools.map((tool, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    <Tag className="w-3.5 h-3.5 text-electric dark:text-[#00CFFF]" />
                    <span>Design Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {activeProject.tags.join(' · ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071B3D]/30 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Interested in this aesthetic for your brand?
              </span>
              <div className="flex items-center gap-3">
                {activeProject.pdfPages && (
                  <button
                    type="button"
                    onClick={() => setPdfViewMode('reader')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Brand Guide</span>
                  </button>
                )}
                {activeProject.pdfUrl && (
                  <a
                    href={activeProject.pdfUrl}
                    download="Alameen_Brand_Identity_FaridPixelPro.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 rounded-lg shadow-sm transition-all whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                >
                  Close (Esc)
                </button>
                <a
                  href={getPortfolioInquiryWhatsAppUrl(activeProject.title, activeProject.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white gradient-brand rounded-lg shadow-sm hover:opacity-95 transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
