// src/components/ResponsiveBanner.js
import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
import gsap from "gsap";
import { bannerData } from "../data";
import '@fontsource/montserrat';

const ResponsiveBanner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const sliderRef = useRef(null);
    const menSlideRef = useRef(null);
    const womenSlideRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const animationDuration = 1;
    const tl = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(menSlideRef.current, { xPercent: 100 });
            gsap.set(womenSlideRef.current, { xPercent: -100 });
            tl.current = gsap.timeline({
                repeat: -1,
                paused: isHovered
            });
            tl.current.to(menSlideRef.current, {
                xPercent: 0,
                duration: animationDuration,
                ease: "power3.out"
            })
                .to(womenSlideRef.current, {
                    xPercent: 0,
                    duration: animationDuration,
                    ease: "power3.out"
                }, "-=1")
                .to({}, { duration: 3 })
                .to(menSlideRef.current, {
                    xPercent: 100,
                    duration: animationDuration,
                    ease: "power3.in"
                })
                .to(womenSlideRef.current, {
                    xPercent: -100,
                    duration: animationDuration,
                    ease: "power3.in"
                }, "-=1")
                .to({}, { duration: 1 });

            return () => ctx.revert();
        }, sliderRef);

        return () => {
            if (tl.current) tl.current.kill();
        };
    }, []);

    useEffect(() => {
        if (tl.current) {
            isHovered ? tl.current.pause() : tl.current.play();
        }
    }, [isHovered]);

    return (
        <Container
            maxWidth={false}
            sx={{
                position: "relative",
                height: isMobile ? "50vh" : "70vh",
                width: "100%",
                margin: "55px auto",
                p: 0,
                overflow: "hidden",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                ref={sliderRef}
                sx={{
                    position: "relative",
                    gap: "12px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                }}
            >
                {/* Men's Slide */}
                <Box
                    ref={menSlideRef}
                    sx={{
                        width: "50%",
                        height: "100%",
                        backgroundImage: `url(${bannerData.men.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            zIndex: 2,
                            textAlign: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            p: 2,
                            mb: 4,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                            }
                        }}
                    >
                        <Typography
                            variant={isMobile ? "h6" : "h5"}
                            fontWeight="bold"
                            sx={{ color: "#fff", letterSpacing: 2 }}
                        >
                            {bannerData.men.title}
                        </Typography>
                        <Button
                            variant="outlined"
                            size={isMobile ? "small" : "medium"}
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                fontWeight: "bold",
                                px: 3,
                                py: 1,
                                borderRadius: 0,
                                mt: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <a href={bannerData.men.link} style={{ textDecoration: 'none', color: '#fff' }}>
                                {bannerData.men.buttonText}
                            </a>
                        </Button>
                    </Box>
                </Box>

                {/* Women's Slide */}
                <Box
                    ref={womenSlideRef}
                    sx={{
                        width: "50%",
                        height: "100%",
                        backgroundImage: `url(${bannerData.women.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            zIndex: 2,
                            textAlign: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            p: 2,
                            mb: 4,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                            }
                        }}
                    >
                        <Typography
                            variant={isMobile ? "h6" : "h5"}
                            fontWeight="bold"
                            sx={{ color: "#fff", letterSpacing: 2 }}
                        >
                            {bannerData.women.title}
                        </Typography>
                        <Button
                            variant="outlined"
                            size={isMobile ? "small" : "medium"}
                            sx={{
                                color: "#fff",
                                borderColor: "#fff",
                                fontWeight: "bold",
                                px: 3,
                                py: 1,
                                borderRadius: 0,
                                mt: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <a href={bannerData.women.link} style={{ textDecoration: 'none', color: '#fff' }}>
                                {bannerData.women.buttonText}
                            </a>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ResponsiveBanner;