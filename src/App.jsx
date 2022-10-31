import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout/Checkout";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/payment/Payment";

import Footer from "./Components/Footer/Footer";




const App = () => {

 
  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/payment" element={<Payment/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
