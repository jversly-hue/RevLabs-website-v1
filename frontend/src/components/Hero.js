import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      data-testid="hero-section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.08)_0%,transparent_70%)] animate-pulse-slow" />
        
        {/* Secondary purple glow - very subtle */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.04)_0%,transparent_70%)]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(204,255,0,0)" />
              <stop offset="50%" stopColor="rgba(204,255,0,0.3)" />
              <stop offset="100%" stopColor="rgba(204,255,0,0)" />
            </linearGradient>
          </defs>
          <line 
            x1="10%" y1="30%" x2="90%" y2="30%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-flow-line"
          />
          <line 
            x1="20%" y1="70%" x2="80%" y2="70%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            className="animate-flow-line-delay"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="font-manrope text-xs text-[#CCFF00] uppercase tracking-wider">
            RevLabs
          </span>
        </div>

        {/* Headline */}
        <h1 
          className="font-chivo text-4xl sm:text-5xl lg:text-7xl font-black text-[#F2F2F2] tracking-tight leading-[1.1] mb-6 animate-fade-in-up"
          data-testid="hero-headline"
        >
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p 
          className="font-manrope text-base lg:text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay"
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
            className="group inline-flex items-center gap-2 font-manrope text-sm font-medium px-8 py-4 bg-[#CCFF00] text-[#0A0A0A] rounded-full hover:bg-[#B3E600] transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            data-testid="hero-cta"
          >
            {t('hero.cta')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#525252] flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#525252] rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
