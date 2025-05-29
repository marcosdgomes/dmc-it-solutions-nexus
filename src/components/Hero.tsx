
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tech-dark via-tech-gray to-tech-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-primary/5 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(56, 88, 233, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(56, 88, 233, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-tech-primary/10 border border-tech-primary/20 rounded-full">
            <span className="text-tech-primary text-sm font-medium">🚀 Transformação Digital Acelerada</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vamos <span className="gradient-text">Escalar</span><br />
            Sua <span className="gradient-text">Infraestrutura</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especialistas em DevOps, automações, infraestrutura em nuvem, 
            integração de sistemas e IA aplicada para impulsionar seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-tech-primary hover:bg-tech-primary/90 text-white px-8 py-4 text-lg font-medium rounded-xl hover-lift glow-effect"
              onClick={() => window.location.href = '#contact'}
            >
              Automatize Seus Processos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
              onClick={() => window.location.href = '#services'}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-tech-primary mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projetos Entregues</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-tech-primary mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Garantido</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-tech-primary mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Suporte Técnico</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-tech-primary mb-2">5+</div>
              <div className="text-gray-400 text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
