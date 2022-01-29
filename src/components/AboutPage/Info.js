import React from 'react';
import Title from '../Title';
import aboutBcg from "../../images/aboutBcg.jpeg";
const Info = () => {
  return <section className='py-5'>
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                  <img className='img-fluid img-thumbnail'
                  style={{background:'var(--darkGrey)'}}
                   src={aboutBcg} alt="about info"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">

              <Title title="About Us" />
              <p className='text-lead text-muted my-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Dolorum illum molestias impedit nam odit dicta fugiat quis laboriosam itaque sequi.
              </p>
              <p className='text-lead text-muted my-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Dolorum illum molestias impedit nam odit dicta fugiat quis laboriosam itaque sequi.
              </p>
              <button
              style={{marginTop:'2rem'}}
               className='main-link'
               type='button'>
                  More info
              </button>

              </div>
          </div>
      </div>
  </section>;
};

export default Info;
