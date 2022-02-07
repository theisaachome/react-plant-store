import React from 'react';
import { ProductConsumer } from "../../context/";
import Title from '../Title';
import Product from '../Product';
import ProductsFilter from './ProductsFilter';
;


const Products = () => {
  return <ProductConsumer>
      {
          value=>{
              const {filteredProducts}=value;
              return <section className='py-5'>
                  <div className="container">
                      <Title center="true" title="Our Products"/>
                      {/* product filter */}
                      <ProductsFilter/>
                      <div className="row">
                          {/* Product count */}
                          <div className="col-10 mx-auto">
                              <h6 className="text-title">
                                  Total Products: {filteredProducts.length}
                              </h6>
                          </div>
                      </div>
                      <div className="row py-5">
                          {
                              filteredProducts.length===0?(
                                  <div className="col text-center text-title">
                                      sorry, no items match your search...
                                  </div>
                              ):(filteredProducts.map(
                                  (product)=>(<Product key={product.id} product={product}/>)))
                          }
                      </div>
                  </div>
              </section>
          }
      }
  </ProductConsumer>;
};

export default Products;
