import React from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const icons = [Search, Wrench, Rocket];

  return (
    <section 
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="how-it-works-section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
            data-testid="how-it-works-title"
          >
            {t('howItWorks.title')}
          </h2>
          <p className="font-manrope text-base text-[#A1A1AA] max-w-lg mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          
          {t('howItWorks.steps').map((step, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="relative group"
                data-testid={`step-${index + 1}`}
              >
                {/* Step card */}
                <div className="relative p-8 lg:p-10 rounded-xl bg-[#0F0F12] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 left-8 px-3 py-0.5 bg-[#09090B] border border-white/[0.08] rounded-full">
                    <span className="font-mono text-xs text-[#A1A1AA] font-medium">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#18181B] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-[#A78BFA]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#A78BFA] transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-chivo text-xl font-bold text-[#FAFAFA] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-[#A1A1AA] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection dot */}
                <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#09090B] border border-white/[0.15] z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
