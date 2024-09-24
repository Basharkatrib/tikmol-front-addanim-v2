import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import device from '../../assets/icons/device.png';
import './Category.css';


export default function Category() {
    const categories = Array.from({ length: 15 }, (_, index) => ({
        id: index,
        title: `Appliances ${index + 1}`,
    }));

    return (
        <div className="category-slider">
            <Swiper
                slidesPerView={10}
                spaceBetween={10}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
                breakpoints={{
                    1024: {
                        slidesPerView: 8,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                className="custom-category-swiper"
            >
                {categories.map(category => (
                    <SwiperSlide key={category.id} className="custom-category-slide">
                        <div className="card-wrapper">
                            <div className="card">
                                <img src={device} alt="device" />
                                <p>sale</p>
                            </div>
                            <p>{category.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

