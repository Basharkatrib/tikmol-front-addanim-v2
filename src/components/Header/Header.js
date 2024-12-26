import React, { useRef, useState, useEffect } from "react";
import { Modal, Ripple, initTWE, Dropdown } from "tw-elements";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import "./Header.css";
import logo from '../../assets/icons/Logo.png';
import icon from '../../assets/icons/Group 63.svg';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import ring from '../../assets/icons/Group 219.png';
import cart from '../../assets/icons/Group 3.png';
import arrow from '../../assets/icons/Vector 43.png';
import { FaRegHeart } from "react-icons/fa6";
import group from "../../assets/images/Group.png";
import logo2 from "../../assets/icons/Layer_1.png";
import google from "../../assets/icons/google.png";
import { Link } from "react-router-dom";



const Header = () => {
    const categoriesRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [email2, setEmail2] = useState('');
    const [password2, setPassword2] = useState('');
    const [error2, setError2] = useState('');
    const [success2, setSuccess2] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navWidth, setNavWidth] = useState('0%'); // الحالة الافتراضية

    const openNav = () => {
        setNavWidth('100%'); // فتح القائمة
    };

    const closeNav = () => {
        setNavWidth('0%'); // إغلاق القائمة
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/categories'); // استبدل بالـ URL المناسب
                setCategories(response.data); // تخزين الفئات المستردة
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = 'http://127.0.0.1:8000/login-google';
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('auth_token', token);

            setIsLoggedIn(true);

            navigate('/');
        }
    }, [navigate]);




    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });

            const token = response.data.token;
            localStorage.setItem('auth_token', token);

            setSuccessMessage('User registered successfully!');
            console.log('User registered successfully:', response.data);

            setIsLoggedIn(true);

            setName('');
            setEmail('');
            setPassword('');
            setPasswordConfirmation('');

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'An error occurred. Please try again.');
            } else {
                setError('An error occurred. Please check your connection and try again.');
            }
        }
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email2,
                password: password2
            });

            const token = response.data.token;
            localStorage.setItem('auth_token', token);

            console.log('Login successful', response.data);
            setSuccess2("Login successful");

            setIsLoggedIn(true);

            setEmail2('');
            setPassword2('');

        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Error during login', error.response?.data || error.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        setIsLoggedIn(false);
        navigate('/');
    };


    const checkScrollPosition = () => {
        const categoriesWrapper = categoriesRef.current;
        setCanScrollLeft(categoriesWrapper.scrollLeft > 0);
        setCanScrollRight(
            categoriesWrapper.scrollLeft + categoriesWrapper.clientWidth < categoriesWrapper.scrollWidth
        );
    };

    const scrollRight = () => {
        const categoriesWrapper = categoriesRef.current;
        const scrollAmount = categoriesWrapper.clientWidth / 2;
        categoriesWrapper.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const scrollLeft = () => {
        const categoriesWrapper = categoriesRef.current;
        const scrollAmount = categoriesWrapper.clientWidth / 2;
        categoriesWrapper.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const categoriesWrapper = categoriesRef.current;
        categoriesWrapper.addEventListener("scroll", checkScrollPosition);
        return () => categoriesWrapper.removeEventListener("scroll", checkScrollPosition);
    }, []);

    useEffect(() => {
        initTWE({ Modal, Ripple, Dropdown });
    }, []);

    return (
        <div className="all flex-col">
            <nav
                className="nav-desk relative flex w-full items-center py-2"
                style={{ height: "auto" }}
            >
                <div className="flex flex-wrap items-center px-3 justify">
                    <div className="ms-2">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="location-wrapper">
                        <div className="location">
                            <img src={icon} alt="Icon" />
                            <p>
                                Location Set to Riad <span>Change Location</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="search-wrapper">
                            <div className="input_sel">
                                <select name="cars" id="cars">
                                    <option value="volvo">All</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <input
                                type="text"
                                placeholder="Search for anything here"
                            />
                            <BiSearchAlt2 />
                        </div>

                    </div>
                    <div class="relative" data-twe-dropdown-ref>
                        <button
                            class="flex items-center rounded ml-2 bg-indigo-950 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0  active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button"
                            id="dropdownMenuButton1"
                            data-twe-dropdown-toggle-ref
                            aria-expanded="false"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            Sign up
                            <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <ul className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark" aria-labelledby="dropdownMenuButton1"
                            data-twe-dropdown-menu-ref>
                            {!isLoggedIn ? (
                                <>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-white py-1 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60">
                                            <button
                                                type="button"
                                                className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
                                                data-twe-toggle="modal"
                                                data-twe-target="#exampleModalCenteredScrollable2"
                                            >
                                                Sign Up
                                            </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-white py-1 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60">
                                            <button
                                                type="button"
                                                className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
                                                data-twe-toggle="modal"
                                                data-twe-target="#exampleModalCenteredScrollable"
                                            >
                                                Sign In
                                            </button>
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <a className="block w-full whitespace-nowrap bg-white py-1 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60">
                                        <button
                                            type="button"
                                            className="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>


                    {/*signin*/}
                    <div
                        data-twe-modal-init
                        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="exampleModalCenteredScrollable"
                        tabindex="-1"
                        aria-labelledby="exampleModalCenteredScrollableLabel"
                        aria-modal="true"
                        role="dialog">
                        <div
                            data-twe-modal-dialog-ref
                            class="pointer-events-auto relative flex min-h-[calc(100%-1rem)] w-2/3 translate-y-[-50px] items-center opacity-100 transition-all duration-300 ease-in-out mx-auto mt-7 min-h-[calc(100%-3.5rem)] max-w-[800px]">
                            <div class="signin-modal rounded-lg flex ">
                                <div class="left p-4 w-1/2">
                                    <h4>Sign In</h4>
                                    <form onSubmit={handleSubmitLogin}>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your email here"
                                            value={email2}
                                            onChange={(e) => setEmail2(e.target.value)}
                                        />
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password here"
                                            value={password2}
                                            onChange={(e) => setPassword2(e.target.value)}
                                        />
                                        <a href="#" className="forgot">Forgot Password?</a>
                                        <button type="submit" className="sign-button">Sign in</button>

                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                        {success2 && <p style={{ color: 'green' }}>{success2}</p>}


                                        <div className="divider">
                                            <span>or</span>
                                        </div>

                                        <a onClick={handleGoogleLogin}>
                                            <div className="wrapper-button">
                                                <img src={google} className="social-icon" alt="Google icon" />
                                                <button type="button" className="social">Continue with Google</button>
                                            </div>
                                        </a>

                                    </form>
                                    <p className="signup">Don’t have an account yet? <span>Sign up</span></p>
                                </div>

                                <div class="right">
                                    <button
                                        type="button"
                                        class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                        data-twe-modal-dismiss
                                        aria-label="Close">
                                        <span class="[&>svg]:h-6 [&>svg]:w-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </button>
                                    <img src={group} className="group" alt="Group Image" />
                                    <img src={logo2} className="logo" alt="Logo Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end-signin*/}

                    {/*signup*/}
                    <div
                        data-twe-modal-init
                        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="exampleModalCenteredScrollable2"
                        tabindex="-1"
                        aria-labelledby="exampleModalCenteredScrollableLabel"
                        aria-modal="true"
                        role="dialog">
                        <div
                            data-twe-modal-dialog-ref
                            class="pointer-events-auto relative flex min-h-[calc(100%-1rem)] w-2/3 translate-y-[-50px] items-center opacity-100 transition-all duration-300 ease-in-out mx-auto mt-7 min-h-[calc(100%-3.5rem)] max-w-[800px]">
                            <div class="signin-modal2 rounded-lg flex ">
                                <div className="left p-4 w-1/2">
                                    <h4>Sign up</h4>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                    <form onSubmit={handleSubmit}>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email here"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter your password here"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label>Repeat Password</label>
                                        <input
                                            type="password"
                                            placeholder="Repeat Password"
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            required
                                        />
                                        <a href="#" className="forgot">Forgot Password?</a>
                                        <button type="submit" className="sign-button">Sign up</button>
                                        <div className="divider">
                                            <span>or</span>
                                        </div>
                                        <div className="wrapper-button">
                                            <img src={google} className="social-icon" alt="Google icon" />
                                            <button type="button" className="social">Continue with Google</button>
                                        </div>
                                    </form>
                                    <p className="signup">Already have an account? <span>Sign in</span></p>
                                </div>
                                <div class="right">
                                    <button
                                        type="button"
                                        class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                        data-twe-modal-dismiss
                                        aria-label="Close">
                                        <span class="[&>svg]:h-6 [&>svg]:w-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                    </button>
                                    <img src={group} className="group" alt="Group Image" />
                                    <img src={logo2} className="logo" alt="Logo Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*endsigup*/}








                    <div className="wish">
                        <p>Wishlist</p>
                        <FaHeart />
                    </div>
                    <div className="rin">
                        <img src={ring} />
                        <p>0</p>

                    </div>
                    <div className="coll">

                    </div>
                    <div className="lang">
                        <select name="cars" id="cars">
                            <option value="volvo">العربية </option>
                            <option value="saab">English </option>
                        </select>

                    </div>
                    <div className="coll">

                    </div>
                    <div className="cart-header">
                        <div className="cart-border"></div>
                        <h4>Cart</h4>
                        <img src={cart} alt="Cart Icon" />
                        <p>0</p>
                    </div>
                </div>
            </nav >
            <div className="nav-middle">
                <div id="myNav" className="overlay" style={{ width: navWidth }}>
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="icon-middle">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
                <div className="ms-2">
                        <Link to="/">
                            <img src={logo} alt="Logo" />

                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="nav-mob">
                <div className="contain">
                    <div className="ms-2">
                        <Link to="/">
                            <img src={logo} alt="Logo" />

                        </Link>
                    </div>
                    <div className="right">
                        <div class="relative" data-twe-dropdown-ref>
                            <button
                                class="flex items-center rounded  bg-indigo-950 px-3 pb-1 pt-1.5 font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                style={{ fontSize: "10px" }}
                                type="button"
                                id="dropdownMenuButton4"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                Sign up
                                <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                                aria-labelledby="dropdownMenuButton4"
                                data-twe-dropdown-menu-ref>
                                <li>
                                    <a
                                        class="block w-full whitespace-nowrap bg-white  py-1 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref>
                                        <button
                                            type="button"
                                            class="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out   focus:outline-none focus:ring-0 "
                                            data-twe-toggle="modal"
                                            data-twe-target="#exampleModalCenteredScrollable3"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light">
                                            Sign Up
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="block w-full whitespace-nowrap bg-white  py-1 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                        href="#"
                                        data-twe-dropdown-item-ref>
                                        <button
                                            type="button"
                                            class="inline-block rounded px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out   focus:outline-none focus:ring-0 "
                                            data-twe-toggle="modal"
                                            data-twe-target="#exampleModalCenteredScrollable4"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light">
                                            Sign in
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/*signin*/}
                        <div
                            data-twe-modal-init
                            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalCenteredScrollable4"
                            tabindex="-1"
                            aria-labelledby="exampleModalCenteredScrollableLabel"
                            aria-modal="true"
                            role="dialog">
                            <div
                                data-twe-modal-dialog-ref
                                class="pointer-events-auto relative flex min-h-[calc(100%-1rem)] w-2/3 translate-y-[-50px] items-center opacity-100 transition-all duration-300 ease-in-out mx-auto mt-7 min-h-[calc(100%-3.5rem)] max-w-[800px]" style={{ width: "85%" }}>
                                <div class="signin-modal rounded-lg flex ">
                                    <div class="left p-4 w-full">
                                        <button
                                            type="button"
                                            class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                            data-twe-modal-dismiss
                                            aria-label="Close">
                                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </button>
                                        <h4>Sign In</h4>
                                        <form onSubmit={handleSubmitLogin}>
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your email here"
                                                value={email2}
                                                onChange={(e) => setEmail2(e.target.value)}
                                            />
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter your password here"
                                                value={password2}
                                                onChange={(e) => setPassword2(e.target.value)}
                                            />
                                            <a href="#" className="forgot">Forgot Password?</a>
                                            <button type="submit" className="sign-button">Sign in</button>

                                            {error2 && <p style={{ color: 'red' }}>{error2}</p>}
                                            {success2 && <p style={{ color: 'green' }}>{success2}</p>}


                                            <div className="divider">
                                                <span>or</span>
                                            </div>
                                            <div className="wrapper-button">
                                                <img src={google} className="social-icon" alt="Google Icon" />
                                                <button type="submit" className="social">Continue with Google</button>
                                            </div>
                                        </form>
                                        <p className="signup">Don’t have an account yet? <span>Sign in</span></p>
                                    </div>
                                    <div class="right">
                                        <button
                                            type="button"
                                            class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                            data-twe-modal-dismiss
                                            aria-label="Close">
                                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </button>
                                        <img src={group} className="group" alt="Group Image" />
                                        <img src={logo2} className="logo" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end-signin*/}

                        {/*signup*/}
                        <div
                            data-twe-modal-init
                            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalCenteredScrollable3"
                            tabindex="-1"
                            aria-labelledby="exampleModalCenteredScrollableLabel"
                            aria-modal="true"
                            role="dialog">
                            <div
                                data-twe-modal-dialog-ref
                                class="pointer-events-auto relative flex min-h-[calc(100%-1rem)] translate-y-[-50px] items-center opacity-100 transition-all duration-300 ease-in-out mx-auto mt-7 min-h-[calc(100%-3.5rem)] max-w-[1500px]" style={{ width: "85%" }}>
                                <div class="signin-modal2 rounded-lg flex ">
                                    <div class="left p-4 w-full">
                                        <button
                                            type="button"
                                            class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                            data-twe-modal-dismiss
                                            aria-label="Close">
                                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </button>
                                        <h4>Sign up</h4>
                                        {error && <p style={{ color: 'red' }}>{error}</p>}
                                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                        <form onSubmit={handleSubmit}>
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email here"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter your password here"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <label>Repeat Password</label>
                                            <input
                                                type="password"
                                                placeholder="Repeat Password"
                                                value={passwordConfirmation}
                                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                required
                                            />
                                            <a href="#" className="forgot">Forgot Password?</a>
                                            <button type="submit" className="sign-button">Sign up</button>
                                            <div className="divider">
                                                <span>or</span>
                                            </div>
                                            <div className="wrapper-button">
                                                <img src={google} className="social-icon" alt="Google icon" />
                                                <button type="button" className="social">Continue with Google</button>
                                            </div>
                                        </form>
                                        <p className="signup">Already have an account? <span>Sign in</span></p>
                                    </div>
                                    <div class="right">
                                        <button
                                            type="button"
                                            class="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                                            data-twe-modal-dismiss
                                            aria-label="Close">
                                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor">
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </button>
                                        <img src={group} className="group" alt="Group Image" />
                                        <img src={logo2} className="logo" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*endsigup*/}


                        <div className="rin">
                            <img src={ring} />
                            <p>0</p>

                        </div>
                        <div className="wrapper-hart" >
                            <FaRegHeart className="hart" />
                        </div>
                    </div>
                </div>
                <div className="wrapper-input">
                    <input
                        type="text"
                        placeholder="Search for anything here"
                    />
                    <BiSearchAlt2 className="search" />
                </div>
                <div className="locate">
                    <p><span className="icon"><img src={icon} alt="Icon" /></span>Delivering to Ryiad<span className="para-locate">Tap to Change Location</span></p>
                </div>
            </div>
            <div className="second">
                {canScrollLeft && (
                    <div className="arrowleft" onClick={scrollLeft}>
                        <img src={arrow} alt="Left Arrow" />
                    </div>
                )}
                <div className="categories-wrapper" ref={categoriesRef}>
                    <ul className="categories">
                        {categories.map((category) => (
                            <Link to={`/paginate/${category.id}`}>
                                <li key={category.id}>{category.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                {canScrollRight && (
                    <div className="arrowright" onClick={scrollRight}>
                        <img src={arrow} alt="Right Arrow" />
                    </div>
                )}
            </div>

        </div >
    );
};

export default Header;
