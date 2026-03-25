import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="faq-section"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
            data-testid="faq-title"
          >
            {t('faq.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3]">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {t('faq.items').map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/5 rounded-xl bg-[#121212] px-6 data-[state=open]:border-[#CCFF00]/20 transition-colors duration-300"
              data-testid={`faq-item-${index + 1}`}
            >
              <AccordionTrigger className="font-chivo text-left text-[#F2F2F2] text-base lg:text-lg font-semibold py-5 hover:no-underline hover:text-[#CCFF00] transition-colors duration-300 [&[data-state=open]>svg]:text-[#CCFF00]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-manrope text-[#A3A3A3] text-sm lg:text-base leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
