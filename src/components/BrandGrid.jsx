// src/components/BrandGrid.js
import React from 'react';
import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import '@fontsource/montserrat';
import { brands } from '../data';


const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '93%',
    height: 'auto',
    overflow: 'hidden',
    borderRadius: '4px',
    aspectRatio: '346 / 456',
    maxWidth: 220,
    padding: '8px 0',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        overflow: 'visible'
    }
}));

const BrandImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.03)'
    }
});

const BrandGrid = () => {
    return (
        <Box sx={{
            width: '100%',
            px: { xs: '15px', sm: '24px' },
            overflow: 'hidden'
        }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mx: { xs: '-8px', sm: 0 },
                width: 'calc(100% + 16px)'
            }}>
                {brands.map((brand, index) => (
                    <Box
                        key={`${brand.name}-${index}`}
                        sx={{
                            width: { xs: '50%', sm: '33.333%', md: '16.666%' },
                            display: 'flex',
                            justifyContent: 'center',
                            boxSizing: 'border-box'
                        }}
                    >
                        <Link
                            href={brand.link}
                            title={brand.title || brand.name}
                            underline="none"
                            sx={{
                                width: '100%',
                                '&:hover': { textDecoration: 'none' }
                            }}
                        >
                            <ImageContainer>
                                <BrandImage
                                    src={brand.image}
                                    alt={brand.name}
                                    loading="lazy"
                                />
                            </ImageContainer>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BrandGrid;