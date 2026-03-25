import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-28 lg:py-36 bg-[#121418]"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
            {t('testimonials.label')}
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15]"
            data-testid="testimonials-title"
          >
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t('testimonials.items').map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
              data-testid={`testimonial-${index + 1}`}
            >
              <p className="text-[14px] text-[#9CA3AF] leading-[1.7] mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[14px] font-medium text-[#E8E8EC] mb-1">
                  {testimonial.name}
                </div>
                <div className="text-[12px] text-[#6B7280]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
