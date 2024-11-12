import React from "react";
import HeaderComponent from "../src/HeaderComponents/HeaderComponent";
import SliderComponent from "../src/SliderComponent/SliderComponent";
import CardOneSliderComponent from "../src/CardSliderComponent/CardOneSliderComponent";
import CardTwoSliderComponent from "../src/CardSliderComponent/CardTwoSliderComponent";
import CardThreeSliderComponent from "../src/CardSliderComponent/CardThreeSliderComponent";
import CardSliderComponent from "../src/CardSliderComponent/CardSliderComponent";
import DailyDrinkComponent from "../src/DrinkScrollComponent/DailyDrinkComponent";
import DailyDrinkCardOneComponent from "../src/DrinkScrollComponent/DailyDrinkCardOneComponent";
import CardDrinkMenu from "../src/DrinkScrollComponent/CardDrinkMenu";
import DailyDrinkCardTwoComponent from "../src/DrinkScrollComponent/DailyDrinkCardTwoComponent";
import DailyDrinkCardThreeComponent from "../src/DrinkScrollComponent/DailyDrinkCardThreeComponent";
import DailyDrinkCardFourComponent from "../src/DrinkScrollComponent/DailyDrinkCardFourComponent";
import DailyDrinkCardFiveComponent from "../src/DrinkScrollComponent/DailyDrinkCardFiveComponent";
import DailyDrinkCardSixComponent from "../src/DrinkScrollComponent/DailyDrinkCardSixComponent";
import DailyDrinkCardSevenComponent from "../src/DrinkScrollComponent/DailyDrinkCardSevenComponent";
import ScrollDailyDrink from "../src/DrinkScrollComponent/ScrollDailyDrink";

export const test = () => {
  return (
    <div>
      <HeaderComponent />
      <SliderComponent />
      <CardSliderComponent />
      <DailyDrinkComponent />
      {/* <DailyDrinkCardOneComponent />
      <DailyDrinkCardTwoComponent />
      <DailyDrinkCardThreeComponent />
      <DailyDrinkCardFourComponent />
      <DailyDrinkCardFiveComponent />
      <DailyDrinkCardSixComponent /> */}
      {/* <DailyDrinkCardSevenComponent /> */}
      <ScrollDailyDrink />
    </div>
  );
};

export default test;
