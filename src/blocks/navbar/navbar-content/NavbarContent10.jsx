'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import {
  MenuPopper,
  NavMenu,
  NavMenuDrawer,
  NavPrimaryButton,
  NavSecondaryButton
} from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ landingBaseUrl, navItems, primaryBtn, secondaryBtn }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  // trigger when scroll past threshold
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 80 });

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width={1}
    >
      <Box
        sx={{
          transform: trigger ? 'scale(0.7)' : 'scale(0.7)',
          transformOrigin: 'top left',
          p: 1,
          borderRadius: 15,
          mt: 2.5,
          bgcolor: trigger ? 'rgba(60, 150, 147, 0.2)' : 'transparent',
          transition: 'background-color 0.3s, transform 0.3s'
        }}
      >
        <Logo to={landingBaseUrl} sx={{ width: '70%' }} />
      </Box>
      {!downMD && navItems && (
        <Box sx={{ bgcolor: 'grey.200', borderRadius: 10 }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {!downSM && (
          <>
            <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              <NavPrimaryButton {...primaryBtn} />
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: 'space-between',
                      gap: 1,
                      px: 5,
                      py: 2.5,
                      mx: -5,
                      bgcolor: 'grey.100'
                    }}
                  >
                    <NavSecondaryButton {...secondaryBtn} />
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  landingBaseUrl: PropTypes.any,
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any
};
