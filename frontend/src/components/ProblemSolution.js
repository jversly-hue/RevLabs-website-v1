import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-24 lg:py-32 bg-black"
      data-testid="problem-solution-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Problem */}
          <div>
            <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
              The Problem
            </div>
            <h2 
              className="text-[28px] lg:text-[32px] font-semibold text-white tracking-[-0.02em] leading-[1.2] mb-5"
              data-testid="problem-title"
            >
              {t('problem.title')}
            </h2>
            <p className="text-[15px] text-[#888] leading-[1.7]">
              {t('problem.description')}
            </p>
            
            {/* Visual indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-1 bg-[#222] rounded-full" />
                ))}
              </div>
              <span className="text-[12px] text-[#444]">Fragmented processes</span>
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="text-[11px] font-medium text-[#635BFF] uppercase tracking-[0.1em] mb-4">
              The Solution
            </div>
            <h2 
              className="text-[28px] lg:text-[32px] font-semibold text-white tracking-[-0.02em] leading-[1.2] mb-5"
              data-testid="solution-title"
            >
              {t('problem.solution.title')}
            </h2>
            <p className="text-[15px] text-[#888] leading-[1.7]">
              {t('problem.solution.description')}
            </p>
            
            {/* Visual indicator */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-32 h-1 bg-gradient-to-r from-[#635BFF] to-[#00D4FF] rounded-full" />
              <span className="text-[12px] text-[#555]">Unified workflow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default ProblemSolution;
