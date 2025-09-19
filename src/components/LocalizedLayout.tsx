import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Locale } from '@/i18n/config';

interface LocalizedLayoutProps {
  children: React.ReactNode;
  locale: Locale;
}

const LocalizedLayout: React.FC<LocalizedLayoutProps> = ({ children, locale }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const isPortuguese = locale === 'pt';
  const currentUrl = window.location.origin + window.location.pathname;
  const alternateUrl = isPortuguese 
    ? currentUrl.replace(window.location.pathname, '/en' + window.location.pathname)
    : currentUrl.replace('/en', '');

  return (
    <>
      <Helmet>
        <html lang={locale === 'pt' ? 'pt-BR' : 'en'} />
        <title>
          {isPortuguese 
            ? 'DMC IT Solutions - Soluções Tecnológicas Inovadoras'
            : 'DMC IT Solutions - Innovative Technology Solutions'
          }
        </title>
        <meta 
          name="description" 
          content={
            isPortuguese
              ? 'Transformamos ideias em realidade digital com desenvolvimento de software personalizado, consultoria em TI e automação inteligente.'
              : 'We transform ideas into digital reality with custom software development, IT consulting, and intelligent automation.'
          } 
        />
        
        {/* Alternate language links */}
        <link 
          rel="alternate" 
          hrefLang={isPortuguese ? 'en' : 'pt-BR'} 
          href={alternateUrl} 
        />
        <link 
          rel="alternate" 
          hrefLang={locale === 'pt' ? 'pt-BR' : 'en'} 
          href={currentUrl} 
        />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph */}
        <meta property="og:locale" content={locale === 'pt' ? 'pt_BR' : 'en_US'} />
        <meta 
          property="og:locale:alternate" 
          content={locale === 'pt' ? 'en_US' : 'pt_BR'} 
        />
        <meta 
          property="og:title" 
          content={
            isPortuguese 
              ? 'DMC IT Solutions - Soluções Tecnológicas Inovadoras'
              : 'DMC IT Solutions - Innovative Technology Solutions'
          } 
        />
        <meta 
          property="og:description" 
          content={
            isPortuguese
              ? 'Transformamos ideias em realidade digital com desenvolvimento de software personalizado, consultoria em TI e automação inteligente.'
              : 'We transform ideas into digital reality with custom software development, IT consulting, and intelligent automation.'
          } 
        />
      </Helmet>
      {children}
    </>
  );
};

export default LocalizedLayout;