import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: '60%', label: language === 'nl' ? 'Minder administratie' : 'Less admin work' },
    { value: '3x', label: language === 'nl' ? 'Snellere facturatie' : 'Faster invoicing' },
    { value: '90%', label: language === 'nl' ? 'Minder fouten' : 'Fewer errors' },
    { value: '24/7', label: language === 'nl' ? 'Geautomatiseerd' : 'Automated' }
  ];

  return (
    <section 
      className="relative py-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #161A20 0%, #121418 100%)' }}
      data-testid="benefits-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Content */}
          <div>
            <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
              {t('benefits.label')}
            </div>
            <h2 
              className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15] mb-6"
              data-testid="benefits-title"
            >
              {t('benefits.title')}
            </h2>
            <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-10">
              {t('benefits.subtitle')}
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {t('benefits.items').map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                  data-testid={`benefit-${index + 1}`}
                >
                  <div className="w-6 h-6 rounded-md bg-[#A78BFA]/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#A78BFA]" />
                  </div>
                  <span className="text-[15px] text-[#9CA3AF]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
              >
                <div className={`text-[36px] lg:text-[44px] font-semibold tracking-[-0.02em] mb-2 ${
                  index === 0 ? 'text-[#A78BFA]' : 
                  index === 3 ? 'text-[#67E8F9]' : 'text-[#E8E8EC]'
                }`}>
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#6B7280]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
