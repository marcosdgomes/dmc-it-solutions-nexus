
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDown, Search, Calendar, User, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      title: "Como Implementar CI/CD na sua Empresa em 2024",
      excerpt: "Guia completo para implementação de pipelines de CI/CD eficientes, desde a configuração inicial até as melhores práticas de deployment automático.",
      author: "DMC Team",
      date: "2024-01-15",
      category: "DevOps",
      image: "photo-1461749280684-dccba630e2f6",
      readTime: "8 min",
      tags: ["CI/CD", "DevOps", "Automation"]
    },
    {
      title: "Migração para Cloud: Estratégias e Armadilhas",
      excerpt: "Evite os erros mais comuns na migração para cloud e aprenda as melhores estratégias para uma transição suave e econômica.",
      author: "DMC Team",
      date: "2024-01-10",
      category: "Cloud",
      image: "photo-1518770660439-4636190af475",
      readTime: "12 min",
      tags: ["Cloud", "Migration", "AWS", "GCP"]
    },
    {
      title: "Automação com IA: O Futuro dos Processos Empresariais",
      excerpt: "Descubra como a inteligência artificial está revolucionando a automação de processos e como implementar essas soluções na sua empresa.",
      author: "DMC Team",
      date: "2024-01-05",
      category: "AI",
      image: "photo-1485827404703-89b55fcc595e",
      readTime: "10 min",
      tags: ["AI", "Automation", "OpenAI", "N8N"]
    },
    {
      title: "Monitoramento Avançado: Observabilidade Completa",
      excerpt: "Implemente sistemas de monitoramento robustos com Grafana, Prometheus e Loki para ter visibilidade total da sua infraestrutura.",
      author: "DMC Team",
      date: "2024-01-01",
      category: "Monitoring",
      image: "photo-1487058792275-0ad4aaf24ca7",
      readTime: "15 min",
      tags: ["Monitoring", "Grafana", "Prometheus", "Observability"]
    },
    {
      title: "Kubernetes na Prática: Do Zero à Produção",
      excerpt: "Tutorial completo para implementar Kubernetes em produção, incluindo configurações de segurança, networking e best practices.",
      author: "DMC Team",
      date: "2023-12-28",
      category: "Infrastructure",
      image: "photo-1605810230434-7631ac76ec81",
      readTime: "20 min",
      tags: ["Kubernetes", "Docker", "Infrastructure", "DevOps"]
    },
    {
      title: "Segurança em DevOps: Implementando DevSecOps",
      excerpt: "Integre segurança no seu pipeline de desenvolvimento desde o início, criando uma cultura de DevSecOps na sua organização.",
      author: "DMC Team",
      date: "2023-12-25",
      category: "Security",
      image: "photo-1498050108023-c5249f4df085",
      readTime: "18 min",
      tags: ["Security", "DevSecOps", "Best Practices"]
    }
  ];

  const categories = ["Todos", "DevOps", "Cloud", "AI", "Monitoring", "Infrastructure", "Security"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-tech-dark via-tech-gray to-tech-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Blog</span> & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            Compartilhamos conhecimento, experiências e as últimas tendências 
            em DevOps, Cloud, IA e transformação digital.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-tech-gray/50 border-tech-lightGray/30 text-white focus:border-tech-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-tech-lightGray/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className={`${
                  selectedCategory === category 
                    ? "bg-tech-primary text-white" 
                    : "text-gray-300 hover:text-white hover:bg-tech-primary/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-300 text-lg">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article 
                  key={index}
                  className="tech-card hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={`https://images.unsplash.com/${post.image}?w=400&h=250&fit=crop`}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-tech-primary text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white hover:text-tech-primary transition-colors duration-300">
                      <a href="#" className="block">
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-tech-gray/50 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-tech-primary hover:text-white hover:bg-tech-primary w-full mt-4"
                    >
                      Ler Artigo Completo
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white px-8"
              >
                Carregar Mais Artigos
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
