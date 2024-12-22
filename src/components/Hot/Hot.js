import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../Slide/Slide';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import './Hot.css';

import { Navigation } from 'swiper/modules'; 

export default function Hot({ marginLeftLaptop, marginLeftMobile ,imageslide}) {
    const [slides, setSlides] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => {
                setSlides(data); 
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false); 
            });
    }, []);
    console.log(slides)

    if (loading) {
        return <p>Loading products...</p>; 
    }

    return (
        <Swiper
            slidesPerView={3} 
            // spaceBetween={30}
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
                    <Slide 
                        slide={slide} 
                        imageslide={slide.image_path ? `http://localhost:8000/storage/${slide.image_path}` : imageslide}  // جلب صورة المنتج
                        marginLeftLaptop={marginLeftLaptop} 
                        marginLeftMobile={marginLeftMobile} 
                        
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
