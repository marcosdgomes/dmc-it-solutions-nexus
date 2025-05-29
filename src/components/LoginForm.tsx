
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { Loader2, Lock } from 'lucide-react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      toast({
        title: "Erro no login",
        description: error.message,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel de gerenciamento.",
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-tech-dark flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-tech-gray/50 border-tech-lightGray/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-tech-primary rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-white text-2xl">
            <span className="gradient-text">DMC</span> Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-300">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-tech-dark/50 border-tech-lightGray/30 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-tech-primary hover:bg-tech-primary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Fazendo login...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginForm
