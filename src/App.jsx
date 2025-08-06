import React, { useEffect } from "react";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Transitioneye from "./pages/Transitioneye";
import Polarizedglasses from "./pages/Polarizedglasses";
import Sunglasses from "./pages/Sunglasses";
import EyeGlasses from "./pages/EyeGlasses";
import Newarrival from "./pages/Newarrival";
import Screenprotect from "./pages/Screenprotect";
import Contact from "./pages/Contact";
import { ThemeProvider } from "@mui/material";
import theme from "./Styles/Theme";
import Carts from "./pages/CartsPage/Carts";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const location = useLocation();

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1, 
  //     smoothWheel: true,
  //     wheelMultiplier: 0.8, 
  //     touchMultiplier: 1.5, 
  //     infinite: false,
  //     smoothTouch: true, 
  //     touchInertiaMultiplier: 30, 
  //     duration: 1.4, 
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  //     direction: "vertical",
  //     gestureDirection: "vertical", 
  //   });

 
  //   let lastTime = 0;
  //   const raf = (time) => {
  //     lenis.raf(time);
  //     const delta = time - lastTime;
  //     lastTime = time;
  //     requestAnimationFrame(raf);
  //   };
  //   requestAnimationFrame(raf);
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //     lenis.scrollTo(0, {
  //       immediate: true,
  //       lock: false,
  //       force: true,
  //     });

   
  //     lenis.stop();
  //     lenis.start();
  //   };

  //   handleRouteChange();

    
  //   lenis.on("scroll", (e) => {

  //   });

  //   return () => {
  //     lenis.off("scroll");
  //     lenis.destroy();
  //   };
  // }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <TopNavbar />
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/transition-eyeglasses" element={<Transitioneye />} />
        <Route path="/polarized-sunglasses" element={<Polarizedglasses />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<EyeGlasses />} />
        <Route path="/newarrival" element={<Newarrival />} />
        <Route path="/screenprotection" element={<Screenprotect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addtocart" element={<Carts />} />
      </Routes>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
