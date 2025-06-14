// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

// ===================== Cultura de Inovação =====================
export const feature2 = {
  heading: 'Cultura de Inovação',
  caption: 'Na AIFit.pro, acreditamos no poder da tecnologia aliada ao toque humano. Nosso ambiente estimula criatividade, testes e evolução constante.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Colaboração',
      content: 'Conectamos nutrição, educação física e tecnologia em um time multidisciplinar.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusividade',
      content: 'Nossa plataforma respeita diferentes estilos de atendimento e formas de trabalho.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Evolução Contínua',
      content: 'Adicionamos melhorias frequentes com base em feedback real dos profissionais.'
    }
  ]
};

// ===================== Benefícios Além da Plataforma =====================
export const feature5 = {
  heading: 'Muito além da criação de planos',
  caption: 'Funcionalidades pensadas para facilitar sua rotina e ampliar sua atuação.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Monetização Inteligente',
      content: 'Aproveite cupons, integrações e canais automatizados para gerar receita.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Foco na Saúde',
      content: 'Crie planos seguros, com orientações e limites validados por profissionais.'
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Escala Automatizada',
      content: 'Reduza tarefas manuais com geração automática de protocolos e envio por WhatsApp.'
    },
    {
      icon: 'tabler-users',
      title: 'Conectado com seus Clientes',
      content: 'Acompanhe feedbacks, adesão e adaptação dos planos em tempo real.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: 'Mais de 10.000 avaliações (nota média 4.8)'
  },
  content: 'Na AIFit.pro, você transforma seu atendimento em uma operação escalável com sua identidade.',
  actionBtn: { children: 'Ver Todos os Recursos', href: '#' }
};

// ===================== Tudo em Uma Só Plataforma =====================
export const feature20 = {
  heading: 'Tudo que você precisa em apenas uma plataforma',
  caption: 'Pronto para escalar seus atendimentos de forma hiperpersonalizada?',
  actionBtn: { children: 'Adquira Agora!', href: BUY_NOW_URL, ...linkProps },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'Planos Gerados por IA em Segundos',
      content: 'Monte fichas completas de dieta e treino com base em objetivos gerais (ex: emagrecimento) ou específicos (ex: cutting com treino ABC). Rápido, preciso e com a sua assinatura.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'Templates Inteligentes que Aprendem com Você',
      content: 'Salve seu estilo de atendimento e permita que a IA sugira planos cada vez mais alinhados com sua abordagem.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'Envio Automático via WhatsApp',
      content: 'Protocolo pronto? Envie direto ao cliente no WhatsApp em formato texto, imagem ou PDF. Zero retrabalho.'
    },
    {
      icon: 'tabler-rocket',
      title: 'Feedback e Adaptação Contínua com IA',
      content: 'A IA analisa resposta dos clientes, adesão e progresso — ajudando você a ajustar as recomendações com base em dados.'
    },
    {
      icon: 'tabler-help',
      title: 'Escale Seu Atendimento com IA',
      content: 'Multiplique sua capacidade de atendimento sem perder qualidade. A automação cuida do operacional e você do estratégico.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Painel de Resultados',
      content: 'Monitore performance nutricional, corporal e operacional em tempo real com gráficos claros e acionáveis.'
    }
  ]
};

// ===================== Design & Ferramentas =====================
export const feature21 = {
  heading: `Design rápido e inteligente com ${branding.brandName} Figma`,
  caption: 'Desbloqueie templates e componentes avançados para criar interfaces SaaS responsivas e escaláveis.',
  features: [
    { animationDelay: 0.1, icon: 'tabler-components', title: 'Arquitetura de Componentes' },
    { animationDelay: 0.2, icon: 'tabler-moon', title: 'Modo Escuro' },
    { animationDelay: 0.3, icon: 'tabler-brightness-auto', title: 'Auto Layout' },
    { animationDelay: 0.4, icon: 'tabler-accessible', title: 'Acessibilidade WCAG' },
    { animationDelay: 0.1, icon: 'tabler-icons', title: 'Ícones Customizados' },
    { animationDelay: 0.2, icon: 'tabler-file-stack', title: 'Demonstrações de Páginas' },
    { animationDelay: 0.3, icon: 'tabler-brand-matrix', title: 'Guia Material 3' },
    { animationDelay: 0.4, icon: 'tabler-click', title: 'Personalização Rápida' }
  ]
};

// ===================== Plus Version =====================
export const feature = {
  heading: `O que vem no ${branding.brandName} Plus`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Estrutura pré-configurada para projetos React acessíveis.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'SEO e performance otimizadas para produção.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Tipagem completa e robusta com Material 3.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Roteamento e API Routes com tipagem.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Kit Figma',
      content: 'Componentes e layouts prontos para suas telas.'
    },
    {
      title: 'Confira os Planos',
      content: 'Escolha o plano ideal para seu negócio.',
      actionBtn: { children: 'Planos e Preços', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

// ===================== Insights em Tempo Real =====================
export const feature7 = {
  heading: 'Insights em Tempo Real',
  caption: 'Acompanhe métricas de desempenho instantaneamente, tomando decisões mais ágeis.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Valor Central',
          content: 'Monitoramento contínuo para estratégias proativas.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Orquestração Multi-Cloud',
          content: 'Flexibilidade e resiliência em múltiplos provedores.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Histórico',
          content: 'Acesse dados passados para entender tendências.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Insights' }, { title: 'Real-Time' }]
};

// ===================== Extras de Cultura =====================
export const feature23 = {
  heading: 'Cultura de Excelência',
  caption: 'Promovemos um ambiente de aprendizado constante e colaboração entre equipes.',
  features: [
    {
      icon: 'tabler-users',
      title: 'Trabalho em Equipe',
      content: 'Compartilhamos conhecimento para crescer juntos.'
    },
    {
      icon: 'tabler-star',
      title: 'Reconhecimento',
      content: 'Valorizamos e celebramos cada conquista.'
    }
  ],
  primaryBtn: { children: 'Junte-se a nós', href: '#' }
};

// ===================== Painel Administrativo =====================
export const feature18 = {
  heading: 'Administre clientes ponta a ponta',
  caption: 'Com o painel da AIFit.pro, gerencie cada etapa do atendimento de forma centralizada e escalável.',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: 'Visão 360°',
      description: 'Histórico completo, métricas de adesão e feedback em um só lugar.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Acessar Dashboard', href: ADMIN_PATH, ...linkProps }
    },
    {
      icon: 'tabler-palette',
      title: 'Customização',
      description: 'Ajuste protocolos, limites e visual conforme seu método.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      actionBtn: { children: 'Editar Protocolos', href: ADMIN_PATH, ...linkProps }
    },
    {
      icon: 'tabler-rocket',
      title: 'Envio Instantâneo',
      description: 'Dispare planos via WhatsApp ou exporte em PDF/Imagem.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      actionBtn: { children: 'Configurar Integrações', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-scale',
      title: 'Automação Inteligente',
      description: 'Reduza tarefas repetitivas e foque no crescimento do seu negócio.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      actionBtn: { children: 'Ver Seção de Plugins', href: SECTION_PATH, ...linkProps }
    }
  ]
};
