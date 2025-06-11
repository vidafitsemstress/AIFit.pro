// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Todos estes recursos para você',
  captionLine: 'Da automação à gestão, veja como nosso sistema conecta nutrição, treino, atendimento e performance em um só lugar.',
  primaryBtn: {
    children: 'Adquire Agora!',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Gestão de Protocolos de Dieta' },
    { label: 'Personalização de Treinos' },
    { label: 'Atendimento Inteligente (Chatbot/WhatsApp)' },
    { label: 'Gestão de Clientes e Evolução' },
    { label: 'Painel de Progresso e Resultados' },
    { label: 'Gestão de Suplementação' },
    { label: 'Configuração White-label' },
    { label: 'Automação de Relatórios' },
    { label: 'Integração com IA para Personalização' },
    { label: 'Gestão de Templates de Protocolos' },
    { label: 'Dashboard de Performance' },
    { label: 'Envio Automático de Planos' },
    { label: 'Feedback e Adesão dos Clientes' },
    { label: 'Gestão de Preferências de Coach' },
    { label: 'Integração com Marketing Digital' }
  ]
};