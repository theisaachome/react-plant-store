import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
const ProductsFilter = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;
        let companies = new Set();
        companies.add('all');
        for(let product in storeProducts){
          companies.add(storeProducts[product]['company']);
        }
        companies=[...companies];
        return (
          <div className="row-my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">Search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* company search */}
                <div>
                  <label htmlFor="company">Company </label>
                  <select
                    className="filter-item"
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={company}
                  >
                    {companies.map((company,index)=><option key={index} value={company}>{company}</option>)}
                  </select>
                </div>
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price:
                      <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    min={min}
                    max={max}
                    className="filter-item"
                    value={price}
                    id="price"
                    onChange={handleChange}
                  />
                </div>
                {/* shipping free search */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductsFilter;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 1rem 2rem;
  label{
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price{
    display: block;
    width: 100%;
    background-color: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
