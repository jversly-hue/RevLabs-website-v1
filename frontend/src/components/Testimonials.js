import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const avatarUrls = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  ];

  return (
    <section 
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
            data-testid="testimonials-title"
          >
            {t('testimonials.title')}
          </h2>
          <p className="font-manrope text-base text-[#A1A1AA] max-w-lg mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t('testimonials.items').map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-xl bg-[#0F0F12] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
              data-testid={`testimonial-${index + 1}`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-6 h-6 text-white/[0.06]" />
              </div>
              
              {/* Content */}
              <p className="font-manrope text-[#A1A1AA] text-sm leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/[0.08]">
                  <img 
                    src={avatarUrls[index]} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-chivo text-[#FAFAFA] font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="font-manrope text-[#52525B] text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Industry badge */}
              <div className="absolute bottom-8 right-8">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#18181B] border border-white/[0.04] font-manrope text-[10px] text-[#52525B] uppercase tracking-wider">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
