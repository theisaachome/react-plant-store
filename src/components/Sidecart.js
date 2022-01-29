import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';

const Sidecart = () => {
  return <ProductConsumer>
      {
          value=>{
              const {cartOpen,closeCart,cart}=value;
              return <CartWrapper 
              show={cartOpen}
              onClick={closeCart}>
                  <p>CartItem</p>
                  {cart}
              </CartWrapper>
          }
      }
  </ProductConsumer>;
};

export default Sidecart;

const CartWrapper=styled.div`
    position: fixed;
    top: 61px;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-left: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props=>props.show?"translateX(0)":"translateX(100%)"};
    @media screen and (min-width:576px){
        width: 20rem;
    }
`