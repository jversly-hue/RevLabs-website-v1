import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const CTABlock = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-28 lg:py-36 overflow-hidden"
      data-testid="cta-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#09090B]" />
      
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Main CTA Card */}
        <div className="relative p-12 lg:p-16 rounded-2xl bg-[#0F0F12] border border-white/[0.06]">
          {/* Content */}
          <h2 
            className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
            data-testid="cta-title"
          >
            {t('cta.title')}
          </h2>
          <p className="font-manrope text-base text-[#A1A1AA] mb-10 max-w-md mx-auto">
            {t('cta.subtitle')}
          </p>
          
          {/* CTA Button */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-manrope text-sm font-medium px-8 py-4 bg-[#A78BFA] text-[#09090B] rounded-lg hover:bg-[#C4B5FD] transition-colors duration-200"
            data-testid="cta-button"
          >
            {t('cta.button')}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
