import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import defaultBcg from "../images/defaultBcg.jpeg";
const DefaultPage = () => {
  return (<Hero img={defaultBcg} max="true" title="404">
    <h2 className='text-uppercase'>Page not found.</h2>
    <Link style={{margin:'2rem'}} className='main-link' to="/">return home</Link>
  </Hero>);
};

export default DefaultPage;
