import './globals.css';
import HeaderComponent from "../src/HeaderComponents/HeaderComponent";
import MenuComponent from "../src/MenuComponent/MenuComponent";
import Footer from "../src/Footer/Footer";

export const Menu = () => {
   return (
      <div>
         <HeaderComponent />
         <MenuComponent />
         <Footer />
      </div>
   );
};

export default Menu;