import React from 'react';
import Hero from '../components/Hero';
import singleProductBcg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";
import { Link } from 'react-router-dom';
const SingleProductPage = () => {
  return (<>
     <Hero img={singleProductBcg} title="Product Detail"/>
     <ProductConsumer>
       {
         value=>{
           const {singleProduct,addToCart,loading}=value;
           console.log(singleProduct);
           if(loading){
             return <h2>Loading...</h2>
           }
           const {company,description,id,price,title,image}=singleProduct;
           return <section className='py-5'>
             <div className="container">
               <div className="row">
                 <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                   <img
                  //  for using local image
                    src={`../${image}`}
                     alt={title}
                     className='img-fluid'  />
                 </div>
                 <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                   <h5 className='text-title mb-4'>modal : {title}</h5>
                   <h5 className="text-capitalize text-muted mb-4">company : {company}</h5>
                   <h5 className="text-main text-capitalize  mb-4">Price :$ {price}</h5>
                   <p className="text-capitalize text-title mt-3"> Description : </p>
                   <p>{description}</p>
                   <button onClick={()=>addToCart(id)} className='main-link' style={{margin:"0.75rem"}}>Add to cart</button>
                   <Link to="/products" style={{margin:"0.75rem"}} className='main-link'>
                     More Like this
                   </Link>
                 </div>
               </div>
             </div>
           </section>
         }
       }
     </ProductConsumer>
  </>);
};

export default SingleProductPage;
