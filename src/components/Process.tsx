import React from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { MessageSquareText, PenTool, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquareText className="w-5 h-5" />;
      case 1:
        return <PenTool className="w-5 h-5" />;
      case 2:
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-slate-100/70 dark:bg-[#071B3D]/20 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            Workflow &amp; Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A straightforward, transparent 3-step collaboration designed to turn your initial concepts
            into finalized creative assets with minimal friction.
          </p>
        </div>

        {/* 3-Step Cards Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white dark:bg-[#050914] rounded-2xl border border-slate-200 dark:border-white/10 p-7 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all hover:border-[#087BFF]/50 dark:hover:border-[#00CFFF]/40 group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#071B3D] border border-slate-200 dark:border-white/10 flex items-center justify-center text-electric dark:text-[#00CFFF] group-hover:scale-105 transition-transform">
                    {getStepIcon(index)}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-slate-200 dark:text-white/10 group-hover:text-electric/30 dark:group-hover:text-[#00CFFF]/20 transition-colors tabular-nums">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Phase {step.step}</span>
                <span className="w-2 h-2 rounded-full bg-electric dark:bg-[#00CFFF] opacity-60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
