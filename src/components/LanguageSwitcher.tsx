import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header' }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language as Locale;
  const targetLanguage: Locale = currentLanguage === 'pt' ? 'en' : 'pt';

  const switchLanguage = () => {
    const currentPath = location.pathname;
    let newPath = currentPath;

    if (targetLanguage === 'en') {
      // Switch to English
      if (currentPath === '/') {
        newPath = '/en';
      } else if (!currentPath.startsWith('/en')) {
        newPath = `/en${currentPath}`;
      }
    } else {
      // Switch to Portuguese
      if (currentPath === '/en') {
        newPath = '/';
      } else if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace('/en', '') || '/';
      }
    }

    // Change language and navigate
    i18n.changeLanguage(targetLanguage);
    navigate(newPath);
  };

  if (variant === 'footer') {
    return (
      <button
        onClick={switchLanguage}
        className="text-gray-400 hover:text-tech-primary transition-colors duration-200 text-sm flex items-center gap-1"
        aria-label={`Switch to ${targetLanguage === 'en' ? 'English' : 'Português'}`}
      >
        <Globe size={14} />
        {targetLanguage === 'en' ? 'EN' : 'PT'}
      </button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="text-gray-300 hover:text-tech-primary hover:bg-tech-primary/10 transition-colors duration-200"
      aria-label={`Switch to ${targetLanguage === 'en' ? 'English' : 'Português'}`}
    >
      <Globe size={16} className="mr-1" />
      <span className="text-xs font-medium">
        {currentLanguage.toUpperCase()} | {targetLanguage.toUpperCase()}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;