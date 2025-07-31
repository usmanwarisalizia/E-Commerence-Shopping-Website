/* eslint-disable no-unused-vars */
import { Box, Typography, styled } from '@mui/material';

export const TopNavbarContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#e62e2d',
    paddingTop: '4px',
    paddingBottom: '4px',
    borderBottom: '1px solid #000',
    color: 'white',
    fontFamily: '"Montserrat", sans-serif',
    overflow: 'hidden'
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: '0 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    }
}));

export const FlexContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
    }
}));

export const MarqueeBox = styled(Box)(({ theme }) => ({
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    marginTop: '4px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        width: '50%',
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'left'
    }
}));

export const MarqueeText = styled(Typography)({
    fontSize: '13px',
    lineHeight: '19.5px',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    letterSpacing: 'normal',
    textTransform: 'uppercase',
    color: '#fff',
    display: 'inline-block',
    paddingLeft: '100%',
    animation: 'marquee 15s linear infinite',
    '@keyframes marquee': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }
    }
});

export const NavLinksContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    paddingLeft: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap',
    gap: theme.spacing(2),
    paddingRight: 0
}));

export const NavLinkText = styled(Typography)({
    fontSize: '14px',
    lineHeight: '19.5px',
    fontWeight: 400,
    letterSpacing: 'normal',
    color: '#fff',
    whiteSpace: 'nowrap',
    "&:hover": {
        textDecoration: 'underline'
    }
});