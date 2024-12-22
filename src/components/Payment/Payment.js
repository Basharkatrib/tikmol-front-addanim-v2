import "./Payment.css";
import location from "../../assets/icons/Location2.png";
import payment from "../../assets/icons/Payment.png";
import logo from "../../assets/images/Logo (1).png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import phone from "../../assets/images/phone.png";
import buds from "../../assets/images/buds.png";
import { Link } from "react-router-dom";


export default function Payment() {
    return (
        <div className="payment-all">
            <div className="head">
                <img src={logo} alt="Logo" />
                <p>
                    Checkout(<span>2 Items</span>)
                </p>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-8 offset-md-2 block">
                    <div className="wrapper-progressBar">
                        <ul className="progressBar">
                            <li className="active" data-step="1">
                                <div className="icon-step-wrapper">
                                    <img src={location} className="icon" alt="Location Icon" />
                                    <span className="step-number"></span>
                                </div>
                                Address
                            </li>
                            <li data-step="2">
                                <div className="icon-step-wrapper">
                                    <img src={payment} className="icon2" alt="Payment Icon" />
                                    <span className="step-number"></span>
                                </div>
                                Payment
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="under">
                <div className="left">
                    <div className="top">
                        <h3>Choose Payment Method</h3>
                        <hr />
                        <form>
                            <div className="wrapper">
                                <input type="radio" />
                                <label>PayPal</label>
                            </div>
                            <div className="wrapper">
                                <input type="radio" />
                                <label>Credit or Debit Card</label>
                            </div>
                            <div className="wrapper">
                                <input type="radio" />
                                <label>Cash on Delivery</label>
                            </div>
                        </form>

                    </div>
                    <div className="bottom">
                        <h3>Credit or Debit Card</h3>
                        <hr />
                        <div className="options">
                            <div className="first">
                                <div className="left">
                                    <form>
                                        <input type="radio" />
                                        <label>Visa Credit Card</label>
                                    </form>
                                    <p>Card ending in : 4452  Expiry Date: 03/08/2024</p>
                                </div>
                                <img src={visa} />
                            </div>
                            <div className="second">
                                <div className="left">
                                    <form>
                                        <input type="radio" />
                                        <label>MasterCard Debit Card</label>
                                    </form>
                                    <p>Card ending in : 4452  Expiry Date: 03/08/2024</p>
                                </div>
                                <img src={master} />
                            </div>
                        </div>
                        <hr />
                        <div className="formy">
                            <p className="heady"><img src={payment} /> Enter your card information</p>
                            <div className="first">
                                <div className="name">
                                    <label>Name</label>
                                    <input type="text" />
                                </div>
                                <div className="expr">
                                    <label>Expiration</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="second">
                                <div className="cardy">
                                    <label>Card Number</label>
                                    <input type="text" />
                                </div>
                                <div className="cvv">
                                    <label>CVV</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <p className="end"><img src={payment} /> Add a new credit or a debit card +</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <h3>Order Summary</h3>
                        <hr />
                        <div className="wrapper">
                            <p>Subtotal (2 Items)</p>
                            <p> SAR 4800</p>
                        </div>
                        <div className="wrapper">
                            <p>Shipping Fee</p>
                            <span> Free</span>
                        </div>
                        <div className="wrapper">
                            <p>Applied Coupons</p>
                            <span> -300</span>
                        </div>
                        <hr />
                        <div className="wrapper2">
                            <h3>Total</h3>
                            <h3>  SAR 4500</h3>
                        </div>
                        <Link to="/order" >
                            <button type="submit">Confirm Payment</button>
                        </Link>
                    </div>
                    <div className="under2">
                        <h3>Items</h3>
                        <hr />
                        <div className="wrapper">
                            <img src={phone} />
                            <p> Samsung Galaxy S23 Ultra, AI Phone, 12GB RAM, 256GB Storage, Graphite, UAE Version, 5G Mobile... <span>Quantity: 1</span></p>
                        </div>
                        <div className="wrapper">
                            <img src={buds} />
                            <p>Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/Noise Cancelling, Hi-Fi Sound, 360 So...<span>Quantity: 1</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
