import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
const Home = () => {
  const Data = {
    name: "Super Shop",
  };
  return (
    <>
      <HeroSection myData={Data} />
      <Services />
    </>
  );
};

export default Home;
