import React from "react";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Bikes from "../Bikes/Bikes";
import ContactUs from "../ContactUs/ContactUs";
import Statistic from "../Statistic/Statistic";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <Bikes />
      <Statistic />
      <ContactUs />
    </div>
  );
};

export default Home;
