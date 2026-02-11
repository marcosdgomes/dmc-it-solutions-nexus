
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Target, Eye, Zap } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-tech-primary" />,
      title: t('home.about.values.mission.title'),
      description: t('home.about.values.mission.description')
    },
    {
      icon: <Eye className="w-8 h-8 text-tech-primary" />,
      title: t('home.about.values.vision.title'),
      description: t('home.about.values.vision.description')
    },
    {
      icon: <Zap className="w-8 h-8 text-tech-primary" />,
      title: t('home.about.values.values.title'),
      description: t('home.about.values.values.description')
    }
  ];

  const expertise = t('home.about.expertise.items', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 bg-tech-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.about.description')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="tech-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-6">
              {t('home.about.subtitle')}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('home.about.expertise.description')}
            </p>

            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-tech-primary flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="tech-card glow-effect">
              <div className="text-center p-8">
                <div className="text-5xl font-bold text-tech-primary mb-4">5+</div>
                <div className="text-xl text-white mb-2">{t('home.about.years')}</div>
                <div className="text-gray-400">DevOps</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-tech-primary mb-2">20+</div>
                <div className="text-gray-300 text-sm">{t('home.about.projects')}</div>
              </div>
              <div className="tech-card text-center">
                <div className="text-2xl font-bold text-tech-primary mb-2">24/7</div>
                <div className="text-gray-300 text-sm">{t('home.about.clients')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
