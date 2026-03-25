import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #121418 0%, #161A20 50%, #121418 100%)' }}
      data-testid="hero-section"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(103,232,249,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 pt-32 pb-24">
        <div className="max-w-[680px]">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E222A] border border-white/[0.06] mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            <span className="text-[12px] text-[#9CA3AF] tracking-wide">
              Automation Systems
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-[44px] sm:text-[52px] lg:text-[64px] font-semibold text-[#E8E8EC] tracking-[-0.025em] leading-[1.1] mb-6 animate-fade-up"
            data-testid="hero-headline"
          >
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p 
            className="text-[17px] text-[#9CA3AF] leading-[1.7] mb-10 max-w-[520px] animate-fade-up-delay"
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
              className="group inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] rounded-lg hover:from-[#B89DFB] hover:to-[#A78BFA] transition-all shadow-[0_2px_12px_rgba(167,139,250,0.25)] hover:shadow-[0_4px_20px_rgba(167,139,250,0.35)]"
              data-testid="hero-cta"
            >
              {t('hero.cta')}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center text-[14px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors px-4 py-3"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
