import React, { useState } from "react";
import { Pagination } from "antd";
import phone from "../../assets/images/phone2.png";
import buds from "../../assets/images/buds2.png";
import "./Refunds.css";

export default function Refunds() {
    const refundsData = [
        {
            id: 1,
            img: phone,
            details: "Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 Audio, Lorem Ipsum",
            orderNumber: "#11244555",
            status: "Refunded",
        },
        {
            id: 2,
            img: buds,
            details: "Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 Audio, Lorem Ipsum",
            orderNumber: "#11244556",
            status: "Refunded",
        },
        {
            id: 3,
            img: buds,
            details: "Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 Audio, Lorem Ipsum",
            orderNumber: "#11244557",
            status: "Refunded",
        },
        {
            id: 4,
            img: phone,
            details: "Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 Audio, Lorem Ipsum",
            orderNumber: "#111111",
            status: "Refunded",
        },
        {
            id: 4,
            img: phone,
            details: "Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 Audio, Lorem Ipsum",
            orderNumber: "#111111",
            status: "Refunded",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1); 
    const pageSize = 2; 

    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    
    const currentRefunds = refundsData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="refund-all">
            <div className="content">
                <div className="top">
                    <h3>Refunds</h3>
                    <div className="tab">
                        <div className="first">
                            <p>Product Details</p>
                            <p>Order Number</p>
                            <p>Status </p>
                        </div>
                        <hr />

                        
                        {currentRefunds.map((refund) => (
                            <div key={refund.id}>
                                <div className="second">
                                    <div className="left">
                                        <img src={refund.img} />
                                        <p>{refund.details}</p>
                                    </div>
                                    <div className="middle">
                                        <p>{refund.orderNumber}</p>
                                    </div>
                                    <div className="right">
                                        <p>{refund.status}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}

                    </div>
                </div>

                <div className="under">
            
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={refundsData.length}
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
