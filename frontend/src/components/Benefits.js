import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="benefits-section"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.04)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <h2 
              className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
              data-testid="benefits-title"
            >
              {t('benefits.title')}
            </h2>
            <p className="font-manrope text-base lg:text-lg text-[#A3A3A3] mb-10">
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center group-hover:bg-[#CCFF00]/20 transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <span className="font-manrope text-[#F2F2F2] text-base lg:text-lg pt-1">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative p-8 rounded-3xl bg-[#121212] border border-white/5">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#171717] border border-[#CCFF00]/10">
                  <div className="font-chivo text-4xl lg:text-5xl font-black text-[#CCFF00] mb-2">60%</div>
                  <div className="font-manrope text-sm text-[#A3A3A3]">Minder administratie</div>
                </div>
                <div className="p-6 rounded-2xl bg-[#171717] border border-white/5">
                  <div className="font-chivo text-4xl lg:text-5xl font-black text-[#F2F2F2] mb-2">3x</div>
                  <div className="font-manrope text-sm text-[#A3A3A3]">Snellere facturatie</div>
                </div>
                <div className="p-6 rounded-2xl bg-[#171717] border border-white/5">
                  <div className="font-chivo text-4xl lg:text-5xl font-black text-[#F2F2F2] mb-2">90%</div>
                  <div className="font-manrope text-sm text-[#A3A3A3]">Minder fouten</div>
                </div>
                <div className="p-6 rounded-2xl bg-[#171717] border border-[#8B5CF6]/10">
                  <div className="font-chivo text-4xl lg:text-5xl font-black text-[#8B5CF6] mb-2">24/7</div>
                  <div className="font-manrope text-sm text-[#A3A3A3]">Geautomatiseerd</div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#CCFF00]/10 via-transparent to-[#8B5CF6]/5 opacity-50 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
