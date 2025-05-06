import React from "react";
import HeaderComponent from "../src/HeaderComponents/HeaderComponent";
import SliderComponent from "../src/SliderComponent/SliderComponent";
import CardSliderComponent from "../src/CardSliderComponent/CardSliderComponent";
import DailyDrinkComponent from "../src/Daily Drink/DailyDrinkComponent";
import CardDailyDrink from "../src/Daily Drink/CardDailyDrink";
import PopulationComponent from "../src/MostPopulation/PopulationComponent";
import CardPopulation from "../src/MostPopulation/CardPopulation";
import PromotionHeader from "../src/Promotion/PromotionHeader";
import CardPromotion from "../src/Promotion/CardPromotion";
import Footer from "../src/Footer/Footer";
import "./globals.css";

export const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <SliderComponent />
      <CardSliderComponent />
      <DailyDrinkComponent />
      <CardDailyDrink />
      <PopulationComponent />
      <CardPopulation />
      <PromotionHeader />
      <CardPromotion />
      <Footer />
    </div>
  );
};

export default Home;
