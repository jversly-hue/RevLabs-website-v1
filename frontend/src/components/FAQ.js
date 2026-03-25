import React from 'react';
import { ChevronDown } from 'lucide-react';
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
      className="relative py-24 lg:py-32 bg-black"
      data-testid="faq-section"
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
            FAQ
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1]"
            data-testid="faq-title"
          >
            {t('faq.title')}
          </h2>
        </div>

        {/* FAQ Items */}
        <Accordion type="single" collapsible className="space-y-0">
          {t('faq.items').map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-white/[0.06] py-0"
              data-testid={`faq-item-${index + 1}`}
            >
              <AccordionTrigger className="text-[15px] text-left text-white font-medium py-5 hover:no-underline hover:text-[#888] transition-colors [&[data-state=open]]:text-[#888]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-[#666] leading-[1.7] pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};

export default FAQ;
