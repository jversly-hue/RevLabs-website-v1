import React from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const icons = [Search, Wrench, Rocket];

  return (
    <section 
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="how-it-works-section"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.02)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
            data-testid="how-it-works-title"
          >
            {t('howItWorks.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3] max-w-xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
          
          {t('howItWorks.steps').map((step, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="relative group"
                data-testid={`step-${index + 1}`}
              >
                {/* Step card */}
                <div className="relative p-8 lg:p-10 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#CCFF00]/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(204,255,0,0.08)]">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-[#0A0A0A] border border-[#CCFF00]/20 rounded-full">
                    <span className="font-mono text-sm text-[#CCFF00] font-medium">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/15 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#CCFF00]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-chivo text-xl lg:text-2xl font-bold text-[#F2F2F2] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-[#A3A3A3] text-sm lg:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection dot */}
                <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#CCFF00]/50 z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
