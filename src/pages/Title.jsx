import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Title = ({ text1, text2 }) => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"  // Added for center alignment
            gap={2}
            mb={3}
            sx={{
                width: '100%',  // Ensure full width for proper centering
            }}
        >
            <Typography
                variant="h2"
                align="center"
                color="text.secondary"
                component="div"
                fontWeight={600}
                letterSpacing="0.15rem"
                gutterBottom
                sx={{
                    fontFamily: '"Avenir LT Pro 35 Light", sans-serif',
                    fontSize: { xs: '1.8rem', sm: '40px' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.2,
                    marginBottom: 0,  // Override gutterBottom margin
                    '& span': {
                        color: 'text.primary',
                        fontWeight: theme.typography.fontWeightMedium,
                        ml: 0.5
                    }
                }}
            >
                {text1}
                <span>{text2}</span>
            </Typography>
            <Box
            // sx={{
            //     width: { xs: '32px', sm: '48px' },
            //     height: { xs: '1px', sm: '2px' },
            //     backgroundColor: 'text.primary'
            // }}
            />
        </Box>
    );
};

export default Title;