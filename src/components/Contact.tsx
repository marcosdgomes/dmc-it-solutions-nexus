
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { COMPANY_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would implement the actual form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('home.contact.info.phone'),
      value: COMPANY_INFO.phone,
      action: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('home.contact.info.location'),
      value: COMPANY_INFO.address,
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="tech-card glow-effect">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('home.contact.sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">
                    {t('home.contact.form.name')} *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-tech-gray/50 border-tech-lightGray/30 text-white focus:border-tech-primary"
                    placeholder={t('home.contact.form.name')}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    {t('home.contact.form.email')} *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-tech-gray/50 border-tech-lightGray/30 text-white focus:border-tech-primary"
                    placeholder={t('home.contact.form.email')}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-300 mb-2 block">
                    {t('home.contact.form.company')}
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-tech-gray/50 border-tech-lightGray/30 text-white focus:border-tech-primary"
                    placeholder={t('home.contact.form.company')}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">
                    {t('home.contact.form.message')} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-tech-gray/50 border-tech-lightGray/30 text-white focus:border-tech-primary min-h-[120px]"
                    placeholder={t('home.contact.form.message')}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-tech-primary hover:bg-tech-primary/90 text-white font-medium py-3"
                >
                  {t('home.contact.form.send')}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">
              {t('home.contact.otherMethods')}
            </h3>

            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="tech-card hover-lift flex items-center space-x-4 group"
                >
                  <div className="text-tech-primary group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium">{method.title}</div>
                    <div className="text-gray-300 group-hover:text-tech-primary transition-colors duration-300">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="tech-card glow-effect bg-gradient-to-r from-green-600 to-green-500">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-3">
                  {t('home.contact.whatsapp.title')}
                </h4>
                <p className="text-green-100 mb-4">
                  {t('home.contact.whatsapp.description')}
                </p>
                <Button 
                  className="bg-white text-green-600 hover:bg-gray-100 font-medium"
                  onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank')}
                >
                  {t('home.contact.whatsapp.button')}
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 text-center">
              <div className="tech-card">
                <div className="text-tech-primary font-bold text-lg mb-2">{t('home.contact.response.title')}</div>
                <div className="text-gray-300 text-sm">
                  {t('home.contact.response.description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
