import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzvybjp";

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    industry: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleIndustryChange = (value) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company_name,
          industry: formData.industry,
          message: formData.message,
          _subject: `Nieuwe RevLabs lead van ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #121418 0%, #161A20 100%)' }}
      data-testid="contact-section"
    >
      <div className="max-w-[720px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-[11px] font-medium text-[#6B7280] uppercase tracking-[0.12em] mb-4">
            {t('contact.label')}
          </div>
          <h2
            className="text-[32px] lg:text-[40px] font-semibold text-[#E8E8EC] tracking-[-0.02em] leading-[1.15] mb-4"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="text-[15px] text-[#9CA3AF]">
            {t('contact.subtitle')}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#1E222A] to-[#1A1D22] border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
          data-testid="contact-form"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#1a2a1a] border border-[#2a3a2a] rounded-lg flex items-center gap-3" data-testid="form-success">
              <CheckCircle className="w-5 h-5 text-[#4ade80]" />
              <span className="text-[14px] text-[#4ade80]">
                Bedankt! Uw bericht is succesvol verzonden.
              </span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-[#2a1a1a] border border-[#3a2a2a] rounded-lg flex items-center gap-3" data-testid="form-error">
              <AlertCircle className="w-5 h-5 text-[#f87171]" />
              <span className="text-[14px] text-[#f87171]">
                Er is iets misgelopen bij het verzenden. Probeer het opnieuw.
              </span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.name')}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Uw volledige naam"
                required
                className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] placeholder:text-[#6B7280] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 h-11 text-[14px]"
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="uw@email.be"
                required
                className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] placeholder:text-[#6B7280] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 h-11 text-[14px]"
                data-testid="input-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.phone')}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+32 470 12 34 56"
                required
                className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] placeholder:text-[#6B7280] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 h-11 text-[14px]"
                data-testid="input-phone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company_name" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.company')}
              </Label>
              <Input
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Uw bedrijf"
                required
                className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] placeholder:text-[#6B7280] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 h-11 text-[14px]"
                data-testid="input-company"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="industry" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.industry')}
              </Label>
              <Select value={formData.industry} onValueChange={handleIndustryChange} required>
                <SelectTrigger
                  className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 h-11 text-[14px]"
                  data-testid="select-industry"
                >
                  <SelectValue placeholder="Selecteer uw sector" className="text-[#6B7280]" />
                </SelectTrigger>
                <SelectContent className="bg-[#262A33] border-white/[0.08]">
                  <SelectItem value="dakwerken" className="text-[#E8E8EC] focus:bg-[#A78BFA]/10 focus:text-[#A78BFA] text-[14px]">
                    {t('contact.form.industries.dakwerken')}
                  </SelectItem>
                  <SelectItem value="hvac" className="text-[#E8E8EC] focus:bg-[#A78BFA]/10 focus:text-[#A78BFA] text-[14px]">
                    {t('contact.form.industries.hvac')}
                  </SelectItem>
                  <SelectItem value="other" className="text-[#E8E8EC] focus:bg-[#A78BFA]/10 focus:text-[#A78BFA] text-[14px]">
                    {t('contact.form.industries.other')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-[13px] text-[#9CA3AF]">
                {t('contact.form.message')}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beschrijf kort uw situatie of wat u wil automatiseren..."
                rows={4}
                className="bg-[#262A33] border-white/[0.08] text-[#E8E8EC] placeholder:text-[#6B7280] focus:border-[#A78BFA]/40 focus:ring-[#A78BFA]/20 resize-none text-[14px]"
                data-testid="input-message"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] hover:from-[#B89DFB] hover:to-[#A78BFA] font-semibold h-12 rounded-lg text-[14px] transition-all shadow-[0_2px_12px_rgba(167,139,250,0.15)] hover:shadow-[0_4px_20px_rgba(167,139,250,0.25)] disabled:opacity-50"
            data-testid="submit-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Bericht verzenden...
              </>
            ) : (
              <>
                {t('contact.form.submit')}
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
