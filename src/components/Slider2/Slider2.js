import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide from "../../assets/images/slide.png";
import slide2 from "../../assets/images/slide2.png";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Slider2.css';

import { FreeMode, Pagination } from 'swiper/modules';

export default function Slider2() {
  return (
    <>
      <Swiper
        slidesPerView={1.3}            
        spaceBetween={30}            
        centeredSlides={true}        
        loop={true}                 
        className="slider2-swiper"
        breakpoints={{
          
          0: {
            slidesPerView: 1, 
            spaceBetween: 10, 
          },
          
          500: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          
        }}
      >
        <SwiperSlide><img src={slide} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={slide} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={slide} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2" /></SwiperSlide>
      </Swiper>
    </>
  );
}
