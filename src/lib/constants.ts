export const getCompanyInfo = () => {
  const saved = localStorage.getItem('wp-config')
  const config = saved ? JSON.parse(saved) : {}
  
  return {
    name: config.siteTitle || "DMC IT Solutions",
    domain: "dmcitsolutions.com",
    description: config.siteDescription || "Especialistas em DevOps, automações, infraestrutura em nuvem, integração de sistemas e IA aplicada",
    email: "contato@dmcitsolutions.com",
    phone: "+55 (45) 988321566",
    whatsapp: "5545988321566",
    address: "Belo Horizonte, MG - Brasil"
  }
}

export const COMPANY_INFO = {
  name: "DMC IT Solutions",
  domain: "dmcitsolutions.com",
  description: "Especialistas em DevOps, automações, infraestrutura em nuvem, integração de sistemas e IA aplicada",
  email: "contato@dmcitsolutions.com",
  phone: "+55 (45) 988321566",
  whatsapp: "5545988321566",
  address: "Belo Horizonte, MG - Brasil",
  cnpj: "55.670.086/0001-51"
};

export const NAVIGATION_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "#services" },
  { name: "Produtos", href: "#products" },
  { name: "Cases", href: "#cases" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "#contact" }
];

export const SERVICES = [
  {
    title: "Cloud Migration",
    description: "Realize uma verdadeira jornada para cloud com nossos serviços de migração, minimizando o tempo de inatividade e garantindo eficiência.",
    icon: "cloud"
  },
  {
    title: "Cloud Consulting",
    description: "Independentemente de seu estágio na jornada para cloud, oferecemos o melhor serviço de consultoria prestando um suporte completo e personalizado.",
    icon: "consulting"
  },
  {
    title: "Cloud Optimization",
    description: "Otimize sua infraestrutura na nuvem para operar de forma eficiente e econômica, com análise de desempenho e gestão de custos.",
    icon: "optimization"
  },
  {
    title: "Gerenciamento de Cloud",
    description: "Deixe a DMC cuidar de seu ambiente de cloud, com monitoramento contínuo, manutenção proativa e suporte técnico para máxima eficiência.",
    icon: "management"
  },
  {
    title: "Data/GenAI",
    description: "Transforme dados em insights acionáveis e aproveite a GenAI para impulsionar a inovação e a tomada de decisões.",
    icon: "ai"
  },
  {
    title: "Cloud Modernization",
    description: "Modernize sua infraestrutura com as melhores práticas e tecnologias mais recentes do mercado.",
    icon: "modernization"
  },
  {
    title: "Cybersecurity",
    description: "Proteja seu ambiente digital com soluções de segurança robustas e monitoramento contínuo.",
    icon: "security"
  },
  {
    title: "Outsourcing",
    description: "Terceirize suas operações de TI com nossa equipe especializada e foque no core business da sua empresa.",
    icon: "outsourcing"
  }
];

export const TECH_STACK = [
  {
    category: "Containerização & Orquestração",
    technologies: ["Docker", "Kubernetes", "NGINX", "Linux"]
  },
  {
    category: "Cloud Providers",
    technologies: ["AWS", "GCP", "DigitalOcean", "Hetzner"]
  },
  {
    category: "Desenvolvimento",
    technologies: ["Node.js", "Python", "Bash", "GitHub Actions"]
  },
  {
    category: "Automação & IA",
    technologies: ["N8N", "OpenAI", "Agentes de IA", "Ansible"]
  },
  {
    category: "Monitoramento",
    technologies: ["Grafana", "Prometheus", "Loki", "Signoz"]
  },
  {
    category: "CI/CD",
    technologies: ["GitHub Actions", "GitLab CI/CD", "Terraform"]
  },
  {
    category: "Self-hosted Solutions",
    technologies: ["Cloudstack", "Dokploy", "Coolify", "KVM"]
  },
  {
    category: "Virtualização",
    technologies: ["KVM", "Virtualização", "VMware Alternatives"]
  }
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/dmc-it-solutions",
  github: "https://github.com/dmc-it-solutions",
  twitter: "https://twitter.com/dmcitsolutions"
};
