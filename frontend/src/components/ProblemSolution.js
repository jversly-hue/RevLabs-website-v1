import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="problem-solution-section"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Problem Side */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 
                  className="font-chivo text-3xl lg:text-4xl font-bold text-[#F2F2F2] tracking-tight mb-4"
                  data-testid="problem-title"
                >
                  {t('problem.title')}
                </h2>
                <p className="font-manrope text-[#A3A3A3] text-base lg:text-lg leading-relaxed">
                  {t('problem.description')}
                </p>
              </div>
            </div>

            {/* Visual representation of chaos */}
            <div className="mt-8 p-6 rounded-2xl bg-[#121212] border border-white/5">
              <div className="grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-12 rounded-lg bg-[#171717] border border-white/5 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                <span className="font-manrope text-xs text-[#525252]">Chaotische processen</span>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#CCFF00]" />
              </div>
              <div>
                <h2 
                  className="font-chivo text-3xl lg:text-4xl font-bold text-[#F2F2F2] tracking-tight mb-4"
                  data-testid="solution-title"
                >
                  {t('problem.solution.title')}
                </h2>
                <p className="font-manrope text-[#A3A3A3] text-base lg:text-lg leading-relaxed">
                  {t('problem.solution.description')}
                </p>
              </div>
            </div>

            {/* Visual representation of control */}
            <div className="mt-8 p-6 rounded-2xl bg-[#121212] border border-[#CCFF00]/10 shadow-[0_0_30px_rgba(204,255,0,0.05)]">
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#CCFF00]" />
                    <div className="flex-1 h-10 rounded-lg bg-[#171717] border border-[#CCFF00]/10" />
                    <div className="w-16 h-6 rounded bg-[#CCFF00]/20 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-[#CCFF00]">OK</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                <span className="font-manrope text-xs text-[#525252]">Gestructureerde workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
