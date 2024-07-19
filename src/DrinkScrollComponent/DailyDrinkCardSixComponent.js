import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardSixComponent = () => {
  const card6 = [
    {
      img: "/IP-menu.jpg",
      title: "IP Coffee",
      price: "$2.90",
    },
  ];
  return (
    <div className="cardOne">
      {card6.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardSixComponent;
