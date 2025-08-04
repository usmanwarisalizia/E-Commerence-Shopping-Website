import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  Grow,
  Container,
  Chip,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Desigensno1 from "../../assets/ProductCards/Desigensno1.png";

// Import your product data
import { singleProduct } from "../../productsAssets";

const Carts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedGender, setSelectedGender] = useState("MEN");
  const [currentImage, setCurrentImage] = useState(0);
  const [openImageModal, setOpenImageModal] = useState(false);
  const modalSwiperRef = useRef(null);

  const images = [Desigensno1, Desigensno1, Desigensno1];

  const ProductImage = styled("img")({
    width: "100%",
    height: "100%",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    objectFit: "contain",
    aspectRatio: "2 / 3",
    "&:hover": {
      transform: "scale(1.02)",
    },
  });

  const StyledSwiper = styled(Swiper)({
    "--swiper-navigation-color": theme.palette.common.white,
    "--swiper-pagination-color": theme.palette.common.white,
  });

  return (
    <Container
      maxWidth="lg"
      sx={{ py: isMobile ? 2 : 3, px: "12px !important" }}
    >
      <Grid container spacing={0} justifyContent="space-between">
        {/* Product Images - Left Side */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={12}
          order={{ xs: 1 }}
          sx={{
            width: { xl: "50%", lg: "45%", md: "50%", xs: "100%" },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
            {/* Main Image Viewer */}
            <Box
              sx={{
                flex: 1,
                borderRadius: "8px",
                overflow: "hidden",
                height: isMobile ? "400px" : "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <ProductImage
                src={images[currentImage]}
                alt={`Main Product View`}
                onClick={() => setOpenImageModal(true)}
              />
            </Box>

            {/* Thumbnails */}
            <Box
              sx={{
                width: "80px",
                maxHeight: isMobile ? "400px" : "600px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                pr: "4px",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ccc",
                  borderRadius: "10px",
                },
              }}
            >
              {images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    border:
                      currentImage === index
                        ? "2px solid #eb0c34"
                        : "2px solid transparent",
                    borderRadius: "4px",
                    cursor: "pointer",
                    overflow: "hidden",
                    transition: "border 0.3s",
                    "&:hover": { border: "2px solid #eb0c34" },
                  }}
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Product Details - Right Side */}

        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={12}
          order={{ xs: 2 }}
          sx={{
            maxWidth: { xs: "100%", md: "42%" },
            width: { xs: "100%", md: "calc(42% - 8px / 2)" },
            padding: { xs: "20px 16px", md: "60px 0 20px 0rem" },
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ mb: "30px" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 400,
                fontSize: { xs: "18px", sm: "20px" },
                textTransform: "uppercase",
                mb: "15px",
                lineHeight: 1.2,
              }}
            >
              {singleProduct.title}
            </Typography>

            <Typography
              variant="body2"
              component="div"
              sx={{
                mb: "5px",
                fontSize: { xs: "9px", sm: "10px" },
                color: "#9f9f9f",
                letterSpacing: "0.5px",
              }}
            >
              {singleProduct.productCode}
            </Typography>

            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 700,
                my: { xs: "15px", sm: "20px" },
                lineHeight: 1.5,
                fontSize: { xs: "16px", sm: "18px" },
                color: "#000000",
              }}
            >
              {singleProduct.price.toLocaleString()}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: { xs: "1.5", sm: "1.8" },
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "13px" },
                my: "5px",
                letterSpacing: "0.5px",
                color: "#000000",
              }}
            >
              {singleProduct.description}
            </Typography>
          </Box>

          {/* Product Details */}
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {/* FIT Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "5px", sm: 0 },
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#000000",
                  width: { xs: "100%", sm: "80px" },
                  flexShrink: 0,
                }}
              >
                FIT
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000",
                }}
              >
                Regular Fit
              </Typography>
            </Box>

            {/* COLORS Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "flex-start", sm: "center" },
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "10px", sm: 0 },
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#000000",
                  width: { xs: "100%", sm: "80px" },
                  flexShrink: 0,
                }}
              >
                COLORS
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {["black", "gold", "silver"].map((color) => (
                  <Box
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      border:
                        selectedColor === color
                          ? "1px solid #000"
                          : "1px solid #eee",
                    }}
                  >
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor:
                          color === "black"
                            ? "#000"
                            : color === "gold"
                            ? "#FFD700"
                            : "#C0C0C0",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* SIZE Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 1 : 0,
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#000000",
                  width: isMobile ? "100%" : "80px",
                  flexShrink: 0,
                }}
              >
                SIZE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                {["S", "M", "L", "XL"].map((size) => (
                  <Typography
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    sx={{
                      fontSize: "14px",
                      fontWeight: selectedSize === size ? 700 : 400,
                      color: "#000000",
                      cursor: "pointer",
                      "&:hover": {
                        fontWeight: 700,
                      },
                    }}
                  >
                    {size}
                  </Typography>
                ))}
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    fontSize: "12px",
                    color: "#000",
                    textDecoration: "underline",
                    cursor: "pointer",
                    ml: isMobile ? 0 : "252px",
                    width: isMobile ? "100%" : "auto",
                    mt: isMobile ? 1 : 0,
                  }}
                >
                  Size Guide
                </Typography>
              </Box>
            </Box>

            {/* GENDER Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 1 : 0,
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#000000",
                  width: isMobile ? "100%" : "80px",
                  flexShrink: 0,
                }}
              >
                GENDER
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {["MEN", "WOMEN"].map((gender) => (
                  <Typography
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    sx={{
                      fontSize: "14px",
                      fontWeight: selectedGender === gender ? 700 : 400,
                      color: "#000000",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      "&:hover": {
                        fontWeight: 700,
                      },
                    }}
                  >
                    {gender}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Add to Basket Button */}
          <Button
            fullWidth
            sx={{
              padding: "0px 30px",
              fontWeight: 400,
              border: "1px solid #000",
              fontSize: { xs: "14px", sm: "12px" },
              letterSpacing: "0.5px",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "0",
              textTransform: "capitalize",
              minHeight: { xs: "45px", sm: "35px" },
              mb: 3,
              "&:hover": {
                backgroundColor: "#f5f5f5",
                border: "1px solid #000",
              },
            }}
          >
            Add To Basket
          </Button>

          {/* Additional Information Links */}
          <Box sx={{ mb: 3 }}>
            {[
              "PRODUCT DETAILS & COMPOSITION",
              "DELIVERIES & RETURNS",
              "SPECIAL RETURN CONDITIONS*",
            ].map((text) => (
              <Typography
                key={text}
                variant="body1"
                component="div"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "12px", sm: "13px" },
                  mb: { xs: "12px", sm: "15px" },
                  color: "#000",
                  cursor: "pointer",
                  letterSpacing: "0.3px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Image Modal */}
      <SwipeableDrawer
        anchor="bottom"
        open={openImageModal}
        onClose={() => setOpenImageModal(false)}
        sx={{
          "& .MuiDrawer-paper": {
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <IconButton
          onClick={() => setOpenImageModal(false)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "white",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.15)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grow in={openImageModal}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "750px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, sm: 4 },
            }}
          >
            <StyledSwiper
              ref={modalSwiperRef}
              initialSlide={currentImage}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={false}
              style={{ width: "100%", height: "auto" }}
              onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Product view ${index + 1}`}
                      style={{
                        width: "100%",
                        maxHeight: "90vh",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </Box>
        </Grow>
      </SwipeableDrawer>
    </Container>
  );
};

export default Carts;
