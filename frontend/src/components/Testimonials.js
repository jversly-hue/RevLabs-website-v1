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
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(204,255,0,0.03)_0%,transparent_70%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
            data-testid="testimonials-title"
          >
            {t('testimonials.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3] max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t('testimonials.items').map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/10 transition-all duration-500"
              data-testid={`testimonial-${index + 1}`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[#CCFF00]/20" />
              </div>
              
              {/* Content */}
              <p className="font-manrope text-[#A3A3A3] text-sm lg:text-base leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#CCFF00]/20">
                  <img 
                    src={avatarUrls[index]} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-chivo text-[#F2F2F2] font-bold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="font-manrope text-[#525252] text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Industry badge */}
              <div className="absolute bottom-8 right-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#171717] border border-white/5 font-manrope text-[10px] text-[#525252] uppercase tracking-wider">
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
