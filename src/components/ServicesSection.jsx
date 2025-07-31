/* eslint-disable no-unused-vars */
// src/components/ServicesSection.js
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Skeleton,
  Link,
  Container,

} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Title from '../pages/Title';
import { services, swiperBreakpoints } from '../data';

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallPhone = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isLargePhone = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-900px
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900-1200px
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // ≥1200px
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const ServiceCard = ({ service }) => (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        px: {
          xs: 2,
          sm: 3,
          lg: 4
        },
        py: {
          xs: 2,
          md: 3,
          lg: 4
        },
        height: '100%',
        borderRight: {
          xs: 'none',
          md: '1px solid #e0e0e0'
        },
        '&:last-child': {
          borderRight: 'none'
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover
        }
      }}
    >
      {loading ? (
        <Skeleton variant="circular" width={48} height={48} />
      ) : (
        <Avatar
          src={service.icon}
          alt={service.title}
          sx={{
            width: {
              xs: 40,
              md: 48,
              lg: 56
            },
            height: {
              xs: 40,
              md: 48,
              lg: 56
            },
            mb: {
              xs: 1.5,
              md: 2,
              lg: 3
            },
            backgroundColor: '#f5f5f5'
          }}
          imgProps={{ loading: "lazy" }}
        />
      )}

      {loading ? (
        <>
          <Skeleton width="80%" height={24} sx={{ mb: 1 }} />
          <Skeleton width="100%" height={60} sx={{ mb: 2 }} />
          <Skeleton width={120} height={20} />
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: theme.palette.text.primary,
              fontSize: {
                xs: '14px',
                md: '15px',
                lg: '16px'
              },
              letterSpacing: '0.5px',
              mb: {
                xs: 1,
                md: 1.5,
                lg: 2
              },
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 1.4
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: {
                xs: 2,
                md: 2.5,
                lg: 3
              },
              flexGrow: 1,
              fontSize: {
                xs: '13px',
                md: '14px',
                lg: '15px'
              },
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
              minHeight: {
                xs: '60px',
                md: '80px',
                lg: '100px'
              }
            }}
          >
            {service.description}
          </Typography>
          <Link
            href={service.link}
            sx={{
              fontWeight: 500,
              textDecoration: 'none',
              color: theme.palette.primary.main,
              fontSize: {
                xs: '13px',
                md: '14px'
              },
              '&:hover': {
                textDecoration: 'underline'
              },
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '48px',
              '&:after': {
                content: '"→"',
                marginLeft: '4px',
                fontSize: '14px'
              }
            }}
          >
            {service.cta}
          </Link>
        </>
      )}
    </Box>
  );

  return (
    <Box sx={{
      py: {
        xs: 4,
        sm: 5,
        lg: 8
      },
      backgroundColor: theme.palette.background.paper
    }}>
      <Container maxWidth="xl" sx={{
        px: {
          xs: 2,
          sm: 3,
          lg: 4
        }
      }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: {
              xs: 3,
              md: 5,
              lg: 6
            },
            fontWeight: 700,
            fontSize: {
              xs: '24px',
              sm: '26px',
              md: '28px',
              lg: '32px'
            },
            color: theme.palette.text.primary,
            letterSpacing: '0.5px'
          }}
        >
          <Title text1={"Services for"} text2={"You"} />
        </Typography>

        {isDesktop ? (
          <Grid container sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            boxShadow: theme.shadows[1],
            flexWrap: 'nowrap'
          }}>
            {services.map((service) => (
              <Grid
                item
                lg={3}
                key={service.id}
                sx={{
                  '&:hover': {
                    zIndex: 1,
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        ) : isTablet ? (
          <Grid container sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            boxShadow: theme.shadows[1]
          }}>
            {services.map((service) => (
              <Grid
                item
                md={4}
                key={service.id}
                sx={{
                  '&:hover': {
                    zIndex: 1,
                    boxShadow: theme.shadows[4]
                  }
                }}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{
            width: '100%',
            '--swiper-pagination-color': theme.palette.primary.main,
            '--swiper-pagination-bullet-inactive-color': '#e0e0e0',
            '--swiper-pagination-bullet-size': '8px',
            '--swiper-pagination-bullet-horizontal-gap': '6px'
          }}>
            <Swiper
              modules={[FreeMode, Pagination]}
              breakpoints={swiperBreakpoints}
              freeMode={true}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              spaceBetween={16}
              slidesPerView={'auto'}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id} style={{
                  height: 'auto',
                  width: isSmallPhone ? '85%' : '45%'
                }}>
                  <Box sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '8px',
                    boxShadow: theme.shadows[1],
                    height: '100%',
                    mx: 1
                  }}>
                    <ServiceCard service={service} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ServicesSection;