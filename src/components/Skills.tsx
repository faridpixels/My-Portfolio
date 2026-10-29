import React from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import { Layers, FileSpreadsheet } from 'lucide-react';

export const Skills: React.FC = () => {
  const designSkills = SKILLS_DATA.filter(
    (s) => s.category === 'Design & Visual Branding'
  );
  const documentSkills = SKILLS_DATA.filter(
    (s) => s.category === 'Document & Productivity Suite'
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#050914] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools &amp; Software Proficiency
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A versatile toolkit spanning industry-standard graphic creation software and executive
            document productivity applications.
          </p>
        </div>

        {/* 2-Column Suite Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Graphic Design & Branding Suite */}
          <div className="bg-slate-50 dark:bg-[#071B3D]/40 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-electric dark:text-[#00CFFF]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Design &amp; Visual Branding Tools
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Vector graphics, image manipulation, and social design
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-electric dark:text-[#00CFFF] tabular-nums">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Visual Proficiency Bar */}
                  <div
                    className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <div
                      className="h-full gradient-brand rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Document & Productivity Suite */}
          <div className="bg-slate-50 dark:bg-[#071B3D]/40 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
              <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-electric dark:text-[#00CFFF]">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Document &amp; Productivity Suite
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Formatting, typography, spreadsheet analysis, and PDF tools
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {documentSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-electric dark:text-[#00CFFF] tabular-nums">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Visual Proficiency Bar */}
                  <div
                    className="h-2 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  >
                    <div
                      className="h-full gradient-brand rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Transparent Note */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          Proficiency levels represent working capability in active client production workflows.
        </div>

      </div>
    </section>
  );
};
