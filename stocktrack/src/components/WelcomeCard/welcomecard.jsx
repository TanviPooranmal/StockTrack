import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as WelcomeSVG } from '../../assets/light_bg_welcome.svg';

const WelcomeCard = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2BEBC8',
                width: '48rem',
                height: '12.0625rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            {/* Text Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    boxSizing: 'border-box',
                    height: '100%',
                    minWidth: '60%',
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: '#000000',
                        fontFamily: 'Mulish',
                        fontWeight: '600',
                        fontSize: '1.2rem',
                        lineHeight: '1.625rem',
                        textAlign: 'left',
                    }}
                >
                    Welcome to your Dashboard!
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        color: '#4A4A4A',
                        fontFamily: 'Mulish',
                        fontWeight: '400',
                        fontSize: '1rem',
                        lineHeight: '1.375rem',
                        textAlign: 'left',
                        marginTop: '0.5rem',
                        boxSizing: 'border-box',
                        width: '100%',
                    }}
                >
                    Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!
                </Typography>
            </Box>

            {/* SVG Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: '100%',
                    minWidth: '40%',
                    boxSizing: 'border-box',
                }}
            >
                <WelcomeSVG style={{ height: '100%', width: 'max-content' }} />
            </Box>
        </Box>
    );
};

export default WelcomeCard;
