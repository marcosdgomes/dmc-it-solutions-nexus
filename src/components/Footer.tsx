
import React from 'react';
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
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
    <footer className="bg-tech-dark border-t border-tech-lightGray/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-tech-primary to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DMC</span>
              </div>
              <span className="text-xl font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Especialistas em transformação digital, oferecemos soluções completas 
              em DevOps, cloud e automação para acelerar seu negócio.
            </p>

            <div className="space-y-2">
              <div className="text-gray-300">
                <span className="text-tech-primary">Email:</span> {COMPANY_INFO.email}
              </div>
              <div className="text-gray-300">
                <span className="text-tech-primary">Telefone:</span> {COMPANY_INFO.phone}
              </div>
              <div className="text-gray-300">
                <span className="text-tech-primary">Localização:</span> {COMPANY_INFO.address}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Produtos</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a 
                    href="#products"
                    className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-tech-lightGray/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Siga-nos:</span>
              <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                >
                  GitHub
                </a>
                <a 
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-tech-primary transition-colors duration-200"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div className="text-gray-300">
              © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="tech-card inline-block">
            <div className="text-center">
              <div className="text-tech-primary font-bold mb-2">🚀 Pronto para decolar?</div>
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
