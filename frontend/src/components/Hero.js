import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B]"
      data-testid="hero-section"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Very subtle gradient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_70%)] animate-subtle-pulse" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
          <span className="font-manrope text-xs text-[#A1A1AA] uppercase tracking-wider">
            RevLabs
          </span>
        </div>

        {/* Headline */}
        <h1 
          className="font-chivo text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA] tracking-tight leading-[1.15] mb-8 animate-fade-in-up"
          data-testid="hero-headline"
        >
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p 
          className="font-manrope text-base lg:text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delay"
          data-testid="hero-subheadline"
        >
          {t('hero.subheadline')}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-manrope text-sm font-medium px-7 py-3.5 bg-[#A78BFA] text-[#09090B] rounded-lg hover:bg-[#C4B5FD] transition-colors duration-200"
            data-testid="hero-cta"
          >
            {t('hero.cta')}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border border-[#3F3F46] flex items-start justify-center p-1.5">
            <div className="w-0.5 h-1.5 bg-[#52525B] rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
