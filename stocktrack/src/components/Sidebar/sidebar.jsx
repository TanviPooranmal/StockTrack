import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as SidebarTabsSVG } from '../../assets/Menu_light.svg';
import { ReactComponent as LogoSVG } from '../../assets/Logo.svg';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '12.5em',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <Box
          sx={{
            height: '4.5em',
            width: '100%',
            padding: '1.5em',
            backgroundColor: '#ECECEC',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            gap: '0.375em',
            boxSizing: 'border-box',
            margin: 0,
          }}
        >
          <LogoSVG style={{ height: '100%', width: 'auto' }} />
        </Box>

        {/* SVG for Tab List */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '22em',
            overflow: 'hidden',
          }}
        >
          <SidebarTabsSVG style={{ width: '100%', height: 'auto' }} />
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;
