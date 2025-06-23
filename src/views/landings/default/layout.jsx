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
      <Navbar10>
        <NavbarContent10 {...navbar} />
      </Navbar10>
      {children}
      <Footer7 />
    </>
  );
}

MainLayout.propTypes = { children: PropTypes.any };
