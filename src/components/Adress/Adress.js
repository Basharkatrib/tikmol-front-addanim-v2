import React, { useEffect, useRef } from "react";
import "./Adress.css";
import location from "../../assets/icons/Location2.png";
import payment from "../../assets/icons/Payment.png";
import logo from "../../assets/icons/Logo.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Adress() {
  const mapRef = useRef(null);

  useEffect(() => {
    // إنشاء الخريطة باستخدام Leaflet
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // إضافة الطبقة الأساسية للخريطة
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // الحصول على موقع المستخدم الحالي وعرضه على الخريطة
    map.locate({ setView: true, maxZoom: 16 });

    function onLocationFound(e) {
      const radius = e.accuracy / 2;

      L.marker(e.latlng)
        .addTo(map)
        .bindPopup("You are within " + radius + " meters from this point")
        .openPopup();

      L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
      alert(e.message);
    }

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);
  }, []);

  return (
    <div className="adress-all">
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
          <div
            className="map"
            ref={mapRef}
            style={{ height: "420px", width: "100%" }}
          ></div>
          <div className="location">
            <p><img src={location} />  2915 Salih Al Irq, 6770, Ar Rabwah, Riyadh 12823, Saudi Arabia</p>
            <button>Save Location</button>
          </div>
        </div>
        <div className="right">
          <h3>Billing Address</h3>
          <hr />
          <form>
            <label>Full Name*</label>
            <input type="text" />
            <label>Street Details*</label>
            <input type="text" />
            <label>Phone Number*</label>
            <input type="text" placeholder="+966" />
            <label>Email</label>
            <input type="email" />
            <div className="check">
              <input type="checkbox" />
              <label>Remember This Address</label>
            </div>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}
