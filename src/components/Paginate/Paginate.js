import React, { useEffect, useState } from "react";
import Slide from "../Slide/Slide";
import { Pagination } from "antd";
import "./Paginate.css";
import { useParams } from "react-router-dom";

export default function Paginate({imageslide}) {
    const [slides, setSlides] = useState([]); 
    const { id } = useParams(); // Get the category ID from the URL

    useEffect(() => {
        fetch(`http://localhost:8000/api/categories/${id}/subcategories`)  // استخدم backticks هنا
            .then(response => response.json())
            .then(data => {
                setSlides(data);  // تخزين البيانات المسترجعة في حالة slides
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [id]);  // أضف id كـ dependency للتأكد من إعادة تشغيل useEffect عند تغيير الفئة
    console.log(slides);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentSlides = slides.slice(
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
                            <Slide slide={slide} marginLeftLaptop="50px" marginLeftMobile="42px"  imageslide={slide.image_path ? `http://localhost:8000/storage/${slide.image_path}` : imageslide}    />
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
                        total={slides.length}  // استخدم slides.length
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
