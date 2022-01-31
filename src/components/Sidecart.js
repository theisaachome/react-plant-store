import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';

const Sidecart = () => {
  return <ProductConsumer>
      {
          value=>{
              const {cartOpen,closeCart,cart,cartTotal}=value;
              return <CartWrapper 
              show={cartOpen}
              onClick={closeCart}>
                 <ul>
                     {
                         cart.map(item=>{
                             return <li key={item.id} className='cart-item mb-4' >
                                 <img width={35} src={`../${item.image}`} alt={item.title} />
                                 <div className="mt-3">
                                     <h6 className='text-uppercase'>{item.title}</h6>
                                     <h6 className='text-title text-text-capitalize'>Quantity : {item.count}</h6>
                                 </div>
                             </li>
                         })
                     }
                 </ul>
                 <h4 className='text-text-capitalize text-main cart-price'>
                     Total : $ {cartTotal}
                 </h4>
                 <div className="text-center ">
                     <Link to="/cart" style={{margin:"3rem 0 6rem 0"}} 
                     className='main-link'>Check Out</Link>
                 </div>
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
    margin-bottom:2rem;
    @media screen and (min-width:576px){
        width: 20rem;
    }
    overflow: scroll;
    .cart-item{
        padding: 1rem 2rem;
        border-bottom: 2px solid var(--primaryColor);
    }
    .cart-price{
        padding-right: 2rem;
        text-align: right;
    }
`