
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
  Settings
} from 'lucide-react'

const Management = () => {
  const { user, loading, signOut } = useAuth()
  const { posts, config, saveConfig, testConnection, syncPosts, isSync } = useWordPress()
  const { toast } = useToast()

  const [wpConfig, setWpConfig] = useState(config)
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')

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
    saveConfig(wpConfig)
    toast({
      title: "Configurações salvas!",
      description: "Configuração do WordPress atualizada com sucesso.",
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
              <TabsTrigger value="site" className="data-[state=active]:bg-tech-primary">
                <Settings className="w-4 h-4 mr-2 text-tech-primary" />
                Site Config
              </TabsTrigger>
            </TabsList>

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

            <TabsContent value="site">
              <Card className="bg-tech-gray/50 border-tech-lightGray/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-tech-primary" />
                    Configurações do Site
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="site-title" className="text-gray-300">
                      Título do Site
                    </Label>
                    <Input
                      id="site-title"
                      value={wpConfig.siteTitle || ''}
                      onChange={(e) => setWpConfig({...wpConfig, siteTitle: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="DMC IT Solutions"
                    />
                    <p className="text-gray-400 text-sm mt-1">
                      Este título aparecerá no header e em outras partes do site
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="site-description" className="text-gray-300">
                      Descrição do Site (SEO)
                    </Label>
                    <Textarea
                      id="site-description"
                      value={wpConfig.siteDescription || ''}
                      onChange={(e) => setWpConfig({...wpConfig, siteDescription: e.target.value})}
                      className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                      placeholder="Especialistas em DevOps, automações, infraestrutura em nuvem"
                      rows={3}
                    />
                    <p className="text-gray-400 text-sm mt-1">
                      Esta descrição aparecerá nos resultados do Google e redes sociais
                    </p>
                  </div>

                  <Button 
                    onClick={handleSaveConfig}
                    className="bg-tech-primary hover:bg-tech-primary/90"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Configurações
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Management
