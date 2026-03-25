import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative py-12 bg-black border-t border-white/[0.06]"
      data-testid="footer"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-6">
            <a href="/" className="text-[15px] font-semibold text-white tracking-[-0.01em]">
              Rev<span className="text-[#B8860B]">Labs</span>
            </a>
            <span className="text-[13px] text-[#444]">
              {t('footer.tagline')}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href={`mailto:${t('footer.email')}`}
              className="text-[13px] text-[#666] hover:text-white transition-colors"
            >
              {t('footer.email')}
            </a>
            <span className="text-[13px] text-[#333]">
              &copy; {currentYear}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
