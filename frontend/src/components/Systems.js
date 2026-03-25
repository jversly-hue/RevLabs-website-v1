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
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="systems-section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
            data-testid="systems-title"
          >
            {t('systems.title')}
          </h2>
          <p className="font-manrope text-base text-[#A1A1AA] max-w-lg mx-auto">
            {t('systems.subtitle')}
          </p>
        </div>

        {/* System Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {t('systems.items').map((system, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group relative p-8 lg:p-10 rounded-xl bg-[#0F0F12] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                data-testid={`system-card-${index + 1}`}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#18181B] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-[#A78BFA]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#A78BFA] transition-colors duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-chivo text-xl font-bold text-[#FAFAFA] mb-4">
                    {system.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-manrope text-[#A1A1AA] text-sm leading-relaxed mb-6">
                    {system.description}
                  </p>
                  
                  {/* CTA Link */}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-manrope text-sm text-[#A1A1AA] hover:text-[#A78BFA] transition-colors duration-200 group/link"
                  >
                    {t('nav.bookIntake')}
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </a>
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
