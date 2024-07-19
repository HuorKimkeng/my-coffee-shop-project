import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardFiveComponent = () => {
  const card5 = [
    {
      img: "/DunKin-menu.png",
      title: "Dunkin Coffee",
      price: "$3.50",
    },
  ];
  return (
    <div className="cardOne">
      {card5.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardFiveComponent;