import React, { useState, useEffect } from 'react';
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import Special from "../../components/Special/Special";
import Slider2 from "../../components/Slider2/Slider2";
import Hot from "../../components/Hot/Hot";
import Slider3 from "../../components/Slider3/Slider3";
import ramadan from "../../assets/images/ramadan.png";
import basket from "../../assets/images/Rectangle80.png";
import iphone from "../../assets/images/iphone.png";
import perf from "../../assets/images/perefium.png";
import Spinner from "../../Pages/Spinner/Spinner";
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // محاكاة جلب البيانات لكل المكونات
                await Promise.all([
                    fetch('http://localhost:8000/api/products').then(res => res.json()),
                    fetch('http://localhost:8000/api/categories').then(res => res.json()),
                ]);
                setIsLoading(false); // تعيين حالة التحميل إلى false بعد انتهاء جلب البيانات
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); // في حالة الخطأ، يجب تعطيل شاشة التحميل
            }
        };

        fetchAllData();
    }, []);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="flex-col">
                    <Header />
                    <Offer />
                    <Slider />
                    <Category />
                    <Special title="Special Offer" image={basket} showBalloons={true} backcolor="#F3BFB7" imageslide={perf} />
                    <Slider2 />
                    <Hot />
                    <Slider3 />
                    <Special title="Ramadan Offers" image={ramadan} showBalloons={false} backcolor="#F8EDDD" imageslide={iphone} />
                    <Footer />
                </div>
            )}
        </>
    );
}
