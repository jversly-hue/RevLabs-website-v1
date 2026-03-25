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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#121418]/95 backdrop-blur-md border-b border-white/[0.06]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center"
            data-testid="logo"
          >
            <img 
              src="/revlabs_horizontal_final.png" 
              alt="RevLabs" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[14px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors"
              data-testid="nav-services"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[14px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors"
              data-testid="nav-about"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[14px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors"
              data-testid="nav-contact"
            >
              {t('nav.contact')}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-[13px] text-[#6B7280] hover:text-[#9CA3AF] transition-colors uppercase tracking-wide"
              data-testid="language-toggle"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>

            {/* CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium px-5 py-2.5 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] rounded-lg hover:from-[#B89DFB] hover:to-[#A78BFA] transition-all shadow-[0_2px_8px_rgba(167,139,250,0.2)] hover:shadow-[0_4px_16px_rgba(167,139,250,0.3)]"
              data-testid="nav-cta"
            >
              {t('nav.bookIntake')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#E8E8EC]"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-[72px] left-0 right-0 bg-[#1A1D22] border-b border-white/[0.06] py-6 px-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[15px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors text-left py-3"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[15px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors text-left py-3"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[15px] text-[#9CA3AF] hover:text-[#E8E8EC] transition-colors text-left py-3"
              >
                {t('nav.contact')}
              </button>
              
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/[0.06]">
                <button
                  onClick={toggleLanguage}
                  className="text-[13px] text-[#6B7280] uppercase tracking-wide"
                >
                  {language === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
                </button>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium px-5 py-3 bg-gradient-to-b from-[#A78BFA] to-[#9775FA] text-[#121418] rounded-lg text-center mt-4"
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
