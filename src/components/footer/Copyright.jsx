'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//@project
import branding from '@/branding.json';
import { CopyrightType } from '@/enum';

/***************************  FOOTER - COPYRIGHT  ***************************/

export default function Copyright({ type = CopyrightType.TYPE1, textProps, isDivider = true }) {
  const downSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const dividerProps = { ...(!downSM && { orientation: 'vertical' }), ...(downSM && { variant: 'middle' }), flexItem: true };

  const linkProps = {
    component: NextLink,
    variant: 'caption2',
    color: 'text.secondary',
    target: '_blank',
    rel: 'noopener noreferrer',
    underline: 'hover',
    'aria-label': 'Opens in a new tab',
    ...textProps,
    sx: { '&:hover': { color: 'primary.main' }, ...textProps?.sx }
  };

  return (
  <Stack
    direction={{ xs: 'column', sm: 'row' }}
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    sx={{ gap: { xs: 1.5, sm: isDivider ? 1.5 : 3 } }}
  >
    <Typography variant="caption2" {...textProps} sx={{ color: 'text.secondary', ...textProps?.sx }}>
      Copyright © 2025
      {branding.company.url
        ? (
          /^https?:\/\//.test(branding.company.url) ? (
            <Link
              variant="caption2"
              color="text.secondary"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              aria-label="Opens in a new tab"
              href={branding.company.url}
              sx={{ '&:hover': { color: 'primary.main' }, ...textProps?.sx, ml: 0.5 }}
            >
              Virtu.AI
            </Link>
          ) : (
            <Link
              component={NextLink}
              variant="caption2"
              color="text.secondary"
              underline="hover"
              aria-label="Opens in a new tab"
              href={branding.company.url}
              sx={{ '&:hover': { color: 'primary.main' }, ...textProps?.sx, ml: 0.5 }}
            >
              Virtu.AI
            </Link>
          )
        )
        : (
          <span style={{ marginLeft: 4 }}>{branding.company.name}</span>
        )
      }
    </Typography>
    {type !== CopyrightType.TYPE3 && (
      <>
        {isDivider && <Divider {...dividerProps} />}
        <Stack
          direction={downSM && type !== CopyrightType.TYPE2 ? 'column' : 'row'}
          sx={{ gap: { xs: downSM && type === CopyrightType.TYPE2 ? 3 : 1.5, sm: isDivider ? 1.5 : 3 }, alignItems: 'center' }}
        >
          <Link {...linkProps} href="/privacy-policy">
            Privacy Policy
          </Link>
          {isDivider && (
            <Divider {...dividerProps} {...(downSM && type === CopyrightType.TYPE2 && { orientation: 'vertical', sx: { my: 0 } })} />
          )}
          <Link {...linkProps} href="/terms-condition">
            Terms & Conditions
          </Link>
        </Stack>
      </>
    )}
  </Stack>
);

}

Copyright.propTypes = {
  type: PropTypes.any,
  CopyrightType: PropTypes.any,
  TYPE1: PropTypes.any,
  textProps: PropTypes.any,
  isDivider: PropTypes.bool
};
