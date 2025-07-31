import React, { useState } from 'react';
import {
    Box,
    Container,
    Tabs,
    Tab,
    keyframes,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Title from '../pages/Title';
import 'swiper/css';
import 'swiper/css/free-mode';
import { shapeSlides, collectionSlides } from '../data';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ExploreShades = ({
    tabs = ["Shape", "Collection"]
}) => {
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    // eslint-disable-next-line no-unused-vars
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    // Responsive breakpoints for Swiper
    const breakpoints = {
        // Small phones (xs)
        0: {
            slidesPerView: 2.2,
            spaceBetween: 12,
            slidesOffsetBefore: 12,
            slidesOffsetAfter: 12
        },
        // Large phones/tablets (sm)
        600: {
            slidesPerView: 3.2,
            spaceBetween: 16
        },
        // Tablets (md)
        900: {
            slidesPerView: 4.2,
            spaceBetween: 20
        },
        // Desktops (lg+)
        1200: {
            slidesPerView: 6,
            spaceBetween: 24
        }
    };

    // Responsive Slide component
    const SlideContent = ({ slide }) => {
        const imageSize = isMobile ? 80 : isTablet ? 90 : 100;

        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: slide.bgColor,
                    borderRadius: '4px',
                    p: isMobile ? 1 : 2,
                    aspectRatio: '1/1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        border: '1px solid rgb(31, 5, 5)',
                    }
                }}
                role="group"
                aria-label={slide.title}
            >
                <Box
                    component="img"
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    sx={{
                        width: imageSize,
                        height: imageSize,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mb: isMobile ? 1 : 1.5,
                        border: '2px solid white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
                <Box
                    component="p"
                    sx={{
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: {
                            xs: '0.8125rem', // 13px
                            sm: '0.875rem', // 14px
                            lg: '0.9375rem'  // 15px
                        },
                        mt: 1,
                        color: 'text.primary'
                    }}
                >
                    {slide.title}
                </Box>
            </Box>
        );
    };

    return (
        <Box component="section" sx={{
            py: { xs: 3, sm: 4, md: 5 },
            px: 0
        }}>
            {/* Header Container - Responsive spacing */}
            <Container maxWidth="lg" sx={{
                px: {
                    xs: 2,
                    sm: 3,
                    lg: 4
                },
                mb: { xs: 3, md: 4 }
            }}>
                <Title
                    text1="Explore "
                    text2="Shades"
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 2, sm: 3 },
                        '& .MuiTypography-root': {
                            fontFamily: '"Avenir LT Pro 35 Light", sans-serif',
                            fontSize: {
                                xs: '1.5rem',
                                sm: '2rem',
                                md: '2.25rem',
                                lg: '2.5rem'
                            },
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            lineHeight: 1.2,
                            '& span': {
                                fontWeight: 600
                            }
                        }
                    }}
                />

                <Box display="flex" justifyContent="center">
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        sx={{
                            bgcolor: '#f1f1f1',
                            borderRadius: '8px',
                            p: '0.25rem',
                            minHeight: 'auto',
                            '& .MuiTabs-indicator': { display: 'none' },
                            '& .MuiTab-root': {
                                minHeight: 'auto',
                                minWidth: 'auto',
                                padding: {
                                    xs: '6px 24px',
                                    sm: '8px 32px'
                                },
                                fontSize: {
                                    xs: '0.8125rem',
                                    sm: '0.875rem'
                                },
                                fontWeight: 600,
                                lineHeight: 1.71,
                                borderRadius: '4px',
                                fontFamily: '"Avenir LT Pro 35 Light", sans-serif',
                                textTransform: 'lowercase',
                                '&.Mui-selected': {
                                    color: 'common.white',
                                    bgcolor: '#00375d',
                                    boxShadow: 1
                                }
                            }
                        }}
                    >
                        {tabs.map((tab, index) => (
                            <Tab key={index} label={tab} />
                        ))}
                    </Tabs>
                </Box>
            </Container>

            {/* Carousels with responsive side margins */}
            <Box sx={{
                display: tabValue === 0 ? 'block' : 'none',
                animation: `${fadeIn} 0.5s ease-out`,
                mx: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5
                },
                width: {
                    xs: 'calc(100% - 32px)',
                    sm: 'calc(100% - 48px)',
                    md: 'calc(100% - 64px)',
                    lg: 'calc(100% - 80px)'
                }
            }}>
                <Swiper
                    modules={[FreeMode]}
                    breakpoints={breakpoints}
                    freeMode={true}
                    loop={false}
                    className="shape-carousel"
                >
                    {shapeSlides.map((slide, index) => (
                        <SwiperSlide key={`shape-${index}`} style={{ height: 'auto' }}>
                            <SlideContent slide={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            <Box sx={{
                display: tabValue === 1 ? 'block' : 'none',
                animation: `${fadeIn} 0.5s ease-out`,
                mx: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5
                },
                width: {
                    xs: 'calc(100% - 32px)',
                    sm: 'calc(100% - 48px)',
                    md: 'calc(100% - 64px)',
                    lg: 'calc(100% - 80px)'
                }
            }}>
                <Swiper
                    modules={[FreeMode]}
                    breakpoints={breakpoints}
                    freeMode={true}
                    loop={false}
                    className="collection-carousel"
                >
                    {collectionSlides.map((slide, index) => (
                        <SwiperSlide key={`collection-${index}`} style={{ height: 'auto' }}>
                            <SlideContent slide={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default ExploreShades;