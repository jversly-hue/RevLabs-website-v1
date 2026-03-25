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
      className="relative py-28 lg:py-36 bg-[#09090B] overflow-hidden"
      data-testid="faq-section"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-chivo text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight mb-4"
            data-testid="faq-title"
          >
            {t('faq.title')}
          </h2>
          <p className="font-manrope text-base text-[#A1A1AA]">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {t('faq.items').map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/[0.06] rounded-xl bg-[#0F0F12] px-6 data-[state=open]:border-white/[0.1] transition-colors duration-300"
              data-testid={`faq-item-${index + 1}`}
            >
              <AccordionTrigger className="font-chivo text-left text-[#FAFAFA] text-base font-semibold py-5 hover:no-underline hover:text-[#A78BFA] transition-colors duration-200 [&[data-state=open]]:text-[#A78BFA] [&[data-state=open]>svg]:text-[#A78BFA]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-manrope text-[#A1A1AA] text-sm leading-relaxed pb-5">
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
