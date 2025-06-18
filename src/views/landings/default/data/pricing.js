import { BUY_NOW_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const pricing = {
  heading: 'Planos sob medida para seu crescimento',
  caption: 'Escalone seus atendimentos com inteligência e personalização.',
  features: [
    { id: 1, label: 'Criação de Dietas com IA' },
    { id: 2, label: 'Criação de Treinos com IA' },
    { id: 3, label: 'Protocolos Alimentares e de Exercícios' },
    { id: 4, label: 'Preferências Personalizadas por Empresa' },
    { id: 5, label: 'Upload de Protocolos Existentes' },
    { id: 6, label: 'Chatbot Integrado via WhatsApp' },
    { id: 7, label: 'Painel de Clientes com Indicadores' },
    { id: 8, label: 'Personalização com Logo e Cores' },
    { id: 9, label: 'Estilo de Comunicação da IA' },
    { id: 10, label: 'Plugins Avançados (em breve)' },
  ],
  plans: [
    {
      title: 'Starter',
      price: 'R$ 39,90',
      active: false,
      featureTitle: 'Para começar com controle',
      content: 'Ideal para coaches que estão estruturando seus atendimentos digitais.',
      exploreLink: { children: 'Assinar Starter', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      title: 'Pro',
      price: 'R$ 119,90',
      active: false,
      featureTitle: 'Para profissionais em crescimento',
      content: 'Tudo o que você precisa para entregar planos únicos com eficiência.',
      exploreLink: { children: 'Assinar Pro', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      title: 'Time',
      price: 'R$ 532,90',
      active: false,
      featureTitle: 'Para equipes com identidade',
      content: 'Adicione identidade visual, compartilhe preferências e acompanhe seu time.',
      exploreLink: { children: 'Assinar Time', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  ]
};
