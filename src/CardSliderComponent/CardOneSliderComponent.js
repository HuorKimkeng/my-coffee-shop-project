import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import React from "react";
import "./Card.css";


const CardOneSliderComponent = () => {
  return (
    <div className="cardOne-container"> 
        <div className="cardOneSlider">
          <div className="card-img">
            <div className="circle-img">
              <img src="/small-slider/americano.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Americano</p>
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
              <img src="/small-slider/arabica.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Arabica</p>
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
              <img src="/small-slider/cappuccino.jpg"></img>
            </div>
          </div>

          <div className="title-price">
            <div className="titleOfCoffee">
              <p>Cappuccino</p>
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

export default CardOneSliderComponent;
