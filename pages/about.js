import "./globals.css";
import Footer from "../src/Footer/Footer";
import HeaderComponent from "../src/HeaderComponents/HeaderComponent";
import AboutComponent from "../src/AboutComponent/AboutComponent";

export const About = () => {
   return (
      <div>
         <HeaderComponent />
         <AboutComponent />
         <Footer />
      </div>
   );
};

export default About;
