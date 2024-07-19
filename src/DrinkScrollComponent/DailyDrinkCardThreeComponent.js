import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardThreeComponent = () => {
  const card3 = [
    {
      img: "/mat-cha-menu.jpg",
      title: "MatCha",
      price: "$2.50",
    },
  ];
  return (
    <div className="cardOne">
      {card3.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardThreeComponent;
