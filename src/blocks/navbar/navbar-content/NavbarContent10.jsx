'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// @project
import Logo from '@/components/logo';
import {
  MenuPopper,
  NavMenu,
  NavMenuDrawer,
  NavPrimaryButton,
  NavSecondaryButton
} from '@/components/navbar';
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

export default function NavbarContent10({ landingBaseUrl, navItems, primaryBtn, secondaryBtn }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const showOnScroll = !trigger || downSM;

  return (
    <>
      <Slide appear={false} direction="down" in={showOnScroll}>
        <Stack
          component="nav"
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar,
            backgroundColor: downSM ? 'rgba(255,255,255,0.8)' : 'transparent',
            py: 2,
            px: { xs: 3, md: 4 },
            gap: { xs: 5, md: 10 }
          }}
        >
          {/* Logo immediately before menu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo to={landingBaseUrl} sx={{ width: downSM ? '100px' : '120px' }} />
          </Box>

          {/* Menu centered inline with blue border */}
          {!downMD && navItems && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'rgba(255,255,255,0.8)',
                border: '1px solid',
                borderColor: 'primary.main',
                borderRadius: 10,
                px: { xs: 1, md: 2 }
              }}
            >
              <NavMenu navItems={navItems} />
            </Box>
          )}

          {/* Buttons immediately after menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
            {!downSM ? (
              <>
                <NavSecondaryButton {...secondaryBtn} />
                <ButtonAnimationWrapper>
                  <NavPrimaryButton {...primaryBtn} />
                </ButtonAnimationWrapper>
              </>
            ) : (
              <MenuPopper
                offset={12}
                toggleProps={{
                  children: <SvgIcon name="tabler-menu-2" color="text.primary" />,  
                  color: 'inherit',
                  sx: { width: 36, height: 36 }
                }}
              >
                <ContainerWrapper>
                  <NavMenuDrawer navItems={navItems} />
                </ContainerWrapper>
              </MenuPopper>
            )}
          </Box>
        </Stack>
      </Slide>
      <Toolbar />
    </>
  );
}

NavbarContent10.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any
};
