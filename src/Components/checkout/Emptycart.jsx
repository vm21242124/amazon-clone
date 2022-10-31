import React from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import './Checkout.css'
const Emptycart = () => {
  return (
    <div className="emptycart">
        <h1>Empty Cart</h1>
        <h3><MdOutlineAddShoppingCart/></h3>
        
    </div>
  )
}

export default Emptycart