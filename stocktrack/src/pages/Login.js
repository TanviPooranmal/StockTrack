import React from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const LoginContainer = styled(Box)({
  width: '37.5rem', // 600px in rem
  height: '20rem', // 320px in rem
  padding: '1.5rem 1.5rem 0.5rem 1.5rem', // Convert 24px to rem
  borderRadius: '0.5rem 0 0 0', // Convert 8px to rem
  opacity: 1, // Ensure opacity is set to 1
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0', // No gap between elements
  boxSizing: 'border-box',
  backgroundColor: 'black', // Added background color for visibility
});

const SvgContainer = styled(Box)({
  width: '50%', // The right half of the container
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MainContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  gap: '2rem',
});

const Login = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <Box sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
            <Typography variant="body2" align="right">
              <a href="/forgot-password">Forgot password?</a>
            </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '1rem' }}
          >
            Login Now
          </Button>
          <Typography variant="body2" align="center" sx={{ marginTop: '1rem' }}>
            Or <a href="/register">Register Now!</a>
          </Typography>
        </Box>
      </LoginContainer>
      <SvgContainer>
        {/* Replace this with your actual SVG */}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="lightgray" />
        </svg>
      </SvgContainer>
    </MainContainer>
  );
};

export default Login;
