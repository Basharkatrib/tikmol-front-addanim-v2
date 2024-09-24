import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../Slide/Slide';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // استيراد الأنماط الخاصة بالأسهم
import './Hot.css';

import { Navigation } from 'swiper/modules'; // استيراد وحدة التصفح

const slides = [
    { id: 1, title: 'Product 1', image: 'https://via.placeholder.com/150?text=Product+1' },
    { id: 2, title: 'Product 2', image: 'https://via.placeholder.com/150?text=Product+2' },
    { id: 3, title: 'Product 3', image: 'https://via.placeholder.com/150?text=Product+3' },
    { id: 4, title: 'Product 4', image: 'https://via.placeholder.com/150?text=Product+4' },
    { id: 5, title: 'Product 5', image: 'https://via.placeholder.com/150?text=Product+5' }
];

export default function Hot() {
    return (
        <Swiper
            slidesPerView={3} 
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            navigation={true}
            speed={1000} 
            modules={[Navigation]} 
            className="hot-swiper"
            breakpoints={{
                0: {
                    slidesPerView: 1, 
                    spaceBetween: -10,
                },
                500: {
                    slidesPerView: 3, 
                    spaceBetween: 30,
                }
            }}
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id} className="hot-swiper-slide">
                    <Slide slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
