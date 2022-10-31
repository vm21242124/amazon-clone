import React from "react";
import "./Navbar.css";
import { BsSearch, BsCartCheck } from "react-icons/bs";
import logo from "../../img/amazon.png";
import { NavLink } from "react-router-dom";
import { logOut, useAuth } from "../../firebasse";
import { useStateValue } from "../../Stateprovider";

const Navbar = () => {
  const [{ basket }] = useStateValue();
  const user=useAuth();
  

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </NavLink>
      <div className="header_search">
        <input type="text" className="header_search" />
        <span className="header_searchLogo">
          <BsSearch />
        </span>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">{user?.email?`hello ${user.email}`:`hello Guest`}</span>
          <NavLink onClick={logOut} to={!user && '/login'} className="header_optionLinTwo navlink">
            {user?"Log Out":"Sign In"}
          </NavLink>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">return</span>
          <span className="header_optionLinTwo">&order</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">your</span>
          <span className="header_optionLinTwo">prime</span>
        </div>
        <div className="header_option">
          <NavLink className="header_optionBasket navlink" to="/checkout">
            <BsCartCheck /> {basket?.length}
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
