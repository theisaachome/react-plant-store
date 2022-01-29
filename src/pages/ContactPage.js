import React from 'react';
import Contact from '../components/ContactPage/Contact';
import Hero from '../components/Hero';
import contactBcg from "../images/contactBcg.jpeg";
const ContactPage = () => {
  return (<>
            <Hero img={contactBcg} />
            <Contact></Contact>
  </>);
};

export default ContactPage;
