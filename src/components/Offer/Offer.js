import './Offer.css';
import bag from  '../../assets/icons/bag.png';
export default function Offer(){
    return(
        <div className="all_offer">
           <h3>15% Cash back +</h3>
           <button className="free">Free Shipping</button>
           <p className="on-your">on your first groceries order</p>
           <img src={bag} />
           <p>use the code</p>
           <button className="tikmo">tikmoolfresh</button>
        </div>
    );
}