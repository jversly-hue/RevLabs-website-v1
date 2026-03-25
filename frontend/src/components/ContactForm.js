import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
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
      className="relative py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="font-chivo text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F2F2] tracking-tight mb-4"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p className="font-manrope text-base lg:text-lg text-[#A3A3A3]">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="relative p-8 lg:p-10 rounded-2xl bg-[#121212] border border-white/5"
          data-testid="contact-form"
        >
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center gap-3" data-testid="form-success">
              <CheckCircle className="w-5 h-5 text-[#CCFF00]" />
              <span className="font-manrope text-sm text-[#CCFF00]">{t('contact.form.success')}</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3" data-testid="form-error">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="font-manrope text-sm text-red-400">{t('contact.form.error')}</span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.name')} *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
                required
                className="bg-[#171717] border-white/10 text-[#F2F2F2] placeholder:text-[#525252] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20"
                data-testid="input-name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.email')} *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
                required
                className="bg-[#171717] border-white/10 text-[#F2F2F2] placeholder:text-[#525252] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20"
                data-testid="input-email"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.phone')} *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phonePlaceholder')}
                required
                className="bg-[#171717] border-white/10 text-[#F2F2F2] placeholder:text-[#525252] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20"
                data-testid="input-phone"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company_name" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.company')} *
              </Label>
              <Input
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder={t('contact.form.companyPlaceholder')}
                required
                className="bg-[#171717] border-white/10 text-[#F2F2F2] placeholder:text-[#525252] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20"
                data-testid="input-company"
              />
            </div>

            {/* Industry */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="industry" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.industry')} *
              </Label>
              <Select value={formData.industry} onValueChange={handleIndustryChange} required>
                <SelectTrigger 
                  className="bg-[#171717] border-white/10 text-[#F2F2F2] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20"
                  data-testid="select-industry"
                >
                  <SelectValue placeholder={t('contact.form.industryPlaceholder')} />
                </SelectTrigger>
                <SelectContent className="bg-[#171717] border-white/10">
                  <SelectItem value="dakwerken" className="text-[#F2F2F2] focus:bg-[#CCFF00]/10 focus:text-[#CCFF00]">
                    {t('contact.form.industries.dakwerken')}
                  </SelectItem>
                  <SelectItem value="hvac" className="text-[#F2F2F2] focus:bg-[#CCFF00]/10 focus:text-[#CCFF00]">
                    {t('contact.form.industries.hvac')}
                  </SelectItem>
                  <SelectItem value="other" className="text-[#F2F2F2] focus:bg-[#CCFF00]/10 focus:text-[#CCFF00]">
                    {t('contact.form.industries.other')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="font-manrope text-sm text-[#A3A3A3]">
                {t('contact.form.message')}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.messagePlaceholder')}
                rows={4}
                className="bg-[#171717] border-white/10 text-[#F2F2F2] placeholder:text-[#525252] focus:border-[#CCFF00]/50 focus:ring-[#CCFF00]/20 resize-none"
                data-testid="input-message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 bg-[#CCFF00] text-[#0A0A0A] hover:bg-[#B3E600] font-manrope font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="submit-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t('contact.form.submitting')}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t('contact.form.submit')}
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
