import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const CardThreeSliderComponent = () => {
  return (
    <div className="cardOne-container"> 
        <div className="cardOneSlider">
          <div className="card-img">
            <div className="circle-img">
              <img src="/small-slider/macchiato.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Macchiato</p>
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
              <img src="/small-slider/milk.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Milk</p>
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
              <img src="/small-slider/Mocha.png"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Mocha</p>
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

export default CardThreeSliderComponent;
