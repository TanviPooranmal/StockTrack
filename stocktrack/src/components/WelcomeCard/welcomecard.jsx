import React from 'react';
import { Box, Typography } from '@mui/material';
import { ReactComponent as WelcomeSVG } from '../../assets/light_bg_welcome.svg';

const WelcomeCard = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2BEBC8',
                width: '45em',
                height: '14.0625em',
                borderRadius: '0.5em',
                display: 'flex',
                alignItems: 'center',
                padding: '0.75em',
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
                    padding: '1.5em',
                    boxSizing: 'border-box',
                    height: '100%',
                    width: '50%',
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: '#000000',
                        fontFamily: 'Mulish',
                        fontWeight: '600',
                        fontSize: '1.125em',
                        lineHeight: '1.625em',
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
                        fontSize: '0.9em',
                        lineHeight: '1.375em',
                        textAlign: 'left',
                        marginTop: '0.5em',
                        boxSizing: 'border-box',
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
                    width: '50%',
                    boxSizing: 'border-box',
                }}
            >
                <WelcomeSVG style={{ height: '100%', width: 'max-content' }} />
            </Box>
        </Box>
    );
};

export default WelcomeCard;
