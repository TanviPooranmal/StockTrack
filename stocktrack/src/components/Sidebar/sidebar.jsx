import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as SidebarTabsLightSVG } from '../../assets/Menu_light.svg';
import { ReactComponent as SidebarTabsDarkSVG } from '../../assets/Menu_dark.svg';
import { ReactComponent as LogoLightSVG } from '../../assets/Logo.svg';
import { ReactComponent as LogoDarkSVG } from '../../assets/Logo_dark.svg';

const Sidebar = ({ isDarkMode }) => {
  const backgroundColor = isDarkMode ? '#151718' : '#FFFFFF';
  const logoBackgroundColor = isDarkMode ? '#000000' : '#ECECEC';

  return (
    <Box
      sx={{
        width: '16rem',
        height: '100vh',
        backgroundColor: backgroundColor,
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
            height: '4.5rem',
            width: '100%',
            padding: '1.5rem',
            backgroundColor: logoBackgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            gap: '0.375rem',
            boxSizing: 'border-box',
            margin: 0,
          }}
        >
          {isDarkMode ? (
            <LogoDarkSVG style={{ height: 'fit-content', width: 'auto' }} />
          ) : (
            <LogoLightSVG style={{ height: 'fit-content', width: 'auto' }} />
          )}
        </Box>

        {/* SVG for Tab List */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 'fit-content',
            overflow: 'hidden',
          }}
        >
          {isDarkMode ? (
            <SidebarTabsDarkSVG style={{ width: '100%', height: 'auto' }} />
          ) : (
            <SidebarTabsLightSVG style={{ width: '100%', height: 'auto' }} />
          )}
        </Box>
      </div>
    </Box>
  );
};

export default Sidebar;
