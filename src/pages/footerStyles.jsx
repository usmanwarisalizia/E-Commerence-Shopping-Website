import shape3 from '../assets/shape3.webp';
import bgpattern from '../assets/bgpattern.webp';
import iconsuns from '../assets/iconsuns.png';

export const footerStyles = (theme) => ({
    footerContainer: {
        position: 'relative',
        color: '#ffffff',
        mt: 'auto',
        background: 'linear-gradient(336deg, #450000 10%, #0e0e0e 60%, #000000 100%)',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: "390px",
            bottom: 0,
            left: 0,
            right: 0,
            height: '39%',
            objectFit: 'contain',
            backgroundImage: `url(${bgpattern})`,
            backgroundSize: '100% 75%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            opacity: 0.9,
            zIndex: 0,
            filter: `contrast(1.5) brightness(1.3) blur(0.3px)`,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
            '@media (max-width: 900px)': {
                display: 'none'
            }
        },
    },
    mainContent: {
        position: 'relative',
        py: { xs: 5, md: 2 },
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '-149px',
            right: '-270px',
            width: '450px',
            height: '310px',
            backgroundImage: `url(${shape3})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            opacity: 0.4,
            zIndex: 0,
            '@media (max-width: 900px)': {
                display: 'none'
            }
        }
    },
    newsletterSection: {
        position: 'relative',
        zIndex: 1,
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 8 },
        px: 2,
        textAlign: 'center',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            zIndex: -1,
        },
        '& .sun-icon': {
            position: 'absolute',
            backgroundImage: `url(${iconsuns})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0) invert(1) opacity(0.4)',
            zIndex: -1,
            animation: 'float 8s infinite ease-in-out',
        },
        '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '25%': { transform: 'translateY(-15px) rotate(5deg)' },
            '50%': { transform: 'translateY(0) rotate(0deg)' },
            '75%': { transform: 'translateY(10px) rotate(-5deg)' }
        }
    },
    sunIcon: (position) => ({
        position: 'absolute',
        backgroundImage: `url(${iconsuns})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0) invert(1) opacity(0.4)',
        zIndex: -1,
        animation: 'float 8s infinite ease-in-out',
        ...position
    }),
    newsletterTitle: {
        color: '#ffffff',
        fontWeight: 700,
        mb: 1,
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1
    },
    newsletterSubtitle: {
        color: "rgba(255,255,255,0.9)",
        mb: 4,
        fontSize: { xs: '0.875rem', sm: '1rem' },
        maxWidth: '600px',
        mx: 'auto',
        textShadow: '0 1px 2px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 1
    },
    newsletterForm: {
        maxWidth: 500,
        mx: "auto",
        px: 2,
        position: 'relative',
        zIndex: 1
    },
    emailInput: {
        bgcolor: "rgba(255,255,255,0.95)",
        borderRadius: 999,
        "& .MuiOutlinedInput-root": {
            borderRadius: 999,
            "& fieldset": {
                borderColor: "transparent"
            },
            "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.3)"
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.accent.main,
                boxShadow: `0 0 0 2px ${theme.palette.accent.main}`
            }
        },
        "& .MuiInputBase-input": {
            py: 1.5,
            px: 3
        },
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }
    },
    subscribeButton: {
        px: 4,
        py: 1.5,
        borderRadius: 999,
        backgroundColor: theme.palette.accent.main,
        textTransform: "none",
        fontWeight: 600,
        whiteSpace: 'nowrap',
        fontSize: '1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        "&:hover": {
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
            transform: 'translateY(-1px)'
        },
        transition: 'all 0.3s ease'
    },
    linkStyles: {
        fontSize: { xs: 14, sm: 15 },
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        lineHeight: '27px',
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        position: 'relative',
        display: 'inline-block',
        padding: '4px 0',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: theme.palette.accent.main,
            '&::before, &::after': {
                width: '50%',
                opacity: 1
            }
        },
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            width: 0,
            height: '1px',
            backgroundColor: theme.palette.accent.main,
            transition: 'all 0.3s ease',
            opacity: 0
        },
        '&::before': { left: '50%' },
        '&::after': { right: '50%' }
    },
    sectionTitle: (isMobile) => ({
        mb: 1.5,
        fontSize: 15,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        color: theme.palette.accent.main,
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: isMobile ? 'pointer' : 'default',
        '&:hover': {
            color: isMobile ? '#ffffff' : theme.palette.accent.main
        }
    }),
    divider: {
        borderColor: 'rgba(255,255,255,0.1)',
        mb: 1
    },
    socialIcon: {
        color: '#ffffff',
        backgroundColor: 'rgba(255,255,255,0.1)',
        '&:hover': {
            backgroundColor: theme.palette.accent.main,
            color: '#000',
            transform: 'scale(1.1)'
        },
        transition: 'all 0.3s ease'
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: "4px",
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    iconImage: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1,
    },
    logoImage: {
        width: "220px",
        height: 'auto',
        objectFit: 'contain',
        filter: 'brightness(2) invert(1)',
    },
    logoText: {
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 1.5,
        fontSize: '12px',
        textAlign: 'left',
        width: '100%',
        maxWidth: '220px'
    },
    footerBottom: {
        display: 'flex',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3,
        pt: 1
    },
    countrySelect: {
        color: '#ffffff',
        '& .MuiSelect-icon': { color: theme.palette.accent.main },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.accent.main
        },
        backgroundColor: 'rgba(255,255,255,0.1)',
        '& .MuiMenuItem-root': {
            color: '#000'
        }
    },
    copyrightText: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)'
    },
    paymentMethod: {
        height: 24,
        width: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: theme.palette.accent.main,
            transform: 'scale(1.1)',
            transition: 'all 0.3s ease'
        }
    }
});