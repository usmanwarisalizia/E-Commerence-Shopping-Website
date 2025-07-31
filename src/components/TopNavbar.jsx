import React from 'react';
import { useMediaQuery } from '@mui/material';
import {
    TopNavbarContainer,
    InnerContainer,
    FlexContainer,
    MarqueeBox,
    MarqueeText,
    NavLinksContainer,
    NavLinkText
} from '../Stylingcomponents/navstyle';
import '@fontsource/montserrat';

const TopNavbar = () => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <TopNavbarContainer component="section">
            <InnerContainer>
                <FlexContainer>
                    {/* Welcome text with marquee effect */}
                    <MarqueeBox>
                        <MarqueeText variant="body2">
                            Welcome to the world of Chashmay. Now Delivering Worldwide!
                        </MarqueeText>
                    </MarqueeBox>

                    {/* Navigation links - hidden on mobile */}
                    {!isMobile && (
                        <NavLinksContainer>
                            <a href="tel:+923152618824" style={{ textDecoration: 'none' }}>
                                <NavLinkText variant="body2">
                                    Call Us: +923152618824
                                </NavLinkText>
                            </a>
                            <a href="/contact" style={{ textDecoration: 'none' }}>
                                <NavLinkText variant="body2">
                                    Contact
                                </NavLinkText>
                            </a>
                            <a href="/helpline" style={{ textDecoration: 'none' }}>
                                <NavLinkText variant="body2">
                                    Help
                                </NavLinkText>
                            </a>
                            <a href="/trackorder" style={{ textDecoration: 'none' }}>
                                <NavLinkText variant="body2">
                                    Track Order
                                </NavLinkText>
                            </a>
                        </NavLinksContainer>
                    )}
                </FlexContainer>
            </InnerContainer>
        </TopNavbarContainer>
    );
}

export default TopNavbar;