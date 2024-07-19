import React from "react";
import Card from "./Card";
import "./CardOneSliderComponent.css";

const CardThreeSliderComponent = () => {
  const cafeSlider = [
    {
      img: "/coffee7.jpg",
      title: "coffee7",
      price: "$3.40",
    },
    {
      img: "/coffee8.jpg",
      title: "coffee8",
      price: "$2.75",
    },
    {
      img: "/coffee9.jpg",
      title: "coffee9",
      price: "$2.35",
    },
  ];

  return (
    <div className="cardOne-container">
      {cafeSlider.map((s, index) => {
        const { img, title, price } = s;
        return <Card key={index} img={img} title={title} price={price} />;
      })}
    </div>
  );
};

export default CardThreeSliderComponent;
