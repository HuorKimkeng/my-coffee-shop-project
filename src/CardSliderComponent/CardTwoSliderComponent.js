import React from "react";
import Card from "./Card";
import "./Card.css";
// import "./CardOneSliderComponent.css";

const CardTwoSliderComponent = () => {
  const cafeSlider = [
    {
      img: "/coffee4.jpg",
      title: "coffee4",
      price: "$3.40",
    },
    {
      img: "/coffee5.jpg",
      title: "coffee5",
      price: "$2.75",
    },
    {
      img: "/coffee6.jpg",
      title: "coffee6",
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

export default CardTwoSliderComponent;
