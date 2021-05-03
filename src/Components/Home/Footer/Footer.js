import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer text-center">
        <p>&copy;Copyright <span style={{color:'white'}}>{(new Date().getFullYear())}</span></p>
          <h6>habib826826@gmail.com || +01733592001</h6>
      </div>

    );
};

export default Footer;