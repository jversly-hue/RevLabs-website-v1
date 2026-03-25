import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative py-16 bg-[#0A0A0A] border-t border-white/5"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-1 mb-4">
              <span className="font-chivo text-2xl font-black text-[#F2F2F2] tracking-tight">
                Rev
              </span>
              <span className="font-chivo text-2xl font-black text-[#CD7F32] tracking-tight">
                Labs
              </span>
            </a>
            <p className="font-manrope text-sm text-[#525252] italic">
              "{t('footer.tagline')}"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-chivo text-sm font-bold text-[#F2F2F2] uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${t('footer.email')}`}
                className="flex items-center gap-3 font-manrope text-sm text-[#A3A3A3] hover:text-[#CCFF00] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                {t('footer.email')}
              </a>
              <a 
                href={`tel:${t('footer.phone').replace(/\s/g, '')}`}
                className="flex items-center gap-3 font-manrope text-sm text-[#A3A3A3] hover:text-[#CCFF00] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                {t('footer.phone')}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-chivo text-sm font-bold text-[#F2F2F2] uppercase tracking-wider mb-4">
              Links
            </h4>
            <div className="space-y-3">
              <a 
                href="#services"
                className="block font-manrope text-sm text-[#A3A3A3] hover:text-[#CCFF00] transition-colors duration-300"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#about"
                className="block font-manrope text-sm text-[#A3A3A3] hover:text-[#CCFF00] transition-colors duration-300"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact"
                className="block font-manrope text-sm text-[#A3A3A3] hover:text-[#CCFF00] transition-colors duration-300"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-manrope text-xs text-[#525252]">
              &copy; {currentYear} RevLabs. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-1">
              <span className="font-manrope text-xs text-[#525252]">Made with</span>
              <span className="text-[#CCFF00]">&#9889;</span>
              <span className="font-manrope text-xs text-[#525252]">by RevLabs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
