import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import Featured from '../components/HomePage/Featured';
import Servicce from '../components/HomePage/Servicce';

const HomePage = () => {
  return (
    <>
      <Hero title="Awesome Gadgets" max="true">
        <Link style={{margin:"2rem"}} className='main-link' to="/products">our products</Link>
      </Hero>
      <Servicce/>
      <Featured/>
    </>
  );
};

export default HomePage;
