import React from 'react';
import { Search, Settings, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  const icons = [Search, Settings, Rocket];

  return (
    <section 
      className="relative py-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #121418 0%, #161A20 100%)' }}
      data-testid="how-it-works-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
            {t('howItWorks.label')}
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15]"
            data-testid="how-it-works-title"
          >
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {t('howItWorks.steps').map((step, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                data-testid={`step-${index + 1}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#262A33] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-[#A78BFA]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#A78BFA] transition-colors" />
                </div>

                {/* Number */}
                <div className="text-[12px] font-medium text-[#6B7280] tracking-wide mb-3">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-[20px] font-semibold text-[#E8E8EC] tracking-[-0.01em] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#9CA3AF] leading-[1.65]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
