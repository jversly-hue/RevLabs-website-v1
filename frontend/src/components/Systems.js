import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Systems = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="services"
      className="relative py-24 lg:py-32 bg-black"
      data-testid="systems-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
            Solutions
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1]"
            data-testid="systems-title"
          >
            {t('systems.title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {t('systems.items').map((system, index) => (
            <a
              key={index}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 lg:p-10 bg-[#0A0A0A] border border-white/[0.06] rounded-lg hover:border-white/[0.12] transition-colors"
              data-testid={`system-card-${index + 1}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-[11px] font-medium text-[#444] uppercase tracking-[0.1em]">
                  System {String(index + 1).padStart(2, '0')}
                </div>
                <ArrowUpRight size={16} className="text-[#333] group-hover:text-[#666] transition-colors" />
              </div>
              
              <h3 className="text-[20px] font-semibold text-white tracking-[-0.01em] mb-4">
                {system.title}
              </h3>
              
              <p className="text-[14px] text-[#666] leading-[1.6]">
                {system.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default Systems;
