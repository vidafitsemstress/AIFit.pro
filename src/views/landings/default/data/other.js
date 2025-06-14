// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @project
import branding from '@/branding.json';

export const other = {
  heading: `${branding.brandName} Plugins`,
  description: 'Expanda seu AIFit.pro com funcionalidades adicionais pensadas para potencializar sua entrega.',
  primaryBtn: { children: 'Ver plugins disponíveis', href: SECTION_PATH },

  sections: [
    {
      animationDelay: 0.2,
      title: 'Contador de Calorias',
      subTitle: 'Controle a ingestão calórica com apoio de recursos inteligentes e integrados à IA.',
      image: '/assets/images/images/Imagem (7).png',
      link: PAGE_PATH.hero,
      imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    },
    {
      animationDelay: 0.3,
      title: 'Meus Cupons',
      subTitle: 'Organize, crie e divulgue cupons promocionais como ferramenta estratégica de fidelização.',
      image: '/assets/images/images/Imagem (8).png',
      link: PAGE_PATH.cta,
      imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    },
    {
      animationDelay: 0.4,
      title: 'Vídeos tutoriais',
      subTitle: 'Melhore a experiência dos seus clientes com vídeos guiados sobre dieta, treino e execução técnica.',
      image: '/assets/images/images/Imagem (9).png',
      link: PAGE_PATH.feature,
      imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }
  ]
};

export const other3 = {
  heading: 'Junte-se ao time AIFit.pro',
  caption: 'Participe de um ecossistema em crescimento que valoriza colaboração, inovação e impacto real no mercado de saúde e performance.',
  other: [
    {
      title: 'Designer de Produto',
      description: 'Buscamos um designer criativo e centrado no usuário para evoluir nossas interfaces.',
      chips: [
        { icon: 'tabler-map-pin', name: 'Remoto' },
        { icon: 'tabler-history', name: 'Tempo Integral' }
      ],
      btn: { children: 'Ver vaga', href: '#' }
    },
    {
      title: 'Desenvolvedor Front-End',
      description: 'Buscamos profissionais com experiência em React e interfaces modernas para construir experiências ricas.',
      chips: [
        { icon: 'tabler-map-pin', name: 'Remoto' },
        { icon: 'tabler-history', name: 'Tempo Integral' }
      ],
      btn: { children: 'Ver vaga', href: '#' }
    },
    {
      title: 'Desenvolvedor Back-End',
      description: 'Ajude a construir e escalar as APIs e motores de personalização por trás do AIFit.pro.',
      chips: [
        { icon: 'tabler-map-pin', name: 'Remoto' },
        { icon: 'tabler-history', name: 'Tempo Integral' }
      ],
      btn: { children: 'Ver vaga', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'Lidere times ágeis focados em entregar valor contínuo para profissionais de saúde e seus clientes.',
      chips: [
        { icon: 'tabler-map-pin', name: 'Remoto' },
        { icon: 'tabler-history', name: 'Tempo Integral' }
      ],
      btn: { children: 'Ver vaga', href: '#' }
    }
  ]
};
