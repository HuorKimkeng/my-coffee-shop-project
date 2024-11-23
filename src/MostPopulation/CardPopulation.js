import React, { useState } from "react";
import "./PopulationComponent.css";

const CardPromotion = () => {
   const [showMore, setShowMore] = useState(false);

   const handleSeeMoreClick = () => {
       setShowMore(!showMore);
   };

  return (
    <>
      <div className="see-more-container">
        <div className="see-more" onClick={handleSeeMoreClick}>
          <p>{showMore ? "See Less" : "See More"}</p>
        </div>
      </div>

      <div className="card-daily-drink">
        {/* First set of cards */}
        <div className="box-card-daily-drink">
          <div className="daily-card-img">
            <img src="/Daily Drink/daily-card01.jpg"></img>
          </div>
          <div className="daily-card-tilte">
            <p>Brown Sugar</p>
          </div>
          <div className="daily-card-price-and-cart">
            <div className="daily-card-price">
              <p>$1.70</p>
            </div>
            <div className="dailt-card-add-to-cart">
              <div className="add-to-card">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-card-daily-drink">
          <div className="daily-card-img">
            <img src="/Daily Drink/daily-card02.jpg"></img>
          </div>
          <div className="daily-card-tilte">
            <p>Cappuccino</p>
          </div>
          <div className="daily-card-price-and-cart">
            <div className="daily-card-price">
              <p>$2.00</p>
            </div>
            <div className="dailt-card-add-to-cart">
              <div className="add-to-card">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-card-daily-drink">
          <div className="daily-card-img">
            <img src="/Daily Drink/daily-card03.jpg"></img>
          </div>
          <div className="daily-card-tilte">
            <p>Ice Latte</p>
          </div>
          <div className="daily-card-price-and-cart">
            <div className="daily-card-price">
              <p>$2.50</p>
            </div>
            <div className="dailt-card-add-to-cart">
              <div className="add-to-card">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-card-daily-drink">
          <div className="daily-card-img">
            <img src="/Daily Drink/daily-card04.jpg"></img>
          </div>
          <div className="daily-card-tilte">
            <p>Green Milk Tea</p>
          </div>
          <div className="daily-card-price-and-cart">
            <div className="daily-card-price">
              <p>$1.50</p>
            </div>
            <div className="dailt-card-add-to-cart">
              <div className="add-to-card">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional cards visible on "See More" */}
      {showMore && (
        <>
          <div className="card-daily-drink">
            <div className="box-card-daily-drink">
              <div className="daily-card-img">
                <img src="/Daily Drink/daily-card01.jpg"></img>
              </div>
              <div className="daily-card-tilte">
                <p>Brown Sugar</p>
              </div>
              <div className="daily-card-price-and-cart">
                <div className="daily-card-price">
                  <p>$1.70</p>
                </div>
                <div className="dailt-card-add-to-cart">
                  <div className="add-to-card">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-card-daily-drink">
              <div className="daily-card-img">
                <img src="/Daily Drink/daily-card02.jpg"></img>
              </div>
              <div className="daily-card-tilte">
                <p>Cappuccino</p>
              </div>
              <div className="daily-card-price-and-cart">
                <div className="daily-card-price">
                  <p>$2.00</p>
                </div>
                <div className="dailt-card-add-to-cart">
                  <div className="add-to-card">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-card-daily-drink">
              <div className="daily-card-img">
                <img src="/Daily Drink/daily-card03.jpg"></img>
              </div>
              <div className="daily-card-tilte">
                <p>Ice Latte</p>
              </div>
              <div className="daily-card-price-and-cart">
                <div className="daily-card-price">
                  <p>$2.50</p>
                </div>
                <div className="dailt-card-add-to-cart">
                  <div className="add-to-card">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-card-daily-drink">
              <div className="daily-card-img">
                <img src="/Daily Drink/daily-card04.jpg"></img>
              </div>
              <div className="daily-card-tilte">
                <p>Green Milk Tea</p>
              </div>
              <div className="daily-card-price-and-cart">
                <div className="daily-card-price">
                  <p>$1.50</p>
                </div>
                <div className="dailt-card-add-to-cart">
                  <div className="add-to-card">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardPromotion;
