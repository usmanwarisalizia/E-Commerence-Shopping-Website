import React from 'react';
import { Box, Card, Container, useTheme, useMediaQuery } from '@mui/material';
import BannerSellerimg from '../assets/BannerSellerimg.webp'

const Bestsellers = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth={false} disableGutters sx={{
            px: 0,
            marginBottom: '16px'
        }}>
            <Box sx={{ width: '100%' }}>
                <Card sx={{ p: 0, boxShadow: 'none' }}>
                    <Box
                        component="img"
                        src={BannerSellerimg}
                        alt="Best Sellers"
                        sx={{
                            maxWidth: '100%',
                            height: 'auto',
                            width: '100%',
                            display: 'block',
                            objectFit: isMobile ? 'contain' : 'cover',
                            px: ['0px', '24px'],
                        }}
                        loading="lazy"
                    />
                </Card>
            </Box>
        </Container>
    );
};

export default Bestsellers;