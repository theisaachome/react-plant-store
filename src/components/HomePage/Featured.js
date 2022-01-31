import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import Product from "../Product";
import Title from "../Title";
export default class Featured extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title center="true" title="Featured Products" />
          <div className="row my-5">
            <ProductConsumer>
              {(value) => {
                const { featuredProducts } = value;
                return featuredProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          </div>
          <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              more products
            </Link>
          </div>
        </div>
        </div>
      </section>
    );
  }
}
