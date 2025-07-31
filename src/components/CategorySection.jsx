import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import '@fontsource/montserrat';
import Sunglasses1 from "../assets/Sunglasses1.png"
import Sunglasses2 from "../assets/Sunglasses2.png"

const ImgBackStyle = styled('div')(({ theme }) => ({
    background: '#F4F4F4',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    margin: '0 auto',
    width: '188px',
    height: '188px',
    [theme.breakpoints.down('sm')]: {
        width: '138px !important',
        height: '138px !important',
    },
    '& img': {
        maxWidth: '100%',
        height: 'auto',
    },
}));

const CategorySection = () => {
    const categories = [
        {
            name: 'Sunglasses',
            image: Sunglasses1,
            link: '#',
        },
        {
            name: 'Eyeglasses',
            image: Sunglasses2,
            link: '#',
        },
    ];

    return (
        <Box component="section">
            <Container maxWidth={false} sx={{ px: { xs: 3, sm: 3, md: 5 } }}>
                <Grid
                    container
                    justifyContent="center"
                    sx={{
                        my: { xs: 2, md: 3 },
                        gap: '126px',
                    }}
                >
                    {categories.map((category, index) => (
                        <Grid
                            item
                            xs={6}
                            lg={3}
                            key={index}
                            sx={{
                                textAlign: 'center',
                                "&:hover": {
                                    textDecoration: 'underline'
                                },
                            }}
                        >
                            <Link href={category.link} underline="none" color="inherit">
                                <ImgBackStyle>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        height="64"
                                        width="168"
                                        loading="lazy"
                                        style={{
                                            maxWidth: '80%',
                                            height: 'auto',
                                        }}
                                    />
                                </ImgBackStyle>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: '"Montserrat", sans-serif',
                                        fontSize: '14px',
                                        lineHeight: '15px',
                                        fontWeight: 600,
                                        letterSpacing: 'normal',
                                        color: '#212529',
                                        textTransform: 'capitalize',
                                        mb: 0,
                                        mt: 2,
                                    }}
                                >
                                    {category.name}
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CategorySection;