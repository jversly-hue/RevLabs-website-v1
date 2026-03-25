import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CALENDLY_URL = "https://calendly.com/revlabs";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-1 group"
            data-testid="logo"
          >
            <span className="font-chivo text-2xl font-black text-[#F2F2F2] tracking-tight">
              Rev
            </span>
            <span className="font-chivo text-2xl font-black text-[#CD7F32] tracking-tight">
              Labs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="font-manrope text-sm text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors duration-300"
              data-testid="nav-services"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-manrope text-sm text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors duration-300"
              data-testid="nav-about"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-manrope text-sm text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors duration-300"
              data-testid="nav-contact"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
              data-testid="language-toggle"
            >
              <span className={`font-manrope text-xs font-medium ${language === 'nl' ? 'text-[#CCFF00]' : 'text-[#525252]'}`}>
                NL
              </span>
              <span className="text-[#525252]">/</span>
              <span className={`font-manrope text-xs font-medium ${language === 'en' ? 'text-[#CCFF00]' : 'text-[#525252]'}`}>
                EN
              </span>
            </button>

            {/* CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-sm font-medium px-5 py-2.5 bg-[#CCFF00] text-[#0A0A0A] rounded-full hover:bg-[#B3E600] transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              data-testid="nav-cta"
            >
              {t('nav.bookIntake')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F2F2F2]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-20 left-0 right-0 bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/5 py-6 px-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="font-manrope text-base text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors text-left py-2"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-manrope text-base text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors text-left py-2"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-manrope text-base text-[#A3A3A3] hover:text-[#F2F2F2] transition-colors text-left py-2"
              >
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center gap-4 py-2">
                <span className="font-manrope text-sm text-[#525252]">Taal:</span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2"
                >
                  <span className={`font-manrope text-sm ${language === 'nl' ? 'text-[#CCFF00]' : 'text-[#525252]'}`}>
                    NL
                  </span>
                  <span className="text-[#525252]">/</span>
                  <span className={`font-manrope text-sm ${language === 'en' ? 'text-[#CCFF00]' : 'text-[#525252]'}`}>
                    EN
                  </span>
                </button>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-sm font-medium px-5 py-3 bg-[#CCFF00] text-[#0A0A0A] rounded-full text-center mt-2"
              >
                {t('nav.bookIntake')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
