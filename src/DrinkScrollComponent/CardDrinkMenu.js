import React from "react";
import "./CardDrinkMenu.css";
import StyledButton from "./StyleButton";

const CardDrinkMenu = ({ img, title, price }) => {
  return (
    <div className="card-drink-menu">
      <img src={img} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span className="card-price">{price}</span>
          <StyledButton>Add To Cart</StyledButton>
        </div>
      </div>
    </div>
  );
};

export default CardDrinkMenu;
