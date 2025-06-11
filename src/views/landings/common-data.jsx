// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, PAGE_PATH, PRIVIEW_PATH, SECTION_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">Novos plugins em breve!</Typography>
          <Chip
            label={<Typography variant="caption">Em Breve</Typography>}
            size="small"
            sx={{
              bgcolor: 'background.default',
              '& .MuiChip-label': { px: 1.5, py: 0.5 },
              display: { xs: 'none', sm: 'inline-flex' }
            }}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16 }}
                alt="celebration"
                loading="lazy"
              />
            }
          />
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Nossos plugins oferecem recursos exclusivos para personalizar seu AIFit, permitindo que você adicione soluções sob medida para seus clientes de forma simples e eficiente. </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 100, px: { xs: 2 }, py: 1.25 }}
        href={SECTION_PATH}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar!
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU LANDINGS  ***************************/

export const landingMegamenu = {
  id: 'landings',
  title: 'Plugins',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    popperOffsetX: 195,
    toggleBtn: { children: 'Plugins' },
    menuItems: [
      {
        title: 'Contador de calorias',
        theme: Themes.THEME_CRM,
        image: '/assets/images/mega-menu/crm-light.svg',
        status: '⌛'
      },
      {
        title: 'Meus Cupons',
        theme: Themes.THEME_AI,
        image: '/assets/images/mega-menu/ai-light.svg',
        status: '⌛'
      },
      {
        title: 'Vídeos tutoriais',
        theme: Themes.THEME_CRYPTO,
        image: '/assets/images/mega-menu/crypto-light.svg',
        status: '⌛'
      }
    ],
    footerData: footerData()
  }
};

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Template Admin SaasAble</Typography>}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16 }}
                alt="celebration"
                loading="lazy"
              />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">Dashboard incrível a caminho!</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Gerencie facilmente o backend do seu app com dashboards administrativos personalizáveis que aumentam a produtividade.
        </Typography>
      </Stack>
      <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Ver Dashboard
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'pages',
  title: 'Pages',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Pages' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'General',
        itemsList: [
          { title: 'About', link: { href: 'https://stage.saasable.io/about', ...linkProps } },
          { title: 'Career', status: 'Pro' },
          { title: 'Privacy Policy', link: { href: PAGE_PATH.privacyPolicyPage, ...linkProps } },
          { title: 'Contact Us', status: 'Pro' },
          { title: 'FAQs', status: 'Pro' },
          { title: 'Pricing', status: 'Pro' }
        ]
      },
      {
        title: 'Maintenance',
        itemsList: [
          { title: 'Coming Soon', status: 'Pro' },
          { title: 'Error 404', link: { href: PRIVIEW_PATH.error404, ...linkProps } },
          { title: 'Error 500', link: { href: PRIVIEW_PATH.error500, ...linkProps } },
          { title: 'Under Maintenance', status: 'Pro' }
        ]
      },
      {
        title: 'External',
        itemsList: [
          { title: 'Blog', link: { href: 'https://blog.saasable.io/', ...linkProps } },
          { title: 'Documentation', link: { href: DOCS_URL, ...linkProps } },
          { title: 'Support', link: { href: branding.company.socialLink.support, ...linkProps } },
          {
            title: 'Discord',
            link: { href: branding.company.socialLink.discord, ...linkProps }
          },
          { title: 'Terms & Conditions', link: { href: 'https://mui.com/store/terms/', ...linkProps } }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
