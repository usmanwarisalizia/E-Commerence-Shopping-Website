import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItem,
    Link,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
    Collapse,
    Stack,
    useMediaQuery,
    useTheme,
    Button,
    TextField
} from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    ExpandMore,
    ExpandLess
} from '@mui/icons-material';
import { countries, paymentMethods } from '../assets';
import { footerStyles } from './footerStyles';
import iconsuns from '../assets/iconsuns.png';
import logo from '../assets/logo.svg';

const Footer = () => {
    const [country, setCountry] = useState('US');
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [expanded, setExpanded] = useState({
        mainMenu: false,
        policy: false,
        contactUs: false
    });

    const styles = footerStyles({
        ...theme,
        palette: {
            ...theme.palette,
            accent: theme.palette.accent || { main: '#e35353', } // Fallback
        }
    });

    const footerLinks = {
        mainMenu: [
            { text: 'Home', href: '/' },
            { text: 'Customize Gifts', href: '/collections/customize-t-shirt' },
            { text: 'Best Selling', href: '/collections/fathers-day-gifts' },
            { text: 'Educational Toys', href: '/collections/educational-toys' },
            { text: 'Best July4th Collection', href: '/collections/best-july-4th-collection' }
        ],
        policy: [
            { text: 'Return and refund policy', href: '/policies/refund-policy' },
            { text: 'Shipping Policy', href: '/policies/shipping-policy' },
            { text: 'Privacy Policy', href: '/policies/privacy-policy' },
            { text: 'Terms of Service', href: '/policies/terms-of-service' }
        ]
    };

    const socialLinks = [
        { icon: <Facebook />, href: 'https://www.facebook.com/shopify', label: 'Facebook' },
        { icon: <Twitter />, href: 'https://twitter.com/shopify', label: 'Twitter' },
        { icon: <Instagram />, href: 'https://instagram.com/shopify', label: 'Instagram' }
    ];

    const handleCountryChange = (event) => setCountry(event.target.value);
    const toggleSection = (section) => setExpanded(prev => ({ ...prev, [section]: !prev[section] }));

    const LinkItem = ({ href, text }) => (
        <ListItem sx={{ px: 0, py: 0.5 }}>
            <Link href={href} color="inherit" underline="none" sx={styles.linkStyles}>
                {text}
            </Link>
        </ListItem>
    );

    return (
        <Box component="footer" sx={styles.footerContainer}>
            {/* Newsletter Section */}
            <Box sx={styles.newsletterSection}>
                {/* Sun icons */}
                {[
                    { top: '10%', left: '15%', width: '40px', height: '40px' },
                    { top: '25%', left: '80%', width: '35px', height: '35px' },
                    { top: '40%', left: '10%', width: '50px', height: '50px' },
                    { top: '60%', left: '75%', width: '30px', height: '30px' },
                    { top: '75%', left: '20%', width: '45px', height: '45px' },
                    { top: '85%', left: '65%', width: '35px', height: '35px' },
                    { top: '15%', left: '50%', width: '25px', height: '25px' },
                    { top: '35%', left: '90%', width: '40px', height: '40px' },
                    { top: '55%', left: '5%', width: '30px', height: '30px' },
                    { top: '70%', left: '40%', width: '50px', height: '50px' }
                ].map((position, index) => (
                    <Box key={index} className="sun-icon" sx={styles.sunIcon(position)} />
                ))}

                <Typography variant="h3" sx={styles.newsletterTitle}>
                    Subscribe to our newsletter
                </Typography>

                <Typography variant="body1" sx={styles.newsletterSubtitle}>
                    to stay up to date on all the latest news and offers from us
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={styles.newsletterForm}
                >
                    <TextField
                        placeholder="Enter your email address"
                        variant="outlined"
                        size="medium"
                        fullWidth
                        sx={styles.emailInput}
                    />

                    <Button
                        variant="contained"
                        sx={styles.subscribeButton}
                    >
                        Subscribe
                    </Button>
                </Stack>
            </Box>

            {/* Main Footer Content */}
            <Box sx={styles.mainContent}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={{ xs: 3, md: 4 }} sx={{ pb: { xs: 3, md: 0 }, flexDirection: { xs: 'column', md: 'row' } }}>
                        {['mainMenu', 'policy'].map((section) => (
                            <Grid item xs={12} sm={6} md={3} key={section}>
                                <Typography
                                    variant="h6"
                                    sx={styles.sectionTitle(isMobile)}
                                    onClick={() => isMobile && toggleSection(section)}
                                >
                                    {section === 'mainMenu' ? 'Main menu' : 'Policy'}
                                    {isMobile && (expanded[section] ? <ExpandLess /> : <ExpandMore />)}
                                </Typography>
                                <Divider sx={styles.divider} />
                                <Collapse in={!isMobile || expanded[section]}>
                                    <List dense sx={{ px: 0 }}>
                                        {footerLinks[section].map((item, index) => (
                                            <LinkItem key={index} href={item.href} text={item.text} />
                                        ))}
                                    </List>
                                </Collapse>
                            </Grid>
                        ))}

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" sx={styles.sectionTitle(isMobile)}>
                                About Us
                            </Typography>
                            <Divider sx={styles.divider} />
                            <Typography variant="body1" sx={{ fontSize: 15, mb: 2, color: 'rgba(255,255,255,0.8)' }}>
                                Unique and Affordable Personalized Gifts.
                                <br />
                                Find us on Social Media
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {socialLinks.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        aria-label={social.label}
                                        sx={styles.socialIcon}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={styles.sectionTitle(isMobile)}
                                onClick={() => isMobile && toggleSection('contactUs')}
                            >
                                Contact Us
                                {isMobile && (expanded.contactUs ? <ExpandLess /> : <ExpandMore />)}
                            </Typography>
                            <Divider sx={styles.divider} />
                            <Collapse in={!isMobile || expanded.contactUs}>
                                <Typography variant="body1" sx={{ fontSize: 15, mb: 1, color: 'rgba(255,255,255,0.8)' }}>
                                    ContactUs@enjoypersonalized.com
                                </Typography>
                                <Link href="/pages/track-your-order" sx={styles.linkStyles}>
                                    Track your Order
                                </Link>
                            </Collapse>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Collapse in={!isMobile || expanded.companyInfo}>
                                <Box sx={styles.logoContainer}>
                                    <Box sx={styles.iconImage}>
                                        <Box
                                            component="img"
                                            src={iconsuns}
                                            alt="Eyeglasses"
                                            sx={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                filter: 'brightness(1) invert(1)',
                                            }}
                                        />
                                    </Box>

                                    <Link href="/">
                                        <Box
                                            component="img"
                                            src={logo}
                                            alt="Chashmay"
                                            sx={styles.logoImage}
                                        />
                                    </Link>

                                    <Typography variant="body2" sx={styles.logoText}>
                                        Premium eyewear from Pakistan's leading brand.
                                    </Typography>
                                </Box>
                            </Collapse>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />

                    <Box sx={styles.footerBottom}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'center',
                            gap: 3
                        }}>
                            <FormControl size="small" sx={{ minWidth: 200 }}>
                                <InputLabel sx={{ color: theme.palette.accent?.main }}>Country</InputLabel>
                                <Select
                                    value={country}
                                    onChange={handleCountryChange}
                                    label="Country"
                                    sx={styles.countrySelect}
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country.code} value={country.code}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src={`https://enjoypersonalized.com/cdn/shop/t/3/assets/${country.code}.svg`}
                                                    alt={country.code}
                                                    width="20"
                                                    height="15"
                                                    style={{ marginRight: 8 }}
                                                />
                                                {country.name}
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Typography variant="body2" sx={styles.copyrightText}>
                                © 2025{' '}
                                <Link href="/" color={theme.palette.accent?.main} underline="hover">
                                    Enjoy Personalized Gifts.
                                </Link>{' '}
                                All rights reserved.
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            justifyContent: { xs: 'center', lg: 'flex-end' },
                            width: { xs: '100%', lg: 'auto' },
                            mb: { xs: 2, lg: 0 }
                        }}>
                            {paymentMethods.map((method) => (
                                <Box key={method.name} sx={styles.paymentMethod}>
                                    {method.svg}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;