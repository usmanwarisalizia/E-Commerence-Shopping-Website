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
  Drawer,
  Divider,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Desigensno1 from "../../assets/ProductCards/Desigensno1.png";
import { singleProduct } from "../../productsAssets";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  objectFit: "contain",
  aspectRatio: "2 / 3",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  "--swiper-navigation-color": theme.palette.common.white,
  "--swiper-pagination-color": theme.palette.common.white,
}));

const Carts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedGender, setSelectedGender] = useState("MEN");
  const [currentImage, setCurrentImage] = useState(0);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [openDetailsDrawer, setOpenDetailsDrawer] = useState(false);
  const [currentDetails, setCurrentDetails] = useState(
    "PRODUCT DETAILS & COMPOSITION"
  );
  const modalSwiperRef = useRef(null);

  const images = [Desigensno1, Desigensno1, Desigensno1];

  const detailsContent = {
    "PRODUCT DETAILS & COMPOSITION": (
      <Box
        sx={{
          padding: { xs: "24px", sm: "40px", md: "60px" },
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Frame Fit: Universal Fit
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.6, fontSize: "0.95rem" }}
        >
          Our eyeglasses feature an adjustable universal fit designed to
          comfortably accommodate most face shapes and sizes. The lightweight
          frame provides all-day comfort without slipping or pinching.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Frame Materials & Care
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 2,
            mb: 3,
            "& li": { mb: 1, fontSize: "0.95rem", lineHeight: 1.6 },
          }}
        >
          <Typography component="li">
            High-quality acetate/TR90 material
          </Typography>
          <Typography component="li">
            Lenses: CR-39 plastic/polycarbonate (selectable)
          </Typography>
          <Typography component="li">
            Nose pads: Silicone for comfort
          </Typography>
          <Typography component="li">
            Clean only with microfiber cloth and lens cleaner
          </Typography>
          <Typography component="li">
            Store in protective case when not in use
          </Typography>
          <Typography component="li">
            Avoid extreme temperatures and direct sunlight
          </Typography>
          <Typography component="li">
            Do not use household cleaners or paper towels
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Measurements
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 2,
            "& li": { mb: 1, fontSize: "0.95rem", lineHeight: 1.6 },
          }}
        >
          <Typography component="li">Lens width: 50mm</Typography>
          <Typography component="li">Bridge width: 18mm</Typography>
          <Typography component="li">Temple length: 145mm</Typography>
          <Typography component="li">Frame width: 135mm</Typography>
        </Box>
      </Box>
    ),
    "DELIVERIES & RETURNS": (
      <Box
        sx={{
          padding: { xs: "24px", sm: "40px", md: "60px" },
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Delivery Options
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.6, fontSize: "0.95rem" }}
        >
          Standard delivery: 3-5 business days (Free)
          <br />
          Express delivery: 1-2 business days (+$9.99)
          <br />
          Prescription processing: Additional 2-3 business days
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Returns & Exchanges
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.6, fontSize: "0.95rem" }}
        >
          Free returns within 30 days (unworn glasses)
          <br />
          Prescription lenses cannot be returned
          <br />
          Exchange for different frame within 60 days
        </Typography>
      </Box>
    ),
    "SPECIAL RETURN CONDITIONS*": (
      <Box
        sx={{
          padding: { xs: "24px", sm: "40px", md: "60px" },
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}
        >
          Eyeglasses Return Policy
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, lineHeight: 1.6, fontSize: "0.95rem" }}
        >
          Custom prescription lenses are final sale and cannot be returned or
          exchanged.
          <br />
          <br />
          Frames must be returned in original condition with all accessories and
          protective case.
          <br />
          <br />
          *For hygienic reasons, we cannot accept returns on:
          <Box
            component="ul"
            sx={{
              pl: 2,
              mt: 1,
              "& li": { mb: 1, fontSize: "0.95rem", lineHeight: 1.6 },
            }}
          >
            <Typography component="li">
              Glasses that show signs of wear
            </Typography>
            <Typography component="li">
              Personalized or engraved frames
            </Typography>
            <Typography component="li">Clearance/sale items</Typography>
          </Box>
        </Typography>
      </Box>
    ),
  };

  const handleDetailsClick = (text) => {
    setCurrentDetails(text);
    setOpenDetailsDrawer(true);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: isMobile ? 2 : 3,
        px: isMobile ? 2 : "12px !important",
        maxWidth: { md: "lg", xs: "100%" },
      }}
    >
      <Grid container spacing={0} justifyContent="space-between">
        {/* Product Images */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={12}
          sx={{ width: { xl: "50%", lg: "45%", md: "50%", xs: "100%" } }}
        >
          <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
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

        {/* Product Details */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          xs={12}
          sx={{
            maxWidth: { xs: "100%", md: "42%" },
            width: { xs: "100%", md: "calc(42% - 8px / 2)" },
            padding: { xs: "20px 16px", md: "60px 0 20px 0rem" },
          }}
        >
          <Box sx={{ mb: "30px" }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "17px" },
                textTransform: "uppercase",
                mb: "8px",
                lineHeight: 1.2,
              }}
            >
              {singleProduct.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: "5px",
                fontSize: { xs: "9px", sm: "9px" },
                color: "#2a2a2ae6",
                letterSpacing: ".1px",
              }}
            >
              {singleProduct.productCode}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                my: { xs: "15px", sm: "25px" },
                lineHeight: 1.5,
                fontSize: { xs: "16px", sm: "13px" },
                color: "#000000",
              }}
            >
              {singleProduct.price.toLocaleString()}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                paddingTop: "6px",
                paddingBottom: "4px",

                lineHeight: 1.5,
                fontSize: { xs: "16px", sm: "13px !important" },
                color: "#000000e0",
                letterSpacing: "0.7px",
              }}
            >
              Description{" "}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: { xs: "1.5", sm: "1.8" },
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "12px" },
                letterSpacing: "-.1px",
                marginTop: "5px",
                marginBottom: "5px",
                letterSpacing: "0.5px",
                color: "#000000e3",
              }}
            >
              {singleProduct.description}
            </Typography>
          </Box>

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
                sx={{
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "19.5px",
                  color: "#000000",
                  width: { xs: "100%", sm: "65px" },
                  flexShrink: 0,
                }}
              >
                FIT
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "12.5px",
                  fontWeight: "100",
                  fontStyle: "normal",
                  color: "#000000a3",
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
                sx={{
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "19.5px",
                  color: "#000000",
                  width: { xs: "100%", sm: "65px" },
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
                sx={{
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "19.5px",
                  color: "#000000",
                  width: { xs: "100%", sm: "65px" },
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
                      fontSize: "12px",
                      fontWeight: selectedSize === size ? 700 : 400,

                      lineHeight: "1",
                      cursor: "pointer",
                      "&:hover": { fontWeight: 700 },
                    }}
                  >
                    {size}
                  </Typography>
                ))}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "10px",
                    color: "#000",
                    fontWeight: "400",
                    lineHeight: "19.8px",
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
                sx={{
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "19.5px",
                  color: "#000000",
                  width: { xs: "100%", sm: "65px" },
                  flexShrink: 0,
                }}
              >
                GENDER
              </Typography>
              <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["MEN", "WOMEN"].map((gender) => (
                  <Typography
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    sx={{
                      fontSize: "11px",
                      fontWeight: selectedGender === gender ? 700 : 400,
                      color: "#000000",
                      cursor: "pointer",
                      textTransform: "uppercase",
                      "&:hover": { fontWeight: 700 },
                    }}
                  >
                    {gender}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          <Button
            fullWidth
            sx={{
              padding: "0px 30px",
              fontWeight: 400,
              border: "1px solid #000",
              fontSize: { xs: "14px", sm: "10px" },
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

          <Box sx={{ mb: 3, borderTop: "1px solid #f0f0f0", pt: 2 }}>
            {[
              {
                text: "PRODUCT DETAILS & COMPOSITION",
                icon: (
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.text.secondary,
                    }}
                  />
                ),
              },
              {
                text: "DELIVERIES & RETURNS",
                icon: (
                  <LocalShippingOutlinedIcon
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.text.secondary,
                    }}
                  />
                ),
              },
              {
                text: "SPECIAL RETURN CONDITIONS*",
                icon: (
                  <AssignmentReturnOutlinedIcon
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.text.secondary,
                    }}
                  />
                ),
              },
            ].map((item) => (
              <Box
                key={item.text}
                onClick={() => handleDetailsClick(item.text)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: { xs: "14px", sm: "16px" },
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    "& .MuiTypography-root": { textDecoration: "underline" },
                    "& .MuiSvgIcon-root": {
                      transform: "translateX(3px)",
                      color: theme.palette.text.primary,
                    },
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "13px", sm: "14px" },
                    color: theme.palette.text.primary,
                    letterSpacing: "0.3px",
                  }}
                >
                  {item.text}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.04)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Details Drawer */}
      <Drawer
        anchor="right"
        open={openDetailsDrawer}
        onClose={() => setOpenDetailsDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "400px" },
            maxWidth: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {currentDetails}
          </Typography>
          <IconButton onClick={() => setOpenDetailsDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {detailsContent[currentDetails]}
      </Drawer>

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
