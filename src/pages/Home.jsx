import React from "react";
import Accordion from "../components/homePage/Accordion";
import Banner from "../components/homePage/Banner";
import CardSection from "../components/homePage/CardSection";
import RatingSec from "../components/homePage/RatingSec";
import StepsSec from "../components/homePage/StepsSec";
import OurProducts from "../components/homePage/OurProducts";

const Home = () => {
  return (
    <section>
      <Banner />
      <OurProducts/>
      <Accordion />
      <CardSection />
      <StepsSec />
      <RatingSec />
    </section>
  );
};

export default Home;
