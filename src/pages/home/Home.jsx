import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portifolio from "./components/Portifolio";
import Trust from "./components/Trust";
import Last from "./components/Last";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portifolio />
      <Trust />
      <Last />
    </div>
  );
};

export default Home;
