import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrap pb-5">
           <div className="main-info">
               <h1>Welcome to my Portfolio</h1>
               <Typed
               className="typed-text"
               strings={["Web developer", "Web Designer"]}
               typeSpeed={40}
               backSpeed={60}
               loop
               />
               <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    );
};

export default Header;