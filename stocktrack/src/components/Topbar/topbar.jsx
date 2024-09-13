import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Box, Typography } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import AvatarSVG from '../../assets/Avatar.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3.375rem',
  backgroundColor: theme.palette.mode === 'dark' ? '#151718' : '#ECECEC',
  '&:hover': {
    backgroundColor: alpha(theme.palette.mode === 'dark' ? '#151718' : '#ECECEC', 0.85),
  },
  border: theme.palette.mode === 'dark' ? '0.0625rem solid #B5B7B9' : '0.0625rem solid #ECECEC',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '16.3125em',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '16.3125em',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'dark' ? '#ECECEC' : 'inherit',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ECECEC' : 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1rem + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

const TopBar = ({ isDarkMode }) => {
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
          color: isDarkMode ? '#ECECEC' : '#000',
          height: '4.5rem',
          boxShadow: isDarkMode ? 'none' : '0px 2px 2px 0px #A3ABB942;',
        }}
      >
        <Toolbar sx={{ height: '100%' }}>
          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {/* Notification Icon */}
          <IconButton color="inherit">
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Vertical Line Separator */}
            <Box
              sx={{
                backgroundColor: isDarkMode ? '#2E2F30' : '#ECECEC',
                width: '0.0625rem',
                height: '2.5rem',
                marginRight: 2,
              }}
            />

            {/* Display User Name */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: 2,
                marginRight: 1,
                fontFamily: 'Mulish, sans-serif',
                fontWeight: 500,
                lineHeight: '1.25rem',
                color: isDarkMode ? '#ECECEC' : '#000',
              }}
            >
              Matt Appleyard
            </Typography>

            {/* Profile Badge */}
            <IconButton color="inherit">
              <Avatar alt="User Profile" src={AvatarSVG} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
