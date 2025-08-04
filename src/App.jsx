import React from "react";
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNavbar />
        <Header />
        <Routes>
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
    </>
  );
};

export default App;
