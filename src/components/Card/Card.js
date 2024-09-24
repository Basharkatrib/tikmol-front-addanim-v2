import "./Card.css";
import play from "../../assets/images/play.png";
export default function Card() {
    return (
        <div className="card">
            <div className="image">
                <img src={play} />
            </div>
            <p><span>Save up to 25%</span>Limited time offer</p>
            <h3>Save on Playstation 5</h3>
        </div>
    );
}