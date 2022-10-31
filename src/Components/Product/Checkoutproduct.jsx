import React from "react";
import { useStateValue } from "../../Stateprovider";
import "./Checkoutproduct.css";
const Checkoutproduct = ({ id, image, title, price, rating }) => {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=(e)=>{
    e.preventDefault();
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct_left">
        <img src={image} alt="product" className="checkoutproduct_img" />
      </div>
      <div className="checkoutproduct_right">
        <h3 className="checkoutproduct_title">{title}</h3>
        <p className="product_rating">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>

        <strong>
          <small>₹</small>
          {price}
        </strong>
        <button onClick={removeFromBasket} className="btnCart">remove from cart</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
