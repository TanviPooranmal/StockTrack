import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Avatar, Box, Typography } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3.375em',
  backgroundColor: '#ECECEC',
  '&:hover': {
    backgroundColor: alpha('#ECECEC', 0.85),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const TopBar = () => {
  const userName = "Matt Appleyard";

  return (
    <AppBar position="static" sx={{
      backgroundColor: '#FFFFFF', color: '#000', height: '4.5em', boxShadow: '0px 2px 2px 0px #A3ABB942;',
    }}>
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
              backgroundColor: '#ECECEC',
              width: '0.0625em',
              height: '2.5em',
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
              lineHeight: '1.25em',
            }}
          >
            {userName}
          </Typography>

          {/* Profile Badge */}
          <IconButton color="inherit">
            <Avatar alt="User Profile" src="/path-to-your-profile-image.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
