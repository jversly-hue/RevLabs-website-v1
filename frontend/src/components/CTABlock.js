import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const CTABlock = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #121418 0%, #161A20 50%, #121418 100%)' }}
      data-testid="cta-section"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(167,139,250,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-[1140px] mx-auto px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15] mb-5"
            data-testid="cta-title"
          >
            {t('cta.title')}
          </h2>
          <p className="text-[15px] text-[#9CA3AF] leading-[1.7] mb-10">
            {t('cta.subtitle')}
          </p>
          
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[14px] font-medium px-7 py-3.5 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] rounded-lg hover:from-[#B89DFB] hover:to-[#A78BFA] transition-all shadow-[0_2px_12px_rgba(167,139,250,0.25)] hover:shadow-[0_4px_20px_rgba(167,139,250,0.35)]"
            data-testid="cta-button"
          >
            {t('cta.button')}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
