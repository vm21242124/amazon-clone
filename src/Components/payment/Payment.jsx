import React from "react";
import "./Payment.css";
import { useAuth } from "../../firebasse";
import { useStateValue } from "../../Stateprovider";
import Checkoutproduct from "../Product/Checkoutproduct";
import StripeCheckout from 'react-stripe-checkout';
import { getTotalBasket } from "../../Reducer";
const Payment = () => {
  const onToken=((token)=>{
    console.log(token)
  })
  const user = useAuth();
  const [{ basket }] = useStateValue();
  return (
    <div className="payment">
      <h2>You Have {basket.length} products</h2>
      <div className="payment_container">
        <div className="payment_Section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="delivery_address">
            <p>{user?.email}</p>
            <p>At:khalane</p>
            <p>shindkheda</p>
          </div>
        </div>
        <div className="product_section">
          <div className="titlee">
            <h3>Review and confirm item</h3>
            <div className="payment_items">
              {basket.map((item) => (
                <Checkoutproduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="payment_Section">
          <div className="payment_title">
            <h3>payment method</h3>
          </div>
          <div className="payment_details">
            <h3>Total Amount {getTotalBasket(basket)}</h3>
            <StripeCheckout
              token={onToken}
              stripeKey="pk_live_51LypNYSGDvVtXMdY66HmQtkBse6ZtrYVjAXVYiTUCMEwusXGmMivOAMP6uH4Aclp1DDVOSC2WbjF6isjmYWNELOW00Gaj2E69L"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
