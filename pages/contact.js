import './globals.css';
import HeaderComponent from "../src/HeaderComponents/HeaderComponent";
import Footer from '../src/Footer/Footer';
import Contact from '../src/ContactComponent/ContactComponent';

export const contact = () => {
   return (
      <div>
         <HeaderComponent />
         <Contact />
         <Footer />
      </div>
   );
};

export default contact;