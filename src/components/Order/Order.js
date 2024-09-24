import "./Order.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown, Ripple, Modal, initTWE } from "tw-elements";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect } from "react";
import phone from "../../assets/images/phone2.png";
import buds from "../../assets/images/buds2.png";

export default function Order() {
    useEffect(() => {
        initTWE({ Dropdown, Ripple, Modal });
    }, []);

    return (
        <div className="order-all">
            <div className="first">
                <h3>Your Orders</h3>
            </div>
            <div className="second">
                <div className="left">
                    <ul>
                        <li>Orders</li>
                        <li>Buy Again</li>
                        <li>Canceled Orders</li>
                    </ul>
                </div>
                <div className="middle">
                    <input type="search" placeholder="Search orders..." />
                    <BiSearchAlt2 className="search" />
                </div>
                <div className="right">
                    <p>10 Orders Placed in the last</p>
                    <div className="relative" data-twe-dropdown-ref>
                        <button
                            className="flex items-center rounded border-gray-600 bg-slate-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out"
                            type="button"
                            id="dropdownMenuButton1"
                            data-twe-dropdown-toggle-ref
                            aria-expanded="false"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                        >
                            Months
                            <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                                <IoMdArrowDropdown />
                            </span>
                        </button>
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                            aria-labelledby="dropdownMenuButton1"
                            data-twe-dropdown-menu-ref
                        >
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                >
                                    Action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                >
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                >
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="third">
                <p>Something wrong with your order and want a refund ?</p>
                <button
                    type="button"
                    className="inline-block rounded bg-violet-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-toggle="modal"
                    data-twe-target="#exampleModalLg"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                >
                    Make a refund request
                </button>
                <div
                    data-twe-modal-init
                    className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="exampleModalLg"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLgLabel"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        data-twe-modal-dialog-ref
                        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]"
                    >
                        <div className="pomp pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
                            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
                                <h5
                                    className="title"
                                    id="exampleModalLgLabel"
                                >
                                    Request a refund
                                </h5>
                                <button
                                    type="button"
                                    className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                    data-twe-modal-dismiss
                                    aria-label="Close"
                                >
                                    <span className="[&>svg]:h-6 [&>svg]:w-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div className="content relative">
                                <form>
                                    <div className="top">
                                        <div className="left">
                                            <label>Full Name</label>
                                            <input type="text" />
                                            <label>Email</label>
                                            <input type="email" />
                                            <label>Phone Number (Optional)</label>
                                            <input type="number" />
                                        </div>
                                        <div className="right">
                                            <label>Reason for the refund</label>
                                            <select>
                                                <option>Defected item</option>
                                                <option>Defected item</option>
                                                <option>Defected item</option>
                                            </select>
                                            <label>Order Number</label>
                                            <input type="number" />
                                            <label>Reason for the refund</label>
                                            <select>
                                                <option>Defected item</option>
                                                <option>Defected item</option>
                                                <option>Defected item</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="under">
                                    <label>Additional information</label>
                                    <textarea rows="5" ></textarea>  
                                    <button type="submit">Send Refund Request</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth">
                <p>1-2 of over 2 results for <span>Last 6 Months</span></p>
            </div>
            <div className="fifth">
                <div className="left">
                    <p>Order Placed 24 January 2024</p>
                    <p>Shipment Origin: <span>Mecca </span> --------- Shipment Destination: <span>Ryiad</span></p>
                </div>
                <div className="right">
                    <span>Order Number #112445522</span>
                    <p>Total order: 4320 SAR</p>
                </div>
            </div>
            <div className="sixth">
                <div className="left">
                    <img src={phone} alt="Phone" />
                    <div className="right">
                        <div className="top">
                            <p>Status: <span>On Route</span></p>
                            <p>Ship to: <span>Ryiad</span></p>
                            <p>Total: <span>SAR 4800</span></p>
                        </div>
                        <hr />
                        <div className="middle">
                            <p>Samsung Galaxy S23 Ultra, AI Phone, 12GB RAM, 256GB Storage, Graphite, UAE Version, 5G Mobile Phone, Dual SIM, Android Smartphone, 1 Year Manufacturer Warranty...</p>
                        </div>
                        <div className="butt">
                            <button type="submit" className="track">Track Shipment</button>
                            <button type="submit" className="cancel">Cancel Order</button>
                        </div>
                    </div>
                </div>
                <div className="separator"></div> {/* خط فاصل */}
                <div className="right">
                    <img src={buds} alt="Buds" />
                    <div className="right">
                        <div className="top">
                            <p>Status: <span>On Route</span></p>
                            <p>Ship to: <span>Ryiad</span></p>
                            <p>Total: <span>SAR 200</span></p>
                        </div>
                        <hr />
                        <div className="middle">
                            <p>Samsung Galaxy Buds Pro, Wireless Earbuds, 28-Hour Battery Life, Bluetooth 5.0, Active Noise Cancelling...</p>
                        </div>
                        <div className="butt">
                            <button type="submit" className="track">Track Shipment</button>
                            <button type="submit" className="cancel">Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
