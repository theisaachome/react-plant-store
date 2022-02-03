import React from 'react';
import Title from "../Title";
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = () => {
  return <section className='py-5'>
    <div className="container">
      <Title  title="Your Cart Items" center="true"/>
    </div>
      <CartColumns>
          <CartList/>
          <CartTotals/>
      </CartColumns>
  </section>;
};

export default Cart;
