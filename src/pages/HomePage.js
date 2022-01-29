import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero title="Awesome Gadgets" max="true">
        <Link style={{margin:"2rem"}} className='main-link' to="/products">our products</Link>
      </Hero>
    </>
  );
};

export default HomePage;
