
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Database, Globe, Users, Shield, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DmcAdmin = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // WordPress API Configuration
  const [wpConfig, setWpConfig] = useState({
    apiUrl: '',
    username: '',
    password: '',
    postsPerPage: 6,
    enableAutoSync: false
  });

  // Site Configuration
  const [siteConfig, setSiteConfig] = useState({
    maintenanceMode: false,
    analyticsId: '',
    seoTitle: 'DMC IT Solutions',
    seoDescription: 'Especialistas em DevOps, automações, infraestrutura em nuvem',
    contactEmail: 'contato@dmcitsolutions.com',
    whatsappNumber: '5511999999999'
  });

  const handleSaveConfig = async (configType: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Configurações salvas!",
        description: `${configType} atualizado com sucesso.`,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">DMC</span> Admin Panel
            </h1>
            <p className="text-gray-300">
              Gerencie configurações do site, integrações e conteúdo.
            </p>
          </div>

          <Tabs defaultValue="wordpress" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-tech-gray/50">
              <TabsTrigger value="wordpress" className="data-[state=active]:bg-tech-primary">
                <Database className="w-4 h-4 mr-2" />
                WordPress
              </TabsTrigger>
              <TabsTrigger value="site" className="data-[state=active]:bg-tech-primary">
                <Globe className="w-4 h-4 mr-2" />
                Site
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-tech-primary">
                <Users className="w-4 h-4 mr-2" />
                Usuários
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-tech-primary">
                <Shield className="w-4 h-4 mr-2" />
                Segurança
              </TabsTrigger>
            </TabsList>

            {/* WordPress Integration */}
            <TabsContent value="wordpress">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="w-5 h-5 mr-2 text-tech-primary" />
                    Integração WordPress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="wp-url" className="text-gray-300">
                        URL da API WordPress
                      </Label>
                      <Input
                        id="wp-url"
                        value={wpConfig.apiUrl}
                        onChange={(e) => setWpConfig({...wpConfig, apiUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://seublog.com/wp-json/wp/v2/"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="wp-posts" className="text-gray-300">
                        Posts por Página
                      </Label>
                      <Input
                        id="wp-posts"
                        type="number"
                        value={wpConfig.postsPerPage}
                        onChange={(e) => setWpConfig({...wpConfig, postsPerPage: parseInt(e.target.value)})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="wp-username" className="text-gray-300">
                        Username
                      </Label>
                      <Input
                        id="wp-username"
                        value={wpConfig.username}
                        onChange={(e) => setWpConfig({...wpConfig, username: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="admin"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="wp-password" className="text-gray-300">
                        Password/Token
                      </Label>
                      <Input
                        id="wp-password"
                        type="password"
                        value={wpConfig.password}
                        onChange={(e) => setWpConfig({...wpConfig, password: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-sync" className="text-gray-300">
                        Sincronização Automática
                      </Label>
                      <p className="text-gray-400 text-sm">
                        Buscar novos posts automaticamente a cada hora
                      </p>
                    </div>
                    <Switch
                      id="auto-sync"
                      checked={wpConfig.enableAutoSync}
                      onCheckedChange={(checked) => setWpConfig({...wpConfig, enableAutoSync: checked})}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={() => handleSaveConfig('Configuração WordPress')}
                      disabled={isLoading}
                      className="bg-tech-primary hover:bg-tech-primary/90"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isLoading ? 'Salvando...' : 'Salvar Configurações'}
                    </Button>
                    <Button variant="outline" className="border-tech-primary text-tech-primary">
                      Testar Conexão
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Site Configuration */}
            <TabsContent value="site">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-tech-primary" />
                    Configurações do Site
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="seo-title" className="text-gray-300">
                        Título SEO
                      </Label>
                      <Input
                        id="seo-title"
                        value={siteConfig.seoTitle}
                        onChange={(e) => setSiteConfig({...siteConfig, seoTitle: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="analytics" className="text-gray-300">
                        Google Analytics ID
                      </Label>
                      <Input
                        id="analytics"
                        value={siteConfig.analyticsId}
                        onChange={(e) => setSiteConfig({...siteConfig, analyticsId: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="GA4-XXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="seo-desc" className="text-gray-300">
                      Descrição SEO
                    </Label>
                    <Textarea
                      id="seo-desc"
                      value={siteConfig.seoDescription}
                      onChange={(e) => setSiteConfig({...siteConfig, seoDescription: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contact-email" className="text-gray-300">
                        Email de Contato
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={siteConfig.contactEmail}
                        onChange={(e) => setSiteConfig({...siteConfig, contactEmail: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="whatsapp" className="text-gray-300">
                        WhatsApp (com código do país)
                      </Label>
                      <Input
                        id="whatsapp"
                        value={siteConfig.whatsappNumber}
                        onChange={(e) => setSiteConfig({...siteConfig, whatsappNumber: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="5511999999999"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance" className="text-gray-300">
                        Modo Manutenção
                      </Label>
                      <p className="text-gray-400 text-sm">
                        Ativar página de manutenção para visitantes
                      </p>
                    </div>
                    <Switch
                      id="maintenance"
                      checked={siteConfig.maintenanceMode}
                      onCheckedChange={(checked) => setSiteConfig({...siteConfig, maintenanceMode: checked})}
                    />
                  </div>

                  <Button 
                    onClick={() => handleSaveConfig('Configurações do Site')}
                    disabled={isLoading}
                    className="bg-tech-primary hover:bg-tech-primary/90"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isLoading ? 'Salvando...' : 'Salvar Configurações'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-tech-primary" />
                    Gerenciamento de Usuários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Gerenciamento de Usuários
                    </h3>
                    <p className="text-gray-400">
                      Esta funcionalidade será implementada em versões futuras.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-tech-primary" />
                    Configurações de Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">
                      Configurações de Segurança
                    </h3>
                    <p className="text-gray-400">
                      Configurações avançadas de segurança serão adicionadas em breve.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DmcAdmin;
