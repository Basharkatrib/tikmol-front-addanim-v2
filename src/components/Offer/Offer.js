import './Offer.css';
import bag from '../../assets/icons/bag.png';
import React, { useState, useEffect } from 'react';

export default function Offer() {
    const [animatedText, setAnimatedText] = useState(""); 
    const fullText = "TikmolFresh"; 
    

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setAnimatedText((prev) => prev + fullText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval); 
            }
        }, 200); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="all_offer">
            <h3>15% Cash back +</h3>
            <button className="free">Free Shipping</button>
            <p className="on-your">on your first groceries order</p>
            <img src={bag} alt="Bag Icon" />
            <p>use the code</p>
            <button className="tikmo">
                {fullText.split("").map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        {char}
                    </span>
                ))}
            </button>
        </div>
    );
}
