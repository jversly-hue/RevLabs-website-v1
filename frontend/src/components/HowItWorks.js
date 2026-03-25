import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-black"
      data-testid="how-it-works-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
            Process
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1]"
            data-testid="how-it-works-title"
          >
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {t('howItWorks.steps').map((step, index) => (
            <div 
              key={index}
              className="bg-black p-8 lg:p-10"
              data-testid={`step-${index + 1}`}
            >
              <div className="text-[11px] font-medium text-[#444] uppercase tracking-[0.1em] mb-6">
                {step.number}
              </div>
              <h3 className="text-[20px] font-semibold text-white tracking-[-0.01em] mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#666] leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default HowItWorks;
