'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';

// @project
import { Footer7 } from '@/blocks/footer';
import { Navbar10 } from '@/blocks/navbar';
import { NavbarContent10 } from '@/blocks/navbar/navbar-content';

// @data
import { navbar } from './data';

/***************************  LAYOUT - MAIN  ***************************/

export default function MainLayout({ children }) {
  return (
    <>
      {/* header section */}
      <Box sx={{
        background: 'transparent',
        minHeight: (theme) => theme.mixins.toolbar.minHeight,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar
      }}>
        <Navbar10>
          <NavbarContent10 {...navbar} />
        </Navbar10>
      </Box>
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        {children}
      </Box>
      <Footer7 />
    </>
  );
}

MainLayout.propTypes = { children: PropTypes.any };
