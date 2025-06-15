
# DMC IT Solutions - Corporate Website

![DMC IT Solutions](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop)

## 📋 Visão Geral

A **DMC IT Solutions** é uma plataforma web corporativa moderna desenvolvida para empresas especializadas em DevOps, Cloud Computing e Automação. O projeto oferece uma solução completa com integração ao WordPress para gerenciamento de conteúdo, painel administrativo avançado e otimizações de SEO.

### 🎯 Objetivos

- Criar uma presença digital profissional e moderna
- Integrar seamlessly com sistemas WordPress existentes
- Fornecer ferramentas de gestão de conteúdo e configuração
- Otimizar para SEO e performance
- Garantir responsividade e acessibilidade

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **shadcn/ui** - Biblioteca de componentes
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones

### Backend & Integrações
- **Supabase** - Backend-as-a-Service (Auth, Database)
- **WordPress REST API** - Gerenciamento de conteúdo
- **TanStack Query** - Gerenciamento de estado e cache

### Analytics & SEO
- **Google Analytics** - Rastreamento de tráfego
- **Matomo** - Analytics alternativo
- **Plausible** - Analytics privacy-first
- **Open Graph** - Meta tags para redes sociais

## 🏗️ Arquitetura do Sistema

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho principal
│   ├── Footer.tsx      # Rodapé
│   └── ...             # Outros componentes
├── pages/              # Páginas principais
│   ├── Index.tsx       # Página inicial
│   ├── Blog.tsx        # Listagem de posts
│   ├── BlogPost.tsx    # Post individual
│   ├── Management.tsx  # Painel administrativo
│   └── DmcAdmin.tsx    # Admin legado
├── hooks/              # Hooks customizados
│   ├── useAuth.tsx     # Autenticação
│   ├── useWordPress.tsx # Integração WordPress
│   └── use-toast.ts    # Notificações
├── lib/                # Utilitários e configurações
│   ├── supabase.ts     # Cliente Supabase
│   ├── constants.ts    # Constantes do projeto
│   └── utils.ts        # Funções utilitárias
└── integrations/       # Integrações externas
    └── supabase/       # Configurações Supabase
```

## ✨ Funcionalidades Implementadas

### 🏠 Website Institucional
- **Página inicial** com seções modernas (Hero, Sobre, Serviços, Stack Tecnológico)
- **Design responsivo** otimizado para mobile e desktop
- **Animações** e efeitos visuais profissionais
- **Formulário de contato** integrado

### 📝 Sistema de Blog
- **Integração WordPress** via REST API
- **Listagem dinâmica** de posts com paginação
- **Páginas individuais** para cada post
- **Filtros por categoria** dinâmicos
- **Busca** em tempo real
- **Imagens featured** do WordPress
- **Meta dados** completos (autor, data, tags)

### ⚙️ Painel Administrativo
- **Gestão de configurações** centralizadas
- **Integração WordPress** (URL, credenciais, sincronização)
- **Configurações SEO** (meta tags, sitemap, robots.txt)
- **Analytics** (Google Analytics, Matomo, Plausible)
- **Redes sociais** (links, Open Graph)
- **Design** (cores, fontes, temas)
- **Formulários** (configuração SMTP - planejado)

### 🔍 SEO & Analytics
- **Meta tags dinâmicas** configuráveis
- **Open Graph** para redes sociais
- **Sitemap** automático
- **Robots.txt** customizável
- **Múltiplas plataformas** de analytics
- **Google Analytics 4** integrado

### 🔐 Autenticação
- **Supabase Auth** integrado
- **Login/Signup** com email/senha
- **Gerenciamento de sessão** automático
- **Redirecionamentos** inteligentes

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta Supabase (opcional)
- WordPress com REST API (opcional)

### 1. Clonação e Instalação
```bash
git clone <URL_DO_REPOSITORIO>
cd dmc-it-solutions
npm install
```

### 2. Configuração de Ambiente
O projeto usa configurações dinâmicas via localStorage. Acesse `/management` para configurar:

- **WordPress API** (URL, credenciais)
- **SEO** (título, descrição, meta tags)
- **Analytics** (Google Analytics, Matomo, Plausible)
- **Redes Sociais** (links, Open Graph)

### 3. Supabase (Opcional)
```typescript
// src/lib/supabase.ts
const supabaseUrl = 'SUA_URL_SUPABASE'
const supabaseAnonKey = 'SUA_CHAVE_ANONIMA'
```

### 4. Execução
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview
```

## 🧪 Testes

```bash
# Executar testes (quando implementados)
npm run test

# Testes com cobertura
npm run test:coverage

# Testes E2E
npm run test:e2e
```

## 📖 Guia de Uso

### Configuração Inicial
1. Acesse `/management`
2. Configure a integração WordPress na aba "WordPress"
3. Defina configurações gerais na aba "Geral"
4. Configure SEO na aba "SEO"
5. Adicione analytics na aba "Analytics"

### Gerenciamento de Conteúdo
- Posts são sincronizados automaticamente do WordPress
- Categorias são importadas dinamicamente
- Imagens featured são exibidas corretamente
- Filtros funcionam em tempo real

### Personalização
- Altere cores e fontes na aba "Design"
- Configure links sociais na aba "Social"
- Ajuste meta tags para SEO

## 🔌 Integrações Externas

### WordPress REST API
```typescript
// Endpoint padrão
https://seusite.com/wp-json/wp/v2/

// Autenticação básica suportada
Authorization: Basic <base64(username:password)>
```

### Supabase
- **Autenticação**: Email/senha
- **Database**: PostgreSQL com RLS
- **Realtime**: Atualizações em tempo real

### Analytics
- **Google Analytics 4**: Rastreamento automático
- **Matomo**: Self-hosted analytics
- **Plausible**: Privacy-focused analytics

## 🔒 Segurança e Boas Práticas

### Autenticação
- Tokens JWT gerenciados pelo Supabase
- Row Level Security (RLS) no banco
- Sessões persistentes seguras

### Dados Sensíveis
- Configurações salvas no localStorage
- API keys não expostas no frontend
- HTTPS obrigatório em produção

### Performance
- Code splitting automático
- Lazy loading de componentes
- Cache inteligente com TanStack Query
- Otimização de imagens

## 🤝 Como Contribuir

### 1. Fork e Clone
```bash
git clone https://github.com/seuusuario/dmc-it-solutions
cd dmc-it-solutions
```

### 2. Crie uma Branch
```bash
git checkout -b feature/nova-funcionalidade
```

### 3. Desenvolva e Teste
```bash
npm run dev
npm run test
```

### 4. Commit e Push
```bash
git commit -m "feat: adiciona nova funcionalidade"
git push origin feature/nova-funcionalidade
```

### 5. Abra um Pull Request

### Padrões de Código
- **TypeScript** obrigatório
- **ESLint** configurado
- **Prettier** para formatação
- **Conventional Commits**

## 🗺️ Roadmap

### Próximas Funcionalidades
- [ ] **Sistema de envio de emails** via SMTP
- [ ] **Dashboard analytics** integrado
- [ ] **Editor de páginas** visual
- [ ] **Sistema de comentários**
- [ ] **Multi-idioma** (i18n)
- [ ] **PWA** (Progressive Web App)
- [ ] **Modo offline**
- [ ] **Testes automatizados** completos

### Melhorias Técnicas
- [ ] **Micro-frontends** architecture
- [ ] **CI/CD** pipeline
- [ ] **Docker** containerization
- [ ] **Monitoring** e alertas
- [ ] **CDN** integration
- [ ] **A/B testing** framework

## 📊 Métricas e Performance

### Lighthouse Score (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🐛 Troubleshooting

### Problemas Comuns

**WordPress não conecta:**
- Verifique URL da API
- Confirme credenciais
- Teste CORS settings

**Build falha:**
- Limpe node_modules: `rm -rf node_modules && npm install`
- Verifique versões Node.js
- Rode `npm run build` localmente

**Supabase auth não funciona:**
- Configure redirect URLs
- Verifique Site URL settings
- Confirme RLS policies

## 📞 Contato e Suporte

### Equipe de Desenvolvimento
- **Email**: dev@dmcitsolutions.com
- **Website**: https://dmcitsolutions.com
- **LinkedIn**: https://linkedin.com/company/dmc-it-solutions

### Documentação Adicional
- [Supabase Docs](https://supabase.com/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**DMC IT Solutions** - Transformando infraestrutura com DevOps, Cloud e IA aplicada.

*Desenvolvido com ❤️ pela equipe DMC IT Solutions*
