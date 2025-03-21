import "./Slide.css";
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart, FaStar, FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Slide({ slide, imageslide, marginLeftLaptop, marginLeftMobile , categoryId, subcategoryId }) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(slide.price);

    const formattedOldPrice = slide.old_price
        ? new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
          }).format(slide.old_price)
        : null;

        const formattedDiscount = slide.discount
        ? new Intl.NumberFormat('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
          }).format(slide.discount)
        : null;

    return (
        <div
            className="slide-main1"
            key={slide.id}
            style={{
                marginLeft: window.innerWidth > 768 ? marginLeftLaptop : marginLeftMobile,
            }}
        >
            <Link to={`/product/${slide.id}`}>
                <div className="wrapper-image">
                    <div className="wrapper-image-slide">
                       <img className="slide-image-all" src={slide.image || imageslide || 'default-image.png'} alt={slide.name} />
                    </div>
                    
                    {slide.is_active ? <p className="attr">Best Seller</p> : " "}

                    <FaRegHeart className="heart" />

                    <button className="cart">
                        <BsCartPlus /> Add to cart
                    </button>

                    <p className="rate">
                        {slide.rating || '4.5'} <FaStar className="fastar" />({slide.reviews_count || '1K'})
                    </p>
                </div>

                <p className="desc">{slide.description}</p>

                <p className="price">
                    {slide.discount && <span className="offer">{formattedDiscount} %</span>}
                    <span className="new-price">{formattedPrice} SAR</span>

                    {formattedOldPrice && (
                        <span className="old-price">
                            Was: <del>{formattedOldPrice} SAR</del>
                        </span>
                    )}
                </p>

                <div className="end-cart">
                    <p>Express</p>
                    <Link to="/adress">
                        <button>
                            <FaShippingFast className="icon" /> Fast Delivery
                        </button>
                    </Link>
                </div>
            </Link>
        </div>
    );
}
