// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';

export const other = {
   heading: `${branding.brandName} Plugins `,
   description: 'Em breve, plugins para ampliar as funcionalidades do seu AIFit.',
   primaryBtn: { children: 'Acessar plugins', href: SECTION_PATH },
  
  sections: [
    {
      animationDelay: 0.2,
      title: 'Contador de Calorias',
      subTitle: 'Utilize recursos tecnologicos para ajudar a contabilizar as calorias ingeridas',
      image: '/assets/images/images/Imagem (7).png',
      link: PAGE_PATH.hero
    },
    {
      animationDelay: 0.3,
      title: 'Meus Cupons',
      subTitle: 'Organize e divulgue seus cupons e escale sua componha sua receita.',
      image: '/assets/images/images/Imagem (8).png',
      link: PAGE_PATH.cta
    },
    {
      animationDelay: 0.4,
      title: 'Vídeos tutoriais',
      subTitle: 'Insira vídeos tutoriais e proporcione uma experiência de execução excepcional aos seus clientes com AIFit.pro.',
      image: '/assets/images/images/Imagem (9).png',
      link: PAGE_PATH.feature
    }
  ]
};

export const other3 = {
  heading: 'Join a Winning Team',
  caption: 'Be a part of a winning culture that fosters collaboration, creativity, and success in every career path',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job', href: '#' }
    }
  ]
};
