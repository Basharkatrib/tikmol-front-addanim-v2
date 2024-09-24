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
import Order from './components/Order/Order';
import Order_pa from './Pages/Order-pa/Order-pa';


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
        <Route path="/paginate" element={<Paginate_pa />} />
        <Route path="/order" element={<Order_pa />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;