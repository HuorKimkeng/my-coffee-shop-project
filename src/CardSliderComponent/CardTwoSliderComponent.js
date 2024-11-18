import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const CardTwoSliderComponent = () => {
  return (
    <div className="cardOne-container"> 
        <div className="cardOneSlider">
          <div className="card-img">
            <div className="circle-img">
              <img src="/small-slider/espresso.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Espresso</p>
            </div>

            <div className="priceandcard">
              <div className="price">
                <p>$3.4</p>
              </div>
              <div className="addtocard">
                <FontAwesomeIcon icon={faSquarePlus} />
              </div>
            </div>         
          </div>
        </div>
        
        <div className="cardOneSlider">
          <div className="card-img">
            <div className="circle-img">
              <img src="/small-slider/iced coffee.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Iced Coffee</p>
            </div>

            <div className="priceandcard">
              <div className="price">
                <p>$3.4</p>
              </div>
              <div className="addtocard">
                <FontAwesomeIcon icon={faSquarePlus} />
              </div>
            </div>  
          </div>
        </div>
        
        <div className="cardOneSlider">
          <div className="card-img">
            <div className="circle-img">
              <img src="/small-slider/latte.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Latte</p>
            </div>

            <div className="priceandcard">
              <div className="price">
                <p>$3.4</p>
              </div>
              <div className="addtocard">
                <FontAwesomeIcon icon={faSquarePlus} />
              </div>
            </div>  
          </div>
        </div>
    </div>
  );
};

export default CardTwoSliderComponent;
