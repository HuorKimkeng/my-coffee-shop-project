import React from "react";
import Card from "./Card";
import "./Card.css";

const CardOneSliderComponent = () => {
  const cafeSlider = [
    {
      img: "/coffee7.jpg",
      title: "coffee1",
      price: "$3.40",
    },
    {
      img: "/coffee2.jpg",
      title: "coffee2",
      price: "$2.75",
    },
    {
      img: "/coffee3.jpg",
      title: "coffee3",
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

export default CardOneSliderComponent;
