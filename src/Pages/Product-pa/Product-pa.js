import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Offer from "../../components/Offer/Offer";
import Product from "../../components/Product/Product";
import React, { useState, useEffect } from 'react';
import Spinner from "../Spinner/Spinner";

export default function Product_pa(){
      const [isLoading, setIsLoading] = useState(true);
        const { id } = useParams(); // Get the product ID from the URL
    
        useEffect(() => {
            const fetchAllData = async () => {
                try {
                    // محاكاة جلب البيانات لكل المكونات
                    await Promise.all([
                        fetch(`http://localhost:8000/api/products/${id}`).then(res => res.json()),
                    ]);
                    setIsLoading(false); // تعيين حالة التحميل إلى false بعد انتهاء جلب البيانات
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setIsLoading(false); // في حالة الخطأ، يجب تعطيل شاشة التحميل
                }
            };
    
            fetchAllData();
        }, []);
    return(
        <>
        {isLoading ? (
            <Spinner />
        ) : (
            <div className="flex-col">
                <Header />
                <Offer />
                <Product />
                <Footer />
            </div>
        )}
    </>
    );
}