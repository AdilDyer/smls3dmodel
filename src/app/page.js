import React from "react";
import HeroContent from "./components/HomeComponents/HeroContent";
import RecentlyAdded from "./components/HomeComponents/RecentlyAdded";
import ExploreModels from "./components/HomeComponents/ExploreModels";
import AboutUs from "./components/HomeComponents/AboutUs";
import UpcomingEvents from "./components/HomeComponents/UpcomingEvents";
import PastEvents from "./components/HomeComponents/PastEvents";
import FooterComponent from "./components/PageComponents/FooterComponent";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className="homePage">
        <HeroContent></HeroContent>
        <RecentlyAdded></RecentlyAdded>
        <ExploreModels></ExploreModels>
        <AboutUs></AboutUs>
        <UpcomingEvents></UpcomingEvents>
        <PastEvents></PastEvents>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
};

export default Home;
