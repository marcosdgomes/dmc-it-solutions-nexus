
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useWordPress } from '@/hooks/useWordPress'
import LoginForm from '@/components/LoginForm'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { Switch } from '@/components/ui/switch'
import { 
  LogOut, 
  Globe, 
  RefreshCw, 
  CheckCircle, 
  XCircle,
  Save,
  TestTube,
  Calendar,
  Eye,
  Settings,
  Search,
  BarChart3,
  Share2,
  Palette,
  Mail
} from 'lucide-react'

interface SiteConfig {
  siteTitle?: string
  siteDescription?: string
  // SEO
  metaKeywords?: string
  robotsTxt?: string
  generateSitemap?: boolean
  // Analytics
  googleAnalyticsId?: string
  matomoUrl?: string
  matomoSiteId?: string
  plausibleDomain?: string
  // Social Media
  facebookUrl?: string
  twitterUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
  // Open Graph
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  // Design
  primaryColor?: string
  secondaryColor?: string
  fontFamily?: string
  theme?: string
  // Contact Form
  contactFormEnabled?: boolean
  contactFormEmail?: string
  smtpHost?: string
  smtpPort?: string
  smtpUser?: string
  smtpPassword?: string
}

const Management = () => {
  const { user, loading, signOut } = useAuth()
  const { posts, config, saveConfig, testConnection, syncPosts, isSync } = useWordPress()
  const { toast } = useToast()

  const [wpConfig, setWpConfig] = useState(config)
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')

  // Site config from localStorage
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('site-config')
    return saved ? JSON.parse(saved) : {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      theme: 'dark',
      fontFamily: 'Inter',
      generateSitemap: true,
      contactFormEnabled: true,
      robotsTxt: `User-agent: *\nAllow: /\n\nSitemap: ${window.location.origin}/sitemap.xml`
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-tech-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tech-primary"></div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  const handleSaveConfig = () => {
    const updatedConfig = { ...wpConfig, ...siteConfig }
    saveConfig(updatedConfig)
    localStorage.setItem('site-config', JSON.stringify(siteConfig))
    toast({
      title: "Configurações salvas!",
      description: "Todas as configurações foram atualizadas com sucesso.",
    })
  }

  const handleTestConnection = async () => {
    setConnectionStatus('testing')
    const isConnected = await testConnection()
    setConnectionStatus(isConnected ? 'success' : 'error')
    
    toast({
      title: isConnected ? "Conexão bem-sucedida!" : "Erro na conexão",
      description: isConnected 
        ? "A conexão com o WordPress foi estabelecida."
        : "Não foi possível conectar com a API do WordPress.",
      variant: isConnected ? "default" : "destructive",
    })
  }

  const handleLogout = async () => {
    await signOut()
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    })
  }

  return (
    <div className="min-h-screen bg-tech-dark">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                <span className="gradient-text">DMC</span> Management
              </h1>
              <p className="text-gray-300">
                Bem-vindo, {user.email}
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>

          <Tabs defaultValue="wordpress" className="space-y-6">
            <TabsList className="bg-tech-gray/50">
              <TabsTrigger value="wordpress" className="data-[state=active]:bg-tech-primary">
                <Globe className="w-4 h-4 mr-2 text-tech-primary" />
                WordPress
              </TabsTrigger>
              <TabsTrigger value="general" className="data-[state=active]:bg-tech-primary">
                <Settings className="w-4 h-4 mr-2 text-tech-primary" />
                Geral
              </TabsTrigger>
              <TabsTrigger value="seo" className="data-[state=active]:bg-tech-primary">
                <Search className="w-4 h-4 mr-2 text-tech-primary" />
                SEO
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-tech-primary">
                <BarChart3 className="w-4 h-4 mr-2 text-tech-primary" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-tech-primary">
                <Share2 className="w-4 h-4 mr-2 text-tech-primary" />
                Social
              </TabsTrigger>
              <TabsTrigger value="design" className="data-[state=active]:bg-tech-primary">
                <Palette className="w-4 h-4 mr-2 text-tech-primary" />
                Design
              </TabsTrigger>
              <TabsTrigger value="forms" className="data-[state=active]:bg-tech-primary">
                <Mail className="w-4 h-4 mr-2 text-tech-primary" />
                Formulários
              </TabsTrigger>
            </TabsList>

            {/* WordPress Tab */}
            <TabsContent value="wordpress">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Configuration */}
                <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-tech-primary" />
                      Configuração WordPress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="wp-url" className="text-gray-300">
                        URL da API WordPress
                      </Label>
                      <Input
                        id="wp-url"
                        value={wpConfig.apiUrl}
                        onChange={(e) => setWpConfig({...wpConfig, apiUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://seublog.com/wp-json/wp/v2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="wp-username" className="text-gray-300">
                        Username (opcional)
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
                        Password/Token (opcional)
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

                    <div className="flex gap-2">
                      <Button 
                        onClick={handleSaveConfig}
                        className="bg-tech-primary hover:bg-tech-primary/90"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Salvar
                      </Button>
                      <Button 
                        onClick={handleTestConnection}
                        variant="outline"
                        className="border-tech-primary text-tech-primary"
                        disabled={connectionStatus === 'testing'}
                      >
                        <TestTube className="w-4 h-4 mr-2" />
                        Testar
                      </Button>
                    </div>

                    {connectionStatus !== 'idle' && (
                      <div className="flex items-center gap-2">
                        {connectionStatus === 'testing' && (
                          <RefreshCw className="w-4 h-4 animate-spin text-tech-primary" />
                        )}
                        {connectionStatus === 'success' && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        {connectionStatus === 'error' && (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm text-gray-300">
                          {connectionStatus === 'testing' && 'Testando conexão...'}
                          {connectionStatus === 'success' && 'Conexão estabelecida'}
                          {connectionStatus === 'error' && 'Erro na conexão'}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Posts */}
                <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white">Posts do WordPress</CardTitle>
                      <Button
                        onClick={syncPosts}
                        size="sm"
                        disabled={isSync || !config.apiUrl}
                        className="bg-tech-primary hover:bg-tech-primary/90"
                      >
                        <RefreshCw className={`w-4 h-4 mr-2 ${isSync ? 'animate-spin' : ''}`} />
                        Sincronizar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {posts.length === 0 ? (
                      <div className="text-center py-8">
                        <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">
                          {config.apiUrl ? 'Nenhum post encontrado' : 'Configure a API do WordPress'}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {posts.slice(0, 10).map((post) => (
                          <div key={post.id} className="border border-tech-lightGray/20 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-white font-medium text-sm">
                                {post.title.rendered.replace(/<[^>]*>/g, '')}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {post.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.date).toLocaleDateString('pt-BR')}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                ID: {post.id}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* General Tab */}
            <TabsContent value="general">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-tech-primary" />
                    Configurações Gerais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="site-title" className="text-gray-300">
                      Título do Site
                    </Label>
                    <Input
                      id="site-title"
                      value={siteConfig.siteTitle || wpConfig.siteTitle || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, siteTitle: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="DMC IT Solutions"
                    />
                  </div>

                  <div>
                    <Label htmlFor="site-description" className="text-gray-300">
                      Descrição do Site
                    </Label>
                    <Textarea
                      id="site-description"
                      value={siteConfig.siteDescription || wpConfig.siteDescription || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, siteDescription: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="Especialistas em DevOps, automações, infraestrutura em nuvem"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Search className="w-5 h-5 mr-2 text-tech-primary" />
                    SEO & Meta Tags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="meta-keywords" className="text-gray-300">
                      Palavras-chave (Meta Keywords)
                    </Label>
                    <Input
                      id="meta-keywords"
                      value={siteConfig.metaKeywords || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, metaKeywords: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="DevOps, Cloud, AWS, GCP, Automação, IA"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={siteConfig.generateSitemap}
                      onCheckedChange={(checked) => setSiteConfig({...siteConfig, generateSitemap: checked})}
                    />
                    <Label className="text-gray-300">Gerar Sitemap automaticamente</Label>
                  </div>

                  <div>
                    <Label htmlFor="robots-txt" className="text-gray-300">
                      Robots.txt
                    </Label>
                    <Textarea
                      id="robots-txt"
                      value={siteConfig.robotsTxt || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, robotsTxt: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white font-mono text-sm"
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-tech-primary" />
                    Analytics & Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="google-analytics" className="text-gray-300">
                      Google Analytics ID
                    </Label>
                    <Input
                      id="google-analytics"
                      value={siteConfig.googleAnalyticsId || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, googleAnalyticsId: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="G-XXXXXXXXXX"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="matomo-url" className="text-gray-300">
                        Matomo URL
                      </Label>
                      <Input
                        id="matomo-url"
                        value={siteConfig.matomoUrl || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, matomoUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://analytics.exemplo.com/"
                      />
                    </div>
                    <div>
                      <Label htmlFor="matomo-site-id" className="text-gray-300">
                        Matomo Site ID
                      </Label>
                      <Input
                        id="matomo-site-id"
                        value={siteConfig.matomoSiteId || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, matomoSiteId: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="plausible-domain" className="text-gray-300">
                      Plausible Domain
                    </Label>
                    <Input
                      id="plausible-domain"
                      value={siteConfig.plausibleDomain || ''}
                      onChange={(e) => setSiteConfig({...siteConfig, plausibleDomain: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="exemplo.com"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Social Tab */}
            <TabsContent value="social">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                  <CardHeader>
                    <CardTitle className="text-white">Links das Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="facebook-url" className="text-gray-300">Facebook</Label>
                      <Input
                        id="facebook-url"
                        value={siteConfig.facebookUrl || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, facebookUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://facebook.com/empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter-url" className="text-gray-300">Twitter</Label>
                      <Input
                        id="twitter-url"
                        value={siteConfig.twitterUrl || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, twitterUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://twitter.com/empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram-url" className="text-gray-300">Instagram</Label>
                      <Input
                        id="instagram-url"
                        value={siteConfig.instagramUrl || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, instagramUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://instagram.com/empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin-url" className="text-gray-300">LinkedIn</Label>
                      <Input
                        id="linkedin-url"
                        value={siteConfig.linkedinUrl || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, linkedinUrl: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://linkedin.com/company/empresa"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                  <CardHeader>
                    <CardTitle className="text-white">Open Graph & Social Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="og-title" className="text-gray-300">Título para Redes Sociais</Label>
                      <Input
                        id="og-title"
                        value={siteConfig.ogTitle || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, ogTitle: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="DMC IT Solutions - DevOps e Cloud"
                      />
                    </div>
                    <div>
                      <Label htmlFor="og-description" className="text-gray-300">Descrição para Redes Sociais</Label>
                      <Textarea
                        id="og-description"
                        value={siteConfig.ogDescription || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, ogDescription: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="og-image" className="text-gray-300">URL da Imagem de Compartilhamento</Label>
                      <Input
                        id="og-image"
                        value={siteConfig.ogImage || ''}
                        onChange={(e) => setSiteConfig({...siteConfig, ogImage: e.target.value})}
                        className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                        placeholder="https://exemplo.com/imagem.jpg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Design Tab */}
            <TabsContent value="design">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-tech-primary" />
                    Personalização Visual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primary-color" className="text-gray-300">Cor Primária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={siteConfig.primaryColor || '#3B82F6'}
                          onChange={(e) => setSiteConfig({...siteConfig, primaryColor: e.target.value})}
                          className="w-16 h-10 bg-tech-dark/50 border-tech-lightGray/30"
                        />
                        <Input
                          value={siteConfig.primaryColor || '#3B82F6'}
                          onChange={(e) => setSiteConfig({...siteConfig, primaryColor: e.target.value})}
                          className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                          placeholder="#3B82F6"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="secondary-color" className="text-gray-300">Cor Secundária</Label>
                      <div className="flex gap-2">
                        <Input
                          id="secondary-color"
                          type="color"
                          value={siteConfig.secondaryColor || '#1E40AF'}
                          onChange={(e) => setSiteConfig({...siteConfig, secondaryColor: e.target.value})}
                          className="w-16 h-10 bg-tech-dark/50 border-tech-lightGray/30"
                        />
                        <Input
                          value={siteConfig.secondaryColor || '#1E40AF'}
                          onChange={(e) => setSiteConfig({...siteConfig, secondaryColor: e.target.value})}
                          className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                          placeholder="#1E40AF"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="font-family" className="text-gray-300">Família da Fonte</Label>
                    <select
                      value={siteConfig.fontFamily || 'Inter'}
                      onChange={(e) => setSiteConfig({...siteConfig, fontFamily: e.target.value})}
                      className="w-full bg-tech-dark/50 border border-tech-lightGray/30 text-white rounded-md px-3 py-2"
                    >
                      <option value="Inter">Inter</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Open Sans">Open Sans</option>
                      <option value="Lato">Lato</option>
                      <option value="Montserrat">Montserrat</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="theme" className="text-gray-300">Tema</Label>
                    <select
                      value={siteConfig.theme || 'dark'}
                      onChange={(e) => setSiteConfig({...siteConfig, theme: e.target.value})}
                      className="w-full bg-tech-dark/50 border border-tech-lightGray/30 text-white rounded-md px-3 py-2"
                    >
                      <option value="dark">Escuro</option>
                      <option value="light">Claro</option>
                      <option value="auto">Automático</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-tech-primary" />
                    Configuração de Formulários
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={siteConfig.contactFormEnabled}
                      onCheckedChange={(checked) => setSiteConfig({...siteConfig, contactFormEnabled: checked})}
                    />
                    <Label className="text-gray-300">Habilitar formulário de contato</Label>
                  </div>

                  {siteConfig.contactFormEnabled && (
                    <div className="space-y-4 p-4 border border-tech-lightGray/20 rounded-lg">
                      <div>
                        <Label htmlFor="contact-email" className="text-gray-300">
                          Email de destino
                        </Label>
                        <Input
                          id="contact-email"
                          value={siteConfig.contactFormEmail || ''}
                          onChange={(e) => setSiteConfig({...siteConfig, contactFormEmail: e.target.value})}
                          className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                          placeholder="contato@empresa.com"
                        />
                      </div>

                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                        <h4 className="text-yellow-400 font-medium mb-2">⚠️ Configuração SMTP</h4>
                        <p className="text-gray-300 text-sm">
                          Para funcionalidade completa de envio de emails, será necessário configurar um servidor SMTP ou serviço como Resend. 
                          Esta funcionalidade requer edge functions e será implementada em uma próxima etapa.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Button 
              onClick={handleSaveConfig}
              className="bg-tech-primary hover:bg-tech-primary/90"
              size="lg"
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar Todas as Configurações
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Management
