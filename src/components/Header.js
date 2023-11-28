import React, { useState } from 'react';
import { FaBagShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum +=  Number.parseFloat(el.price));
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='sum'>Total: {sum}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Your shopping cart is empty</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Engagement rings</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>Profile</li>
            </ul>
            <FaBagShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
