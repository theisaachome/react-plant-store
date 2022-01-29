import React from 'react';
import Title from '../Title';

const Contact = () => {
  return <section className='container py-5'>
      <div className="row">
          <div className="col-10 mx-auto md-6 my-3">
              <Title title="Contact Us"></Title>
              <form className='mt-5'>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="firstname"  
                        className='form-control'
                        placeholder='john smith' />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        name="email"  
                        className='form-control'
                        placeholder='johnsmith@email.com' />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="subject"  
                        className='form-control'
                        placeholder='important!!!' />
                    </div>
                    <div className="form-group">
                        <textarea 
                        name="message"  
                        className='form-control'
                        placeholder='hello there buddy!'
                        rows="10" >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="send"
                        className='form-control bg-primary text-white' />
                    </div>
              </form>
          </div>
      </div>
  </section>;
};

export default Contact;
