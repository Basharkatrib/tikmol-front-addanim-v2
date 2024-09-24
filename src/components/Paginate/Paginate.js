// Paginate.js
import React, { useState } from "react";
import Slide from "../Slide/Slide";
import { Pagination } from "antd";
import "./Paginate.css";

export default function Paginate() {
    // بيانات مثال يمكن تمريرها لـ Slide
    const slidesData = [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
        { id: 3, title: "Product 3" },
        { id: 4, title: "Product 4" },
        { id: 5, title: "Product 5" },
        { id: 6, title: "Product 6" },
        { id: 7, title: "Product 7" },
        { id: 8, title: "Product 8" },
        { id: 9, title: "Product 9" },
        { id: 10, title: "Product 10" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    // التعامل مع تغيير الصفحة
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentSlides = slidesData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="paginate-all">
            <div className="top">
                <h3>Your Wishlist</h3>
            </div>
            <div className="under">
                <div className="slide-container">
                    {currentSlides.map((slide) => (
                        <div key={slide.id}>
                            <Slide slide={slide} />
                            {/* إضافة الأزرار أسفل كل Slide */}
                            <div className="button-container">
                                <button className="add">Add to cart</button>
                                <button className="remove">Remove from Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="paginate">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={slidesData.length}
                        onChange={handlePageChange}
                        itemRender={(current, type, originalElement) => {
                            if (type === "prev") {
                                return <a style={{color:"#211969",fontSize:"20px",fontWeight:"600"}}>Prev</a>;
                            }
                            if (type === "next") {
                                return <a style={{color:"#211969",fontSize:"20px",fontWeight:"600",marginLeft:"5px"}}>Next</a>;
                            }
                            return originalElement;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
