// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL /* DOCS_URL removed */ } from '@/path';

/***************************  DEFAULT - NAVBAR ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: true,
  secondaryBtn: {
    children: 'Login',
    href: 'https://instagram.com/aifit.pro',
    ...linkProps,
    variant: 'outlined',
    color: 'primary',
    sx: {
      minWidth: 80,
      border: '1px solid',
      borderColor: 'primary.main'
    }
  },
  primaryBtn: {
    children: 'Adquira agora!',
    href: BUY_NOW_URL,
    ...linkProps
  },
  navItems: [
    // substituído Home por Como Funciona
    {
      id: 'how',
      title: 'Como Funciona',
      link: 'https://stage.saasable.io/about',
      ...linkProps
    },

    // menu principal com borda azul
    {
      ...landingMegamenu,
      sx: {
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: 4
      }
    },

    { id: 'dashboard', title: 'Quem Somos', link: ADMIN_PATH, ...linkProps },

    // removido o item "Acessar AIFit.Pro"
  ]
};
