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
        isScrolled ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-0.5"
            data-testid="logo"
          >
            <span className="font-chivo text-xl font-bold text-[#FAFAFA] tracking-tight">
              Rev
            </span>
            <span className="font-chivo text-xl font-bold text-[#CD7F32] tracking-tight">
              Labs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('services')}
              className="font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              data-testid="nav-services"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              data-testid="nav-about"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-manrope text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              data-testid="nav-contact"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-200"
              data-testid="language-toggle"
            >
              <span className={`font-manrope text-xs font-medium ${language === 'nl' ? 'text-[#FAFAFA]' : 'text-[#52525B]'}`}>
                NL
              </span>
              <span className="text-[#3F3F46]">/</span>
              <span className={`font-manrope text-xs font-medium ${language === 'en' ? 'text-[#FAFAFA]' : 'text-[#52525B]'}`}>
                EN
              </span>
            </button>

            {/* CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-sm font-medium px-5 py-2.5 bg-[#A78BFA] text-[#09090B] rounded-lg hover:bg-[#C4B5FD] transition-colors duration-200"
              data-testid="nav-cta"
            >
              {t('nav.bookIntake')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-[#FAFAFA]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-20 left-0 right-0 bg-[#09090B]/98 backdrop-blur-md border-b border-white/[0.06] py-6 px-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="font-manrope text-base text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-left py-3"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-manrope text-base text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-left py-3"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-manrope text-base text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-left py-3"
              >
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center gap-4 py-3 border-t border-white/[0.06] mt-2">
                <span className="font-manrope text-sm text-[#52525B]">Taal:</span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2"
                >
                  <span className={`font-manrope text-sm ${language === 'nl' ? 'text-[#FAFAFA]' : 'text-[#52525B]'}`}>
                    NL
                  </span>
                  <span className="text-[#3F3F46]">/</span>
                  <span className={`font-manrope text-sm ${language === 'en' ? 'text-[#FAFAFA]' : 'text-[#52525B]'}`}>
                    EN
                  </span>
                </button>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-sm font-medium px-5 py-3 bg-[#A78BFA] text-[#09090B] rounded-lg text-center mt-4"
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
