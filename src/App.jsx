import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/aboutUs/AboutUs";
import NotFound from "./pages/notFound/NotFound";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#4F6F63",
            color: "#fff",
            borderRadius: "14px",
            padding: "14px 18px",
          },
        }}
      />
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
