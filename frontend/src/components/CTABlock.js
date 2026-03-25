import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const CTABlock = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-black"
      data-testid="cta-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-4"
            data-testid="cta-title"
          >
            {t('cta.title')}
          </h2>
          <p className="text-[15px] text-[#888] leading-[1.7] mb-8">
            {t('cta.subtitle')}
          </p>
          
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3 bg-white text-black rounded hover:bg-[#e5e5e5] transition-colors"
            data-testid="cta-button"
          >
            {t('cta.button')}
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default CTABlock;
