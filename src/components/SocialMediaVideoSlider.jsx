import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme, Stack, Link } from '@mui/material';
import { socialMediaSlides } from '../data';  

const SocialMediaVideoSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplayPrevented, setAutoplayPrevented] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRefs = useRef([]);
    const progressInterval = useRef(null);
    const autoAdvanceInterval = useRef(null);

    const handleSlideChange = useCallback((index) => {
        setActiveIndex(index);
        setAutoplayPrevented(false);
        setProgress(0);
    }, []);

    const startProgressTracking = useCallback(() => {
        clearInterval(progressInterval.current);

        progressInterval.current = setInterval(() => {
            const video = videoRefs.current[activeIndex];
            if (!video) return;

            if (video.ended) {
                handleSlideChange((activeIndex + 1) % socialMediaSlides.length);
            } else {
                setProgress((video.currentTime / video.duration) * 100);
            }
        }, 100);
    }, [activeIndex, handleSlideChange]);

    const playVideo = useCallback(async () => {
        try {
            await videoRefs.current[activeIndex]?.play();
            setAutoplayPrevented(false);
        } catch {
            setAutoplayPrevented(true);
        }
    }, [activeIndex]);

    useEffect(() => {
        autoAdvanceInterval.current = setInterval(() => {
            handleSlideChange((activeIndex + 1) % socialMediaSlides.length);
        }, 5000);

        return () => clearInterval(autoAdvanceInterval.current);
    }, [activeIndex, handleSlideChange]);

    useEffect(() => {
        playVideo();
        startProgressTracking();

        return () => clearInterval(progressInterval.current);
    }, [activeIndex, playVideo, startProgressTracking]);

    return (
        <Box sx={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#000'
        }}>
            {/* Navigation */}
            <Box sx={{
                position: 'absolute',
                top: 20,
                left: 0,
                right: 0,
                zIndex: 4,
            }}>
                <Stack
                    direction="row"
                    sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                        gap: isMobile ? "8px" : "22px",
                        px: isMobile ? 1 : 5,
                        overflowX: isMobile ? 'auto' : 'visible',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': { display: 'none' }
                    }}
                >
                    {socialMediaSlides.map((slide, index) => (
                        <Box key={slide.id} sx={{
                            position: 'relative',
                            flex: isMobile ? '0 0 auto' : 1,
                            minWidth: isMobile ? 'fit-content' : 'unset',
                            px: isMobile ? 0.5 : 0,
                            textAlign: 'center',
                        }}>
                            <Button
                                onClick={() => handleSlideChange(index)}
                                sx={{
                                    width: '100%',
                                    color: activeIndex === index ? slide.color : 'rgba(255,255,255,0.7)',
                                    textTransform: 'uppercase',
                                    fontWeight: 400,
                                    letterSpacing: '1px',
                                    fontSize: isMobile ? '0.6rem' : '14px',
                                    p: isMobile ? '12px 2px 8px 2px' : '16px 6px 8px 6px',
                                    minWidth: 'unset',
                                    whiteSpace: 'nowrap',
                                    transition: 'color 0.4s ease-out',
                                    '&:hover': { color: slide.color, bgcolor: 'transparent' }
                                }}
                            >
                                {slide.navLabel}
                            </Button>

                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                bgcolor: 'rgba(255,255,255,0.15)',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '50%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                    animation: 'shimmer 3s ease-in-out infinite',
                                }
                            }} />

                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                bgcolor: '#fff',
                                transform: activeIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                                transformOrigin: 'left center',
                                transition: activeIndex === index
                                    ? 'transform 6s linear'
                                    : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: activeIndex === index ? 1 : 0,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: '20px',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8))',
                                    animation: 'shine 2s ease-in-out infinite',
                                }
                            }} />

                            {activeIndex === index && (
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: `${progress}%`,
                                    height: '2px',
                                    bgcolor: slide.color,
                                    transition: 'width 0.1s linear',
                                    boxShadow: `0 0 4px ${slide.color}`,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        width: '10px',
                                        background: 'linear-gradient(90deg, rgba(255,255,255,0.3), transparent)'
                                    }
                                }} />
                            )}
                        </Box>
                    ))}
                </Stack>
            </Box>

            {/* Video and Content */}
            {socialMediaSlides.map((slide, index) => (
                <React.Fragment key={slide.id}>
                    {/* Video */}
                    <Box sx={{
                        display: activeIndex === index ? 'block' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={slide.videoSrc}
                            poster={slide.posterSrc}
                            muted
                            playsInline
                            autoPlay
                            loop
                            onPlay={() => setAutoplayPrevented(false)}
                            onError={() => setAutoplayPrevented(true)}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                backgroundColor: '#000'
                            }}
                        />
                    </Box>

                    {/* Gradient Overlay */}
                    <Box sx={{
                        display: activeIndex === index ? 'block' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        background: slide.gradient,
                        pointerEvents: 'none',
                        transition: 'opacity 0.5s ease'
                    }} />

                    {/* Text Content */}
                    <Box sx={{
                        display: activeIndex === index ? 'flex' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                        color: '#fff',
                        alignItems: 'center',
                        px: 5,
                    }}>
                        <Box sx={{ maxWidth: { xs: '100%' }, textShadow: slide.textShadow }}>
                            <Typography
                                variant="h1"
                                component="h2"
                                sx={{
                                    fontSize: isMobile ? '28px' : '40px',
                                    fontWeight: 300,
                                    fontFamily: 'Acta Headline W00 Light',
                                    lineHeight: '44px',
                                    textTransform: 'uppercase',
                                    mb: 1
                                }}
                            >
                                {slide.title}
                            </Typography>
                            {slide.subtitle && (
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: isMobile ? '18px' : '16px',
                                        fontWeight: 400,
                                        fontFamily: 'Helvetica Neue Light',
                                        lineHeight: 1.3,
                                        mb: 2
                                    }}
                                >
                                    {slide.subtitle}
                                </Typography>
                            )}
                            {slide.cta && (
                                <Link
                                    href={slide.ctaLink}
                                    sx={{
                                        color: '#fff',
                                        fontSize: '14px',
                                        textDecoration: 'none',
                                        position: 'relative',
                                        fontWeight: 400,
                                        '&:hover': {
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '1px',
                                                backgroundColor: '#fff',
                                            }
                                        }
                                    }}
                                >
                                    {slide.cta}
                                </Link>
                            )}
                        </Box>
                    </Box>
                </React.Fragment>
            ))}

            {/* Autoplay Prevention Overlay */}
            {autoplayPrevented && (
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                    bgcolor: 'rgba(0,0,0,0.7)'
                }}>
                    <Button
                        onClick={playVideo}
                        sx={{
                            color: 'hsla(0, 0%, 100%, .5)',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            '&:hover': { color: '#fff' }
                        }}
                    >
                        Click to play video
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default SocialMediaVideoSlider;