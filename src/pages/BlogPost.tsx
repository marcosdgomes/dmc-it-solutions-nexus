
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, ExternalLink } from 'lucide-react';
import { useWordPress } from '@/hooks/useWordPress';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { posts, isLoading, config } = useWordPress();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-tech-dark">
        <Header />
        <div className="pt-24 flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-primary mx-auto mb-4"></div>
        </div>
        <Footer />
      </div>
    );
  }

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-tech-dark">
        <Header />
        <div className="pt-24 container mx-auto px-4 text-center py-16">
          <h1 className="text-4xl font-bold text-white mb-4">Post não encontrado</h1>
          <p className="text-gray-300 mb-8">O post que você está procurando não existe ou foi removido.</p>
          <Button 
            onClick={() => navigate('/blog')}
            className="bg-tech-primary hover:bg-tech-primary/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract featured image from post data
  const getFeaturedImage = () => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop`;
  };

  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/blog')}
            variant="ghost"
            className="text-tech-primary hover:text-white hover:bg-tech-primary/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
          
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg mb-8">
              <img 
                src={getFeaturedImage()}
                alt={post.title.rendered.replace(/<[^>]*>/g, '')}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Post Meta */}
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>DMC Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              {post._embedded?.['wp:term']?.[0]?.[0]?.name && (
                <span className="bg-tech-primary text-white px-2 py-1 rounded text-xs">
                  {post._embedded['wp:term'][0][0].name}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {post.title.rendered.replace(/<[^>]*>/g, '')}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Tags */}
            {post._embedded?.['wp:term']?.[1] && (
              <div className="mt-12 pt-8 border-t border-tech-lightGray/20">
                <h3 className="text-white font-medium mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post._embedded['wp:term'][1].map((tag: any) => (
                    <span 
                      key={tag.id}
                      className="bg-tech-gray/50 text-gray-300 px-3 py-1 rounded text-sm"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Original Post Link */}
            <div className="mt-8 p-6 bg-tech-gray/30 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium mb-2">Ver post original</h3>
                  <p className="text-gray-400 text-sm">
                    Acesse o post completo em nosso site WordPress
                  </p>
                </div>
                <Button 
                  onClick={() => window.open(post.link, '_blank')}
                  className="bg-tech-primary hover:bg-tech-primary/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Acessar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
