import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const CTABlock = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="cta-section"
    >
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,255,0,0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main CTA Card */}
        <div className="relative p-12 lg:p-16 rounded-3xl bg-[#121212] border border-[#CCFF00]/20 shadow-[0_0_60px_rgba(204,255,0,0.1)]">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-[#CCFF00]/10 blur-2xl" />
          </div>
          
          {/* Content */}
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2F2F2] tracking-tight mb-4"
            data-testid="cta-title"
          >
            {t('cta.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3] mb-10 max-w-lg mx-auto">
            {t('cta.subtitle')}
          </p>
          
          {/* CTA Button */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-manrope text-base font-semibold px-10 py-5 bg-[#CCFF00] text-[#0A0A0A] rounded-full hover:bg-[#B3E600] transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.5)]"
            data-testid="cta-button"
          >
            {t('cta.button')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#CCFF00]/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#CCFF00]/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#CCFF00]/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#CCFF00]/30 rounded-br-lg" />
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
