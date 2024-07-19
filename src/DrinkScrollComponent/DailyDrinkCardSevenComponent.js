import React from "react";
import CardDrinkMenu from "./CardDrinkMenu";

const DailyDrinkCardSevenComponent = () => {
  const card7 = [
    {
      img: "/OneZoBoba-menu.jpg",
      title: "Onezoboba Coffee",
      price: "$3.00",
    },
  ];
  return (
    <div className="cardOne">
      {card7.map((s, index) => {
        const { img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price} />
        );
      })}
    </div>
  );
};

export default DailyDrinkCardSevenComponent;
