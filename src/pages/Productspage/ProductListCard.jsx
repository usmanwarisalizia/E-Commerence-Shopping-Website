import React, { useRef } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Rating,
    styled,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { keyframes } from '@mui/material';

const rotate = keyframes`
  100% {
    stroke-dashoffset: -1200;
  }
`;

const AnimatedStroke = styled('circle')`
  stroke: red;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 6, 6;
  animation: ${rotate} 20s linear infinite;
`;

const ProductListCard = ({ product, index }) => {
    // eslint-disable-next-line no-unused-vars
    const buttonRef = useRef();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: '30px',
            padding: { xs: '20px', sm: '25px 40px' },
            borderRadius: '16px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, #FFF 63.33%)',
            textAlign: 'left',
            boxShadow: '0px 4px 54px 0px rgba(0, 0, 0, 0.08)',
            height: { xs: 'auto', sm: '280px' },
            minHeight: '280px',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
                transform: { xs: 'none', sm: 'translateY(-5px)' },
                boxShadow: '0px 8px 60px 0px rgba(0, 0, 0, 0.12)',
                '& .product-image': {
                    transform: 'scale(1.05)'
                }
            }
        }}>
            {/* Animated Glasses SVG - Only show on non-mobile */}
            {!isMobile && (
                <svg
                    width="290"
                    height="290"
                    viewBox="0 0 400 200"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '11%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        pointerEvents: 'none',
                        opacity: 0.7
                    }}
                >
                    <defs>
                        <mask id={`outer-stroke-mask-${index}`}>
                            <rect x="0" y="0" width="350" height="200" fill="white" />
                            <circle cx="150" cy="100" r="65" fill="black" />
                            <circle cx="250" cy="100" r="65" fill="black" />
                        </mask>

                        <radialGradient id={`redDotsGradient-${index}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#cc0000" stopOpacity="0.4" />
                        </radialGradient>
                    </defs>

                    <g mask={`url(#outer-stroke-mask-${index})`}>
                        <AnimatedStroke cx="150" cy="100" r="68" stroke={`url(#redDotsGradient-${index})`} />
                        <AnimatedStroke cx="250" cy="100" r="68" stroke={`url(#redDotsGradient-${index})`} />
                    </g>
                </svg>
            )}

            {/* Product Image */}
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                width: { xs: '120px', sm: '160px' },
                height: { xs: '120px', sm: '160px' },
                minWidth: { xs: '120px', sm: '160px' },
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.5s ease'
            }}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    className="product-image"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease'
                    }}
                />
            </Box>

            {/* Product Content */}
            <CardContent sx={{
                flex: 1,
                p: 0,
                zIndex: 2,
                justifyContent: "center",
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:last-child': {
                    p: 0 // This removes padding from the last child
                }
            }}>
                <Box>
                    <Typography variant="h5" component="h3" sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: '#1a202c',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#4a5568',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        maxWidth: '85%',
                        textWrap: 'stable',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minHeight: '72px'
                    }}>
                        {product.description}
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating
                            value={parseFloat(product.rating)}
                            precision={0.5}
                            readOnly
                            size={isMobile ? "small" : "medium"}
                            sx={{
                                mr: 1,
                                '& .MuiRating-iconFilled': {
                                    color: '#eb0029'
                                }
                            }}
                        />
                        <Typography variant="body2" sx={{
                            color: '#718096',
                            fontWeight: 500,
                            fontSize: { xs: '0.8rem', sm: 'inherit' }
                        }}>
                            {product.rating} ({Math.floor(Math.random() * 100) + 20} reviews)
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 'auto',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 1, sm: 0 }
                    }}>
                        <Box sx={{
                            alignSelf: { xs: 'flex-start', sm: 'center' },
                            mb: { xs: 1, sm: 0 }
                        }}>
                            {product.originalPrice && (
                                <Typography variant="body2" sx={{
                                    textDecoration: 'line-through',
                                    color: '#a0aec0',
                                    fontSize: { xs: '0.8rem', sm: '0.9rem' }
                                }}>
                                    ${(product.price * 1.2).toFixed(2)}
                                </Typography>
                            )}
                            <Typography variant="h5" sx={{
                                fontWeight: 800,
                                color: '#eb0029',
                                fontSize: { xs: '1.2rem', sm: '1.5rem' }
                            }}>
                                ${product.price.toFixed(2)}
                            </Typography>
                        </Box>

                        <Button
                            ref={buttonRef}
                            href="/addtocart"
                            variant="contained" sx={{
                                backgroundColor: '#eb0029',
                                color: '#fff',
                                borderRadius: '8px',
                                px: 3,
                                py: 1.5,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                boxShadow: '0 4px 12px rgba(235, 0, 41, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#c50022',
                                    transform: { xs: 'none', sm: 'translateY(-2px)' },
                                    boxShadow: '0 6px 16px rgba(235, 0, 41, 0.4)'
                                },
                                transition: 'all 0.3s ease',
                                width: { xs: '100%', sm: 'auto' }
                            }}>
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductListCard;