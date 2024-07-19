import React from 'react';
import CardDrinkMenu from './CardDrinkMenu';

const DailyDrinkCardTwoComponent = () => {
  const card2 = [
    {
      img: "/dera-menu.jpg",
      title: "Dera Coffe",
      price: "$2.75"
    },
  ];
  return (
    <div>
      {card2.map((s, index) => {
        const {img, title, price } = s;
        return (
          <CardDrinkMenu key={index} img={img} title={title} price={price}/>
        );
      })}
    </div>
  )
}

export default DailyDrinkCardTwoComponent;