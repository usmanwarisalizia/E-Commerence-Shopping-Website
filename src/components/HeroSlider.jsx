import React, { useRef, useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import heroimg1 from "../assets/heroimg1.webp";
import heroimg2 from "../assets/heroimg2.webp";
import '@fontsource/montserrat';

const HeroSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const swiperRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-swiper-next',
                    prevEl: '.custom-swiper-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'bullets',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                style={{ width: '100%' }}
            >
                <SwiperSlide>
                    <a href="/shop" title="Chashmay">
                        <Box
                            component="img"
                            src={heroimg1}
                            alt="Chashmay"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                maxHeight: 432,
                            }}
                        />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="/searchresults" title="blue cut">
                        <Box
                            component="img"
                            src={heroimg2}
                            alt="blue cut"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                maxHeight: 432,
                            }}
                        />
                    </a>
                </SwiperSlide>

                <Box
                    className="swiper-pagination"
                    sx={{
                        position: 'absolute',
                        textAlign: 'center',
                        transition: '0.3s opacity',
                        transform: 'translate3d(0, 0, 0)',
                        zIndex: 10,
                        bottom: '10px',
                        left: 0,
                        right: 0,
                        '& .swiper-pagination-bullet': {
                            width: '8px',
                            height: '8px',
                            display: 'inline-block',
                            borderRadius: '100%',
                            background: '#000',
                            opacity: 0.2,
                            margin: '0 4px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        },
                        '& .swiper-pagination-bullet-active': {
                            opacity: 1,
                            backgroundColor: '#e62e2d',
                        },
                    }}
                />
            </Swiper>

            {!isMobile && (
                <>
                    <IconButton
                        className="custom-swiper-next"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '4px',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            backgroundColor: '#e62e2d',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            padding: 0,
                            '& svg': {
                                fontSize: '32px',
                                color: '#ffffff',
                            },
                            '&:hover': {
                                backgroundColor: '#c52626',
                            },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton
                        className="custom-swiper-prev"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '4px',
                            transform: 'translateY(-50%)',
                            zIndex: 20,
                            backgroundColor: '#e62e2d',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            padding: 0,
                            '& svg': {
                                fontSize: '32px',
                                color: '#ffffff',
                            },
                            '&:hover': {
                                backgroundColor: '#c52626',
                            },
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </>
            )}
        </Box>
    );
};

export default HeroSlider;