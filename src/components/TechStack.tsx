
import React from 'react';
import { TECH_STACK } from '@/lib/constants';

const TechStack = () => {
  return (
    <section className="py-20 bg-tech-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="gradient-text">Stack</span> Tecnológica
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Utilizamos as tecnologias mais modernas e confiáveis do mercado para 
            entregar soluções robustas e escaláveis.
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
                {category.category}
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

        {/* Highlight Section */}
        <div className="mt-16 text-center">
          <div className="tech-card glow-effect max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              Por que escolher nossa <span className="gradient-text">stack</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-primary mb-2">100%</div>
                <div className="text-gray-300">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-primary mb-2">99.9%</div>
                <div className="text-gray-300">Confiabilidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-primary mb-2">24/7</div>
                <div className="text-gray-300">Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
