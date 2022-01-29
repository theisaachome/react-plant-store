import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav__center">
              <FaBars className="nav__icon" onClick={handleSidebar} />
              <img src={logo} alt="tech store logo" />
              <div className="nav__cart">
                <FaCartPlus className="nav__icon" onClick={handleCart} />
                <div className="cart__items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color:var(--mainGrey);
  border-bottom: 2px solid var(--primaryColor);
  .nav__center{
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1170px;
      margin: 0 auto;
  }
  .nav__icon{
      font-size: 1.5rem;
      cursor: pointer;
  }
  .nav__cart{
      position: relative;
  }
  .cart__items{
      position: absolute;
      background-color: var(--primaryColor);
      color: var(--mainWhite);
      font-size: .856rem;
      top: -8px;
      right: -8px;
      padding: 0 5px;
      border-radius: 50%;
  }
`;
