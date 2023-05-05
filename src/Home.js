import React from "react";
import HeroSection from "./components/HeroSection";
const Home = () => {
  const Data = {
    name: "Super Shop",
  };
  return <HeroSection myData={Data} />;
};

export default Home;
