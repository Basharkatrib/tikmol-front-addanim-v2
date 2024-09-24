import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hot from "../../components/Hot/Hot";
import Offer from "../../components/Offer/Offer";
import Slider from "../../components/Slider/Slider";
import Slider2 from "../../components/Slider2/Slider2";
import Slider3 from "../../components/Slider3/Slider3";
import Special from "../../components/Special/Special";
import ramadan from "../../assets/images/ramadan.png";
import basket from "../../assets/images/Rectangle80.png";
import iphone from "../../assets/images/iphone.png";
import perf from "../../assets/images/perefium.png";
import Adress from "../../components/Adress/Adress";




export default function Home(){
    return(
        <div className="flex-col">
            
            
            <Slider />
            <Category />
            <Special title="Special Offer" image={basket} showBalloons={true} backcolor="#F3BFB7" imageslide={perf} />
            <Slider2 />
            <Hot />
            <Slider3 />
            <Special title="Ramadan Offers" image={ramadan} showBalloons={false} backcolor="#F8EDDD" imageslide={iphone} />
            
        </div>
    )
}