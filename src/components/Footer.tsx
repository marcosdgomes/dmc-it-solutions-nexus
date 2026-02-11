
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const services = [
    "Cloud Migration",
    "DevOps Consulting",
    "Automação com IA",
    "Monitoramento 24/7"
  ];

  const products = [
    "DMC AutoDeploy",
    "DMC Monitor Pro",
    "DMC AI Assistant",
    "DMC Cloud Manager"
  ];

  return (
    <footer className="relative bg-tech-dark border-t border-tech-lightGray/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tech-primary/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400/5 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-purple-400/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-400/5 rounded-full blur-md animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full animate-pulse" style={{
            backgroundImage: `linear-gradient(rgba(56, 88, 233, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(56, 88, 233, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-primary/30 to-transparent animate-scan-horizontal"></div>
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400/30 to-transparent animate-scan-horizontal" style={{ animationDelay: '2s' }}></div>
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-tech-primary/30 to-transparent animate-scan-vertical"></div>
          <div className="absolute right-0 bottom-0 w-px h-full bg-gradient-to-t from-transparent via-purple-400/30 to-transparent animate-scan-vertical" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Digital noise pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full animate-digital-noise" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
        </div>

        {/* Hexagonal pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233858e9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/logo-white.png"
                alt={COMPANY_INFO.name}
                className="h-16 w-auto"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              {t('footer.company.description')}
            </p>

            <div className="space-y-2">
              <div className="text-gray-300">
                <span className="text-tech-primary">{t('home.contact.info.phone')}:</span> {COMPANY_INFO.phone}
              </div>
              <div className="text-gray-300">
                <span className="text-tech-primary">{t('home.contact.info.location')}:</span> {COMPANY_INFO.address}
              </div>
              <div className="text-gray-300">
                <span className="text-tech-primary">CNPJ:</span> {COMPANY_INFO.cnpj}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.navigation.title')}</h3>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.home')}</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.services')}</a></li>
              <li><a href="/#products" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.products')}</a></li>
              <li><a href="/#cases" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.cases')}</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.blog')}</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-tech-primary transition-colors duration-200">{t('common.nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-gray-300 hover:text-tech-primary transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Language */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.products.title')}</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="/#products"
                    className="text-gray-300 hover:text-tech-primary transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-tech-lightGray/20 mt-12 pt-8">
          <div className="text-center text-gray-300">
            © {currentYear} {COMPANY_INFO.name}. {t('footer.copyright')}
          </div>
        </div>

        {/* Additional Info with enhanced animations */}
        <div className="mt-8 text-center">
          <div className="tech-card inline-block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 via-blue-400/10 to-purple-400/10 animate-gradient-shift"></div>
            <div className="relative text-center">
              <div className="text-tech-primary font-bold mb-2 animate-pulse">🚀 Pronto para decolar?</div>
              <div className="text-gray-300 text-sm">
                Transforme sua infraestrutura hoje mesmo - Fale conosco!
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
