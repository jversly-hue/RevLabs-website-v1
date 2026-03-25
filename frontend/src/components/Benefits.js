import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="benefits-section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <h2 
              className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
              data-testid="benefits-title"
            >
              {t('benefits.title')}
            </h2>
            <p className="font-manrope text-base text-[#A1A1AA] mb-12">
              {t('benefits.subtitle')}
            </p>

            {/* Benefits List */}
            <div className="space-y-5">
              {t('benefits.items').map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                  data-testid={`benefit-${index + 1}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#18181B] border border-white/[0.06] flex items-center justify-center group-hover:border-[#A78BFA]/20 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-[#A78BFA]" />
                  </div>
                  <span className="font-manrope text-[#FAFAFA] text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Stats */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl bg-[#0F0F12] border border-white/[0.06]">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[#18181B] border border-white/[0.04]">
                  <div className="font-chivo text-4xl font-bold text-[#A78BFA] mb-2">60%</div>
                  <div className="font-manrope text-sm text-[#A1A1AA]">Minder administratie</div>
                </div>
                <div className="p-6 rounded-xl bg-[#18181B] border border-white/[0.04]">
                  <div className="font-chivo text-4xl font-bold text-[#FAFAFA] mb-2">3x</div>
                  <div className="font-manrope text-sm text-[#A1A1AA]">Snellere facturatie</div>
                </div>
                <div className="p-6 rounded-xl bg-[#18181B] border border-white/[0.04]">
                  <div className="font-chivo text-4xl font-bold text-[#FAFAFA] mb-2">90%</div>
                  <div className="font-manrope text-sm text-[#A1A1AA]">Minder fouten</div>
                </div>
                <div className="p-6 rounded-xl bg-[#18181B] border border-white/[0.04]">
                  <div className="font-chivo text-4xl font-bold text-[#67E8F9] mb-2">24/7</div>
                  <div className="font-manrope text-sm text-[#A1A1AA]">Geautomatiseerd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
