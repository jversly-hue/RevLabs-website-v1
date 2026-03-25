import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative py-12 bg-[#121418] border-t border-white/[0.06]"
      data-testid="footer"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-6">
            <a href="/">
              <img 
                src="/revlabs_horizontal_final.png" 
                alt="RevLabs" 
                className="h-7 w-auto opacity-80"
              />
            </a>
            <span className="hidden sm:inline text-[13px] text-[#6B7280]">
              {t('footer.tagline')}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href={`mailto:${t('footer.email')}`}
              className="text-[13px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors"
            >
              {t('footer.email')}
            </a>
            <span className="text-[13px] text-[#6B7280]">
              &copy; {currentYear} RevLabs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
