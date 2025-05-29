
import React from 'react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { Cloud, Settings, Zap, Shield, Brain, RefreshCw, Lock, Users } from 'lucide-react';

const Services = () => {
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

  return (
    <section id="services" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que <span className="gradient-text">Fazemos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em tecnologia para acelerar sua transformação digital 
            e otimizar seus processos de negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="tech-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-tech-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* CTA */}
              <Button 
                variant="ghost" 
                size="sm"
                className="text-tech-primary hover:text-white hover:bg-tech-primary w-full"
              >
                Saiba Mais
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services Highlight */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <div className="tech-card text-center hover-lift glow-effect animate-fade-in">
            <div className="text-tech-primary mb-4">
              <Zap className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DevOps sob Demanda</h3>
            <p className="text-gray-300 text-sm mb-4">
              Consultoria especializada e implementação de práticas DevOps 
              para acelerar seus deployments e melhorar a qualidade do software.
            </p>
            <Button className="bg-tech-primary hover:bg-tech-primary/90 text-white w-full">
              Contratar Agora
            </Button>
          </div>

          <div className="tech-card text-center hover-lift glow-effect animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-tech-primary mb-4">
              <Brain className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Automações com IA</h3>
            <p className="text-gray-300 text-sm mb-4">
              Implementação de soluções inteligentes usando N8N, OpenAI e 
              agentes de IA para automatizar processos complexos.
            </p>
            <Button className="bg-tech-primary hover:bg-tech-primary/90 text-white w-full">
              Automatizar Processos
            </Button>
          </div>

          <div className="tech-card text-center hover-lift glow-effect animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-tech-primary mb-4">
              <Shield className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Suporte 24/7</h3>
            <p className="text-gray-300 text-sm mb-4">
              Monitoramento contínuo, manutenção proativa e suporte técnico 
              especializado para garantir máxima disponibilidade.
            </p>
            <Button className="bg-tech-primary hover:bg-tech-primary/90 text-white w-full">
              Solicitar Suporte
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
