
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { NAVIGATION_ITEMS, getCompanyInfo } from '@/lib/constants';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(getCompanyInfo());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Update company info when localStorage changes
    const handleStorageChange = () => {
      setCompanyInfo(getCompanyInfo());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for updates periodically
    const interval = setInterval(handleStorageChange, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tech-dark/95 backdrop-blur-md border-b border-tech-lightGray/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-white.png" 
              alt={companyInfo.name}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.products')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#cases"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.cases')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/blog"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.blog')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-tech-primary transition-colors duration-200 relative group"
            >
              {t('common.nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher variant="header" />
            <Button 
              className="bg-tech-primary hover:bg-tech-primary/90 text-white font-medium px-6"
              onClick={() => window.location.href = '#contact'}
            >
              {t('common.cta.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-tech-gray/95 backdrop-blur-md border-t border-tech-lightGray/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.home')}
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.services')}
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.products')}
              </a>
              <a
                href="#cases"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.cases')}
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.blog')}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-tech-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('common.nav.contact')}
              </a>
              <div className="px-3 py-2 flex items-center justify-between">
                <LanguageSwitcher variant="footer" />
                <Button 
                  className="bg-tech-primary hover:bg-tech-primary/90 text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '#contact';
                  }}
                >
                  {t('common.cta.contact')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
