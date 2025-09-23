
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Cases = () => {
  const { t } = useTranslation();
  
  const cases = [
    {
      title: t('home.cases.case1.title'),
      company: t('home.cases.case1.company'),
      description: t('home.cases.case1.description'),
      results: [
        { metric: "60%", label: t('home.cases.case1.results.costReduction') },
        { metric: "50%", label: t('home.cases.case1.results.performanceImprovement') },
        { metric: "99.99%", label: t('home.cases.case1.results.uptime') }
      ],
      tags: ["AWS", "CDN", "CI/CD", "Monitoring"],
      image: "photo-1460925895917-afdab827c52f",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: t('home.cases.case2.title'),
      company: t('home.cases.case2.company'),
      description: t('home.cases.case2.description'),
      results: [
        { metric: "+60%", label: t('home.cases.case2.results.costSavings') },
        { metric: "99.9%", label: t('home.cases.case2.results.systemAvailability') },
        { metric: "100%", label: t('home.cases.case2.results.dataControl') }
      ],
      tags: ["Bare Metal", "Private Cloud", "Kubernetes", "Security"],
      image: "photo-1551288049-bebda4e38f71",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-tech-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.cases.title').split(' ').map((word, index, array) => 
              word === 'Sucesso' || word === 'Stories' ? (
                <span key={index} className="gradient-text">{word}</span>
              ) : (
                word + (index < array.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.cases.subtitle')}
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

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="tech-card glow-effect max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('home.cases.cta.title').split(' ').map((word, index) => 
                word === 'sucesso' || word === 'story' ? (
                  <span key={index} className="gradient-text">{word}</span>
                ) : (
                  word + ' '
                )
              )}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('home.cases.cta.subtitle')}
            </p>
            <Button 
              size="lg"
              className="bg-tech-primary hover:bg-tech-primary/90 text-white px-8"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('home.cases.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
