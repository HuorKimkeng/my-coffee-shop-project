import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderComponent.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SliderComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/big-slider/slider01.png" className="slide-show" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/big-slider/slider02.png" className="slide-show" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/big-slider/slider03.png" className="slide-show" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderComponent;
