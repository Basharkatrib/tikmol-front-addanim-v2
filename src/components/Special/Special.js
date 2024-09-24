import React, { useState, useEffect } from 'react';
import './Special.css';
import ballon from "../../assets/images/Balloon.png";
import Slide from '../Slide/Slide';

const slides = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `Slide ${index + 1}`,
    image: `https://via.placeholder.com/150?text=Image+${index + 1}`,
}));

export default function Special({ title, image, showBalloons, backcolor, imageslide }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow < slides.length ? prevIndex + slidesToShow : prevIndex
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow >= 0 ? prevIndex - slidesToShow : prevIndex
        );
    };

    return (
        <div className="special_off_all" style={{ backgroundColor: backcolor }}>
            {showBalloons && (
                <div className="ballons">
                    <img src={ballon} className='ballon1' width="30" height="40" />
                    <img src={ballon} className='ballon2' width="30" height="40" />
                    <img src={ballon} className='ballon3' width="30" height="40" />
                    <img src={ballon} className='ballon4' width="30" height="40" />
                </div>
            )}
            
            <div className='left'>
                <h3>{title}</h3>
                <img src={image} alt="Basket" />
            </div>

            <div className="slider-container">
                <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>
                    &lt;
                </button>
                <div className="slides">
                    {slides.slice(currentIndex, currentIndex + slidesToShow).map(slide => (
                        <Slide key={slide.id} slide={slide} imageslide={imageslide} />
                    ))}
                </div>
                <button className="arrow right" onClick={nextSlide} disabled={currentIndex + slidesToShow >= slides.length}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
