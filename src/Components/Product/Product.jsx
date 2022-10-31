import React from "react";
import "./Product.css";
import { useStateValue } from "../../Stateprovider";
const Product = ({id, title, image, price, rating }) => {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=(e)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        image:image,
        title:title,
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <img src={image} alt="" className="product_img" />
        <button onClick={addToBasket} className="btnCart">add to cart</button>
      </div>
    </div>
  );
};

export default Product;
