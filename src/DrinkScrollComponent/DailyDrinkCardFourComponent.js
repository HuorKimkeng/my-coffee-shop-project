import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardFourComponent = () => {
  const card4 = [
    {
      img: "/Peets-Menu.jpg",
      title: "Peets Coffee",
      price: "$2.90",
    },
  ];
  return (
    <div className="cardOne">
      {card4.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardFourComponent;