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
      className="relative py-28 lg:py-36 bg-[#121418]"
      data-testid="faq-section"
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
            {t('faq.label')}
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15]"
            data-testid="faq-title"
          >
            {t('faq.title')}
          </h2>
        </div>

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="space-y-3">
          {t('faq.items').map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/[0.06] rounded-xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] px-6 data-[state=open]:border-[#A78BFA]/20 transition-colors"
              data-testid={`faq-item-${index + 1}`}
            >
              <AccordionTrigger className="text-[15px] text-left text-[#E8E8EC] font-medium py-5 hover:no-underline hover:text-[#A78BFA] transition-colors [&[data-state=open]]:text-[#A78BFA]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#9CA3AF] leading-[1.7] pb-5">
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
