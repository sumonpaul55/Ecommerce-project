import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const Home = () => {
  const Data = {
    name: "Super Shop",
  };
  return (
    <>
      <HeroSection myData={Data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
