import React from 'react';
import { FileText, Users, ArrowUpRight, Shield, Layers, Zap, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Systems = () => {
  const { t } = useLanguage();
  const icons = [Target, FileText];

  return (
    <section 
      id="services"
      className="relative py-16 lg:py-20 bg-[#121418]"
      data-testid="systems-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
            {t('systems.label')}
          </div>

          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15] mb-4"
            data-testid="systems-title"
          >
            {t('systems.title')}
          </h2>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[13px] text-[#6B7280]">{t('systems.trust.noObligation')}</span>
            </div>

            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[13px] text-[#6B7280]">{t('systems.trust.custom')}</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#6B7280]" />
              <span className="text-[13px] text-[#6B7280]">{t('systems.trust.fast')}</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {t('systems.items').map((system, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="group block p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                data-testid={`system-card-${index + 1}`}
              >
                <div className="flex items-start justify-between mb-6">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#262A33] border border-white/[0.06] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#9CA3AF]" />
                  </div>

                  <ArrowUpRight size={18} className="text-[#3D424D]" />
                </div>
                
                <h3 className="text-[20px] font-semibold text-[#E8E8EC] tracking-[-0.01em] mb-4">
                  {system.title}
                </h3>
                
                <p className="text-[14px] text-[#9CA3AF] leading-[1.7] whitespace-pre-line">
                  {system.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Systems;
