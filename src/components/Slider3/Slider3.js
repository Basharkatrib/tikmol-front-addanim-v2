import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import "./Slider3.css";
import Card from '../Card/Card';

export default function Slider3() {
  return (
    <div className="slider-all">
      <h3>Featured Deals</h3>
      <Swiper
        slidesPerView={3} 
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          
          0: { 
            slidesPerView: 1,
            spaceBetween: 10, 
          },
         
          500: {
            slidesPerView: 3,
            spaceBetween: 30, 
          },
        }}
        className="custom-swiper"
      >
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
        <SwiperSlide className="custom-swiper-slide"><Card /></SwiperSlide>
      </Swiper>
    </div>
  );
}
