import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./CardDrinkMenu.css";
import { Pagination } from "swiper/modules";
import DailyDrinkCardOneComponent from "./DailyDrinkCardOneComponent";
import DailyDrinkCardTwoComponent from "./DailyDrinkCardTwoComponent";
import DailyDrinkCardThreeComponent from "./DailyDrinkCardThreeComponent";
import DailyDrinkCardFourComponent from "./DailyDrinkCardFourComponent";
import DailyDrinkCardFiveComponent from "./DailyDrinkCardFiveComponent";
import DailyDrinkCardSixComponent from "./DailyDrinkCardSixComponent";
import DailyDrinkCardSevenComponent from "./DailyDrinkCardSevenComponent";

const ScrollDailyDrink = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DailyDrinkCardOneComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardTwoComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardThreeComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardFourComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardFiveComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardSixComponent />
        </SwiperSlide>
        <SwiperSlide>
          <DailyDrinkCardSevenComponent />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ScrollDailyDrink;
