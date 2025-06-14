// @project
import { Pricing9 } from '@/blocks/pricing';
import { BUY_NOW_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  PRICING 9 - DATA  ***************************/

const data = {
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
    { id: 10, label: 'Plugins Avançados (em breve)' }
  ],
  plans: [
    {
      title: 'Starter',
      price: 'R$ 39,90',
      active: false,
      featureTitle: 'Para começar com controle',
      exploreLink: { children: 'Assinar Starter', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      title: 'Pro',
      price: 'R$ 119,90',
      active: false,
      featureTitle: 'Para profissionais em crescimento',
      exploreLink: { children: 'Assinar Pro', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      title: 'Time',
      price: 'R$ 249,90',
      active: false,
      featureTitle: 'Para equipes com identidade',
      exploreLink: { children: 'Assinar Time', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      title: 'Escala',
      price: 'R$ 532,80',
      active: true,
      featureTitle: 'Para escalar com inteligência',
      exploreLink: { children: 'Assinar Escala', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};

/***************************  BLOCK - PRICING 9  ***************************/

export default function BlockPricing9() {
  return <Pricing9 {...data} />;
}
