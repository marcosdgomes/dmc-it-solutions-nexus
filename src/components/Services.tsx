
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { Cloud, Settings, Zap, Shield, Brain, RefreshCw, Lock, Users } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  
  const services = t('home.services.list', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  
  const getIcon = (iconName: string) => {
    const icons = {
      cloud: <Cloud className="w-8 h-8" />,
      consulting: <Settings className="w-8 h-8" />,
      optimization: <Zap className="w-8 h-8" />,
      management: <RefreshCw className="w-8 h-8" />,
      ai: <Brain className="w-8 h-8" />,
      modernization: <Cloud className="w-8 h-8" />,
      security: <Shield className="w-8 h-8" />,
      outsourcing: <Users className="w-8 h-8" />
    };
    return icons[iconName as keyof typeof icons] || <Settings className="w-8 h-8" />;
  };

  const iconNames = ['cloud', 'consulting', 'optimization', 'management', 'ai', 'modernization', 'security', 'outsourcing'];

  return (
    <section id="services" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.services.title').split(' ').map((word, index, array) => 
              word === 'Fazemos' || word === 'Do' ? (
                <span key={index} className="gradient-text">{word}</span>
              ) : (
                word + (index < array.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="tech-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-tech-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(iconNames[index])}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Highlight */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div className="tech-card text-center hover-lift glow-effect animate-fade-in">
            <div className="text-tech-primary mb-4">
              <Zap className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('home.services.devopsOnDemand.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('home.services.devopsOnDemand.description')}
            </p>
          </div>

          <div className="tech-card text-center hover-lift glow-effect animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-tech-primary mb-4">
              <Brain className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('home.services.aiAutomation.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('home.services.aiAutomation.description')}
            </p>
          </div>

          <div className="tech-card text-center hover-lift glow-effect animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-tech-primary mb-4">
              <Shield className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('home.services.support247.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('home.services.support247.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
