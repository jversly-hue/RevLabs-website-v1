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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center"
            data-testid="logo"
          >
            <span className="text-[15px] font-semibold text-white tracking-[-0.01em]">
              Rev<span className="text-[#B8860B]">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[13px] text-[#888] hover:text-white transition-colors"
              data-testid="nav-services"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[13px] text-[#888] hover:text-white transition-colors"
              data-testid="nav-about"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[13px] text-[#888] hover:text-white transition-colors"
              data-testid="nav-contact"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-[13px] text-[#555] hover:text-[#888] transition-colors"
              data-testid="language-toggle"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>

            {/* CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium px-4 py-2 bg-white text-black rounded hover:bg-[#e5e5e5] transition-colors"
              data-testid="nav-cta"
            >
              {t('nav.bookIntake')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#888] hover:text-white"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/[0.08] py-4 px-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[14px] text-[#888] hover:text-white transition-colors text-left py-3"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[14px] text-[#888] hover:text-white transition-colors text-left py-3"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[14px] text-[#888] hover:text-white transition-colors text-left py-3"
              >
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.08]">
                <button
                  onClick={toggleLanguage}
                  className="text-[13px] text-[#555]"
                >
                  {language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
                </button>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium px-4 py-3 bg-white text-black rounded text-center mt-4"
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
