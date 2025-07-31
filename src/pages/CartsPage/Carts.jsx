import React, { useState, useRef } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
    SwipeableDrawer,
    Grow,
    Container,
    Chip
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import your product data
import { singleProduct } from '../../productsAssets';

const ProductPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedSize, setSelectedSize] = useState(singleProduct.sizes[1]);
    const [selectedGender, setSelectedGender] = useState(singleProduct.genders[2]);
    const [currentImage, setCurrentImage] = useState(0);
    const [openImageModal, setOpenImageModal] = useState(false);
    const modalSwiperRef = useRef(null);

    const images = [
        'https://static.thenounproject.com/png/eye-glasses-icon-6196494-512.png',
        'https://static.thenounproject.com/png/eye-glasses-icon-6196494-512.png',
        'https://static.thenounproject.com/png/eye-glasses-icon-6196494-512.png'
    ];

    const ProductImage = styled('img')({
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        objectFit: 'contain',
        aspectRatio: '2 / 3',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    });

    const StyledSwiper = styled(Swiper)({
        '--swiper-navigation-color': theme.palette.common.white,
        '--swiper-pagination-color': theme.palette.common.white,
    });

    return (
        <Container maxWidth="lg" sx={{ py: isMobile ? 2 : 3, px: '12px !important' }}>
            <Grid container spacing={0} justifyContent="space-between">
                {/* Product Images - Left Side */}
                <Grid item xl={6} lg={6} md={6} xs={12} order={{ xs: 1 }} sx={{
                    width: { xl: '50%', lg: '45%', md: '50%', xs: '100%' },
                }}>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
                        {/* Main Image Viewer */}
                        <Box sx={{
                            flex: 1,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            height: isMobile ? '400px' : '600px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#f8f8f8',
                        }}>
                            <ProductImage
                                src={images[currentImage]}
                                alt={`Main Product View`}
                                onClick={() => setOpenImageModal(true)}
                            />
                        </Box>

                        {/* Thumbnails */}
                        <Box sx={{
                            width: '80px',
                            maxHeight: isMobile ? '400px' : '600px',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            pr: '4px',
                            scrollbarWidth: 'thin',
                            '&::-webkit-scrollbar': { width: '6px' },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#ccc',
                                borderRadius: '10px',
                            }
                        }}>
                            {images.map((img, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        border: currentImage === index ? '2px solid #eb0c34' : '2px solid transparent',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        transition: 'border 0.3s',
                                        '&:hover': { border: '2px solid #eb0c34' },
                                    }}
                                    onClick={() => setCurrentImage(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '80px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Product Details - Right Side */}
                <Grid item xl={6} lg={6} md={6} xs={12} order={{ xs: 2 }} sx={{
                    maxWidth: '42%',
                    width: 'calc(42% - 8px / 2)',
                    padding: '60px 0 20px 0rem',
                    '@media (max-width: 600px)': {
                        maxWidth: '100%',
                        width: '100%',
                        padding: '20px 16px'
                    }
                }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h3" component="h1" gutterBottom sx={{
                            fontWeight: 600,
                            fontSize: "24px",
                            textTransform: "uppercase",
                            mb: "15px",
                            color: "#eb0c34"
                        }}>
                            {singleProduct.title}
                        </Typography>

                        <Typography variant="body2" component="div" sx={{
                            fontWeight: '400',
                            mb: "5px",
                            fontSize: "13px",
                            color: "#000"
                        }}>
                            {singleProduct.productCode}
                        </Typography>

                        <Typography variant="h4" component="div" sx={{
                            fontWeight: '600',
                            mb: "5px",
                            my: "20px",
                            fontSize: "20px",
                            color: "#eb0c34"
                        }}>
                            $ {singleProduct.price.toLocaleString()}
                        </Typography>

                        <Typography variant="body1" paragraph sx={{
                            lineHeight: "23.4px",
                            fontWeight: 400,
                            fontSize: "14px",
                            my: "5px",
                            color: "#000"
                        }}>
                            {singleProduct.description}
                        </Typography>
                    </Box>

                    {/* Product Details */}
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{
                                    fontWeight: 'bold',
                                    fontSize: "14px",
                                    mb: "8px",
                                    color: "#eb0c34"
                                }}>
                                    FRAME TYPE
                                </Typography>
                                <Typography variant="body1" component="div" sx={{
                                    fontSize: "13px",
                                    color: "#000"
                                }}>
                                    {singleProduct.frameType}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body1" component="div" sx={{
                                    fontWeight: 'bold',
                                    fontSize: "14px",
                                    mb: "8px",
                                    color: "#eb0c34"
                                }}>
                                    FRAME MATERIAL
                                </Typography>
                                <Typography variant="body1" component="div" sx={{
                                    fontSize: "13px",
                                    color: "#000"
                                }}>
                                    {singleProduct.frameMaterial}
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant="body1" component="div" sx={{
                            fontWeight: 'bold',
                            fontSize: "14px",
                            mb: "8px",
                            color: "#eb0c34"
                        }}>
                            COLORS
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                            {singleProduct.colors.map((color) => (
                                <Chip
                                    key={color}
                                    label={color}
                                    sx={{
                                        fontSize: '12px',
                                        borderRadius: '0',
                                        borderColor: '#eb0c34',
                                        backgroundColor: 'transparent',
                                        color: '#eb0c34',
                                        '&:hover': { backgroundColor: '#f8f8f8' }
                                    }}
                                    variant="outlined"
                                />
                            ))}
                        </Box>

                        <Typography variant="body1" component="div" sx={{
                            fontWeight: 'bold',
                            fontSize: "14px",
                            mb: "8px",
                            color: "#eb0c34"
                        }}>
                            SIZE
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                            {singleProduct.sizes.map((size) => (
                                <Button
                                    key={size}
                                    variant={selectedSize === size ? 'contained' : 'outlined'}
                                    onClick={() => setSelectedSize(size)}
                                    sx={{
                                        minWidth: '70px',
                                        height: '35px',
                                        borderRadius: '0',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        color: selectedSize === size ? '#fff' : '#eb0c34',
                                        borderColor: '#eb0c34',
                                        backgroundColor: selectedSize === size ? '#eb0c34' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: selectedSize === size ? '#eb0c34' : 'rgba(235, 12, 52, 0.04)',
                                        }
                                    }}
                                >
                                    {size}
                                </Button>
                            ))}
                        </Box>

                        <Typography variant="body1" component="div" sx={{
                            fontWeight: 'bold',
                            fontSize: "14px",
                            mb: "8px",
                            color: "#eb0c34"
                        }}>
                            GENDER
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            {singleProduct.genders.map((gender) => (
                                <Button
                                    key={gender}
                                    variant={selectedGender === gender ? 'contained' : 'outlined'}
                                    onClick={() => setSelectedGender(gender)}
                                    sx={{
                                        minWidth: '70px',
                                        height: '35px',
                                        borderRadius: '0',
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        color: selectedGender === gender ? '#fff' : '#eb0c34',
                                        borderColor: '#eb0c34',
                                        backgroundColor: selectedGender === gender ? '#eb0c34' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: selectedGender === gender ? '#eb0c34' : 'rgba(235, 12, 52, 0.04)',
                                        }
                                    }}
                                >
                                    {gender}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    {/* Add to Basket Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.5,
                            fontWeight: 600,
                            fontSize: "14px",
                            letterSpacing: '0.5px',
                            boxShadow: 'none',
                            backgroundColor: '#eb0c34',
                            color: '#fff',
                            borderRadius: '0',
                            textTransform: 'uppercase',
                            mb: 3,
                            '&:hover': { backgroundColor: '#c00a2d' }
                        }}
                    >
                        Add To Basket
                    </Button>

                    {/* Additional Information Links */}
                    <Box sx={{ mb: 3 }}>
                        {singleProduct.links.map((link, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "14px",
                                    mb: "15px",
                                    color: "#eb0c34",
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'none' }
                                }}
                            >
                                {link.text}
                            </Typography>
                        ))}
                    </Box>

                    {/* Size Guide */}
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: "14px",
                            color: "#eb0c34",
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'none' }
                        }}
                    >
                        Frame Size Guide
                    </Typography>
                </Grid>
            </Grid>

            {/* Image Modal */}
            <SwipeableDrawer
                anchor="bottom"
                open={openImageModal}
                onClose={() => setOpenImageModal(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <IconButton
                    onClick={() => setOpenImageModal(false)}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'white',
                        zIndex: 2,
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Grow in={openImageModal}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: '750px',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: { xs: 2, sm: 4 },
                    }}>
                        <StyledSwiper
                            ref={modalSwiperRef}
                            initialSlide={currentImage}
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={false}
                            style={{ width: '100%', height: 'auto' }}
                            onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Box sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                            src={img}
                                            alt={`Product view ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                maxHeight: '90vh',
                                                objectFit: 'contain',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </StyledSwiper>
                    </Box>
                </Grow>
            </SwipeableDrawer>
        </Container>
    );
};

export default ProductPage;