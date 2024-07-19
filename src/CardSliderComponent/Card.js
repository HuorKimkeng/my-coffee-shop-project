import React from "react";
import "./Card.css";
import { Button } from "@mui/material";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";

const Card = ({ img, title, price }) => {
  return (
    <article>
      <img src={img} alt="" />
      <div className="card-content">
        <h3>{title}</h3>
        <div>
          <span>{price}</span>
          <Button>
            <AddBoxTwoToneIcon />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
