import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<ContactUS />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
