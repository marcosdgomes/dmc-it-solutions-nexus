
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, Globe, Database, Cpu } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      title: t('home.products.dmcAutoDeploy.title'),
      description: t('home.products.dmcAutoDeploy.description'),
      icon: <Zap className="w-8 h-8" />,
      features: t('home.products.dmcAutoDeploy.features', { returnObjects: true }) as string[],
      status: t('home.products.status.inDevelopment'),
      badge: t('home.products.badges.popular'),
      color: "from-tech-primary to-blue-400"
    },
    {
      title: t('home.products.dmcAiAssistant.title'),
      description: t('home.products.dmcAiAssistant.description'),
      icon: <Cpu className="w-8 h-8" />,
      features: t('home.products.dmcAiAssistant.features', { returnObjects: true }) as string[],
      status: t('home.products.status.inDevelopment'),
      badge: t('home.products.badges.ai'),
      color: "from-purple-500 to-pink-400"
    },
    {
      title: t('home.products.dmcCloudManager.title'),
      description: t('home.products.dmcCloudManager.description'),
      icon: <Globe className="w-8 h-8" />,
      features: t('home.products.dmcCloudManager.features', { returnObjects: true }) as string[],
      status: t('home.products.status.inDevelopment'),
      badge: t('home.products.badges.comingSoon'),
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.products.title').split(' ').map((word, index, array) => 
              word === 'Produtos' || word === 'Products' ? (
                <span key={index} className="gradient-text">{word}</span>
              ) : (
                word + (index < array.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="tech-card hover-lift group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${product.color} text-white`}>
                {product.badge}
              </div>

              {/* Icon */}
              <div className={`text-white mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${product.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-tech-primary transition-colors duration-300">
                {product.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Status and CTA */}
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  product.status === t('home.products.status.available') ? 'text-green-400' :
                  product.status === t('home.products.status.beta') ? 'text-yellow-400' :
                  'text-orange-400'
                }`}>
                  {product.status}
                </span>
                
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white`}
                  disabled={product.status === t('home.products.status.inDevelopment')}
                >
                  {product.status === t('home.products.status.inDevelopment') ? t('home.products.buttons.comingSoon') : t('home.products.buttons.learnMore')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* MVP Section */}
        <div className="tech-card glow-effect text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-6">
            {t('home.products.mvp.title').split(' ').map((word, index) => 
              word === 'MVP' ? (
                <span key={index} className="gradient-text">{word}</span>
              ) : (
                word + ' '
              )
            )}
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('home.products.mvp.description')}
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-tech-primary hover:bg-tech-primary/90 text-white px-8"
              onClick={() => window.location.href = '#contact'}
            >
              {t('home.products.mvp.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
