
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TECH_STACK } from '@/lib/constants';

const TechStack = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-tech-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.techStack.title').split(' ').map((word, index, array) => 
              index === array.length - 2 ? (
                <span key={index} className="gradient-text">{word} </span>
              ) : (
                word + (index < array.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.techStack.subtitle')}
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {TECH_STACK.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="tech-card hover-lift animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-6 gradient-text">
                {t(`home.techStack.categories.${category.categoryKey}`)}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="bg-tech-dark/50 border border-tech-lightGray/30 rounded-lg p-3 text-center hover:border-tech-primary/50 transition-all duration-300 hover:bg-tech-primary/5 animate-slide-in-right"
                    style={{ animationDelay: `${(categoryIndex * 4 + techIndex) * 0.05}s` }}
                  >
                    <span className="text-gray-300 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
