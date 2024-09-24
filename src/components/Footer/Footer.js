import logo from '../../assets/icons/Layer_1.png';
import xcom from '../../assets/icons/Xxx.png';
import face from '../../assets/icons/face.png';
import insta from '../../assets/icons/insta.png';
import linked from '../../assets/icons/linked.png';

import './Footer.css';
export default function Footer() {
    return (
        <footer>
            <div className='left'>
                <div className='logo_fo'>
                <img src={logo} />

                </div>


                <ul class="list_left mb-0 list-none">
                    <li>
                        <img src={xcom} />
                    </li>
                    <li>
                        <img src={face} />
                    </li>
                    <li>
                        <img src={insta} />
                    </li>
                    <li>
                        <img src={linked} />
                    </li>
                </ul>
            </div>
            <div className='right'>
                <div class="all">
                    <h5 class="mb-2.5  uppercase">Find more about us</h5>

                    <ul class="mb-0 list-none">
                        <li>
                            <a href="#!">About us</a>
                        </li>
                        <li>
                            <a href="#!">Contact us</a>
                        </li>
                        <li>
                            <a href="#!">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div class="all">
                    <h5 class="mb-2.5 uppercase">Shopping done easy</h5>

                    <ul class="mb-0 list-none">
                        <li>
                            <a href="#!">Your account</a>
                        </li>
                        <li>
                            <a href="#!">Your orders</a>
                        </li>
                        <li>
                            <a href="#!">Your adress</a>
                        </li>
                        <li>
                            <a href="#!">Your cart</a>
                        </li>
                    </ul>
                </div>

                <div class="all">
                    <h5 class="mb-2.5 uppercase">Your cart</h5>

                    <ul class="mb-0 list-none">
                        <li>
                            <a href="#!">Seller account</a>
                        </li>
                        <li>
                            <a href="#!">Careers</a>
                        </li>
                        <li>
                            <a href="#!">Advertise your product</a>
                        </li>
                        <li>
                            <a href="#!">Become an affiliate</a>
                        </li>
                    </ul>
                </div>

            </div>


        </footer >
    );

}