import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '60%', label: 'Less admin work' },
    { value: '3x', label: 'Faster invoicing' },
    { value: '90%', label: 'Fewer errors' },
    { value: '24/7', label: 'Automated' }
  ];

  return (
    <section 
      className="relative py-24 lg:py-32 bg-black"
      data-testid="benefits-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
              Results
            </div>
            <h2 
              className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-6"
              data-testid="benefits-title"
            >
              {t('benefits.title')}
            </h2>
            <p className="text-[15px] text-[#888] leading-[1.7] mb-10">
              {t('benefits.subtitle')}
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {t('benefits.items').map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                  data-testid={`benefit-${index + 1}`}
                >
                  <div className="w-1 h-1 bg-[#635BFF] rounded-full" />
                  <span className="text-[14px] text-[#888]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black p-8">
                <div className="text-[40px] lg:text-[48px] font-semibold text-white tracking-[-0.02em] mb-1">
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#555]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default Benefits;
