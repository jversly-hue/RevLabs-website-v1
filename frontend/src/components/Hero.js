import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/thesalesthriveacademy/1-on-1-strategy-session";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-[75vh] flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 pt-24 pb-16">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1 
            className="text-[42px] sm:text-[50px] lg:text-[60px] font-semibold text-[#E8E8EC] tracking-[-0.025em] leading-[1.1] mb-8 animate-fade-up"
            data-testid="hero-headline"
          >
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p 
            className="text-[18px] lg:text-[20px] text-[#9CA3AF] leading-[1.6] mb-12 max-w-[540px] animate-fade-up-delay"
            data-testid="hero-subheadline"
          >
            {t('hero.subheadline')}
          </p>

          {/* CTA Section */}
          <div className="animate-fade-up-delay-2">
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-5 mb-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-[15px] font-semibold px-7 py-4 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] rounded-lg hover:from-[#B89DFB] hover:to-[#A78BFA] transition-all duration-200 shadow-[0_2px_12px_rgba(167,139,250,0.15)] hover:shadow-[0_4px_20px_rgba(167,139,250,0.25)]"
                data-testid="hero-cta"
              >
                {t('hero.cta')}
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              
              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center text-[14px] text-[#6B7280] hover:text-[#9CA3AF] transition-colors duration-200 px-2 py-4"
              >
                {t('hero.learnMore')}
              </a>
            </div>

            {/* Supporting text */}
            <p className="text-[13px] text-[#6B7280] max-w-[420px] leading-[1.6] mb-3">
              {t('hero.ctaSupport')}
            </p>
            
            {/* Trust element */}
            <p className="text-[12px] text-[#A78BFA]/60">
              {t('hero.ctaTrust')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
