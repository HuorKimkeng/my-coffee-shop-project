import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Card.css";
import { Pagination, Autoplay } from "swiper/modules";
import CardOneSliderComponent from "./CardOneSliderComponent";
import CardTwoSliderComponent from "./CardTwoSliderComponent";
import CardThreeSliderComponent from "./CardThreeSliderComponent";

const CardSliderComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardOneSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardTwoSliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <CardThreeSliderComponent />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardSliderComponent;
