import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import {
    Sync as ExchangeIcon,
    AssignmentReturn as ReturnIcon,
    SupportAgent as SupportIcon,
} from "@mui/icons-material";
import Title from "../pages/Title";

const OurPolicy = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Title Section */}
            <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    mb: 8,
                    fontFamily: "'Poppins', sans-serif",
                    color: "text.primary",
                }}
            >
                <Title text1="Our" text2="Policy" />
            </Typography>

            {/* Policy Items */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-around",
                    gap: { xs: 6, sm: 4 },
                    textAlign: "center",
                }}
            >
                <Grid item xs={12} sm={4}>
                    <ExchangeIcon sx={{ fontSize: 60, mb: 3, color: "black" }} />
                    <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={600}
                        sx={{ mb: 1.5, fontFamily: "'Poppins', sans-serif" }}
                    >
                        Easy Exchange Policy
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem" }}
                    >
                        We offer hassle free exchange policy
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <ReturnIcon sx={{ fontSize: 60, mb: 3, color: "black" }} />
                    <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={600}
                        sx={{ mb: 1.5, fontFamily: "'Poppins', sans-serif" }}
                    >
                        7 Days Return Policy
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem" }}
                    >
                        We provide 7 days free return policy
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <SupportIcon sx={{ fontSize: 60, mb: 3, color: "black" }} />
                    <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={600}
                        sx={{ mb: 1.5, fontFamily: "'Poppins', sans-serif" }}
                    >
                        Best Customer Support
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem" }}
                    >
                        We provide 24/7 free customer support
                    </Typography>
                </Grid>
            </Box>
        </Container>
    );
};

export default OurPolicy;