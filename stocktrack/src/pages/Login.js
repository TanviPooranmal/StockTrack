import React, { useState } from 'react';
import { ReactComponent as LogoSVG } from '../assets/illustrationLogin.svg';
import { AccountCircle, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Light and Dark mode styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: isDarkMode ? '#000000' : '#f0f0f0',
    },
    loginBox: {
      display: 'flex',
      width: '40rem',
      height: '20rem',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      backgroundColor: isDarkMode ? '#694BDB' : '#FFFFFF',
      boxSizing: 'border-box',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '0.5rem 0.5rem 0.5rem 2.25rem',
      marginBottom: '0.5rem',
      borderRadius: '0.25rem',
      border: '1px solid #ccc',
      backgroundColor: isDarkMode ? '#FFFFFF' : '#FFFFFF',
      color: isDarkMode ? 'black' : 'black',
      boxSizing: 'border-box',
      fontFamily: 'Mulish',
    },
    button: {
      width: '100%',
      padding: '0.5rem',
      backgroundColor: isDarkMode ? 'black' : '#3c1ead',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      color: isDarkMode ? 'black' : 'black',
      width: '100%',
    },
    link: {
      color: isDarkMode ? '#FFFFFF' : '#3c1ead',
      textDecoration: 'none',
      marginRight: '0rem',
      whiteSpace: 'nowrap',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        {/* Left Half: Form and Details */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0.5rem',
          boxSizing: 'border-box',
          position: 'relative',
        }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <AccountCircle style={{
                position: 'absolute',
                top: '40%',
                left: '0.625rem',
                transform: 'translateY(-50%)',
                color: '#ccc',
              }} />
              <input
                type="text"
                placeholder="Username"
                style={styles.input}
              />
            </div>
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <Lock style={{
                position: 'absolute',
                top: '40%',
                left: '0.625rem',
                transform: 'translateY(-50%)',
                color: '#ccc',
              }} />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
              />
            </div>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <label style={{ ...styles.checkboxLabel, flexGrow: 1 }}>
                <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                Remember me
              </label>
              <a href="/" style={styles.link}>Forgot password?</a>
            </div>
            <button type="submit" style={styles.button}>
              Login Now
            </button>
            <p style={{ textAlign: 'left', marginTop: '1rem' }}>
              Or <a href="/" style={styles.link}>Register Now!</a>
            </p>
          </form>
        </div>
        {/* Right Half: SVG */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <LogoSVG style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: isDarkMode ? '#fff' : '#000',
        color: isDarkMode ? '#000' : '#fff',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
      }}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Login;
