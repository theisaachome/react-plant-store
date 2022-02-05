import React from "react";
import { ProductConsumer } from "../../context/";
const CartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>{(value) => {
          console.log(value);
          const {clearCart,cartSubTotal,cartTax,cartTotal}=value;
          console.log(cartSubTotal);
          return <div className="col text-title text-center my-4">
            <button className="btn btn-outline-danger 
            text-text-capitalize mb-4" onClick={clearCart}>
              clear cart
            </button>
            <h3>SubTotal : $ {cartSubTotal}</h3>
            <h3>Tax : $ {cartTax}</h3>
            <h3>Total : $ {cartTotal}</h3>
          </div>
        }}</ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
