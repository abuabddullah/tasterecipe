import React from "react";
import Banner from "../components/homePage/Banner";
import Accordion from "../components/homePage/Accordion";
import CardSection from "../components/homePage/CardSection";
import StepsSec from "../components/homePage/StepsSec";

const Home = () => {
  return (
    <section>
      <Banner />
      <Accordion />
      <CardSection />
      <StepsSec />
    </section>
  );
};

export default Home;
