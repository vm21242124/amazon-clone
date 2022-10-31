import React from "react";
import "./Subtotal.css";

import { useStateValue } from "../../Stateprovider";
import { getTotalBasket } from "../../Reducer";
import { NavLink } from "react-router-dom";

const Subtotal = () => {
  const[{basket}]=useStateValue();
  return (
    <div className="subtotal">
      
      <p>subtotal {getTotalBasket(basket)} </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        Thist order contains a gift
      </small>
      <NavLink to='/payment' ><button className="btnCart paye">proceed to pay</button></NavLink>
    </div>
  );
};

export default Subtotal;
