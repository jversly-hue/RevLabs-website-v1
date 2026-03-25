import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-[100vh] flex items-center bg-black overflow-hidden"
      data-testid="hero-section"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(99,91,255,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-24">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1 
            className="text-[48px] sm:text-[56px] lg:text-[72px] font-semibold text-white tracking-[-0.03em] leading-[1.05] mb-6 animate-fade-up"
            data-testid="hero-headline"
          >
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p 
            className="text-[17px] lg:text-[19px] text-[#888] leading-[1.6] mb-10 max-w-[540px] animate-fade-up-delay"
            data-testid="hero-subheadline"
          >
            {t('hero.subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[14px] font-medium px-5 py-3 bg-white text-black rounded hover:bg-[#e5e5e5] transition-colors"
              data-testid="hero-cta"
            >
              {t('hero.cta')}
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center text-[14px] text-[#888] hover:text-white transition-colors px-5 py-3"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
};

export default Hero;
