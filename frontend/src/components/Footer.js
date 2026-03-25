import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative py-16 bg-[#09090B] border-t border-white/[0.06]"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-0.5 mb-4">
              <span className="font-chivo text-xl font-bold text-[#FAFAFA] tracking-tight">
                Rev
              </span>
              <span className="font-chivo text-xl font-bold text-[#CD7F32] tracking-tight">
                Labs
              </span>
            </a>
            <p className="font-manrope text-sm text-[#52525B] italic">
              "{t('footer.tagline')}"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-chivo text-sm font-semibold text-[#FAFAFA] uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${t('footer.email')}`}
                className="flex items-center gap-3 font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-[#52525B]" />
                {t('footer.email')}
              </a>
              <a 
                href={`tel:${t('footer.phone').replace(/\s/g, '')}`}
                className="flex items-center gap-3 font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-[#52525B]" />
                {t('footer.phone')}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-chivo text-sm font-semibold text-[#FAFAFA] uppercase tracking-wider mb-4">
              Links
            </h4>
            <div className="space-y-3">
              <a 
                href="#services"
                className="block font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#about"
                className="block font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact"
                className="block font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-manrope text-xs text-[#52525B]">
              &copy; {currentYear} RevLabs. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
