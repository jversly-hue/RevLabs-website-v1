import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-black"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
            Testimonials
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1]"
            data-testid="testimonials-title"
          >
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {t('testimonials.items').map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-[#0A0A0A] border border-white/[0.06] rounded-lg"
              data-testid={`testimonial-${index + 1}`}
            >
              <p className="text-[14px] text-[#888] leading-[1.7] mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[14px] font-medium text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-[12px] text-[#555]">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default Testimonials;
