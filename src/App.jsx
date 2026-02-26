import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
