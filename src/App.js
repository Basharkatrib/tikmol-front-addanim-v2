import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tw-elements';
import Header from './components/Header/Header';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Adress_pa from './Pages/Adress-pa/Adress-pa';
import Privacy_pa from './Pages/Priveacy-pa/Privacy-pa';
import Offer from './components/Offer/Offer';
import Payment_pa from './Pages/Payment-pa/Payment-pa';
import Paginate_pa from './Pages/Paginate-pa/Paginate-pa';
import Order_pa from './Pages/Order-pa/Order-pa';
import Checkout_pa from './Pages/Checkout-pa/Checkout-pa';
import Refunds_pa from './Pages/Refunds-pa/Refunds-pa';
import Product_pa from './Pages/Product-pa/Product-pa';



function App() {
  return (
     <>
      <Header />
      <Offer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adress" element={<Adress_pa />} />
        <Route path="/privacy" element={<Privacy_pa />} />
        <Route path="/payment" element={<Payment_pa />} />
        <Route path="/paginate/:id" element={<Paginate_pa />} />
        <Route path="/order" element={<Order_pa />} />
        <Route path="/checkout" element={<Checkout_pa />} />
        <Route path="/refund" element={<Refunds_pa />} />
        <Route path="/product/:id" element={<Product_pa />} />
      </Routes>
      <Footer />
     
      
    </>
  );
}

export default App;