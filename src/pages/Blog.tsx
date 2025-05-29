
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDown, Search, Calendar, User, ExternalLink } from 'lucide-react';
import { useWordPress } from '@/hooks/useWordPress';

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { posts, categories, isLoading, config } = useWordPress();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Transform WordPress posts to match the existing structure
  const transformedPosts = posts.map(post => {
    // Extract featured image
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                         "photo-1461749280684-dccba630e2f6";
    
    // Extract category
    const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || "WordPress";
    
    // Extract tags
    const tags = post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || ["WordPress", "Blog"];

    return {
      title: post.title.rendered.replace(/<[^>]*>/g, ''),
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      author: "DMC Team",
      date: post.date,
      category: category,
      image: featuredImage,
      readTime: "5 min",
      tags: tags,
      slug: post.slug,
      id: post.id,
      link: post.link
    }
  });

  // Create dynamic categories list
  const dynamicCategories = ["Todos", ...categories.map(cat => cat.name)];

  const filteredPosts = transformedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

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
            {dynamicCategories.map((category) => (
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
          {!config.apiUrl ? (
            <div className="text-center py-16">
              <p className="text-gray-300 text-lg mb-4">Configure a API do WordPress no Management para exibir posts.</p>
              <Button 
                onClick={() => window.location.href = '/management'}
                className="bg-tech-primary hover:bg-tech-primary/90"
              >
                Ir para Management
              </Button>
            </div>
          ) : isLoading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-primary mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg">Carregando posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-300 text-lg">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="tech-card hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={post.image.startsWith('http') ? post.image : `https://images.unsplash.com/${post.image}?w=400&h=250&fit=crop`}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop`;
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-tech-primary text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 
                      className="text-xl font-bold text-white hover:text-tech-primary transition-colors duration-300 cursor-pointer"
                      onClick={() => handleReadMore(post.slug)}
                    >
                      {post.title}
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
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
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
                      onClick={() => handleReadMore(post.slug)}
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
