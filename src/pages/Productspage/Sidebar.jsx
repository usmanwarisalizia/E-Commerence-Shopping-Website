import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Chip,
    Slider,
    Input,
    CardMedia,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { Search as SearchIcon, Star } from '@mui/icons-material';
import { recentItems, tags } from '../../productsAssets';
import SectionTitle from '../Productspage/SectionTitle';

const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [priceRange, setPriceRange] = useState([50, 250]);
    const [minPriceInput, setMinPriceInput] = useState(50);
    const [maxPriceInput, setMaxPriceInput] = useState(250);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        setMinPriceInput(newValue[0]);
        setMaxPriceInput(newValue[1]);
    };

    const handleMinInputChange = (e) => {
        const value = Math.min(Number(e.target.value), priceRange[1] - 1);
        setMinPriceInput(value);
        setPriceRange([value, priceRange[1]]);
    };

    const handleMaxInputChange = (e) => {
        const value = Math.max(Number(e.target.value), priceRange[0] + 1);
        setMaxPriceInput(value);
        setPriceRange([priceRange[0], value]);
    };

    return (
        <Box sx={{
            padding: { xs: '30px 20px', sm: '40px 30px' },
            width: { xs: '100%', sm: '352px' },
            backgroundColor: 'var(--white)',
            marginBottom: '30px',
            borderRadius: '16px',
            boxShadow: theme.shadows[1],
            minHeight: '800px', // Increased height
            '& .MuiTypography-h6': { fontSize: '1.25rem', fontWeight: 600 }, // Increased font size
            '& .MuiTypography-body2, & .MuiTypography-caption, & .MuiTypography-subtitle2': {
                fontSize: '1.05rem' // Increased font size
            }
        }}>
            {/* Search */}
            <Box sx={{ marginBottom: theme.spacing(4) }}>
                <SectionTitle>Search</SectionTitle>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        fullWidth
                        placeholder="Search here"
                        size="small"
                        sx={{
                            marginRight: theme.spacing(1),
                            backgroundColor: '#f4f1ea', // New background color
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '0px',
                                '& fieldset': { borderColor: '#ddd', borderWidth: '1px' },
                                '&:hover fieldset': { borderColor: '#aaa' },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#eb0029',
                                    borderWidth: '1px'
                                }
                            },
                            '& .MuiOutlinedInput-input': {
                                padding: '12px 16px', // Increased padding
                                fontSize: '1.05rem' // Increased font size
                            }
                        }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: 'auto',
                            borderRadius: '0px',
                            padding: theme.spacing(1.5), // Increased padding
                            height: '44px', // Increased height
                            backgroundColor: '#eb0029',
                            '&:hover': { backgroundColor: '#c50022' }
                        }}
                    >
                        <SearchIcon fontSize={isMobile ? 'medium' : 'large'} /> {/* Larger icon */}
                    </Button>
                </Box>
            </Box>

            {/* Tags */}
            <Box sx={{ marginBottom: theme.spacing(4) }}>
                <SectionTitle>Tags</SectionTitle>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: theme.spacing(1.5) // Increased gap
                }}>
                    {tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            clickable
                            variant={tag === 'EB0029' ? 'filled' : 'outlined'} // Special style for EB0029
                            sx={{
                                fontSize: '1rem', // Increased font size
                                padding: theme.spacing(0.5),
                                height: 'auto',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                                backgroundColor: tag === 'EB0029' ? '#f4f1ea' : 'inherit', // Special background for EB0029
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    transform: 'translateY(-2px)',
                                    boxShadow: theme.shadows[2]
                                },
                                '& .MuiChip-label': {
                                    padding: theme.spacing(0.5)
                                }
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Price Filter */}
            <Box sx={{ marginBottom: theme.spacing(4) }}>
                <SectionTitle>Filter By Price</SectionTitle>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={300}
                    sx={{
                        marginBottom: theme.spacing(3), // Increased margin
                        color: '#eb0029',
                        '& .MuiSlider-thumb': {
                            width: isMobile ? 20 : 24, // Larger thumbs
                            height: isMobile ? 20 : 24,
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px rgba(235, 0, 41, 0.16)'
                            }
                        },
                        '& .MuiSlider-valueLabel': {
                            fontSize: '0.95rem', // Increased font size
                            padding: theme.spacing(0.75),
                            borderRadius: '4px'
                        },
                        '& .MuiSlider-rail': {
                            height: isMobile ? 6 : 8 // Thicker rail
                        },
                        '& .MuiSlider-track': {
                            height: isMobile ? 6 : 8 // Thicker track
                        }
                    }}
                    valueLabelFormat={(value) => `$${value}`}
                />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                    flexWrap: 'wrap',
                    marginTop: theme.spacing(2) // Added margin
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ marginRight: theme.spacing(1) }}>Price:</Typography>
                        <Typography variant="body2">$</Typography>
                        <Input
                            value={minPriceInput}
                            onChange={handleMinInputChange}
                            inputProps={{ min: 0, max: 299, type: 'number' }}
                            sx={{
                                width: '70px', // Increased width
                                margin: theme.spacing(0, 1),
                                '&:before, &:after': { borderBottom: 'none !important' },
                                '& input': {
                                    fontSize: '1.05rem', // Increased font size
                                    padding: theme.spacing(1)
                                }
                            }}
                        />
                    </Box>
                    <Typography variant="body2">-</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2">$</Typography>
                        <Input
                            value={maxPriceInput}
                            onChange={handleMaxInputChange}
                            inputProps={{ min: 1, max: 300, type: 'number' }}
                            sx={{
                                width: '70px', // Increased width
                                margin: theme.spacing(0, 1),
                                '&:before, &:after': { borderBottom: 'none !important' },
                                '& input': {
                                    fontSize: '1.05rem', // Increased font size
                                    padding: theme.spacing(1)
                                }
                            }}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        size={isMobile ? 'small' : 'medium'} // Responsive size
                        sx={{
                            backgroundColor: '#eb0029',
                            borderRadius: '4px',
                            '&:hover': { backgroundColor: '#c50022' },
                            fontSize: '1rem', // Increased font size
                            padding: theme.spacing(1, 2) // Increased padding
                        }}
                    >
                        Filter
                    </Button>
                </Box>
            </Box>

            {/* Recently Viewed */}
            <Box>
                <SectionTitle>Recently Viewed</SectionTitle>
                {recentItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            display: 'flex',
                            marginBottom: theme.spacing(3), // Increased margin
                            '&:hover': { '& img': { transform: 'scale(1.05)' } }
                        }}
                    >
                        <Box sx={{
                            width: '90px', // Increased width
                            height: '90px', // Increased height
                            marginRight: theme.spacing(2),
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '6px', // Increased radius
                            flexShrink: 0
                        }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                            {item.regularPrice > item.offerPrice && (
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'error.main',
                                    color: 'white',
                                    padding: theme.spacing(0.75, 1.5), // Increased padding
                                    borderRadius: '0 6px 0 6px', // Increased radius
                                    fontSize: '0.85rem', // Increased font size
                                    fontWeight: 'bold'
                                }}>
                                    SALE
                                </Box>
                            )}
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                                {item.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', margin: theme.spacing(0.5, 0) }}>
                                <Star color="primary" fontSize={isMobile ? 'small' : 'medium'} /> {/* Larger icon */}
                                <Typography variant="caption" sx={{ marginLeft: theme.spacing(0.75), fontSize: '1rem' }}>
                                    {item.rating}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: theme.spacing(1.5), alignItems: 'center' }}> {/* Increased gap */}
                                {item.regularPrice > item.offerPrice ? (
                                    <>
                                        <Typography variant="body2" color="text.secondary" sx={{
                                            textDecoration: 'line-through',
                                            fontSize: '1rem' // Increased font size
                                        }}>
                                            ${item.regularPrice.toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="primary" sx={{
                                            fontWeight: 700, // Increased weight
                                            fontSize: '1.1rem' // Increased font size
                                        }}>
                                            ${item.offerPrice.toFixed(2)}
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography variant="body2" color="primary" sx={{
                                        fontWeight: 700, // Increased weight
                                        fontSize: '1.1rem' // Increased font size
                                    }}>
                                        ${item.regularPrice.toFixed(2)}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Sidebar;