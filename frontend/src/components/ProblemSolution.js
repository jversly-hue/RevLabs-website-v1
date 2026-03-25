import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-24 lg:py-32 bg-[#121418]"
      data-testid="problem-solution-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Problem Card */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-5">
              The Problem
            </div>
            <h2 
              className="text-[26px] lg:text-[30px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.25] mb-5"
              data-testid="problem-title"
            >
              {t('problem.title')}
            </h2>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-8">
              {t('problem.description')}
            </p>
            
            {/* Visual indicator */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
              <div className="flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-1.5 bg-[#2D323B] rounded-full" />
                ))}
              </div>
              <span className="text-[12px] text-[#6B7280]">Fragmented processes</span>
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-[#A78BFA]/10 shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(167,139,250,0.05)]">
            <div className="text-[11px] font-medium text-[#A78BFA] uppercase tracking-[0.12em] mb-5">
              The Solution
            </div>
            <h2 
              className="text-[26px] lg:text-[30px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.25] mb-5"
              data-testid="solution-title"
            >
              {t('problem.solution.title')}
            </h2>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-8">
              {t('problem.solution.description')}
            </p>
            
            {/* Visual indicator */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] rounded-full" />
              <span className="text-[12px] text-[#6B7280]">Unified workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
