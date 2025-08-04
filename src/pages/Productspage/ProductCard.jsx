import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Animation for the rotating dashed circle
const rotate = keyframes`
  100% {
    stroke-dashoffset: -1200;
  }
`;

// Styled animated red dashed circle
const AnimatedStroke = styled("circle")`
  stroke: red;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 6, 6;
  animation: ${rotate} 20s linear infinite;
`;

const ProductCard = ({ product, index }) => {
  const buttonRef = useRef();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: { xs: "40px", sm: "80px" },
        "@media (max-width: 900px)": { padding: "10px 0" },
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "500px", // 249 important cards for reponsive
          height: "293px",
          position: "relative",
          overflow: "visible",
          padding: "26px 25px",
          textAlign: "center",
          boxShadow: "0px 4px 54px 0px rgba(0, 0, 0, 0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "white",
          borderRadius: "16px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 8px 64px 0px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-5px)",
          },
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "180px",
            height: "150px",
            marginTop: "-104px",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "78%", //
              height: "108%",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              animation: "scaleIn 1s ease-out",
            }}
          />
          <svg
            width="290"
            height="290"
            viewBox="0 0 400 200"
            style={{
              position: "absolute",
              top: "53%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <defs>
              <mask id={`outer-stroke-mask-${index}`}>
                <rect x="0" y="0" width="350" height="200" fill="white" />
                <circle cx="150" cy="100" r="65" fill="black" />
                <circle cx="250" cy="100" r="65" fill="black" />
              </mask>

              <radialGradient
                id={`redDotsGradient-${index}`}
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#cc0000" stopOpacity="0.4" />
              </radialGradient>
            </defs>

            <g mask={`url(#outer-stroke-mask-${index})`}>
              <AnimatedStroke
                cx="150"
                cy="100"
                r="68"
                stroke={`url(#redDotsGradient-${index})`}
              />
              <AnimatedStroke
                cx="250"
                cy="100"
                r="68"
                stroke={`url(#redDotsGradient-${index})`}
              />
            </g>
          </svg>
        </Box>

        <CardContent
          sx={{
            textAlign: "center",
            width: "100%",
            background: "transparent",
            p: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            "&:last-child": { paddingBottom: "0" },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#010f1c",
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "1.2",
                textTransform: "capitalize",
                mb: "4px",
              }}
            >
              {product.title}
            </Typography>

            <Box
              sx={{
                color: "gold",
                fontSize: "14px",
                mb: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
              <Typography
                variant="caption"
                sx={{ ml: 0.5, color: "text.secondary" }}
              >
                ({product.rating})
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                color: "#5c6574",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "1.2",
                mt: "4px",
                mb: "16px",
              }}
            >
              {product.features}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#eb0029",
                fontSize: "18px",
                fontWeight: 700,
                mb: "24px",
              }}
            >
              ${product.price.toFixed(2)}
            </Typography>

            <Button
              ref={buttonRef}
              variant="contained"
              size="small"
              startIcon={<ShoppingCartIcon />}
              href="/addtocart"
              sx={{
                padding: "13px 40px",
                borderRadius: "100px",
                backgroundColor: `rgba(235, 0, 41, 0.1)`,
                color: "#eb0029",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                textDecoration: "none", // Added text decoration none
                "&:hover": {
                  color: "white",
                  transform: "scale(1.05)",
                  "& .MuiSvgIcon-root": { color: "white" },
                  textDecoration: "none", // Added for hover state
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "0%",
                  height: "100%",
                  backgroundColor: "#eb0029",
                  transition: "width 0.3s ease",
                  zIndex: -1,
                  borderRadius: "100px",
                },
                "&:hover::before": { width: "100%" },
                "& .MuiSvgIcon-root": {
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
