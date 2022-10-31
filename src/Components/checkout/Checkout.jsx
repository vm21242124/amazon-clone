import React from "react";
import Checkoutproduct from "../Product/Checkoutproduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import {useStateValue} from'../../Stateprovider'
import {useAuth} from '../../firebasse.js'
import Emptycart from "./Emptycart";
const Checkout = () => {
  const user=useAuth();
  const [{basket}]=useStateValue();
  return (
    
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Gift_Cards/1-gift-cards-PC.gif"
          alt="ad"
          className="checkoutAd"
        />
        <h2 className="checkout_title">Your Cart Has {basket?.length} products</h2>
        <div className="checkout_itmes">
          {/* {basket.map(item=>(
            <Checkoutproduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            />
            
          ))} */}
          {user?basket.map(item=>(
            <Checkoutproduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            />
            
          )):<Emptycart/>}
          
        </div>
      </div>
      <div className="checkout_right">
        <h2>Total Price of Cart</h2>
        <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
