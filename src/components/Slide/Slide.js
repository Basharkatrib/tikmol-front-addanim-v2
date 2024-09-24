import "./Slide.css";
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart, FaStar, FaShippingFast } from "react-icons/fa";
import perf from "../../assets/images/perefium.png";

export default function Slide({ slide, imageslide }) {
    return (
        <div className="slide-main1" key={slide.id}>
            <div className="wrapper-image">
                <img src={imageslide || perf} alt={`Slide ${slide.id}`} />
                <p className="attr">Best Seller</p>
                <FaRegHeart className="heart" />
                <button className="cart"> <BsCartPlus /> Add to cart</button>
                <p className="rate">4.5 <FaStar className="fastar" />(1K)</p>
            </div>
            <p className="desc">{slide.title} - Real Leather - Battery Powered - Pink Color - White Timeface </p>
            <p className="price"><span className="offer">-12%</span> <span className="new-price">4.000 SAR</span><span className="old-price">Was: <del>4.780 SAR</del></span> </p>
            <div className="end-cart">
                <p>Express</p>
                <button>
                    <FaShippingFast className="icon" /> Fast Delivery
                </button>
            </div>
        </div>
    );
}

