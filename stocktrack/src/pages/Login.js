import React from 'react';
import { ReactComponent as LogoSVG } from '../assets/illustrationLogin.svg';
import { AccountCircle, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'flex',
        width: '37.5rem',
        height: '20rem',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        position: 'relative',
      }}>
        {/* Left Half: Form and Details */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.5rem',
          boxSizing: 'border-box',
          position: 'relative',
        }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <AccountCircle style={{
                position: 'absolute',
                top: '50%',
                left: '0.625rem',
                transform: 'translateY(-50%)',
                color: '#ccc',
              }} />
              <input
                type="text"
                placeholder="Username"
                style={{
                  width: '100%',
                  padding: '0.5rem 0.5rem 0.5rem 2.25rem',
                  marginBottom: '0.5rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  position: 'relative',
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <Lock style={{
                position: 'absolute',
                top: '50%',
                left: '0.625rem',
                transform: 'translateY(-50%)',
                color: '#ccc',
              }} />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: '100%',
                  padding: '0.5rem 0.5rem 0.5rem 2.25rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ccc',
                  position: 'relative',
                }}
              />
            </div>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}>
                <input type="checkbox" style={{ marginRight: '0.5rem', textAlign: 'left' }} />
                Remember me
              </label>
              <a href="/" style={{ marginLeft: '1rem', whiteSpace: 'nowrap', textAlign: 'right' }}>Forgot password?</a>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.5rem',
                backgroundColor: '#694bdb',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
              }}
            >
              Login Now
            </button>
            <p style={{ textAlign: 'left', marginTop: '1rem' }}>
              Or <a href="/">Register Now!</a>
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
    </div>
  );
};

export default Login;
