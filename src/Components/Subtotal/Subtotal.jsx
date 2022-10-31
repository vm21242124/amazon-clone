import React from "react";
import "./Subtotal.css";

import { useStateValue } from "../../Stateprovider";
import { getTotalBasket } from "../../Reducer";
import { NavLink } from "react-router-dom";
import {useAuth} from '../../firebasse'

const Subtotal = () => {
  const user=useAuth();
  const[{basket}]=useStateValue();
  return (
    <div className="subtotal">
      <div className="subtotal_contain">

      <h2>subtotal </h2>
      
      <strong><small>₹ </small>{getTotalBasket(basket)}</strong>
      <small className="subtotal_gift">
        <input type="checkbox" />
        Thist order contains a gift
      </small>

      <NavLink to={user ? '/payment':'/login'} ><button className="btnCart ">proceed to pay</button></NavLink>
      <div className="mar">
        <marquee behavior="" direction="left">This is just clone for showing the skill..--by vm2124</marquee>
      </div>
      </div>
    </div>
  );
};

export default Subtotal;
