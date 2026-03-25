import React from 'react';
import { FileText, UserCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Systems = () => {
  const { t } = useLanguage();

  const icons = [FileText, UserCheck];

  return (
    <section 
      id="services"
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="systems-section"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
            data-testid="systems-title"
          >
            {t('systems.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3] max-w-xl mx-auto">
            {t('systems.subtitle')}
          </p>
        </div>

        {/* System Cards - Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t('systems.items').map((system, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group relative p-8 lg:p-10 rounded-2xl bg-[#121212] border border-white/5 hover:border-[#CCFF00]/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(204,255,0,0.1)] overflow-hidden"
                data-testid={`system-card-${index + 1}`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#CCFF00]/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#CCFF00]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-chivo text-xl lg:text-2xl font-bold text-[#F2F2F2] mb-4">
                    {system.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-manrope text-[#A3A3A3] text-sm lg:text-base leading-relaxed mb-6">
                    {system.description}
                  </p>
                  
                  {/* CTA Link */}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-manrope text-sm text-[#CCFF00] hover:text-[#B3E600] transition-colors duration-300 group/link"
                  >
                    {t('nav.bookIntake')}
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-[#CCFF00]/5 group-hover:border-[#CCFF00]/10 transition-colors duration-500" />
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-[#CCFF00]/10 group-hover:border-[#CCFF00]/20 transition-colors duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Systems;
