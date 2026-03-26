import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-16 lg:py-20 bg-[#121418]"
      data-testid="problem-solution-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Section 1: Where are you losing time? */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <h2 
              className="text-[24px] lg:text-[28px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.25] mb-5"
              data-testid="problem-title"
            >
              {t('problem.title')}
            </h2>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-8">
              {t('problem.description')}
            </p>
            
            {/* Bullet points */}
            <ul className="space-y-4">
              {t('problem.points').map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6B7280] flex-shrink-0" />
                  <span className="text-[14px] text-[#9CA3AF] leading-[1.6]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: More structure */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-[#A78BFA]/10 shadow-[0_4px_24px_rgba(0,0,0,0.2),0_0_0_1px_rgba(167,139,250,0.05)]">
            <h2 
              className="text-[24px] lg:text-[28px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.25] mb-5"
              data-testid="solution-title"
            >
              {t('problem.solution.title')}
            </h2>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-6">
              {t('problem.solution.description')}
            </p>
            
            {/* Supporting line */}
            <p className="text-[14px] text-[#6B7280] leading-[1.6] pt-6 border-t border-white/[0.06]">
              {t('problem.solution.support')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
