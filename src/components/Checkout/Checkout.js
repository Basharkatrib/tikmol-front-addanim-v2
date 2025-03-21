import "./Checkout.css";
import phone from "../../assets/images/phone2.png";
import buds from "../../assets/images/buds2.png";
import { RiCoupon2Line } from "react-icons/ri";
import Hot from "../Hot/Hot";

export default function Checkout() {
    return (
        <div className="checkout-all">
            <div className="first">
                <div className="left">
                    <div className="title-all">
                        <div className="title1">
                            <h3>Cart: ( 2 Items )</h3>
                        </div>
                        <div className="title2">
                            <p>Price</p>
                        </div>
                    </div>
                    <hr />
                    <div className="products">
                        {/* Product 1 */}
                        <div className="prod1">

                            <img src={phone} alt="Samsung Galaxy S23 Ultra" />
                            <div className="desc">
                                <p className="first">Samsung Galaxy S23 Ultra, AI Phone, 12GB RAM, 256GB Storage, Graphite, UAE Version, 5G Mobile Phone, Dual SIM, Android Smartphone, 1 Year Manufacturer Warranty...</p>
                                <p>Product Style: <span>Samsung S24 KSA Version</span></p>
                                <p>Size: <span>256 GB</span></p>
                                <p>Color: <span>Gold</span></p>
                                <div className="count">
                                    <p>Quantity</p>
                                    <button className="opt">-</button>
                                    <button className="answ">1</button>
                                    <button className="opt">+</button>
                                    <div className="separate"></div>
                                    <p>Delete</p>
                                    <div className="separate"></div>
                                    <p>Share</p>
                                </div>

                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="prod2">

                            <img src={buds} alt="Samsung Galaxy S23 Ultra" />
                            <div className="desc">
                                <p className="first">Samsung Galaxy S23 Ultra, AI Phone, 12GB RAM, 256GB Storage, Graphite, UAE Version, 5G Mobile Phone, Dual SIM, Android Smartphone, 1 Year Manufacturer Warranty...</p>
                                <p>Product Style: <span>Samsung S24 KSA Version</span></p>
                                <p>Size: <span>256 GB</span></p>
                                <p>Color: <span>Gold</span></p>
                                <div className="count">
                                    <p>Quantity</p>
                                    <button className="opt">-</button>
                                    <button className="answ">1</button>
                                    <button className="opt">+</button>
                                    <div className="separate"></div>
                                    <p>Delete</p>
                                    <div className="separate"></div>
                                    <p>Share</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Order Summary */}
                <div className="right">
                    <h3>Order Summary</h3>
                    <hr />
                    <div className="inp1">
                        <input type="text" placeholder="Coupon Code" />
                        <RiCoupon2Line className="icon" />
                        <button>Apply</button>
                    </div>

                    {/* Dropdown Component */}
                    <div className="relative w-full" data-twe-dropdown-ref>
                        <a
                            className="flex justify-between items-center rounded w-full bg-slate-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border border-violet-800 transition duration-150 ease-in-out  hover:shadow-primary-2 focus:outline-none focus:ring-0 motion-reduce:transition-none" href="#"
                            type="button"
                            id="dropdownMenuButton2"
                            data-twe-dropdown-toggle-ref
                            aria-expanded="false"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                        >
                            View Available Offers
                            <span className="ms-2 w-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7609 9.99999L19.8663 8.08969C19.9991 7.85986 20.0352 7.58667 19.9667 7.33021C19.8982 7.07374 19.7306 6.85499 19.5008 6.72205L17.5885 5.61672V3.41407C17.5885 3.14854 17.483 2.89388 17.2953 2.70612C17.1075 2.51835 16.8529 2.41287 16.5873 2.41287H14.3857L13.2813 0.501575C13.148 0.272216 12.9296 0.104604 12.6736 0.0350146C12.5466 0.000589099 12.4141 -0.00828766 12.2836 0.00889877C12.1532 0.0260852 12.0274 0.0689931 11.9137 0.135135L10.0014 1.24046L8.08911 0.134134C7.85915 0.00137182 7.58588 -0.034606 7.3294 0.0341144C7.07292 0.102835 6.85424 0.270625 6.72147 0.500574L5.61614 2.41287H3.41449C3.14896 2.41287 2.8943 2.51835 2.70654 2.70612C2.51877 2.89388 2.41329 3.14854 2.41329 3.41407V5.61572L0.500992 6.72105C0.386887 6.78668 0.286876 6.87421 0.206703 6.97862C0.126531 7.08302 0.0677781 7.20224 0.0338202 7.32942C-0.000137755 7.4566 -0.00863139 7.58923 0.00882726 7.71971C0.0262859 7.85018 0.0693526 7.97591 0.135553 8.08969L1.24088 9.99999L0.135553 11.9103C0.00338332 12.1403 -0.0324765 12.4133 0.0357919 12.6697C0.10406 12.9261 0.27092 13.1451 0.499991 13.2789L2.41229 14.3843V16.5859C2.41229 16.8514 2.51777 17.1061 2.70553 17.2939C2.8933 17.4816 3.14796 17.5871 3.41349 17.5871H5.61614L6.72147 19.4994C6.8101 19.6509 6.93666 19.7768 7.08869 19.8645C7.24071 19.9523 7.41297 19.999 7.58851 20C7.76272 20 7.93592 19.9539 8.09011 19.8648L10.0004 18.7595L11.9127 19.8648C12.1426 19.9974 12.4157 20.0334 12.6721 19.9649C12.9285 19.8964 13.1472 19.729 13.2803 19.4994L14.3847 17.5871H16.5863C16.8519 17.5871 17.1065 17.4816 17.2943 17.2939C17.482 17.1061 17.5875 16.8514 17.5875 16.5859V14.3843L19.4998 13.2789C19.6137 13.2131 19.7135 13.1255 19.7936 13.021C19.8736 12.9166 19.9322 12.7974 19.9662 12.6703C20.0001 12.5432 20.0087 12.4107 19.9914 12.2803C19.974 12.1498 19.9312 12.0241 19.8653 11.9103L18.7609 9.99999ZM7.4974 4.98396C7.89583 4.98409 8.2779 5.1425 8.55954 5.42433C8.84118 5.70616 8.99933 6.08833 8.9992 6.48677C8.99907 6.8852 8.84066 7.26727 8.55883 7.54891C8.277 7.83055 7.89483 7.9887 7.4964 7.98857C7.09796 7.98844 6.7159 7.83003 6.43425 7.5482C6.15261 7.26637 5.99446 6.8842 5.99459 6.48576C5.99473 6.08733 6.15313 5.70526 6.43496 5.42362C6.71679 5.14198 7.09896 4.98383 7.4974 4.98396ZM7.79776 14.5955L6.19583 13.3951L12.2031 5.38544L13.805 6.58589L7.79776 14.5955ZM12.5034 14.996C12.3061 14.9959 12.1108 14.957 11.9285 14.8814C11.7463 14.8059 11.5807 14.6952 11.4413 14.5556C11.3018 14.4161 11.1912 14.2504 11.1158 14.0681C11.0403 13.8858 11.0015 13.6905 11.0016 13.4932C11.0017 13.2959 11.0406 13.1006 11.1162 12.9183C11.1917 12.7361 11.3024 12.5705 11.442 12.431C11.5815 12.2916 11.7472 12.181 11.9295 12.1055C12.1118 12.0301 12.3071 11.9913 12.5044 11.9914C12.9028 11.9915 13.2849 12.1499 13.5666 12.4317C13.8482 12.7136 14.0063 13.0957 14.0062 13.4942C14.0061 13.8926 13.8477 14.2747 13.5658 14.5563C13.284 14.838 12.9018 14.9961 12.5034 14.996Z" fill="url(#paint0_linear_371_1906)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_371_1906" x1="16.1739" y1="-15.678" x2="4.61251" y2="32.4126" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.21" stop-color="#FF31FA" />
                                            <stop offset="0.59" stop-color="#8733FF" />
                                            <stop offset="0.73" stop-color="#5827BA" />
                                            <stop offset="0.85" stop-color="#361E88" />
                                            <stop offset="0.95" stop-color="#211969" />
                                            <stop offset="1" stop-color="#1A175E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                            aria-labelledby="dropdownMenuButton2"
                            data-twe-dropdown-menu-ref
                        >
                            <li>
                                <a className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sub">
                        <p>Subtotal (2 Items)</p>
                        <div className="right">
                            <p> SAR 4800</p>
                            <span>Free</span>
                        </div>

                    </div>
                    <hr />
                    <div className="total">
                        <h3>Total</h3>
                        <h3>SAR 4800</h3>
                    </div>
                    <button className="check">Checkout</button>
                </div>
            </div>
            <div className="second">
            <h3>Related Products</h3>
              <Hot  marginLeftLaptop="50px" marginLeftMobile="0px" />

            </div>
        </div>
    );
}
