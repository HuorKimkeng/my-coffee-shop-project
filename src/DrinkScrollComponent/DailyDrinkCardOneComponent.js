import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardOneComponent = () => {
  const card1 = [
    {
      img: "/brown-sugar.jpg",
      title: "Brwon Sugar",
      price: "$3.00",
    },
  ];
  return (
    <div className="cardOne">
      {card1.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardOneComponent;
