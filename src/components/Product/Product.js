import { useParams } from 'react-router-dom';
import React, { useRef, useEffect, useState } from "react";
import "./Product.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import phone from "../../assets/images/iphone2.png";
import buds from "../../assets/images/buds2.png";
import play from "../../assets/icons/play.png";
import { FaStar } from "react-icons/fa6";
import about from "../../assets/images/about.png";
import location from "../../assets/icons/Location2.png";
import static_img from "../../assets/images/ad static.png";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";
import item4 from "../../assets/images/item4.png";
import person from "../../assets/images/person.png";
import { Link } from "react-router-dom";




export default function Product() {

    const swiperRef = useRef(null);


    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [selectedImage, setSelectedImage] = useState(null);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); // الآن يعتمد على categoryId و subcategoryId

    console.log(product);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }



    const scrollDown = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleImageClick = (imagePath) => {
        setSelectedImage(imagePath); // تحديث الصورة المختارة عند النقر
    };

    return (
        <div className="product-all">
            <div className="first">
                <div className="left">
                    <div className="caurs">
                        <Swiper
                            ref={swiperRef}
                            direction="vertical"
                            spaceBetween={4}
                            slidesPerView={4}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className="height-left-prod" src={`http://localhost:8000/storage/${product.image_path}`} alt="Product 1"  onClick={() => handleImageClick(`http://localhost:8000/storage/${product.image_path}`)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="height-left-prod" src={buds} alt="Product 2" onClick={() => handleImageClick(buds)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="height-left-prod" src={phone} alt="Product 3" onClick={() => handleImageClick(phone)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="height-left-prod" src={buds} alt="Product 4" onClick={() => handleImageClick(buds)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="height-left-prod" src={phone} alt="Product 5" onClick={() => handleImageClick(phone)} />
                            </SwiperSlide>

                        </Swiper>
                        <button className="scroll-button" onClick={scrollDown}>
                            &#x25BC;
                        </button>
                    </div>
                    <div className="right">
                        <img
                            src={selectedImage ? selectedImage : `http://localhost:8000/storage/${product.image_path}`}
                            alt="Selected Product"
                        />

                        {/* <img src={`http://localhost:8000/storage/${product.image_path}`} /> */}
                        <button type="submit">
                            Add to the wishlist
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4.41929C0 8.09152 3.21554 10.0484 5.56938 11.8C6.4 12.4181 7.2 13 8 13C8.8 13 9.6 12.4181 10.4306 11.8C12.7845 10.0484 16 8.09152 16 4.41929C16 0.747033 11.5998 -1.85725 8 1.6732C4.40013 -1.85725 0 0.747033 0 4.41929Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="middle">
                    <div className="desc">
                        <p>{product.description} </p>
                        <div className="rate">
                            <p className="rate2">4.5 <FaStar className="fastar" />(1K)</p>
                            <div className="separate"></div>
                            <a href="#">See all reviews</a>
                        </div>
                        <hr />
                        <div className="price">
                            <p><span className="offer">{product.discount}%</span>{product.price} SAR</p>
                            <del>Was: {product.old_price}</del>
                        </div>
                        <div className="date">
                            <p><span>Express</span>Get it by June 6, 2024</p>
                        </div>
                        <div className="delever">
                            <p>Get Free Delivery With Tikmool Infinite</p>
                            <img src={play} />
                        </div>
                        <hr />
                    </div>

                    <div className="color">
                        <p>Color:</p>
                        <div className="inp-color">
                            <div className="color-swatch" style={{ backgroundColor: '#D9B5B5' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'gold' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'black' }}></div>
                            <div className="color-swatch" style={{ backgroundColor: 'red' }}></div>
                        </div>
                        <div className="storage">
                            <p>Size: <span className="store">256 GB</span></p>
                            <div className="size-opt">
                                <p>128 GB</p>
                                <p>256 GB</p>
                                <p>512 GB</p>
                            </div>
                        </div>
                        <hr />

                        <div className="brands">
                            <div className="left">
                                <p>Brand</p>
                                <p>Operating System</p>
                                <p>CPU Model</p>
                                <p>Storage Capacity</p>
                                <p>Installed RAM</p>
                            </div>
                            <div className="right">
                                <p>Samsung</p>
                                <p>Android 13.0</p>
                                <p>Snapdragon</p>
                                <p>265 GB</p>
                                <p>12 GB</p>

                            </div>

                        </div>
                        <hr />
                        <div className="about">
                            <h3>About This Item</h3>
                            <ul>
                                <li>AI Features: Search like never before, get real-time interpretation on a call, format your notes into a clear summary and effortlessly edit your photos-all from your smartphone, all with AI.</li>
                                <li>The use of conscious materials makes this our most eco-friendly smartphone ever. Recycled glass and PET film accent the phone's exterior, and box made from recycled paper makes it planet-loving from the moment it hits your hands.</li>
                                <li>S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks, making sketches and memos effortless and eco-friendly.</li>
                                <li>Take crisp photos and videos, from dusk until dawn. Galaxy's most advanced camera sensor and fastest processor accommodate low light and reduce noise. And even the camera lens clears up the capture by toning down flare.</li>
                                <li>We nearly doubled the resolution on the Wide-angle Camera, to deliver a clarity never before seen on Galaxy002E Zoom and crop for a whole new shot without hitting the shutter — or leave it intact for brilliant detail, corner to corner.</li>
                                <li>Maximize your free time with the most powerful chip on a Galaxy smartphone. Improved features across the board means everything from gaming to streaming is optimized and seamless — without draining the battery. </li>

                            </ul>
                            <img src={about} />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="title">
                        <h2>Available - In Sock</h2>
                    </div>
                    <div className="middle">
                        <div className="first">
                            <img src={location} />
                            <p>Delivering to Ryiad - Update Location</p>
                        </div>
                        <div className="second">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.955 6.67L9.273 4.657L9.046 4.454L7.2095 6.0035C6.872 5.9345 6.5085 6.0375 6.2625 6.3125C5.8945 6.724 5.93 7.3565 6.342 7.7245C6.754 8.0925 7.386 8.057 7.754 7.645C8 7.37 8.0615 6.9975 7.955 6.67ZM6 1.347V0H8V1.347C7.2805 1.2255 6.704 1.228 6 1.347ZM10.4255 2.379L11.129 1.6755L11.836 2.3825L11.1755 3.043C10.9445 2.801 10.6935 2.5795 10.4255 2.379ZM1 4.5H5V5.5H1V4.5ZM0 6.5H4V7.5H0V6.5ZM1.5 8.5H5V9.5H1.5V8.5ZM12 7C12 9.7615 9.7615 12 7 12C5.605 12 4.35 11.4225 3.4445 10.5H5.0845C5.6535 10.8155 6.304 11 7 11C9.2055 11 11 9.2055 11 7C11 4.7945 9.2055 3 7 3C6.304 3 5.6535 3.1845 5.0845 3.5H3.4445C4.35 2.5775 5.605 2 7 2C9.7615 2 12 4.2385 12 7Z" fill="#7A30EB" />
                            </svg>
                            <p><span>Express Delivery</span> by tomorrow June, 6th </p>
                        </div>
                        <div className="third">
                            <div className="wrapper-inp">
                                <input type="checkbox" />
                                <label>Add 1 Year Protection Plan</label>
                            </div>
                            <div className="wrapper-inp">
                                <input type="checkbox" />
                                <label>Add 2 Years Warranty</label>
                            </div>
                            <Link to="/payment">
                                <button type="submit">Add to cart</button>

                            </Link>
                        </div>

                    </div>
                    <div className="under">
                        <img src={static_img} />

                    </div>
                </div>
            </div>
            <div className="second">
                <h3>Bundle Deal</h3>
                <div className="items">
                    <div className="wrapper-item">
                        <input type="checkbox" />
                        <div className="item">
                            <img src={item1} />
                            <div className="desc">
                                <p>Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi</p>
                                <div className="price">
                                    <h3>1000 SAR</h3>
                                    <p>List: <del>1.300 SAR</del></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-item">
                        <input type="checkbox" />
                        <div className="item">
                            <img src={item2} />
                            <div className="desc">
                                <p>Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi</p>
                                <div className="price">
                                    <h3>1000 SAR</h3>
                                    <p>List: <del>1.300 SAR</del></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-item">
                        <input type="checkbox" />
                        <div className="item">
                            <img src={item3} />
                            <div className="desc">
                                <p>Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi</p>
                                <div className="price">
                                    <h3>1000 SAR</h3>
                                    <p>List: <del>1.300 SAR</del></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-item">
                        <input type="checkbox" />
                        <div className="item">
                            <img src={item4} />
                            <div className="desc">
                                <p>Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi</p>
                                <div className="price">
                                    <h3>1000 SAR</h3>
                                    <p>List: <del>1.300 SAR</del></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="total">
                        <p>Total price: <span>5000 SAR </span></p>
                        <button type="submit">Add all  4 items to cart</button>
                    </div>
                </div>

            </div>
            <div className="third">
                <div class="table-container">
                    <table class="spec-table">
                        <tr>
                            <td>OS</td>
                            <td>Android 13.0</td>
                        </tr>
                        <tr>
                            <td>Product Dimension</td>
                            <td>0.89 x 7.81 x 16.34 cm; 233 g</td>
                        </tr>
                        <tr>
                            <td>Item model number</td>
                            <td>SM-S918BZACMEA</td>
                        </tr>
                        <tr>
                            <td>Wireless communication technologies</td>
                            <td>Cellular</td>
                        </tr>
                        <tr>
                            <td>Connectivity technologies</td>
                            <td>Bluetooth, Wi-Fi</td>
                        </tr>
                        <tr>
                            <td>GPS</td>
                            <td>GPS</td>
                        </tr>
                        <tr>
                            <td>Special features</td>
                            <td>Front Camera, Camera</td>
                        </tr>
                        <tr>
                            <td>Display technology</td>
                            <td>AMOLED</td>
                        </tr>
                        <tr>
                            <td>Other display features</td>
                            <td>Wireless</td>
                        </tr>
                        <tr>
                            <td>Human interface input</td>
                            <td>Touchscreen</td>
                        </tr>
                        <tr>
                            <td>Scanner Resolution</td>
                            <td>1440x3088</td>
                        </tr>
                        <tr>
                            <td>Other camera features</td>
                            <td>Rear, Front</td>
                        </tr>
                        <tr>
                            <td>Form factor</td>
                            <td>Slim</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Graphite</td>
                        </tr>
                        <tr>
                            <td>Battery Power Rating</td>
                            <td>5000</td>
                        </tr>
                        <tr>
                            <td>Whats in the box</td>
                            <td>Data Cable, Ejection Pin, Quick Start Guide</td>
                        </tr>
                        <tr>
                            <td>Item Weight</td>
                            <td>233 g</td>
                        </tr>
                    </table>
                </div>

            </div>
            <hr />
            <div className="fourth">
                <div className="left">
                    <h3>Product Reviews</h3>
                    <div className="rate">
                        <div className="stars">
                            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                            </svg>
                            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                            </svg>
                            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                            </svg>
                            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                            </svg>
                            <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7785 0.977051L23.1591 14.4591H37.335L25.8665 22.7915L30.247 36.2736L18.7785 27.9412L7.30999 36.2736L11.6906 22.7915L0.222048 14.4591H14.3979L18.7785 0.977051Z" fill="#D9D9D9" />
                            </svg>
                            <h3>4.5</h3>
                        </div>
                        <p>by 1.720 Verified Reviews</p>

                    </div>
                    <div className="rate2">
                        <div className="level">
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium  hover:underline">5 star</a>
                                <div class="rating w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-indigo-950 rounded" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium hover:underline">4 star</a>
                                <div class="rating w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-indigo-950 rounded" style={{ width: "30%" }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium  hover:underline">3 star</a>
                                <div class="rating w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-indigo-950 rounded" style={{ width: "20%" }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium  hover:underline">2 star</a>
                                <div class="rating w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-indigo-950 rounded" style={{ width: "20%" }}></div>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <a href="#" class="text-sm font-medium  hover:underline">1 star</a>
                                <div class="rating w-3/5 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                    <div class="h-5 bg-indigo-950 rounded" style={{ width: "50%" }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img src={static_img} />

                </div>
                <div className="right">
                    <h3>Top reviews from Saudi Arabia</h3>
                    <div className="comments">
                        <div className="comment">
                            <div className="first">
                                <img src={person} />
                                <div className="right">
                                    <h3>Tom Riddle</h3>
                                    <div className="stars">
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.7785 0.977051L23.1591 14.4591H37.335L25.8665 22.7915L30.247 36.2736L18.7785 27.9412L7.30999 36.2736L11.6906 22.7915L0.222048 14.4591H14.3979L18.7785 0.977051Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="second">
                                <p>Reviewed on June 6th, 2024</p>
                                <div className="separate"></div>
                                <p>Samsung S24 Ultra </p>
                                <div className="separate"></div>
                                <p>Graphite, 256 GB </p>
                            </div>
                            <h3>Title here</h3>
                            <h4>I love the phone. Original and the battery is very good, the camera is awesome.</h4>
                        </div>
                        <hr />
                        <div className="comment">
                            <div className="first">
                                <img src={person} />
                                <div className="right">
                                    <h3>Tom Riddle</h3>
                                    <div className="stars">
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.7785 0.977051L23.1591 14.4591H37.335L25.8665 22.7915L30.247 36.2736L18.7785 27.9412L7.30999 36.2736L11.6906 22.7915L0.222048 14.4591H14.3979L18.7785 0.977051Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="second">
                                <p>Reviewed on June 6th, 2024</p>
                                <div className="separate"></div>
                                <p>Samsung S24 Ultra </p>
                                <div className="separate"></div>
                                <p>Graphite, 256 GB </p>
                            </div>
                            <h3>Title here</h3>
                            <h4>I love the phone. Original and the battery is very good, the camera is awesome.</h4>
                        </div>
                        <hr />
                        <div className="comment">
                            <div className="first">
                                <img src={person} />
                                <div className="right">
                                    <h3>Tom Riddle</h3>
                                    <div className="stars">
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.7785 0.977051L23.1591 14.4591H37.335L25.8665 22.7915L30.247 36.2736L18.7785 27.9412L7.30999 36.2736L11.6906 22.7915L0.222048 14.4591H14.3979L18.7785 0.977051Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="second">
                                <p>Reviewed on June 6th, 2024</p>
                                <div className="separate"></div>
                                <p>Samsung S24 Ultra </p>
                                <div className="separate"></div>
                                <p>Graphite, 256 GB </p>
                            </div>
                            <h3>Title here</h3>
                            <h4>I love the phone. Original and the battery is very good, the camera is awesome.</h4>
                        </div>
                        <hr />
                        <div className="comment">
                            <div className="first">
                                <img src={person} />
                                <div className="right">
                                    <h3>Tom Riddle</h3>
                                    <div className="stars">
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.4619 0.977051L23.8425 14.4591H38.0183L26.5498 22.7915L30.9304 36.2736L19.4619 27.9412L7.99334 36.2736L12.3739 22.7915L0.905397 14.4591H15.0813L19.4619 0.977051Z" fill="#211969" />
                                        </svg>
                                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.7785 0.977051L23.1591 14.4591H37.335L25.8665 22.7915L30.247 36.2736L18.7785 27.9412L7.30999 36.2736L11.6906 22.7915L0.222048 14.4591H14.3979L18.7785 0.977051Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="second">
                                <p>Reviewed on June 6th, 2024</p>
                                <div className="separate"></div>
                                <p>Samsung S24 Ultra </p>
                                <div className="separate"></div>
                                <p>Graphite, 256 GB </p>
                            </div>
                            <h3>Title here</h3>
                            <h4>I love the phone. Original and the battery is very good, the camera is awesome.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
