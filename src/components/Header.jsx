import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Drawer,
    Menu,
    MenuItem,
    TextField,
    InputAdornment,
    useMediaQuery,
    useTheme,
    Badge,
    Collapse,
    ListItemIcon,
    Grid,
    styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import '@fontsource/montserrat';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme.palette.primary.main} transparent`,
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '3px',
        },
    },
}));

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        width: 600,
        maxWidth: '45vw',
        padding: '24px',
        marginTop: '8px',
        boxShadow: '5px 10px 21px 5px rgba(0, 0, 0, .1)',
        borderBottom: '5px solid #e62e2d',
        borderRadius: 0,
        position: 'absolute',
        left: "524px",
        zIndex: 1000,
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 0, 0, .15)',
    },
});

const NavText = styled(Typography)({
    position: 'relative',
    display: 'inline-block',
    padding: '4px 0',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
    '&:hover': {
        color: '#e62e2d',
    },
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        height: '2px',
        width: 0,
        backgroundColor: '#e62e2d',
        transition: 'width 0.3s ease',
    },
    '&::before': {
        top: 0,
        left: 0,
    },
    '&::after': {
        bottom: 0,
        right: 0,
    },
    '&:hover::before, &:hover::after': {
        width: '100%',
    },
});

const CategoryTitle = styled(Typography)({
    fontWeight: '600 !important',
    fontSize: '0.875rem !important',
    color: '#343a40 !important',
    textTransform: 'uppercase',
    marginBottom: '8px !important',
    fontFamily: '"Montserrat", sans-serif',
    '&:hover': {
        color: '#e62e2d !important',
    }
});

const ViewAllLink = styled(Typography)({
    fontWeight: '500 !important',
    fontSize: '0.8125rem !important',
    color: '#6c757d !important',
    fontFamily: '"Montserrat", sans-serif',
    '&:hover': {
        color: '#e62e2d !important',
        textDecoration: 'underline'
    }
});

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [menuTimeout, setMenuTimeout] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuOpen = (event, menu) => {
        // Clear any pending timeout
        if (menuTimeout) {
            clearTimeout(menuTimeout);
            setMenuTimeout(null);
        }
        setAnchorEl(event.currentTarget);
        setActiveMenu(menu);
    };

    const handleMenuClose = () => {
        const timeout = setTimeout(() => {
            setAnchorEl(null);
            setActiveMenu(null);
        }, 300);
        setMenuTimeout(timeout);
    };

    const cancelMenuClose = () => {
        if (menuTimeout) {
            clearTimeout(menuTimeout);
            setMenuTimeout(null);
        }
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const navItems = [
        {
            text: 'Transition Eyeglasses',
            href: '/transition-eyeglasses',
            dropdown: false
        },
        {
            text: 'Polarized Sunglasses',
            href: '/polarized-sunglasses',
            dropdown: false
        },
        {
            text: 'Sunglasses',
            href: '/sunglasses',
            dropdown: true,
            items: [
                {
                    title: 'Polarized Sunglasses',
                    href: '#',
                    links: ['View All', 'Men Polarized', 'Women Polarized']
                },
                {
                    title: 'Mens Sunglasses',
                    href: '#',
                    links: ['View All', 'Aviator', 'Wayfarer', 'Sports']
                },
                {
                    title: 'Women Sunglasses',
                    href: '#',
                    links: ['View All', 'Cat Eye', 'Oversized', 'Round']
                }
            ]
        },
        {
            text: 'Eyeglasses',
            href: '/eyeglasses',
            dropdown: true,
            items: [
                {
                    title: 'Transition Eyeglasses',
                    href: '#',
                    links: ['View All']
                },
                {
                    title: 'Mens Eyeglasses',
                    href: '#',
                    links: ['View All']
                },
                {
                    title: 'Womens Eyeglasses',
                    href: '#',
                    links: ['View All']
                }
            ]
        },
        {
            text: 'New Arrival',
            href: '/newarrival',
            dropdown: false
        },
        {
            text: 'Screen Protection Glasses',
            href: '/screenprotection',
            dropdown: false
        },
        {
            text: 'Premium',
            href: '/premium',
            dropdown: true,
            items: [
                {
                    title: 'Premium Sunglasses',
                    href: '#',
                    links: ['View All']
                },
                {
                    title: 'Premium Eyeglasses',
                    href: '#',
                    links: ['View All']
                }
            ]
        }
    ];

    const categories = [
        {
            name: 'SHOP',
            href: '#',
            subcategories: []
        },
        {
            name: 'SUNGLASSES',
            href: '#',
            subcategories: []
        },
        {
            name: 'EYEGLASSES',
            href: '#',
            subcategories: []
        },
        {
            name: 'NEW ARRIVAL',
            href: '#',
            subcategories: []
        },
        {
            name: 'SCREEN PROTECTION GLASSES',
            href: '#',
            subcategories: []
        },
        {
            name: 'KIDS',
            href: '#',
            subcategories: []
        },
        {
            name: 'ACCESSORIES',
            href: '#',
            subcategories: []
        },
        {
            name: 'PREMIUM',
            href: '#',
            subcategories: []
        },
        {
            name: 'SALE - UPTO 33% DISCOUNT',
            href: '#',
            subcategories: []
        }
    ];

    const drawer = (
        <Box sx={{
            width: 320,
            height: '100%',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Close button */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
            }}>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Mobile menu icons */}
            <Box sx={{
                display: { xs: 'flex', lg: 'none' },
                justifyContent: 'center',
                bgcolor: 'primary.main',
                py: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
            }}>
                <IconButton href="#" sx={{ color: 'white', flexDirection: 'column', mx: 2 }}>
                    <HomeIcon />
                    <Typography variant="caption" sx={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Home</Typography>
                </IconButton>
                <IconButton href="#" sx={{ color: 'white', flexDirection: 'column', mx: 2 }}>
                    <PersonOutlineIcon />
                    <Typography variant="caption" sx={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Sign in</Typography>
                </IconButton>
                <IconButton href="#" sx={{ color: 'white', flexDirection: 'column', mx: 2 }}>
                    <ShoppingCartOutlinedIcon />
                    <Typography variant="caption" sx={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>My Cart</Typography>
                </IconButton>
                <IconButton href="#" sx={{ color: 'white', flexDirection: 'column', mx: 2 }}>
                    <LocalShippingIcon />
                    <Typography variant="caption" sx={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Track Order</Typography>
                </IconButton>
            </Box>

            {/* Categories */}
            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '3px',
                }
            }}>
                <Typography variant="subtitle1" sx={{
                    bgcolor: 'grey.900',
                    color: 'white',
                    py: 2,
                    px: 2,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                }}>
                    CATEGORIES
                </Typography>

                <List sx={{ py: 0 }}>
                    {categories.map((category) => (
                        <React.Fragment key={category.name}>
                            <ListItem
                                button
                                onClick={() => toggleCategory(category.name)}
                                sx={{
                                    py: 1.5,
                                    px: 2,
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={category.name}
                                    primaryTypographyProps={{
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        fontFamily: '"Montserrat", sans-serif'
                                    }}
                                />
                                {category.subcategories.length > 0 && (
                                    expandedCategories[category.name] ?
                                        <KeyboardArrowDownIcon sx={{ color: 'grey.600' }} /> :
                                        <KeyboardArrowRightIcon sx={{ color: 'grey.600' }} />
                                )}
                            </ListItem>

                            {category.subcategories.length > 0 && (
                                <Collapse in={expandedCategories[category.name]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {category.subcategories.map((subcategory) => (
                                            <React.Fragment key={subcategory.name}>
                                                <ListItem
                                                    button
                                                    onClick={() => subcategory.items && subcategory.items.length > 0 && toggleCategory(subcategory.name)}
                                                    sx={{
                                                        pl: 4,
                                                        py: 1.5,
                                                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                                        }
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={subcategory.name}
                                                        primaryTypographyProps={{
                                                            fontWeight: 600,
                                                            textTransform: 'capitalize',
                                                            fontFamily: '"Montserrat", sans-serif'
                                                        }}
                                                    />
                                                    {subcategory.items && subcategory.items.length > 0 && (
                                                        expandedCategories[subcategory.name] ?
                                                            <KeyboardArrowDownIcon sx={{ color: 'grey.600' }} /> :
                                                            <KeyboardArrowRightIcon sx={{ color: 'grey.600' }} />
                                                    )}
                                                </ListItem>

                                                {subcategory.items && subcategory.items.length > 0 && (
                                                    <Collapse in={expandedCategories[subcategory.name]} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                            {subcategory.items.map((item) => (
                                                                <ListItem
                                                                    button
                                                                    key={item}
                                                                    sx={{
                                                                        pl: 6,
                                                                        py: 1.5,
                                                                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                                                        '&:hover': {
                                                                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                                                        }
                                                                    }}
                                                                >
                                                                    <ListItemText
                                                                        primary={item}
                                                                        primaryTypographyProps={{
                                                                            fontWeight: 600,
                                                                            textTransform: 'capitalize',
                                                                            fontFamily: '"Montserrat", sans-serif'
                                                                        }}
                                                                    />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </Collapse>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
                color: '#343a40 !important',
                boxShadow: 'none',
                py: 1
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side - Logo and Menu button (mobile) */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Link to="/" style={{ textDecoration: 'none' }}>  {/* Replace "/" with your desired route */}
                        <Box
                            component="img"
                            src={logo}
                            alt="Chashmay"
                            sx={{ height: 49, width: 132 }}
                        />
                    </Link>
                </Box>

                {/* Center - Navigation items (desktop) */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', mx: 2 }}>
                        {navItems.map((item) => (
                            <Box
                                key={item.text}
                                sx={{ position: 'relative' }}
                                onMouseEnter={(e) => item.dropdown ? handleMenuOpen(e, item.text) : null}
                                onMouseLeave={handleMenuClose}
                            >
                                <Button
                                    href={item.href}
                                    sx={{
                                        color: '#343a40 !important',
                                        textTransform: 'uppercase',
                                        fontSize: '0.85rem !important',
                                        fontFamily: '"Montserrat", sans-serif',
                                        fontWeight: 600,
                                        minWidth: 'auto',
                                        px: 1.5,
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    <NavText sx={{ fontSize: '0.85rem !important' }}>
                                        {item.text}
                                    </NavText>
                                </Button>

                                {item.dropdown && (
                                    <StyledMenu
                                        anchorEl={anchorEl}
                                        open={activeMenu === item.text}
                                        onClose={handleMenuClose}
                                        MenuListProps={{
                                            onMouseEnter: cancelMenuClose,
                                            onMouseLeave: handleMenuClose,
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        disableAutoFocusItem
                                        disableRestoreFocus
                                        keepMounted
                                        sx={{
                                            pointerEvents: 'none',
                                            '& .MuiPaper-root': {
                                                pointerEvents: 'auto'
                                            }
                                        }}
                                    >
                                        <Grid container spacing={4}>
                                            {item.items.map((subItem) => (
                                                <Grid item xs={4} key={subItem.title}>
                                                    <Box sx={{ mb: 2 }}>
                                                        <CategoryTitle component="a" href={subItem.href}>
                                                            {subItem.title}
                                                        </CategoryTitle>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            {subItem.links.map((link) => (
                                                                <ViewAllLink
                                                                    key={link}
                                                                    component="a"
                                                                    href={subItem.href}
                                                                    sx={{
                                                                        mb: 1,
                                                                        textDecoration: 'none'
                                                                    }}
                                                                >
                                                                    {link}
                                                                </ViewAllLink>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </StyledMenu>
                                )}
                            </Box>
                        ))}
                    </Box>
                )}


                <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    {searchOpen && (
                        <Box sx={{
                            position: 'absolute',
                            top: -5,
                            right: 0,
                            width: 200,
                            zIndex: 1
                        }}>
                            <Box component="form" sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    width: '100%',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    pl: 4
                                }}>
                                    <IconButton
                                        onClick={toggleSearch}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            p: 0
                                        }}
                                    >
                                        <CloseIcon sx={{ width: 12, height: 12 }} />
                                    </IconButton>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        placeholder="search your products"
                                        sx={{
                                            ml: 1,
                                            '& .MuiInputBase-root': {
                                                borderColor: 'primary.main',
                                                borderRadius: 1,
                                                height: 40,
                                                py: 4
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: '0.875rem',
                                                fontFamily: '"Montserrat", sans-serif'
                                            }
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: {
                                                '&:focus': {
                                                    borderColor: 'primary.main'
                                                }
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    )}

                    {/* Regular Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {!searchOpen && (
                            <IconButton onClick={toggleSearch} sx={{ mr: 1 }}>
                                <SearchIcon sx={{ width: 22, height: 22, color: '#343a40 !important' }} />
                            </IconButton>
                        )}

                        <IconButton href="#" sx={{ mr: 1 }}>
                            <PersonOutlineIcon sx={{ width: 22, height: 22, color: '#343a40 !important' }} />
                        </IconButton>

                        <IconButton href="#" sx={{ mr: 1 }}>
                            <FavoriteBorderIcon sx={{ width: 22, height: 22, color: '#343a40 !important' }} />
                        </IconButton>

                        <IconButton href="/addtocart">
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon sx={{ width: 22, height: 22, color: '#343a40 !important' }} />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>

            {/* Mobile drawer */}
            <StyledDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 320,
                    },
                }}
            >
                {drawer}
            </StyledDrawer>
        </AppBar>
    );
};

export default Header;