
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, Globe, Database, Cpu } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "DMC AutoDeploy",
      description: "Plataforma de deploy automatizado que acelera suas entregas em até 90% com pipelines CI/CD otimizados.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Deploy automático", "Rollback inteligente", "Monitoramento integrado"],
      status: "Em desenvolvimento",
      badge: "Popular",
      color: "from-tech-primary to-blue-400"
    },
    {
      title: "DMC AI Assistant",
      description: "Assistente de IA especializado em DevOps que otimiza processos e automatiza tarefas complexas.",
      icon: <Cpu className="w-8 h-8" />,
      features: ["IA conversacional", "Automação inteligente", "Aprendizado contínuo"],
      status: "Em desenvolvimento",
      badge: "IA",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "DMC Cloud Manager",
      description: "Gerencie múltiplos provedores de cloud em uma única interface com otimização de custos automática.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Multi-cloud", "Otimização de custos", "Gestão centralizada"],
      status: "Em Desenvolvimento",
      badge: "Em Breve",
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos soluções proprietárias que revolucionam a forma como 
            empresas gerenciam sua infraestrutura e processos de desenvolvimento.
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
                  product.status === 'Disponível' ? 'text-green-400' :
                  product.status === 'Beta' ? 'text-yellow-400' :
                  'text-orange-400'
                }`}>
                  {product.status}
                </span>
                
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white`}
                  disabled={product.status === 'Em Desenvolvimento'}
                >
                  {product.status === 'Em Desenvolvimento' ? 'Em Breve' : 'Saiba Mais'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* MVP Section */}
        <div className="tech-card glow-effect text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-6">
            Precisa de um <span className="gradient-text">MVP</span> customizado?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Desenvolvemos MVPs e APIs sob medida para sua necessidade específica. 
            Desde a concepção até o deploy, cuidamos de todo o processo de desenvolvimento.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-tech-primary hover:bg-tech-primary/90 text-white px-8"
              onClick={() => window.location.href = '#contact'}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
