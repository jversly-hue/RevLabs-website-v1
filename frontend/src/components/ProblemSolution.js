import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="problem-solution-section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">
          {/* Problem Side */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#27272A] flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#A1A1AA]" />
              </div>
              <div>
                <h2 
                  className="font-chivo text-2xl lg:text-3xl font-bold text-[#FAFAFA] tracking-tight mb-4"
                  data-testid="problem-title"
                >
                  {t('problem.title')}
                </h2>
                <p className="font-manrope text-[#A1A1AA] text-base leading-relaxed">
                  {t('problem.description')}
                </p>
              </div>
            </div>

            {/* Visual representation of chaos */}
            <div className="mt-10 p-6 rounded-xl bg-[#0F0F12] border border-white/[0.06]">
              <div className="grid grid-cols-3 gap-2.5">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-10 rounded-md bg-[#18181B] border border-white/[0.04]"
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#52525B]" />
                <span className="font-manrope text-xs text-[#52525B]">Chaotische processen</span>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#A78BFA]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#A78BFA]" />
              </div>
              <div>
                <h2 
                  className="font-chivo text-2xl lg:text-3xl font-bold text-[#FAFAFA] tracking-tight mb-4"
                  data-testid="solution-title"
                >
                  {t('problem.solution.title')}
                </h2>
                <p className="font-manrope text-[#A1A1AA] text-base leading-relaxed">
                  {t('problem.solution.description')}
                </p>
              </div>
            </div>

            {/* Visual representation of control */}
            <div className="mt-10 p-6 rounded-xl bg-[#0F0F12] border border-[#A78BFA]/10">
              <div className="space-y-2.5">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                    <div className="flex-1 h-9 rounded-md bg-[#18181B] border border-white/[0.04]" />
                    <div className="w-14 h-5 rounded bg-[#A78BFA]/10 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-[#A78BFA]">OK</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
                <span className="font-manrope text-xs text-[#52525B]">Gestructureerde workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
