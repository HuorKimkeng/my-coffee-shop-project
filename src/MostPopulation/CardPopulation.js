import "./PopulationComponent.css";

const CardPopulation = () => {
   return (
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
                  <div className="add-to-card"><p>Add to Cart</p></div>
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
                  <div className="add-to-card"><p>Add to Cart</p></div>
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
                  <div className="add-to-card"><p>Add to Cart</p></div>
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
                  <div className="add-to-card"><p>Add to Cart</p></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardPopulation;
