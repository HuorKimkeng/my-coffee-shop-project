import { dividerClasses } from "@mui/material";
import "./PopulationComponent.css";

const PopulationComponent = () => {
   return (
      <div className="population-title">
         <div className="population-text">
            <div className="front-text">
               <p>Most Population</p>
            </div>
            
            <div className="back-text">
               <p>See More</p>
            </div>
         </div>
      </div>
   );
};

export default PopulationComponent;