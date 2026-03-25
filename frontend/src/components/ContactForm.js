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
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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
      await axios.post(`${API}/contact`, formData);
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
      className="relative py-24 lg:py-32 bg-black"
      data-testid="contact-section"
    >
      <div className="max-w-[720px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] mb-4">
            Contact
          </div>
          <h2 
            className="text-[32px] lg:text-[40px] font-semibold text-white tracking-[-0.02em] leading-[1.1] mb-4"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="text-[15px] text-[#888]">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          data-testid="contact-form"
        >
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#0A0A0A] border border-[#1a3a1a] rounded flex items-center gap-3" data-testid="form-success">
              <CheckCircle className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[13px] text-[#22c55e]">{t('contact.form.success')}</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-[#0A0A0A] border border-[#3a1a1a] rounded flex items-center gap-3" data-testid="form-error">
              <AlertCircle className="w-4 h-4 text-[#ef4444]" />
              <span className="text-[13px] text-[#ef4444]">{t('contact.form.error')}</span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[13px] text-[#888]">
                {t('contact.form.name')}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
                required
                className="bg-[#0A0A0A] border-white/[0.08] text-white placeholder:text-[#444] focus:border-white/[0.2] focus:ring-0 h-11 text-[14px]"
                data-testid="input-name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[13px] text-[#888]">
                {t('contact.form.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
                required
                className="bg-[#0A0A0A] border-white/[0.08] text-white placeholder:text-[#444] focus:border-white/[0.2] focus:ring-0 h-11 text-[14px]"
                data-testid="input-email"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[13px] text-[#888]">
                {t('contact.form.phone')}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phonePlaceholder')}
                required
                className="bg-[#0A0A0A] border-white/[0.08] text-white placeholder:text-[#444] focus:border-white/[0.2] focus:ring-0 h-11 text-[14px]"
                data-testid="input-phone"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company_name" className="text-[13px] text-[#888]">
                {t('contact.form.company')}
              </Label>
              <Input
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder={t('contact.form.companyPlaceholder')}
                required
                className="bg-[#0A0A0A] border-white/[0.08] text-white placeholder:text-[#444] focus:border-white/[0.2] focus:ring-0 h-11 text-[14px]"
                data-testid="input-company"
              />
            </div>

            {/* Industry */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="industry" className="text-[13px] text-[#888]">
                {t('contact.form.industry')}
              </Label>
              <Select value={formData.industry} onValueChange={handleIndustryChange} required>
                <SelectTrigger 
                  className="bg-[#0A0A0A] border-white/[0.08] text-white focus:border-white/[0.2] focus:ring-0 h-11 text-[14px]"
                  data-testid="select-industry"
                >
                  <SelectValue placeholder={t('contact.form.industryPlaceholder')} className="text-[#444]" />
                </SelectTrigger>
                <SelectContent className="bg-[#111] border-white/[0.08]">
                  <SelectItem value="dakwerken" className="text-white focus:bg-white/[0.05] focus:text-white text-[14px]">
                    {t('contact.form.industries.dakwerken')}
                  </SelectItem>
                  <SelectItem value="hvac" className="text-white focus:bg-white/[0.05] focus:text-white text-[14px]">
                    {t('contact.form.industries.hvac')}
                  </SelectItem>
                  <SelectItem value="other" className="text-white focus:bg-white/[0.05] focus:text-white text-[14px]">
                    {t('contact.form.industries.other')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-[13px] text-[#888]">
                {t('contact.form.message')}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
                rows={4}
                className="bg-[#0A0A0A] border-white/[0.08] text-white placeholder:text-[#444] focus:border-white/[0.2] focus:ring-0 resize-none text-[14px]"
                data-testid="input-message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-white text-black hover:bg-[#e5e5e5] font-medium h-11 rounded text-[14px] transition-colors disabled:opacity-50"
            data-testid="submit-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t('contact.form.submitting')}
              </>
            ) : (
              <>
                {t('contact.form.submit')}
                <ArrowRight size={14} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
