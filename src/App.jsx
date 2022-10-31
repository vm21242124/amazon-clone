import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout/Checkout";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Components/Footer/Footer";


const promise=loadStripe("pk_live_51LypNYSGDvVtXMdY66HmQtkBse6ZtrYVjAXVYiTUCMEwusXGmMivOAMP6uH4Aclp1DDVOSC2WbjF6isjmYWNELOW00Gaj2E69L");

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
