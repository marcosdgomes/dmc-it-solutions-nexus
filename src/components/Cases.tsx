
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: "E-commerce com 10M+ de acessos",
      company: "RetailTech",
      description: "Migração completa para cloud e implementação de arquitetura serverless que reduziu custos em 60% e aumentou a performance em 300%.",
      results: [
        { metric: "60%", label: "Redução de Custos" },
        { metric: "300%", label: "Melhoria de Performance" },
        { metric: "99.99%", label: "Uptime Alcançado" }
      ],
      tags: ["AWS", "Kubernetes", "CI/CD", "Monitoring"],
      image: "photo-1460925895917-afdab827c52f",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Fintech com Milhões de Transações",
      company: "PayFlow",
      description: "Implementação de pipeline DevOps completo com deploy automático, monitoramento avançado e compliance bancário.",
      results: [
        { metric: "90%", label: "Redução no Tempo de Deploy" },
        { metric: "99.9%", label: "Disponibilidade do Sistema" },
        { metric: "50%", label: "Menos Incidentes" }
      ],
      tags: ["Docker", "GitLab CI/CD", "Grafana", "Security"],
      image: "photo-1551288049-bebda4e38f71",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Startup de IA Generativa",
      company: "AInovate",
      description: "Criação de infraestrutura escalável para processamento de modelos de IA com auto-scaling e otimização de custos GPU.",
      results: [
        { metric: "80%", label: "Economia em GPU" },
        { metric: "5x", label: "Velocidade de Processamento" },
        { metric: "24/7", label: "Disponibilidade" }
      ],
      tags: ["GCP", "Terraform", "AI/ML", "Auto-scaling"],
      image: "photo-1485827404703-89b55fcc595e",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-tech-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cases de <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Veja como transformamos desafios técnicos em soluções inovadoras 
            que geram resultados reais para nossos clientes.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className={`tech-card hover-lift animate-fade-in ${
                index % 2 === 0 ? '' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-${index % 2 === 0 ? '2' : '2'} gap-8 items-center`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`h-64 bg-gradient-to-br ${caseStudy.color} relative`}>
                    <img 
                      src={`https://images.unsplash.com/${caseStudy.image}?w=500&h=300&fit=crop`}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover mix-blend-overlay opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">{caseStudy.company}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-1`}>
                          {result.metric}
                        </div>
                        <div className="text-gray-400 text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${caseStudy.color} text-white text-sm rounded-full font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`bg-gradient-to-r ${caseStudy.color} hover:opacity-90 text-white`}
                  >
                    Ver Case Completo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="tech-card glow-effect max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer ser nosso próximo <span className="gradient-text">case de sucesso</span>?
            </h3>
            <p className="text-gray-300 mb-6">
              Conte-nos sobre seu desafio e vamos criar uma solução personalizada 
              que supere suas expectativas.
            </p>
            <Button 
              size="lg"
              className="bg-tech-primary hover:bg-tech-primary/90 text-white px-8"
            >
              Iniciar Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
