// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-instagram" color="primary.main" size={18} />,
    href: 'https://instagram.com/aifit.pro',
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Adquira agora!', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    landingMegamenu,
    { id: 'dashboard', title: 'Quem somos', link: ADMIN_PATH, ...linkProps },
    { id: 'how', title: 'Como funciona', link: 'https://stage.saasable.io/about', ...linkProps },
    { id: 'docs', title: 'Acessar AIFit.pro', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
